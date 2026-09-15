import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { jobs } from "@/content/jobs";
import { company } from "@/content/company";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Open roles in AI, product engineering, infrastructure and design at ReferTech AI.",
  path: "/careers",
});

const BENEFITS = [
  {
    name: "Remote by default",
    detail:
      "Work from where you do your best thinking. We coordinate across time zones rather than pretending they do not exist.",
  },
  {
    name: "Real ownership",
    detail:
      "You own a problem, not a ticket queue. That includes the decisions and the consequences.",
  },
  {
    name: "Time to learn",
    detail:
      "Dedicated time for the reading, prototyping and courses that keep the work interesting.",
  },
  {
    name: "Small teams",
    detail:
      "Projects are staffed with a handful of people who can hold the whole system in their head.",
  },
];

export default function Careers() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Careers"
          title={
            <>
              Work on problems that{" "}
              <span className="text-lime-text">have not been solved yet.</span>
            </>
          }
          lead="We are a small team that takes on work larger than it looks. If you want scope and are comfortable being accountable for it, this is a good place to be."
        />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow="How we work"
              title={
                <>
                  Fewer people,{" "}
                  <span className="text-lime-text">more trust.</span>
                </>
              }
            />
            <div className="max-w-2xl">
              <p className="leading-relaxed text-body">
                We keep teams small on purpose. It means everyone can hold the
                whole system in their head, decisions get made in a
                conversation rather than a committee, and nobody spends their
                week translating between people who should be talking directly.
              </p>
              <p className="mt-5 leading-relaxed text-body">
                It also means the work is exposed. What you build carries your
                name on it, and there is nowhere to hide a shortcut. Most people
                find that clarifying. Some find it uncomfortable. It is worth
                knowing which you are before you apply.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="surface" bordered>
          <SectionHeading
            eyebrow="What we offer"
            title={
              <>
                The things that{" "}
                <span className="text-lime-text">actually matter.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.name}
                className="rounded-card border border-line bg-paper p-7"
              >
                <h3 className="text-h3 font-semibold">{benefit.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {benefit.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section bordered>
          <SectionHeading
            eyebrow="Open roles"
            title={
              <>
                Where we are{" "}
                <span className="text-lime-text">hiring now.</span>
              </>
            }
          />

          {jobs.length > 0 ? (
            <ul className="mt-14 border-t border-line">
              {jobs.map((job) => (
                <li key={job.title} className="border-b border-line">
                  <a
                    href={`mailto:${company.email}?subject=${encodeURIComponent(
                      `Application: ${job.title}`,
                    )}`}
                    className="group/btn flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="text-h3 font-semibold transition-colors duration-150 group-hover/btn:text-lime-text">
                        {job.title}
                      </h3>
                      <p className="mt-2 text-sm text-body">
                        {job.team} &middot; {job.location} &middot; {job.type}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-lime-text">
                      Apply
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-150 ease-out group-hover/btn:translate-x-0.5"
                      >
                        &#8594;
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-14 rounded-card border border-line bg-surface p-8">
              <h3 className="text-h3 font-semibold">No open roles right now.</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-body">
                We still read speculative applications. If you are strong at
                something we do, send us what you have built and why it was hard.
              </p>
              <div className="mt-7">
                <Button href={`mailto:${company.email}?subject=Speculative application`}>
                  Send a speculative application
                </Button>
              </div>
            </div>
          )}
        </Section>

        <CtaBand
          eyebrow="Not seeing your role?"
          title={
            <>
              Tell us what you{" "}
              <span className="text-lime-text">would want to build.</span>
            </>
          }
          lead="We open roles when we meet someone worth opening one for. If that might be you, write to us."
        />
      </main>
      <Footer />
    </>
  );
}
