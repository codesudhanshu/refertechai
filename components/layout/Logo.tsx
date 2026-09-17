import Image from "next/image";

// The supplied logo is a JPEG on a white ground, so it only sits correctly on
// light surfaces. Dark bands (the footer) keep the drawn Mark + Wordmark.
const SRC = "/logos/refertech-logo.jpg";
const RATIO = 1188 / 342;

export function Logo({
  height = 40,
  className = "",
  priority = false,
}: {
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={SRC}
      alt="ReferTech AI Solution"
      width={Math.round(height * RATIO)}
      height={height}
      priority={priority}
      className={`w-auto ${className}`}
      style={{ height }}
    />
  );
}
