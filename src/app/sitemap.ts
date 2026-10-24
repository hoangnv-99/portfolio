import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { vi: `${siteUrl}/`, en: `${siteUrl}/en` };
  return [
    { url: languages.vi, alternates: { languages } },
    { url: languages.en, alternates: { languages } },
  ];
}
