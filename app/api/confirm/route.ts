import { NextResponse } from "next/server";
import { confirmContact } from "@/lib/resend";
import { verify } from "@/lib/token";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = verify(url.searchParams.get("token") ?? "");
  if (!email) return NextResponse.redirect(new URL("/confirmed?status=invalid", url));
  try { await confirmContact(email); } catch (e) { console.error(e); return NextResponse.redirect(new URL("/confirmed?status=error", url)); }
  return NextResponse.redirect(new URL("/confirmed?status=ok", url));
}
