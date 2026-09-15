// Three ascending skewed bars, carried over from the previous site.
//
// Lime measures 1.32:1 on white, so the bars cannot all be lime on a light
// header — they would be close to invisible. On light grounds the bars are
// teal with the tallest in lime-text; on a dark band they invert.
export function Mark({
  invert = false,
  className = "",
}: {
  invert?: boolean;
  className?: string;
}) {
  const base = invert ? "bg-paper" : "bg-teal";
  const tip = invert ? "bg-lime" : "bg-lime-text";

  return (
    <span
      aria-hidden="true"
      className={`flex h-4 items-end gap-[3px] ${className}`}
    >
      <i className={`block w-[4px] h-[7px] skew-y-[-35deg] ${base}`} />
      <i className={`block w-[4px] h-[12px] skew-y-[-35deg] ${base}`} />
      <i className={`block w-[4px] h-[16px] skew-y-[-35deg] ${tip}`} />
    </span>
  );
}

export function Wordmark({
  invert = false,
  className = "",
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`font-display text-sm font-bold tracking-[0.06em] ${
        invert ? "text-paper" : "text-ink"
      } ${className}`}
    >
      REFERTECH
      <span className={invert ? "text-lime" : "text-lime-text"}>AI</span>
    </span>
  );
}
