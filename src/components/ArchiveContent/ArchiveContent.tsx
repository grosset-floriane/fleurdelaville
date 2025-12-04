import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { POST_TYPES } from '../../context/constants'
import { SPACING, mq } from '../../context/stylesConstants'
import styled from '@emotion/styled'
import SEO from 'components/SEO/SEO'
import ArchiveHeader from 'components/ArchiveHeader/ArchiveHeader'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import ArchiveNav from 'components/ArchiveNav/ArchiveNav'
import useKeyShortcuts from 'hooks/useKeyShortcuts'
import { Post } from 'types/post'
import GridView from './GridView'
import { ViewType } from 'types/viewType'

interface Props {
  postType: string
}

const { scroll: SCROLL, grid: GRID }: { scroll: ViewType; grid: ViewType } = {
  scroll: 'scroll',
  grid: 'grid',
}

const ArchiveContent: React.FC<Props> = ({ postType }) => {
  const { posts, categories } = useContext(storeContext)
  console.log(categories)
  const [postShown, setPostShown] = useState<null | Post>(null)
  const [listViewType, setListViewType] = useState<ViewType>(SCROLL)
  const [index, setIndex] = useState(0)
  const [category, setCategory] = useState('all')
  const titleColor = postShown?.acf.title_color
  const { hash } = useLocation()
  const offsetWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  )
  const isMobile = offsetWidth < Number(mq.tablet)

  const Title = styled.h1`
    margin-top: 11rem;
    margin-left: ${SPACING * 2}rem;
    font-size: 9.6rem;
    font-weight: normal;
    color: ${titleColor};
    ${mq.tablet} {
      font-size: 12rem;
      top: 10rem;
      left: ${SPACING * 3}rem;
    }

    ${mq.desktop} {
      top: 14rem;
      left: ${SPACING * 6}rem;
    }
  `

  const Subtitle = styled.span`
    font-size: 2.8rem;
  `

  const Main = styled.main`
    height: 100vh;

    img {
      height: 100%;
      object-fit: cover;
    }
  `

  const isShowing = false

  const archiveTitle =
    postType === POST_TYPES.EXHIBITIONS.slug
      ? POST_TYPES.EXHIBITIONS.title
      : POST_TYPES.WORKS.title

  const archiveDescription =
    postType === POST_TYPES.EXHIBITIONS.slug
      ? POST_TYPES.EXHIBITIONS.description
      : POST_TYPES.WORKS.description

  const setHashInUrl = (id: number) => {
    const slug = posts[id].slug
    window.history.replaceState(null, '', `#${slug}`)
  }

  const removeHashInUrl = () => {
    window.history.replaceState(null, '', `/${postType}`)
  }

  useEffect(() => {
    const storageViewType: string | null = localStorage.getItem('listViewType')
    if ([SCROLL, GRID].some((type: ViewType) => storageViewType === type)) {
      setListViewType(storageViewType as ViewType)
      if (storageViewType === GRID) {
        removeHashInUrl()
      }
    } else {
      localStorage.setItem('listViewType', GRID)
    }
  }, [])

  useEffect(() => {
    if (posts.length && listViewType === SCROLL) {
      let selectedId = 0
      console.log('hash', hash)
      if (hash) {
        const id = posts.findIndex(
          ({ slug }: { slug: string }) => slug === hash.substring(1),
        )
        selectedId = id >= 0 ? id : 0
      }
      setPostShown(posts[selectedId])
      setHashInUrl(selectedId)
      setIndex(selectedId)
    }
  }, [posts, listViewType])

  const addClassNameOnHover = useCallback(() => {
    const titleLink = document.getElementsByClassName('work-title')
    titleLink[0].classList.add('hover-image')
  }, [postShown])

  const removeClassNameOnHover = useCallback(() => {
    const titleLink = document.getElementsByClassName('work-title')
    titleLink[0].classList.remove('hover-image')
  }, [postShown])

  useEffect(() => {
    let imageLink: null | HTMLElement = null
    if (postShown) {
      imageLink = document.getElementById('work-link')
      imageLink?.addEventListener('mouseover', addClassNameOnHover)
      imageLink?.addEventListener('mouseout', removeClassNameOnHover)
    }

    return () => {
      imageLink?.removeEventListener('mouseout', addClassNameOnHover)
      imageLink?.removeEventListener('mouseout', removeClassNameOnHover)
    }
  }, [postShown])

  const goToPrevious = () => {
    const prevId = index - 1
    if (prevId >= 0) {
      setPostShown(posts[prevId])
      setHashInUrl(prevId)
      setIndex(prevId)
    }
  }

  const goToNext = () => {
    const nextId = index + 1
    if (nextId < posts.length) {
      setPostShown(posts[nextId])
      setHashInUrl(nextId)
      setIndex(nextId)
    }
  }

  const postLink = postShown?.link
  const imageMobile = postShown?.acf.mobile_vertical
  const imageTablet = postShown?._embedded['wp:featuredmedia'][0].source_url
  const image = isMobile ? imageMobile || imageTablet : imageTablet

  useKeyShortcuts({ goToNext, goToPrevious })
  const toggleListViewType = () => {
    if (listViewType === SCROLL) removeHashInUrl()
    localStorage.setItem(
      'listViewType',
      listViewType === SCROLL ? GRID : SCROLL,
    )
    setListViewType(listViewType === SCROLL ? GRID : SCROLL)
  }

  return (
    <>
      <ArchiveHeader
        titleColor={listViewType === SCROLL ? titleColor : 'black'}
        toggleListViewType={toggleListViewType}
        listViewType={listViewType}
      />

      {posts && (
        <Main id="main" className="Archive">
          <Title>Works</Title>
          {categories.length > 0 && (
            <ul
              style={{
                padding: `${SPACING * 2}rem`,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.6rem',
                justifyContent: 'flex-end',
              }}
            >
              <li>
                <Link
                  to={`/works`}
                  style={{ padding: '8px 0', textDecoration: 'none' }}
                >
                  All
                </Link>
              </li>
              {categories.map(
                ({ name, slug }: { name: string; slug: string }) => (
                  <li>
                    <Link
                      to={`?filter=${slug}`}
                      style={{ padding: '8px 0', textDecoration: 'none' }}
                    >
                      {name}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          )}
          <GridView posts={posts} />
        </Main>
      )}
    </>
  )
}

export default ArchiveContent
