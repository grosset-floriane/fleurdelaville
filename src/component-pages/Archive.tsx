import React from 'react'
import { Provider } from '../context/storeContext'
import { useLocation } from 'react-router-dom'
import ArchiveContent from 'components/ArchiveContent/ArchiveContent'

const Archive = () => {
  const { pathname } = useLocation()
  const [, postType] = pathname.split('/')

  return (
    <Provider postType={postType} slug={postType}>
      <ArchiveContent postType={postType} />
    </Provider>
  )
}
export default Archive
