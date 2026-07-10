"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [sirka, setSirka] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const vyska = document.documentElement.scrollHeight - window.innerHeight;
      setSirka(vyska > 0 ? (scrollTop / vyska) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      height: "3px",
      width: `${sirka}%`,
      background: "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
      boxShadow: "0 0 12px rgba(96, 165, 250, 0.7)",
      zIndex: 10000,
      transition: "width 0.1s ease-out",
      pointerEvents: "none",
    }} />
  );
}
