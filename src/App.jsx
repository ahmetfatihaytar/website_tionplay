import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useParams, useNavigate, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

const SUPPORTED_LANGS = ['en', 'tr', 'de', 'fr', 'es', 'pt', 'ja', 'ko', 'zh', 'ar']
const RTL_LANGS = ['ar']

// Country code → site language mapping
const COUNTRY_LANG_MAP = {
  TR: 'tr',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  BO: 'es', EC: 'es', PY: 'es', UY: 'es', CR: 'es', CU: 'es',
  DO: 'es', GT: 'es', HN: 'es', NI: 'es', PA: 'es', SV: 'es', VE: 'es',
  PT: 'pt', BR: 'pt',
  JP: 'ja',
  KR: 'ko',
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh', SG: 'zh',
  SA: 'ar', AE: 'ar', EG: 'ar', IQ: 'ar', MA: 'ar', DZ: 'ar', TN: 'ar',
  LY: 'ar', SD: 'ar', JO: 'ar', LB: 'ar', KW: 'ar', QA: 'ar', BH: 'ar',
  OM: 'ar', YE: 'ar', SY: 'ar',
}

function LangWrapper() {
  const { lang } = useParams()
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!SUPPORTED_LANGS.includes(lang)) {
      navigate('/en', { replace: true })
      return
    }
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
    const dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', lang)
  }, [lang, i18n, navigate])

  if (!SUPPORTED_LANGS.includes(lang)) return null

  return (
    <div className={`app-wrapper ${RTL_LANGS.includes(lang) ? 'rtl' : 'ltr'}`}>
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="spinner" />
    </div>
  )
}

function RootRedirect() {
  const [lang, setLang] = useState(null)

  useEffect(() => {
    // Returning visitor: use cached language (set by i18next)
    const cached = localStorage.getItem('i18nextLng')?.split('-')[0]
    if (cached && SUPPORTED_LANGS.includes(cached)) {
      setLang(cached)
      return
    }

    // New visitor: detect by country via IP
    fetch('https://ipapi.co/country_code/')
      .then((r) => r.text())
      .then((code) => {
        const mapped = COUNTRY_LANG_MAP[code?.trim().toUpperCase()]
        setLang(SUPPORTED_LANGS.includes(mapped) ? mapped : 'en')
      })
      .catch(() => {
        // Fallback: browser language
        const navLang = navigator.language?.split('-')[0]
        setLang(SUPPORTED_LANGS.includes(navLang) ? navLang : 'en')
      })
  }, [])

  if (!lang) return <PageLoader />
  return <Navigate to={`/${lang}`} replace />
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<LangWrapper />}>
          <Route index element={<LandingPage />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<LandingPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </>
  )
}
