import type { CaseStudy } from "@/content/caseStudies";
import { industries } from "@/content/industries";

// A recruitment mandate reads as: who the client was, what was being hired,
// what made it hard, and what we did about it.
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
    </article>
  );
}
