# Short Stack #16 — Wed, Nov 4, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Gemini 2.5 Pro and Flash calls will silently switch models on Dec 1
Google's Nov 2 Gemini API release notes deprecate `gemini-2.5-pro` and `gemini-2.5-flash`. From December 1, Pro requests automatically route to `gemini-3.8-flash` and Flash requests to `gemini-3.5-flash-lite`, billed at the new model's rates. Google lists breaking changes: function calling and `thought_signature` validation, `thinking_level` replacing `thinking_budget`, and removed sampling parameters and prefilled model turns.
**Try this in 10 min:** Run `grep -rn "gemini-2.5" .` across your repos and env files, then move one call to the new model string and rerun its tests before Google does it for you.
Source: https://ai.google.dev/gemini-api/docs/changelog
Image: /issues/issue-016/pick-1.svg | Illustration: an old track switch redirecting a stream of request cards onto a new rail

### 2. Microsoft open-sourced a 4B agent that clicks and runs bash
Microsoft posted Mage-VL-Cowork on Hugging Face under Apache-2.0. It's one 4B vision-language model that handles both screenshot-based GUI actions and a persistent shell, with no separate orchestrator. Microsoft's model card reports 66.0% on OSWorld-Verified with a 50-step budget and calls it the best result among 4B models; that's Microsoft's own number.
**Try this in 10 min:** Open the model card, skim the action format, and list one desktop chore of yours that's half clicking and half terminal to test it on.
Source: https://huggingface.co/microsoft/Mage-VL-Cowork
Image: /issues/issue-016/pick-2.svg | Illustration: a small cube splitting into a cursor arrow on one side and a terminal prompt on the other

### 3. Figma's code layers now read your prototype connections
Figma's Nov 3 release notes say that when you build a code layer from design frames, the agent now reads the prototype connections and interactions between them, so you prompt less for the tricky parts of a flow. Code layers are in open beta. Separately, new GitHub repository connections now allow cloning into Figma by default; admins can turn it off per repo.
**Try this in 10 min:** Wire three frames together with prototype links, build a code layer from them, and check whether the transitions come through without extra prompting.
Source: https://www.figma.com/release-notes/
Image: /issues/issue-016/pick-3.svg | Illustration: three design frames joined by arrows flowing into a code bracket panel

### 4. Stolen AI keys are running up $100,000 a day in bills
Google's Threat Intelligence Group says "LLMjacking" crews use stolen cloud tokens, service account keys, GitHub PATs and leaked LLM API keys, then resell the access through "LLM Mixers". It saw single-day charges over $100,000 and up to $1 million cumulative at some victims. One tell: attackers test keys with tiny `max_tokens=1` requests to stay under volume alerts.
**Try this in 10 min:** Set a hard budget alert on every AI provider and cloud project you use, and search your logs for bursts of `max_tokens=1` calls.
Source: https://cloud.google.com/blog/topics/threat-intelligence/llmjacking-monetizing-compromised-cloud-models/
Image: /issues/issue-016/pick-4.svg | Illustration: a key on a hook with a thin line leading off to a stack of rising bars

### 5. OpenAI says ChatGPT now handles a fifth of Google's search volume
At a press event Monday, ChatGPT consumer lead Adam Fry said searches in ChatGPT now equal 20% of Google's volume, The Verge reports. OpenAI counts a search as any query that triggers a web search. Fry didn't say where the Google figure came from, so treat it as OpenAI's claim.
**Try this in 10 min:** Ask ChatGPT the three questions a customer would ask before finding your product, and note whether your site gets cited.
Source: https://www.theverge.com/ai-artificial-intelligence/1025482/openai-says-chatgpt-is-catching-up-to-google-in-search
Image: /issues/issue-016/pick-5.svg | Illustration: two search bars side by side, one much larger, with a growing bar between them

**Also notable:** GitHub Copilot now works inside JetBrains Air via the Agent Client Protocol, including cloud tasks that run on your Copilot plan. https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
