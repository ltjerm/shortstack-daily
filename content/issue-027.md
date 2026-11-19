# Short Stack #27 — Thu, Nov 19, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Gemini 4 Neon: Google's new middle model for coding and agents
Google released Gemini 4 Neon on Nov 18. It sits between Carbon (hardest work) and Hydrogen (fast everyday tasks), with a 1M-token context and four thinking levels. API pricing is $3 per million input tokens, $0.15 cached and $15 output. Google says it costs 32% less per task than Carbon at the default level and ranks #1 on the Artificial Analysis Coding Agent Index (Google's numbers).
**Try this in 10 min:** In Google AI Studio (paid API tier, or a Google AI Pro/Ultra plan), pick Gemini 4 Neon, paste one bug report plus the file it touches, and compare the fix with your current model.
Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
Image: /issues/issue-027/pick-1.svg | Illustration: a glowing gas tube in a stand next to a small code window

### 2. Vercel Board gives your agents a shared message board
Vercel Board is now on all Vercel plans as an experiment. Agents and people post tasks in channels, keep each task's discussion and results in one thread, and you control which channels each agent can read or act in. Threads sync both ways with Slack and GitHub through Vercel Connect. Agents use it through the Vercel CLI or the JavaScript SDK.
**Try this in 10 min:** Run `npx skills add vercel/board`, then ask your coding agent to run `vercel board whoami`, list the channels and post your first task.
Source: https://vercel.com/changelog/vercel-board-is-now-available
Image: /issues/issue-027/pick-2.svg | Illustration: a cork board with pinned notes connected by strings to three small robot heads

### 3. Figma now generates several images from one prompt
Since Nov 18, Make image and Edit image in Figma can return two, four or six options from a single prompt. You can also run one prompt across up to three image models at once, see each model's take side by side, and keep the best one. It works across Figma Design, FigJam, Slides and Draw.
**Try this in 10 min:** In a Figma file, open Make image, write a prompt for a hero image you need this week, ask for four options, then rerun it across three models and keep the winner.
Source: https://www.figma.com/release-notes/
Image: /issues/issue-027/pick-3.svg | Illustration: a grid of four picture frames with a cursor choosing one

### 4. Cloudflare open-weights Clairic, a fast model that pulls data out of documents
Cloudflare released an updated Clairic (27B) and a new Clairic-flash (9B) on Nov 18, with open weights on Hugging Face and hosting on Workers AI. They extract fields like supplier, line items and totals from text, images and now PDFs, with confidence scores. Cloudflare reports sub-second responses. Both cost $0.10 per million input tokens until Dec 1; then Clairic goes to $0.24.
**Try this in 10 min:** Using the schema in the Workers AI docs, send `@cf/cloudflare/clairic-flash` a photo of one receipt or invoice and ask for merchant, date and total. Check what comes back against the paper.
Source: https://blog.cloudflare.com/open-clairic/
Image: /issues/issue-027/pick-4.svg | Illustration: a receipt passing through a funnel into three neat boxes

### 5. Rumble-2-Flash: a tiny open speech model for 40+ languages
Reson8 open-sourced Rumble-2-Flash on Nov 18 under Apache 2.0. It's a 0.5B speech-to-text model with automatic language detection that runs in Transformers and vLLM with no custom code. Reson8 reports a 6.96% average error rate on the Open ASR multilingual track and says it matches a 30B NVIDIA model on noisy call-centre audio (their numbers).
**Try this in 10 min:** Run the quickstart from the Hugging Face post on `Reson8/Rumble-2-Flash` and transcribe a voice memo from your phone. Then try it with the language left blank.
Source: https://huggingface.co/blog/rumble-2-flash
Image: /issues/issue-027/pick-5.svg | Illustration: a small microphone with sound waves turning into a ribbon of lines

---

**Also notable:** Google Labs opened the waitlist for Stitch Loop, a long-running product agent that watches your codebase and metrics and opens pull requests you approve. https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
