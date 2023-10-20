import React from 'react'
import FeaturedImage from 'components/ArchiveContent/FeaturedImage'
import styled from '@emotion/styled'
import { SPACING, mq } from 'context/stylesConstants'
import SEO from 'components/SEO/SEO'

interface Props {
  imageSrc: string
  title: string
  description: string
}

const ArticleHeader: React.FC<Props> = ({ imageSrc, title, description }) => {
  const titleLength = title.length

  const Title = styled.h1`
    position: relative;
    line-height: 1;
    text-align: right;
    padding: 0 ${SPACING * 2}rem;
    font-size: ${titleLength > 15 ? '4rem' : '6rem'};
    font-weight: normal;
    z-index: 2;

    ${mq.tablet} {
      font-size: ${titleLength > 15 ? '10rem' : '12rem'};
      padding: 0 ${SPACING * 3}rem;
    }
  `
  const Header = styled.header`
    min-height: calc(75vh + ${titleLength > 15 ? '2.7rem' : '3.5rem'});
    display: flex;
    align-items: end;
    justify-content: end;

    img {
      position: absolute;
      min-height: 75vh;
      width: 100%;
      top: 0;
      left: 0;
    }

    ${mq.tablet} {
      min-height: calc(75vh + ${titleLength > 15 ? '7rem' : '8.5rem'});
    }
  `

  return (
    <Header>
      <SEO title={title} description={description} />
      <FeaturedImage src={imageSrc} alt={title} isSingle />
      <Title>{title}</Title>
    </Header>
  )
}

export default ArticleHeader
