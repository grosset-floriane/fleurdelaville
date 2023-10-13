import React from 'react'
import Header from 'components/Header/Header'
import { Provider } from '../context/storeContext'
import FrontImage from 'components/FrontImage/FrontImage'

const HomePage = () => {
  return (
    <Provider postType="pages" slug="home">
      <Header isHomePage />
      <FrontImage />
    </Provider>
  )
}
export default HomePage
