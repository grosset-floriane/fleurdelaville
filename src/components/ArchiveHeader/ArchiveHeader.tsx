import React, { useState } from 'react'
import MenuIcon from './MenuIcon'
import { SPACING, TITLE_FONT, mq } from 'context/stylesConstants'
import styled from '@emotion/styled'
import Navigation from './Navigation'
import { ViewType } from 'types/viewType'
import { ArchiveTitle } from './ArchiveTitle'

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
    line-height: 1;
    margin: 1.6rem 0 0.8rem;
    text-decoration: none;
    position: relative;
    background-color: #ffffffb3;

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
  const BASE_URL = '/wp-content/themes/fleurdelaville/static/images/menu-image'
  const Header = styled.header`
    padding: 0 ${SPACING * 2}rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    /* background-color: #ffffffb3; */

    ${isOpen &&
    `background-image: url("${BASE_URL}-mobile.jpg"); height: 100vh;`}

    ${mq.tablet} {
      padding: ${SPACING}rem ${SPACING * 3}rem;
      ${isOpen && `background-image: url("${BASE_URL}-tablet.jpg");`}
    }

    ${mq.desktop} {
      ${listViewType === 'grid' && 'background-color: transparent'}
      padding: ${SPACING}rem ${SPACING * 6}rem;
      background-color: transparent;
      ${isOpen && `background-image: url("${BASE_URL}-desktop.jpg");`};
    }
  `

  const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `

  const MenuItem = styled.a`
    padding: 0 3px;
    text-decoration: none;
    line-height: 1.1;
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
        </FlexContainer>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <nav style={{ width: '100%' }}>
            <ul
              style={{
                display: 'flex',
                gap: '0.8rem',
                padding: 0,
                backgroundColor: '#ffffffb3',
                width: 'fit-content',
              }}
            >
              <li>
                <MenuItem href="/works">Works</MenuItem>
              </li>
              <li>
                <MenuItem href="/exhibitions">Exhibitions</MenuItem>
              </li>
              <li>
                <MenuItem href="/contact">Contact</MenuItem>
              </li>
              <li>
                <MenuItem href="/about">About</MenuItem>
              </li>
            </ul>
          </nav>
        </div>
      </Header>
    </>
  )
}

export default ArchiveHeader
