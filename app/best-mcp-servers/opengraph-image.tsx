import { ogImage, OG_SIZE } from "@/lib/og";
export const size = OG_SIZE; export const contentType = "image/png"; export const alt = "Best MCP servers for coding agents (November 2026) | Short Stack Daily";
export default function Image() { return ogImage({ kicker: "Updated Nov 9, 2026", sub: "Evergreen guide", title: "Best MCP servers for coding agents", foot: "11 servers checked against their official repos and docs" }); }
