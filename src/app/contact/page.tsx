export default function ContactPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{ background: "#F5F0E8", padding: "120px 48px" }}
    >
      <div className="max-w-2xl">
        <h1
          className="font-anton"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            letterSpacing: "-0.02em",
            color: "#C41E00",
            lineHeight: 1,
          }}
        >
          CONTACT
        </h1>
        <p
          className="font-syne mt-12"
          style={{ fontSize: "0.6rem", lineHeight: 2.4, letterSpacing: "0.1em", color: "#111111" }}
        >
          FOR PRESS, COLLABORATIONS, OR ANYTHING ELSE:
        </p>
        <a
          href="mailto:hello@wildclubstudios.com"
          className="font-syne inline-block mt-4 transition-opacity duration-200 hover:opacity-0.7"
          style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#C41E00" }}
        >
          HELLO@WILDCLUBSTUDIOS.COM
        </a>
        <p
          className="font-syne mt-12"
          style={{ fontSize: "0.5rem", letterSpacing: "0.2em", color: "#888888" }}
        >
          GENEVA, SWITZERLAND
        </p>
      </div>
    </section>
  );
}
