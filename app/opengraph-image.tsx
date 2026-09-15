import { ImageResponse } from "next/og";
import { company } from "@/content/company";

// Generated at build time rather than shipped as a binary asset, so the share
// card never drifts out of sync with the brand tokens. Applies to every route
// that does not define its own opengraph-image.
export const alt = `${company.name} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(135deg, rgba(79,70,229,0.10), rgba(6,182,212,0.10))",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5 }}>
            <div style={{ width: 9, height: 16, background: "#4f46e5" }} />
            <div style={{ width: 9, height: 27, background: "#4f46e5" }} />
            <div style={{ width: 9, height: 36, background: "#06b6d4" }} />
          </div>
          {/* Satori requires an explicit display on any element with more
              than one child, so this stays a flex row. */}
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#0b1220",
            }}
          >
            <span>REFERTECH</span>
            <span style={{ color: "#4f46e5" }}>AI</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 56, height: 3, background: "#06b6d4" }} />
            <div
              style={{
                fontSize: 22,
                letterSpacing: 4,
                color: "#4f46e5",
                fontWeight: 600,
              }}
            >
              AI · SOFTWARE · CLOUD · WEB3
            </div>
          </div>

          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#0b1220",
              maxWidth: 940,
            }}
          >
            {company.tagline}
          </div>

          <div style={{ fontSize: 26, color: "#475569" }}>
            {company.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
