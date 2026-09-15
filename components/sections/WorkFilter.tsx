"use client";

import { useMemo, useState } from "react";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import type { CaseStudy } from "@/content/caseStudies";
import type { Industry } from "@/content/industries";

// Receives the full list as a prop from a server component, so every case
// study is present in the initial HTML and the route stays static. Filtering
// is a client-side narrowing of data that has already shipped.
export function WorkFilter({
  items,
  industries,
}: {
  items: readonly CaseStudy[];
  industries: readonly Industry[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const available = useMemo(() => {
    const used = new Set(items.map((item) => item.industry));
    return industries.filter((industry) => used.has(industry.slug));
  }, [items, industries]);

  const shown = active
    ? items.filter((item) => item.industry === active)
    : items;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter work by industry"
        className="flex flex-wrap gap-2"
      >
        <button
          type="button"
          aria-pressed={active === null}
          onClick={() => setActive(null)}
          className={`rounded-full border px-4 py-2 text-sm transition-colors duration-150 ${
            active === null
              ? "border-primary bg-primary text-white"
              : "border-line bg-paper text-ink hover:border-primary hover:text-primary"
          }`}
        >
          All work
        </button>
        {available.map((industry) => (
          <button
            key={industry.slug}
            type="button"
            aria-pressed={active === industry.slug}
            onClick={() => setActive(industry.slug)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors duration-150 ${
              active === industry.slug
                ? "border-primary bg-primary text-white"
                : "border-line bg-paper text-ink hover:border-primary hover:text-primary"
            }`}
          >
            {industry.name}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-body">
        Showing {shown.length} of {items.length}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <CaseStudyCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
