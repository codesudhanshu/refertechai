import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  image,
  stats,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  image: { src: string; alt: string };
  stats?: readonly { value: string; label: string }[];
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-teal">
      {/* Hairline grid on the dark ground. currentColor picks up the band's
          text colour, so it never needs its own hard-coded value. */}
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 text-paper"
      />

      <Container className="relative py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="reveal">
            <p className="flex items-center gap-3 text-eyebrow font-semibold uppercase text-lime">
              <span aria-hidden="true" className="h-px w-8 bg-lime" />
              {eyebrow}
            </p>

            <h1 className="mt-7 text-hero text-balance text-paper">{title}</h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-body-invert">
              {lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={primary.href} size="lg">
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="ghostInvert" size="lg">
                {secondary.label}
              </Button>
            </div>
          </div>

          <div className="reveal relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-card border border-line-invert lg:aspect-[5/4]">
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

        {stats && stats.length > 0 ? (
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line-invert pt-10 lg:mt-20 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-bold tabular-nums text-lime lg:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm text-body-invert">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </Container>
    </section>
  );
}
