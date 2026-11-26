# Short Stack #32 — Thu, Nov 26, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Anthropic rewrote its Messages API in Rust with Claude
Anthropic says Claude wrote a first Rust version of the Messages API's core request path in about a week. The hard part was trust: the team tested it on live production traffic, found where it differed from the Python API, and sent agents to fix each gap. Anthropic reports about 70% less CPU per request and roughly 20% faster median time to first token.
**Try this in 10 min:** Ask your coding agent for a script that sends the same 20 requests to an old and new version of one endpoint and diffs the responses.
Source: https://www.anthropic.com/research/migrating-api-to-rust
Image: /issues/issue-032/pick-1.svg | Illustration: two documents on either side of a balance scale

### 2. Obsidian ships official connectors for AI agents
Obsidian now offers official connectors: open-source skills that teach Claude, ChatGPT, Cursor, Antigravity, Grok Bot and other agents to write Obsidian Markdown, edit Bases and Canvas files, and manage notes through the Obsidian CLI. Notes stay as files in your vault.
**Try this in 10 min:** In Claude Code, run `claude plugin marketplace add obsidianmd/obsidian-skills`, then `claude plugin install obsidian@obsidian-skills`, and ask it to turn today's notes into a Canvas.
Source: https://obsidian.md/help/connectors
Image: /issues/issue-032/pick-2.svg | Illustration: a cobalt note card linked to three small robot heads

### 3. Cloudflare can make your site searchable by AI agents
Cloudflare launched Search for Agents on Nov 25. Turn it on under Quick Actions on a domain's Overview page, and Cloudflare indexes your site and exposes a `/.well-known/search` endpoint. It returns matching content as Markdown, not an AI answer, so agents bring their own models. It's on all plans; AI Search pricing and limits apply.
**Try this in 10 min:** Turn it on for a docs site, then query `https://yourdomain/.well-known/search?q=pricing` with curl to see exactly what an agent gets back.
Source: https://developers.cloudflare.com/changelog/post/2026-11-25-search-for-agents/
Image: /issues/issue-032/pick-3.svg | Illustration: a browser window with an antenna and a cobalt magnifying glass

### 4. SenseTime open-sources an image model that fixes its own typos
SenseNova U1.6 is an open-source 8B model that generates an image, checks it against your prompt, then redraws it to fix blurry text, typos, garbled characters and wrong numbering. SenseTime says the self-correction training focused on infographics. It already runs in ComfyUI.
**Try this in 10 min:** In ComfyUI, load the SenseNova U1.6 workflow, prompt a poster with an exact title and date, and compare the lettering with your usual image model.
Source: https://www.sensetime.com/en/news/sensenova-u1-6-open-source-20261126-1454
Image: /issues/issue-032/pick-4.svg | Illustration: a poster with a wavy line and a pencil correcting it

### 5. OpenAI starts testing Private Inference for business prompts
OpenAI began testing Private Inference, an alpha that runs model work on confidential-computing hardware with "strict verifiable controls," so business prompts and replies stay protected during processing. Sam Altman said it's with a small group of customers, with no date for a wider rollout. It joins Zero Data Retention in OpenAI's Private Intelligence package.
**Try this in 10 min:** Write down one workflow you keep away from AI for privacy reasons, then check which Private Intelligence protections would cover it.
Source: https://thenextweb.com/news/openai-private-inference-testing-customers
Image: /issues/issue-032/pick-5.svg | Illustration: a chip sealed inside a cobalt shield

---

**Also notable:** Psychoscript, the engine behind OpenCode's Code Mode, is out as a confined JavaScript runtime whose runs can be paused, saved to bytes, and resumed later. https://github.com/anomalyco/psychoscript

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
