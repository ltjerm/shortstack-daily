export default function StackMark({ className = "mark" }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" aria-hidden><rect x="4" y="4" width="16" height="4.2" rx="2.1" /><rect x="2" y="9.9" width="20" height="4.2" rx="2.1" /><rect x="4" y="15.8" width="16" height="4.2" rx="2.1" /></svg>);
}
