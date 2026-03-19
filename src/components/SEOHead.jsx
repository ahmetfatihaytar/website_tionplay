import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://tionplay.com'
const LANGS = ['en', 'tr', 'de', 'fr', 'es', 'pt', 'ja', 'ko', 'zh', 'ar']

const LOCALE_MAP = {
  en: 'en_US', tr: 'tr_TR', de: 'de_DE', fr: 'fr_FR',
  es: 'es_ES', pt: 'pt_BR', ja: 'ja_JP', ko: 'ko_KR',
  zh: 'zh_CN', ar: 'ar_SA',
}

export default function SEOHead({
  title,
  description,
  lang = 'en',
  path = '',
  image = '/og-image.png',
  type = 'website',
  jsonLd = null,
}) {
  const fullUrl = `${BASE_URL}/${lang}${path ? `/${path}` : ''}`
  const fullTitle = title ? `${title} | Tion Play` : 'Tion Play — Indie Mobile Game Studio'
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* OG Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Tion Play" />
      <meta property="og:locale" content={LOCALE_MAP[lang] ?? 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* hreflang */}
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hreflang={l} href={`${BASE_URL}/${l}${path ? `/${path}` : ''}`} />
      ))}
      <link rel="alternate" hreflang="x-default" href={`${BASE_URL}/en${path ? `/${path}` : ''}`} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
