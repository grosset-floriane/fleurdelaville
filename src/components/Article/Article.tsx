import React from 'react'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import FeaturedImage from 'components/ArchiveContent/FeaturedImage'
import styled from '@emotion/styled'
import { SPACING } from 'context/stylesConstants'

const Article = () => {
  const posts = useContext(storeContext)

  if (!posts) return
  const Figure = styled.figure`
    min-height: 75vh;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  `

  const Section = styled.section`
    padding: ${SPACING * 2}rem;
    p {
      line-height: 1.5;
    }
  `
  const StickyTitle = styled.h1`
    position: sticky;
    top: 9rem;
    right: 0;
    text-align: center;
    padding: 0 ${SPACING * 2}rem;
    font-size: 6rem;
    font-weight: normal;
    color: white;
    z-index: 9999;
  `

  return posts.map(({ title, content, slug, _links }) => (
    <article key={slug}>
      <Figure>
        <FeaturedImage
          url={_links['wp:featuredmedia'][0].href}
          alt={title.rendered}
          isSingle
        />
        <StickyTitle>{title.rendered}</StickyTitle>
      </Figure>

      <Section
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
    </article>
  ))
}

export default Article
