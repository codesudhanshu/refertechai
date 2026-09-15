import { Card } from "@/components/ui/Card";
import type { CaseStudy } from "@/content/caseStudies";
import { industries } from "@/content/industries";

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  const industry = industries.find((entry) => entry.slug === item.industry);

  return (
    <Card>
      <span className="self-start rounded-full border border-line px-3 py-1 text-xs font-medium text-body">
        {industry?.name ?? item.industry}
      </span>

      <h3 className="mt-5 text-h3 font-semibold">{item.client}</h3>

      <p className="mt-4 text-sm leading-relaxed text-body">
        <span className="font-medium text-ink">Challenge. </span>
        {item.challenge}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
        <span className="font-medium text-ink">Solution. </span>
        {item.solution}
      </p>

      <div className="mt-7 border-t border-line pt-5">
        {/* 30px at weight 700 — above the 24px floor for accent text. */}
        <p className="font-display text-3xl font-bold tabular-nums text-accent">
          {item.metric.value}
        </p>
        <p className="mt-1 text-sm text-body">{item.metric.label}</p>
      </div>
    </Card>
  );
}
