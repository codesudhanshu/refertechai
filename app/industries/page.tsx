import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/content/industries";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "Financial services, healthcare, retail, logistics, manufacturing, real estate, education and media — what we build in each and why the constraints differ.",
  path: "/industries",
});

export default function Industries() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              The engineering transfers.{" "}
              <span className="text-lime-text">The constraints do not.</span>
            </>
          }
          lead="Regulation, data shape and the real cost of breaking production differ by sector. These are the ones we know well enough to be useful in from the first conversation."
        />

        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((industry, index) => (
              // id is the anchor target for the header mega-menu links.
              // scroll-mt clears the sticky 80px header.
              <article
                key={industry.slug}
                id={industry.slug}
                className="scroll-mt-28 rounded-card border border-line bg-paper p-7 lg:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-semibold tabular-nums text-lime-text">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </div>

                <h2 className="mt-6 text-h3 font-semibold">{industry.name}</h2>

                <dl className="mt-6 flex flex-col gap-5">
                  <div>
                    <dt className="text-eyebrow font-semibold uppercase text-lime-text">
                      The challenge
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-body">
                      {industry.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow font-semibold uppercase text-lime-text">
                      What we build
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-body">
                      {industry.weBuild}
                    </dd>
                  </div>
                  <div className="border-t border-line pt-5">
                    <dt className="text-eyebrow font-semibold uppercase text-body">
                      The outcome
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink">
                      {industry.outcome}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Section>

        <CtaBand
          title={
            <>
              The pattern usually{" "}
              <span className="text-lime-text">still applies.</span>
            </>
          }
          lead="Sector experience helps, but most of what makes a system work is not sector-specific. Tell us the problem and we will say honestly whether we are the right team."
        />
      </main>
      <Footer />
    </>
  );
}
