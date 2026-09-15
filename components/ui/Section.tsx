import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

export function Section({
  tone = "paper",
  bordered = false,
  id,
  className = "",
  children,
}: {
  tone?: "paper" | "surface";
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
        tone === "surface" ? "bg-surface" : "bg-paper",
        bordered ? "border-t border-line" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container>{children}</Container>
    </section>
  );
}
