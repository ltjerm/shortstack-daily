export const metadata = { title: "Confirmed", robots: { index: false } };
export default async function Confirmed({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const s = (await searchParams).status;
  const ok = s === "ok";
  const [h, p] = ok ? ["You're in. 🥞", "Your first Short Stack lands at 7am MT on the next weekday. Your free guide is unlocked."] : s === "invalid" ? ["Link expired", "That confirmation link is invalid or expired. Sign up again to get a fresh one."] : ["Hmm, that didn't work", "Please try the link again in a minute."];
  return (<main className="page center"><h1>{h}</h1><p className="sub">{p}</p>
    {ok ? <a className="btn" href="/prompts">Get your 50 prompts <span className="arr">→</span></a> : <a className="btn" href="/">Back home <span className="arr">→</span></a>}</main>);
}
