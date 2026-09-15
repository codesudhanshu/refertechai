import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { Partners } from "@/components/sections/Partners";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustryStrip } from "@/components/sections/IndustryStrip";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { VisionMission } from "@/components/sections/VisionMission";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { testimonials } from "@/content/testimonials";
import { generalFaqs } from "@/content/faqs";
import { heroSlides } from "@/content/heroSlides";
import { differentiators, process } from "@/content/about";

// The brand is written in here rather than left to the layout's title
// template: the template applies only to child route segments, and this page
// shares the root segment with app/layout.tsx. Every other route gets the
// suffix from the template and must not repeat it.
export const metadata = buildMetadata({
  title: "ReferTech AI — Technology that moves business forward",
  description:
    "IT recruitment and staffing — permanent, contract and executive hiring for technology teams, plus RPO, background verification and hire-train-deploy.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroCarousel slides={heroSlides} />

        <ServicePillars tone="surface" />

        {/* recruitment services */}
        <ServiceGrid items={services} tone="paper" />

        {/* 4 — differentiators on a dark band */}
        <WhyChooseUs items={differentiators} />

        {/* 6 — industries */}
        <IndustryStrip items={industries} tone="paper" />

        {/* 7 — selected work */}
        <CaseStudyGrid items={caseStudies} limit={3} tone="surface" />

        <Partners tone="paper" />

        {/* 8 — delivery process */}
        <ProcessTimeline
          steps={process.map((step) => ({
            name: step.title,
            detail: step.detail,
          }))}
          tone="surface"
        />

        {/* 9 — vision and mission */}
        <VisionMission tone="paper" />

        {/* proof and questions */}
        <Testimonials items={testimonials} tone="surface" />
        <FAQ items={generalFaqs} tone="paper" />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
