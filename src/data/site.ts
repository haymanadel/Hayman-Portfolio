import type { SiteSettings } from "./types";

export const site: SiteSettings = {
  // ▶ THE place to set your custom domain, e.g. "https://yourdomain.com"
  //   (or "https://www.yourdomain.com" if www is your primary domain in Vercel).
  //   No trailing slash. It drives canonical URLs, og:url, the sitemap and
  //   robots.txt. While empty, Vercel builds use the project's own production
  //   domain automatically (see astro.config.mjs); local builds omit them.
  url: "",
  lang: "en",
  dir: "ltr",
  title: "Hayman — Full-Stack Web Developer & Software Developer",
  description:
    "Hayman Adel designs and builds modern websites, e-commerce platforms and custom management systems for businesses — from interface to database to production.",
  ogImage: {
    src: "/images/branding/og-image.png",
    alt: "HAYMAN — Full-Stack Web Developer & Software Developer",
    width: 1200,
    height: 630,
  },
  themeColor: { light: "#f3f2ed", dark: "#0d0e0b" },
};
