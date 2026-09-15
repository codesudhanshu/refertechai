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
    "AI agents, AI workflows, web and product engineering, cloud and DevOps, blockchain, and technology consulting.",
  path: "/services",
});

// Used only here, so it stays in this file rather than becoming a shared
// section. It is promoted on its second use, not its first.
const ENGAGEMENT_MODELS = [
  {
    name: "Dedicated team",
    detail:
      "A standing team that works as part of yours, for product work with no fixed end date. Best when the roadmap is still moving.",
    fit: "Ongoing product development",
  },
  {
    name: "Fixed scope",
    detail:
      "An agreed deliverable, timeline and price. Best when the requirements are settled enough to write down and unlikely to shift mid-flight.",
    fit: "Well-defined projects",
  },
  {
    name: "Staff augmentation",
    detail:
      "Specific skills added to your existing team for a defined period. Best when you know what to build and need capacity to build it.",
    fit: "Capacity and specialist skills",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Our capabilities"
          title={
            <>
              Technology with <span className="text-primary">a job to do.</span>
            </>
          }
          lead="We bring strategy, design and engineering together to create useful systems that solve real business problems."
        />

        <Section>
          <div className="flex flex-col">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="grid gap-8 border-b border-line py-12 first:pt-0 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
              >
                <div>
                  <span className="font-display text-sm font-semibold tabular-nums text-accent-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-h2">{service.title}</h2>
                  <p className="mt-5 max-w-lg leading-relaxed text-body">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group/btn mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-150 hover:text-primary-dark"
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
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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
            eyebrow="Built around your business"
            title={
              <>
                Not a menu of deliverables.{" "}
                <span className="text-primary">
                  A team that owns the outcome.
                </span>
              </>
            }
            lead="Every engagement is shaped around your goals, constraints and existing technology. We can lead the work end-to-end or fit into your team where the momentum is needed most."
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
                <p className="mt-6 border-t border-line pt-5 text-eyebrow font-semibold uppercase text-primary">
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
