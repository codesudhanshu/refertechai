import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import type { Pillar } from "@/content/about";

// Image on the left, numbered differentiators on the right.
//
// The previous version was a heading over a flat two-column list on a dark
// band, which gave the eye nothing to land on. A tall image anchors the left
// column, and each point sits on its own row with a rule and real breathing
// room rather than being packed into a grid cell.
export function WhyChooseUs({
  title,
  items,
  image = {
    src: "/images/sections/why.jpg",
    alt: "A recruiter interviewing a candidate",
  },
}: {
  title?: string;
  items: readonly Pillar[];
  image?: { src: string; alt: string };
}) {
  return (
    <Section tone="teal">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Image column — sticky on desktop so it stays with the list */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-line-invert">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-teal/70 via-transparent to-transparent"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="max-w-lg text-h2 text-balance text-paper">
              {title ?? "Why our shortlist is short."}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body-invert">
              Four things that change what lands on your desk.
            </p>
          </Reveal>

          <Stagger as="ol" className="mt-12 flex flex-col">
            {items.map((item, index) => (
              <StaggerItem
                as="li"
                key={item.title}
                className="border-t border-line-invert py-8 first:border-t-0 first:pt-0"
              >
                <div className="flex gap-6">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime font-display text-sm font-bold tabular-nums text-teal"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-h3 font-semibold text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-body-invert">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-4">
            <Button href="/hire" variant="outlineInvert">
              How hiring works
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
