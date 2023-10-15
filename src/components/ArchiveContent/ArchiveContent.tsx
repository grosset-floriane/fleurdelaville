import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import { Link, useSearchParams } from 'react-router-dom'
import FeaturedImage from './FeaturedImage'
import styled from '@emotion/styled'
import {
  STYLES_CHECK_BACKGROUND,
  TITLE_FONT,
  mq,
} from 'context/stylesConstants'
import { Post } from 'types/post'
import { backgroundCheck } from 'hooks/useBackgroundCheck'

const ArchiveContent = () => {
  const posts = useContext(storeContext)
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

  if (!filteredPosts) return null

  const ArchiveList = styled.ul`
    font-family: sans-serif;
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    background-color: #caecf8;
  `

  const ListItem = styled.li`
    min-width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
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
  `

  return (
    <ArchiveList>
      {filteredPosts.map(({ title, slug, _embedded, link: postLink }) => {
        return (
          <ListItem key={slug}>
            <Link to={postLink}>
              <ItemTitle className="target">{title.rendered}</ItemTitle>
              <FeaturedImage
                src={_embedded['wp:featuredmedia'][0].source_url}
                alt={title.rendered}
              />
            </Link>
          </ListItem>
        )
      })}
    </ArchiveList>
  )
}

export default ArchiveContent
