import React from 'react'
import { Post } from 'types/post'
import styled from '@emotion/styled'
import GridListItem from './GridListItem'
import { mq } from 'context/stylesConstants'

interface Props {
  posts: Post[]
}

const GridView: React.FC<Props> = ({ posts }) => {
  const GridViewList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 5rem;
    ${mq.tablet} {
      margin-top: 9.5rem;
    }
  `

  return (
    <GridViewList>
      {posts.map(({ _embedded, title, link, acf }: Post) => (
        <GridListItem
          key={title.rendered}
          imageURL={_embedded['wp:featuredmedia'][0].source_url}
          link={link}
          title={title.rendered}
          titleColor={acf.title_color}
        />
      ))}
    </GridViewList>
  )
}

export default GridView
