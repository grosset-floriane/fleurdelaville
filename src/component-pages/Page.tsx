import React from 'react'
import { Provider } from '../context/storeContext'
import { useLocation } from 'react-router-dom'
import Article from '../components/Article/Article'
import { POST_TYPES } from '../context/constants'
import Footer from 'components/Footer/Footer'

const Page = () => {
  const { pathname } = useLocation()
  const [, slug] = pathname.split('/')

  return (
    <Provider postType={POST_TYPES.PAGES.slug} slug={slug}>
      <main className="Post" id="main">
        <Article />
      </main>
      <Footer />
    </Provider>
  )
}
export default Page
