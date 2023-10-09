import React from 'react'
import FeaturedImage from 'components/ArchiveContent/FeaturedImage'
import styled from '@emotion/styled'
import { SPACING } from 'context/stylesConstants'

interface Props {
  imageSrc: string
  title: string
}

const ArticleHeader: React.FC<Props> = ({ imageSrc, title }) => {
  const titleLength = title.length

  const Title = styled.h1`
    position: relative;
    line-height: 1;
    text-align: right;
    padding: 0 ${SPACING * 2}rem;
    font-size: ${titleLength > 15 ? '4rem' : '6rem'};
    font-weight: normal;
    z-index: 2;
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
  `

  return (
    <Header>
      <FeaturedImage src={imageSrc} alt={title} isSingle />
      <Title>{title}</Title>
    </Header>
  )
}

export default ArticleHeader
