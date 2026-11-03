# Short Stack #15 — Tue, Nov 3, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Claude's API can now keep your agent's conversation on the server
Anthropic put message threads into public beta on Nov 2. Add the `thread` parameter and your first request sends the full conversation; after that you send only the new messages plus the previous response ID. Anthropic says median time to first token dropped about 35% for 500k to 1M-token requests in Claude Code, where it's on by default for most users. Token usage and rates don't change.
**Try this in 10 min:** Take your longest agent loop, add the `message-threads-2026-08-12` beta header and the `thread` parameter, and log time to first token before and after.
Source: https://claude.com/resources/articles/message-threads
Image: /issues/issue-015/pick-1.svg | Illustration: a long stack of message cards with only the newest card traveling to a server block

### 2. OpenAI rebuilt its Git backend because Codex agents push so much code
OpenAI described Pando on Nov 2, a new Git backend that now serves its whole monorepo. It keeps the normal Git client and protocol, but lets pushes to different branches go through in parallel and reuses stored packfiles across fetches. OpenAI says median push latency fell nearly 5x. It was built with Codex in 10 weeks and isn't available outside OpenAI yet.
**Try this in 10 min:** On your busiest repo, run `git branch -r | wc -l` and `git count-objects -vH` to see how many branches and how much history your agents are piling up.
Source: https://openai.com/index/scaling-git-at-openai/
Image: /issues/issue-015/pick-2.svg | Illustration: many parallel branch lines flowing into one wide trunk with stacked pack blocks

### 3. Figma shaders now export at 4096px and carry into code layers
Figma's Nov 2 release notes make shaders generally available to all users. They now render and export at up to 4096px, and they come along when you use "build this with code" to turn a design into a code layer. Playing shaders in code layers needs Chrome 157 and rolls out this week.
**Try this in 10 min:** Add a shader to a hero frame, export it at 4096px, then run "build this with code" and press Play on the code layer to check it matches.
Source: https://www.figma.com/release-notes/
Image: /issues/issue-015/pick-3.svg | Illustration: a design frame filled with a flowing gradient shader next to a code bracket panel showing the same pattern

### 4. Goldman Sachs took AI coding tools back from its traders and bankers
Bloomberg reported Nov 2, via Quartz, that Goldman's October guidance limits tools like Claude Code and GitHub's to engineers, after bankers and traders had used them for months. A spokesperson said the bank weighed productivity and risk management. In July, its CIO had praised non-engineers vibe coding.
**Try this in 10 min:** Write a one-page rule for your team: who can run coding agents, on which repos, and who reviews what non-engineers ship.
Source: https://qz.com/goldman-sachs-restricts-ai-coding-tools-traders-bankers-110226
Image: /issues/issue-015/pick-4.svg | Illustration: a laptop with a code window behind a gate that only opens for a badge

### 5. The New York Times sued Brave, saying its Search API sells scraped news to AI companies
The Times and, in a separate suit, the New York Daily News, Chicago Tribune and Orlando Sentinel filed in Manhattan on Nov 2. They allege Brave scraped their sites, sold access through its Search API and helps users get past paywalls. The complaint names Anthropic, Perplexity, Mistral, xAI and Cohere as customers; none is a defendant. These are allegations so far.
**Try this in 10 min:** Check whether any of your agents or RAG tools call the Brave Search API, and write down what you'd swap in if its terms or coverage changed.
Source: https://www.theverge.com/tech/1024588/brave-lawsuit-ai-scraping-new-york-times
Image: /issues/issue-015/pick-5.svg | Illustration: a search bar funneling newspaper pages toward a robot block, with a gavel above

**Also notable:** OpenAI raised its Security Bug Bounty: a critical bug in ChatGPT, Codex or the API now pays up to $30,000, and exceptional findings up to $172,000 with bonuses. https://openai.com/index/rewarding-defenders-with-bigger-bug-bounties/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
