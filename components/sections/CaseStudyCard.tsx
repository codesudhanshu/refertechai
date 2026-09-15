import type { CaseStudy } from "@/content/caseStudies";
import { industries } from "@/content/industries";

// A recruitment mandate reads as: who the client was, what was being hired,
// what made it hard, what we did, and the numbers that came out. The metric
// strip is the part buyers actually compare, so it gets its own band rather
// than a single figure buried in the body.
export function CaseStudyCard({ item }: { item: CaseStudy }) {
  const industry = industries.find((entry) => entry.slug === item.industry);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper shadow-card transition-[box-shadow,border-color] duration-150 hover:border-lime-text hover:shadow-card-hover">
      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-teal">
            {item.engagement}
          </span>
          <span className="rounded-full border border-line px-3 py-1 text-xs text-body">
            {industry?.name ?? item.industry}
          </span>
        </div>

        <h3 className="mt-5 text-h3 font-semibold">{item.client}</h3>

        <p className="mt-2 font-display text-sm font-semibold text-lime-text">
          {item.roles}
        </p>

        <div className="mt-6 flex flex-1 flex-col gap-5 border-t border-line pt-6">
          <div>
            <h4 className="text-sm font-semibold text-ink">The brief</h4>
            <p className="mt-2 text-sm leading-relaxed text-body">
              {item.brief}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">What we did</h4>
            <p className="mt-2 text-sm leading-relaxed text-body">
              {item.approach}
            </p>
          </div>
        </div>
      </div>

      {/* Metric strip. Values are "—" until real ATS figures replace them —
          see content/caseStudies.ts. */}
      <dl className="on-dark grid grid-cols-3 gap-px border-t border-line bg-line-invert">
        {item.metrics.map((metric) => (
          <div key={metric.label} className="bg-teal px-4 py-5 text-center">
            <dd className="font-display text-2xl font-bold tabular-nums text-lime">
              {metric.value}
            </dd>
            <dt className="mt-1.5 text-xs leading-snug text-body-invert">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>
    </article>
  );
}
