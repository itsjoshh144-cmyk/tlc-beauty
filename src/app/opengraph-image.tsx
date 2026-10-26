import { ImageResponse } from "next/og";

export const alt = "TLC Beauty Specialist: facials, lash lifts and waxing with Tania in Peacehaven";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f7f1e8", padding: 72, fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
            <span style={{ fontSize: 64, fontStyle: "italic", color: "#7a5c26" }}>TLC</span>
            <span style={{ fontSize: 22, letterSpacing: 8, color: "#2b211c", fontFamily: "sans-serif" }}>BEAUTY SPECIALIST</span>
          </div>
          <div style={{ display: "flex", fontSize: 68, lineHeight: 1.08, color: "#2b211c", maxWidth: 820 }}>
            Brighter skin and lifted lashes, by a Peacehaven therapist with 25 years&rsquo; experience.
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#5e4f45", fontFamily: "sans-serif" }}>
            Allure Beauty Suites · 226 South Coast Road · Peacehaven · NVQ Level 2 &amp; 3
          </div>
        </div>
        <div style={{ display: "flex", width: 260, alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              width: 240,
              height: 380,
              borderRadius: "120px 120px 20px 20px",
              border: "2px solid #a8823f",
              alignItems: "center",
              justifyContent: "center",
              background: "#efe5d6",
            }}
          >
            <span style={{ fontSize: 80, fontStyle: "italic", color: "#a8823f" }}>TLC</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
