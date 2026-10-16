export const SITE = "https://shortstackdaily.com";
export const NAME = "Short Stack Daily";
export const TAGLINE = "5 AI picks a day, one for each kind of builder, each with a try-it-in-10-minutes step.";
export const ISO: Record<string, string> = {};
// "Wed, Oct 14, 2026" -> ISO date
export function isoDate(d: string) { const t = Date.parse(d.replace(/^\w+,\s*/, "")); return isNaN(t) ? undefined : new Date(t + 13 * 3600e3).toISOString(); }
