# Short Stack #4 — Mon, Oct 19, 2026
*5 AI picks. 1 for each kind of builder. Each one takes 10 minutes to try.*

---

### 1. 🛠️ Vibe coders: OpenCode's Console breach may have exposed saved AI provider keys
OpenCode says an intruder reached a legacy system on the night of Oct 16, and OpenAI, Anthropic and Google keys saved in about 1.4% of Console users' workspaces may have been exposed. OpenCode says keys kept locally by its CLI and desktop apps aren't involved. Some users report surprise bills (self-reported). Deleting a key from Console does not revoke it.
**Try this in 10 min:** Open your OpenAI, Anthropic and Google dashboards, revoke any key you've pasted into a hosted tool, issue one new key per tool, and set a spend alert on each.
Source: https://thehackernews.com/2026/10/opencode-console-breach-may-have.html
Image: /issues/issue-004/pick-1.svg | Illustration: an open padlock with scattered data blocks

### 2. 🤖 Agent devs: DeepSeek opens its Search & Fetch APIs and ships V4.1-Flash-1017
DeepSeek released V4.1-Flash-1017 on Oct 17 with MIT-licensed weights and a 1M-token context. Its own benchmarks show 77.0 on DeepSWE v1.1 (up from 74.2) and 42.3 on Terminal-Bench 4.0 (up from 31.2). It also opened Search and Fetch APIs at $0.75 per 1,000 calls each; calls via server-side tools in DeepSeek Harness, Claude Code and Codex are free until billing starts Oct 31.
**Try this in 10 min:** Point one agent task's web search at DeepSeek's Search endpoint and compare quality and cost with what you use today.
Source: https://api-docs.deepseek.com/news/news261017/
Image: /issues/issue-004/pick-2.jpg | Image from api-docs.deepseek.com: DeepSeek opens its Search & Fetch APIs and ships V4.1-Flash-1017

### 3. 🎨 Designers: OpenDesign Motion is an open-source take on code-to-video
Open Design 0.25.0 (Apache 2.0) adds OpenDesign Motion, which its makers pitch as an open-source alternative to Claude Motion. Ask for a video and you get editable source files plus an MP4; interactive animations stay runnable HTML. It ships five starter examples and runs with a local coding CLI or your own API key. Released Oct 15; the launch post followed Oct 16.
**Try this in 10 min:** Install Open Design, open the UI Morph example, ask it to restyle the animation in your brand colors and type, then export the MP4.
Source: https://github.com/nexu-io/open-design/releases/tag/open-design-v0.25.0
Image: /issues/issue-004/pick-3.svg | Illustration: shapes and cursors on a dotted design canvas

### 4. 💼 Founders: Meta pulls "train" from its commercial terms after scraping backlash
Meta's new commercial terms said it could use content from a business account's domains to "train" its products; legal experts told Nieman Lab that could reach publishers' sites. On Oct 17 Meta removed that language, saying the terms only cover its ads and business products and don't change how it crawls. Experts told Nieman Lab broad crawl permissions remain.
**Try this in 10 min:** If you run a Meta business account, list the domains linked to it, then check your robots.txt covers the crawlers you do and don't want, Meta's included.
Source: https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/
Image: /issues/issue-004/pick-4.svg | Illustration: a document under a magnifying glass

### 5. 🃏 Wildcard: Replit makes OpenAI the default model behind Replit Agent
Replit CEO Amjad Masad said at TechCrunch Disrupt that OpenAI is now its preferred partner and default, citing cost and performance. Claude models remain selectable, and a person familiar with the partnership told TechCrunch it is still in place. Most users keep defaults, so your app's model may have changed without you picking it.
**Try this in 10 min:** In a Replit project, check which model Agent uses, then run the same small feature request on the default and on Claude and compare the diffs.
Source: https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/
Image: /issues/issue-004/pick-5.svg | Illustration: two circles splitting apart

**Also notable:** Vercel's AI Gateway logs now group requests into sessions (Oct 18), with the coding agent, cost and cache hit rate for each. https://vercel.com/changelog/ai-gateway-logs-now-show-session-affinity

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
