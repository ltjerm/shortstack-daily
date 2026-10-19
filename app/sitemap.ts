import type { MetadataRoute } from "next";
import { getIssues } from "@/lib/issues";
import { SITE, isoDate } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const issues = getIssues();
  const latest = issues[0] ? isoDate(issues[0].date) : undefined;
  return [
    { url: SITE, lastModified: latest, changeFrequency: "daily", priority: 1 },
    { url: `${SITE}/archive`, lastModified: latest, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE}/best-ai-coding-tools`, lastModified: "2026-10-19", changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/prompts`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about`, changeFrequency: "monthly", priority: 0.5 },
    ...issues.map(i => ({ url: `${SITE}/archive/${i.slug}`, lastModified: isoDate(i.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
