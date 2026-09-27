import type { SiteSettings } from "./types";

export const site: SiteSettings = {
  // ▶ Set your final domain here once you have it (e.g. "https://hayman.dev").
  //   It drives canonical URLs, og:url, the sitemap and robots.txt.
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
