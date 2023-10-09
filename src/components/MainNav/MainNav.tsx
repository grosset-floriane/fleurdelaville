import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SPACING, STYLES_CHECK_BACKGROUND } from 'context/stylesConstants'
import { LinkState } from 'types/links'

const LINKS = [
  { link: '/works', label: 'Works' },
  { link: '/exhibitions', label: 'Exhibitions' },
  { link: '/contact', label: 'Contact' },
  { link: '/about', label: 'About' },
]

const MainNav = () => {
  const NavList = styled.ul`
    display: flex;
    padding: 0;
    gap: ${SPACING * 2}rem;

    ${STYLES_CHECK_BACKGROUND}

    a {
      font-size: 1.4rem;
      &.active {
        text-decoration: underline;
      }
    }
  `
  return (
    <nav>
      <NavList className="target">
        {LINKS.map(({ link, label }) => (
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
