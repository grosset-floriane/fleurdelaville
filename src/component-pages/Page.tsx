import React from 'react'
import Header from '../components/Header/Header'
import { Provider } from '../context/storeContext'
import { useLocation } from 'react-router-dom'
import Article from '../components/Article/Article'
import { POST_TYPES } from '../context/constants'

const Page = () => {
  const { pathname } = useLocation()
  const [, slug] = pathname.split('/')

  return (
    <Provider postType={POST_TYPES.PAGES.slug} slug={slug}>
      <Header />
      <main className="Post">
        <Article />
      </main>
    </Provider>
  )
}
export default Page
