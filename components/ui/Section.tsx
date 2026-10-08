import type { ReactNode } from "react";
import Image from "next/image";
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

// The scrim laid over a section's background photograph, one per ground.
//
// These are not a style choice, they are the contrast budget. Body text is
// #4a5a53 and measures 7.16:1 on white; at these opacities a mid-tone photo
// behind it pulls that to roughly 6.5:1, still clear of AA. Raising the
// photograph's share much further starts spending contrast the body copy
// needs, so a section that wants a more visible picture should use the dark
// ground, where the copy is white and has far more headroom.
const SCRIMS = {
  paper: "bg-paper/88",
  surface: "bg-surface/88",
  teal: "bg-teal/80",
  ink: "bg-ink/82",
  lime: "bg-lime/90",
} as const;

// Vertical rhythm. `tight` is half the default, for bands that carry a single
// row of content rather than a full block. Kept as a prop rather than passed
// through className: two padding utilities of equal specificity resolve by
// their order in the compiled stylesheet, not by the order they appear in the
// class attribute, so an override there is not reliable.
const SPACE = {
  default: "py-20 lg:py-28",
  tight: "py-10 lg:py-14",
} as const;

export type Space = keyof typeof SPACE;

// No divider rule between sections — the alternating grounds (paper, surface,
// teal, lime) already separate them, and a hairline on top of each section
// reads as a stray line closing the one above it.
export function Section({
  tone = "paper",
  space = "default",
  id,
  className = "",
  image,
  children,
}: {
  tone?: Tone;
  space?: Space;
  id?: string;
  className?: string;
  // A background photograph for the band. Decorative by definition — it sits
  // behind the copy and says nothing the copy does not, so it is given an
  // empty alt rather than a description a screen reader would read out.
  image?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={[
        image ? "relative isolate overflow-hidden" : "",
        SPACE[space],
        TONES[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden="true"
            className={`absolute inset-0 -z-10 ${SCRIMS[tone]}`}
          />
        </>
      ) : null}
      <Container>{children}</Container>
    </section>
  );
}
