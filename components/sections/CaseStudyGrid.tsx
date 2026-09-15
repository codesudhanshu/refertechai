import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import type { CaseStudy } from "@/content/caseStudies";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { SectionAction } from "@/components/ui/SectionAction";

export function CaseStudyGrid({
  items,
  limit,
  tone = "paper",
  showAction = true,
}: {
  items: readonly CaseStudy[];
  limit?: number;
  tone?: "paper" | "surface";
  showAction?: boolean;
}) {
  const shown = typeof limit === "number" ? items.slice(0, limit) : items;
  if (shown.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      <SectionHeading
        title={
          <>
            Mandates we{" "}
            <span className="text-lime-text">took on.</span>
          </>
        }
        lead="What was being hired, what made it hard, and what came out the other end."
      />

      <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
        {shown.map((item) => (
          <StaggerItem key={item.slug} className="h-full">
            <CaseStudyCard item={item} />
          </StaggerItem>
        ))}
      </Stagger>

      {showAction ? (
        <SectionAction>
          <Button href="/work" variant="outline">
            All mandates
          </Button>
        </SectionAction>
      ) : null}
    </Section>
  );
}
