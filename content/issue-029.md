# Short Stack #29 — Mon, Nov 23, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. A mathematician and Claude claim a proof of the Riemann Hypothesis
Levent Alpöge released a proof of the Riemann Hypothesis on Nov 20, worked out with Claude and shipped as a 17-million-line Lean library. On Nov 21 the Lean FRO and Mathlib Initiative certified that the statement and proof are correct. Alpöge says he plans to write it up properly.
**Try this in 10 min:** Read Alpöge's short note at alpo.ge/remark.pdf, then ask Claude to explain Mathlib's `RiemannHypothesis` statement line by line.
Source: https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
Image: /issues/issue-029/pick-1.svg | Illustration: a winding line of primes climbing a staircase toward a glowing checkmark

### 2. Inkling 2 Mini is a 1M-context model built for your laptop
Thinking Machines Lab's Inkling 2 Mini is a looped mixture-of-experts model with ~26B total and 3B active parameters, image and text input, and 1M-token context. It ships with transformers, llama.cpp and MLX support. Hugging Face says in its vibe tests it's at least comparable with Qwen 3.8 27B.
**Try this in 10 min:** Run `llama serve -hf ggml-org/Inkling-2-Mini-GGUF:IQ4_NL`, point your coding agent at the local OpenAI-compatible API, and ask for a one-page site.
Source: https://huggingface.co/blog/inkling2mini
Image: /issues/issue-029/pick-2.svg | Illustration: a small laptop with a looping arrow circling a stack of layers above it

### 3. Vercel AI Gateway can route only to providers in countries you pick
Since Nov 23, AI Gateway's provider headquarters setting sends requests only to providers based in countries you allow, or skips the ones you block. On any plan you can set it per request; Pro and Enterprise teams can set it for every request.
**Try this in 10 min:** Add a headquarters allowlist like `['US', 'DE']` to one request's gateway provider options and check which provider served it.
Source: https://vercel.com/changelog/choose-ai-gateway-providers-by-headquarters-country
Image: /issues/issue-029/pick-3.svg | Illustration: a globe with a few highlighted pins and arrows routing only to them

### 4. Lovable apps can now take payments with Square and Paystack
Lovable added Square and Paystack connectors on Nov 20. Square covers payment links, card charges, refunds, orders and Square Terminal checkouts; Paystack covers checkout, subscriptions and refunds in five African countries. Workspaces that upgrade from Free also get one domain free for the first year (not .com).
**Try this in 10 min:** In a Lovable project, ask it to connect Square and add a "pay deposit" button that creates a Square payment link.
Source: https://docs.lovable.dev/changelog
Image: /issues/issue-029/pick-4.svg | Illustration: a phone screen with a big button and a card sliding into a reader

### 5. FigJam on mobile gets easier to review and share
Figma's Nov 20 update brings comment indicators, a frame preview slider, a page dropdown, share links to the exact section you're viewing, per-section export, and resume where you left off to FigJam in the mobile app.
**Try this in 10 min:** Open a FigJam board on your phone, jump to one section with the slider, and share a link to just that section with a teammate.
Source: https://www.figma.com/release-notes/
Image: /issues/issue-029/pick-5.svg | Illustration: a phone showing a sticky-note board with a slider and a small speech bubble

---

**Also notable:** OpenAI's chief scientist published internal perplexity measurements and proposed it as a shared metric for comparing labs and setting safety standards. https://openai.com/index/perplexity-and-intelligence/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
