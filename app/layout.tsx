import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Motion from "@/components/Motion";
import StackMark from "@/components/StackMark";
const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz", "wdth"], variable: "--f-display" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });
export const metadata: Metadata = { title: "Short Stack Daily — 5 AI picks a day for builders", description: "5 AI picks a day, one for each kind of builder, each with a try-it-in-10-minutes step." };
export const viewport: Viewport = { themeColor: "#F4EEDF" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} /></head>
    <body>
      <div className="progress" aria-hidden />
      <nav className="nav">
        <a href="/" className="logo"><StackMark /> Short Stack <em>Daily</em></a>
        <div className="nav-links"><a href="/archive" className="ul hide-sm">Archive</a><a href="https://x.com/supjeremyyy" target="_blank" rel="noreferrer" className="ul hide-sm">X ↗</a><a href="/#subscribe" className="btn btn-sm">Subscribe <span className="arr">→</span></a></div>
      </nav>
      {children}
      <footer className="foot">
        <div className="foot-top">
          <p className="foot-tag">Five picks. Ten minutes.<br /><i className="serif">Every weekday.</i></p>
          <div className="foot-links mono"><a href="/archive" className="ul">Archive</a><a href="https://x.com/supjeremyyy" target="_blank" rel="noreferrer" className="ul">X / @supjeremyyy ↗</a><a href="/#subscribe" className="ul">Subscribe</a></div>
        </div>
        <a href="/#subscribe" className="foot-mark" aria-label="Subscribe to Short Stack Daily">Short Stack</a>
        <p className="foot-fine mono">© 2026 Short Stack Daily · Free, daily, unsubscribe anytime · Sponsors: reply to any issue</p>
      </footer>
      <Motion />
      <Analytics />
    </body>
  </html>);
}
