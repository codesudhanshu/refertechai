"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import type { HeroSlide } from "@/content/heroSlides";

const INTERVAL_MS = 7000;

export function HeroCarousel({ slides }: { slides: readonly HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);

  const go = useCallback(
    (next: number) => setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  // Auto-advance. Skipped entirely when the viewer has asked to reduce motion,
  // when only one slide exists, and while the pointer or focus is inside.
  useEffect(() => {
    if (slides.length < 2 || paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [slides.length, paused]);

  // Left and right arrows move between slides when focus is inside the region.
  useEffect(() => {
    const node = regionRef.current;
    if (!node) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((i) => (i - 1 + slides.length) % slides.length);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((i) => (i + 1) % slides.length);
      }
    }

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [slides.length]);

  if (slides.length === 0) return null;
  const slide = slides[index];

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label="What we do"
      className="on-dark relative overflow-hidden bg-teal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 text-paper"
      />

      <Container className="relative py-16 lg:py-24">
        <div
          key={slide.id}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <div className="reveal">
            <h1 className="text-hero text-balance text-paper">
              {slide.title}{" "}
              <span className="text-lime">{slide.highlight}</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-body-invert">
              {slide.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={slide.primary.href} size="lg">
                {slide.primary.label}
              </Button>
              <Button
                href={slide.secondary.href}
                variant="ghostInvert"
                size="lg"
              >
                {slide.secondary.label}
              </Button>
            </div>
          </div>

          <div className="reveal relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-card border border-line-invert lg:aspect-[5/4]">
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {slides.length > 1 ? (
          <div className="mt-12 flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}: ${s.title} ${s.highlight}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className="group/dot py-2"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-12 bg-lime"
                      : "w-6 bg-paper/30 group-hover/dot:bg-paper/60"
                  }`}
                />
              </button>
            ))}

            <p aria-live="polite" className="sr-only">
              Slide {index + 1} of {slides.length}
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
