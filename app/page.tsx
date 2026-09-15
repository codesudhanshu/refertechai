import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HiringModels } from "@/components/sections/HiringModels";
import { IndustryStrip } from "@/components/sections/IndustryStrip";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { VisionMission } from "@/components/sections/VisionMission";
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
import { clientNames } from "@/content/clients";
import { heroSlides } from "@/content/heroSlides";
import { differentiators, process } from "@/content/about";

// The brand is written in here rather than left to the layout's title
// template: the template applies only to child route segments, and this page
// shares the root segment with app/layout.tsx. Every other route gets the
// suffix from the template and must not repeat it.
export const metadata = buildMetadata({
  title: "ReferTech AI — Technology that moves business forward",
  description:
    "IT consulting, cloud, cybersecurity and data solutions — plus the technical staffing to run them. Independent advice and delivery from one accountable partner.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroCarousel slides={heroSlides} />

        {/* 2 — client logo strip */}
        <TrustBar names={clientNames} />

        {/* 3 — consulting services, staffing folded in at the end */}
        <ServiceGrid items={services} tone="paper" />

        {/* 4 — differentiators on a dark band */}
        <WhyChooseUs items={differentiators} />

        {/* 5 — staffing models */}
        <HiringModels tone="surface" limit={3} />

        {/* 6 — industries */}
        <IndustryStrip items={industries} tone="paper" />

        {/* 7 — selected work */}
        <CaseStudyGrid items={caseStudies} limit={3} tone="surface" />

        {/* 8 — delivery process */}
        <ProcessTimeline
          steps={process.map((step) => ({
            name: step.title,
            detail: step.detail,
          }))}
          tone="paper"
        />

        {/* 9 — vision and mission */}
        <VisionMission tone="surface" />

        {/* 10 — technology stack */}
        <TechStack groups={technologyGroups} tone="paper" />

        {/* proof and questions */}
        <Testimonials items={testimonials} tone="paper" />
        <FAQ items={generalFaqs} tone="surface" />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
