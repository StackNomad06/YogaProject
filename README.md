# Divine Yoga Studio

A premium, SEO-optimized Yoga & Wellness studio website — built with React 19, Vite, Tailwind CSS, Framer Motion, and React Router.

## Stack

- **React 19** + **Vite 6** — fast dev server, route-level code splitting
- **Tailwind CSS** — custom design tokens for the brand palette & type scale
- **Framer Motion** — scroll reveals, page transitions, the animated "breathing" hero indicator
- **React Router v6** — client-side routing with lazy-loaded pages
- **React Helmet Async** — per-page `<title>`, meta description, canonical, Open Graph, Twitter Card, and JSON-LD structured data
- **React Hook Form** — validated contact form
- **Swiper.js** — auto-sliding testimonials carousel
- **React Icons** — icon set (Feather, Font Awesome, Game Icons)

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

> `--legacy-peer-deps` is needed once because `react-helmet-async`'s published peer-dependency
> range hasn't been bumped to include React 19 yet, even though it works correctly with it.

Build for production:

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
├── components/    Reusable UI: Navbar, Footer, Button, SEO, SectionHeading, ThemeToggle, etc.
├── pages/         Route-level pages: Home, About, Services, Trainers, Blog, Contact, NotFound
├── layouts/        MainLayout (Navbar + Footer shell used by all routes)
├── sections/       Page sections composed into pages (Hero, ServicesSection, FAQSection, etc.)
├── hooks/          Custom hooks (useCounter for animated stats)
├── context/        ThemeContext for dark/light mode
├── routes/         AppRoutes.jsx — React Router route table with lazy imports
├── utils/          schema.js — Schema.org JSON-LD builders
├── data/           Content data: services, trainers, testimonials, faqs, blog, benefits
└── App.jsx
```

## SEO Implementation

- **Per-page metadata** via `<SEO />` (src/components/SEO.jsx): dynamic title, meta description,
  canonical URL, keywords, Open Graph tags, Twitter Card tags.
- **Structured data** via `src/utils/schema.js`: `HealthAndBeautyBusiness` organization schema on
  every page, `FAQPage` schema on the FAQ section, `Service` schema per program, and
  `BreadcrumbList` schema on inner pages.
- **robots.txt** and **sitemap.xml** in `/public`.
- **Semantic HTML**: one `<h1>` per page, proper heading hierarchy, `<nav>`, `<main>`, `<footer>`,
  `<article>`, `<figure>`/`<figcaption>` for testimonials.
- **Accessibility (WCAG)**: skip-to-content link, visible focus states, `aria-live`/`role="status"`
  on form success/error messages, `aria-expanded`/`aria-controls` on the FAQ accordion and mobile
  menu, alt text on every image, reduced-motion support.
- **Performance**: route-based code splitting (`React.lazy` + `Suspense`), manual vendor chunking
  in `vite.config.js`, `loading="lazy"` + `decoding="async"` on below-the-fold images via
  `LazyImage`, `fetchPriority="high"` on the hero image.

## Before Going Live

1. Replace the Unsplash placeholder photography in `src/data/*.js` and the section files with
   licensed, on-brand photography of your studio, trainers, and founder.
2. Update the address, phone, email, and Google Maps embed query in `ContactSection.jsx` and
   `src/utils/schema.js` with your real studio details.
3. Add real `og-image.jpg` and `logo.png` files to `/public` (referenced in `SEO.jsx` and
   `schema.js`).
4. Wire the newsletter form (`Footer.jsx`) and contact form (`ContactSection.jsx`) up to your
   email service provider / CRM or backend endpoint.
5. Update `public/sitemap.xml` and the canonical domain in `SEO.jsx` / `schema.js` if your final
   domain differs from `divineheartsoulyooga.com`.
# YogaProject
