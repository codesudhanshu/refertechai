import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Arrow } from "@/components/ui/Button";
import { company } from "@/content/company";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Technologies", href: "/technologies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-eyebrow font-semibold uppercase text-body-invert">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-paper/75 transition-colors duration-150 hover:text-paper"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="on-dark bg-teal text-paper">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-10 border-b border-paper/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            {/* The logo file is a JPEG on a white ground, so on the teal band
                it sits in a white plate rather than directly on the dark. */}
            <Link
              href="/"
              className="inline-flex rounded-btn bg-paper px-4 py-3"
              aria-label={`${company.name} — home`}
            >
              <Logo height={34} />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-paper/70">
              We are one of the fastest growing digital transformation partners
              helping enterprises scale in an AI-focused world.
            </p>
          </div>

          <a
            href={`mailto:${company.email}`}
            className="group/btn inline-flex items-center gap-3 self-start font-display text-xl font-semibold text-paper transition-colors duration-150 hover:text-lime lg:text-2xl"
          >
            {company.email}
            <Arrow />
          </a>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <Column
            title="Services"
            links={services.map((service) => ({
              label: service.title,
              href: `/services/${service.slug}`,
            }))}
          />
          <Column
            title="Industries"
            links={industries.slice(0, 6).map((industry) => ({
              label: industry.name,
              href: `/industries#${industry.slug}`,
            }))}
          />
          <Column title="Company" links={COMPANY_LINKS} />

          <div>
            <h3 className="text-eyebrow font-semibold uppercase text-body-invert">
              Get in touch
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-paper/75">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors duration-150 hover:text-paper"
                >
                  {company.email}
                </a>
              </li>
              {company.phone ? (
                <li>
                  <a
                    href={`tel:${company.phone.replace(/\s+/g, "")}`}
                    className="transition-colors duration-150 hover:text-paper"
                  >
                    {company.phone}
                  </a>
                </li>
              ) : null}
              {company.offices.map((office) => (
                <li key={`${office.city}-${office.country}`}>
                  {office.city}, {office.country}
                </li>
              ))}
              <li className="pt-1 text-paper/50">
                We reply {company.responseTime}.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/10 pt-8 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </span>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-150 hover:text-paper"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition-colors duration-150 hover:text-paper"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
