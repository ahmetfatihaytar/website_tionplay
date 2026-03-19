import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEOHead from '../components/SEOHead'

const CONTACT_EMAIL = 'info@tionplay.com'
const APP_NAME = 'TapStop'
const COMPANY_NAME = 'Tion Play'
const WEBSITE = 'https://tionplay.com'

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
            <p className="policy-date">{t('privacy.lastUpdated')}: March 20, 2026</p>
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
              <ul>
                <li>
                  <strong>Advertising identifier</strong> — Your device's advertising ID (IDFA on iOS,
                  GAID/AAID on Android) may be collected by Google AdMob to serve personalized or
                  non-personalized ads.
                </li>
                <li>
                  <strong>IP address</strong> — Your approximate IP address may be used by Google AdMob
                  to determine coarse location for ad targeting and frequency capping.
                </li>
                <li>
                  <strong>Device information</strong> — Device model, operating system version, language,
                  and screen resolution may be collected to optimize ad delivery.
                </li>
                <li>
                  <strong>App usage data</strong> — Ad interaction data (e.g., whether an ad was viewed
                  or clicked) collected by Google AdMob for ad performance measurement.
                </li>
              </ul>

              <h3>2.3 Data Stored Locally on Your Device</h3>
              <p>
                The following data is stored <strong>only on your device</strong> and is never
                transmitted to our servers:
              </p>
              <ul>
                <li>Game progress (level number and star ratings for each level)</li>
                <li>App settings (sound on/off, music on/off, haptic feedback on/off)</li>
              </ul>
              <p>
                This data is stored using your device's local storage (SharedPreferences on Android,
                NSUserDefaults on iOS) and can be cleared by uninstalling the app.
              </p>

              <h3>2.4 Sensor Data</h3>
              <p>
                Some game mechanics in {APP_NAME} use your device's motion and orientation sensors
                (accelerometer/gyroscope) for gameplay only. This sensor data is processed in
                real-time on your device and is <strong>never stored or transmitted</strong>.
              </p>
            </section>

            <section className="policy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We do not collect or use personal information directly. The data collected via
              third-party services is used for the following purposes:</p>
              <ul>
                <li>To display advertisements within the app (via Google AdMob)</li>
                <li>To measure ad performance and prevent ad fraud</li>
                <li>To provide a free gaming experience supported by advertising revenue</li>
              </ul>
              <p>
                We do <strong>not</strong> sell, trade, or rent any personal information to third parties
                beyond what is described in this policy.
              </p>
            </section>

            <section className="policy-section">
              <h2>4. Third-Party Services</h2>

              <h3>4.1 Google AdMob</h3>
              <p>
                {APP_NAME} uses <strong>Google AdMob</strong> to display in-app advertisements
                (interstitial and rewarded video ads). AdMob is operated by Google LLC and may collect
                and process data as described in Google's privacy policy.
              </p>
              <p>
                Google may use the advertising ID and other information to provide personalized ads
                based on your interests. You can opt out of personalized advertising at any time
                through your device settings:
              </p>
              <ul>
                <li>
                  <strong>Android:</strong> Settings → Google → Ads → "Delete advertising ID" or
                  "Opt out of Ads Personalization"
                </li>
                <li>
                  <strong>iOS:</strong> Settings → Privacy & Security → Tracking → Disable "Allow Apps
                  to Request to Track"
                </li>
              </ul>
              <p>
                For more information on how Google uses data, please visit:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
              <p>
                Google AdMob's data use policy:{' '}
                <a
                  href="https://support.google.com/admob/answer/6128543"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.google.com/admob/answer/6128543
                </a>
              </p>

              <h3>4.2 Google Play Services / Apple App Store</h3>
              <p>
                {APP_NAME} is distributed through Google Play (Android) and the Apple App Store (iOS).
                These platforms may collect certain usage and diagnostic data as governed by their own
                privacy policies:
              </p>
              <ul>
                <li>
                  Google Play:{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://policies.google.com/privacy
                  </a>
                </li>
                <li>
                  Apple App Store:{' '}
                  <a
                    href="https://www.apple.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.apple.com/legal/privacy/
                  </a>
                </li>
              </ul>

              <h3>4.3 In-App Review</h3>
              <p>
                The app may prompt you to leave a review using the native in-app review API
                provided by Google Play or the Apple App Store. No personal information is collected
                by us through this process; any data is handled by the respective platform.
              </p>
            </section>

            <section className="policy-section">
              <h2>5. Data Retention</h2>
              <p>
                Since we do not collect personal data on our own servers, there is no retention
                period to specify on our side. Local device data (game progress and settings) is
                retained on your device until you uninstall the application or clear the app's data
                through your device settings.
              </p>
              <p>
                Data collected by Google AdMob is retained according to Google's own data retention
                policies. Please refer to Google's Privacy Policy for details.
              </p>
            </section>

            <section className="policy-section">
              <h2>6. Children's Privacy</h2>
              <p>
                {APP_NAME} is designed for general audiences and is rated for users of all ages.
                We are committed to protecting the privacy of children.
              </p>
              <p>
                <strong>We do not knowingly collect personal information from children under the age of
                13</strong> (or the applicable age of digital consent in your jurisdiction). The app
                does not require account creation, and we do not request any personally identifiable
                information from any user, including children.
              </p>
              <p>
                Regarding advertising: on Android, we configure Google AdMob to serve ads appropriate
                for all ages (non-personalized ads) where required by applicable law. On iOS, we
                follow Apple's guidelines regarding advertising to children.
              </p>
              <p>
                If you are a parent or guardian and believe your child has provided us with personal
                information, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will take appropriate
                action.
              </p>
            </section>

            <section className="policy-section">
              <h2>7. Your Privacy Rights (GDPR — EEA/UK Users)</h2>
              <p>
                If you are located in the European Economic Area (EEA) or the United Kingdom, you have
                certain rights under the General Data Protection Regulation (GDPR) and applicable
                national laws regarding your personal data:
              </p>
              <ul>
                <li><strong>Right of Access</strong> — You have the right to request copies of your personal data.</li>
                <li><strong>Right to Rectification</strong> — You have the right to request correction of inaccurate data.</li>
                <li><strong>Right to Erasure</strong> — You have the right to request deletion of your personal data.</li>
                <li><strong>Right to Restrict Processing</strong> — You have the right to request restriction of processing your data.</li>
                <li><strong>Right to Data Portability</strong> — You have the right to request transfer of your data to another organization.</li>
                <li><strong>Right to Object</strong> — You have the right to object to our processing of your data.</li>
              </ul>
              <p>
                Since we do not directly collect personal data, most of these rights apply to data
                held by Google AdMob. You can exercise these rights directly with Google at{' '}
                <a
                  href="https://myaccount.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://myaccount.google.com
                </a>.
              </p>
              <p>
                For any privacy-related requests, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <section className="policy-section">
              <h2>8. California Privacy Rights (CCPA)</h2>
              <p>
                If you are a California resident, the California Consumer Privacy Act (CCPA) may
                provide you with additional rights regarding your personal information.
              </p>
              <p>
                We do not sell personal information. We do share device advertising identifiers with
                Google AdMob for advertising purposes, which may constitute "sharing" under the CCPA.
                You may opt out of this by resetting or deleting your advertising ID as described in
                Section 4.1 of this policy.
              </p>
              <p>
                For any CCPA-related inquiries, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <section className="policy-section">
              <h2>9. Data Security</h2>
              <p>
                We take reasonable measures to protect the information collected through {APP_NAME}.
                However, please be aware that no method of transmission over the internet or method of
                electronic storage is 100% secure, and we cannot guarantee the absolute security of
                any information processed by third-party services.
              </p>
              <p>
                The local data stored on your device (game progress and settings) is protected by your
                device's built-in security mechanisms.
              </p>
            </section>

            <section className="policy-section">
              <h2>10. Links to Other Websites</h2>
              <p>
                {APP_NAME} may contain links to external websites (such as Google Play or the Apple App
                Store). This Privacy Policy does not apply to those external sites. We encourage you
                to review the privacy policies of any websites you visit through links in our app.
              </p>
            </section>

            <section className="policy-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices
                or for other operational, legal, or regulatory reasons. We will notify you of any
                significant changes by updating the "Last updated" date at the top of this page.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically. Your continued use of
                {' '}{APP_NAME} after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section className="policy-section">
              <h2>12. Contact Us</h2>
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
                We will respond to all privacy-related inquiries within 30 days.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}
