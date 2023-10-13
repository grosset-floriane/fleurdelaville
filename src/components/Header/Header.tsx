import React from 'react'
import MainNav from '../MainNav/MainNav'
import styled from '@emotion/styled'
import {
  SPACING,
  TITLE_FONT,
  STYLES_CHECK_BACKGROUND,
} from 'context/stylesConstants'

interface Props {
  isHomePage?: boolean
}

const Header: React.FC<Props> = ({ isHomePage }) => {
  const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: ${isHomePage
      ? `${SPACING * 3}rem ${SPACING * 4}rem`
      : `0 ${SPACING * 2}rem`};
    z-index: 999;
  `

  const SiteTitle = styled.a`
    font-family: ${TITLE_FONT};
    font-size: ${isHomePage ? '9rem' : '4.5rem'};
    line-height: ${isHomePage ? '0.75' : 'initial'};
    ${isHomePage && `margin-bottom: ${SPACING}rem; display: block;`}
    ${STYLES_CHECK_BACKGROUND}
  `

  return (
    <StyledHeader>
      <SiteTitle href="/" className="target">
        Fleur Delaville
      </SiteTitle>
      <MainNav />
    </StyledHeader>
  )
}

export default Header
