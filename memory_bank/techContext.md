# Tech Context: Isaac Almanza Website

## 1. Primary Technologies

- **Frontend Framework:** Next.js (inferred from checklist items like `next-sitemap`, `next/dynamic`, `next.config.js`, `<Image />` component, `experimental: { legacyBrowsers: false }`).
- **Language:** JavaScript (and potentially TypeScript, common with Next.js projects).
- **Package Manager:** Likely npm or Yarn (standard for Node.js/Next.js projects).

## 2. Key Libraries & Tools (Inferred or Planned)

- **`next-sitemap`:** For generating `sitemap.xml` and `robots.txt`.
- **Potentially a Markdown processor:** If blog posts are written in Markdown.
- **Linters/Formatters:** (e.g., ESLint, Prettier) - common in modern web development, though not explicitly mentioned.
- **Version Control:** Git (assumed for any modern software project).

## 3. Development Environment & Setup

- **Node.js:** Required for Next.js development.
- Details on the specific development setup (e.g., commands to run the dev server, build process) will be documented once the codebase is accessed.

## 4. Technical Constraints & Considerations

- **Performance:** A key focus, with specific targets for reducing JavaScript, optimizing images, and improving caching.
- **SEO Best Practices:** Adherence to SEO guidelines is critical.
- **Accessibility (a11y):** Implementation of WAI-ARIA standards and ensuring keyboard accessibility.
- **Browser Compatibility:** Modern browsers are targeted, with legacy browser support being explicitly disabled (`experimental: { legacyBrowsers: false }`).

## 5. Dependencies

- The full list of dependencies will be available from the `package.json` file in the project.

## 6. Deployment

- Hosting platform is currently unknown (e.g., Vercel, Netlify, AWS Amplify). This will be relevant for configuring cache headers and other platform-specific settings.

## 7. API Integrations

- No explicit API integrations mentioned in the checklist, but this could change as we explore blog content or other features.
