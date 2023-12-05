import React from 'react'
import PrevNext from './PrevNext'
import styled from '@emotion/styled'
import { SPACING, TITLE_FONT, mq } from 'context/stylesConstants'

interface Props {
  titleColor?: string
  goToPrevious: () => void
  goToNext: () => void
  title?: string
  isFirstItem: boolean
  isLastItem: boolean
  link?: string
}

const ArchiveNav: React.FC<Props> = ({
  titleColor,
  goToPrevious,
  goToNext,
  title,
  isFirstItem,
  isLastItem,
  link,
}) => {
  const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${SPACING * 2}rem;

    ${mq.tablet} {
      padding: ${SPACING * 3}rem;
      bottom: ${SPACING}rem;
    }

    ${mq.desktop} {
      padding: ${SPACING * 6}rem;
    }
  `
  const Title = styled.h2`
    text-align: center;
    font-family: ${TITLE_FONT};
    font-size: 3rem;
    font-weight: normal;

    ${mq.tablet} {
      font-size: 7rem;
    }

    a {
      text-decoration: none;

      &:hover,
      &.hover-image {
        text-decoration: underline;
      }
    }

    a,
    a:visited,
    a:hover,
    a:active,
    a:focus {
      color: ${titleColor};
    }
  `
  const PlaceHolder = styled.div`
    width: 4rem;
    height: 4rem;

    ${mq.tablet} {
      width: 5rem;
      height: 5rem;
    }

    ${mq.desktop} {
      width: 4rem;
      height: 4rem;
    }
  `
  return (
    <Nav>
      {!isFirstItem ? (
        <PrevNext isPrevious titleColor={titleColor} onClick={goToPrevious} />
      ) : (
        <PlaceHolder />
      )}
      <Title>
        <a className="work-title" href={link}>
          {title}
        </a>
      </Title>
      {!isLastItem ? (
        <PrevNext
          isPrevious={false}
          titleColor={titleColor}
          onClick={goToNext}
        />
      ) : (
        <PlaceHolder />
      )}
    </Nav>
  )
}

export default ArchiveNav
