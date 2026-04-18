"use client";

import { useEffect, useState } from "react";
import AvatarFull from "@/components/AvatarFull";
import AvatarMono from "@/components/AvatarMono";

async function downloadAvatar(type: "full" | "mono") {
  // Wait for fonts to be fully loaded
  await document.fonts.ready;

  const size = 320;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Background
  ctx.fillStyle = "#F5F0E8";
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = "#C41E00";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (type === "full") {
    const fontSize = size * 0.2;
    ctx.font = `400 ${fontSize}px Anton, sans-serif`;
    const lineHeight = fontSize * 0.85;
    const totalHeight = lineHeight * 3;
    const startY = size / 2 - totalHeight / 2 + lineHeight / 2;
    const lines = ["WILD", "CLUB", "STUDIOS"];
    // Simulate negative letter-spacing via slight horizontal scale
    ctx.save();
    lines.forEach((line, i) => {
      ctx.fillText(line, size / 2, startY + i * lineHeight);
    });
    ctx.restore();
  } else {
    // Mono: big W + small CLUB STUDIOS
    const wSize = size * 0.48;
    ctx.font = `400 ${wSize}px Anton, sans-serif`;
    const subSize = size * 0.045;
    const subHeight = subSize * 1.2;
    const gap = size * 0.02;
    // Compute total block height (W + gap + subtitle)
    const wHeight = wSize * 0.7; // visual height approximation
    const total = wHeight + gap + subHeight;
    const centerY = size / 2;
    const wY = centerY - total / 2 + wHeight / 2;
    const subY = centerY + total / 2 - subHeight / 2;

    ctx.fillText("W", size / 2, wY);

    ctx.font = `400 ${subSize}px "Syne Mono", monospace`;
    ctx.globalAlpha = 0.6;
    // Letter spacing via manual rendering
    const text = "CLUB STUDIOS";
    const spacing = subSize * 0.3;
    const chars = text.split("");
    const widths = chars.map((c) => ctx.measureText(c).width);
    const totalWidth = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1);
    let x = size / 2 - totalWidth / 2;
    chars.forEach((c, i) => {
      ctx.fillText(c, x + widths[i] / 2, subY);
      x += widths[i] + spacing;
    });
    ctx.globalAlpha = 1;
  }

  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wildclubstudios-avatar-${type}.png`;
    a.click();
    URL.revokeObjectURL(url);
  }, "image/png");
}

export default function AssetsPage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-chrome");
    document.fonts.ready.then(() => setReady(true));
    return () => document.body.classList.remove("no-chrome");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 48px",
        background: "#F5F0E8",
      }}
    >
      <h1
        className="font-anton"
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          letterSpacing: "-0.02em",
          color: "#C41E00",
          lineHeight: 1,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        ASSETS
      </h1>
      <p
        className="font-syne"
        style={{
          fontSize: "0.5rem",
          letterSpacing: "0.3em",
          color: "#111111",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 64,
        }}
      >
        Instagram avatars &mdash; 320&times;320
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 80,
          maxWidth: 900,
          margin: "0 auto",
          justifyItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ borderRadius: "50%", overflow: "hidden" }}>
            <AvatarFull size={320} />
          </div>
          <p
            className="font-syne"
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.3em",
              color: "#111111",
              textTransform: "uppercase",
            }}
          >
            Version A &mdash; Full
          </p>
          <button
            className="font-syne"
            onClick={() => downloadAvatar("full")}
            disabled={!ready}
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              color: "#F5F0E8",
              background: "#C41E00",
              border: "none",
              padding: "12px 24px",
              cursor: ready ? "pointer" : "wait",
              textTransform: "uppercase",
              opacity: ready ? 1 : 0.5,
            }}
          >
            Download PNG
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ borderRadius: "50%", overflow: "hidden" }}>
            <AvatarMono size={320} />
          </div>
          <p
            className="font-syne"
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.3em",
              color: "#111111",
              textTransform: "uppercase",
            }}
          >
            Version B &mdash; Mono
          </p>
          <button
            className="font-syne"
            onClick={() => downloadAvatar("mono")}
            disabled={!ready}
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              color: "#F5F0E8",
              background: "#C41E00",
              border: "none",
              padding: "12px 24px",
              cursor: ready ? "pointer" : "wait",
              textTransform: "uppercase",
              opacity: ready ? 1 : 0.5,
            }}
          >
            Download PNG
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: 600,
          margin: "80px auto 0",
          textAlign: "center",
        }}
      >
        <p
          className="font-syne"
          style={{
            fontSize: "0.5rem",
            letterSpacing: "0.2em",
            color: "#888888",
            textTransform: "uppercase",
            lineHeight: 2,
          }}
        >
          Clean export &mdash; No grain, no border.
          <br />
          Preview is circular to match Instagram display.
          <br />
          Direct routes: /avatar-full &mdash; /avatar-mono
        </p>
      </div>
    </div>
  );
}
