// Logo lockups for the client strip: a geometric mark plus a wordmark.
//
// These are INVENTED brands. No real company logo or trademark is reproduced
// anywhere on this site — reproducing one for a company that is not a client
// would be both a trademark problem and a false claim. The marks are drawn
// here so the strip reads as a real logo row rather than a list of text boxes.
//
// The mark is chosen deterministically from the name, so a given client always
// renders the same shape.

const MARKS = [
  // concentric ring
  (c: string) => (
    <>
      <circle cx="16" cy="16" r="11" stroke={c} strokeWidth="2.5" fill="none" />
      <circle cx="16" cy="16" r="4" fill={c} />
    </>
  ),
  // rotated square
  (c: string) => (
    <rect
      x="16"
      y="4"
      width="17"
      height="17"
      rx="2"
      fill={c}
      transform="rotate(45 16 4)"
    />
  ),
  // stacked bars
  (c: string) => (
    <>
      <rect x="5" y="19" width="5" height="9" rx="1.5" fill={c} />
      <rect x="13" y="12" width="5" height="16" rx="1.5" fill={c} />
      <rect x="21" y="5" width="5" height="23" rx="1.5" fill={c} />
    </>
  ),
  // hexagon
  (c: string) => (
    <path
      d="M16 3l11 6.5v13L16 29 5 22.5v-13L16 3z"
      stroke={c}
      strokeWidth="2.5"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  // interlocking chevrons
  (c: string) => (
    <>
      <path
        d="M6 21l10-10 10 10"
        stroke={c}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 28l10-10 10 10"
        stroke={c}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </>
  ),
  // quartered square
  (c: string) => (
    <>
      <rect x="4" y="4" width="11" height="11" rx="2" fill={c} />
      <rect x="17" y="4" width="11" height="11" rx="2" fill={c} opacity="0.45" />
      <rect x="4" y="17" width="11" height="11" rx="2" fill={c} opacity="0.45" />
      <rect x="17" y="17" width="11" height="11" rx="2" fill={c} />
    </>
  ),
  // arc pair
  (c: string) => (
    <>
      <path
        d="M16 4a12 12 0 0 1 0 24"
        stroke={c}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M16 10a6 6 0 0 0 0 12"
        stroke={c}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </>
  ),
  // dot grid
  (c: string) => (
    <>
      {[6, 16, 26].map((x) =>
        [6, 16, 26].map((y) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={x === 16 && y === 16 ? 4 : 2.5}
            fill={c}
            opacity={x === 16 && y === 16 ? 1 : 0.5}
          />
        )),
      )}
    </>
  ),
];

function markIndex(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i += 1) sum += name.charCodeAt(i);
  return sum % MARKS.length;
}

export function ClientLogo({
  name,
  invert = false,
}: {
  name: string;
  invert?: boolean;
}) {
  const colour = invert ? "#b8ccc4" : "#4a5a53";
  const draw = MARKS[markIndex(name)];

  return (
    <span className="flex items-center gap-3 whitespace-nowrap">
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        aria-hidden="true"
        className="shrink-0"
      >
        {draw(colour)}
      </svg>
      <span
        className={`font-display text-base font-semibold tracking-tight ${
          invert ? "text-body-invert" : "text-body"
        }`}
      >
        {name}
      </span>
    </span>
  );
}
