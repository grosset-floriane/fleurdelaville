import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

interface Props {
  title: string
  description: string
}

const SEO: React.FC<Props> = ({ title, description }) => {
  const { pathname } = useLocation()

  return (
    <Helmet>
      <title>{title}, Fleur Delaville</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://florianegrosset.com${pathname}`}
      />

      {/* Twitter meta tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
