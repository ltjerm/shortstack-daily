import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SignupForm from "@/components/SignupForm";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Best AI Coding Tools (October 2026): Models, Agents and App Builders", description: "The AI coding tools, models and agents that mattered in October 2026, including DeepSeek V4.1-Flash, Gemini 4 Argon, Replit Agent, Lovable and Claude Code Code Review, with sourced details and a security watch.", alternates: { canonical: `${SITE}/best-ai-coding-tools` } };
type Tool = { name: string; what: string; facts: string; issue: string; anchor?: string; source: string };
const groups: { h: string; tools: Tool[] }[] = [
  { h: "Build apps by prompting", tools: [
    { name: "Lovable", what: "Builds apps from chat prompts. Apps can now call GPT-Live for real-time voice, the latest Claude models, Gemini 4 Argon, Gemini Omni and Lyria, plus Perplexity, Firecrawl, Parallel and Jev.", facts: "Announced Oct 15, 2026. Describe a feature and Lovable picks a model or tool, or you name one.", issue: "issue-003", anchor: "pick-1", source: "https://lovable.dev/blog/ai-models-and-tools-in-lovable" },
    { name: "Figma code layers", what: "Turns designs into working code on the Figma canvas. You can also import from GitHub, pull in a live site with the Chrome extension, or bring a coded prototype in through MCP.", facts: "Open beta on all plans since Oct 15, 2026.", issue: "issue-002", anchor: "pick-1", source: "https://www.figma.com/blog/build-by-design/" },
    { name: "Replit Agent", what: "Replit's app-building agent. OpenAI models are now its default; Claude models are still selectable.", facts: "Replit CEO Amjad Masad said at TechCrunch Disrupt (reported Oct 17, 2026) that OpenAI is now Replit's preferred partner and default, citing cost and performance. If you never picked a model, yours may have changed.", issue: "issue-004", anchor: "pick-5", source: "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/" },
  ]},
  { h: "Coding models", tools: [
    { name: "DeepSeek V4.1-Flash-1017", what: "DeepSeek's fast coding and agent model, with MIT-licensed weights and a 1M-token context. DeepSeek also opened Search and Fetch APIs for agents.", facts: "Released Oct 17, 2026. DeepSeek's own benchmarks: 77.0 on DeepSWE v1.1 and 42.3 on Terminal-Bench 4.0 (vendor-reported). Search and Fetch cost $0.75 per 1,000 calls each, free via server-side tools in DeepSeek Harness, Claude Code and Codex until billing starts Oct 31.", issue: "issue-004", anchor: "pick-2", source: "https://api-docs.deepseek.com/news/news261017/" },
    { name: "Gemini 4 Argon (Google)", what: "Google's frontier model for long, multi-step software engineering such as code migrations. Available in AI Studio, Android Studio and Google Antigravity.", facts: "Launched Oct 13, 2026 at $2/M input and $10/M output tokens (introductory price), with a 1M-token input+output limit.", issue: "issue-001", anchor: "pick-1", source: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/" },
    { name: "Muse Wonder (Meta)", what: "Meta's model for coding and long-running agents, available on Muse Code and the Meta Model API.", facts: "Launched Oct 12, 2026 at a vendor-listed $4/M input and $20/M output tokens.", issue: "issue-002", source: "https://dev.meta.ai/resources/blog/build-with-muse-wonder" },
  ]},
  { h: "Code review and agent infrastructure", tools: [
    { name: "Claude Code Code Review (Anthropic)", what: "Automated code review in Claude Code.", facts: "Generally available for Team and Enterprise since Oct 15, 2026. Anthropic says most reviews finish in 6–10 minutes, down from about 20.", issue: "issue-003", source: "https://claude.com/resources/articles/code-review-is-now-generally-available" },
    { name: "Perplexity SPACE", what: "Open-source (Apache 2.0) sandbox for running agent code. Each sandbox is a Firecracker microVM driven over an HTTP API.", facts: "Released Oct 15, 2026. Perplexity reports nine frontier models failed to break out in 118 attempts; that's the vendor's own test.", issue: "issue-003", anchor: "pick-2", source: "https://github.com/perplexityai/SPACE" },
    { name: "ScaleDown Constrained Decoding Models", what: "Single-task models (Summarize, Compress, Extract, Classify) for the context work in agent loops, with langchain-scaledown middleware for LangChain Deep Agents.", facts: "Launched Oct 13, 2026. Up to 1M input tokens each. Extract and Summarize cost $0.04/M input tokens on OpenRouter. Speed and cost claims are vendor-reported.", issue: "issue-001", anchor: "pick-2", source: "https://aicoder.com/news/news-20261013-scaledown-constrained-decoding-models-langchain-deep-agents" },
    { name: "NVIDIA Run:ai (open source)", what: "GPU orchestration platform for AI workloads, including KAI Scheduler and a GPU Fractioning Operator that can be adopted on their own.", facts: "Open-sourced Oct 13, 2026.", issue: "issue-001", anchor: "pick-5", source: "https://developer.nvidia.com/blog/nvidia-runai-is-now-open-source-as-part-of-nvidia-dsx-ai-factory-platform/" },
    { name: "Vercel AI Gateway session logs", what: "AI Gateway request logs grouped into sessions, showing which coding agent made the calls, plus cost and cache hit rate per session.", facts: "Shipped Oct 18, 2026.", issue: "issue-004", source: "https://vercel.com/changelog/ai-gateway-logs-now-show-session-affinity" },
  ]},
  { h: "Security watch", tools: [
    { name: "OpenCode Console breach", what: "OpenCode says an intruder reached a legacy system on the night of Oct 16, 2026, and OpenAI, Anthropic and Google keys saved in about 1.4% of Console users' workspaces may have been exposed.", facts: "OpenCode says keys kept locally by its CLI and desktop apps aren't involved. Deleting a key from Console does not revoke it, so revoke it at the provider and set spend alerts.", issue: "issue-004", anchor: "pick-1", source: "https://thehackernews.com/2026/10/opencode-console-breach-may-have.html" },
  ]},
  { h: "Design-to-code and MCP connectors", tools: [
    { name: "Figma Specs", what: "A multiplayer Markdown container on the Figma canvas that agents can read and update through Figma's MCP server.", facts: "Open beta for paid plans since Oct 15, 2026.", issue: "issue-002", anchor: "pick-3", source: "https://www.figma.com/blog/introducing-figma-specs/" },
    { name: "Canva AI Connector", what: "Runs on Canva's MCP server. Lets ChatGPT, Claude, Gemini and Copilot create, search and edit on-brand Canva designs.", facts: "Covered in Issue #1. Canva's guide is dated October 2026.", issue: "issue-001", anchor: "pick-3", source: "https://www.canva.com/resources/connect-canva-to-ai-agent/" },
    { name: "AMD Ross", what: "Agent assistant for FPGA and embedded design that connects LLMs to AMD's Vivado and Vitis HLS through MCP servers. Works with VS Code, Claude Code, Cursor, Devin and OpenCode CLI.", facts: "Launched Oct 13, 2026.", issue: "issue-001", source: "https://www.allaboutcircuits.com/news/amd-launches-ross-an-agentic-ai-assistant-for-embedded-design/" },
  ]},
];
const all = groups.flatMap(g => g.tools);
const faq: [string, string][] = [
  ["What are the newest AI coding models in October 2026?", "DeepSeek V4.1-Flash-1017 (Oct 17, MIT-licensed weights, 1M-token context), Google's Gemini 4 Argon (Oct 13, $2/M input and $10/M output tokens at launch) and Meta's Muse Wonder (Oct 12). Benchmarks for each are vendor-reported."],
  ["Which AI app builders changed this month?", "Lovable apps can now call GPT-Live, Claude, Gemini and live-web tools (Oct 15), Figma code layers opened to all plans in beta (Oct 15), and Replit made OpenAI the default model behind Replit Agent (reported Oct 17)."],
  ["Is my OpenCode API key safe?", "OpenCode says provider keys saved in about 1.4% of Console workspaces may have been exposed in an Oct 16 breach; keys kept locally by its CLI and desktop apps aren't involved. Revoke any key you pasted into a hosted tool at the provider, since deleting it from Console does not revoke it."],
  ["How is this list chosen?", "Every tool here was covered in a Short Stack Daily issue, every detail comes from the linked source, and there are no affiliate links. The list is refreshed weekly."],
];
export default function Best() {
  return (<main className="page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: "Best AI coding tools covered in Short Stack Daily", itemListElement: all.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: t.source })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
    <p className="eyebrow mono">Evergreen guide · updated Oct 19, 2026</p>
    <h1>Best AI <i className="serif">coding tools</i></h1>
    <p className="sub">Every tool here was covered in a Short Stack Daily issue, and every detail comes from the cited source. Vendor claims are labeled as vendor claims. No affiliate links.</p>
    {groups.map(g => (<section key={g.h} className="p-sec"><h2>{g.h}</h2>
      <ul className="tools">{g.tools.map(t => (<li key={t.name}>
        <h3>{t.name}</h3><p>{t.what}</p><p className="dim">{t.facts}</p>
        <p className="mono"><a className="ul" href={`/archive/${t.issue}${t.anchor ? "#" + t.anchor : ""}`}>Read it in Issue #{+t.issue.slice(-3)}</a> · <a className="ul" href={t.source} target="_blank" rel="noreferrer">Source ↗</a></p>
      </li>))}</ul></section>))}
    <section className="p-sec"><h2>Quick answers</h2>
      <dl className="faq">{faq.map(([q, a]) => (<div key={q}><dt>{q}</dt><dd>{a}</dd></div>))}</dl></section>
    <section className="cta"><h2>Get new tools every weekday.</h2><SignupForm compact /></section>
  </main>);
}
