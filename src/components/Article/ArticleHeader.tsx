import React from 'react'
import FeaturedImage from 'components/Article/FeaturedImage'
import styled from '@emotion/styled'
import { SPACING, mq } from 'context/stylesConstants'
import SEO from 'components/SEO/SEO'
import Header from 'components/Header/Header'

interface Props {
  imageSrc: string
  title: string
  description: string
  titleColor?: string
  imagePosition: string
}

const ArticleHeader: React.FC<Props> = ({
  imageSrc,
  title,
  description,
  titleColor,
  imagePosition,
}) => {
  const titleLength = title.length

  const Title = styled.h1`
    position: absolute;
    line-height: 1;
    text-align: right;
    padding: 0 ${SPACING * 2}rem;
    font-size: ${titleLength > 15 ? '4rem' : '6rem'};
    font-weight: normal;
    z-index: 2;
    bottom: -3.5rem;
    right: 0;

    ${mq.tablet} {
      font-size: ${titleLength > 15 ? '10rem' : '12rem'};
      padding: 0 ${SPACING * 3}rem;
      bottom: -7rem;
    }

    ${mq.desktop} {
      right: ${SPACING * 2}rem;
    }
  `
  const ArticleHeader = styled.div`
    height: 75vh;

    img {
      position: absolute;
      min-height: 75vh;
      width: 100%;
      top: 0;
      left: 0;
    }
  `

  const Container = styled.div`
    position: relative;
    height: 75vh;
    max-width: ${120 + SPACING * 2 * 2}rem;
    margin: auto;
  `

  return (
    <ArticleHeader>
      <Container>
        <Header isSingle titleColor={titleColor} />
        <SEO title={title} description={description} />
        <Title>{title}</Title>
      </Container>
      <FeaturedImage src={imageSrc} alt={title} imagePosition={imagePosition} />
    </ArticleHeader>
  )
}

export default ArticleHeader
