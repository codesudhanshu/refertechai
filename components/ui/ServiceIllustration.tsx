// Flat geometric illustrations, one per service, drawn in the brand palette.
//
// No stock illustration set exists in this repo, and the reference sites'
// artwork is theirs. These are original vector scenes so the service cards
// have a real visual rather than an empty tinted box.

const LIME = "#c7f03d";
const TEAL = "#0e2a2e";
const SOFT = "#e3fba8";
const MID = "#16413f";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 200 140"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
}

const SCENES: Record<string, React.ReactNode> = {
  // Strategy — ascending path with a flag
  "it-strategy-advisory": (
    <>
      <path d="M20 112h160" stroke={MID} strokeWidth="2" opacity="0.25" />
      <path
        d="M28 104 L70 78 L106 88 L146 44"
        stroke={TEAL}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [28, 104],
        [70, 78],
        [106, 88],
      ].map(([x, y]) => (
        <circle key={`${x}`} cx={x} cy={y} r="6" fill={SOFT} stroke={TEAL} strokeWidth="3" />
      ))}
      <circle cx="146" cy="44" r="9" fill={LIME} stroke={TEAL} strokeWidth="3" />
      <path d="M146 44v-24" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
      <path d="M146 20h26l-7 8 7 8h-26z" fill={LIME} stroke={TEAL} strokeWidth="2.5" strokeLinejoin="round" />
    </>
  ),

  // Transformation — old blocks morphing into new
  "digital-transformation": (
    <>
      <rect x="22" y="48" width="28" height="28" rx="3" fill={MID} opacity="0.35" />
      <rect x="22" y="82" width="28" height="28" rx="3" fill={MID} opacity="0.35" />
      <path d="M64 78h48" stroke={TEAL} strokeWidth="4" strokeLinecap="round" />
      <path d="M104 68l12 10-12 10" stroke={TEAL} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="126" y="34" width="52" height="42" rx="6" fill={LIME} stroke={TEAL} strokeWidth="3" />
      <rect x="126" y="84" width="52" height="26" rx="6" fill={SOFT} stroke={TEAL} strokeWidth="3" />
      <path d="M138 50h28M138 60h18" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
    </>
  ),

  // Cloud — cloud over stacked infrastructure
  "cloud-infrastructure": (
    <>
      <path
        d="M62 62a20 20 0 0 1 39-6 16 16 0 0 1 22 15 14 14 0 0 1-3 27H68a18 18 0 0 1-6-36z"
        fill={LIME}
        stroke={TEAL}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="56"
          y={104 + i * 0}
          width="88"
          height="12"
          rx="3"
          fill={i === 0 ? SOFT : MID}
          stroke={TEAL}
          strokeWidth="2.5"
          transform={`translate(0 ${i * -0})`}
          opacity={i === 0 ? 1 : 0}
        />
      ))}
      <rect x="56" y="104" width="88" height="13" rx="3" fill={SOFT} stroke={TEAL} strokeWidth="2.5" />
      <circle cx="68" cy="110.5" r="2.5" fill={TEAL} />
      <path d="M100 98v6" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
    </>
  ),

  // Security — shield with a check
  "cybersecurity-consulting": (
    <>
      <path
        d="M100 22l44 16v34c0 26-19 42-44 50-25-8-44-24-44-50V38l44-16z"
        fill={SOFT}
        stroke={TEAL}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M100 32l34 12v28c0 20-15 33-34 40-19-7-34-20-34-40V44l34-12z"
        fill={LIME}
        opacity="0.55"
      />
      <path
        d="M82 74l13 13 26-27"
        stroke={TEAL}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // Data — bar chart with a trend line
  "data-ai-analytics": (
    <>
      <path d="M26 114h148" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
      <path d="M26 114V32" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
      {[
        [44, 82],
        [74, 62],
        [104, 92],
        [134, 46],
      ].map(([x, y], i) => (
        <rect
          key={x}
          x={x}
          y={y}
          width="22"
          height={114 - y}
          rx="3"
          fill={i % 2 ? SOFT : LIME}
          stroke={TEAL}
          strokeWidth="2.5"
        />
      ))}
      <path
        d="M55 74 L85 54 L115 84 L145 38"
        stroke={TEAL}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 5"
      />
    </>
  ),

  // Integration — nodes joined to a hub
  "system-integration": (
    <>
      {[
        [40, 40],
        [160, 40],
        [40, 104],
        [160, 104],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path d={`M${x} ${y} L100 72`} stroke={TEAL} strokeWidth="2.5" opacity="0.5" />
          <rect x={x - 15} y={y - 12} width="30" height="24" rx="5" fill={SOFT} stroke={TEAL} strokeWidth="2.5" />
        </g>
      ))}
      <circle cx="100" cy="72" r="22" fill={LIME} stroke={TEAL} strokeWidth="3.5" />
      <path d="M92 72h16M100 64v16" stroke={TEAL} strokeWidth="3.5" strokeLinecap="round" />
    </>
  ),

  // Support — headset and a pulse line
  "managed-it-support": (
    <>
      <path
        d="M58 84V70a42 42 0 0 1 84 0v14"
        stroke={TEAL}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="44" y="78" width="26" height="34" rx="9" fill={LIME} stroke={TEAL} strokeWidth="3" />
      <rect x="130" y="78" width="26" height="34" rx="9" fill={LIME} stroke={TEAL} strokeWidth="3" />
      <path
        d="M76 100h14l7-14 10 26 7-12h12"
        stroke={TEAL}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // Staff augmentation — a team with one added figure
  "staff-augmentation": (
    <>
      {[46, 82].map((x) => (
        <g key={x}>
          <circle cx={x} cy="56" r="13" fill={SOFT} stroke={TEAL} strokeWidth="3" />
          <path
            d={`M${x - 20} 108v-9a20 20 0 0 1 40 0v9z`}
            fill={SOFT}
            stroke={TEAL}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <circle cx="126" cy="56" r="13" fill={LIME} stroke={TEAL} strokeWidth="3" />
      <path
        d="M106 108v-9a20 20 0 0 1 40 0v9z"
        fill={LIME}
        stroke={TEAL}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="160" cy="44" r="14" fill={TEAL} />
      <path d="M154 44h12M160 38v12" stroke={LIME} strokeWidth="3.5" strokeLinecap="round" />
    </>
  ),

  // Hiring — a profile card passing a check
  "tech-talent-staffing": (
    <>
      <rect x="34" y="32" width="96" height="76" rx="8" fill={SOFT} stroke={TEAL} strokeWidth="3" />
      <circle cx="62" cy="58" r="12" fill={LIME} stroke={TEAL} strokeWidth="3" />
      <path d="M48 92v-4a14 14 0 0 1 28 0v4z" fill={LIME} stroke={TEAL} strokeWidth="3" strokeLinejoin="round" />
      <path d="M90 52h30M90 64h30M90 76h18" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
      <circle cx="146" cy="92" r="22" fill={LIME} stroke={TEAL} strokeWidth="3.5" />
      <path d="M136 92l7 8 14-16" stroke={TEAL} strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export function ServiceIllustration({ slug }: { slug: string }) {
  const scene = SCENES[slug] ?? SCENES["it-strategy-advisory"];
  return <Frame>{scene}</Frame>;
}
