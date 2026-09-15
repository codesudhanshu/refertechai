import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/content/testimonials";

export function Testimonials({
  items,
  tone = "paper",
}: {
  items: readonly Testimonial[];
  tone?: "paper" | "surface";
}) {
  if (items.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      <SectionHeading
        eyebrow="In their words"
        title={
          <>
            The measure of the work is{" "}
            <span className="text-primary">what happens after.</span>
          </>
        }
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <figure
            key={`${item.role}-${item.industry}`}
            className="flex flex-col rounded-card border border-line bg-paper p-7"
          >
            <span
              aria-hidden="true"
              className="font-display text-4xl leading-none font-bold text-accent"
            >
              &ldquo;
            </span>
            <blockquote className="mt-4 flex-1 leading-relaxed text-body">
              {item.quote}
            </blockquote>
            <figcaption className="mt-7 border-t border-line pt-5 text-sm">
              <span className="font-medium text-ink">{item.role}</span>
              <span className="text-body"> &middot; {item.industry}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
