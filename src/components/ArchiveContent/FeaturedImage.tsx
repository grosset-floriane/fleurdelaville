import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

interface Props {
  src: string
  alt: string
  imagePosition?: string
}

const FeaturedImage = ({ alt, imagePosition, src }: Props) => {
  const Image = styled.img`
    object-fit: cover;
    object-position: ${imagePosition ? imagePosition : 'center'};
    height: ${imagePosition ? '75vh' : '100vh'};
    width: 100%;
  `

  return (
    <Image
      alt={alt}
      src={src}
      className={imagePosition ? '' : 'image-background-check'}
    />
  )
}

export default FeaturedImage
