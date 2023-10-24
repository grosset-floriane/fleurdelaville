import React from 'react'
import { useLocation } from 'react-router-dom'
import Article from '../components/Article/Article'
import { Provider } from 'context/storeContext'
import Footer from 'components/Footer/Footer'

const Single = () => {
  const { pathname } = useLocation()
  const [, postType, slug] = pathname.split('/')

  return (
    <Provider slug={slug} postType={postType}>
      <Article />
      <Footer isSingle />
    </Provider>
  )
}
export default Single
