# Short Stack #33 — Fri, Nov 27, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Perplexity's Time Machine lets agents search the web as it was
Perplexity added Time Machine to its Search and Context APIs on Nov 25. Add `snapshot_as_of` with a past timestamp, up to 365 days back, and results come only from copies of pages Perplexity saved before that moment. It's built for testing agents and forecasts without hindsight leaking in. It has separate rate limits.
**Try this in 10 min:** Send the same `POST /search` query twice, once normally and once with `snapshot_as_of` set to 30 days ago, and compare.
Source: https://docs.perplexity.ai/docs/search/time-machine
Image: /issues/issue-033/pick-1.svg | Illustration: a clock face behind a cobalt magnifying glass

### 2. OpenAI fixed a GPT-6.2 billing bug, so your limits run out faster
OpenAI says a launch bug undercounted GPT-6.2 Astra and Sol usage. Now that it's fixed, the same work uses more of your plan: you'll hit limits about 40% faster on Astra and 25% faster on Sol than last week, per OpenAI's Tibo Sottiaux. Other models are unchanged, and Go, Plus, Pro and Business users get one banked reset.
**Try this in 10 min:** Find the reset under ChatGPT Settings > Usage, then move routine Codex tasks to Sol and save Astra for the hard ones.
Source: https://www.bleepingcomputer.com/news/artificial-intelligence/openai-warns-gpt-62-astra-will-hit-usage-limits-40-percent-faster-because-it-fixed-a-bug/
Image: /issues/issue-033/pick-2.svg | Illustration: a fuel gauge with a cobalt needle near empty

### 3. Ant Group open-sources a design image model for UI drafts and posters
Ant Group's inclusionAI team released Ming-Image-0.2-Design under the MIT license on Nov 25. It targets text-heavy design work like UI drafts, posters and e-commerce hero images, with better lettering than version 0.1. Ant says it ranks first among open-weight models on Artificial Analysis's text-to-image leaderboard. Its validated setup is one 80 GB GPU.
**Try this in 10 min:** Copy the model card's "Flow" landing-page prompt, swap in your product's name and headline, and run it with the repo's `infer.py` on a rented 80 GB GPU.
Source: https://huggingface.co/inclusionAI/Ming-Image-0.2-Design
Image: /issues/issue-033/pick-3.svg | Illustration: a landing-page mockup with a cobalt button and a paintbrush

### 4. Solana Playground puts an AI coding agent in the browser
Solana launched Solana Playground at playground.solana.com on Nov 25, a browser IDE for learning, writing and deploying Solana programs with no local setup. The new part is a built-in AI agent that explains code and edits alongside you. It builds on the beta.solpg.io tool that has run since 2022.
**Try this in 10 min:** Open playground.solana.com, start the Anchor starter, and ask the agent to explain each account in the program before you change a line.
Source: https://cryptobriefing.com/solana-playground-ai-developer-tool/
Image: /issues/issue-033/pick-4.svg | Illustration: a browser window with code brackets and a small robot head

### 5. MAGI-2 makes 30-second 1080p videos with sound
Sand.ai launched MAGI-2 on Nov 24, a 480B-parameter video model (about 28B active) that generates up to 30 seconds of 1080p video with dialogue, lip-sync, sound effects and music in one pass. Sand says open weights are coming. It's live on Higgsfield, and Sand lists API pricing at $0.08 per second.
**Try this in 10 min:** On Higgsfield, give MAGI-2 one product photo and a short voice line, and ask for a 10-second ad with the line spoken on camera.
Source: https://sand.ai/blog/magi-2/
Image: /issues/issue-033/pick-5.svg | Illustration: a film clapper with cobalt sound waves

---

**Also notable:** MCP turned two this week. The maintainers' recap covers stateless servers, MCP Apps and Skills over MCP. https://blog.modelcontextprotocol.io/posts/mcp-turns-two/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
