import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { company } from "@/content/company";

export function CtaBand({
  eyebrow = "Have a project in mind?",
  title,
  lead,
}: {
  eyebrow?: string;
  title?: ReactNode;
  lead?: string;
}) {
  return (
    <section className="gradient-wash relative overflow-hidden border-t border-line">
      <Container className="py-20 lg:py-28">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-6 text-h2 text-balance">
              {title ?? (
                <>
                  Let&apos;s make the next{" "}
                  <span className="text-primary">move count.</span>
                </>
              )}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              {lead ??
                "Send the context that matters — a rough brief, a half-formed idea, or a system that has outgrown itself. We reply " +
                  company.responseTime +
                  "."}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg">
              Start a conversation
            </Button>
            <a
              href={`mailto:${company.email}`}
              className="text-sm font-medium text-body transition-colors duration-150 hover:text-primary"
            >
              {company.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
