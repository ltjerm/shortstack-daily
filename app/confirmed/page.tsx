export default async function Confirmed({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const s = (await searchParams).status;
  const [h, p] = s === "ok" ? ["You're in. 🥞", "Your first Short Stack lands tomorrow at 7am MT."] : s === "invalid" ? ["Link expired", "That confirmation link is invalid or expired. Sign up again to get a fresh one."] : ["Hmm, that didn't work", "Please try the link again in a minute."];
  return (<main className="page center"><h1>{h}</h1><p className="sub">{p}</p><a className="pill" href="/">Back home</a></main>);
}
