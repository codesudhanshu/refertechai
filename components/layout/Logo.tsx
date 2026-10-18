import Image from "next/image";

const SRC = "/logos/refertech-hr-logo.png";
const RATIO = 200.57 / 650;

export function Logo({
  width = 250,
  // Responsive width utilities, for call sites that need a different size per
  // breakpoint. When given these drive the rendered size and `width` above is
  // only the intrinsic dimension next/image needs to build its srcset — pass
  // the largest rendered width so no breakpoint is served an upscaled file.
  //
  // Kept separate from `className` so a caller adding a margin does not
  // silently lose its sizing.
  sizeClassName,
  className = "",
  priority = false,
}: {
  width?: number;
  sizeClassName?: string;
  className?: string;
  priority?: boolean;
}) {
  const height = Math.round(width * RATIO);

  return (
    <Image
      src={SRC}
      alt="ReferTech HR Solution"
      width={width}
      height={height}
      priority={priority}
      className={[sizeClassName ? `h-auto ${sizeClassName}` : "", className]
        .filter(Boolean)
        .join(" ")}
      style={
        sizeClassName ? undefined : { width: `${width}px`, height: `${height}px` }
      }
    />
  );
}
