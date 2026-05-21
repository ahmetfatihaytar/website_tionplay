import { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', name: 'English',    flag: '🇺🇸' },
  { code: 'tr', name: 'Türkçe',     flag: '🇹🇷' },
  { code: 'de', name: 'Deutsch',    flag: '🇩🇪' },
  { code: 'fr', name: 'Français',   flag: '🇫🇷' },
  { code: 'es', name: 'Español',    flag: '🇪🇸' },
  { code: 'pt', name: 'Português',  flag: '🇧🇷' },
  { code: 'ja', name: '日本語',      flag: '🇯🇵' },
  { code: 'ko', name: '한국어',      flag: '🇰🇷' },
  { code: 'zh', name: '中文',        flag: '🇨🇳' },
  { code: 'ar', name: 'العربية',     flag: '🇸🇦' },
]

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const { lang } = useParams()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const dropdownRef = useRef(null)

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function switchLanguage(code) {
    const pathWithoutLang = location.pathname.replace(`/${lang}`, '') || ''
    navigate(`/${code}${pathWithoutLang}${location.search}`)
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="lang-switcher" ref={dropdownRef}>
      <button
        className="lang-btn"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span className="lang-flag-emoji" aria-hidden="true">{currentLang.flag}</span>
        <span className="lang-btn-name">{currentLang.name}</span>
        <svg
          className={`lang-chevron${open ? ' open' : ''}`}
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown" role="listbox">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              className={`lang-option${l.code === lang ? ' active' : ''}`}
              onClick={() => switchLanguage(l.code)}
              role="option"
              aria-selected={l.code === lang}
            >
              <span className="lang-flag-emoji" aria-hidden="true">{l.flag}</span>
              <span>{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
