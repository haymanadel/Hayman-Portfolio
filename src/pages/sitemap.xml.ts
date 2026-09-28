import type { APIRoute } from "astro";
import { LANGS } from "@/i18n";

// Both language versions, each declaring the other as its alternate (hreflang).
export const GET: APIRoute = ({ site }) => {
  const pages = site ? (["en", "ar"] as const).map((l) => new URL(LANGS[l].path, site).href) : [];
  const alternates = site
    ? (["en", "ar"] as const).map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${new URL(LANGS[l].path, site).href}"/>\n`).join("") +
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(LANGS.en.path, site).href}"/>\n`
    : "";
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    pages.map((loc) => `  <url>\n    <loc>${loc}</loc>\n${alternates}  </url>\n`).join("") +
    `</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
