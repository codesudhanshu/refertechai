import { Section } from "@/components/ui/Section";
import { vision, mission } from "@/content/about";

// Two facing statements, the way most Indian IT services sites open their
// about story. Kept to two cards so neither one can be skimmed past.
export function VisionMission({
  tone = "surface",
}: {
  tone?: "paper" | "surface";
}) {
  const blocks = [vision, mission];

  return (
    <Section tone={tone} bordered>
      <div className="grid gap-5 md:grid-cols-2">
        {blocks.map((block, index) => (
          <div
            key={block.heading}
            className="flex flex-col rounded-card border border-line bg-paper p-8 lg:p-10"
          >
            <span className="font-display text-sm font-semibold tabular-nums text-lime-text">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-5 text-h2">{block.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
