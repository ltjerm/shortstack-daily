import { cookies } from "next/headers";
import { verify } from "@/lib/token";
export const ACCESS_COOKIE = "ss_access";
export async function hasAccess() {
  const c = (await cookies()).get(ACCESS_COOKIE)?.value;
  if (!c) return false;
  try { return !!verify(c); } catch { return false; }
}
