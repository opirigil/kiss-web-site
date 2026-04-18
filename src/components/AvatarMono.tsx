export default function AvatarMono({ size = 320 }: { size?: number }) {
  const wSize = size * 0.48;
  const subSize = size * 0.045;
  return (
    <div
      id="avatar-mono"
      style={{
        width: size,
        height: size,
        background: "#F5F0E8",
        color: "#C41E00",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="font-anton"
        style={{
          fontSize: wSize,
          letterSpacing: "-0.04em",
          lineHeight: 0.9,
        }}
      >
        W
      </span>
      <span
        className="font-syne"
        style={{
          fontSize: subSize,
          letterSpacing: "0.3em",
          color: "#C41E00",
          opacity: 0.6,
          marginTop: size * 0.02,
          textTransform: "uppercase",
        }}
      >
        CLUB STUDIOS
      </span>
    </div>
  );
}
