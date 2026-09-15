import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TechGroup } from "@/content/technologies";

export function TechStack({
  groups,
  tone = "surface",
  heading = true,
}: {
  groups: readonly TechGroup[];
  tone?: "paper" | "surface";
  heading?: boolean;
}) {
  return (
    <Section tone={tone} bordered>
      {heading ? (
        <SectionHeading
          eyebrow="What we build on"
          title={
            <>
              A stack chosen for the job,{" "}
              <span className="text-lime-text">not for the CV.</span>
            </>
          }
        />
      ) : null}

      <div
        className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3 ${
          heading ? "mt-14" : ""
        }`}
      >
        {groups.map((group) => (
          <div
            key={group.name}
            className="rounded-card border border-line bg-paper p-6"
          >
            <h3 className="text-eyebrow font-semibold uppercase text-lime-text">
              {group.name}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
