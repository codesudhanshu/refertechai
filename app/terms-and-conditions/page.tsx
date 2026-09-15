import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms governing your use of refertechai.com.",
  path: "/terms-and-conditions",
});

// Copy preserved verbatim from the previous site. Markup and styling changed;
// no sentence was reworded.
export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero eyebrow="Legal / Terms" title="Terms & Conditions" />

        <Section>
          <article className="max-w-[68ch]">
            <p className="text-sm text-body">
              Last updated: September 14, 2026
            </p>

            <p className="mt-8 text-lg leading-relaxed text-body">
              These terms govern your use of refertechai.com. By accessing this
              website, you agree to these terms.
            </p>

            <h2 className="mt-12 text-h3 font-semibold">Website use</h2>
            <p className="mt-4 leading-relaxed text-body">
              This website and its content are provided for general information
              about ReferTech AI and our services. You may not misuse the
              website, interfere with its operation or use its content in a
              manner that infringes our rights or the rights of others.
            </p>

            <h2 className="mt-10 text-h3 font-semibold">
              Intellectual property
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Unless otherwise stated, the content, design, branding and
              materials on this website are owned by ReferTech AI and are
              protected by applicable intellectual property laws. You may not
              reproduce or distribute them without prior written permission.
            </p>

            <h2 className="mt-10 text-h3 font-semibold">Project services</h2>
            <p className="mt-4 leading-relaxed text-body">
              Any services provided by ReferTech AI will be governed by a
              separate written agreement or statement of work. Nothing on this
              website creates a binding service relationship.
            </p>

            <h2 className="mt-10 text-h3 font-semibold">
              Disclaimer and liability
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We make reasonable efforts to keep this website current, but do
              not guarantee that all content is complete or error-free. To the
              extent permitted by law, ReferTech AI is not liable for losses
              arising from use of, or reliance on, this website.
            </p>

            <h2 className="mt-10 text-h3 font-semibold">Contact</h2>
            <p className="mt-4 leading-relaxed text-body">
              For questions about these terms, contact{" "}
              <a
                href="mailto:sales@refertechai.com"
                className="text-primary underline underline-offset-4 transition-colors duration-150 hover:text-primary-dark"
              >
                sales@refertechai.com
              </a>
              .
            </p>
          </article>
        </Section>
      </main>
      <Footer />
    </>
  );
}
