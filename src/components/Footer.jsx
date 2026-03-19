import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const base = `/${lang}`

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to={base} aria-label="Tion Play — Home">
              <img src="/logo.png" alt="Tion Play logo" height="48" />
            </Link>
            <p style={{ marginTop: '16px' }}>{t('footer.tagline')}</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '8px', fontWeight: 600 }}>
              {t('footer.madeWith')}
            </p>
            <div className="footer-social" style={{ marginTop: '24px' }}>
              <a
                href="https://play.google.com/store/apps/developer?id=Tion+Play"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tion Play on Google Play"
                title="Google Play"
              >
                ▶
              </a>
              <a
                href="https://github.com/tionplay"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tion Play on GitHub"
                title="GitHub"
              >
                🐙
              </a>
              <a
                href="mailto:hello@tionplay.com"
                className="social-btn"
                aria-label="Email Tion Play"
                title="Email"
              >
                ✉
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>{t('footer.quickLinks')}</h4>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link to={base} className="footer-link">{t('nav.home')}</Link>
              <Link to={`${base}/games`} className="footer-link">{t('nav.games')}</Link>
              <Link to={`${base}/games/tapstop`} className="footer-link">TapStop</Link>
              <Link to={`${base}/about`} className="footer-link">{t('nav.about')}</Link>
              <Link to={`${base}/blog`} className="footer-link">{t('nav.blog')}</Link>
              <Link to={`${base}/contact`} className="footer-link">{t('nav.contact')}</Link>
            </nav>
          </div>

          {/* Games */}
          <div className="footer-col">
            <h4>{t('nav.games')}</h4>
            <nav className="footer-links" aria-label="Games navigation">
              <Link to={`${base}/games/tapstop`} className="footer-link">TapStop</Link>
              <span className="footer-link" style={{ opacity: 0.4, cursor: 'default' }}>
                {t('games.comingSoon')}...
              </span>
            </nav>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>{t('footer.legal')}</h4>
            <nav className="footer-links" aria-label="Legal navigation">
              <Link to={`${base}/privacy`} className="footer-link">
                {t('footer.privacyPolicy')}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <p>Istanbul, Turkey 🇹🇷</p>
        </div>
      </div>
    </footer>
  )
}
