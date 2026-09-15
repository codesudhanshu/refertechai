import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "group/card relative flex flex-col rounded-card border border-line " +
  "bg-paper p-6 shadow-card transition-[box-shadow,border-color,transform] " +
  "duration-150 ease-out lg:p-7";

const INTERACTIVE = "hover:-translate-y-0.5 hover:border-primary hover:shadow-card-hover";

export function Card({
  href,
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  const classes = [BASE, href ? INTERACTIVE : "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <article className={classes}>{children}</article>;
}
