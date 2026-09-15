import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/content/presence";

// Team entries carry a real role and an explicit "To be confirmed" name until
// real people are supplied. Inventing named humans on an about page is the
// most misleading kind of placeholder, so the card shows the gap instead of
// filling it.
export function Leadership({
  tone = "paper",
}: {
  tone?: "paper" | "surface";
}) {
  if (team.length === 0) return null;

  return (
    <Section tone={tone}>
      <SectionHeading
        title={
          <>
            The people scoping the work are{" "}
            <span className="text-lime-text">the people doing it.</span>
          </>
        }
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <li
            key={member.role}
            className="flex flex-col rounded-card border border-line bg-paper p-7"
          >
            <div
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-lime font-display text-lg font-bold text-teal"
            >
              {member.role
                .split(" ")
                .filter((w) => /^[A-Z]/.test(w))
                .slice(0, 2)
                .map((w) => w[0])
                .join("")}
            </div>

            <h3 className="mt-6 text-h3 font-semibold">{member.role}</h3>
            <p className="mt-2 text-sm text-body">{member.name}</p>
            <p className="mt-4 flex-1 border-t border-line pt-4 text-sm leading-relaxed text-body">
              {member.focus}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
