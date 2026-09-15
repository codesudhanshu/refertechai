import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Industry } from "@/content/industries";

export function IndustryStrip({
  items,
  tone = "surface",
}: {
  items: readonly Industry[];
  tone?: "paper" | "surface";
}) {
  return (
    <Section tone={tone} bordered>
      <SectionHeading
        eyebrow="Where we work"
        title={
          <>
            Sector context changes{" "}
            <span className="text-primary">what good looks like.</span>
          </>
        }
        lead="The engineering is transferable. The constraints are not — regulation, data shape and what breaking production actually costs differ by industry."
        action={
          <Button href="/industries" variant="ghost">
            All industries
          </Button>
        }
      />

      <div className="mt-12 flex flex-wrap gap-3">
        {items.map((industry) => (
          <Badge key={industry.slug} href={`/industries#${industry.slug}`}>
            {industry.name}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
