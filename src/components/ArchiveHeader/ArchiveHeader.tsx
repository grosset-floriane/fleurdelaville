import React, { useState } from 'react'
import MenuIcon from './MenuIcon'
import { SPACING, TITLE_FONT, mq } from 'context/stylesConstants'
import styled from '@emotion/styled'
import Navigation from './Navigation'

interface Props {
  titleColor?: string
}

const ArchiveHeader: React.FC<Props> = ({ titleColor = 'black' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  const SiteTitle = styled.a`
    font-family: ${TITLE_FONT};
    font-size: 4.5rem;
    line-height: initial;
    text-decoration: none;

    ${mq.tablet} {
      font-size: 7rem;
    }

    &,
    &:hover,
    &:visited,
    &:active,
    &:focus {
      color: ${isOpen ? 'black' : titleColor};
    }
  `

  const Header = styled.header`
    padding: 0 ${SPACING * 2}rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    ${isOpen &&
    'background-image: url("/wp-content/themes/fleurdelaville-react2/react-src/src/assets/images/menu-image-mobile.jpg"); height: 100vh;'}
    ${mq.tablet} {
      padding: ${SPACING}rem ${SPACING * 3}rem;
    }

    ${mq.desktop} {
      padding: ${SPACING}rem ${SPACING * 6}rem;
    }
  `

  const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `

  const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    padding-right: 0;
    margin-right: -${SPACING}rem;
    cursor: pointer;
    transition: ease-in 500ms transform;

    &:hover {
      transform: rotate(10deg);
      transition: ease-in 500ms transform;
    }
  `

  return (
    <>
      <Header>
        <FlexContainer>
          <SiteTitle href="/">Fleur Delaville</SiteTitle>
          <MenuButton
            onClick={onClick}
            aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
            aria-controls="main-navigation"
          >
            <MenuIcon titleColor={isOpen ? 'black' : titleColor} />
          </MenuButton>
        </FlexContainer>
        {isOpen && <Navigation isOpen={isOpen} />}
      </Header>
    </>
  )
}

export default ArchiveHeader
