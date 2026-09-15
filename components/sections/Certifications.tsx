import { Container } from "@/components/layout/Container";
import { certifications } from "@/content/presence";

// A certification the company does not hold is a serious false claim, not a
// soft placeholder. Entries with `held: false` render a visible "not yet
// certified" state, so the band can be seen in the design without asserting
// a credential. Flip `held` in content/presence.ts once a certificate exists.
export function Certifications() {
  if (certifications.length === 0) return null;

  const anyUnverified = certifications.some((item) => !item.held);

  return (
    <section className="border-t border-line bg-surface py-14">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
          <p className="shrink-0 text-eyebrow font-semibold uppercase text-body lg:w-48">
            Compliance &amp; standards
          </p>

          <div className="min-w-0 flex-1">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((item) => (
                <li
                  key={item.name}
                  className="rounded-card border border-line bg-paper px-5 py-4"
                >
                  <p className="font-display text-base font-semibold text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-body">{item.detail}</p>

                  {item.held ? null : (
                    <p className="mt-3 inline-flex rounded-full border border-line px-2.5 py-1 text-xs font-medium text-body">
                      Not yet certified
                    </p>
                  )}
                </li>
              ))}
            </ul>

            {anyUnverified ? (
              <p className="mt-6 text-sm text-body">
                Items marked &ldquo;not yet certified&rdquo; are targets, not
                held credentials.
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
