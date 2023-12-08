import styled from '@emotion/styled'
import React from 'react'
import { MENU_LINKS } from 'context/constants'
import { SPACING, mq } from 'context/stylesConstants'
import { NavLink } from 'react-router-dom'
import { LinkState } from 'types/links'
import { ViewType } from 'types/viewType'

interface Props {
  isOpen: boolean
  onClick: () => void
  toggleListViewType: () => void
  listViewType: ViewType
}

const Navigation: React.FC<Props> = ({
  isOpen,
  onClick,
  listViewType,
  toggleListViewType,
}) => {
  const Nav = styled.nav``
  const List = styled.ul`
    padding: 0;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    gap: ${SPACING}rem;
  `
  const MenuItem = styled.li`
    padding: 0;
    a {
      padding: ${SPACING}rem 0;
      display: block;
      font-size: 3.2rem;
      text-decoration: none;

      ${mq.tablet} {
        font-size: 5rem;
        text-align: center;
      }

      ${mq.desktop} {
        text-align: left;
      }

      &.active {
        text-decoration: underline;
      }
    }
  `
  const SwitchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 25rem;
    margin-left: auto;
    margin-top: ${SPACING * 2}rem;
  `
  const SwitchButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    text-decoration: underline;
  `

  return (
    <Nav id="main-nav" aria-expanded={isOpen}>
      <SwitchContainer>
        <p>View type: {listViewType}</p>
        <SwitchButton onClick={toggleListViewType}>
          switch to {listViewType === 'scroll' ? 'Grid' : 'Scroll'}
        </SwitchButton>
      </SwitchContainer>
      <List>
        {MENU_LINKS.map(({ link, label }) => (
          <MenuItem key={label}>
            <NavLink
              to={link}
              className={({ isActive }: LinkState) =>
                isActive ? 'active' : ''
              }
              onClick={onClick}
            >
              {label}
            </NavLink>
          </MenuItem>
        ))}
      </List>
    </Nav>
  )
}

export default Navigation
