export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-line pt-6">
      {/* 36px at weight 700 — above the 24px floor the accent colour is
          restricted to, so contrast stays compliant. */}
      <p className="font-display text-4xl font-bold tabular-nums text-accent lg:text-5xl">
        {value}
      </p>
      <p className="mt-3 text-sm text-body">{label}</p>
    </div>
  );
}
