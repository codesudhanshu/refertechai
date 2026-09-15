import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import type { Testimonial } from "@/content/testimonials";

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <p className="flex items-center gap-0.5" aria-label={`${rounded} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={i < rounded ? "text-lime-text" : "text-line"}
        >
          &#9733;
        </span>
      ))}
    </p>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function Testimonials({
  items,
  tone = "surface",
}: {
  items: readonly Testimonial[];
  tone?: "paper" | "surface";
}) {
  if (items.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      <SectionHeading
        title={
          <>
            The measure of the work is{" "}
            <span className="text-lime-text">what happens after.</span>
          </>
        }
        lead="What hiring managers say once the person we placed has been in the role a while."
      />

      <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <StaggerItem key={item.name} className="h-full">
            <figure className="flex h-full flex-col rounded-card border border-line bg-paper p-7 shadow-card">
              <Stars rating={item.rating} />

              <blockquote className="mt-5 flex-1 leading-relaxed text-body">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                {item.image ? (
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime font-display text-sm font-bold text-teal"
                  >
                    {initials(item.name)}
                  </span>
                )}

                <span className="min-w-0">
                  <span className="block truncate font-display text-base font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="block truncate text-sm text-body">
                    {item.role}
                    {item.company ? `, ${item.company}` : ""}
                  </span>
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
