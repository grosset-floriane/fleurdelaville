import React from 'react'
import styled from '@emotion/styled'
import { SPACING, mq } from 'context/stylesConstants'
interface Props {
  content: HTMLCollection
}

const ArticleContent: React.FC<Props> = ({ content }) => {
  const Section = styled.section`
    padding: ${SPACING * 2}rem;

    ${mq.tablet} {
      padding: ${SPACING * 3}rem;
    }

    ${mq.desktop} {
      padding: ${SPACING * 3}rem ${SPACING * 5}rem;
    }

    ${mq.largeDesktop} {
      padding: ${SPACING * 3}rem ${SPACING * 5}rem;
      max-width: ${120 + SPACING * 5}rem;
      margin: auto;
    }

    p {
      line-height: 1.5;
      margin: ${SPACING * 1.5}rem 0;

      ${mq.tablet} {
        font-size: 1.6rem;
        max-width: 60rem;
      }

      ${mq.tablet} {
        font-size: 1.8rem;
        max-width: 70rem;
      }

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
      margin-top: ${SPACING * 3}rem;

      ${mq.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${SPACING * 3}rem;

        &.columns-2 figure {
          flex: 45% 1 0;
        }
      }
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
