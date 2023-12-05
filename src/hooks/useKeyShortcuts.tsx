import React, { useEffect, useCallback } from 'react'

interface Props {
  goToNext: () => void
  goToPrevious: () => void
}

const useKeyShortcuts = ({ goToNext, goToPrevious }: Props) => {
  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case 'ArrowRight':
          goToNext()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        default:
      }
    },
    [goToNext, goToPrevious],
  )

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress)

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])
}

export default useKeyShortcuts
