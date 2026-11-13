# Short Stack #23 — Fri, Nov 13, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Gemini 4 Hydrogen: Google's fast model for everyday agent work
Google released Gemini 4 Hydrogen on Nov 12, a faster model for coding and agent tasks that sits under Carbon and Argon. It costs $1.50 per million input tokens and $7.50 per million output, flat across a 1M-token context, with four thinking levels (low to a new xhigh). Google says it edges Argon on the Artificial Analysis index and cuts fabricated claims more than 5x vs 3.8 Flash (its claims).
**Try this in 10 min:** In Google AI Studio, pick Gemini 4 Hydrogen and run one real bug report from your repo at low, then high thinking. Compare the fix, speed and tokens.
Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
Image: /issues/issue-023/pick-1.svg | Illustration: a small fast rocket-shaped cursor zipping past a stack of code blocks

### 2. Expo Simulators give your coding agent a phone in the cloud
Expo launched Expo Simulators on Nov 12: cloud iOS Simulators and Android Emulators that Claude Code, Codex, Cursor or any CLI agent can drive, with no Mac needed. Each session runs in its own VM and keeps a screen recording, screenshots and logs your reviewer can watch. It's on all paid Expo plans at $0.10 per simulator minute, with 60 minutes a month included.
**Try this in 10 min:** Run `npx skills@latest add expo/skills --skill eas-simulator`, then ask your agent to open your app on a cloud iOS simulator and screenshot the main screen.
Source: https://expo.dev/blog/introducing-expo-simulators-cloud-simulators-built-for-agents
Image: /issues/issue-023/pick-2.svg | Illustration: a phone outline floating on a cloud, with a robot arm tapping its screen

### 3. Figma adds 3D transforms, and they copy out as CSS
Figma shipped 3D transforms on Nov 12, in open beta for all Full seat users. You can tilt and rotate text, images, vectors and frames on the x, y and z axes, add perspective to a parent frame, and animate it all with Figma Motion. The effect is non-destructive, Dev Mode copies the exact CSS transform, and coding agents can read 3D designs through the Figma MCP server.
**Try this in 10 min:** Tilt one card from your current design in 3D, add perspective to its frame, then copy the CSS from Dev Mode into a test page.
Source: https://www.figma.com/blog/how-3d-transforms-and-figmas-agent-brought-a-launch-video-to-life/
Image: /issues/issue-023/pick-3.svg | Illustration: three flat cards tilting into 3D space along a perspective grid

### 4. Gemini Decisions API answers 1,000 yes/no questions in one call
Google launched the Gemini Decisions API (model `gemini-decision-1`) on Nov 11. Instead of writing text, it scores up to 1,000 yes/no, multiple-choice and rubric questions against one input (text, images, audio, video or PDFs) and returns probabilities with a confidence score. It's $0.10 per million input tokens with no output tokens billed, and has a free tier in AI Studio.
**Try this in 10 min:** Take 20 support emails or signups and ask three yes/no questions (spam? urgent? refund?). Send anything under 0.7 confidence to a human.
Source: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
Image: /issues/issue-023/pick-4.svg | Illustration: a row of checkboxes feeding into a balance scale

### 5. United says AI agents can't book its flights anymore
United said on Nov 11 it is restricting unauthorized third-party AI agents from booking, changing or buying flights, seats and upgrades, on its own site and through travel agencies and aggregators. AI can still search and show fares, but you finish the purchase yourself. United cites data security and FAA/DOT rules. Bookings agents made before Nov 11 won't be canceled.
**Try this in 10 min:** If your product's agent buys or books things, list which sites it transacts on and check each one's terms for an AI-agent clause.
Source: https://united.mediaroom.com/news-releases?item=125496
Image: /issues/issue-023/pick-5.svg | Illustration: a paper airplane stopped by a small gate while a robot hand waits behind it

**Also notable:** Alibaba opened Qwen4-Max-Preview on QwenCloud (Nov 11), a multimodal flagship for reasoning, coding and agents, available through Nov 25. https://docs.qwencloud.com/developer-guides/getting-started/latest-model

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
