import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { HiringModels } from "@/components/sections/HiringModels";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQ } from "@/components/sections/FAQ";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hire Talent",
  description:
    "Permanent, contract and executive hiring for technical teams, plus RPO and background verification — screened by engineers, not keyword matchers.",
  path: "/hire",
});

const STEPS = [
  {
    name: "Brief",
    detail:
      "A call with someone technical, not a form. We want the stack, the team shape and what the person will actually be doing in month one.",
  },
  {
    name: "Screen",
    detail:
      "Sourcing and technical assessment by engineers. Candidates who cannot do the work do not reach your panel.",
  },
  {
    name: "Shortlist",
    detail:
      "A short list with honest notes on each person, including the reservations. Usually within a week for common stacks.",
  },
  {
    name: "Onboard",
    detail:
      "Offer support, notice-period management and a check-in after the first month. Replacement cover if the fit is wrong.",
  },
];

const HIRE_FAQS = [
  {
    q: "Why use you instead of a general recruitment agency?",
    a: "Because our screening is technical. A recruiter matching keywords cannot tell whether someone can actually build what you need. We can, because the same company builds software. That means fewer candidates reach you, and more of them are worth meeting.",
  },
  {
    q: "How quickly will we see candidates?",
    a: "For common stacks — React, Node, Python, Java, cloud — a shortlist usually reaches you within a week. Narrow specialisms take longer, and we will say so up front rather than sending you near-misses to look busy.",
  },
  {
    q: "What happens if a placement does not work out?",
    a: "Every placement has an agreed window. If it is not working inside that window we replace at our cost. We would rather absorb that than have you carry a bad hire.",
  },
  {
    q: "Can you hire for roles we cannot assess ourselves?",
    a: "Yes, and it is a common reason people call us. If you are hiring your first engineer or first engineering lead, we can run the technical assessment and help design the interview loop your team will use afterwards.",
  },
  {
    q: "Do you handle contracts and compliance?",
    a: "For contract and temporary placements, yes — contracting, invoicing and compliance are handled end to end so the engineer can start rather than wait on paperwork.",
  },
  {
    q: "Can you both build a system and staff the team that runs it?",
    a: "That is the combination we are set up for. We can deliver the first version and then hire the permanent team to own it, with the engineers who built it involved in assessing the people taking it over.",
  },
];

export default function Hire() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              Engineers screened by{" "}
              <span className="text-lime-text">engineers.</span>
            </>
          }
          lead="Permanent, contract and executive hiring for technical teams — plus RPO and background verification when the volume or the risk justifies it."
        />

        <HiringModels tone="paper" showAction={false} />

        <Section tone="teal">
          <div className="max-w-3xl">
            <h2 className="text-h2 text-balance text-paper">
              Four steps, and you hear the bad news early.
            </h2>
          </div>

          <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
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

        <Section tone="surface" bordered>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              title={
                <>
                  The combination most firms{" "}
                  <span className="text-lime-text">cannot offer.</span>
                </>
              }
            />
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-body">
                Most companies either build software or place people. Doing both
                changes each one. We scope projects knowing what it actually
                takes to staff them, and we assess candidates against the
                systems we have had to maintain ourselves.
              </p>
              <p className="mt-5 leading-relaxed text-body">
                In practice that often means delivering a first version with our
                own engineers, then hiring the permanent team to take it over —
                with the people who built it helping assess the people
                inheriting it. The handover is a real one rather than a
                document.
              </p>
            </div>
          </div>
        </Section>

        <FAQ
          items={HIRE_FAQS}
          title={
            <>
              What employers ask{" "}
              <span className="text-lime-text">before the first brief.</span>
            </>
          }
          tone="surface"
        />

        <CtaBand
          title={
            <>
              Tell us the role.{" "}
              <em className="not-italic underline decoration-2 underline-offset-8">
                We&apos;ll tell you honestly.
              </em>
            </>
          }
          lead="If we are not the right fit for a role, we will say so rather than send you a shortlist to justify the call."
        />
      </main>
      <Footer />
    </>
  );
}
