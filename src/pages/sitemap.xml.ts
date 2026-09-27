import type { APIRoute } from "astro";
import { site } from "@/data";

// Single-page site: the sitemap lists the home page once a domain is configured.
export const GET: APIRoute = () => {
  const urls = site.url ? [new URL("/", site.url).href] : [];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((loc) => `  <url><loc>${loc}</loc></url>\n`).join("") +
    `</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
