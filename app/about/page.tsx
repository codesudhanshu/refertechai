import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Leadership } from "@/components/sections/Leadership";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "ReferTech AI is an IT recruitment and staffing firm placing permanent, contract and executive technology talent.",
  path: "/about",
});

const VALUES = [
  {
    name: "Shorter, not longer",
    detail:
      "Three or four names, each one screened. A recruiter who sends thirty CVs has forwarded them, not assessed them.",
  },
  {
    name: "Straight with both sides",
    detail:
      "Candidates get the real salary band and the real reason the role is open. Clients get told when a role is priced or scoped wrong.",
  },
  {
    name: "We stay past the offer",
    detail:
      "Notice periods, counter-offers and a check-in after they start. The guarantee period only means something if people actually stay.",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              A shortlist is only useful{" "}
              <span className="text-lime-text">if it is short.</span>
            </>
          }
          lead="ReferTech AI is an IT recruitment and staffing firm. We place technology talent — permanent, contract and executive — for companies that need the hire to be right the first time."
        />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              title={
                <>
                  Most recruiters cannot tell{" "}
                  <span className="text-lime-text">a good engineer from a good interviewee.</span>
                </>
              }
            />
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-body">
                That is the whole problem with technology hiring. A recruiter
                matching keywords on a CV cannot assess whether someone is
                actually good at the work, so the filtering gets pushed onto
                your engineers — who then lose a day a week to first-round
                screens that were never going to go anywhere.
              </p>
              <p className="mt-5 leading-relaxed text-body">
                We are built the other way round. Our recruiters specialise by
                technology area rather than covering the whole market, and the
                screening happens before anyone reaches your panel. Three names
                instead of thirty, each one worth the hour.
              </p>
              <div className="mt-8">
                <Button href="/services" variant="outline">
                  How we hire
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title={
              <>
                Three things we{" "}
                <span className="text-lime-text">do not trade away.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <div
                key={value.name}
                className="rounded-card border border-line bg-paper p-7"
              >
                <span className="font-display text-sm font-semibold tabular-nums text-lime-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-h3 font-semibold">{value.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {value.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="surface">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              title={
                <>
                  No account managers{" "}
                  <span className="text-lime-text">between you and the recruiter.</span>
                </>
              }
            />
            <div className="max-w-2xl">
              <p className="leading-relaxed text-body">
                You talk to the recruiter running your mandate, not to someone
                relaying messages. The person who took the brief is the person
                sourcing, screening and calling you with the bad news when
                there is any.
              </p>
              <p className="mt-5 leading-relaxed text-body">
                Recruiters carry fewer mandates than the industry norm, on
                purpose. It is the only way the screening stays real — someone
                running twenty roles at once is forwarding CVs, whatever they
                tell you.
              </p>
            </div>
          </div>
        </Section>

        <Leadership tone="paper" />

        <CtaBand
          title={
            <>
              Worth <span className="text-lime-text">solving properly?</span>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
