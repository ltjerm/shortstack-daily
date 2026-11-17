# Short Stack #25 — Tue, Nov 17, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Qwen4-Max is out: a top-tier model at $1.50 / $4.50
Alibaba released Qwen4-Max on Nov 16: 2.4 trillion parameters (71B active), native vision and a 1M-token context. On QwenCloud it costs $1.50 per million input tokens and $4.50 output. Alibaba says it ranked 6th on Code Arena and cuts cost per task about 60% versus Qwen3.8-Max on its own benchmark (Alibaba's numbers). Weights are closed; smaller open Qwen4 models are promised "soon."
**Try this in 10 min:** QwenCloud's API is OpenAI-compatible. Point your existing client at it with model `qwen4-max`, rerun one real prompt from your app, and compare the answer and the bill.
Source: https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max
Image: /issues/issue-025/pick-1.svg | Illustration: a tall stack of coins next to a small price tag, with a wide window frame behind it

### 2. ngrok's MCP server lets your coding agent run your tunnels
ngrok launched its MCP server on Nov 16, on every plan including free. Your agent can list endpoints, read traffic logs, and write, validate and save Traffic Policy rules like rate limits. It signs in with OAuth, not your API key, using 15-minute tokens. ChatGPT can't connect yet.
**Try this in 10 min:** In Claude Code run `claude mcp add --transport http --scope user ngrok https://mcp.ngrok.com/mcp`, then `claude mcp login ngrok`, and ask: "What hit my endpoint in the last day, and is any of it a scanner?"
Source: https://ngrok.com/blog/mcp
Image: /issues/issue-025/pick-2.svg | Illustration: a tunnel entrance with a small robot holding a traffic sign

### 3. Paper's remote MCP lets agents design with your laptop closed
Paper, the design tool whose canvas is HTML and CSS, added remote MCP on Nov 16. Cloud agents, CI jobs, or you on your phone can now read and write Paper files without Paper Desktop open. It's early access, metered like local MCP (Free gets 100 tool calls a week); long-term pricing comes in about a month.
**Try this in 10 min:** Give your cloud agent this prompt: "Add the Paper MCP server at https://mcp.paper.design". Sign in, then ask it to lay out a pricing section in a new frame.
Source: https://paper.design/docs/mcp
Image: /issues/issue-025/pick-3.svg | Illustration: a closed laptop with a design canvas floating above it like a cloud

### 4. TokenEconomizer makes coding agents cheaper the more you use them
Microsoft Research, UC Berkeley and Microsoft Security open-sourced TokenEconomizer on Nov 16, a plugin that learns from an agent's past sessions in a repo. It adds one-line repo notes, prunes tools the agent never calls, and flags failure loops. Across 277 SWE-Bench tasks it cut cost 18.4–30.9% with success rates broadly stable (their numbers). No API key; what it learns stays local.
**Try this in 10 min:** `git clone https://github.com/microsoft/TokenEconomizer.git`, then `claude plugin marketplace add /path/to/TokenEconomizer` and `claude plugin install tokeneconomizer@tokeneconomizer`. Start a new session and type `/tokeneconomizer:status`.
Source: https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/
Image: /issues/issue-025/pick-4.svg | Illustration: a piggy bank with a small notebook and a pair of scissors trimming a tool list

### 5. xeet draws X posts pixel-perfect, with no browser
Vercel CEO Guillermo Rauch released xeet on Nov 16: an Apache 2.0 renderer in safe Rust and WebAssembly that turns a post, or an `x.com` link, into a PNG matching what Chrome shows on X, line breaks, emoji and "Show more" included. The README says a text post renders in 2.8 ms, with no network, filesystem or system fonts. Agents maintain it against a Chrome-checking oracle, Rauch says.
**Try this in 10 min:** Paste your next post draft into the playground at `xeet-rs.vercel.app` and check where "Show more" cuts it, in light and dark. Or `npm i @xeet/core` and render one in Node.
Source: https://github.com/rauchg/xeet
Image: /issues/issue-025/pick-5.svg | Illustration: a speech bubble being printed out of a small machine as a photo

---

**Also notable:** Tencent released Hy4 flash, priced at about $0.070 input and $0.281 output per million tokens, free on WorkBuddy through Nov 30. https://www.prnewswire.com/news-releases/tencent-launches-hy4-flash-to-power-high-speed-cost-efficient-ai-deployment-for-everyday-workflows-302941875.html

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
