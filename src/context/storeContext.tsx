import React, { ReactNode, useEffect, useState } from 'react'
import axios from 'axios'
import { POST_TYPES, PostTypesSlugs } from './constants'

interface Post {
  title: { rendered: string }
  content: { rendered: HTMLCollection }
  slug: string
  link: string
  _links: {
    ['wp:featuredmedia']: { href: string }[]
  }
}

export const storeContext = React.createContext<null | Post[]>(null)
export const Consumer = storeContext.Consumer

const BASE_URL = '/wp-json/wp/v2/'

const setURL = (postType: PostTypesSlugs, slug: string): string => {
  switch (postType) {
    case POST_TYPES.EXHIBITIONS.slug:
    case POST_TYPES.WORKS.slug:
      if (slug === postType) return slug
      return `${postType}?slug=${slug}`
    case POST_TYPES.PAGES.slug:
      return `pages?slug=${slug}`
    default:
      return 'pages?=home'
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

  useEffect(() => {
    if (!isLoading && slug !== undefined && postType !== undefined) {
      setIsLoading(true)
      axios
        .get(`${BASE_URL}${setURL(postType, slug)}`)
        .then((response) => setPosts(response.data))
        .finally(() => setIsLoading(false))
    }
  }, [postType, slug, isLoading])

  return <storeContext.Provider value={posts}>{children}</storeContext.Provider>
}
