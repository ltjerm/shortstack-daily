import { ImageResponse } from "next/og";
export const OG_SIZE = { width: 1200, height: 630 };
const C = { cobalt: "#1F44F0", ink: "#0B0B0C", cream: "#F4EEDF", paper: "#FBF7EC" };
export function ogImage({ kicker, title, sub, foot }: { kicker: string; title: string; sub?: string; foot: string }) {
  const size = title.length > 70 ? 54 : title.length > 45 ? 64 : 78;
  return new ImageResponse((
    <div style={{ width: "100%", height: "100%", display: "flex", background: C.cream, padding: 40 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: C.paper, border: `4px solid ${C.ink}`, borderRadius: 28, boxShadow: `18px 18px 0 ${C.cobalt}`, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, background: C.ink, color: C.cream, padding: "18px 32px", fontSize: 26 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>{[0, 1, 2].map(i => <div key={i} style={{ width: 30, height: 7, borderRadius: 4, background: i === 1 ? C.cobalt : C.cream }} />)}</div>
          <span style={{ fontWeight: 800 }}>Short Stack</span><span style={{ color: "#7B93FF", fontStyle: "italic" }}>Daily</span>
          <span style={{ marginLeft: "auto", opacity: 0.7 }}>{kicker}</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 48px", color: C.ink }}>
          {sub && <div style={{ display: "flex", alignSelf: "flex-start", background: C.cobalt, color: C.cream, borderRadius: 999, padding: "8px 20px", fontSize: 26, marginBottom: 22 }}>{sub}</div>}
          <div style={{ fontSize: size, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: `3px solid ${C.ink}`, padding: "18px 48px", fontSize: 24, color: C.ink }}>
          <span>{foot}</span><span style={{ color: C.cobalt, fontWeight: 700 }}>shortstackdaily.com</span>
        </div>
      </div>
    </div>), OG_SIZE);
}
