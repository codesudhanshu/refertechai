import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ({
  items,
  eyebrow = "Questions",
  title,
  tone = "surface",
}: {
  items: readonly { q: string; a: string }[];
  eyebrow?: string;
  title?: ReactNode;
  tone?: "paper" | "surface";
}) {
  if (items.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow={eyebrow}
          title={
            title ?? (
              <>
                Things people ask{" "}
                <span className="text-primary">before we start.</span>
              </>
            )
          }
        />
        <Accordion items={items} />
      </div>
    </Section>
  );
}
