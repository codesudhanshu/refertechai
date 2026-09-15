import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-16 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-h1 text-balance">{title}</h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
              {lead}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
