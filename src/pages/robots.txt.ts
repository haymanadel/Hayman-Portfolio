import type { APIRoute } from "astro";
import { site } from "@/data";

// The sitemap line is only added once the final domain is set in src/data/site.ts.
export const GET: APIRoute = () => {
  const lines = ["User-agent: *", "Allow: /"];
  if (site.url) lines.push("", `Sitemap: ${new URL("/sitemap.xml", site.url).href}`);
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
