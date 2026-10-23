# Short Stack #8 — Fri, Oct 23, 2026
*5 AI picks. 1 for each kind of builder. Each one takes 10 minutes to try.*

---

### 1. Railway says attackers may have read customer secrets. Rotate your keys
Railway disclosed on Oct 21 that an unauthorized party may have accessed encrypted environment variables and, for some, their decrypted contents: API keys, database and registry credentials. It tells all users to rotate every variable and check logs, and links the attack to a series aimed at AI inference providers. It also reset bucket credentials, GitHub tokens and API tokens.
**Try this in 10 min:** If you've stored a key on Railway, rotate it at the provider, update the variable, redeploy, then check that provider's usage page for spend you didn't make.
Source: https://blog.railway.com/p/security-disclosure-wednesday-october-21st
Image: /issues/issue-008/pick-1.svg | Illustration: a list of secrets next to a key inside a rotation arrow

### 2. Replit's Monitoring Agent can find, fix and ship production bugs on its own
Replit launched Monitoring Agent on Oct 22 for apps published on Replit. With alerts and auto-fix on, it reads your production logs and metrics when something breaks, investigates the cause, validates a fix and emails you a summary. Auto-publish, if you enable it, lets it deploy the fix itself.
**Try this in 10 min:** Open a published Replit app's Publishing settings, enable monitoring alerts and auto-fix with auto-publish off and read its first summary before letting it deploy.
Source: https://replit.com/blog/replit-monitoring-agent
Image: /issues/issue-008/pick-2.jpg | Image from replit.com: Replit Monitoring Agent

### 3. Canva Craft is Canva's own image model, trained on designs instead of photos
Canva released Craft on Oct 22, its first in-house image model. It plans the composition first (elements, scale, hierarchy, any text), then renders up to 2K in 30+ aspect ratios. Canva says training on templates makes outputs convert cleanly into editable layers. It's live for all users in Dream Lab and via Canva's public API, with MCP support coming.
**Try this in 10 min:** Open Dream Lab in Canva, generate a poster with a headline in the prompt, then run Magic Layers on it and check whether the text comes out as an editable layer.
Source: https://techcrunch.com/2026/10/22/canva-releases-its-first-image-generation-model/
Image: /issues/issue-008/pick-3.jpg | Image from canva.com: sample images made with Canva Craft

### 4. Claude Duet is Anthropic's agent that comes to you with a morning brief
Anthropic opened a waitlisted research preview of Claude Duet on Oct 21 for US Pro and Max subscribers. Built around Opus 5.5, it checks your connected apps every few hours, sends a morning brief, and keeps working in its own cloud browser while you're away. It asks before sending, paying, signing or deleting, and Anthropic says it can still misjudge what's urgent.
**Try this in 10 min:** Join the waitlist, then write down the three things you'd want flagged every morning (unpaid invoices, client emails, calendar clashes) to test its judgment on day one.
Source: https://claude.com/resources/articles/claude-duet
Image: /issues/issue-008/pick-4.jpg | Image from claude.com: the Claude Duet app icon

### 5. Arc shuts down Dec 22 as The Browser Company goes all in on Dia
The Browser Company said on Oct 22 that Arc stops working on Mac and Windows on Dec 22, with accounts deactivated and data deleted within 30 days. Arc Search loses its AI features and sync on Nov 23. It cites the rising cost of keeping a browser secure. Passwords, bookmarks and history transfer to its AI browser, Dia.
**Try this in 10 min:** If you use Arc, move your passwords, bookmarks and Spaces to Dia or another browser now, and write down which Arc habits you'd actually miss.
Source: https://techcrunch.com/2026/10/22/arc-browser-sunsets-december-22-as-the-browser-company-doubles-down-on-dia/
Image: /issues/issue-008/pick-5.svg | Illustration: a browser window with a setting sun

**Also notable:** 1Password for Agents (Oct 22) lets personal AI agents sign in with your approval while 1Password fills the password, so the agent never sees it. Partners include Anthropic and OpenAI. https://1password.com/press/2026/october/1password-for-agents-trust-layer-personal-ai-agents

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
