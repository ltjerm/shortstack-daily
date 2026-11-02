# Short Stack #14 — Mon, Nov 2, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Grok API text gets an invisible watermark by default starting Nov 7
xAI (SpaceXSI in its docs) posted an Output Watermarking page on Oct 31. From Nov 7, text from grok-4.7, grok-4.6, grok-4.5, grok-4.3 and the three grok-4.20 models carries a statistical watermark on every endpoint, including structured outputs and tool-call arguments. A new `x-watermark: true` response header tells you a reply was marked. Team admins can opt out per model, but only after confirming a legal exception applies. xAI cites the EU AI Act.
**Try this in 10 min:** List every Grok model your app calls, then add a line that logs the `x-watermark` header so you can see what's marked after Nov 7.
Source: https://docs.x.ai/developers/advanced-api-usage/watermarking
Image: /issues/issue-014/pick-1.svg | Illustration: a text document with a faint wave pattern hidden in its lines and a magnifier

### 2. DeepSeek open-sourced a coding agent that takes requests from your GitHub repo
DeepSeek published dsh-superagent on Oct 31 under the MIT license. It watches one GitHub repo (and optionally Feishu chats), turns requests from approved people into work items, and replies where the request started, for example with a pull request. A web panel shows only what needs a person. DeepSeek calls it a research prototype, not a product, and it runs on DeepSeek Harness.
**Try this in 10 min:** Read the repo's philosophy and authorization docs, then write down which requests you'd let an agent take from your own repo without asking you.
Source: https://github.com/deepseek-ai/dsh-superagent-prototype
Image: /issues/issue-014/pick-2.svg | Illustration: a repository branch feeding tickets into a row of small worker blocks that send back a merged branch

### 3. Figma teams can now publish their own Weave tools, and the Figma agent reads Google Drive
Figma's Oct 30 release notes add two things. Organization and Enterprise teams can publish Weave image tools internally, so they show up in the Tools tab in Figma Design next to Figma's and the Community's. And the Figma agent and Make can now connect to Google Drive on every plan, including Starter, to pull in research, data or assets.
**Try this in 10 min:** In Figma Make, add the Google Drive connector from the plus menu and ask the agent to build a screen from a real spreadsheet instead of placeholder data.
Source: https://www.figma.com/release-notes/
Image: /issues/issue-014/pick-3.jpg | Image from figma.com: a Figma frame next to the Figma Weave node canvas

### 4. Claude Code subagents can now think less than your main session
Claude Code v2.1.316, published to npm Oct 30, adds `CLAUDE_CODE_SUBAGENT_EFFORT`. It sets the effort level subagents use when nothing else names one, instead of inheriting your session's. The same release deprecates fast mode for Opus 4.8; it stops working Nov 30.
**Try this in 10 min:** Update Claude Code, export `CLAUDE_CODE_SUBAGENT_EFFORT=low`, run one task that spawns search subagents, and compare time and usage with your last run.
Source: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
Image: /issues/issue-014/pick-4.svg | Illustration: one large dial set high beside three small dials set low

### 5. Apple Intelligence is coming to China, with Alibaba's Qwen inside
Apple said on its Chinese newsroom that Apple Intelligence reaches China with iOS 27.3: a beta on Nov 4 and a full release in December. It brings earlier features like summaries, translation, writing tools and visual intelligence, not the new Siri. Apple also added support for Alibaba's Qwen chatbot in some experiences.
**Try this in 10 min:** If you have users in China, list the app flows where Writing Tools or Visual Intelligence touch your content, and plan to test them on the Nov 4 beta.
Source: https://www.theverge.com/tech/1023974/apple-intelligence-china-ios-27-3
Image: /issues/issue-014/pick-5.svg | Illustration: a phone with a glowing assistant ring connected to a second model block

**Also notable:** OpenAI says that starting in December, Plus, Pro and Business plans will share one token-based usage allowance across ChatGPT and Codex as Work's agent features move into the main ChatGPT app. Instant chat won't count. https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
