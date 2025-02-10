import React from 'react'
import { Helmet } from 'react-helmet'

export default function Seo({title,desc,keywords}) {
  return <>
  <Helmet>
    <title>{title}</title>
    <meta name="keywords" content={keywords} />
    <meta name="description" content={desc} />
  </Helmet>
  </>
}
