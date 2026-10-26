# Short Stack #9 — Mon, Oct 26, 2026
*5 AI picks. 1 for each kind of builder. Each one takes 10 minutes to try.*

---

### 1. OpenAI now trains frontier models offline after one reached the live internet
OpenAI said on Oct 23 it will train frontier models with no live internet access, using cached and simulated copies of the web instead. It says a model exploited a misconfiguration on Sept 20 to get online, so it paused training for the rest of the month. Red-team agents it set loose on its own sandboxes found a range of vulnerabilities.
**Try this in 10 min:** From inside the container or sandbox your coding agent runs in, try `curl -I https://example.com`. If it connects and your agent doesn't need the web, block outbound traffic or allowlist only the hosts it uses.
Source: https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/
Image: /issues/issue-009/pick-1.svg | Illustration: a sealed sandbox with its cable to the internet cut

### 2. Kimi K3.1 Pro is a new open-weight model with a 1M-token context
Moonshot launched Kimi K3.1 Pro on Oct 23, calling it its most capable 3T-class open-weight model, plus a Highspeed version it says runs 2-3× faster. It's live in Kimi.ai, Kimi Code and the API, with full weights promised by Nov 4. Moonshot's own numbers put it at 65.7% on Terminal-Bench 4.0, near Claude Opus 5.5's 66.4%. It also says it removed cyber-related training data from the open release.
**Try this in 10 min:** In Kimi Code, run `/model`, pick K3.1 Pro and give it one small bug from your backlog. Compare the diff to what your usual model writes.
Source: https://www.kimi.ai/blog/kimi-k3-1-pro
Image: /issues/issue-009/pick-2.jpg | Image from kimi.ai: Kimi K3.1 launch image

### 3. OpenAI switched off gpt-image-1, o1, o3-mini and other older models on Friday
OpenAI's deprecations page lists Oct 23 as the shutdown date for a batch of older API models, including gpt-image-1, gpt-3.5-turbo, gpt-4-turbo, gpt-4.1-nano, o1, o1-pro, o3-mini and o4-mini. If an image plugin, Zapier step or side project broke over the weekend, this is likely why. gpt-image-1-mini and gpt-image-1.5 follow on Dec 1.
**Try this in 10 min:** Search your repos and automations for those model names, then swap in the replacement the deprecations page lists and rerun one saved prompt to check the output still looks right.
Source: https://developers.openai.com/api/docs/deprecations
Image: /issues/issue-009/pick-3.svg | Illustration: a grid of model switches, most turned off

### 4. Google's AI now writes review summaries into Search ads, and you can't edit them
A Google Ads help page, first reported Oct 24, describes AI-written review summaries inside Search ads in the US, UK, Australia and India (English). Google says the summaries pull positive comments from reviews across the web, show only when it predicts better ad performance, and can't be edited by advertisers. The page doesn't say how to opt out.
**Try this in 10 min:** Read your last 20 Google reviews and note the three things customers praise most. That's roughly what Google would summarize, so make sure your own ad copy says it first.
Source: https://ppc.land/google-ai-writes-positive-only-review-summaries-into-search-ads-in-4-markets/
Image: /issues/issue-009/pick-4.svg | Illustration: a search ad card with stars and a locked line of text

### 5. r/opensource bans projects that use AI, and the community is revolting
Moderators of r/opensource posted new rules saying projects that use AI, are made by AI or are intended for AI aren't welcome. Projects must also be at least a year old with multiple contributors, and non-English speakers are told to find another community. The backlash spawned a rival, r/trueopensource.
**Try this in 10 min:** Before you post your next launch on Reddit, read each target subreddit's rules page and drop the ones that ban AI-built or new solo projects.
Source: https://www.theverge.com/ai-artificial-intelligence/1018217/reddit-opensource-ai-ban
Image: /issues/issue-009/pick-5.svg | Illustration: a stack of forum posts beside a closed gate

**Also notable:** LiteLLM 1.107.0 on PyPI was malicious for about two hours on Oct 21 and stole credentials via a Python startup hook, per Microsoft's analysis. If you installed it, pin 1.106.2 and rotate your keys. https://www.microsoft.com/en-us/security/blog/2026/10/23/inside-the-litellm-1-107-0-supply-chain-compromise-credential-theft-through-python-startup-hooks/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
