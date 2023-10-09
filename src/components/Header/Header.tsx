import React from 'react'
import MainNav from '../MainNav/MainNav'
import styled from '@emotion/styled'
import {
  SPACING,
  TITLE_FONT,
  STYLES_CHECK_BACKGROUND,
} from 'context/stylesConstants'

const Header = () => {
  const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 ${SPACING * 2}rem;
    z-index: 999;
  `

  const SiteTitle = styled.a`
    font-family: ${TITLE_FONT};
    font-size: 4.5rem;
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
