import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "inline-flex items-center rounded-full border border-line bg-paper " +
  "px-4 py-2 text-sm text-ink transition-colors duration-150 ease-out";

export function Badge({
  href,
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  const classes = [
    BASE,
    href ? "hover:border-lime-text hover:text-lime-text" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
}
