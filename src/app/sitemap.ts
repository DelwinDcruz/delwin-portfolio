import type { MetadataRoute } from "next";

const siteUrl = "https://delwindcruz.dev"; // TODO: replace with your deployed domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
