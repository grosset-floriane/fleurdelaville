import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import { Link, useSearchParams } from 'react-router-dom'
import FeaturedImage from './FeaturedImage'
import styled from '@emotion/styled'
import { TITLE_FONT } from 'context/stylesConstants'
import { Post } from 'types/post'

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
    }
  }, [posts, workType])

  if (!filteredPosts) return null

  const ArchiveList = styled.ul`
    font-family: sans-serif;
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
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
  `

  return (
    <ArchiveList>
      {filteredPosts.map(({ title, slug, _links, link: postLink }) => {
        return (
          <ListItem key={slug}>
            <ItemTitle>{title.rendered}</ItemTitle>
            <Link to={postLink}>
              <FeaturedImage
                url={_links['wp:featuredmedia'][0].href}
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
