// @ts-check
import { defineConfig } from "astro/config";
import { site } from "./src/data/site.ts";

// Public origin used for canonical URLs, og:url, absolute og:image, the sitemap
// and robots.txt. Resolution order:
//   1. `site.url` in src/data/site.ts — set this when you connect a custom domain;
//   2. on Vercel, the project's production domain (VERCEL_PROJECT_PRODUCTION_URL,
//      a real domain Vercel provides at build time: the custom domain once one is
//      attached, otherwise the *.vercel.app domain);
//   3. otherwise none — absolute URLs are simply omitted (never localhost).
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const origin = site.url || (vercelDomain ? `https://${vercelDomain}` : undefined);

export default defineConfig({
  site: origin,
  trailingSlash: "ignore",
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
