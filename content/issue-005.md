# Short Stack #5 — Tue, Oct 20, 2026
*5 AI picks. 1 for each kind of builder. Each one takes 10 minutes to try.*

---

### 1. 🛠️ Vibe coders: Mercury 3 is a diffusion LLM that writes at 1,000+ tokens a second
Inception launched Mercury 3 on Oct 19. It generates text by diffusion instead of word by word, and Inception says it runs at 1,068 tokens per second with quality on par with or better than GPT-6 Luna and Claude Haiku 5.5 (vendor claims). It has a 1M-token context, costs $0.10 in / $0.35 out per million tokens at a 50% launch discount, and is OpenAI-API compatible, on OpenRouter and Vercel too.
**Try this in 10 min:** Take one OpenAI-SDK call in your app, point it at Mercury 3 using the free API tokens, and compare speed and output against your current model.
Source: https://www.inceptionlabs.ai/blog/introducing-mercury-3
Image: /issues/issue-005/pick-1.jpg | Image from inceptionlabs.ai: Mercury 3 is a diffusion LLM that writes at 1,000+ tokens a second

### 2. 🤖 Agent devs: MiniMax M3.1 Flash targets agent work at $0.15 per million input tokens
MiniMax rolled out M3.1 Flash on Oct 19, priced at $0.15 in, $0.60 out and $0.015 cached input per million tokens. Its own numbers: 73.7% on DeepSWE v1.1, 61.7 on OSWorld V2, 200+ tokens per second, and 70% lower agent-task cost than its predecessor. It's live on the MiniMax API and MiniMax Code; weights come later.
**Try this in 10 min:** Rerun one agent task you've already logged on M3.1 Flash via platform.minimax.io and compare steps, cost and whether it finished.
Source: https://www.minimax.io/blog/minimax-m31f
Image: /issues/issue-005/pick-2.jpg | Image from minimax.io: MiniMax M3.1 Flash targets agent work at $0.15 per million input tokens

### 3. 🎨 Designers: Lovart 2.0 adds Arti, a design agent that remembers your taste
Lovart 2.0 (Oct 19) adds Arti, which keeps editable memory of your aesthetic and working style. You can hand it whole jobs ("design delegation") on a schedule with a per-run credit limit and a test run first. A background Design Review flags off-style frames, and workflows you repeat 3+ times can become reusable skills.
**Try this in 10 min:** Tell Arti two preferences (palette, how many directions you want first), start the weekly inspiration mood board template, and do a test run with a low credit limit.
Source: https://www.lovart.ai/news/lovart-2-0-arti
Image: /issues/issue-005/pick-3.svg | Illustration: a style curve above a row of color swatches

### 4. 💼 Founders: DHS orders DeepSeek out of federal civilian agencies
DHS made public on Monday an order, issued July 24, that requires federal civilian agencies to remove DeepSeek technology from their IT systems and stop buying it, CNBC reports. It covers third-party products and services built with DeepSeek's tech, and excludes the Defense Department. DHS cites possible data transfers to China and security flaws.
**Try this in 10 min:** If you sell to (or hope to sell to) federal agencies, list every model and API behind your product, including routers and open weights, and flag any DeepSeek dependency.
Source: https://www.cnbc.com/2026/10/20/us-deepseek-federal-agency-ban.html
Image: /issues/issue-005/pick-4.svg | Illustration: a flag with a prohibition sign

### 5. 🃏 Wildcard: Gemini apps now export to Google Sites in one click
Since Oct 19, any interactive app you build in the Gemini app can go to Google Sites via Export > Google Sites. It lands as a private, fully interactive draft you can edit, publish and share. Available now on web, Android and iOS for Workspace and personal accounts.
**Try this in 10 min:** Ask Gemini for a tiny interactive tool (a pricing calculator or quiz), export it to Sites, add a heading, and send the link to one person.
Source: https://workspaceupdates.googleblog.com/2026/10/publish-interactive-apps-from-gemini-app-to-Google-Sites.html
Image: /issues/issue-005/pick-5.jpg | Image from workspaceupdates.googleblog.com: Gemini apps now export to Google Sites in one click

**Also notable:** Mintlify's Autopilot beta (Oct 20) watches your code and opens doc-update PRs, charging 250 credits per PR and nothing when there's nothing to change. https://www.mintlify.com/blog/autopilot

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
