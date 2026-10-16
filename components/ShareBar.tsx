"use client";
import { useState } from "react";
import { track } from "@vercel/analytics";
export default function ShareBar({ url, text }: { url: string; text: string }) {
  const [copied, setCopied] = useState(false);
  const x = `https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  const li = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  async function copy() { try { await navigator.clipboard.writeText(url); setCopied(true); track("share", { via: "copy" }); setTimeout(() => setCopied(false), 2000); } catch {} }
  return (<div className="share" aria-label="Share this issue">
    <span className="mono share-l">Share</span>
    <a className="btn btn-sm" href={x} target="_blank" rel="noreferrer" onClick={() => track("share", { via: "x" })}>Post on X</a>
    <a className="btn btn-sm btn-alt" href={li} target="_blank" rel="noreferrer" onClick={() => track("share", { via: "linkedin" })}>LinkedIn</a>
    <button type="button" className="btn btn-sm btn-alt" onClick={copy}>{copied ? "Copied ✓" : "Copy link"}</button>
  </div>);
}
