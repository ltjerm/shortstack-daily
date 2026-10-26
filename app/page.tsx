import SignupForm from "@/components/SignupForm";
import IssueCard from "@/components/IssueCard";
import HeroStack from "@/components/HeroStack";
import Badge from "@/components/Badge";
import { getIssues } from "@/lib/issues";
const steps = [
  ["We read everything", "Lab blogs, changelogs, GitHub, HN, and X. Every link gets checked."],
  ["We pick five", "The five things worth a builder's time today. Each one is real news with a source link."],
  ["You try one", "Every pick ends with a concrete step you can do in 10 minutes."],
];
const tapeA = ["5 picks", "10-minute tries", "Every weekday", "7am MT", "Free"];
const tapeB = ["Lab blogs", "Changelogs", "GitHub", "Hacker News", "X", "Every link checked"];
const v = (n: number) => ({ ["--d" as string]: n });
function Tape({ items, tone }: { items: string[]; tone: string }) {
  const run = [...items, ...items];
  return (<div className={`tape tape-${tone}`}><div className="tape-track">{[0, 1].map(k => (<div key={k} className="tape-run">{run.map((t, i) => (<span key={i} className="tape-item">{t}<span className="tape-star">✳</span></span>))}</div>))}</div></div>);
}
export default function Home() {
  const latest = getIssues()[0];
  return (<main>
    <section className="hero">
      <div className="hero-copy">
        <a href={latest ? `/archive/${latest.slug}` : "/archive"} className="kicker mono"><span className="dot" /> Issue #{latest?.number ?? 1} out now · every weekday 7am MT <span className="arr">→</span></a>
        <h1 className="h-hero">
          <span className="line" style={{ ["--l" as string]: 0 }}><span>5 AI picks a day.</span></span>
          <span className="line" style={{ ["--l" as string]: 1 }}><span>Built to try in</span></span>
          <span className="line last" style={{ ["--l" as string]: 2 }}><span><i className="serif squig">ten minutes.<svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden><path pathLength={1} d="M3 15C40 5 70 5 104 13s68 9 100-1 62-7 93 2" /></svg></i></span></span>
        </h1>
        <p className="sub fade-up" style={{ ["--delay" as string]: "550ms" }}>Each one comes with a <mark>try-it-in-10-minutes</mark> step. Skip the news firehose and get something you can actually try before your coffee&apos;s cold. <strong>Get 50 vibe-coding prompts free</strong> when you join.</p>
        <div id="subscribe" className="fade-up" style={{ ["--delay" as string]: "700ms" }}><SignupForm placement="home_hero" /></div>
        <p className="fine mono fade-up" style={{ ["--delay" as string]: "820ms" }}><span><a href="/prompts" className="ul">Get 50 vibe-coding prompts free</a></span><span>Free</span><span>3-minute read</span><span>No spam, double opt-in</span></p>
      </div>
      {latest && <HeroStack issue={latest} />}
    </section>

    {latest && <section className="today-callout" aria-label="Read today's issue">
      <div className="today-card">
        <div className="today-head">
          <div>
            <p className="eyebrow mono">Read today&apos;s issue</p>
            <h2 className="today-title"><a href={`/archive/${latest.slug}`} className="ul">{latest.title} <span className="mono dim">· {latest.date}</span></a></h2>
          </div>
          <a href={`/archive/${latest.slug}`} className="btn btn-sm">Read today&apos;s issue <span className="arr">→</span></a>
        </div>
        <ol className="today-picks">
          {latest.picks.map(p => (<li key={p.n}>
            <a href={`/archive/${latest.slug}#pick-${p.n}`}>
              <span className="mono today-n">0{p.n}</span>
              <span>{p.title}</span>
              <span className="arr" aria-hidden>→</span>
            </a>
          </li>))}
        </ol>
      </div>
    </section>}

    <div className="tapes" aria-hidden><Tape items={tapeB} tone="paper" /><Tape items={tapeA} tone="cobalt" /></div>

    <section className="sec">
      <div className="sec-head" data-reveal>
        <p className="eyebrow mono">How it works</p>
        <h2 className="h2">From firehose<br /><i className="serif">to five.</i></h2>
      </div>
      <div data-reveal><ol className="how">
        {steps.map(([t, d], i) => (<li key={t} style={v(i)}><span className="how-num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>))}
      </ol></div>
      <div data-reveal><div className="stats">
        <div><b><span data-count="5">5</span></b><span className="mono">picks every weekday</span></div>
        <div><b><span data-count="10">10</span><small>min</small></b><span className="mono">to try each one</span></div>
        <div><b><span data-count="3">3</span><small>min</small></b><span className="mono">to read the issue</span></div>
        <div><b>$0</b><span className="mono">to subscribe</span></div>
      </div></div>
    </section>

    {latest && <section className="dark">
      <div className="sec preview-grid">
        <div className="sec-head sticky" data-reveal>
          <p className="eyebrow mono">Preview</p>
          <h2 className="h2">Read a<br /><i className="serif">real issue.</i></h2>
          <p className="lede">This is the latest issue. Three picks are shown here; the rest are in the full issue.</p>
          <a href={`/archive/${latest.slug}`} className="btn btn-light">Read the full issue <span className="arr">→</span></a>
        </div>
        <div className="paper" data-reveal><IssueCard issue={latest} limit={3} /></div>
      </div>
    </section>}

    <section className="cta-sec">
      <div className="cta-deco l" aria-hidden>{[0, 1, 2, 3, 4].map(i => <span key={i} style={v(i)} />)}</div>
      <div className="cta-deco r" aria-hidden>{[0, 1, 2, 3, 4].map(i => <span key={i} style={v(i)} />)}</div>
      <Badge id="cta-badge" text="JOIN THE STACK · JOIN THE STACK · " className="badge-cta" />
      <div className="cta-inner" data-reveal>
        <p className="eyebrow mono">Join the stack</p>
        <h2 className="h-cta">Your daily stack,<br /><i className="serif">served.</i></h2>
        <p className="lede">One email. Five picks. Every weekday at 7am MT.</p>
        <SignupForm compact placement="home_bottom" />
        <p className="fine mono"><span>Free</span><span>Double opt-in</span><span>Unsubscribe anytime</span></p>
      </div>
    </section>
  </main>);
}
