// @ts-check
import { defineConfig } from "astro/config";
import { site } from "./src/data/site.ts";

// The public domain lives in ONE place: `site.url` in src/data/site.ts.
// While it is empty, canonical / og:url / sitemap entries are simply omitted.
export default defineConfig({
  site: site.url || undefined,
  trailingSlash: "ignore",
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
