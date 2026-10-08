import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
// import { FAQ } from "@/components/sections/FAQ";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ContactForm from "@/app/contact/ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "For Employers",
  description:
    "Talent sourcing, screening, executive search, onboarding and outsourcing — permanent, contract and executive IT recruitment screened by specialist recruiters.",
  path: "/hire",
});

// What an employer is actually buying, named the way they would ask for it.
const OFFERINGS = [
  {
    name: "Talent Sourcing",
    detail:
      "Targeted search against your stack and your market, not a keyword sweep of a CV database.",
  },
  {
    name: "Candidate Screening",
    detail:
      "Technical screening by a recruiter who specialises in that area, before anyone reaches your panel.",
  },
  {
    name: "Executive Search",
    detail:
      "Confidential search for leadership roles, where the shortlist matters more than the response rate.",
  },
  {
    name: "Negotiating & Onboarding",
    detail:
      "Offer support, notice periods and counter-offers handled, with a check-in after the first month.",
  },
  {
    name: "Consulting & Outsourcing",
    detail:
      "RPO, staff augmentation and hire-train-deploy when the volume or the risk justifies it.",
  },
];

const REASONS = [
  {
    name: "Industry Expertise",
    detail:
      "Recruiters specialise by technology area instead of covering the whole market. That is what separates a candidate who has used a technology from one who is genuinely good at it.",
  },
  {
    name: "Extensive Talent Network",
    detail:
      "Most of what we place is never advertised. Relationships built over years reach people who are not answering job ads this month.",
  },
  {
    name: "Efficiency and Speed",
    detail:
      "For common stacks a shortlist usually reaches you inside a week. For narrow specialisms we say so up front rather than sending near-misses to look busy.",
  },
  {
    name: "Long-Term Partnership",
    detail:
      "We would rather tell you a role is priced or scoped wrong than fill it twice. Replacement cover is agreed in writing, not improvised.",
  },
];

const PROCESS = [
  {
    name: "Consultation",
    detail:
      "A call with a recruiter who knows the technology, not a form. The stack, the team shape, and what the person will actually do in month one.",
  },
  {
    name: "Talent Sourcing",
    detail:
      "Targeted search across our network and the open market, scoped to the brief rather than to whoever is easiest to reach.",
  },
  {
    name: "Screening",
    detail:
      "Technical and cultural screening by a specialist in that area. Candidates who cannot do the work do not reach your panel.",
  },
  {
    name: "Candidate Presentation",
    detail:
      "Three or four names with honest notes on each, including the reservations. Shorter, because someone already did the filtering.",
  },
  {
    name: "Interview Coordination",
    detail:
      "Scheduling, briefing and panel logistics handled, so your engineers spend their time interviewing rather than arranging it.",
  },
  {
    name: "Selection & Onboarding",
    detail:
      "Offer framing, notice-period management and start-date confirmation, through to the first day.",
  },
  {
    name: "Follow-Up",
    detail:
      "A check-in after the first month with both sides, while a wrong fit is still cheap to correct.",
  },
  {
    name: "Feedback",
    detail:
      "What the market told us about the role — pay, availability, how your process reads from the outside. Useful whether or not you hire.",
  },
];

const HIRE_FAQS = [
  {
    q: "Why use you instead of a general recruitment agency?",
    a: "Our recruiters specialise by technology area instead of covering every role in the market. A keyword match cannot tell whether someone is actually good at what you need. That is why fewer candidates reach you, and more of them are worth meeting.",
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
    a: "Yes, and it is a common reason people call us. If you are making your first engineering or security hire, we can run the technical screening and help design the interview loop your team will use for every hire after it.",
  },
  {
    q: "Do you handle contracts and compliance?",
    a: "For contract and temporary placements, yes — contracting, invoicing and compliance are handled end to end so the engineer can start rather than wait on paperwork.",
  },
  {
    q: "Can you take on a whole hiring programme, not just one role?",
    a: "Yes — that is what RPO is for. Dedicated recruiters work inside your process under your employer brand, and you keep the templates, interview kits and pipeline when the engagement ends.",
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
              Committed to deliver the{" "}
              <span className="text-lime-text">right fit for the right job.</span>
            </>
          }
          lead="Permanent, contract and executive IT recruitment — plus RPO, background verification and hire-train-deploy when the volume or the risk justifies it."
        />

        <Section image="/images/employers/offerings.jpg">
          <SectionHeading
            title={
              <>
                What we take{" "}
                <span className="text-lime-text">off your desk.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((offering) => (
              <div
                key={offering.name}
                className="rounded-card border border-line bg-paper p-7"
              >
                <h3 className="text-h3 font-semibold">{offering.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {offering.detail}
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
                  Why the shortlist is{" "}
                  <span className="text-lime-text">short.</span>
                </>
              }
            />
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-body">
                Our recruiters specialise by technology area rather than
                covering everything. That is the whole reason three names reach
                you instead of thirty: someone has already had the conversation
                that separates a candidate who has used a technology from one
                who is genuinely good at it.
              </p>
              <p className="mt-5 leading-relaxed text-body">
                It also means we can tell you when a role is priced wrong,
                scoped wrong or simply rare in your market — early, rather than
                after six weeks of looking busy.
              </p>
            </div>
          </div>
        </Section>

        <Section image="/images/employers/reasons.jpg">
          <SectionHeading
            title={
              <>
                Why employers{" "}
                <span className="text-lime-text">partner with us.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {REASONS.map((reason) => (
              <div
                key={reason.name}
                className="rounded-card border border-line bg-paper p-8"
              >
                <h3 className="text-h3 font-semibold">{reason.name}</h3>
                <p className="mt-3 leading-relaxed text-body">
                  {reason.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="teal" image="/images/employers/process.jpg">
          <div className="max-w-3xl">
            <h2 className="text-h2 text-balance text-paper">
              Eight steps, and you hear the bad news early.
            </h2>
          </div>

          <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, index) => (
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

        {/* The form is the one on /contact rather than a second one with its
            own shape, so every enquiry lands in the same place. */}
        <Section tone="surface" id="enquiry" image="/images/employers/enquiry.jpg">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              title={
                <>
                  Looking for{" "}
                  <span className="text-lime-text">talent?</span>
                </>
              }
              lead="Tell us the role. If we are not the right fit for it, we will say so rather than send you a shortlist to justify the call."
            />
            <div className="rounded-card border border-line bg-paper p-7 lg:p-9">
              <ContactForm />
            </div>
          </div>
        </Section>

        {/* Commented out on request — restore by removing this wrapper.
            <FAQ
             items={HIRE_FAQS}
             title={
               <>
                 What employers ask{" "}
                 <span className="text-lime-text">before the first brief.</span>
               </>
             }
             tone="surface"
           /> */}
      </main>
      <Footer />
    </>
  );
}
