export default function AvatarFull({ size = 320 }: { size?: number }) {
  const fontSize = size * 0.2;
  return (
    <div
      id="avatar-full"
      className="font-anton"
      style={{
        width: size,
        height: size,
        background: "#F5F0E8",
        color: "#C41E00",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "-0.02em",
        lineHeight: 0.85,
        fontSize,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <span>WILD</span>
      <span>CLUB</span>
      <span>STUDIOS</span>
    </div>
  );
}
