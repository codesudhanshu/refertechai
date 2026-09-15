"use client";

import { useId, useState } from "react";

export function Accordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-semibold text-ink">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 shrink-0 text-lime-text transition-transform duration-150 ease-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  &#9662;
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6"
            >
              <p className="max-w-3xl text-body">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
