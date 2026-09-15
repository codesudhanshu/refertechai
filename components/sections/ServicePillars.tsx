import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Motion";

// Split intro with a headline, a coloured strapline under a hand-drawn
// underline, a short paragraph and a call to action, with the image alongside —
// then three filled cards beneath it.
//
// Layout follows the reference the user supplied. The copy is written for an
// IT recruitment firm: the reference's own wording describes consulting and
// delivery work, which is not what this business does.

const PILLARS = [
  {
    title: "Search & Shortlist",
    detail:
      "Permanent, contract and executive mandates. Targeted sourcing and screening by a recruiter who specialises in that technology area, so three names reach you rather than thirty.",
    href: "/services/permanent-it-recruitment",
    image: "/images/pillars/search-shortlist.jpg",
  },
  {
    title: "Verify & Assess",
    detail:
      "Technical screening, structured interview kits for your panel, and employment, education and reference checks completed before an offer goes out rather than discovered afterwards.",
    href: "/services/background-verification",
    image: "/images/pillars/verify-assess.jpg",
  },
  {
    title: "Place & Stay Close",
    detail:
      "Offer, notice period and counter-offer handled, then a check-in after they start. The replacement guarantee only works if people actually stay, so we keep an eye on it.",
    href: "/hire",
    image: "/images/pillars/place-stay-close.jpg",
  },
];

export function ServicePillars({
  tone = "surface",
  image = {
    src: "/images/sections/pillars-intro.jpg",
    alt: "A recruitment consultant meeting a client",
  },
}: {
  tone?: "paper" | "surface";
  image?: { src: string; alt: string };
}) {
  return (
    <Section tone={tone} bordered>
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="text-h2 text-balance">
            Specialist IT recruitment that fills the role
          </h2>

          <p className="mt-3 font-display text-xl font-semibold text-lime-text lg:text-2xl">
            Brief. Screen. Place.
          </p>

          {/* Hand-drawn underline under the strapline */}
          <svg
            viewBox="0 0 280 14"
            aria-hidden="true"
            className="mt-3 h-3 w-64 text-lime-text"
            preserveAspectRatio="none"
          >
            <path
              d="M2 10C60 3 150 2 278 6"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <p className="mt-8 max-w-md leading-relaxed text-body">
            We recruit across engineering, cloud, data, security, product and
            leadership. Every candidate is screened by someone who understands
            the work, so your panel spends its time on people worth meeting.
          </p>

          <div className="mt-8">
            <Button href="/services">Learn more</Button>
          </div>
        </div>

        <div className="relative aspect-[16/11] w-full max-w-full overflow-hidden rounded-card border border-line">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
        </div>
      </div>

      <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <StaggerItem key={pillar.title} className="h-full">
          <Link
            href={pillar.href}
            className="group/card on-dark flex flex-col overflow-hidden rounded-card bg-teal transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-ink"
          >
            <span className="relative block aspect-[16/9] w-full overflow-hidden">
              <Image
                src={pillar.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover transition-transform duration-300 ease-out group-hover/card:scale-[1.04]"
              />
            </span>

            <span className="flex flex-1 flex-col p-7">
              <h3 className="text-h3 font-semibold text-paper">
                {pillar.title}
              </h3>

              <span className="mt-4 flex-1 text-sm leading-relaxed text-body-invert">
                {pillar.detail}
              </span>

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                Learn more
                <span
                  aria-hidden="true"
                  className="transition-transform duration-150 ease-out group-hover/card:translate-x-0.5"
                >
                  &#8594;
                </span>
              </span>
            </span>
          </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
