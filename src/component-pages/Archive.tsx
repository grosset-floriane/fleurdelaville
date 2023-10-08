import React from 'react'
import Header from '../components/Header/Header'
import ArchiveContent from '../components/ArchiveContent/ArchiveContent'
import { Provider } from '../context/storeContext'
import { useLocation } from 'react-router-dom'
import { POST_TYPES } from '../context/constants'
import { SPACING, STYLES_CHECK_BACKGROUND } from '../context/stylesConstants'
import styled from '@emotion/styled'
import SecondaryNav from 'components/SecondaryNav/SecondaryNav'

const Archive = () => {
  const { pathname } = useLocation()
  const [, postType] = pathname.split('/')
  const Title = styled.h1`
    position: fixed;
    top: 8.5rem;
    left: ${SPACING * 2}rem;
    font-size: 4rem;
    font-weight: normal;
    z-index: 999;
    line-height: 0.75;
    ${STYLES_CHECK_BACKGROUND}
  `

  const Subtitle = styled.span`
    font-size: 2.8rem;
  `

  return (
    <Provider postType={postType} slug={postType}>
      <Header />
      <main className="Archive">
        <Title className="target">
          {postType === POST_TYPES.EXHIBITIONS.slug
            ? POST_TYPES.EXHIBITIONS.title
            : POST_TYPES.WORKS.title}
          <br />
          <Subtitle>All</Subtitle>
        </Title>
        <ArchiveContent />
        <SecondaryNav />
      </main>
    </Provider>
  )
}
export default Archive
