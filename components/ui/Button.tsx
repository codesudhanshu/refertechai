import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-btn " +
  "font-medium transition-[background-color,border-color,color,box-shadow] " +
  "duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-card",
  outline:
    "border border-line bg-paper text-ink hover:border-primary hover:text-primary",
  ghost: "text-primary hover:text-primary-dark",
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
  const classes = [
    BASE,
    VARIANTS[variant],
    variant === "ghost" ? GHOST_SIZES[size] : SIZES[size],
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
