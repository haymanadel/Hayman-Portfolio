# Hayman Portfolio

The personal website of **Hayman Adel** — Mechatronics Engineering graduate (AASTMT),
Web & Application Developer. A short, visual, bilingual (English / Arabic) portfolio
built to be linked from social bios: in a few seconds a visitor sees who I am, my
real work, and how to reach me.

This is an independent project. It shares no code, database, environment,
deployment or repository with any other project.

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7 — static HTML output, no client framework |
| Language | TypeScript (strict) |
| Styling | Plain CSS with design tokens (`src/styles/global.css`) + component-scoped styles |
| Fonts | Inter Tight, JetBrains Mono, Readex Pro (Arabic, loaded on /ar/ only) — self-hosted variable fonts |
| JavaScript | Four small inlined scripts: theme, header/menu/active nav, scroll reveal, hero portrait tilt |
| Motion | CSS keyframes, native scroll-driven animations and cross-document view transitions — all off under `prefers-reduced-motion` |

No backend, no database, no environment variables, no secrets.

## Run locally

Requires Node.js 22+ and pnpm (`corepack enable`).

```bash
pnpm install
pnpm dev        # http://localhost:4321 with hot reload
pnpm build      # type-check (astro check) + production build into dist/
pnpm preview    # serve the production build locally
```

## Deployment (Vercel)

The site is deployed as a **static** Astro build on Vercel:
browser → Vercel CDN → files in `dist/`. There is no server, API or database.

| Setting | Value |
|---|---|
| Framework preset | Astro (auto-detected) |
| Install command | `pnpm install` |
| Build command | `pnpm build` |
| Output directory | `dist` |
| Node.js | 22.x |
| Environment variables | none |

The Vercel project is connected to this GitHub repository: every push to `main`
deploys to production automatically, and pull requests get preview deployments.
No `vercel.json` is needed.

`dist/` is plain static files, so any other static host (Netlify, Cloudflare
Pages, GitHub Pages) works with the same build command and output directory.

### Site URL (canonical, sitemap, Open Graph)

Absolute URLs — `<link rel="canonical">`, `og:url`, the absolute `og:image`,
`sitemap.xml` and the `Sitemap:` line in `robots.txt` — come from one resolved
origin (see `astro.config.mjs`):

1. `url` in **`src/data/site.ts`**, when set;
2. otherwise, on Vercel, the project's production domain
   (`VERCEL_PROJECT_PRODUCTION_URL`, provided by Vercel at build time);
3. otherwise nothing — local builds never emit localhost URLs.

## Custom Domain

1. In Vercel: **Project → Settings → Domains → Add**, enter your domain
   (add both `yourdomain.com` and `www.yourdomain.com`, and choose which one
   redirects to the other).
2. At your domain registrar, add exactly the DNS records Vercel shows for your
   domain, then wait until Vercel marks the domain as valid.
3. In **`src/data/site.ts`**, set `url` to the primary domain, e.g.
   `url: "https://yourdomain.com"` (use the `www` form if `www` is primary).
4. Commit and push to `main` — Vercel redeploys automatically.
5. Open the domain and confirm HTTPS works (Vercel issues the certificate).
6. View the page source: `<link rel="canonical">` must show your domain.
7. Open `/sitemap.xml` and `/robots.txt`: both must reference your domain.
8. Check that `og:url` and `og:image` in the page source use your domain, then
   re-test the link preview (e.g. the Facebook Sharing Debugger or LinkedIn Post
   Inspector) so social platforms refresh their cached preview.

## Where everything lives

```
src/
  i18n/                  ← ALL wording, per language — edit these, not components
    en.ts, ar.ts         every visible string (title/description/SEO included)
    types.ts             the shared shape — a missing translation is a type error
  data/                  ← language-neutral facts
    site.ts              domain (url), social preview images, theme colours
    profile.ts           name, photo, CV, toolkit
    projects.ts          project links + screenshots
    social.ts            email, WhatsApp, GitHub, LinkedIn, Instagram, …
  components/            Header, Hero, PortraitCard, Projects, ProjectCard, About, Contact, Footer
  layouts/               BaseLayout (<head>: SEO, hreflang, OG, JSON-LD), HomePage (sections)
  pages/                 index (EN), ar/index (AR, RTL), 404, robots.txt, sitemap.xml
  scripts/               theme.ts, header.ts, reveal.ts, hero.ts
public/
  images/profile/        background-removed portrait (WebP)
  images/projects/       real screenshots of the live projects
  images/branding/       og-image.png / og-image-ar.png (social previews)
  cv/                    your CV (PDF)
design/                  og-image.html (preview source), photo/ (original + full-res cutout)
```

## Languages

English lives at `/`, Arabic at `/ar/` (full right-to-left layout). The header
switch links between them with a native cross-fade; the choice is remembered
and `/` forwards returning Arabic visitors to `/ar/`. Both pages declare each
other with `hreflang` and appear in the sitemap. Change any text in
`src/i18n/en.ts` and `src/i18n/ar.ts` together.

## Common changes

**CV** — put the PDF in `public/cv/` and set
`cv: { href: "/cv/Hayman-Adel-CV.pdf", fileName: "Hayman-Adel-CV.pdf" }` in
`src/data/profile.ts`. *Download CV* buttons appear automatically (hero + About);
they stay hidden while `cv` is `null`, so there is never a dead button.

**LinkedIn / other links** — fill `href` and `display` in `src/data/social.ts`.
Empty entries stay hidden. Contact shows Email + WhatsApp buttons and icons for
GitHub, LinkedIn and Instagram.

**Profile photo** — replace the transparent WebP files in
`public/images/profile/` (4:5, 400w + 608w) and update `photo` in `profile.ts`.

**Projects** — edit `src/data/projects.ts` (link, domain, screenshots) and the
one-line texts in `src/i18n/*.ts` → `work.projects`. Screenshots: 1440×900
desktop + 360×779 mobile WebP in `public/images/projects/`.

**SEO / social preview** — titles and descriptions: `src/i18n/*.ts` → `meta`.
Preview images: `public/images/branding/og-image*.png` (1200×630), rendered from
`design/og-image.html` (add `?lang=ar` for the Arabic one).

**Colours** — tokens at the top of `src/styles/global.css` (light and dark sets).

## Quality checks

`pnpm build` runs `astro check` (TypeScript + template diagnostics) before
building. The site is verified in English and Arabic, light and dark, at
320–1920px: no horizontal overflow, working menu, language switch and theme
persistence, no console errors, content visible without JavaScript, and
reduced-motion respected.
