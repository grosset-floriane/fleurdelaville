import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { storeContext } from '../../context/storeContext'
import { mq } from 'context/stylesConstants'
import Loader from 'components/Loader/Loader'

interface Props {}

const FrontImage: React.FC<Props> = () => {
  const { isLoading, posts } = useContext(storeContext) || {}

  const backgroundImage = posts[0]?._embedded['wp:featuredmedia'][0].source_url

  if (isLoading) return <Loader />
  const Main = styled.main`
    height: 100vh;
    overflow: hidden;

    img {
      object-fit: cover;
      height: 100vh;
      object-position: top left;
      min-width: 257%;

      ${mq.tablet} {
        min-width: 175%;
      }
    }
  `
  return (
    <Main>
      <img src={backgroundImage} alt="" />
    </Main>
  )
}

export default FrontImage
