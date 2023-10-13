import React from 'react'
import styled from '@emotion/styled'
import { SPACING } from 'context/stylesConstants'
interface Props {
  content: HTMLCollection
}

const ArticleContent: React.FC<Props> = ({ content }) => {
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

    a {
      text-decoration: underline;
      &:hover {
        color: #710505;
      }
    }

    .wp-block-gallery {
      display: flex;
      gap: ${SPACING}rem;
      flex-direction: column;
    }

    img {
      height: auto;
    }
  `

  return (
    <Section
      className="post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default ArticleContent
