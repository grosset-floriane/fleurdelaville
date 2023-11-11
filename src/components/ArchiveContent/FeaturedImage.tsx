import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

interface Props {
  src: string
  alt: string
  isSingle?: boolean
}

const FeaturedImage = ({ alt, isSingle, src }: Props) => {
  const Image = styled.img`
    object-fit: cover;
    object-position: ${isSingle ? 'left' : 'center'};
    height: ${isSingle ? '75vh' : '100vh'};
    width: 100%;
  `

  return (
    <Image
      alt={alt}
      src={src}
      className={isSingle ? '' : 'image-background-check'}
    />
  )
}

export default FeaturedImage
