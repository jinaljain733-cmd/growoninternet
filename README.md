# 🚀 Jinal Jain — Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![Custom Domain](https://img.shields.io/badge/Domain-growoninternet.com-orange?style=flat)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-Optimised-brightgreen?style=flat)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat)

> 💼 **Personal Portfolio** — Frontend development meets technical SEO, deployed to production.

The portfolio website of **Jinal Jain**, a Mumbai-based Frontend Developer & SEO Specialist. Built with pure HTML, CSS and JavaScript — no frameworks, no build step — and deployed on Netlify with a custom domain, production-grade security headers, full structured data, SEO optimisation, and WhatsApp contact integration.

---

## 🌐 Live Website

**[https://www.growoninternet.com](https://www.growoninternet.com)**

---

## 📸 Preview

![Portfolio Banner](og-image.jpg)

---

## ✨ Features

- Sticky navbar with scroll-aware state and smooth in-page scrolling
- Mobile hamburger menu with accessible toggle
- Project showcase **carousel** — touch/swipe friendly, snap scrolling
- Interactive **skills tabs** and an expandable **FAQ accordion**
- Scroll reveal animations via `IntersectionObserver`
- Contact form with validation — required fields + email format check
- **WhatsApp integration** — the form submits straight to a WhatsApp chat (no backend, no email)
- Custom on-brand **404 page** with quick links back
- **Structured data (JSON-LD)** — Person, WebSite, ProfessionalService & FAQPage schema
- SEO optimised — meta tags, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`
- **WebP images with JPG fallback** via `<picture>` — 40–60% lighter
- Lazy-loaded images with width/height set (zero layout shift)
- Favicon set — `.ico`, 32×32, 192×192, Apple touch icon (all from the brand "G" mark)
- Custom 1200×630 **Open Graph card** for rich link previews
- Accessibility — skip link, ARIA roles, focus-visible states, `prefers-reduced-motion`
- Deployed on **Netlify** with custom domain `growoninternet.com`
- WWW as primary — apex → WWW (301), HTTP → HTTPS (301)
- Production security headers — HSTS, CSP, X-Frame-Options, nosniff
- Aggressive asset caching — images & icons cached for 1 year

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure, SEO meta tags, Open Graph, JSON-LD |
| CSS3 | Variables, Grid, Flexbox, animations, scroll reveal, reduced-motion |
| JavaScript (ES6+) | Navbar, carousel, tabs, FAQ, form validation, WhatsApp |
| Google Fonts | Bricolage Grotesque (display) + Hanken Grotesk (body) + JetBrains Mono (mono accents) |
| Netlify | Hosting, custom domain, redirects, security headers, caching |
| `netlify.toml` | Header rules, CSP, cache config |

---

## 🧠 JavaScript Features

- `IntersectionObserver` — scroll reveal animations
- Project carousel — scroll-snap with arrow + dot navigation
- FAQ accordion + skills tab switching
- `encodeURIComponent` — WhatsApp message URL encoding
- Form validation — required field + email regex checks before sending
- Popup-safe `window.open` with same-tab fallback for the WhatsApp hand-off
- Smooth scroll with navbar-height offset
- `DOMContentLoaded` — modular function initialisation

---

## 🔍 SEO & Performance

- **JSON-LD structured data** — Person, WebSite, ProfessionalService, FAQPage (cross-linked via `@id`)
- `sitemap.xml` — ready to submit to Google Search Console
- `robots.txt` — allows all crawlers, points to the sitemap
- Open Graph + Twitter Card meta — rich previews on WhatsApp, LinkedIn & X
- Custom `og-image.jpg` (1200×630) for link previews
- WebP-first images with JPG fallback; lazy loading; no cumulative layout shift
- Full favicon set including Apple touch icon
- Images & PNG icons `Cache-Control: max-age=31536000` — 1 year cache
- HSTS — `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

---

## 🔒 Security Headers (via Netlify)

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; object-src 'none';
  img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com;
  form-action 'self'; base-uri 'self'; frame-ancestors 'self'
```

---

## 💼 Projects Featured

| Project | Type |
|---|---|
| **Jinal Collection** | Live freelance client — premium fabric supplier ([jinalcollection.in](https://www.jinalcollection.in)) |
| **Zaaika** | Fine-dining restaurant landing page |
| **ClothingCo** | Fashion / tailoring brand site |
| **Shop** | E-commerce storefront UI |
| **Launch** | SaaS product landing page |
| **The Brief** | Editorial / blog UI |
| **Weather App** | JavaScript weather lookup app |

---

## 📁 Project Structure

```
growoninternet/
├── index.html            # Main page
├── 404.html              # Custom not-found page
├── style.css             # All styles
├── script.js             # All JavaScript
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Search crawler rules
├── netlify.toml          # Netlify config — security headers + caching
├── .gitignore
├── favicon.ico           # Browser tab icon
├── favicon-32x32.png     # 32px favicon
├── favicon-192x192.png   # Android / PWA icon
├── apple-touch-icon.png  # iOS home-screen icon
├── og-image.jpg          # Open Graph social preview (1200×630)
├── images/               # Project screenshots (.webp + .jpg fallback)
└── README.md
```

---

## 🚀 Deployment

Deployed on **Netlify** with a custom domain via GitHub continuous deployment.

```
Live URL:  https://www.growoninternet.com
Platform:  Netlify (auto-deploy from GitHub)
Domain:    growoninternet.com (custom)
Primary:   www.growoninternet.com
Redirects: apex → WWW (301), HTTP → HTTPS (301)
Publish:   . (site root, no build step)
```

---

## 📞 Contact

**Jinal Jain** — Frontend Developer & SEO Specialist
📍 Mumbai, India
💬 WhatsApp: +91 72085 09408
🌐 [growoninternet.com](https://www.growoninternet.com)

---

## 👩‍💻 Built By

**Jinal Jain** — Freelance Frontend Developer & SEO Specialist
- GitHub: [@jinaljain733-cmd](https://github.com/jinaljain733-cmd)
- LinkedIn: [linkedin.com/in/jinal-jain-08b70328b](https://linkedin.com/in/jinal-jain-08b70328b)

---

## 📄 License

© 2026 Jinal Jain. All rights reserved.

> This is a personal portfolio. The code and design are proprietary and may not be reused, copied or redistributed without written permission.