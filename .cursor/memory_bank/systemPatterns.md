# System Patterns: Isaac Almanza Website

## 1. Architecture Overview

Based on the checklist, the website is likely built using a modern JavaScript framework, specifically Next.js, due to references like `next-sitemap`, `next/dynamic`, `next.config.js`, and `<Image />` component.

## 2. Key Technical Decisions (Inferred or Planned)

- **Framework:** Next.js for server-side rendering (SSR) or static site generation (SSG), enabling SEO benefits and performance features.
- **SEO Management:** `next-sitemap` will be used for generating `sitemap.xml` and `robots.txt`.
- **Performance Optimization:**
  - Dynamic imports (`next/dynamic`) for code-splitting and reducing initial JavaScript load.
  - Tree-shaking to remove unused library code.
  - Next.js Image component (`<Image />`) for image optimization (resizing, format conversion, lazy loading).
  - Cache-Control headers configured in `next.config.js` for browser and CDN caching.
  - Disabling support for legacy browsers (`experimental: { legacyBrowsers: false }`) to reduce bundle size.
  - Compression for heavy files.
- **Content Structure:**
  - Clear `<h1>` tags on each page for semantic structure.
  - Unique `<title>` and `<meta description>` tags per page.
  - Open Graph and Twitter Card meta tags for social sharing.
  - JSON-LD structured data for enhanced search engine understanding.
- **Accessibility (a11y):**
  - `aria-label` attributes for non-textual links (e.g., social icons).
  - `alt` text for all images.
  - Ensuring keyboard navigability for interactive elements.

## 3. Design Patterns (To be identified/confirmed)

- **Component-Based Architecture:** Common with Next.js and React.
- **Page-Based Routing:** Next.js convention using the `pages` directory.
- **Dynamic Content:** Blog posts and potentially other content might be dynamically generated or sourced.

## 4. Component Relationships (High-Level)

- **Layout Components:** Likely a main layout component will handle common elements like header, footer, and navigation, including meta tags.
- **Page Components:** Each URL path will correspond to a page component.
- **SEO Components:** Specific components or utilities might be used to manage SEO-related tags (titles, metas, structured data).

## 5. Future Considerations

- As we explore the codebase, we will update this document with more specific patterns and architectural details observed.
