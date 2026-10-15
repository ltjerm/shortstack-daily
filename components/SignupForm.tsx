"use client";
import { useState } from "react";
export default function SignupForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState(""); const [state, setState] = useState<"idle"|"loading"|"done"|"error">("idle"); const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setState("loading");
    const r = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    const d = await r.json().catch(() => ({}));
    if (r.ok) { setState("done"); setMsg("Check your inbox and click the link to confirm."); } else { setState("error"); setMsg(d.error ?? "Something went wrong."); }
  }
  if (state === "done") return <p className="form-done">✓ {msg}</p>;
  return (<form className={`signup ${compact ? "compact" : ""}`} onSubmit={submit}>
    <input type="email" required placeholder="you@buildingthings.dev" value={email} onChange={e => setEmail(e.target.value)} aria-label="Email address" />
    <button disabled={state === "loading"}>{state === "loading" ? "Sending…" : "Get the daily stack →"}</button>
    {state === "error" && <p className="form-err">{msg}</p>}
  </form>);
}
