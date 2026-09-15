import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

export function PageHero({
  title,
  lead,
}: {
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-h1 text-balance">{title}</h1>
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
