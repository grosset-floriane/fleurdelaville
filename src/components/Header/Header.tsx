import React from 'react'
import MainNav from '../MainNav/MainNav'
import styled from '@emotion/styled'
import {
  SPACING,
  TITLE_FONT,
  STYLES_CHECK_BACKGROUND,
  mq,
} from 'context/stylesConstants'
import SkipToContent from './SkipToContent'

interface Props {
  isHomePage?: boolean
  isSingle?: boolean
}

const Header: React.FC<Props> = ({ isHomePage, isSingle }) => {
  const StyledHeader = styled.header`
    position: ${isSingle ? 'sticky' : 'fixed'};
    margin-bottom: ${isSingle ? SPACING * 5 : 0}rem;
    top: 0;
    left: 0;
    padding: ${isHomePage
      ? `${SPACING * 3}rem ${SPACING * 4}rem`
      : `0 ${SPACING * 2}rem`};
    z-index: 999;

    ${mq.tablet} {
      padding: ${isHomePage
        ? `${SPACING * 4}rem ${SPACING * 7}rem`
        : `0 ${SPACING * 3}rem`};
    }

    ${mq.desktop} {
      padding: ${isHomePage
        ? `${SPACING * 6}rem ${SPACING * 9}rem`
        : `0 ${SPACING * 5}rem`};
    }
  `

  const SiteTitle = styled.a`
    font-family: ${TITLE_FONT};
    font-size: ${isHomePage ? '9rem' : '4.5rem'};
    line-height: ${isHomePage ? '0.75' : 'initial'};
    ${isHomePage && `margin-bottom: ${SPACING}rem; display: block;`}
    ${STYLES_CHECK_BACKGROUND}

    ${mq.tablet} {
      font-size: ${isHomePage ? '15rem' : '8rem'};
      ${isHomePage && `width: 40rem`}
    }

    ${mq.desktop} {
      font-size: ${isHomePage ? '20rem' : '10rem'};
      ${isHomePage && `width: 60rem`}
    }
  `

  return (
    <StyledHeader>
      {!isHomePage && <SkipToContent />}
      <SiteTitle href="/" className="target">
        Fleur Delaville
      </SiteTitle>
      <MainNav isHomePage={isHomePage} />
    </StyledHeader>
  )
}

export default Header
