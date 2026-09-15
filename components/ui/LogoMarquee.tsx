import { ClientLogo } from "@/components/ui/ClientLogo";

// The track is duplicated so the loop is seamless. With reduced motion the
// animation is absent (see globals.css) and the row becomes a normal
// horizontally scrollable strip.
export function LogoMarquee({
  names,
  invert = false,
}: {
  names: readonly string[];
  invert?: boolean;
}) {
  const track = [...names, ...names];

  return (
    <div
      className="marquee relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <ul className="marquee-track flex w-max items-center gap-12 lg:gap-16">
        {track.map((name, index) => (
          <li
            key={`${name}-${index}`}
            aria-hidden={index >= names.length}
            className="shrink-0 opacity-70 transition-opacity duration-150 hover:opacity-100"
          >
            <ClientLogo name={name} invert={invert} />
          </li>
        ))}
      </ul>
    </div>
  );
}
