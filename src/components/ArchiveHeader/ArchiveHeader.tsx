import React, { useState } from 'react'
import MenuIcon from './MenuIcon'
import { SPACING, TITLE_FONT, mq } from 'context/stylesConstants'
import styled from '@emotion/styled'
import Navigation from './Navigation'
import { ViewType } from 'types/viewType'

interface Props {
  titleColor?: string
  toggleListViewType: () => void
  listViewType: ViewType
}

const ArchiveHeader: React.FC<Props> = ({
  titleColor = 'black',
  toggleListViewType,
  listViewType,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  const SiteTitle = styled.a`
    font-family: ${TITLE_FONT};
    font-size: 4.5rem;
    line-height: initial;
    text-decoration: none;
    position: relative;

    ${mq.tablet} {
      font-size: 7rem;
    }

    ${mq.desktop} {
      &.grid::before {
        content: ' ';
        display: block;
        position: absolute;
        top: ${SPACING * 2}rem;
        left: 0;
        width: 33rem;
        height: 4rem;
        background-color: #ffffffb3;
        z-index: -1;
      }
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
      ${isOpen &&
      'background-image: url("/wp-content/themes/fleurdelaville-react2/react-src/src/assets/images/menu-image-tablet.jpg");'}
    }

    ${mq.desktop} {
      ${listViewType === 'grid' && 'background-color: transparent'}
      padding: ${SPACING}rem ${SPACING * 6}rem;
      ${isOpen &&
      'background-image: url("/wp-content/themes/fleurdelaville-react2/react-src/src/assets/images/menu-image-desktop.jpg");'}
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
    position: relative;

    ${mq.desktop} {
      &.grid::before {
        content: ' ';
        display: block;
        position: absolute;
        top: ${SPACING * 2}rem;
        left: 0;
        width: 8.5rem;
        height: 4rem;
        background-color: #ffffffb3;
        z-index: -1;
      }
    }

    &:hover {
      transform: rotate(10deg);
      transition: ease-in 500ms transform;
    }
  `

  return (
    <>
      <Header>
        <FlexContainer>
          <SiteTitle href="/" className={!isOpen ? listViewType : ''}>
            Fleur Delaville
          </SiteTitle>
          <MenuButton
            onClick={onClick}
            aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
            aria-controls="main-navigation"
            className={!isOpen ? listViewType : ''}
          >
            <MenuIcon titleColor={isOpen ? 'black' : titleColor} />
          </MenuButton>
        </FlexContainer>
        {isOpen && (
          <Navigation
            isOpen={isOpen}
            onClick={onClick}
            toggleListViewType={toggleListViewType}
            listViewType={listViewType}
          />
        )}
      </Header>
    </>
  )
}

export default ArchiveHeader
