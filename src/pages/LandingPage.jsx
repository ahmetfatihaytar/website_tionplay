import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEOHead from '../components/SEOHead'
import { games } from '../data/games'

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/info@tionplay.com'

const GAME_MECHANICS = [
  { key: 'tap',       emoji: '🚿', color: '#2196F3' },
  { key: 'fruitcut',  emoji: '🍉', color: '#4CAF50' },
  { key: 'balloon',   emoji: '🎈', color: '#FF6B2B' },
  { key: 'pizza',     emoji: '🍕', color: '#FF8C42' },
  { key: 'princess',  emoji: '👸', color: '#9C27B0' },
  { key: 'scissors',  emoji: '✂️',  color: '#607D8B' },
  { key: 'fish',      emoji: '🎣', color: '#1565C0' },
  { key: 'boomerang', emoji: '🪃', color: '#8D6E63' },
  { key: 'bag',       emoji: '👜', color: '#F57F17' },
  { key: 'crossy',    emoji: '🚶', color: '#E53935' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function genCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return { a, b, answer: a + b }
}

export default function LandingPage() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const tapstop = games.find((g) => g.id === 'tapstop')

  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'general', message: '' })
  const [fieldErrors, setFieldErrors] = useState({})
  const [captcha, setCaptcha] = useState(genCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (fieldErrors[e.target.name]) setFieldErrors((prev) => ({ ...prev, [e.target.name]: null }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) newErrors.name = t('contact.nameRequired')
    if (!EMAIL_RE.test(formData.email)) newErrors.email = t('contact.emailInvalid')
    if (!formData.message.trim() || formData.message.trim().length < 10) newErrors.message = t('contact.messageRequired')
    if (parseInt(captchaInput, 10) !== captcha.answer) newErrors.captcha = t('contact.captchaError')
    if (Object.keys(newErrors).length) { setFieldErrors(newErrors); return; }
    setFieldErrors({})
    setStatus('sending')
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `[${formData.subject}]\n\n${formData.message}`,
          _subject: `[Tion Play] ${formData.subject} - ${formData.name}`,
          _replyto: formData.email,
          _captcha: 'false',
          _honey: '',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: 'general', message: '' })
        setCaptchaInput('')
        setCaptcha(genCaptcha())
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const subjects = [
    { value: 'general',     label: t('contact.subjects.general') },
    { value: 'partnership', label: t('contact.subjects.partnership') },
    { value: 'press',       label: t('contact.subjects.press') },
    { value: 'other',       label: t('contact.subjects.other') },
  ]

  return (
    <>
      <SEOHead
        title={t('hero.tagline')}
        description={t('hero.subtitle')}
        lang={lang}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Tion Play',
          url: 'https://tionplay.com',
          logo: 'https://tionplay.com/logo.png',
          description: 'Indie mobile game studio from Istanbul, Turkey.',
          founder: { '@type': 'Person', name: 'Fatih Aytar' },
          contactPoint: { '@type': 'ContactPoint', email: 'info@tionplay.com', contactType: 'customer support' },
        }}
      />

      {/* HERO */}
      <section id="home" className="lp-hero">
        <div className="lp-blob lp-blob-1" aria-hidden="true" />
        <div className="lp-blob lp-blob-2" aria-hidden="true" />
        <div className="lp-blob lp-blob-3" aria-hidden="true" />

        <div className="lp-hero-split">
          <div className="lp-hero-left">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tion Play" className="lp-hero-logo" />
          </div>

          <div className="lp-hero-right">
            <h1 className="lp-hero-title">{t('hero.tagline')}</h1>
            <p className="lp-hero-subtitle">{t('hero.subtitle')}</p>
            <div className="lp-hero-ctas">
              <a href="#game" className="btn btn-primary lp-cta-btn">🎮 {t('hero.cta')}</a>
              <a href="#contact" className="lp-cta-ghost">✉ {t('nav.contact')}</a>
            </div>
            <a href="#game" className="lp-scroll-hint" aria-label="Scroll down">
              <span className="lp-scroll-arrow">↓</span>
            </a>
        </div>
      </div>

      <div className="lp-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,45 C200,85 400,5 600,45 C800,85 1000,5 1200,45 C1320,65 1390,38 1440,45 L1440,90 L0,90 Z" fill="#461600"/>
        </svg>
      </div>
      </section>

      {/* TAPSTOP SHOWCASE */}
      <section id="game" className="lp-showcase">
        <div className="container">
          <div className="lp-showcase-inner">
            <div className="lp-showcase-icon-wrap">
              <div className="lp-showcase-icon-frame">
                <img src={`${import.meta.env.BASE_URL}topstop.png`} alt="TapStop" className="lp-showcase-icon" />
              </div>
              <div className="lp-showcase-badges">
                <span className="lp-release-badge">🏆 {t('featuredGame.badge')}</span>
              </div>
            </div>

            <div className="lp-showcase-info">
              <h2 className="lp-showcase-title">TapStop!</h2>
              <p className="lp-showcase-tagline">{t('tapstop.tagline')}</p>
              <p className="lp-showcase-desc">{t('tapstop.description')}</p>

              <div className="lp-store-row">
                <a
                  href={tapstop?.googlePlayUrl}
                  className="lp-store-btn lp-gplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download TapStop on Google Play"
                  onClick={(e) => {
                    if (/android/i.test(navigator.userAgent)) {
                      e.preventDefault()
                      window.location.href = 'market://details?id=com.topstop.game'
                    }
                  }}
                >
                  <span className="lp-store-icon">▶</span>
                  <span className="lp-store-text">
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </span>
                </a>

                <div className="lp-store-btn lp-appstore lp-appstore-soon" aria-label="App Store coming soon">
                  <span className="lp-store-icon">🍎</span>
                  <span className="lp-store-text">
                    <small>{t('tapstop.appStoreSoon')}</small>
                    <strong>App Store</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 MINI-GAMES */}
      <section className="lp-mechanics-section">
        <div className="container">
          <div className="lp-section-header">
            <span className="section-tag">{t('tapstop.mechanicsTitle')}</span>
            <h2>{t('tapstop.mechanicsHeadline')}</h2>
            <p>{t('tapstop.mechanicsSub')}</p>
          </div>

          <div className="lp-mechanics-grid">
            {GAME_MECHANICS.map((m) => (
              <div key={m.key} className="lp-mechanic-card" style={{ '--mc': m.color }}>
                <span className="lp-mechanic-emoji">{m.emoji}</span>
                <h4>{t(`tapstop.mechanics.${m.key}.name`)}</h4>
                <p>{t(`tapstop.mechanics.${m.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="lp-contact-section">
        <div className="container">
          <div className="lp-section-header">
            <h2>{t('contact.pageTitle')}</h2>
            <p>{t('contactCta.subtitle')}</p>
          </div>

          <div className="lp-form-wrap">
            {status === 'success' ? (
              <div className="lp-success-state">
                <span className="lp-success-emoji">🎉</span>
                <h3>{t('contact.success')}</h3>
                <button className="btn btn-primary" style={{ marginTop: '24px' }} onClick={() => setStatus('idle')}>
                  {t('contact.send')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="lp-name">{t('contact.name')} *</label>
                    <input
                      id="lp-name"
                      className={`form-control${fieldErrors.name ? ' lp-input-error' : ''}`}
                      type="text" name="name"
                      value={formData.name} onChange={handleChange}
                      placeholder="Alex Johnson" required minLength={2} maxLength={100} autoComplete="name"
                    />
                    {fieldErrors.name && <span className="lp-field-error">{fieldErrors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lp-email">{t('contact.email')} *</label>
                    <input
                      id="lp-email"
                      className={`form-control${fieldErrors.email ? ' lp-input-error' : ''}`}
                      type="email" name="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="hello@example.com" required maxLength={254} autoComplete="email"
                    />
                    {fieldErrors.email && <span className="lp-field-error">{fieldErrors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lp-subject">{t('contact.subject')}</label>
                  <select id="lp-subject" className="form-control" name="subject" value={formData.subject} onChange={handleChange}>
                    {subjects.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="lp-message">{t('contact.message')} *</label>
                  <textarea
                    id="lp-message"
                    className={`form-control${fieldErrors.message ? ' lp-input-error' : ''}`}
                    name="message"
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    required minLength={10} maxLength={5000} rows={5}
                  />
                  {fieldErrors.message && <span className="lp-field-error">{fieldErrors.message}</span>}
                </div>

                <div className="form-group lp-captcha-group">
                  <label htmlFor="lp-captcha">
                    {t('contact.captchaLabel', { a: captcha.a, b: captcha.b })}
                  </label>
                  <input
                    id="lp-captcha"
                    className={`form-control lp-captcha-input${fieldErrors.captcha ? ' lp-input-error' : ''}`}
                    type="number" inputMode="numeric"
                    value={captchaInput}
                    onChange={(e) => { setCaptchaInput(e.target.value); if (fieldErrors.captcha) setFieldErrors((p) => ({ ...p, captcha: null })) }}
                    required
                  />
                  {fieldErrors.captcha && <span className="lp-field-error">{fieldErrors.captcha}</span>}
                </div>

                {status === 'error' && (
                  <p className="lp-form-error">⚠ {t('contact.error')}</p>
                )}

                <button type="submit" className="btn btn-primary lp-submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? t('contact.sending') : `📨 ${t('contact.send')}`}
                </button>
              </form>
            )}

            <p className="lp-direct-email">
              {t('contact.orEmail')}{' '}
              <a href="mailto:info@tionplay.com">info@tionplay.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="legal" className="lp-footer" role="contentinfo">
        <div className="container">
          <div className="lp-footer-top">
            <div className="lp-footer-brand">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tion Play" className="lp-footer-logo" />
            </div>

            <nav className="lp-footer-nav" aria-label="Footer navigation">
              <a href="#game" className="lp-footer-link">TapStop!</a>
              <a href="#contact" className="lp-footer-link">{t('nav.contact')}</a>
              <Link to={`/${lang}/privacy`} className="lp-footer-link">{t('footer.privacyPolicy')}</Link>
            </nav>


          </div>

          <div className="lp-footer-bottom">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </>
  )
}