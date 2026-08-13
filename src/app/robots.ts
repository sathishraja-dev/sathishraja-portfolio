import type { MetadataRoute } from "next";

/**
 * Dynamic Robots Configuration Node for Next.js 16 App Router
 * Outputs a production-grade robots.txt file at runtime to optimize crawl budgets for sathishraja.com
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // Directs all search engine crawlers (Googlebot, Bingbot, etc.) to scan the site structure
      userAgent: "*",
      allow: "/",
      // Shield private internal compilation maps and API endpoints from polluting search indexes
      disallow: ["/_next/", "/api/", "/static/"],
    },
    // Supplies the absolute crawl path reference to your dynamically compiled sitemap XML manifest
    sitemap: "https://sathishraja.com",
  };
}
