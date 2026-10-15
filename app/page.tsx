import SignupForm from "@/components/SignupForm";
import IssueCard from "@/components/IssueCard";
import { getIssues } from "@/lib/issues";
const readers = [
  ["🛠️","Vibe coders","Ship the side project tonight.","#d4ff3a"],
  ["🤖","Agent devs","Tools, evals, and loops that work.","#7cf5ff"],
  ["🎨","Designers","AI that respects your craft.","#ff8ad8"],
  ["💼","Founders","No code required. Real leverage.","#ffb547"],
  ["🃏","Wildcard","The one everyone should see.","#b9a3ff"],
];
export default function Home() {
  const latest = getIssues()[0];
  return (<main>
    <section className="hero">
      <div className="grid-bg" />
      <p className="kicker mono"><span className="dot" /> Issue #{latest?.number ?? 1} out now · every weekday 7am MT</p>
      <h1>5 AI picks a day.<br /><span className="hl">One for each kind of builder.</span></h1>
      <p className="sub">Each one comes with a <strong>try-it-in-10-minutes</strong> step. Skip the news firehose and get something you can actually try before your coffee's cold.</p>
      <div id="subscribe"><SignupForm /></div>
      <p className="fine mono">Free · 3-minute read · no spam, double opt-in</p>
    </section>
    <section className="readers">
      {readers.map(([e,t,d,c]) => (<div key={t} className="reader" style={{ ["--c" as string]: c }}><span className="emoji">{e}</span><h4>{t}</h4><p>{d}</p></div>))}
    </section>
    <section className="how">
      <div><span className="mono num">01</span><h4>We read everything</h4><p>Lab blogs, changelogs, GitHub, HN, and X. Every link gets checked.</p></div>
      <div><span className="mono num">02</span><h4>We pick five</h4><p>One per reader. Each one is real news with a source link.</p></div>
      <div><span className="mono num">03</span><h4>You try one</h4><p>Every pick ends with a concrete step you can do in 10 minutes.</p></div>
    </section>
    {latest && <section className="preview"><h2>Read a real issue <span className="mono dim">→ preview</span></h2><IssueCard issue={latest} limit={3} /><a href={`/archive/${latest.slug}`} className="more mono">Read the full issue →</a></section>}
    <section className="cta"><h2>Your daily stack, served.</h2><SignupForm compact /></section>
  </main>);
}
