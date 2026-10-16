import type { Metadata } from "next";
import SignupForm from "@/components/SignupForm";
import { hasAccess } from "@/lib/access";
import { SECTIONS } from "@/lib/prompts";
import { SITE } from "@/lib/site";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "50 Prompts for Vibe Coders (free guide)", description: "50 copy-paste AI prompts for vibe coders, agent developers, designers and founders. Free with a Short Stack Daily subscription.", alternates: { canonical: `${SITE}/prompts` } };
export default async function Prompts() {
  const ok = await hasAccess();
  let n = 0;
  return (<main className="page prompts">
    <p className="eyebrow mono">Free guide</p>
    <h1>50 Prompts for <i className="serif">Vibe Coders</i></h1>
    <p className="sub">Copy-paste prompts for the 4 kinds of builders who read Short Stack: {SECTIONS.map(s => `${s.prompts.length} for ${s.tag.toLowerCase()}`).join(", ")}. Replace the [brackets] with your details.</p>
    {!ok && <>
      <div className="gate">
        <h2>Unlock all 50 free</h2>
        <p>Subscribe and confirm your email; the confirm link unlocks this page in your browser. Already subscribed on another device? Enter your email again to get a fresh unlock link.</p>
        <SignupForm compact />
      </div>
      <h3 className="mono">Preview: the first 3</h3>
    </>}
    {SECTIONS.map(s => {
      const list = ok ? s.prompts : (s === SECTIONS[0] ? s.prompts.slice(0, 3) : []);
      if (!list.length && !ok) return <p key={s.tag} className="locked mono">🔒 {s.tag}: {s.prompts.length} prompts</p>;
      return (<section key={s.tag} className="p-sec"><h2>{s.tag}</h2><p className="dim">{s.intro}</p>
        <ol className="p-list" start={n + 1}>{list.map(p => { n++; return (<li key={p.title}><h3>{p.title}</h3><p className="mono dim">Use when: {p.when}</p><blockquote>{p.prompt}</blockquote></li>); })}</ol>
        {!ok && <p className="locked mono">🔒 {s.prompts.length - list.length} more in {s.tag}</p>}
      </section>);
    })}
  </main>);
}
