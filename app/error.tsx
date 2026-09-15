"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { company } from "@/content/company";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("page render failed", error);
  }, [error]);

  return (
    <main id="main" className="min-h-[70vh] bg-surface">
      <Container className="py-24 lg:py-32">
        <div className="max-w-2xl">
          <Eyebrow>Something went wrong</Eyebrow>
          <h1 className="mt-6 text-h1 text-balance">
            This page didn&apos;t <span className="text-lime-text">load.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-body">
            The problem is on our side, not yours. Trying again usually works.
            If it keeps happening, email us and we will look into it.
          </p>

          {error.digest ? (
            <p className="mt-6 text-sm text-body">
              Reference:{" "}
              <code className="rounded bg-surface px-2 py-1 font-mono text-xs text-ink">
                {error.digest}
              </code>
            </p>
          ) : null}

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button type="button" size="lg" onClick={reset} arrow={false}>
              Try again
            </Button>
            <a
              href={`mailto:${company.email}`}
              className="text-sm font-medium text-body transition-colors duration-150 hover:text-lime-text"
            >
              {company.email}
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
