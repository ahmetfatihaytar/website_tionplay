import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang = 'en' } = useParams()
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const alwaysSolid = pathname.endsWith('/privacy')
  const isHome = !pathname.endsWith('/privacy')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav className={`navbar ${(scrolled || alwaysSolid) ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="navbar-inner">
          <a href={`/${lang}`} className="navbar-logo" aria-label="Tion Play — Home">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tion Play" />
          </a>

          {isHome && (
            <div className="nav-links">
              <a href="#game" className="nav-link">TapStop!</a>
              <a href="#contact" className="nav-link">{t('nav.contact')}</a>
            </div>
          )}

          <div className="nav-right">
            <LanguageSwitcher />
            {isHome && (
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            )}
          </div>
        </div>
      </nav>

      {isHome && (
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="navigation">
          <a href="#game" className="nav-link" onClick={() => setMenuOpen(false)}>TapStop!</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a>
        </div>
      )}
    </>
  )
}
