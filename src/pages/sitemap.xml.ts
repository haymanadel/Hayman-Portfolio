import type { APIRoute } from "astro";

// Single-page site: the sitemap lists the home page when a real origin is resolved.
export const GET: APIRoute = ({ site }) => {
  const urls = site ? [new URL("/", site).href] : [];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((loc) => `  <url><loc>${loc}</loc></url>\n`).join("") +
    `</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
