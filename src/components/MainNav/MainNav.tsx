import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SPACING, STYLES_CHECK_BACKGROUND, mq } from 'context/stylesConstants'
import { LinkState } from 'types/links'

const LINKS = [
  { link: '/works', label: 'Works' },
  { link: '/exhibitions', label: 'Exhibitions' },
  { link: '/contact', label: 'Contact' },
  { link: '/about', label: 'About' },
]

interface Props {
  isHomePage?: boolean
  isFooter?: boolean
}

const MainNav: React.FC<Props> = ({ isHomePage, isFooter }) => {
  const NavList = styled.ul`
    display: flex;
    padding: 0;
    gap: ${SPACING * 2}rem;

    ${mq.tablet} {
      ${isHomePage && 'justify-content: flex-end;'}
    }

    ${!isFooter && STYLES_CHECK_BACKGROUND}

    a {
      font-size: 1.4rem;
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
