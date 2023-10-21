import styled from '@emotion/styled'
import MainNav from 'components/MainNav/MainNav'
import { SPACING, mq } from 'context/stylesConstants'
import React from 'react'
import BackToTop from './BackToTop'
import BackToArchive from './BackToArchive'

interface Props {
  isSingle?: boolean
}

const Footer: React.FC<Props> = ({ isSingle }) => {
  const StyledFooter = styled.footer`
    padding: ${SPACING * 2}rem;

    ${mq.tablet} {
      padding: ${SPACING * 3}rem;
    }

    ${mq.desktop} {
      padding: ${SPACING * 5}rem;
    }
  `
  const Divider = styled.hr`
    margin: ${SPACING * 1.5}rem 0;
    ${mq.tablet} {
      margin: ${SPACING * 3}rem 0;
    }
  `

  const Container = styled.div`
    display: flex;
    justify-content: ${isSingle ? 'space-between' : 'flex-end'};
    align-items: center;
  `

  return (
    <StyledFooter>
      <Container>
        {isSingle && <BackToArchive />}
        <BackToTop />
      </Container>
      <Divider />
      <MainNav isFooter />
    </StyledFooter>
  )
}

export default Footer
