import { ImageResponse } from "next/og";
export const alt = "JV Fitness & Wellness Club — Feel better. Get stronger. Live more.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ background: "#f6f9ef", color: "#123e2d", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "70px 85px", fontFamily: "sans-serif" }}><div style={{ fontSize: 25, marginBottom: 38, display: "flex" }}>JV FITNESS & WELLNESS CLUB</div><div style={{ fontSize: 79, letterSpacing: -4, lineHeight: 1.05, display: "flex", flexDirection: "column" }}><span>Feel better.</span><span>Get stronger.</span><span style={{ color: "#2d703e" }}>Live more.</span></div><div style={{ display: "flex", marginTop: 35, fontSize: 20, color: "#5b6e55" }}>Personal coaching. Better nutrition. Your community in Adipur.</div></div>, size);
}
