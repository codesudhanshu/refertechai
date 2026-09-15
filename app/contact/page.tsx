import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Arrow } from "@/components/ui/Button";
import ContactForm from "./ContactForm";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/content/company";
import { services } from "@/content/services";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a conversation about your project. A rough brief, a half-formed idea or a complex system — start wherever you are.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="border-b border-line bg-surface">
          <Container className="py-16 lg:py-24">
            <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <h1 className="text-h1 text-balance">
                  Tell us what you&apos;re{" "}
                  <span className="text-lime-text">building.</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
                  A rough brief, a half-formed idea, a complex system — start
                  wherever you are. We&apos;ll help find the next right move.
                </p>

                <dl className="mt-12 flex flex-col gap-8 border-t border-line pt-10">
                  <div>
                    <dt className="text-eyebrow font-semibold uppercase text-body">
                      Email us
                    </dt>
                    <dd className="mt-3">
                      <a
                        href={`mailto:${company.email}`}
                        className="group/btn inline-flex items-center gap-3 font-display text-xl font-semibold text-ink transition-colors duration-150 hover:text-lime-text lg:text-2xl"
                      >
                        {company.email}
                        <Arrow />
                      </a>
                    </dd>
                  </div>

                  {company.phone ? (
                    <div>
                      <dt className="text-eyebrow font-semibold uppercase text-body">
                        Call us
                      </dt>
                      <dd className="mt-3">
                        <a
                          href={`tel:${company.phone.replace(/\s+/g, "")}`}
                          className="text-lg text-ink transition-colors duration-150 hover:text-lime-text"
                        >
                          {company.phone}
                        </a>
                      </dd>
                    </div>
                  ) : null}

                  {company.offices.length > 0 ? (
                    <div>
                      <dt className="text-eyebrow font-semibold uppercase text-body">
                        Where we are
                      </dt>
                      <dd className="mt-3 flex flex-col gap-2 text-body">
                        {company.offices.map((office) => (
                          <span key={`${office.city}-${office.country}`}>
                            {office.address ? `${office.address}, ` : ""}
                            {office.city}, {office.country}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ) : null}

                  <div>
                    <dt className="text-eyebrow font-semibold uppercase text-body">
                      Response time
                    </dt>
                    <dd className="mt-3 text-body">
                      We reply {company.responseTime}.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-eyebrow font-semibold uppercase text-body">
                      What we can help with
                    </dt>
                    <dd className="mt-4 flex flex-wrap gap-2">
                      {services.map((service) => (
                        <span
                          key={service.slug}
                          className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink"
                        >
                          {service.title}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-card border border-line bg-paper p-7 shadow-card lg:p-9">
                <p className="text-eyebrow font-semibold uppercase text-lime-text">
                  Project enquiry
                </p>
                <h2 className="text-h3 font-semibold">
                  We&apos;re ready when you are.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  Send the context that matters and our team will get back to
                  you to explore the opportunity.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
