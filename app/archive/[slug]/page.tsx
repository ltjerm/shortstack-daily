import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IssueCard from "@/components/IssueCard";
import SignupForm from "@/components/SignupForm";
import ShareBar from "@/components/ShareBar";
import Forward from "@/components/Forward";
import JsonLd from "@/components/JsonLd";
import { getIssue, getIssues } from "@/lib/issues";
import { SITE, NAME, isoDate } from "@/lib/site";
export function generateStaticParams() { return getIssues().map(i => ({ slug: i.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const issue = getIssue((await params).slug); if (!issue) return {};
  const lead = issue.picks[0]?.title ?? "";
  const title = `${issue.title}: ${lead}`;
  const description = `${issue.date}. ${issue.picks.map(p => p.title).join(" · ")}`.slice(0, 300);
  const url = `${SITE}/archive/${issue.slug}`;
  return { title, description, alternates: { canonical: url },
    openGraph: { type: "article", title, description, url, publishedTime: isoDate(issue.date), siteName: NAME },
    twitter: { card: "summary_large_image", title, description, creator: "@supjeremyyy" } };
}
export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const issue = getIssue((await params).slug); if (!issue) notFound();
  const url = `${SITE}/archive/${issue.slug}`;
  const lead = issue.picks[0]?.title ?? "";
  const ld = { "@context": "https://schema.org", "@type": "NewsArticle", headline: `${issue.title}: ${lead}`.slice(0, 110),
    datePublished: isoDate(issue.date), dateModified: isoDate(issue.date), url, mainEntityOfPage: url, image: [`${url}/opengraph-image`],
    author: { "@type": "Person", name: "Jeremy Hernandez", url: "https://x.com/supjeremyyy" },
    publisher: { "@type": "Organization", name: NAME, url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/icon.svg` } },
    description: issue.picks.map(p => p.title).join(" · "),
    citation: issue.picks.map(p => p.source).filter(Boolean) };
  return (<main className="page">
    <JsonLd data={ld} />
    <a href="/archive" className="mono dim">← archive</a>
    <ShareBar url={url} text={`${issue.title}: ${lead} (5 AI picks, each with a 10-minute try-it step) via @supjeremyyy`} />
    <IssueCard issue={issue} />
    <ShareBar url={url} text={`${issue.title}: ${lead} (5 AI picks, each with a 10-minute try-it step) via @supjeremyyy`} />
    <Forward url={url} />
    <section className="cta"><h2>Get tomorrow&apos;s in your inbox.</h2><SignupForm compact /></section>
  </main>);
}
