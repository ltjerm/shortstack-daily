# Short Stack #1 — Wed, Oct 14, 2026
*5 AI picks. 1 for each kind of builder. Each one takes 10 minutes to try.*

---

### 1. 🛠️ Vibe coders: Gemini 4 Argon is out
Google shipped Gemini 4 Argon on Oct 13. It's Google's new frontier model for long, multi-step coding work like migrations. The API price starts at $2/M input and $10/M output tokens, and the input+output limit is 1M tokens. It's on the paid Gemini API tier, in AI Studio and Android Studio, and in Antigravity for AI Ultra subscribers.
**Try this in 10 min:** Pick a messy file in a side project. Paste it into AI Studio with Argon and ask for a refactor plan. Then compare that plan with your usual model's.
Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/
Image: /issues/issue-001/pick-1.jpg | Image from blog.google: Gemini 4 Argon is out

### 2. 🤖 Agent devs: ScaleDown's single-task models for agent loops
ScaleDown launched Constrained Decoding Models on Oct 13: Summarize, Compress, Extract and Classify. Each one only returns the answers its task allows, and each takes up to 1M input tokens. LangChain shipped `langchain-scaledown` middleware the same day. Extract and Summarize cost $0.04/M input tokens on OpenRouter. The speed and cost numbers come from the vendor and haven't been checked independently.
**Try this in 10 min:** Run `pip install langchain-scaledown`. Add the tool-result compression middleware to one Deep Agent, then compare token counts before and after.
Source: https://aicoder.com/news/news-20261013-scaledown-constrained-decoding-models-langchain-deep-agents
Image: /issues/issue-001/pick-2.svg | Illustration: stacked bars compressing downward

### 3. 🎨 Designers: Canva's AI Connector, powered by MCP
Canva's AI Connector, which runs on its MCP server, lets ChatGPT, Claude, Gemini and Copilot create, search and edit on-brand Canva designs using your brand kit. The results stay fully editable.
**Try this in 10 min:** Connect Canva in Claude or ChatGPT settings, or type `@canva` in Gemini. Then ask for a 3-slide deck that uses your brand kit.
Source: https://www.canva.com/resources/connect-canva-to-ai-agent/
Image: /issues/issue-001/pick-3.jpg | Image from canva.com: Canva's AI Connector, powered by MCP

### 4. 💼 Non-technical founders: A cheaper frontier model you can use in a chat
You don't need the API to use Argon. Google AI Pro and Ultra subscribers can use it in the Gemini app and in AI Mode in Search today.
**Try this in 10 min:** Give Argon your landing-page copy and your top 3 competitors' URLs. Ask for a positioning gap analysis and 3 headline rewrites.
Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/
Image: /issues/issue-001/pick-4.jpg | Image from blog.google: A cheaper frontier model you can use in a chat

### 5. 🃏 Wildcard: NVIDIA open-sources Run:ai
On Oct 13 NVIDIA released the full Run:ai GPU orchestration platform as open source. That includes KAI Scheduler and a GPU Fractioning Operator, which you can also adopt on their own.
**Try this in 10 min:** Read the KAI Scheduler README and see whether GPU fractioning could let you run 2 small models on 1 GPU.
Source: https://developer.nvidia.com/blog/nvidia-runai-is-now-open-source-as-part-of-nvidia-dsx-ai-factory-platform/
Image: /issues/issue-001/pick-5.jpg | Image from developer.nvidia.com: NVIDIA open-sources Run:ai

**Also notable:** AMD launched Ross, an agent assistant for FPGA and embedded design. It connects through MCP and works with Claude Code, Cursor and others. https://www.allaboutcircuits.com/news/amd-launches-ross-an-agentic-ai-assistant-for-embedded-design/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
