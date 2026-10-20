import type { Issue } from "@/lib/issues";
// Renders `inline code` spans from the issue markdown.
const md = (s: string) => s.split(/`([^`]+)`/).map((t, i) => i % 2 ? <code key={i}>{t}</code> : t);
export default function IssueCard({ issue, limit }: { issue: Issue; limit?: number }) {
  const picks = limit ? issue.picks.slice(0, limit) : issue.picks;
  return (<div className="issue">
    <div className="issue-head"><span className="dots" aria-hidden><i /><i /><i /></span><span className="mono">{issue.title}</span><span className="mono dim">{issue.date}</span></div>
    {picks.map(p => (<article key={p.n} id={`pick-${p.n}`} className="pick">
      {p.image && <img className="pick-img" src={p.image} alt={p.alt} loading={p.n > 1 ? "lazy" : undefined} decoding="async" width={1200} height={675} />}
      <div className={`pick-tag ${p.n % 2 ? "c" : "k"}`}><span className="n mono">0{p.n}</span></div>
      <h3>{p.title}</h3>
      <p>{md(p.body)}</p>
      {p.tryIt && <div className="try"><span className="mono">⏱ 10-MIN TRY</span><p>{md(p.tryIt)}</p></div>}
      {p.source && <p className="src">Source: <a href={p.source} target="_blank" rel="noreferrer">{new URL(p.source).hostname.replace(/^www\./, "")}</a></p>}
    </article>))}
    {limit && issue.picks.length > limit && <a className="fade mono" href={`/archive/${issue.slug}`}>+ {issue.picks.length - limit} more picks in the full issue <span className="arr">→</span></a>}
  </div>);
}
