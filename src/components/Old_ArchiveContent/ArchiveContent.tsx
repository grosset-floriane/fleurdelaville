import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import { Link, useSearchParams } from 'react-router-dom'
import FeaturedImage from '../Article/FeaturedImage'
import styled from '@emotion/styled'
import {
  SPACING,
  STYLES_CHECK_BACKGROUND,
  TITLE_FONT,
  mq,
} from 'context/stylesConstants'
import { Post } from 'types/post'
import { backgroundCheck } from 'hooks/useBackgroundCheck'
import Loader from 'components/Loader/Loader'

const ArchiveContent = () => {
  const { isLoading, posts } = useContext(storeContext) || {}
  const [filteredPosts, setFilteredPosts] = useState<Post[] | []>([])
  const [searchParams] = useSearchParams()
  const workType = searchParams.get('work-types')

  useEffect(() => {
    if (posts) {
      const newFilteredPosts: Post[] = workType
        ? posts.filter((item) => item['work-types'][0] === Number(workType))
        : posts
      setFilteredPosts(newFilteredPosts)
      backgroundCheck.refresh()
    }
  }, [posts, workType])

  if (isLoading) return <Loader />

  if (!filteredPosts.length) return null

  const DARK_GREY = '#000000c3'
  const LIGHT_GREY = '#cecece'

  const ArchiveList = styled.ul`
    font-family: sans-serif;
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    overflow-y: hidden;
    height: calc(100vh);

    ${mq.desktop} {
      &::-webkit-scrollbar {
        height: 1.5rem;
      }

      &::-webkit-scrollbar-track {
        background: ${LIGHT_GREY}; /* color of the tracking area */
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${DARK_GREY}; /* color of the scroll thumb */
        border-top: ${LIGHT_GREY} 3px solid;
        border-bottom: ${LIGHT_GREY} 2px solid;
        border-radius: 1rem;
      }
    }
  `

  const ListItem = styled.li`
    min-width: calc(100vw - ${SPACING * 4}rem);
    max-width: calc(100vw - ${SPACING * 4}rem);
    height: calc(100vh - 1.5rem);
    scroll-snap-align: center;
    text-align: center;
    position: relative;

    ${mq.tablet} {
      min-width: calc(100vw - ${SPACING * 6}rem);
      max-width: calc(100vw - ${SPACING * 6}rem);
    }

    ${mq.desktop} {
      min-width: calc(100vw - ${SPACING * 10}rem);
      max-width: calc(100vw - ${SPACING * 10}rem);
    }

    &:first-child,
    &:last-child {
      min-width: calc(100vw - ${SPACING * 2}rem);
      max-width: calc(100vw - ${SPACING * 2}rem);

      ${mq.tablet} {
        min-width: calc(100vw - ${SPACING * 3}rem);
        max-width: calc(100vw - ${SPACING * 3}rem);
      }

      ${mq.desktop} {
        min-width: calc(100vw - ${SPACING * 5}rem);
        max-width: calc(100vw - ${SPACING * 5}rem);
      }
    }

    &:first-child {
      scroll-snap-align: start;
    }

    &:last-child {
      scroll-snap-align: end;
    }
    // LINKS STYLES
    & > a {
      &:focus-visible {
        outline: none;
      }

      &:focus-visible,
      &:hover {
        color: #000;
        h2::after {
          height: 0.7rem;
          transition: height 100ms ease-in-out;
        }
      }
    }
  `

  const ItemTitle = styled.h2`
    position: absolute;
    bottom: 6rem;
    left: 0;
    width: 100%;
    text-align: center;
    font-family: ${TITLE_FONT};
    font-size: 3rem;
    font-weight: normal;

    ${STYLES_CHECK_BACKGROUND}

    ${mq.tablet} {
      font-size: 4.5rem;
      bottom: 8rem;
    }

    ${mq.desktop} {
      font-size: 5.5rem;
      bottom: 5rem;
    }

    &::after {
      content: ' ';
      background-color: black;
      width: 10rem;
      height: 0rem;
      display: block;
      transition: height 500ms ease-in-out;
      margin: auto;

      ${mq.desktop} {
        width: 20rem;
      }
    }
  `

  const onFocus: React.FocusEventHandler<HTMLAnchorElement> = (e) => {
    const focusedElement = e.target as HTMLElement
    const offsetLeft = focusedElement.getBoundingClientRect().left
    const galleryElement = document.getElementById('gallery')
    if (galleryElement) {
      galleryElement.scrollBy({ top: 0, left: offsetLeft, behavior: 'smooth' })
    }
  }

  return (
    <ArchiveList id="gallery">
      {filteredPosts.map(({ title, slug, _embedded, link: postLink, acf }) => {
        return (
          <ListItem key={slug}>
            <Link to={postLink} onFocus={onFocus}>
              <ItemTitle
                className={`background--${
                  acf?.title_color === 'white' ? 'dark' : 'light'
                }`}
              >
                {title.rendered}
              </ItemTitle>
              <FeaturedImage
                src={_embedded['wp:featuredmedia'][0].source_url}
                alt=""
              />
            </Link>
          </ListItem>
        )
      })}
    </ArchiveList>
  )
}

export default ArchiveContent
