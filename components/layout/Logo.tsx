import Image from "next/image";

const SRC = "/logos/refertech-hr-logo.png";

export function Logo({
  width = 250,
  className = "",
  priority = false,
}: {
  width?: number;
  className?: string;
  priority?: boolean;
}) {
  const height = Math.round(width * (200.57 / 650));

  return (
    <Image
      src={SRC}
      alt="ReferTech HR Solution"
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
}