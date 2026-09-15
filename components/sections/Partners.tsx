import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { partners } from "@/content/partners";

// Each partner sits in its own white card, as on the reference sites. An entry
// with a `logo` path renders that image; one without falls back to the
// generated wordmark lockup, so real logos can be added one at a time without
// the section ever looking half-finished.
export function Partners({
  tone = "surface",
}: {
  tone?: "paper" | "surface";
}) {
  if (partners.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      <SectionHeading
        align="center"
        title={
          <>
            Our <span className="text-lime-text">partners</span>
          </>
        }
        lead="Platforms and organisations we work alongside on client engagements."
      />

      <div className="mt-14">
        <CardCarousel label="Our partners">
          {partners.map((partner) => {
            const inner = partner.logo ? (
              <span className="relative block h-14 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </span>
            ) : (
              <ClientLogo name={partner.name} />
            );

            const card = (
              <div className="flex h-32 items-center justify-center rounded-card border border-line bg-paper px-6 shadow-card transition-shadow duration-150 hover:shadow-card-hover">
                {inner}
              </div>
            );

            return partner.href ? (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {card}
              </a>
            ) : (
              <div key={partner.name}>{card}</div>
            );
          })}
        </CardCarousel>
      </div>
    </Section>
  );
}
