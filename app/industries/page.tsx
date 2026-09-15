import Image from "next/image";
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
    "Financial services, healthcare, retail, logistics, manufacturing, real estate, education and media — who we recruit in each and why the hiring constraints differ.",
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
              The roles transfer.{" "}
              <span className="text-lime-text">The constraints do not.</span>
            </>
          }
          lead="Clearance requirements, domain knowledge and what a candidate has to have touched before differ by sector. These are the ones we know well enough to be useful in from the first call."
        />

        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((industry, index) => (
              // id is the anchor target for the header mega-menu links.
              // scroll-mt clears the sticky 80px header.
              <article
                key={industry.slug}
                id={industry.slug}
                className="scroll-mt-28 overflow-hidden rounded-card border border-line bg-paper"
              >
                <div className="relative aspect-[16/7] w-full overflow-hidden">
                  <Image
                    src={`/images/industries/${industry.slug}.jpg`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6">
                    <span className="font-display text-sm font-semibold tabular-nums text-lime">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-h3 font-semibold text-paper">
                      {industry.name}
                    </h2>
                  </div>
                </div>

                <div className="p-7 lg:p-8">

                <dl className="flex flex-col gap-5">
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
                      Who we recruit
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-body">
                      {industry.weRecruit}
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
                </div>
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
