import styled from '@emotion/styled'
import { SPACING } from 'context/stylesConstants'
import React from 'react'
import { useLocation } from 'react-router-dom'

interface Props {}

const BackToArchive: React.FC<Props> = () => {
  const { pathname } = useLocation()
  const [, postType] = pathname.split('/')

  const Arrow = styled.span`
    position: relative;
    top: -1px;
    display: inline-block;
    margin-right: ${SPACING / 2}rem;
  `
  return (
    <a href={`/${postType}`}>
      <Arrow>&#8592;</Arrow> Back to all {postType}
    </a>
  )
}

export default BackToArchive
