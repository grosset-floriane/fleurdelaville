import styled from '@emotion/styled'
import React from 'react'

interface Props {
  isOpen: boolean
}

const Navigation: React.FC<Props> = ({ isOpen }) => {
  const Nav = styled.nav``
  return (
    <Nav id="main-nav" aria-expanded={isOpen}>
      <ul>
        <li>Hello</li>
      </ul>
    </Nav>
  )
}

export default Navigation
