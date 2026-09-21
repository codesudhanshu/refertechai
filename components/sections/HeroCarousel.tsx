"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { HeroSlide } from "@/content/heroSlides";

const INTERVAL_MS = 5000;

// One full-bleed image across the whole band, with the brand navy laid over
// it as a gradient that is opaque on the left and clear on the right. The copy
// sits on the opaque end, so the photograph reads as one picture rather than a
// panel butted against a colour block.
//
// The copy column's left padding tracks the 1280px container gutter so the
// headline still lines up with every other section on the page, while the
// image itself ignores the container entirely.
const COPY_PADDING =
  "px-6 lg:ps-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] lg:pe-12";

export function HeroCarousel({ slides }: { slides: readonly HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  // Auto-advance stops for good once the viewer drives the carousel
  // themselves. Hovering or focusing no longer pauses it.
  const [userTook, setUserTook] = useState(false);
  const regionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const go = useCallback(
    (next: number) => {
      setUserTook(true);
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  // Auto-advance, skipped under reduced motion and once the viewer has taken
  // control of the carousel.
  useEffect(() => {
    if (slides.length < 2 || userTook) return;
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
  }, [slides.length, userTook]);

  useEffect(() => {
    const node = regionRef.current;
    if (!node) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setUserTook(true);
        setIndex((i) => (i - 1 + slides.length) % slides.length);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setUserTook(true);
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
    >
      {/* Image, full bleed behind everything. */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence initial={false}>
          <motion.span
            key={slide.id}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Navy over the image. Left to right on a wide screen, where the copy
          sits beside the picture; top to bottom below that, where the copy
          sits on top of it and needs cover across the full width. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-teal via-teal/90 to-teal/75 lg:bg-gradient-to-r lg:from-teal lg:from-30% lg:via-teal/85 lg:via-55% lg:to-transparent lg:to-85%"
      />

      <div className={`relative py-16 lg:min-h-[520px] lg:py-24 ${COPY_PADDING}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            className="max-w-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h1 className="text-hero text-balance text-paper">
              {slide.title} <span className="text-lime">{slide.highlight}</span>
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-body-invert">
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
          </motion.div>
        </AnimatePresence>

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
    </section>
  );
}
