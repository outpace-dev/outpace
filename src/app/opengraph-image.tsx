import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Outpace — Full-Spectrum Business Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0f1a",
          backgroundImage:
            "radial-gradient(circle at 60% 40%, rgba(34, 211, 238, 0.08) 0%, transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            OUTPACE
            <span style={{ color: "#22d3ee" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              maxWidth: 700,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Full-Spectrum Business Development
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: 18,
              color: "#22d3ee",
              display: "flex",
              gap: "24px",
            }}
          >
            <span>Strategy</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>Lead Generation</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>Digital</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>Systems</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>Content</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#64748b",
          }}
        >
          outpace.ie
        </div>
      </div>
    ),
    { ...size }
  );
}
