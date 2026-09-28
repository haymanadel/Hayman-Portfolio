# Hayman Portfolio

The personal website of **Hayman Adel** — Full-Stack Web Developer & Software Developer.
A fast, single-page portfolio built to be linked from Instagram, TikTok, LinkedIn,
GitHub and WhatsApp: in a few seconds a visitor sees who I am, what I build, real
projects, and how to reach me.

This is an independent project. It shares no code, database, environment,
deployment or repository with any other project.

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7 — static HTML output, no client framework |
| Language | TypeScript (strict) |
| Styling | Plain CSS with design tokens (`src/styles/global.css`) + component-scoped styles |
| Fonts | Inter Tight + JetBrains Mono, self-hosted variable fonts (`@fontsource-variable`) |
| JavaScript | Three small scripts, inlined: theme toggle, mobile menu / active nav, scroll reveal |

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
  data/                  ← ALL personal content — edit these, not components
    site.ts              domain, page title, meta description, social preview image
    profile.ts           name, title, tagline, availability, photo, CV, About text
    services.ts          "What I do"
    skills.ts            skill groups + capabilities
    projects.ts          projects (text, tech, links, screenshots)
    journey.ts           project-based timeline
    education.ts         AASTMT details (degree/specialization stay hidden until set)
    process.ts           "How I work" steps
    social.ts            email, GitHub, LinkedIn, Instagram, TikTok, WhatsApp
    types.ts             the shape of every item above
  components/            one component per section (Hero, About, Projects, …)
  layouts/BaseLayout.astro   <head>: SEO, Open Graph, JSON-LD, theme bootstrap
  scripts/               theme.ts, header.ts, reveal.ts
  styles/global.css      colour tokens (light + dark), type, buttons
  pages/                 index, 404, robots.txt, sitemap.xml
public/
  images/profile/        your portrait
  images/projects/       project screenshots
  images/branding/       og-image.png (social preview)
  cv/                    your CV (PDF)
  favicon.svg, favicon.ico, apple-touch-icon.png, icon-192/512.png, site.webmanifest
design/og-image.html     source of the social preview image
```

## Common changes

**Profile photo** — add a portrait (about 1200×1500, WebP or JPG) to
`public/images/profile/`, then in `src/data/profile.ts` set
`photo: { src: "/images/profile/hayman.webp", alt: "Hayman Adel", width: 1200, height: 1500 }`.
Until then the hero shows a designed profile card instead of a photo.

**CV** — put the PDF in `public/cv/` and set
`cv: { href: "/cv/Hayman-Adel-CV.pdf", fileName: "Hayman-Adel-CV.pdf" }`.
The *Download CV* button appears automatically; it is hidden while `cv` is `null`
so there is never a dead button.

**Contact & social links** — fill `href` and `display` in `src/data/social.ts`.
Empty entries are hidden everywhere. When an email (or WhatsApp) is set, the main
contact button becomes *Email me* (or *Message me on WhatsApp*).

**Add a project** — add an object to `src/data/projects.ts` (see the type in
`types.ts`). For a real screenshot, save a 16:10 image (e.g. 1600×1000 WebP) to
`public/images/projects/` and set `image`; otherwise a neutral illustration is
drawn. Only link to pages visitors can actually open (private repositories are
intentionally not linked).

**Education** — set `degree`, `specialization` and `period` in
`src/data/education.ts` exactly as on your certificate. Optional certificate
image: `certificate: { src, alt, width, height }`.

**SEO / social preview** — title and description are in `src/data/site.ts`.
The preview image is `public/images/branding/og-image.png` (1200×630); edit
`design/og-image.html`, open it in a browser at 1200×630 and save a screenshot
over the PNG.

**Colours** — tokens at the top of `src/styles/global.css` (light and dark sets).

## Adding Arabic later

Layout uses logical CSS properties (`inset-inline-*`, `margin-inline-*`), and
`site.ts` already carries `lang` and `dir`. To add Arabic, add a second set of
the `src/data` files, an `ar` page under `src/pages/ar/`, and render it with
`dir="rtl"` — the components need no structural changes.

## Quality checks

`pnpm build` runs `astro check` (TypeScript + template diagnostics) before
building. The site has been verified at 320–1920px in light and dark themes: no
horizontal overflow, working mobile menu and theme persistence, no console
errors, content visible without JavaScript, and reduced-motion respected.
