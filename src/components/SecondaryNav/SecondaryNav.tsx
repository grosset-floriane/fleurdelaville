import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { NavLink, useSearchParams } from 'react-router-dom'

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
