import { NextResponse } from "next/server";
import { confirmContact, sendAlert } from "@/lib/resend";
import { verify, sign } from "@/lib/token";
import { ACCESS_COOKIE } from "@/lib/access";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = verify(url.searchParams.get("token") ?? "");
  if (!email) return NextResponse.redirect(new URL("/confirmed?status=invalid", url));
  try { await confirmContact(email); } catch (e) { console.error(e); return NextResponse.redirect(new URL("/confirmed?status=error", url)); }
  await sendAlert(`Confirmed: ${email}`);
  const res = NextResponse.redirect(new URL("/confirmed?status=ok", url));
  // Unlocks /prompts on this browser for a year.
  res.cookies.set(ACCESS_COOKIE, sign(email, 24 * 365), { httpOnly: true, secure: true, sameSite: "lax", maxAge: 31536000, path: "/" });
  return res;
}
