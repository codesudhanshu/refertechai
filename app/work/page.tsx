import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { WorkFilter } from "@/components/sections/WorkFilter";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/content/caseStudies";
import { industries } from "@/content/industries";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Selected engagements across financial services, healthcare, retail, logistics, manufacturing and media.",
  path: "/work",
});

export default function Work() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Selected work"
          title={
            <>
              Problems worth{" "}
              <span className="text-primary">solving properly.</span>
            </>
          }
          lead="A cross-section of the kind of work we take on, and what changed as a result."
        />

        <Section>
          {/* Visible on the page, not only in the source. Publishing
              illustrative work as though it were delivered would be a false
              claim, so the page says plainly what this is. */}
          <p
            role="note"
            className="mb-10 rounded-card border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-body"
          >
            <span className="font-medium text-ink">
              These entries are illustrative.
            </span>{" "}
            They show the shape of engagements we take on. Verified client
            names and measured results will replace them here.
          </p>

          <WorkFilter items={caseStudies} industries={industries} />
        </Section>

        <CtaBand
          eyebrow="Have something like this?"
          title={
            <>
              Tell us the part that{" "}
              <span className="text-primary">is not working.</span>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
