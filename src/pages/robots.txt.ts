import type { APIRoute } from "astro";

// The Sitemap line is only added when a real origin is resolved (astro.config.mjs).
export const GET: APIRoute = ({ site }) => {
  const lines = ["User-agent: *", "Allow: /"];
  if (site) lines.push("", `Sitemap: ${new URL("/sitemap.xml", site).href}`);
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
