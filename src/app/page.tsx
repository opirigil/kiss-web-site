"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && email.trim()) {
      console.log("subscribe:", email);
      setEmail("");
    }
  };

  return (
    <>
      {/* Block 1 — Brand name */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <div
            className="font-anton"
            style={{
              fontSize: "clamp(5rem, 14vw, 13rem)",
              lineHeight: 0.82,
              letterSpacing: "-0.02em",
              color: "#C41E00",
            }}
          >
            WILD
          </div>
          <div
            className="font-anton"
            style={{
              fontSize: "clamp(5rem, 14vw, 13rem)",
              lineHeight: 0.82,
              letterSpacing: "-0.02em",
              color: "#C41E00",
            }}
          >
            CLUB
          </div>
          <div
            className="font-anton"
            style={{
              fontSize: "clamp(5rem, 14vw, 13rem)",
              lineHeight: 0.82,
              letterSpacing: "-0.02em",
              color: "#C41E00",
            }}
          >
            STUDIOS
          </div>
        </div>
        <p
          className="font-barlow font-black italic inline-block"
          style={{
            marginTop: 60,
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            letterSpacing: "-0.02em",
            color: "#F5F0E8",
            lineHeight: 1,
            background: "#C41E00",
            padding: "10px 20px",
          }}
        >
          KISS &mdash; KEEP IT SIMPLE SEXY
        </p>
      </section>

      {/* Block 2 — Statement */}
      <section
        className="w-full text-center"
        style={{ background: "#F5F0E8", padding: "120px 48px" }}
      >
        <h2
          className="font-barlow font-black italic"
          style={{
            fontSize: "clamp(2rem, 6vw, 5rem)",
            lineHeight: 0.82,
            color: "#C41E00",
          }}
        >
          TOUCH ONCE.
        </h2>
        <h2
          className="font-barlow font-black italic"
          style={{
            fontSize: "clamp(2rem, 6vw, 5rem)",
            lineHeight: 0.82,
            color: "#C41E00",
          }}
        >
          REMEMBER FOREVER.
        </h2>
        <p
          className="font-syne uppercase"
          style={{
            marginTop: 60,
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            color: "#C41E00",
          }}
        >
          DESIGNED IN GENEVA
        </p>
      </section>

      {/* Block 3 — CTA */}
      <section
        className="w-full text-center"
        style={{ background: "#F5F0E8", padding: "80px 48px" }}
      >
        <h3
          className="font-barlow font-black italic"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            lineHeight: 0.85,
            color: "#C41E00",
          }}
        >
          SOMETHING IS COMING.
        </h3>
        <p
          className="font-syne uppercase"
          style={{
            marginTop: 20,
            fontSize: "0.52rem",
            letterSpacing: "0.3em",
            color: "#C41E00",
          }}
        >
          BE THE FIRST TO KNOW.
        </p>
        <div className="flex justify-center" style={{ marginTop: 40 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleSubmit}
            placeholder="YOUR EMAIL"
            className="font-syne uppercase text-center outline-none"
            style={{
              width: 320,
              maxWidth: "80vw",
              border: "none",
              borderBottom: "1px solid #C41E00",
              background: "transparent",
              fontSize: "0.5rem",
              letterSpacing: "0.2em",
              color: "#C41E00",
              padding: "8px 0",
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full flex items-center justify-between"
        style={{ background: "#F5F0E8", padding: "24px 48px", borderTop: "1px solid #EEEEEE" }}
      >
        <span
          className="font-syne uppercase"
          style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "#C41E00" }}
        >
          WILD CLUB STUDIOS
        </span>
        <span
          className="font-syne uppercase"
          style={{ fontSize: "0.45rem", letterSpacing: "0.2em", color: "#888888" }}
        >
          MADE IN GENEVA &middot; SS26
        </span>
      </footer>
    </>
  );
}
