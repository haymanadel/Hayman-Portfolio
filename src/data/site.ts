import type { SiteSettings } from "./types";

export const site: SiteSettings = {
  // ▶ THE place to set your custom domain, e.g. "https://yourdomain.com"
  //   (or "https://www.yourdomain.com" if www is your primary domain in Vercel).
  //   No trailing slash. It drives canonical URLs, hreflang, og:url, the sitemap
  //   and robots.txt. While empty, Vercel builds use the project's own production
  //   domain automatically (see astro.config.mjs); local builds omit them.
  url: "",
  ogImage: { en: "/images/branding/og-image.png", ar: "/images/branding/og-image-ar.png", width: 1200, height: 630 },
  themeColor: { light: "#f3f2ed", dark: "#0d0e0b" },
};
