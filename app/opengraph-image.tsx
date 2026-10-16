import { ogImage, OG_SIZE } from "@/lib/og";
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Short Stack Daily: 5 AI picks a day, one for each kind of builder";
export default function Image() { return ogImage({ kicker: "Every weekday · 7am MT", sub: "Free AI newsletter", title: "5 AI picks a day. One for each kind of builder.", foot: "Each with a try-it-in-10-minutes step" }); }
