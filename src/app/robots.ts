import type { MetadataRoute } from "next";

const siteUrl = "https://delwindcruz.dev"; // TODO: replace with your deployed domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
