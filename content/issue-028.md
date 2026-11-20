# Short Stack #28 — Fri, Nov 20, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Gemini can now use your Mac for you
Google added computer use to the Gemini app for Mac on Nov 19. Describe a multi-step task and Gemini clicks, types and fills forms across your files, apps and the web, in a background window with a live preview, so your cursor stays free. You pick which apps it can touch and approve key actions.
**Try this in 10 min:** On an Apple Silicon Mac (macOS 15+, US English, Google AI Plus, Pro or Ultra), ask the Gemini Mac app to sort one messy folder of screenshots and approve each step.
Source: https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/
Image: /issues/issue-028/pick-1.svg | Illustration: a laptop with a small second window where a cursor sorts files into folders

### 2. Gemini API Tool Retrieval loads tool schemas only when needed
Tool Retrieval is in preview in the Gemini Interactions API. Add a `tool_search` tool and set `defer_loading: true` on the tools you want held back. The model still sees every tool's name and description and loads a full schema only when it needs it. No separate charge, no index to host. Works with Gemini 3.6 and later.
**Try this in 10 min:** On an agent with 20+ tools, defer all but your top three and compare input tokens on the same prompt.
Source: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/
Image: /issues/issue-028/pick-2.svg | Illustration: a toolbox with most drawers closed and one drawer sliding open

### 3. Edge ships a free on-device model your website can call
Microsoft made Aion Instruct generally available on Nov 19: a 2.3B open-weights model on Hugging Face that now replaces Phi-4-mini as Edge's built-in model. A Prompt API origin trial lets your live site call it in Edge. An experimental Decisions API (Canary and Dev) returns yes/no, choice or score answers with confidence.
**Try this in 10 min:** Register for the Prompt API origin trial from the Edge post, then add a "summarize this page" button to a test page that runs fully in the browser.
Source: https://blogs.windows.com/msedgedev/2026/11/19/hybrid-intelligence-on-the-web-introducing-aion-instruct-and-prompt-api-in-microsoft-edge/
Image: /issues/issue-028/pick-3.svg | Illustration: a browser window with a tiny glowing chip inside it

### 4. The Figma agent now works in Dev Mode
Since Nov 19, you can prompt the Figma agent inside Dev Mode. Ask how a design works, compare versions with a visual diff, request code snippets, and get bulk asset download links.
**Try this in 10 min:** In Dev Mode (Shift+D) on a handoff file, ask the agent "what changed since the last version?", then ask for every icon as SVG download links.
Source: https://www.figma.com/release-notes/
Image: /issues/issue-028/pick-4.svg | Illustration: two design frames side by side with a magnifier and angle brackets between them

### 5. Canva adds an off switch for generative AI
Canva launched AI Controls on Nov 19 for Canva Free and Pro. One switch hides generative features like Magic Write and Dream Lab; another shows less AI-made content in the library. Assistive tools like Background Remover stay on, and Canva says they won't add an AI-generated label.
**Try this in 10 min:** Go to Profile > Settings > Permissions, turn generative AI off, and make one social post with only your own photos.
Source: https://www.canva.com/newsroom/news/ai-controls-canva/
Image: /issues/issue-028/pick-5.svg | Illustration: a big toggle switch next to a paintbrush and a sparkle

---

**Also notable:** Genie 4 is now in the Gemini API and Google AI Studio, generating explorable 720p worlds with native audio. https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
