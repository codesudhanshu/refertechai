import { Section } from "@/components/ui/Section";
import { Stat } from "@/components/ui/Stat";
import type { StatItem } from "@/content/stats";

export function StatsBand({
  items,
  tone = "surface",
  eyebrow,
}: {
  items: readonly StatItem[];
  tone?: "paper" | "surface";
  eyebrow?: string;
}) {
  if (items.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      {eyebrow ? (
        <p className="mb-10 text-eyebrow font-semibold uppercase text-body">
          {eyebrow}
        </p>
      ) : null}
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {items.map((item) => (
          <Stat key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </Section>
  );
}
