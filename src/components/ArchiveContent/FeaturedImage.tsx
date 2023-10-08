import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

interface Props {
  url: string
  alt: string
}

interface Image {
  source_url: string
}

const FeaturedImage = ({ url, alt }: Props) => {
  const [image, setImage] = useState<Image | null>(null)
  useEffect(() => {
    axios.get(url).then((response) => setImage(response.data))
  }, [url])

  if (!image) return null

  const Image = styled.img`
    object-fit: cover;
    height: 100vh;
  `

  return <Image alt={alt} src={image.source_url} className="thumbnails" />
}

export default FeaturedImage
