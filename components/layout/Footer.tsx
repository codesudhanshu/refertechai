import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
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
      <ul className="mt-5 flex flex-col gap-1">
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
      <Container className="pt-16 pb-6 lg:pt-20 pb-6">
        {/* Brand block on the left, link columns to the right of it. The
            logo carries the brand navy as its own ground, so on this band it
            needs no plate behind it. */}
        <div className="grid gap-12 pb-12 lg:grid-cols-[1fr_1.9fr] lg:gap-16">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex"
              aria-label={`${company.name} — home`}
            >
              <Logo width={181} />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-paper/70">
              We are a fast-growing HR solutions partner, combining AI-powered hiring with human expertise to help businesses find the right talent faster.
            </p>
            <div className="mt-6 text-sm leading-relaxed text-paper/70">
              <h3 className="text-eyebrow font-semibold uppercase text-body-invert">
                Contact us
              </h3>
              <ul className="mt-5 flex flex-col gap-1 text-sm text-paper/75">
                <li>
                  <a
                    href="mailto:info@refertechsolution.com"
                    className="transition-colors duration-150 hover:text-paper"
                  >
                    info@refertechsolution.com
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
              </ul>

              <p className="mt-6">Follow us on social media:</p>
              <ul className="flex gap-4 mt-4">
                <li>
                  <a href="">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#fff" role="img" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg height="24px" width="24px" viewBox="-143 145 512 512" fill="#fff" id="Layer_1" role="img" xmlns="http://www.w3.org/2000/svg">
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
                    V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
                    C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
                    c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
                    "/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg fill="#fff" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512">
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
	c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
