import React from 'react'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import ArticleHeader from './ArticleHeader'
import ArticleContent from './ArticleContent'
import Loader from 'components/Loader/Loader'

const Article = () => {
  const { isLoading, posts } = useContext(storeContext) || {}

  if (isLoading) return <Loader />
  if (!posts.length) return null

  return posts.map(({ title, content, slug, _embedded }) => (
    <article key={slug}>
      <ArticleHeader
        title={title.rendered}
        imageSrc={_embedded['wp:featuredmedia'][0].source_url}
      />
      <ArticleContent content={content.rendered} />
    </article>
  ))
}

export default Article
