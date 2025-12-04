import React from 'react'
import { Provider } from '../context/storeContext'
import { useLocation } from 'react-router-dom'
import ArchiveContent from 'components/ArchiveContent/ArchiveContent'
import { PostTypesSlugs } from 'context/constants'

const Archive = () => {
  const { pathname } = useLocation()
  const [, postType] = pathname.split('/')

  return (
    <Provider postType={postType as PostTypesSlugs} slug={postType}>
      <ArchiveContent postType={postType} />
    </Provider>
  )
}
export default Archive
