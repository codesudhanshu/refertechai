"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { HeroSlide } from "@/content/heroSlides";

const INTERVAL_MS = 7000;

// Left half carries the copy on the teal ground; the right half is the image,
// bleeding to the top, right and bottom edges of the section with no gutter,
// border or corner radius.
//
// The copy column's left padding tracks the 1280px container gutter so the
// headline still lines up with every other section on the page, while the
// image itself ignores the container entirely.
const COPY_PADDING =
  "px-6 lg:ps-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] lg:pe-12";

export function HeroCarousel({ slides }: { slides: readonly HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);

  const go = useCallback(
    (next: number) =>
      setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  // Auto-advance, skipped under reduced motion and while hovered or focused.
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
      className="on-dark relative isolate overflow-hidden bg-teal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="grid lg:grid-cols-[1fr_1fr]">
        {/* Copy */}
        <div className={`relative z-10 py-16 lg:py-24 ${COPY_PADDING}`}>
          <div
            aria-hidden="true"
            className="grid-lines pointer-events-none absolute inset-0 -z-10 text-paper"
          />

          <div key={slide.id} className="reveal max-w-xl">
            <h1 className="text-hero text-balance text-paper">
              {slide.title} <span className="text-lime">{slide.highlight}</span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-body-invert">
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
        </div>

        {/* Image — full bleed to top, right and bottom. No padding, no radius,
            no border. On mobile it stacks underneath at a fixed height. */}
        <div className="relative order-first h-64 w-full sm:h-80 lg:order-none lg:h-auto lg:min-h-[560px]">
          <Image
            key={slide.image.src + slide.id}
            src={slide.image.src}
            alt={slide.image.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
