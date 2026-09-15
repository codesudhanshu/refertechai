import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Permanent, contract and executive IT recruitment, RPO, staff augmentation, background verification, diversity hiring and hire-train-deploy.",
  path: "/services",
});

// Used only here, so it stays in this file rather than becoming a shared
// section. It is promoted on its second use, not its first.
const ENGAGEMENT_MODELS = [
  {
    name: "Contingency",
    detail:
      "You pay a percentage of fixed annual salary when the candidate joins, and nothing if they do not. Best for roles with a reasonable candidate pool.",
    fit: "Most permanent roles",
  },
  {
    name: "Retained",
    detail:
      "A staged fee that buys dedicated research time. Best for leadership roles and scarce skills, where finding people who are not looking is the actual work.",
    fit: "Leadership and scarce skills",
  },
  {
    name: "Monthly retainer",
    detail:
      "Recruiters embedded in your team for an agreed period. Best once hiring volume makes per-role fees the more expensive option.",
    fit: "Volume hiring and RPO",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              Every way we{" "}
              <span className="text-lime-text">fill a technology role.</span>
            </>
          }
          lead="Permanent, contract and executive search, plus the programmes for when hiring volume or risk outgrows a single role."
        />

        <Section>
          <div className="flex flex-col">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="grid gap-8 border-b border-line py-12 first:pt-0 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
              >
                <div>
                  <span className="font-display text-sm font-semibold tabular-nums text-lime-text">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-h2">{service.title}</h2>
                  <p className="mt-5 max-w-lg leading-relaxed text-body">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group/btn mt-7 inline-flex items-center gap-2 text-sm font-medium text-lime-text transition-colors duration-150 hover:text-lime-deep"
                  >
                    {service.title} in detail
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-150 ease-out group-hover/btn:translate-x-0.5"
                    >
                      &#8594;
                    </span>
                  </Link>
                </div>

                <div>
                  <h3 className="text-eyebrow font-semibold uppercase text-body">
                    What it includes
                  </h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="surface" bordered>
          <SectionHeading
            title={
              <>
                Three ways to pay for it.{" "}
                <span className="text-lime-text">All agreed in writing first.</span>
              </>
            }
            lead="Which model fits depends on how scarce the skill is and how many roles you are filling. We will tell you which one costs you least, even when it is not the one that pays us most."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.name}
                className="flex flex-col rounded-card border border-line bg-paper p-7"
              >
                <h3 className="text-h3 font-semibold">{model.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-body">
                  {model.detail}
                </p>
                <p className="mt-6 border-t border-line pt-5 text-eyebrow font-semibold uppercase text-lime-text">
                  {model.fit}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
