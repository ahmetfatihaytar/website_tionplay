import { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang = 'en' } = useParams()
  const { pathname } = useLocation()

  // On pages with a dark solid background (e.g. Privacy Policy), always show the navbar as solid
  const alwaysSolid = pathname.endsWith('/privacy')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${(scrolled || alwaysSolid) ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-inner">
        <Link to={`/${lang}`} className="navbar-logo" aria-label="Tion Play — Home">
          <img src="/logo.png" alt="Tion Play" />
        </Link>
        <LanguageSwitcher />
      </div>
    </nav>
  )
}