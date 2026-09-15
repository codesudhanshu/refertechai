import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function Hero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  image: { src: string; alt: string };
}) {
  return (
    <section className="gradient-wash relative overflow-hidden border-b border-line">
      {/* Hairline grid, barely visible. Gives the ground some structure
          without competing with the type. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "88px 100%",
        }}
      />

      <Container className="relative py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="reveal">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 text-hero text-balance">{title}</h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-body">
              {lead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={primary.href} size="lg">
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="ghost" size="lg">
                {secondary.label}
              </Button>
            </div>
          </div>

          <div className="reveal relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-card border border-line shadow-card-hover lg:aspect-[5/4]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
