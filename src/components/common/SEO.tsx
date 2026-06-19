import { useLocation } from 'react-router-dom'
import { defaultSEO, seoByPath } from '../../data/seo'

function SEO() {
  const location = useLocation()
  const seo = seoByPath[location.pathname] ?? defaultSEO
  const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, '')
  const siteUrl = configuredSiteUrl || window.location.origin
  const canonicalUrl = `${siteUrl}${location.pathname === '/' ? '' : location.pathname}`

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Century Tech" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </>
  )
}

export default SEO
