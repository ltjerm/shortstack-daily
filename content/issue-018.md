# Short Stack #18 — Fri, Nov 6, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. OpenAI's GPT-6 Cyber finds vulns and stays in scope (vendor claims)
OpenAI introduced GPT-6 Cyber on Nov 5 for authorized vulnerability discovery and validation. OpenAI claims ExploitGym scores of 48.5% vs 32.1% for GPT-5.6 Cyber (about 51% relative). Scope-alignment: it avoided an out-of-scope exploit in 99.93% of cases without a deployment prompt, and 100% with one. OpenAI classifies it Critical in cybersecurity under its Preparedness Framework. It is available initially via API/Codex to select Daybreak Red customers; Daybreak Blue pairs defenders with GPT-6 Astra.
**Try this in 10 min:** Open the Daybreak page from that post and check whether your team's authorized security work fits Daybreak Blue vs Red; if you're a defender, start an application or forward the post to your security lead.
Source: https://openai.com/index/introducing-gpt-6-cyber
Image: /issues/issue-018/pick-1.svg | Illustration: a shield outline with a small keyhole and a bounded dashed circle (scope)

### 2. Gemini Omni 1.2 Flash ships native 15-second video and a price cut
Google launched Gemini Omni 1.2 Flash GA on Nov 5 on the Gemini API and Google Cloud. It adds native 15-second video (up from 10), multi-turn conversational editing, and stronger reference adherence. Google says the price dropped 30% from 1.1, to $0.07/sec for 720p.
**Try this in 10 min:** In Google AI Studio or the Gemini API docs, generate one 8–12 second product clip with Omni 1.2 Flash, then do one multi-turn edit (swap background or aspect) instead of regenerating.
Source: https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/
Image: /issues/issue-018/pick-2.svg | Illustration: a film strip extending to 15 tick marks beside a lightning bolt

### 3. Cursor cloud agents can now build and publish live apps
Cursor's Nov 5 changelog says cloud agents can build live apps: scaffold a web app, add Postgres if needed, put auth behind Cursor SSO, and deploy with a shareable link. Security checks run before publish. Available on paid plans with cloud agents, via Origin and GitHub.
**Try this in 10 min:** Update Cursor, start a cloud agent, and ask it to build a tiny internal tool (e.g. a one-field RSVP page); publish only after the security checks pass.
Source: https://cursor.com/changelog/build-live-apps
Image: /issues/issue-018/pick-3.svg | Illustration: a laptop with a rocket/link icon leaving localhost toward a cloud

### 4. Mistral Managed Agents hit public preview
Mistral opened Managed Agents in public preview on Nov 5: an Agents SDK (`mistralai-agents`) with run-in-process, `agents serve`, and `agents deploy`. Durable background execution, approvals, MCP/connectors, sandboxes, and Studio tracing are part of the preview.
**Try this in 10 min:** `pip install mistralai-agents` (or follow current docs), run `agents init`, and deploy or serve a hello-world agent that calls one MCP tool.
Source: https://docs.mistral.ai/resources/release-notes.md
Image: /issues/issue-018/pick-4.svg | Illustration: three stacked run-mode boxes (process / serve / deploy) with a durable arrow looping

### 5. TalentOS Design returns a multi-artboard canvas from one prompt
TalentOS Design launched Nov 6: an AI teammate that returns a multi-artboard canvas (screens, posters, emails), with in-place edit, sticky notes, Play for a click-through prototype, and Room collaboration.
**Try this in 10 min:** In a TalentOS Room, choose + → TalentOS Design and ask for a three-screen phone signup flow; edit one headline in place and press Play.
Source: https://talentos.so/blog/introducing-talentos-design
Image: /issues/issue-018/pick-5.svg | Illustration: three phone-shaped artboards side by side with a play triangle

**Also notable:** Moderne Code Search — type-aware code search for agents across repos (Nov 5). https://moderne.ai/blog/moderne-code-search-launch

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
