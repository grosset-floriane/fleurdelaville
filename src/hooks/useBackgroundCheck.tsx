import { useState, useEffect } from 'react'

const backgroundCheck = window.BackgroundCheck

const useBackgroundCheck = () => {
  const [thumbnails, setThumbnails] = useState<null | Element>(null)

  const images = document.querySelector('.thumbnails')

  const clearThumbnails = () => setThumbnails(null)
  const setThumbnailsState = () => setThumbnails(images)

  useEffect(() => {
    if (thumbnails) {
      backgroundCheck.init({
        targets: '.target',
        images: '.thumbnails',
      })
      backgroundCheck.refresh()
    }
  }, [thumbnails])

  return { clearThumbnails, setThumbnailsState, backgroundCheck }
}

export default useBackgroundCheck
