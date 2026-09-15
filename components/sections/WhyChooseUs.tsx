import { Section } from "@/components/ui/Section";
import type { Pillar } from "@/content/about";

// Big numbered statements on a dark band — the differentiator block that
// enterprise IT sites use between the services grid and the proof sections.
export function WhyChooseUs({
  title,
  items,
}: {
  title?: string;
  items: readonly Pillar[];
}) {
  return (
    <Section tone="teal">
      <div className="max-w-3xl">
        <h2 className="text-h2 text-balance text-paper">
          {title ?? "One partner. Two disciplines. No handoff in between."}
        </h2>
      </div>

      <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.title} className="border-t border-line-invert pt-7">
            <span className="font-display text-sm font-semibold tabular-nums text-lime">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-h3 font-semibold text-paper">
              {item.title}
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-body-invert">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
