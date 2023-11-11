import React from 'react'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import ArticleHeader from './ArticleHeader'
import ArticleContent from './ArticleContent'
import Loader from 'components/Loader/Loader'
import { Post } from 'types/post'

const Article = () => {
  const { isLoading, posts } = useContext(storeContext) || {}

  if (isLoading) return <Loader />
  if (!posts.length) return null

  return posts.map(({ title, content, slug, _embedded, acf }: Post) => (
    <div key={slug}>
      <ArticleHeader
        title={title.rendered}
        description={acf?.description}
        imageSrc={_embedded['wp:featuredmedia'][0].source_url}
        titleColor={acf?.title_color}
      />
      <main className="Post" id="main">
        <article>
          <ArticleContent content={content.rendered} />
        </article>
      </main>
    </div>
  ))
}

export default Article
