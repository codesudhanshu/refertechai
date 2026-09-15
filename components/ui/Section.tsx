import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

// Four full-bleed section grounds. `teal` and `ink` are dark bands and carry
// the `on-dark` class, which flips focus-ring colour and is the hook every
// section uses to pick invert text colours.
const TONES = {
  paper: "bg-paper",
  surface: "bg-surface",
  teal: "bg-teal text-body-invert on-dark",
  ink: "bg-ink text-body-invert on-dark",
  lime: "bg-lime text-teal",
} as const;

export type Tone = keyof typeof TONES;

export function isDark(tone: Tone) {
  return tone === "teal" || tone === "ink";
}

export function Section({
  tone = "paper",
  bordered = false,
  id,
  className = "",
  children,
}: {
  tone?: Tone;
  bordered?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={[
        "py-20 lg:py-28",
        TONES[tone],
        bordered
          ? isDark(tone)
            ? "border-t border-line-invert"
            : "border-t border-line"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container>{children}</Container>
    </section>
  );
}
