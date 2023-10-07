import React from 'react'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'

const Article = () => {
  const posts = useContext(storeContext)

  if (!posts) return

  return posts.map(({ title, content, slug }) => (
    <article key={slug}>
      <h1>{title.rendered}</h1>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
    </article>
  ))
}

export default Article
