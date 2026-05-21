import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang = 'en' } = useParams()
  const { pathname } = useLocation()

  const alwaysSolid = pathname.endsWith('/privacy')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${(scrolled || alwaysSolid) ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-inner">
        <a href={`/${lang}`} className="navbar-logo" aria-label="Tion Play — Home">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tion Play" />
        </a>
        <LanguageSwitcher />
      </div>
    </nav>
  )
}
