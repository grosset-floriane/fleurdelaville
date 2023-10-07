import React, { useEffect, useState } from 'react'
import axios from 'axios'

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

  return <img alt={alt} src={image.source_url} />
}

export default FeaturedImage
