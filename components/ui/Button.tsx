import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-btn " +
  "font-medium transition-[background-color,border-color,color,box-shadow] " +
  "duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-60";

// Lime is a FILL, never a text colour on a light ground — measured 1.32:1 on
// white. Ink text on a lime fill is 14.19:1, so that is the primary button.
const VARIANTS = {
  primary: "bg-lime text-ink hover:bg-lime-soft",
  dark: "bg-teal text-paper hover:bg-ink",
  outline:
    "border border-line bg-paper text-ink hover:border-lime-text hover:text-lime-text",
  // For use inside a teal or ink band.
  outlineInvert:
    "border border-line-invert bg-transparent text-paper hover:border-lime hover:text-lime",
  ghost: "text-lime-text hover:text-lime-deep",
  ghostInvert: "text-lime hover:text-lime-soft",
} as const;

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

// Ghost reads as a text link, so it should not carry button padding.
const GHOST_SIZES = {
  md: "text-sm",
  lg: "text-base",
} as const;

export function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-150 ease-out group-hover/btn:translate-x-0.5"
    >
      &#8594;
    </span>
  );
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  children,
}: {
  href?: string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  const isGhost = variant === "ghost" || variant === "ghostInvert";
  const classes = [
    BASE,
    VARIANTS[variant],
    isGhost ? GHOST_SIZES[size] : SIZES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const body = (
    <>
      {children}
      {arrow ? <Arrow /> : null}
    </>
  );

  if (href) {
    const external = href.startsWith("mailto:") || href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={classes}>
          {body}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {body}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {body}
    </button>
  );
}
