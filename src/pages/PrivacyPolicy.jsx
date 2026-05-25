import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEOHead from '../components/SEOHead'

const CONTACT_EMAIL = 'info@tionplay.com'
const APP_NAME = 'TapStop'
const COMPANY_NAME = 'Tion Play'
const WEBSITE = 'https://tionplay.com'
const LAST_UPDATED = 'May 25, 2026'

export default function PrivacyPolicy() {
  const { lang = 'en' } = useParams()
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title={t('privacy.title')}
        description={t('privacy.metaDesc')}
        lang={lang}
        path="privacy"
      />

      <div className="policy-page">
        <div className="policy-container">
          <header className="policy-header">
            <p className="policy-app-name">{APP_NAME} by {COMPANY_NAME}</p>
            <h1 className="policy-title">{t('privacy.title')}</h1>
            <p className="policy-date">{t('privacy.lastUpdated')}: {LAST_UPDATED}</p>
          </header>

          <div className="policy-body">

            <section className="policy-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to <strong>{APP_NAME}</strong>, a mobile game published by <strong>{COMPANY_NAME}</strong>
                {' '}("we", "us", or "our"). This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you play our mobile game or visit our website at{' '}
                <a href={WEBSITE} target="_blank" rel="noopener noreferrer">{WEBSITE}</a>.
              </p>
              <p>
                By downloading or playing {APP_NAME}, you agree to the terms of this Privacy Policy.
                If you do not agree, please discontinue use of the application.
              </p>
            </section>

            <section className="policy-section">
              <h2>2. Information We Collect</h2>

              <h3>2.1 Information You Do Not Provide Us</h3>
              <p>
                {APP_NAME} does <strong>not</strong> require you to create an account, and we do{' '}
                <strong>not</strong> collect your name, email address, phone number, or any other
                personally identifiable information directly.
              </p>

              <h3>2.2 Information Collected Automatically</h3>
              <p>
                When you use {APP_NAME}, certain information may be collected automatically by
                third-party services integrated into the app:
              </p>

              <p><strong>Advertising (Google AdMob)</strong></p>
              <ul>
                <li>
                  <strong>Advertising identifier</strong> — GAID/AAID on Android (and IDFA on iOS where applicable)
                </li>
                <li>
                  <strong>IP address</strong> — approximate location for ad targeting and frequency capping
                </li>
                <li>
                  <strong>Device information</strong> — device model, operating system version, language, screen resolution
                </li>
                <li>
                  <strong>Ad interaction data</strong> — impressions, clicks, rewarded ad views
                </li>
              </ul>

              <p><strong>Analytics &amp; app improvement (Google Firebase)</strong></p>
              <ul>
                <li>
                  <strong>App usage events</strong> — e.g. levels started/completed, settings changes, button interactions, session activity
                </li>
                <li>
                  <strong>Device information</strong> — device model, brand, operating system version
                </li>
                <li>
                  <strong>App instance identifiers</strong> — used to distinguish app installations
                </li>
              </ul>

              <p><strong>Crash &amp; diagnostics (Google Firebase Crashlytics)</strong></p>
              <ul>
                <li>
                  <strong>Crash reports</strong> — stack traces and diagnostic data needed to fix bugs
                </li>
                <li>
                  <strong>Device information</strong> — device model and operating system version
                </li>
              </ul>

              <p><strong>Marketing measurement (Meta / Facebook SDK)</strong></p>
              <ul>
                <li>
                  <strong>App events</strong> — e.g. app open, level achieved, ad watched
                </li>
                <li>
                  <strong>Device identifiers and technical data</strong> — as described in Meta&apos;s policies
                </li>
              </ul>

              <p><strong>Marketing measurement (TikTok Business SDK)</strong></p>
              <ul>
                <li>
                  <strong>App events</strong> — e.g. app launch, level achieved, ad impressions
                </li>
                <li>
                  <strong>Device identifiers and technical data</strong> — as described in TikTok&apos;s policies
                </li>
              </ul>

              <p><strong>Consent (Google User Messaging Platform — UMP)</strong></p>
              <ul>
                <li>
                  <strong>Advertising consent choices</strong> — where required by law, stored locally and/or via Google
                </li>
              </ul>

              <p>
                We do not use these services to collect your name, email, or phone number.
              </p>

              <h3>2.3 Data Stored Locally on Your Device</h3>
              <p>
                The following data is stored <strong>only on your device</strong> and is not sent to our own servers:
              </p>
              <ul>
                <li>Game progress (level number and star ratings for each level)</li>
                <li>App settings (sound, music, haptic feedback, language preference)</li>
              </ul>
              <p>
                This data is stored using your device&apos;s local storage (SharedPreferences on Android)
                and can be cleared by uninstalling the app or clearing app data.
              </p>

              <h3>2.4 Sensor Data</h3>
              <p>
                Some game mechanics in {APP_NAME} use your device&apos;s motion and orientation sensors
                (accelerometer/gyroscope) for gameplay only. This sensor data is processed in
                real-time on your device and is <strong>never stored or transmitted</strong>.
              </p>
            </section>

            <section className="policy-section">
              <h2>3. How We Use Your Information</h2>
              <p>
                We do not operate our own user database. Third-party services process data to:
              </p>
              <ul>
                <li>Display and measure in-app advertisements (Google AdMob)</li>
                <li>Understand how the game is used and improve gameplay (Firebase Analytics)</li>
                <li>Detect and fix crashes and technical issues (Firebase Crashlytics)</li>
                <li>Measure app install and in-app event performance for marketing (Meta, TikTok, where enabled)</li>
                <li>Comply with advertising consent requirements (Google UMP)</li>
              </ul>
              <p>
                We do <strong>not</strong> sell your personal information. We do not use third-party
                analytics to build a profile of you for unrelated purposes.
              </p>
            </section>

            <section className="policy-section">
              <h2>4. Third-Party Services</h2>

              <h3>4.1 Google AdMob</h3>
              <p>
                {APP_NAME} uses <strong>Google AdMob</strong> to display in-app advertisements
                (interstitial and rewarded video ads). AdMob is operated by Google LLC.
              </p>
              <p>You can limit personalized ads in device settings:</p>
              <ul>
                <li>
                  <strong>Android:</strong> Settings → Google → Ads → opt out or reset advertising ID
                </li>
                <li>
                  <strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking → disable &quot;Allow Apps to Request to Track&quot;
                </li>
              </ul>
              <p>
                Privacy policy:{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy
                </a>
              </p>
              <p>
                AdMob data use:{' '}
                <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">
                  https://support.google.com/admob/answer/6128543
                </a>
              </p>

              <h3>4.2 Google Firebase (Analytics &amp; Crashlytics)</h3>
              <p>
                We use Google Firebase to analyze app usage and report crashes.
              </p>
              <p>
                Privacy policy:{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy
                </a>
                {' · '}
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
                  https://firebase.google.com/support/privacy
                </a>
              </p>

              <h3>4.3 Meta (Facebook) App Events</h3>
              <p>
                We use the Meta SDK to measure app events for advertising optimization.
              </p>
              <p>
                Privacy policy:{' '}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
                  https://www.facebook.com/privacy/policy/
                </a>
              </p>

              <h3>4.4 TikTok Business SDK</h3>
              <p>
                We use the TikTok SDK to measure app events for advertising optimization.
              </p>
              <p>
                Privacy policy:{' '}
                <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  https://www.tiktok.com/legal/privacy-policy
                </a>
              </p>

              <h3>4.5 Google User Messaging Platform (UMP)</h3>
              <p>
                Where required, we show a consent form for ads and related measurement.
                Your choices are handled by Google&apos;s consent framework.
              </p>

              <h3>4.6 Google Play / Apple App Store</h3>
              <p>
                {APP_NAME} is distributed through Google Play (Android) and may be listed on the Apple App Store.
                These platforms may collect usage and diagnostic data under their own privacy policies.
              </p>

              <h3>4.7 In-App Review</h3>
              <p>
                The app may prompt you to leave a review using the native in-app review API
                provided by Google Play or the Apple App Store. No personal information is collected
                by us through this process; any data is handled by the respective platform.
              </p>
            </section>

            <section className="policy-section">
              <h2>5. Legal Basis (EEA/UK — GDPR)</h2>
              <p>Where GDPR applies, processing is based on:</p>
              <ul>
                <li><strong>Consent</strong> — personalized ads and certain measurement (where you are asked and agree)</li>
                <li><strong>Legitimate interests</strong> — app analytics, crash reporting, and fraud prevention, balanced against your rights</li>
              </ul>
              <p>
                You may withdraw consent for ads via device settings or in-app ad preference options where available.
              </p>
            </section>

            <section className="policy-section">
              <h2>6. Data Retention</h2>
              <p>
                We do not store personal data on our own servers. Local game data remains on your device
                until you delete the app. Third parties retain data according to their own policies
                (Google, Meta, TikTok).
              </p>
            </section>

            <section className="policy-section">
              <h2>7. Children&apos;s Privacy</h2>
              <p>
                {APP_NAME} is designed for general audiences. We do not knowingly collect personal
                information from children under 13 (or the applicable age in your country).
                We do not require account creation.
              </p>
              <p>
                Where required, we use non-personalized ads and follow platform rules for child-directed content.
              </p>
              <p>
                If you are a parent or guardian and believe your child has provided us with personal
                information, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <section className="policy-section">
              <h2>8. Your Privacy Rights (GDPR — EEA/UK)</h2>
              <p>
                If you are located in the European Economic Area (EEA) or the United Kingdom, you may have
                rights to access, rectify, erase, restrict, object to, or port your personal data.
              </p>
              <p>Because we do not hold data directly, requests often apply to:</p>
              <ul>
                <li><strong>Google:</strong>{' '}
                  <a href="https://myaccount.google.com" target="_blank" rel="noopener noreferrer">
                    https://myaccount.google.com
                  </a>
                </li>
                <li><strong>Meta:</strong>{' '}
                  <a href="https://www.facebook.com/help/contact" target="_blank" rel="noopener noreferrer">
                    https://www.facebook.com/help/contact
                  </a>
                </li>
                <li><strong>TikTok:</strong>{' '}
                  <a href="https://www.tiktok.com/legal/report/privacy" target="_blank" rel="noopener noreferrer">
                    https://www.tiktok.com/legal/report/privacy
                  </a>
                </li>
              </ul>
              <p>
                For any privacy-related requests, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <section className="policy-section">
              <h2>9. California Privacy Rights (CCPA/CPRA)</h2>
              <p>
                If you are a California resident, you may have additional rights regarding your personal information.
              </p>
              <p>
                We do not sell personal information. Device identifiers and app events may be{' '}
                <strong>shared</strong> with advertising and analytics partners. You may opt out of
                personalized advertising via your device advertising settings.
              </p>
              <p>
                For CCPA-related inquiries, contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <section className="policy-section">
              <h2>10. Data Security</h2>
              <p>
                We rely on reputable third-party providers and reasonable safeguards. However, no method
                of transmission over the internet is 100% secure, and we cannot guarantee the absolute
                security of information processed by third-party services.
              </p>
              <p>
                Local data on your device is protected by your device&apos;s built-in security mechanisms.
              </p>
            </section>

            <section className="policy-section">
              <h2>11. International Transfers</h2>
              <p>
                Third-party providers may process data in countries outside your own, including the
                United States, under their standard contractual and policy safeguards.
              </p>
            </section>

            <section className="policy-section">
              <h2>12. Links to Other Websites</h2>
              <p>
                {APP_NAME} may contain links to external websites (such as Google Play or the Apple App
                Store). This Privacy Policy does not apply to those external sites. We encourage you
                to review the privacy policies of any websites you visit through links in our app.
              </p>
            </section>

            <section className="policy-section">
              <h2>13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will update the &quot;Last updated&quot;
                date at the top of this page. Your continued use of {APP_NAME} after any changes
                constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section className="policy-section">
              <h2>14. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or
                our data practices, please contact us:
              </p>
              <div className="policy-contact-block">
                <p><strong>{COMPANY_NAME}</strong></p>
                <p>Istanbul, Turkey</p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
                <p>
                  Website:{' '}
                  <a href={WEBSITE} target="_blank" rel="noopener noreferrer">{WEBSITE}</a>
                </p>
              </div>
              <p style={{ marginTop: '16px' }}>
                We aim to respond to all privacy-related inquiries within 30 days.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}
