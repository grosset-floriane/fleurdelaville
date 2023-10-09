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
    min-height: calc(75vh + 3.5rem);
    display: flex;
    align-items: end;
    justify-content: end;

    img {
      position: absolute;
      min-height: 75vh;
      top: 0;
      left: 0;
    }
  `

  const Section = styled.section`
    padding: ${SPACING * 2}rem;
    p {
      line-height: 1.5;
      margin: ${SPACING * 1.5}rem 0;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  `
  const StickyTitle = styled.h1`
    position: relative;
    line-height: 1;
    text-align: right;
    padding: 0 ${SPACING * 2}rem;
    font-size: 6rem;
    font-weight: normal;
    z-index: 2;
  `

  return posts.map(({ title, content, slug, _embedded }) => (
    <article key={slug}>
      <Figure>
        <FeaturedImage
          src={_embedded['wp:featuredmedia'][0].source_url}
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
