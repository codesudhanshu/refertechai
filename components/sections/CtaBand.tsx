import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/content/company";

// The closing band is a full lime fill with teal text — 11.49:1, and the one
// place the brand colour gets to dominate a whole section.
export function CtaBand({
  title,
  lead,
}: {
  title?: ReactNode;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-lime">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 text-teal"
      />

      <Container className="relative py-20 lg:py-28">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-h2 text-balance text-teal">
              {title ?? (
                <>
                  Let&apos;s make the next{" "}
                  <em className="not-italic underline decoration-2 underline-offset-8">
                    move count.
                  </em>
                </>
              )}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-teal/80">
              {lead ??
                `Send the context that matters — a rough brief, a half-formed idea, or a system that has outgrown itself. We reply ${company.responseTime}.`}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="dark" size="lg">
              Start a conversation
            </Button>
            <a
              href={`mailto:${company.email}`}
              className="text-sm font-medium text-teal underline underline-offset-4 transition-opacity duration-150 hover:opacity-70"
            >
              {company.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
