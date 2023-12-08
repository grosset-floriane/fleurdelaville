import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SPACING, STYLES_CHECK_BACKGROUND, mq } from 'context/stylesConstants'
import { LinkState } from 'types/links'
import { MENU_LINKS } from 'context/constants'

interface Props {
  isHomePage?: boolean
  isFooter?: boolean
  className?: string
}

const MainNav: React.FC<Props> = ({ isHomePage, isFooter, className }) => {
  const NavList = styled.ul`
    display: flex;
    padding: 0;
    gap: ${SPACING * 2}rem;

    ${mq.tablet} {
      ${isHomePage && 'justify-content: flex-end;'}
    }

    ${!isFooter && STYLES_CHECK_BACKGROUND}

    a {
      font-size: 1.6rem;
      padding: ${SPACING}rem 0;
      text-decoration: none;
      &.active {
        text-decoration: underline;
      }

      ${mq.tablet} {
        font-size: 2rem;
      }
    }
  `
  return (
    <nav>
      <NavList className={className}>
        {MENU_LINKS.map(({ link, label }) => (
          <li key={link}>
            <NavLink
              to={link}
              className={({ isActive, isPending }: LinkState) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </NavList>
    </nav>
  )
}

export default MainNav
