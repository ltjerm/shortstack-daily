# Short Stack #24 — Mon, Nov 16, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. ChatGPT Wallet lets agents pay without seeing your card
OpenAI launched ChatGPT Wallet on Nov 13, built with American Express, Mastercard and Visa. Your agent (a "dot") pays with a network payment token instead of your real card number, and you approve every purchase with Face ID or a fingerprint. It starts with US ChatGPT Pro users. OpenAI also published a Commerce Partner Playbook telling stores how to stop blocking agent shoppers.
**Try this in 10 min:** If you sell anything online, read the playbook's agent-access section and check whether your CDN or firewall would block a signed ChatGPT agent request (Web Bot Auth).
Source: https://openai.com/index/introducing-chatgpt-wallet/
Image: /issues/issue-024/pick-1.svg | Illustration: a wallet with a small robot hand holding a blank token card, next to a fingerprint

### 2. Cloudflare open-sources Kitesurf, its browser for agents
Kitesurf, Cloudflare's lightweight browser for AI agents, went open source on Nov 13 under Apache 2.0. It runs on Workers with no browser container, executes page JavaScript, renders screenshots, and speaks the Chrome DevTools Protocol, so Puppeteer and agent harnesses can drive it. Cloudflare says it uses less CPU and memory than Chromium (its claim). Self-hosting on your own account needs a Workers Paid plan.
**Try this in 10 min:** Clone `cloudflare/kitesurf`, run `pnpm install --frozen-lockfile` and `pnpm run dev`, then point Puppeteer at `ws://127.0.0.1:8787/devtools/browser` and screenshot a page.
Source: https://blog.cloudflare.com/kitesurf-open-source/
Image: /issues/issue-024/pick-2.svg | Illustration: a kite shaped like a browser window, pulled by a string across a cream sky

### 3. Framer's agent now makes images and shaders for your site
Framer added image and shader generation to its Agent on Nov 12. Ask for a custom image, texture or illustration, or select one on the canvas and have the Agent swap the subject, remove the background or restyle it. Shaders work the same way: halftone, bokeh blur, CRT, pencil, or an effect you describe, like "smudge an image on pointer drag." The two chain together.
**Try this in 10 min:** Select your hero image in Framer and ask the Agent for a halftone shader that reacts to the cursor. Publish to a preview link and test it on your phone.
Source: https://www.framer.com/updates/image-shader-generation
Image: /issues/issue-024/pick-3.svg | Illustration: a picture frame with its image breaking into halftone dots

### 4. Claude Sonnet 4.5 shuts off in two weeks
Anthropic's deprecations page lists `claude-sonnet-4-5-20250929` for retirement on Nov 30, 2026; after that, requests fail. The suggested replacement is `claude-sonnet-5-5`. The same page notes that `temperature`, `top_p` and `top_k` were removed in API version `2026-10-21` and now return a 400 error, so an old request config can break even on new models.
**Try this in 10 min:** Search your repos and env files for `sonnet-4-5` and `temperature`. Swap one call to `claude-sonnet-5-5`, drop the sampling params, and rerun your test prompt.
Source: https://platform.claude.com/docs/en/about-claude/model-deprecations
Image: /issues/issue-024/pick-4.svg | Illustration: a calendar page with the 30th circled and a plug pulled from a socket

### 5. Runway gives away a robot brain
Runway released Praxis-1 on Nov 11 with open weights under Apache 2.0, commercial use included. It's a 27B mixture-of-experts "world action model" that predicts video and robot actions together, with inference and fine-tuning code (full and LoRA). Runway reports 46.2% success on NVIDIA's RoboLab-120, ahead of FLUX 3 Action at 42.9% (Runway's numbers). There's a checkpoint for the hobbyist SO-101 arm.
**Try this in 10 min:** Open the `runwayml/praxis-1-so101` model card on Hugging Face and read the rig spec. If you own an SO-101 arm, that's your weekend project.
Source: https://runway.com/news/company-news/praxis-1-is-now-available
Image: /issues/issue-024/pick-5.svg | Illustration: a simple robot arm picking up a cube, with a film strip behind it

---

**Also notable:** Google's pricing page says Gemini 4 Argon doubles on Dec 1, to $4 input and $20 output per million tokens. https://aistudio.google.com/docs/pricing

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
