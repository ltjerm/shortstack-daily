import { getIssues } from "@/lib/issues";
export const metadata = { title: "Archive — Short Stack Daily" };
export default function Archive() {
  return (<main className="page"><h1>Archive</h1><p className="sub">Every issue, newest first.</p>
    <ul className="arch">{getIssues().map(i => (<li key={i.slug}><a href={`/archive/${i.slug}`}><span className="mono dim">{i.date}</span><span>{i.title}</span><span className="dim">{i.picks.map(p => p.emoji).join(" ")}</span></a></li>))}</ul></main>);
}
