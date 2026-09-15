import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/content/services";

export function ServiceGrid({
  items,
  tone = "paper",
}: {
  items: readonly Service[];
  tone?: "paper" | "surface";
}) {
  return (
    <Section tone={tone} bordered>
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            Deep expertise.{" "}
            <span className="text-lime-text">One accountable team.</span>
          </>
        }
        action={
          <Button href="/services" variant="ghost">
            All services
          </Button>
        }
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((service, index) => (
          <Card key={service.slug} href={`/services/${service.slug}`}>
            <span className="font-display text-sm font-semibold tabular-nums text-lime-text">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-h3 font-semibold">{service.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
              {service.summary}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-lime-text">
              Explore
              <span
                aria-hidden="true"
                className="transition-transform duration-150 ease-out group-hover/card:translate-x-0.5"
              >
                &#8594;
              </span>
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
