export default function Forward({ url }: { url: string }) {
  const mail = `mailto:?subject=${encodeURIComponent("Thought you'd like Short Stack Daily")}&body=${encodeURIComponent(`5 AI picks a day, one for each kind of builder, each with a 10-minute try-it step. This issue: ${url}\n\nSubscribe free: https://shortstackdaily.com`)}`;
  return (<aside className="forward">
    <p className="eyebrow mono">Forward to a builder friend</p>
    <h3>Know someone who&apos;d try one of these tonight?</h3>
    <p>Send them this issue. If they like it, they can subscribe free at <a className="ul" href="/">shortstackdaily.com</a>.</p>
    <a className="btn btn-sm" href={mail}>Email it to a friend <span className="arr">→</span></a>
  </aside>);
}
