import React, { ReactNode, useEffect, useState } from 'react'
import axios from 'axios'
import { POST_TYPES, PostTypesSlugs } from './constants'
import { Post } from 'types/post'

export const storeContext = React.createContext<
  | {
      posts: Post[]
      isLoading: boolean
    }
  | {}
>({})
export const Consumer = storeContext.Consumer

const BASE_URL = '/wp-json/wp/v2/'

const setURL = (postType: PostTypesSlugs, slug: string): string => {
  switch (postType) {
    case POST_TYPES.EXHIBITIONS.slug:
    case POST_TYPES.WORKS.slug:
      if (slug === postType) return `${slug}?_embed&per_page=100`
      return `${postType}?slug=${slug}&_embed`
    case POST_TYPES.PAGES.slug:
      return `pages?slug=${slug}&_embed`
    default:
      return 'pages?slug=home&_embed'
  }
}

interface Props {
  children: ReactNode
  slug?: string
  postType?: PostTypesSlugs
}

export const Provider = ({ children, slug, postType }: Props) => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setPosts([])
    setHasLoaded(false)
  }, [slug, postType])

  useEffect(() => {
    if (
      !isLoading &&
      slug !== undefined &&
      postType !== undefined &&
      !hasLoaded
    ) {
      setIsLoading(true)
      setHasLoaded(true)
      axios
        .get(`${BASE_URL}${setURL(postType, slug)}`)
        .then((response) => setPosts(response.data))
        .finally(() => {
          setIsLoading(false)
        })
    }
    /// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postType, slug, isLoading, hasLoaded])

  return (
    <storeContext.Provider value={{ isLoading, posts }}>
      {children}
    </storeContext.Provider>
  )
}
