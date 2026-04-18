"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "HOME", href: "/" },
  { label: "STORY", href: "/story" },
  { label: "CONTACT", href: "/contact" },
];

const HIDDEN_ROUTES = ["/avatar-full", "/avatar-mono", "/assets"];

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (HIDDEN_ROUTES.some((r) => pathname === r)) return null;

  return (
    <>
      <button
        className="fixed top-5 right-6 z-[101] flex flex-col gap-[5px]"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span
          className="block w-5 h-[1.5px] transition-all duration-300"
          style={{
            background: open ? "#F5F0E8" : "#C41E00",
            transform: open ? "rotate(45deg) translateY(6.5px)" : "none",
          }}
        />
        <span
          className="block w-5 h-[1.5px] transition-all duration-300"
          style={{
            background: open ? "#F5F0E8" : "#C41E00",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block w-5 h-[1.5px] transition-all duration-300"
          style={{
            background: open ? "#F5F0E8" : "#C41E00",
            transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none",
          }}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10"
          style={{ background: "#C41E00" }}
        >
          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-anton"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                letterSpacing: "-0.02em",
                color: "#F5F0E8",
                lineHeight: 1,
                textDecoration: "none",
              }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
