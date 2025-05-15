# Progress: Isaac Almanza Website Optimization

## Current Status: Initialization

Memory Bank setup is in progress. All checklist items are currently pending.

## Checklist Items (from provided list - Last updated: May 2025)

### 1️⃣ TECHNICAL SEO SETUP

**🧩 Basic Essentials**

- [x] Add `sitemap.xml` via `next-sitemap`
- [x] Generate `robots.txt` from `next-sitemap`
- [ ] Submit sitemap to Google Search Console
- [ ] Fix 404 page link (1 broken internal page)
- [x] Fix 1 page missing `<h1>` (each page needs one clear h1)

**🔄 Meta & Tag Hygiene**

- [x] Add unique `<title>` and `<meta description>` to all pages
- [ ] Shorten any meta descriptions over 160 characters
- [ ] Avoid duplicate `<title>` and `<meta>` tags (seen on 2+ pages)
- [ ] Add Open Graph tags to homepage & blog posts
- [ ] Add Twitter Card tags (`summary_large_image`)

### 2️⃣ CONTENT & KEYWORD STRATEGY

**✍ Blog & SEO Landing Pages**

- [ ] Write new post: "What is High Agency?" targeting:
  - high agency meaning
  - what is a high agency person
  - high agency person meaning
- [ ] Expand under-300-word pages to ≥500 words
- [ ] Add internal links from homepage/blog to low-linked pages (Ahrefs)
- [ ] Create a `/start-here` page that links to blog, projects, and newsletter
- [ ] Ensure all indexable pages are in sitemap

### 3️⃣ PERFORMANCE (PageSpeed Insights)

**🔧 Technical Fixes**

- [ ] Reduce unused JavaScript (`next/dynamic` + tree-shaking unused libs)
- [ ] Improve cache headers with `Cache-Control` in `next.config.js`
- [ ] Avoid legacy JS with: `experimental: { legacyBrowsers: false }`
- [ ] Optimize images with `<Image />` and use `priority` for above-the-fold
- [ ] Compress heavy files >500kB (fonts, media, embeds)

### 4️⃣ BRANDING & EXPERIENCE

**🪪 Structured Data & Identity**

- [ ] Add JSON-LD schema:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Isaac Almanza",
    "jobTitle": "Fintech Engineer",
    "url": "https://ialmanza.com",
    "sameAs": [
      "https://twitter.com/ialmanzaj",
      "https://linkedin.com/in/isaacalmanza",
      "https://github.com/ialmanzaj"
    ]
  }
  ```
- [ ] Add favicon and social preview image (`og-image.png`)
- [ ] Update `/` and `/about` to include:
  - Location (Medellín, Panama)
  - Keywords: Fintech LATAM, Panama software engineer, YC fintech

### 5️⃣ ACCESSIBILITY (a11y)

- [ ] Add `aria-label` to all icon-only or social links
- [ ] Add `alt` text to all images
- [ ] Ensure all interactive elements are keyboard accessible
- [ ] Avoid link repetition (e.g., don't use "click here" only)

## Known Issues

- None identified yet beyond the checklist items.

## What Works

- Memory Bank initialization in progress.

## What's Left to Build/Fix

- All items on the optimization checklist.
