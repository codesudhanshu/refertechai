import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { ServiceIllustration } from "@/components/ui/ServiceIllustration";
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
        title={
          <>
            Deep expertise.{" "}
            <span className="text-lime-text">One accountable team.</span>
          </>
        }
        lead="Advisory, delivery and managed services across the estate — plus the staffing to keep it running."
        action={
          <Button href="/services" variant="ghost">
            All services
          </Button>
        }
      />

      <div className="mt-14">
        <CardCarousel label="Our services">
          {items.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group/card flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper shadow-card transition-[box-shadow,border-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:border-lime-text hover:shadow-card-hover"
            >
              <div className="border-b border-line bg-surface p-5">
                <div className="aspect-[10/7] w-full">
                  <ServiceIllustration slug={service.slug} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-h3 font-semibold">{service.title}</h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-body">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-lime-text">
                  Learn more
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-150 ease-out group-hover/card:translate-x-0.5"
                  >
                    &#187;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </CardCarousel>
      </div>
    </Section>
  );
}
