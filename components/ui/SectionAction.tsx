import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Motion";

// Section-level "see everything" action. Sits at the foot of the section under
// a hairline rule, so every section closes the same way instead of some
// carrying a link in the heading row and others a button underneath.
export function SectionAction({
  invert = false,
  children,
}: {
  invert?: boolean;
  children: ReactNode;
}) {
  return (
    <Reveal
      className={`mt-12 border-t pt-8 ${
        invert ? "border-line-invert" : "border-line"
      }`}
    >
      {children}
    </Reveal>
  );
}
