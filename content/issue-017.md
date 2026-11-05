# Short Stack #17 — Thu, Nov 5, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. OpenAI's Images 2.6 makes animated GIFs and SVGs from one API call
OpenAI shipped Images 2.6 on Nov 4 in ChatGPT, Codex and the API, with two models: `gpt-image-2.6-flare` for fast iteration and `gpt-image-2.6-sunburst` for detail and consistency across edits. OpenAI claims 50% faster generation and Flare images in as little as six seconds at low quality. The API docs add `output_format: "gif"` with `frame_count` and `frame_duration_ms`, SVG output, markup-guided edits and a new `complexity` setting.
**Try this in 10 min:** Call `/v1/images/generations` with `gpt-image-2.6-flare`, `output_format: "gif"` and a short looping prompt for your app's empty state or mascot.
Source: https://developers.openai.com/api/docs/guides/image-generation
Image: /issues/issue-017/pick-1.svg | Illustration: a strip of film frames curving into a looping circle beside a vector pen nib

### 2. Meta bought Conductor, and its cloud service shuts down Nov 20
Meta acquired Conductor, the startup that runs multiple coding agents in parallel workspaces, TechCrunch reports. Founder Charlie Holtz says core features keep working until early next year, but Conductor's cloud service shuts down on November 20, after which the company will begin deleting user cloud data.
**Try this in 10 min:** If you use Conductor's cloud, list every workspace there and push or export anything you need before Nov 20.
Source: https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/
Image: /issues/issue-017/pick-2.svg | Illustration: several small parallel workspace panels with a cloud above them fading out

### 3. Copilot now lives inside Xcode's built-in coding assistant
GitHub says Copilot works directly in Xcode's native coding assistant, in public preview starting with Xcode 27.3 beta on macOS Tahoe 26.6 or later. All Copilot plans are supported, and the separate Copilot for Xcode extension stays available.
**Try this in 10 min:** Install Xcode 27.3 beta, open Xcode > Settings > Intelligence, connect Copilot, and ask it to explain one SwiftUI view you didn't write.
Source: https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant/
Image: /issues/issue-017/pick-3.svg | Illustration: a hammer-shaped tool icon beside a code window with a small spark in the corner

### 4. Tencent's Hy4 adds vision and agent skills at about $0.90 per million input tokens
Tencent released Hy4, its newest LLM, with visual understanding for the first time plus better long-context and long-horizon agent work, by Tencent's own account. Tencent says the API is being made available via third-party platforms including OpenRouter and OpenCode, and it lists about $0.90 per million input tokens and $2.70 per million output. Weights and system cards are promised "in the coming days."
**Try this in 10 min:** Search OpenRouter for Hy4 and, if it's listed, run one chart-reading or tool-calling prompt you already use against it to compare quality and cost.
Source: https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/
Image: /issues/issue-017/pick-4.svg | Illustration: a stack of model layers with an eye shape on top and a chart beside it

### 5. Anthropic's lab used Claude to map a mystery protein barrel
Anthropic's biology team published the first 3D structure of a vault particle found in prokaryotic cells. Claude searched protein databases, designed DNA constructs, optimized the isolation method and processed microscopy data. Anthropic says a purification that usually takes three days took about 90 minutes, with a first structural model 34 hours later.
**Try this in 10 min:** Pick one slow, multi-step workflow in your work, write out its steps, and mark which ones an agent could do end to end today.
Source: https://www.anthropic.com/research/investigating-vault-particles-with-claude
Image: /issues/issue-017/pick-5.svg | Illustration: a hollow barrel-shaped lattice under a magnifying lens

**Also notable:** Claude Code 2.1.317 loosens a rule that blocked naming an existing game: you can now reference one to describe mechanics and Claude should build an original game in that genre. https://www.theverge.com/ai-artificial-intelligence/1026672/anthropic-tweaks-how-claude-code-handles-requests-about-making-games

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
