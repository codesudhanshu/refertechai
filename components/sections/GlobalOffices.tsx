import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offices } from "@/content/presence";

// Location cards. `address` is deliberately empty in content/presence.ts
// until real addresses are supplied, so the card renders the city and
// timezone and simply omits the street line rather than inventing one.
export function GlobalOffices({
  tone = "paper",
}: {
  tone?: "paper" | "surface";
}) {
  if (offices.length === 0) return null;

  return (
    <Section tone={tone} bordered>
      <SectionHeading
        eyebrow="Where we are"
        title={
          <>
            Close enough to your timezone{" "}
            <span className="text-lime-text">to be useful.</span>
          </>
        }
        lead="Delivery runs across overlapping hours rather than throwing work over a wall at the end of the day."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {offices.map((office) => (
          <article
            key={`${office.city}-${office.country}`}
            className="flex flex-col bg-paper p-7 lg:p-8"
          >
            <h3 className="text-h3 font-semibold">{office.city}</h3>
            <p className="mt-1 text-sm font-medium text-lime-text">
              {office.country}
            </p>

            {office.address ? (
              <p className="mt-5 text-sm leading-relaxed text-body">
                {office.address}
              </p>
            ) : null}

            <p className="mt-5 border-t border-line pt-5 text-sm text-body">
              {office.timezone}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
