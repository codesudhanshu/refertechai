import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import type { Industry } from "@/content/industries";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SectionAction } from "@/components/ui/SectionAction";

// Sector cards: the photograph carries the card and the title sits on top of
// it, over a gradient that runs from transparent to near-black at the bottom.
//
// The gradient is what makes this readable rather than decorative — white text
// straight onto a photo depends entirely on which pixels happen to be behind
// it. Over the gradient's dark end the title clears AA at any image.
export function IndustryStrip({
  items,
  tone = "paper",
  limit,
  showAction = true,
}: {
  items: readonly Industry[];
  tone?: "paper" | "surface";
  limit?: number;
  showAction?: boolean;
}) {
  const shown = typeof limit === "number" ? items.slice(0, limit) : items;
  if (shown.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      <Reveal>
        <h2 className="max-w-2xl text-h2 text-balance">
          Sector context changes{" "}
          <span className="text-lime-text">what good looks like.</span>
        </h2>
      </Reveal>

      <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((industry) => (
          <StaggerItem as="li" key={industry.slug}>
            <Link
              href={`/industries#${industry.slug}`}
              className="group/sector relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-card border border-line"
            >
              <Image
                src={`/images/industries/${industry.slug}.jpg`}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                className="object-cover transition-transform duration-300 ease-out group-hover/sector:scale-[1.05]"
              />

              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent"
              />

              <span className="relative p-5">
                <span className="block font-display text-lg font-semibold leading-tight text-paper">
                  {industry.name}
                </span>

                <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                  View roles
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-150 ease-out group-hover/sector:translate-x-0.5"
                  >
                    &#8594;
                  </span>
                </span>
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      {showAction ? (
        <SectionAction>
          <Button href="/industries" variant="outline">
            All industries
          </Button>
        </SectionAction>
      ) : null}
    </Section>
  );
}
