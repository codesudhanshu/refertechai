import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyGrid({
  items,
  limit,
  tone = "paper",
}: {
  items: readonly CaseStudy[];
  limit?: number;
  tone?: "paper" | "surface";
}) {
  const shown = typeof limit === "number" ? items.slice(0, limit) : items;
  if (shown.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Problems worth <span className="text-lime-text">solving properly.</span>
          </>
        }
        action={
          <Button href="/work" variant="ghost">
            All work
          </Button>
        }
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <CaseStudyCard key={item.slug} item={item} />
        ))}
      </div>
    </Section>
  );
}
