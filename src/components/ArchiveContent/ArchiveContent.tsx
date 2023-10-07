import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import { Link, useSearchParams } from 'react-router-dom'
import FeaturedImage from './FeaturedImage'

const ArchiveContent = () => {
  const posts = useContext(storeContext)
  const [filteredPosts, setFilteredPosts] = useState<Post[] | []>([])
  const [searchParams] = useSearchParams()
  const workType = searchParams.get('work-types')

  useEffect(() => {
    if (posts) {
      const newFilteredPosts: Post[] = workType
        ? posts.filter((item) => item['work-types'][0] === Number(workType))
        : posts
      setFilteredPosts(newFilteredPosts)
    }
  }, [posts, workType])

  if (!filteredPosts) return null

  return (
      {filteredPosts.map(({ title, slug, _links, link: postLink }) => {
        return (
          <li key={slug}>
            <h2>{title.rendered}</h2>
            <Link to={postLink}>
              <FeaturedImage
                url={_links['wp:featuredmedia'][0].href}
                alt={title.rendered}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ArchiveContent
