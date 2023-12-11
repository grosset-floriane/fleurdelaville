import styled from '@emotion/styled'
import React from 'react'
import { mq, SPACING, TITLE_FONT } from 'context/stylesConstants'

interface Props {
  imageURL: string
  link: string
  title: string
  titleColor: string
}

const GridListItem: React.FC<Props> = ({
  imageURL,
  link,
  title,
  titleColor,
}) => {
  const ListItem = styled.li`
    width: 100%;
    aspect-ratio: 4/3;
    position: relative;

    ${mq.tablet} {
      width: 50%;
    }

    ${mq.desktop} {
      width: calc(100% / 3);
    }
  `
  const Link = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    color: ${titleColor};
    text-decoration: none;
    background-color: ${titleColor === 'black' ? '#ffffff2f' : '#00000046'};

    &:hover {
      text-decoration: underline;
      color: ${titleColor};
      background-color: transparent;
    }

    &:focus-visible {
      outline: none;
      text-decoration: underline;
      color: ${titleColor};
      background-color: transparent;
    }
  `
  const Title = styled.h2`
    text-align: center;
    margin-bottom: ${SPACING}rem;
    color: ${titleColor};
    font-family: ${TITLE_FONT};
  `
  return (
    <ListItem>
      <img src={imageURL} />
      <Link href={link}>
        <Title>{title}</Title>
      </Link>
    </ListItem>
  )
}

export default GridListItem
