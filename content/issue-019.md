# Short Stack #19 — Mon, Nov 9, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Claude Code's "don't ask again" can save your passwords in plain text
Security firm Apiiro says that when you approve an exact shell command with "Yes, and don't ask again," Claude Code can save that command word-for-word, secret included, in `.claude/settings.local.json`. Apiiro reports 1,122 public GitHub copies of that file holding at least one secret (1,379 in all), per The Hacker News on Nov 7. Claude Code adds the file to your machine's global git excludes, but not to the project's own `.gitignore`.
**Try this in 10 min:** Open `.claude/settings.local.json` in your active projects and delete any rule with a key or password in it. Rotate anything you find, then add the file to each repo's `.gitignore`.
Source: https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html
Image: /issues/issue-019/pick-1.svg | Illustration: an open padlock beside a document with a checkmark, a key slipping out of it

### 2. Google Antigravity now takes orders by voice
Google added voice mode to Antigravity on Nov 6, running on Gemini Live. You talk to the coding agent, steer it mid-task, interrupt it, and approve or deny permission prompts out loud. It works in the Antigravity App and CLI 1.5.0+, and Google says it's rolling out gradually.
**Try this in 10 min:** In the CLI, run `/voice live` (or press F6) and talk the agent through one small fix. Interrupt it once with a correction to see how steering works.
Source: https://antigravity.google/blog/antigravity-voice-mode/
Image: /issues/issue-019/pick-2.svg | Illustration: a microphone whose sound waves turn into code brackets

### 3. OpenCode Browse lets agents drive your real, signed-in browser
OpenCode's Browse, launched Nov 7, is an MCP server plus Chromium extension. Agents open and drive tabs in your own browser with Playwright, take screenshots and recordings, and capture network traffic as a HAR. They hand the tab back to you for logins, 2FA, and payments. Works with Claude Code, Cursor, Codex, Zed, and other MCP clients.
**Try this in 10 min:** Install the extension, set a site allowlist, and ask your agent to open your staging site, screenshot the signup page, and save a HAR of the form submit.
Source: https://opencode.ai/product/browse
Image: /issues/issue-019/pick-3.svg | Illustration: a browser window with a small robot cursor and a hand-off arrow

### 4. Seedream 5.5 generates transparent-background assets natively
ByteDance Seed released Seedream 5.5 on Nov 9 with native RGBA output (full and partial transparency) and edits that keep unedited regions pixel-identical, which it demos across 100 rounds. ByteDance also claims clearer small text, with a 0.4% severe text-corruption rate in its own tests.
**Try this in 10 min:** From the Seedream 5.5 page, hit Try now, generate one product sticker with a transparent background, and drop it on a dark frame in Figma to check the edges.
Source: https://seed.bytedance.com/en/blog/more-realistic-images-more-stable-editing-across-100-rounds-introducing-seedream-5-5
Image: /issues/issue-019/pick-4.svg | Illustration: a cutout star sticker floating over a checkerboard transparency grid

### 5. Anthropic reportedly paid $3.4B for its own gas generators
The FT reports, via CNBC on Nov 8, that Anthropic bought commitments for 1.7 gigawatts of heavy-duty gas-fired generators from Texas supplier OnePWR in late September, for about $3.4 billion. Reuters couldn't verify it, and Anthropic didn't comment. If it's accurate, power is now something AI labs secure themselves.
**Try this in 10 min:** List the model providers your product depends on and note one fallback for each. If a provider's capacity gets tight, you'll already know where to route.
Source: https://www.cnbc.com/2026/11/08/anthropic-generator-deal-ai-data-centers.html
Image: /issues/issue-019/pick-5.svg | Illustration: a row of generator boxes with a lightning bolt feeding a server rack

**Also notable:** Alibaba's Co-Design Bench: the best of ten coding agents fully finished just 26.4% of real user change requests (Nov 8). https://the-decoder.com/ai-coding-agents-still-need-human-cleanup-on-nearly-three-out-of-four-tasks-in-a-real-world-test/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
