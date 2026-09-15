import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessTimeline({
  steps,
  tone = "paper",
}: {
  steps: readonly { name: string; detail: string }[];
  tone?: "paper" | "surface";
}) {
  return (
    <Section tone={tone} bordered>
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            From signal to <span className="text-lime-text">scale.</span>
          </>
        }
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className={`flex flex-col p-7 ${
              tone === "surface" ? "bg-surface" : "bg-paper"
            }`}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-sm font-semibold tabular-nums text-lime-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </div>
            <h3 className="mt-6 text-h3 font-semibold">{step.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
