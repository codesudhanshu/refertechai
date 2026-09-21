import Image from "next/image";

// The supplied logo is a JPEG with the brand navy baked in as its ground, so
// it carries its own background wherever it sits. On the footer's navy band it
// reads as part of the band; on the white header it reads as a navy plate.
const SRC = "/logos/refertech-hr-logo.jpg";
const RATIO = 490 / 159;

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
      alt="ReferTech HR Solution"
      width={Math.round(height * RATIO)}
      height={height}
      priority={priority}
      className={`w-auto ${className}`}
      style={{ height }}
    />
  );
}
