"use client";

import { useEffect } from "react";
import AvatarMono from "@/components/AvatarMono";

export default function AvatarMonoPage() {
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
      <AvatarMono size={320} />
    </div>
  );
}
