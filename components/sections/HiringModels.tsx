import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { hiringModels } from "@/content/hiring";

export function HiringModels({
  tone = "surface",
  limit,
  showAction = true,
}: {
  tone?: "paper" | "surface";
  limit?: number;
  showAction?: boolean;
}) {
  const shown = typeof limit === "number" ? hiringModels.slice(0, limit) : hiringModels;

  return (
    <Section tone={tone} bordered>
      <SectionHeading
        title={
          <>
            We hire engineers{" "}
            <span className="text-lime-text">the way we hire our own.</span>
          </>
        }
        lead="Screening is done by people who write code, so your panel only meets candidates worth their time."
        action={
          showAction ? (
            <Button href="/hire" variant="ghost">
              How hiring works
            </Button>
          ) : undefined
        }
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((model) => (
          <article
            key={model.slug}
            id={model.slug}
            className="flex scroll-mt-28 flex-col rounded-card border border-line bg-paper p-7"
          >
            <h3 className="text-h3 font-semibold">{model.name}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-body">
              {model.detail}
            </p>

            <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-5">
              {model.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-text"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-eyebrow font-semibold uppercase text-lime-text">
              {model.bestFor}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
