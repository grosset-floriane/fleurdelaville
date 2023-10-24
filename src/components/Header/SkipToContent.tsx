import styled from '@emotion/styled'
import { SPACING } from 'context/stylesConstants'
import React from 'react'

interface Props {}

const SkipToContent: React.FC<Props> = () => {
  const Link = styled.a`
    display: block;
    position: absolute;
    top: -99rem;
    left: ${SPACING * 2}rem;
    background-color: black;
    font-weight: bold;
    padding: ${SPACING * 2}rem;

    &:focus-visible {
      top: ${SPACING * 2}rem;
      color: white;
    }
  `
  return <Link href="#main">Skip to content</Link>
}

export default SkipToContent
