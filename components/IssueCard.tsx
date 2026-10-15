import type { Issue } from "@/lib/issues";
const colors: Record<string,string> = { "Vibe coders":"#d4ff3a","Agent devs":"#7cf5ff","Designers":"#ff8ad8","Non-technical founders":"#ffb547","Wildcard":"#b9a3ff" };
export default function IssueCard({ issue, limit }: { issue: Issue; limit?: number }) {
  const picks = limit ? issue.picks.slice(0, limit) : issue.picks;
  return (<div className="issue">
    <div className="issue-head"><span className="mono">{issue.title}</span><span className="mono dim">{issue.date}</span></div>
    {picks.map(p => (<article key={p.n} className="pick">
      <div className="pick-tag" style={{ ["--c" as string]: colors[p.tag] ?? "#fff" }}><span className="mono">0{p.n}</span> {p.tag}</div>
      <h3>{p.title}</h3>
      <p>{p.body}</p>
      {p.tryIt && <div className="try"><span className="mono">⏱ 10-MIN TRY</span><p>{p.tryIt}</p></div>}
      {p.source && <a className="src mono" href={p.source} target="_blank" rel="noreferrer">source ↗ {new URL(p.source).hostname.replace("www.","")}</a>}
    </article>))}
    {limit && issue.picks.length > limit && <div className="fade">+ {issue.picks.length - limit} more picks in the full issue</div>}
  </div>);
}
