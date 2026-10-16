import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SignupForm from "@/components/SignupForm";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "About and FAQ", description: "What Short Stack Daily is, who writes it, how picks are chosen, and answers to common questions.", alternates: { canonical: `${SITE}/about` } };
const faq: [string, string][] = [
  ["What is Short Stack Daily?", "A free weekday email with 5 AI picks: one each for vibe coders, AI agent developers, designers using AI and non-technical founders, plus a wildcard. Every pick ends with a step you can try in about 10 minutes."],
  ["Who writes it?", "Short Stack Daily is run by Jeremy Hernandez (@supjeremyyy on X), with an AI-assisted research pipeline. A human approves every issue before it goes out."],
  ["How are picks chosen?", "We scan lab blogs, product changelogs, GitHub, Hacker News and X for news from the last day or two, pick one item per reader type, and check every source link. Vendor claims are labeled as vendor claims."],
  ["When does it arrive?", "Weekdays at 7am Mountain Time."],
  ["How much does it cost?", "It's free. It's supported by sponsors, and a paid tier may come later; the daily email stays free."],
  ["What's the free guide?", "50 Prompts for Vibe Coders: copy-paste prompts organized by reader type. Confirming your subscription unlocks it at shortstackdaily.com/prompts."],
  ["How do I unsubscribe?", "Every email has an unsubscribe link. You can also reply to any issue."],
  ["Can I sponsor an issue?", "Yes. Reply to any issue or message @supjeremyyy on X."],
];
export default function About() {
  return (<main className="page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
    <p className="eyebrow mono">About</p>
    <h1>Five picks.<br /><i className="serif">Ten minutes.</i></h1>
    <p className="sub">Short Stack Daily turns the AI news firehose into five things you can actually try, with one pick for each kind of builder.</p>
    <h2 className="h-sm">FAQ</h2>
    <dl className="faq">{faq.map(([q, a]) => (<div key={q}><dt>{q}</dt><dd>{a}</dd></div>))}</dl>
    <section className="cta"><h2>Join the stack.</h2><SignupForm compact /></section>
  </main>);
}
