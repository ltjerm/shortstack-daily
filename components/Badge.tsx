import StackMark from "./StackMark";
// Slowly spinning circular-text sticker. `id` must be unique per page (it names the text path).
export default function Badge({ id, text, className = "" }: { id: string; text: string; className?: string }) {
  return (<div className={`badge ${className}`} aria-hidden>
    <svg viewBox="0 0 120 120"><defs><path id={id} d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" /></defs><text><textPath href={`#${id}`} textLength="274" lengthAdjust="spacing">{text}</textPath></text></svg>
    <StackMark className="badge-mark" />
  </div>);
}
