import { useState, useEffect } from 'react'

const useWindowSize = (): { width: number; height: number } => {
  const [windowSize, setWindowSize] = useState({
    width: window.visualViewport
      ? window.visualViewport.width
      : window.innerWidth,
    height: window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight,
  })

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.visualViewport
          ? window.visualViewport.width
          : window.innerWidth,
        height: window.visualViewport
          ? window.visualViewport.height
          : window.innerHeight,
      })
    }

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize)
    } else {
      window.addEventListener('resize', handleResize)
    }

    handleResize()

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize)
      } else {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return windowSize
}

export default useWindowSize
