import styled from '@emotion/styled'
import MainNav from 'components/MainNav/MainNav'
import { SPACING, mq } from 'context/stylesConstants'
import React from 'react'
import BackToTop from './BackToTop'
import BackToArchive from './BackToArchive'

const year = new Date().getFullYear()

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
      max-width: ${120 + SPACING * 5}rem;
      margin: auto;
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

  const Copyright = styled.p`
    font-size: 1.2rem;
    margin-top: ${SPACING * 2}rem;
  `

  return (
    <StyledFooter>
      <Container>
        {isSingle && <BackToArchive />}
        <BackToTop />
      </Container>
      <Divider />
      <MainNav isFooter />
      <Copyright>
        &copy; {year} Fleur Delaville - Webdesign & development:{' '}
        <a href="https://florianegrosset.com" target="_BLANK">
          Floriane Grosset
        </a>
      </Copyright>
    </StyledFooter>
  )
}

export default Footer
