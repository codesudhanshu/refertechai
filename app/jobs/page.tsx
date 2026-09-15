import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RoleFilter } from "@/components/sections/RoleFilter";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { openRoles } from "@/content/openRoles";

export const metadata = buildMetadata({
  title: "Open Roles",
  description:
    "Technology roles we are hiring for — permanent, contract and contract-to-hire across engineering, cloud, data, security and leadership.",
  path: "/jobs",
});

const CANDIDATE_FAQS = [
  {
    q: "Will you send my CV anywhere without telling me?",
    a: "No. Your CV goes nowhere without you agreeing to that specific role with that specific company first. Recruiters who spray CVs burn candidates and clients at the same time.",
  },
  {
    q: "Will you tell me the actual salary?",
    a: "Yes, before you interview. If a client will not let us disclose the band, we tell you that too rather than letting you spend three rounds finding out.",
  },
  {
    q: "What if I am not sure I want to move?",
    a: "That is fine, and worth saying out loud. Plenty of people talk to us to understand the market and stay where they are. We would rather know than push you into a process you will withdraw from.",
  },
  {
    q: "Do you charge candidates?",
    a: "Never. Our fees are paid by the employer. Any recruiter asking a candidate for money is not one you should be talking to.",
  },
  {
    q: "What happens after I apply?",
    a: "You get a reply either way. If you are a fit we will call to talk through the role properly; if you are not, we will tell you rather than leaving you waiting.",
  },
  {
    q: "My skills are not in the list. Should I still get in touch?",
    a: "Yes. Most of what we work on is not advertised, and a good CV on file gets matched against mandates as they come in.",
  },
];

export default function Jobs() {
  const anyUnverified = openRoles.some((role) => !role.verified);

  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              Technology roles,{" "}
              <span className="text-lime-text">described honestly.</span>
            </>
          }
          lead="The real salary band, the real reason the role is open and the real state of the team — before you interview, not after."
        />

        <Section>
          {anyUnverified ? (
            <p
              role="note"
              className="mb-10 rounded-card border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-body"
            >
              <span className="font-medium text-ink">
                These listings are illustrative.
              </span>{" "}
              They show the kind of mandates we work on. Live roles will replace
              them — in the meantime, send your CV and we will match it against
              what is actually open.
            </p>
          ) : null}

          <RoleFilter roles={openRoles} />
        </Section>

        <Section tone="teal">
          <div className="max-w-3xl">
            <h2 className="text-h2 text-balance text-paper">
              What working with us is actually like.
            </h2>
          </div>

          <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "We call you",
                detail:
                  "A real conversation about what you want next, not a script read off your CV.",
              },
              {
                name: "You approve every submission",
                detail:
                  "Your CV goes to a named company for a named role, only after you say yes.",
              },
              {
                name: "You get prepared",
                detail:
                  "Who is on the panel, what they will ask, and what they are actually worried about.",
              },
              {
                name: "You hear back",
                detail:
                  "Feedback either way, including the rejections. Silence is how recruiters lose good people.",
              },
            ].map((step, index) => (
              <li key={step.name} className="border-t border-line-invert pt-7">
                <span className="font-display text-sm font-semibold tabular-nums text-lime">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-h3 font-semibold text-paper">
                  {step.name}
                </h3>
                <p className="mt-3 leading-relaxed text-body-invert">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section tone="surface">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              title={
                <>
                  Not seeing your role?{" "}
                  <span className="text-lime-text">Send the CV anyway.</span>
                </>
              }
            />
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-body">
                Most of what we place is never advertised. Clients come to us
                with a mandate and expect a shortlist within the week, which
                only works if we already know who is out there and what they
                want next.
              </p>
              <p className="mt-5 leading-relaxed text-body">
                A CV on file costs you one email and gets matched against every
                mandate that comes in. We will not pass it on without asking
                you first.
              </p>
            </div>
          </div>
        </Section>

        <FAQ
          items={CANDIDATE_FAQS}
          title={
            <>
              What candidates ask{" "}
              <span className="text-lime-text">before the first call.</span>
            </>
          }
          tone="paper"
        />

        <CtaBand
          title={
            <>
              Send us your CV.{" "}
              <em className="not-italic underline decoration-2 underline-offset-8">
                We&apos;ll be straight with you.
              </em>
            </>
          }
          lead="Tell us what you want next and what you would rather avoid. We will tell you honestly whether we have anything worth your time."
        />
      </main>
      <Footer />
    </>
  );
}
