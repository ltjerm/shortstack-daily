const API = "https://api.resend.com";
function env(k: string) { const v = process.env[k]; if (!v) throw new Error(`${k} not set`); return v; }
async function call(path: string, method: string, body: unknown) {
  const r = await fetch(API + path, { method, headers: { Authorization: `Bearer ${env("RESEND_API_KEY")}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const data = await r.json().catch(() => ({}));
  return { ok: r.ok, status: r.status, data };
}
// Pending contacts are stored unsubscribed until they confirm.
export async function addPendingContact(email: string) {
  // RESEND_AUDIENCE_ID holds the Resend segment ID (audiences are now segments).
  const r = await call(`/contacts`, "POST", { email, unsubscribed: true, segments: [{ id: env("RESEND_AUDIENCE_ID") }] });
  if (!r.ok && r.status !== 409) throw new Error(`Resend contact error ${r.status}`);
}
export async function confirmContact(email: string) {
  const r = await call(`/contacts/${encodeURIComponent(email)}`, "PATCH", { unsubscribed: false });
  if (!r.ok) throw new Error(`Resend confirm error ${r.status}`);
}
export async function sendConfirmEmail(email: string, url: string) {
  const r = await call("/emails", "POST", {
    from: env("FROM_EMAIL"), to: email, subject: "Confirm your Short Stack Daily subscription",
    html: `<div style="font-family:system-ui;max-width:480px"><h2>One click and you're in.</h2><p>Confirm to get 5 AI picks a day, each with a 10-minute try-it step.</p><p><a href="${url}" style="background:#111;color:#d4ff3a;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600">Confirm subscription</a></p><p style="color:#888;font-size:12px">Didn't sign up? Ignore this email.</p></div>`,
    text: `Confirm your Short Stack Daily subscription: ${url}`,
  });
  if (!r.ok) throw new Error(`Resend email error ${r.status}`);
}
