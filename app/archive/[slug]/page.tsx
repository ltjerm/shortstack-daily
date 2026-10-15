import { notFound } from "next/navigation";
import IssueCard from "@/components/IssueCard";
import SignupForm from "@/components/SignupForm";
import { getIssue, getIssues } from "@/lib/issues";
export function generateStaticParams() { return getIssues().map(i => ({ slug: i.slug })); }
export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const issue = getIssue((await params).slug); if (!issue) notFound();
  return (<main className="page"><a href="/archive" className="mono dim">← archive</a><IssueCard issue={issue} /><section className="cta"><h2>Get tomorrow's in your inbox.</h2><SignupForm compact /></section></main>);
}
