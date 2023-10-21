import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Article from '../components/Article/Article'
import { Provider } from 'context/storeContext'
import Footer from 'components/Footer/Footer'

const Single = () => {
  const { pathname } = useLocation()
  const [, postType, slug] = pathname.split('/')

  return (
    <Provider slug={slug} postType={postType}>
      <Header />
      <main className="Post" id="main">
        <Article />
      </main>
      <Footer isSingle />
    </Provider>
  )
}
export default Single
