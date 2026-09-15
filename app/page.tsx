import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { IndustryStrip } from "@/components/sections/IndustryStrip";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { technologyGroups } from "@/content/technologies";
import { testimonials } from "@/content/testimonials";
import { generalFaqs } from "@/content/faqs";
import { stats } from "@/content/stats";
import { clientNames } from "@/content/clients";

export const metadata = buildMetadata({
  title: "Technology that moves business forward",
  description:
    "We design and engineer AI systems, software products, cloud infrastructure and blockchain applications for teams building what's next.",
  path: "/",
});

// Carried over verbatim from the previous site.
const PROCESS = [
  {
    name: "Discover",
    detail: "Start with the business, the people and the opportunity.",
  },
  {
    name: "Design",
    detail: "Turn the right idea into a clear product and technical path.",
  },
  {
    name: "Deliver",
    detail: "Build in focused cycles, with visibility at every step.",
  },
  {
    name: "Evolve",
    detail: "Measure, learn and keep moving after launch.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero
          eyebrow="AI · Software · Cloud · Web3"
          title={
            <>
              Build what&apos;s next.{" "}
              <span className="text-primary">Better.</span>
            </>
          }
          lead="We design and engineer intelligent digital products — from AI agents and cloud systems to web platforms that move business forward."
          primary={{ label: "Start a project", href: "/contact" }}
          secondary={{ label: "Explore capabilities", href: "/services" }}
          image={{
            src: "/images/engineering.jpg",
            alt: "Software engineer working at a computer",
          }}
        />

        <TrustBar names={clientNames} />

        <ServiceGrid items={services} />

        <StatsBand items={stats} tone="surface" eyebrow="By the numbers" />

        <IndustryStrip items={industries} tone="paper" />

        <CaseStudyGrid items={caseStudies} limit={3} tone="surface" />

        <ProcessTimeline steps={PROCESS} tone="paper" />

        <TechStack groups={technologyGroups} tone="surface" />

        <Testimonials items={testimonials} tone="paper" />

        <FAQ items={generalFaqs} tone="surface" />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
