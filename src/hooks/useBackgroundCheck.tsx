import { useState, useEffect } from 'react'

// BackgroundCheck needs to be initialised every time a page is changes
// This does not initialize as the page first load

export const backgroundCheck = window.BackgroundCheck

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
