"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

// Scroll-snap carousel. The track is a real horizontally scrollable list, so
// touch swipe, trackpad and keyboard all work without extra handling — the
// buttons and dots just drive scrollLeft.
export function CardCarousel({
  label,
  children,
  invert = false,
}: {
  label: string;
  children: ReactNode[];
  invert?: boolean;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const node = trackRef.current;
    if (!node) return;
    const total = Math.max(1, Math.ceil(node.scrollWidth / node.clientWidth));
    setPages(total);
    setPage(Math.round(node.scrollLeft / node.clientWidth));
  }, []);

  useEffect(() => {
    measure();
    const node = trackRef.current;
    if (!node) return;

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    node.addEventListener("scroll", measure, { passive: true });

    return () => {
      observer.disconnect();
      node.removeEventListener("scroll", measure);
    };
  }, [measure]);

  const scrollTo = (target: number) => {
    const node = trackRef.current;
    if (!node) return;
    const clamped = Math.max(0, Math.min(target, pages - 1));
    node.scrollTo({
      left: clamped * node.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const atStart = page <= 0;
  const atEnd = page >= pages - 1;

  const arrowBase =
    "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-150 disabled:opacity-35 disabled:cursor-not-allowed";
  const arrowTone = invert
    ? "border-line-invert text-paper hover:border-lime hover:text-lime"
    : "border-line text-ink hover:border-lime-text hover:text-lime-text";

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <li
            key={i}
            className="w-[82%] shrink-0 snap-start sm:w-[47%] lg:w-[calc((100%-3.75rem)/4)]"
          >
            {child}
          </li>
        ))}
      </ul>

      {pages > 1 ? (
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                aria-current={i === page}
                onClick={() => scrollTo(i)}
                className="py-2"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-300 ${
                    i === page
                      ? invert
                        ? "w-10 bg-lime"
                        : "w-10 bg-lime-text"
                      : invert
                        ? "w-5 bg-paper/25"
                        : "w-5 bg-ink/15"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous"
              disabled={atStart}
              onClick={() => scrollTo(page - 1)}
              className={`${arrowBase} ${arrowTone}`}
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <button
              type="button"
              aria-label="Next"
              disabled={atEnd}
              onClick={() => scrollTo(page + 1)}
              className={`${arrowBase} ${arrowTone}`}
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
