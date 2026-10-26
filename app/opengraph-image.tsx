import { ogImage, OG_SIZE } from "@/lib/og";
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Short Stack Daily: 5 AI picks a day for builders";
export default function Image() { return ogImage({ kicker: "Every weekday · 7am MT", sub: "Free AI newsletter", title: "5 AI picks a day. Built to try in 10 minutes.", foot: "Each with a try-it-in-10-minutes step" }); }
