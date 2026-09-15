// Names render as plain typographic boxes. No real company logo, logotype or
// trademark is reproduced anywhere on the site.
//
// The track is duplicated so the loop is seamless. With reduced motion the
// animation is absent (see globals.css) and the row becomes a normal
// horizontally scrollable strip.
export function LogoMarquee({ names }: { names: readonly string[] }) {
  const track = [...names, ...names];

  return (
    <div
      className="marquee relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <ul className="marquee-track flex w-max items-center gap-4">
        {track.map((name, index) => (
          <li
            key={`${name}-${index}`}
            aria-hidden={index >= names.length}
            className="shrink-0 rounded-btn border border-line px-6 py-3 font-display text-sm font-semibold tracking-tight whitespace-nowrap text-ink/70"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
