import type { Issue } from "@/lib/issues";
import Badge from "./Badge";
const tones = ["paper", "cobalt", "ink", "paper", "cobalt"];
// The latest issue as a literal short stack: one layer per pick, the cover on top. Hovering a layer slides the ones in front of it down.
export default function HeroStack({ issue }: { issue: Issue }) {
  return (<div className="stack-wrap" data-tilt>
    <Badge id="hero-badge" text="FREE · EVERY WEEKDAY · 7AM MT · " />
    <ol className="stack" style={{ ["--n" as string]: issue.picks.length }} aria-label={`Picks in ${issue.title}`}>
      {issue.picks.map((p, i) => (<li key={p.n} className={`layer t-${tones[i % tones.length]}`} style={{ ["--i" as string]: i }}>
        <a href={`/archive/${issue.slug}#pick-${p.n}`}>
          <span className="layer-top mono"><span>0{p.n} · {p.tag}</span><span className="arr">↗</span></span>
          <span className="layer-title">{p.title}</span>
          {p.tryIt && <span className="layer-try"><span className="mono">⏱ 10-min try</span>{p.tryIt.replace(/`/g, "")}</span>}
        </a>
      </li>))}
      <li className="layer cover" style={{ ["--i" as string]: issue.picks.length }} aria-hidden>
        <span className="cover-top mono"><span>{issue.title}</span><span>{issue.date}</span></span>
        <span className="cover-title">Today&apos;s<br />stack<i>.</i></span>
        <span className="cover-foot mono"><span>{issue.picks.length} picks · 3-min read</span><span className="hint-hover">hover a layer ↑</span><span className="hint-touch">tap a layer ↑</span></span>
      </li>
    </ol>
  </div>);
}
