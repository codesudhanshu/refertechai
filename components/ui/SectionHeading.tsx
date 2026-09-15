import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Motion";

// No eyebrow / kicker above the heading — sections open with the heading and
// then a paragraph. This is a standing rule, so the prop does not exist here
// rather than defaulting to empty.
export function SectionHeading({
  title,
  lead,
  align = "left",
  action,
  invert = false,
}: {
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  action?: ReactNode;
  invert?: boolean;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={[
        "flex flex-col gap-6",
        action ? "lg:flex-row lg:items-start lg:justify-between" : "",
        centered ? "items-center text-center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={centered ? "max-w-2xl" : "max-w-3xl"}>
        <h2 className={`text-h2 text-balance ${invert ? "text-paper" : ""}`}>
          {title}
        </h2>
        {lead ? (
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed ${
              invert ? "text-body-invert" : "text-body"
            }`}
          >
            {lead}
          </p>
        ) : null}
      </div>
      {/* Nudged down so the button's optical centre lines up with the
          heading's first line rather than its cap height. */}
      {action ? <div className="shrink-0 lg:mt-1.5">{action}</div> : null}
    </Reveal>
  );
}
