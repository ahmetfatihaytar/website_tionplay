# Tion Play — Official Website

A production-grade, multilingual React website for **Tion Play**, an indie mobile game studio from Istanbul, Turkey.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📦 Tech Stack

- **React 18** + **Vite 5**
- **react-router-dom v6** (language-prefixed routing: `/:lang/page`)
- **react-i18next** + **i18next** — 10-language support (EN, TR, DE, FR, ES, PT, BR, JA, KO, ZH, AR)
- **react-helmet-async** — dynamic SEO meta tags per page
- **Pure CSS** — CSS variables, Grid, Flexbox, no UI frameworks
- **CSS Animations** + **Intersection Observer** — scroll animations

## 🌍 Supported Languages

| Code | Language | RTL |
|------|----------|-----|
| en | English | No |
| tr | Turkish | No |
| de | German | No |
| fr | French | No |
| es | Spanish | No |
| pt | Portuguese (BR) | No |
| ja | Japanese | No |
| ko | Korean | No |
| zh | Chinese (Simplified) | No |
| ar | Arabic | Yes |

## 📁 Project Structure

```
src/
├── components/     # Navbar, Footer, SEOHead, LanguageSwitcher, ScrollToTop
├── pages/          # Home, About, Games, GameDetail, Blog, BlogPost, Contact, NotFound
├── data/           # games.js, blog posts per language
├── styles/         # globals.css
├── App.jsx         # Router + language wrapper
├── i18n.js         # i18next configuration
└── main.jsx        # Entry point
```

## 🏗️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 🎮 About Tion Play

Tion Play is a one-person indie mobile game studio from Istanbul, Turkey. Founded by Fatih Aytar and named after his cat Tion. We craft precision games that are simple to play but hard to master.

**Website:** [tionplay.com](https://tionplay.com)  
**Email:** hello@tionplay.com  
**Game:** [TapStop — Google Play](https://play.google.com/store/apps/details?id=com.tionplay.tapstop)

## 📄 Logo

Place your logo at `public/logo.png` — it will automatically appear in the Navbar and Footer.

## 🔧 Configuration

- **Formspree**: Update `YOUR_FORM_ID` in `src/pages/Contact.jsx` with your actual Formspree ID
- **Google Play URL**: Update the TapStop Google Play URL in `src/data/games.js`
- **Domain**: Update `https://tionplay.com` references in `public/index.html` and `public/sitemap.xml` if deploying to a different domain

## 📝 Blog Content

The blog system contains 100 unique, SEO-optimized posts in English (and localized versions in all 9 other languages), covering:
- Flutter Game Development
- Indie Dev Journey
- Game Design Principles
- Mobile Industry Insights
- App Store Optimization
- And more...

## 🌐 Deployment

```bash
npm run deploy
```

Deploys to GitHub Pages at `https://tionplay.com` (configured via `homepage` in `package.json`).

---

*© 2026 Tion Play. All rights reserved.*
