import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { Partners } from "@/components/sections/Partners";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
// import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustryStrip } from "@/components/sections/IndustryStrip";
// import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { Testimonials } from "@/components/sections/Testimonials";
// import { FAQ } from "@/components/sections/FAQ";
// import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { testimonials } from "@/content/testimonials";
import { generalFaqs } from "@/content/faqs";
import { heroSlides } from "@/content/heroSlides";
import { differentiators } from "@/content/about";

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

        {/* Supplied artwork, full bleed directly under the hero. The four
            propositions and the headline are burned into the image, so the
            alt text carries them for anyone who cannot see it. */}
        <section aria-label="What we do">
          <Image
            src="/images/value-band.jpg"
            alt="Recruitment Solutions, HR Consulting Services, Talent Advisory, Global Talent Pool. Better People, Better Business — ReferTech Solution, your trusted recruitment and HR consulting partner."
            width={1080}
            height={180}
            style={{ height: "auto" }}
            priority
            className="mx-auto max-w-5lg"
          />
        </section>

        {/* recruitment services */}
        <ServiceGrid items={services} tone="paper" />

        <ServicePillars tone="surface" />


        {/* 4 — differentiators on a dark band */}
        {/* Commented out on request — restore by removing this wrapper.
            <WhyChooseUs items={differentiators} /> */}

        {/* 6 — industries */}
        <IndustryStrip items={industries} tone="paper" />

        {/* 7 — selected work */}
        <Partners tone="surface" />

        {/* Commented out on request — restore by removing this wrapper.
            <CaseStudyGrid items={caseStudies} limit={3} tone="paper" /> */}


        {/* proof and questions */}
        <Testimonials items={testimonials} tone="surface" />
        {/* Commented out on request — restore by removing this wrapper.
            <FAQ items={generalFaqs} tone="paper" /> */}

        {/* Commented out on request — restore by removing this wrapper.
            <CtaBand /> */}
      </main>
      <Footer />
    </>
  );
}
