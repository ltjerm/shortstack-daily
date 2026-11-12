# Short Stack #22 — Thu, Nov 12, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. AWS Emulator runs AWS on your laptop, and agents built it
AWS launched AWS Emulator on Nov 11: a free local emulator (no service fee) that the AWS CLI, SDKs and coding agents talk to over HTTPS on your machine instead of the cloud. It's open source on GitHub and built from AWS's public API models. AWS says agents build and maintain it, with a separate security agent reviewing changes. It doesn't evaluate IAM policies, so don't use it to test security.
**Try this in 10 min:** Install it (Linux package, or Docker on Mac/Windows), run `aws-emulator`, set the env vars from AWS's post, then `aws s3 mb s3://scratch` with no cloud bill.
Source: https://aws.amazon.com/blogs/aws/test-your-applications-against-aws-locally-with-aws-emulator/
Image: /issues/issue-022/pick-1.svg | Illustration: a laptop holding a small stack of cloud-shaped server blocks, with robot arms tending them

### 2. A2UI 1.0: agents can answer with real UI, not walls of text
Google released A2UI 1.0 on Nov 11, the first stable version of its open protocol for generative UI. The agent describes what to show and your app renders it with its own native components. 1.0 adds two-way function calls (a picker can check availability live), accessibility support, renderers for React, Angular, Lit, Flutter and SwiftUI, and agent SDKs for Python, TypeScript and Dart.
**Try this in 10 min:** Run the quickstart at a2ui.org and make your agent answer one request with a confirm form instead of a paragraph.
Source: https://developers.googleblog.com/en/a2ui-10-build-delightful-fast-reliable-agentic-experiences/
Image: /issues/issue-022/pick-2.svg | Illustration: a chat bubble unfolding into a card with a toggle, a slider and a confirm button

### 3. MiniMax H3-Image: open weights, 4K images in seconds
MiniMax released H3-Image on Nov 11, an open-weight model that does text-to-image, reference-based generation and editing in one checkpoint. MiniMax says it renders a 4096×4096 image in under 10 seconds and accepts up to 16 reference images (its claims). Weights are on Hugging Face under a community license, so read it before commercial use. It's also in the MiniMax API and Hailuo.
**Try this in 10 min:** In Hailuo, upload a room photo plus two furniture shots and ask H3-Image to compose them into one scene, then edit one detail.
Source: https://www.minimax.io/blog/minimax-h3-image
Image: /issues/issue-022/pick-3.svg | Illustration: three small picture frames feeding arrows into one large detailed canvas

### 4. Claude gets Sheets, Whiteboards and in-chat partner apps
Anthropic added new artifact types: Claude Sheets (shared spreadsheets with formulas and multiple tabs) and Claude Whiteboards, both in beta on paid plans, plus Claude Data (formerly Dashboards), which connects to tools like Snowflake and Salesforce. Interactive connectors now let partners such as Adobe and Atlassian embed their apps inside Claude. Claude Meetings, which joins calls to take notes, is "coming soon."
**Try this in 10 min:** Give Claude last month's signup or revenue numbers, ask for a Sheet with a month-over-month tab, and check every formula it wrote.
Source: https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors
Image: /issues/issue-022/pick-4.svg | Illustration: a spreadsheet grid and a sticky-note whiteboard side by side inside one window

### 5. Railway: stolen customer AI keys ran up about $740K
Railway says AI provider keys stolen from customers' environment variables in its October breach were used for an estimated $740,000 in unauthorized spend. The attacker decrypted variables in at most about 100,000 workspaces (an upper bound) and its queries hunted for AI keys. Railway will cover charges providers won't refund.
**Try this in 10 min:** List every AI key in your hosting env vars, set a hard spend limit on each at the provider, and rotate any Railway key stored before Oct 21.
Source: https://thehackernews.com/2026/11/railway-says-stolen-customer-ai-keys.html
Image: /issues/issue-022/pick-5.svg | Illustration: a key next to a long receipt that keeps unrolling

**Also notable:** Google DeepMind's AlphaProof Code used AI agents to formally verify key security properties of Signal's protocol code, producing over six million lines of Lean proofs in four weeks (Nov 10). https://deepmind.google/blog/introducing-alphaproof-code/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
