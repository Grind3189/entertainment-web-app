import React, {createContext, useState, useEffect} from 'react'
import ImageSize from '../../types/image-type'

type ImageContextProp = {
    children: React.ReactNode
}

type ImageContextType = {
    imageSize: ImageSize
}

const ImageContextSize = createContext({} as ImageContextType)

const ImageContext = ({children}: ImageContextProp) => {
    const [imageSize, setImageSize] = useState<ImageSize>(null)

    useEffect(() => {
        const handleResize = () => {
          const innerWidth = window.innerWidth
          if (innerWidth < 768) {
            setImageSize({
              regular: 'sm',
              trending: 'sm'
            })
          } else if (innerWidth < 1440) {
            setImageSize({
              regular: 'med',
              trending: 'lg'
            })
          } else {
            setImageSize({
              regular: 'lg',
              trending: 'lg'
            })
          }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    
        return () => {
          window.removeEventListener('resize', handleResize)
        }
    
      }, [])

  return (
    <ImageContextSize.Provider value={{imageSize}}>{children}</ImageContextSize.Provider>
  )
}

export {ImageContext, ImageContextSize}