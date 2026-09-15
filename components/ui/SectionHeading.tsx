import type { ReactNode } from "react";

// A short accent rule sits before every eyebrow. It is the one repeated
// ornament in the system and is what makes a section start read as deliberate.
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-eyebrow font-semibold uppercase text-primary">
      <span aria-hidden="true" className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const centered = align === "center";

  return (
    <div
      className={[
        "flex flex-col gap-6",
        action ? "lg:flex-row lg:items-end lg:justify-between" : "",
        centered ? "items-center text-center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={centered ? "max-w-2xl" : "max-w-3xl"}>
        {eyebrow ? (
          <div className={centered ? "flex justify-center" : ""}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        ) : null}
        <h2 className="mt-5 text-h2 text-balance">{title}</h2>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
            {lead}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
