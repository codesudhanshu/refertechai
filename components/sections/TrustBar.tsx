import { Container } from "@/components/layout/Container";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

// Logos only — no label above them. The strip reads as a logo row without a
// tagline telling the reader what it is.
export function TrustBar({
  names,
  invert = false,
}: {
  names: readonly string[];
  invert?: boolean;
}) {
  if (names.length === 0) return null;

  return (
    <section
      className={
        invert
          ? "on-dark border-b border-line-invert bg-teal py-12"
          : "border-b border-line bg-paper py-12"
      }
    >
      <Container>
        <LogoMarquee names={names} invert={invert} />
      </Container>
    </section>
  );
}
