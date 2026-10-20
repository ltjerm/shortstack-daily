import { ogImage, OG_SIZE } from "@/lib/og";
import { getIssue, getIssues } from "@/lib/issues";
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Short Stack Daily issue";
export function generateStaticParams() { return getIssues().map(i => ({ slug: i.slug })); }
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const i = getIssue((await params).slug);
  if (!i) return ogImage({ kicker: "", title: "Short Stack Daily", foot: "" });
  const p = i.picks[0];
  return ogImage({ kicker: i.date, sub: `Issue #${i.number}`, title: p?.title ?? i.title, foot: `+ ${Math.max(i.picks.length - 1, 0)} more picks, each with a 10-min try` });
}
