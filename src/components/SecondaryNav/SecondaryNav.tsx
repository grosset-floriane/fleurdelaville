import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { NavLink, useSearchParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { SPACING } from 'context/stylesConstants'

interface Props {}

const SecondaryNav: React.FC<Props> = () => {
  const [items, setItems] = useState([])
  const [termID, setTermID] = useState<null | number>(null)
  useEffect(() => {
    axios
      .get('/wp-json/wp/v2/work-types')
      .then((response) => setItems(response.data))
  }, [])

  const [searchParams] = useSearchParams()

  useEffect(() => {
    setTermID(Number(searchParams.get('work-types') || null))
  }, [searchParams])

  if (!items.length) return null

  const Nav = styled.nav`
    z-index: 999;
    position: fixed;
    bottom: 2rem;
    right: 0;
    width: 100vw;
  `

  const List = styled.ul`
    display: flex;
    gap: ${SPACING * 1}rem;
    background-color: #ffffff5a;
    padding: 0;
    width: 100%;
    justify-content: end;
    padding-right: ${SPACING}rem;

    a {
      padding: ${SPACING / 2}rem ${SPACING}rem;
      display: block;
      font-size: 1.4rem;

      &.active {
        text-decoration: underline;
      }
    }
  `

  return (
    <Nav>
      <List>
        <li>
          <NavLink to="/works" className={() => (!termID ? 'active' : '')}>
            All
          </NavLink>
        </li>
        {items.map(({ name, id, count }) => {
          if (count)
            return (
              <li key={id}>
                <NavLink
                  to={`/works?work-types=${id}`}
                  className={() => (Number(termID) === id ? 'active' : '')}
                >
                  {name}
                </NavLink>
              </li>
            )
        })}
      </List>
    </Nav>
  )
}

export default SecondaryNav
