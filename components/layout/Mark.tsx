// The three ascending skewed bars carried over from the previous site, now in
// the brand indigo. Decorative only — the wordmark beside it carries the name.
export function Mark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-4 items-end gap-[3px] ${className}`}
    >
      <i className="block w-[4px] h-[7px] skew-y-[-35deg] bg-primary" />
      <i className="block w-[4px] h-[12px] skew-y-[-35deg] bg-primary" />
      <i className="block w-[4px] h-[16px] skew-y-[-35deg] bg-accent" />
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-sm font-bold tracking-[0.06em] text-ink ${className}`}
    >
      REFERTECH<span className="text-primary">AI</span>
    </span>
  );
}
