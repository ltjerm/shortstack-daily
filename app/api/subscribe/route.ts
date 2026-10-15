import { NextResponse } from "next/server";
import { addPendingContact, sendConfirmEmail } from "@/lib/resend";
import { sign } from "@/lib/token";
export async function POST(req: Request) {
  let email = "";
  try { email = String((await req.json()).email ?? "").trim().toLowerCase(); } catch {}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  try {
    await addPendingContact(email);
    const site = process.env.SITE_URL ?? new URL(req.url).origin;
    await sendConfirmEmail(email, `${site}/api/confirm?token=${encodeURIComponent(sign(email))}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong. Try again in a minute." }, { status: 500 });
  }
}
