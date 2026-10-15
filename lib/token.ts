import crypto from "crypto";
const secret = () => { const s = process.env.CONFIRM_SECRET; if (!s) throw new Error("CONFIRM_SECRET not set"); return s; };
export function sign(email: string, ttlHours = 72) {
  const payload = Buffer.from(JSON.stringify({ e: email, x: Date.now() + ttlHours * 3600e3 })).toString("base64url");
  return payload + "." + crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}
export function verify(token: string): string | null {
  const [p, sig] = token.split(".");
  if (!p || !sig) return null;
  const exp = crypto.createHmac("sha256", secret()).update(p).digest("base64url");
  if (sig.length !== exp.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(exp))) return null;
  const { e, x } = JSON.parse(Buffer.from(p, "base64url").toString());
  return Date.now() < x ? e : null;
}
