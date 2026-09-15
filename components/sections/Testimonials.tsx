import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardCarousel } from "@/components/ui/CardCarousel";
import type { Testimonial } from "@/content/testimonials";

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <p className="flex items-center gap-1" aria-label={`${rounded} out of 5`}>
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

function initials(source: string) {
  return source
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function Testimonials({
  items,
  tone = "paper",
}: {
  items: readonly Testimonial[];
  tone?: "paper" | "surface";
}) {
  if (items.length === 0) return null;

  // While any entry is unverified the section says so on the page. Publishing
  // an illustrative review as though a client said it would be a false claim.
  const anyUnverified = items.some((item) => !item.verified);

  return (
    <Section tone={tone} bordered>
      <SectionHeading
        title={
          <>
            The measure of the work is{" "}
            <span className="text-lime-text">what happens after.</span>
          </>
        }
        lead="What clients say once the engagement has ended and they are running it themselves."
      />

      {anyUnverified ? (
        <p
          role="note"
          className="mt-8 rounded-card border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-body"
        >
          <span className="font-medium text-ink">
            These reviews are illustrative.
          </span>{" "}
          They show the kind of feedback this section is built to hold.
          Attributed client quotes will replace them.
        </p>
      ) : null}

      <div className="mt-10">
        <CardCarousel label="Client reviews">
          {items.map((item) => {
            const label = item.name || item.role;
            return (
              <figure
                key={item.quote.slice(0, 40)}
                className="flex h-full flex-col rounded-card border border-line bg-paper p-7 shadow-card"
              >
                <Stars rating={item.rating} />

                <blockquote className="mt-5 flex-1 leading-relaxed text-body">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime font-display text-sm font-bold text-teal"
                  >
                    {initials(label)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink">
                      {item.name || item.role}
                    </span>
                    <span className="block truncate text-sm text-body">
                      {item.company || item.industry}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </CardCarousel>
      </div>
    </Section>
  );
}
