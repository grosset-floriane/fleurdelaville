import React from 'react'
import Header from '../components/Header/Header'
import ArchiveContent from '../components/ArchiveContent/ArchiveContent'
import { Provider } from '../context/storeContext'
import { useLocation } from 'react-router-dom'
import { POST_TYPES } from '../context/constants'
import {
  SPACING,
  STYLES_CHECK_BACKGROUND,
  mq,
} from '../context/stylesConstants'
import styled from '@emotion/styled'
import SecondaryNav from 'components/SecondaryNav/SecondaryNav'
import SEO from 'components/SEO/SEO'

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

    ${mq.tablet} {
      font-size: 7rem;
      top: 15rem;
      left: ${SPACING * 3}rem;
    }

    ${mq.desktop} {
      top: 17rem;
      left: ${SPACING * 5}rem;
    }
  `

  const Subtitle = styled.span`
    font-size: 2.8rem;
  `

  const isShowing = false

  const archiveTitle =
    postType === POST_TYPES.EXHIBITIONS.slug
      ? POST_TYPES.EXHIBITIONS.title
      : POST_TYPES.WORKS.title

  const archiveDescription =
    postType === POST_TYPES.EXHIBITIONS.slug
      ? POST_TYPES.EXHIBITIONS.description
      : POST_TYPES.WORKS.description

  return (
    <Provider postType={postType} slug={postType}>
      <Header />
      <main className="Archive">
        <SEO title={archiveTitle} description={archiveDescription} />
        <Title className="target">
          {archiveTitle}
          <br />
          {isShowing && <Subtitle>All</Subtitle>}
        </Title>
        <ArchiveContent />
        {postType === POST_TYPES.WORKS.slug && isShowing && <SecondaryNav />}
      </main>
    </Provider>
  )
}
export default Archive
