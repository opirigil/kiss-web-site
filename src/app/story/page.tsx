export default function StoryPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{ background: "#FFFFFF", padding: "120px 48px" }}
    >
      <div className="max-w-2xl">
        <h1
          className="font-anton"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            letterSpacing: "-0.02em",
            color: "#CC2200",
            lineHeight: 1,
          }}
        >
          STORY
        </h1>
        <p
          className="font-syne mt-12"
          style={{ fontSize: "0.6rem", lineHeight: 2.4, letterSpacing: "0.05em", color: "#111111" }}
        >
          WILD CLUB IS NOT A BRAND. IT&apos;S AN ALTER EGO.
          BORN IN GENEVA, BUILT ON SILENCE AND TENSION.
          WE DON&apos;T EXPLAIN. WE DON&apos;T APOLOGIZE.
          WE MAKE PIECES THAT FEEL LIKE A SECOND SKIN &mdash;
          PROVOCATIVE ENOUGH TO START A CONVERSATION,
          QUIET ENOUGH TO END ONE.
        </p>
        <p
          className="font-syne mt-8"
          style={{ fontSize: "0.6rem", lineHeight: 2.4, letterSpacing: "0.05em", color: "#111111" }}
        >
          EACH DROP IS A CHAPTER. EACH NAME IS A CODE.
          KISS IS THE FIRST WORD. MORE WILL FOLLOW.
        </p>
      </div>
    </section>
  );
}
