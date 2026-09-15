export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-line pt-6">
      {/* accent-deep, not accent: the bright accent is 2.43:1 on white and
          fails AA at every size. accent-deep is 5.36:1. */}
      <p className="font-display text-4xl font-bold tabular-nums text-accent-deep lg:text-5xl">
        {value}
      </p>
      <p className="mt-3 text-sm text-body">{label}</p>
    </div>
  );
}
