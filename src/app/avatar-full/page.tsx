"use client";

import { useEffect } from "react";
import AvatarFull from "@/components/AvatarFull";

export default function AvatarFullPage() {
  useEffect(() => {
    document.body.classList.add("no-chrome");
    return () => document.body.classList.remove("no-chrome");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F5F0E8",
      }}
    >
      <AvatarFull size={320} />
    </div>
  );
}
