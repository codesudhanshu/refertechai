import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";
import { company } from "@/content/company";

// params is a Promise in Next 16 and must be awaited.
type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

const DELIVERY = [
  {
    name: "Scope",
    detail: "Agree what success looks like and what is explicitly out of scope.",
  },
  {
    name: "Prove",
    detail: "Build the riskiest part first, so surprises arrive early and cheap.",
  },
  {
    name: "Build",
    detail: "Ship in focused cycles with something reviewable at the end of each.",
  },
  {
    name: "Hand over",
    detail: "Documentation, runbooks and a team that can operate it without us.",
  },
];

export default async function ServiceDetail({ params }: Params) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  const related = caseStudies.filter((item) =>
    item.services.includes(service.slug),
  );

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: company.name,
      url: company.url,
    },
  };

  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow={`Services / ${service.title}`}
          title={service.title}
          lead={service.description}
        />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading
              eyebrow="What it includes"
              title={
                <>
                  What you actually{" "}
                  <span className="text-primary">get.</span>
                </>
              }
            />
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="border-t border-line pt-5">
                  <p className="flex gap-3 text-sm leading-relaxed text-body">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="surface" bordered>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading
              eyebrow="Technologies"
              title={
                <>
                  What we{" "}
                  <span className="text-primary">build it with.</span>
                </>
              }
            />
            <ul className="flex flex-wrap gap-2 self-start">
              {service.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section bordered>
          <SectionHeading
            eyebrow="How we deliver"
            title={
              <>
                Predictable process,{" "}
                <span className="text-primary">visible progress.</span>
              </>
            }
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {DELIVERY.map((step, index) => (
              <li key={step.name} className="flex flex-col bg-paper p-7">
                <span className="font-display text-sm font-semibold tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-h3 font-semibold">{step.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {related.length > 0 ? (
          <CaseStudyGrid items={related} tone="surface" />
        ) : null}

        <FAQ
          items={service.faqs}
          eyebrow={`${service.title} questions`}
          title={
            <>
              What people ask about{" "}
              <span className="text-primary">this work.</span>
            </>
          }
          tone={related.length > 0 ? "paper" : "surface"}
        />

        <CtaBand />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </>
  );
}
