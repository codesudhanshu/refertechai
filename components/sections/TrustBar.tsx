import { Container } from "@/components/layout/Container";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

export function TrustBar({ names }: { names: readonly string[] }) {
  if (names.length === 0) return null;

  return (
    <section className="border-b border-line bg-paper py-10">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
          <p className="shrink-0 text-eyebrow font-semibold uppercase text-body">
            Trusted by teams building at scale
          </p>
          <div className="min-w-0 flex-1">
            <LogoMarquee names={names} />
          </div>
        </div>
      </Container>
    </section>
  );
}
