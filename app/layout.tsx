import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Short Stack Daily — 5 AI picks a day for builders", description: "5 AI picks a day, one for each kind of builder, each with a try-it-in-10-minutes step." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>
    <nav className="nav"><a href="/" className="logo"><span className="stack">▤</span> Short Stack <em>Daily</em></a><div><a href="/archive">Archive</a><a href="https://x.com/supjeremyyy" target="_blank" rel="noreferrer">X ↗</a><a href="/#subscribe" className="pill">Subscribe</a></div></nav>
    {children}
    <footer className="foot mono">© 2026 Short Stack Daily · Free, daily, unsubscribe anytime · Sponsors: reply to any issue</footer>
  </body></html>);
}
