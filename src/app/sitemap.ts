import type { MetadataRoute } from "next";

/**
 * Dynamic Sitemap Configuration Node for Next.js 16 App Router
 * Compiles an optimized xml map structure live at runtime at https://sathishraja.com
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sathishraja.com";

  // Maps the deep navigation matrix nodes of your single-page app framework for Googlebot tracking
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
