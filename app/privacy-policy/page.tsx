import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How ReferTech AI collects, uses and protects information when you visit refertechai.com or contact us about our services.",
  path: "/privacy-policy",
});

// Copy preserved verbatim from the previous site. Markup and styling changed;
// no sentence was reworded.
export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero eyebrow="Legal / Privacy" title="Privacy Policy" />

        <Section>
          <article className="max-w-[68ch]">
            <p className="text-sm text-body">
              Last updated: September 14, 2026
            </p>

            <p className="mt-8 text-lg leading-relaxed text-body">
              ReferTech AI respects your privacy. This policy explains how we
              collect, use and protect information when you visit
              refertechai.com or contact us about our services.
            </p>

            <h2 className="mt-12 text-h3 font-semibold">
              Information we collect
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We may collect information you choose to provide, including your
              name, email address, company details and project information. We
              may also receive limited technical information such as browser
              type, device information and site usage data.
            </p>

            <h2 className="mt-10 text-h3 font-semibold">
              How we use information
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We use your information to respond to enquiries, deliver and
              improve our services, communicate about a project, maintain site
              security and comply with legal obligations. We do not sell
              personal information.
            </p>

            <h2 className="mt-10 text-h3 font-semibold">
              Sharing and retention
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We share information only with trusted providers that help operate
              our business, where required by law, or with your consent. We keep
              information only for as long as necessary for the purposes
              described here.
            </p>

            <h2 className="mt-10 text-h3 font-semibold">Your choices</h2>
            <p className="mt-4 leading-relaxed text-body">
              You may request access, correction or deletion of your personal
              information, subject to applicable law. To make a request or ask a
              privacy question, email{" "}
              <a
                href="mailto:sales@refertechai.com"
                className="text-lime-text underline underline-offset-4 transition-colors duration-150 hover:text-lime-deep"
              >
                sales@refertechai.com
              </a>
              .
            </p>

            <h2 className="mt-10 text-h3 font-semibold">
              Changes to this policy
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We may update this policy from time to time. The latest version
              will always appear on this page.
            </p>
          </article>
        </Section>
      </main>
      <Footer />
    </>
  );
}
