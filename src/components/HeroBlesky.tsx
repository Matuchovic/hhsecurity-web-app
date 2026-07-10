"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Interaktivní blesky v hero — občas šlehne blesk, při pohybu myši
 * občas směrem ke kurzoru. Vypnuto na dotyku a reduced-motion.
 */
export default function HeroBlesky() {
  const [zablesk, setZablesk] = useState(false);
  const [aktivni, setAktivni] = useState(0); // který blesk svítí (1-3)
  const povoleno = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) povoleno.current = false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) povoleno.current = false;
    if (!povoleno.current) return;

    let timeout: ReturnType<typeof setTimeout>;

    function udeřit() {
      // náhodný blesk 1-3
      const ktery = 1 + Math.floor(Math.random() * 3);
      setAktivni(ktery);
      setZablesk(true);
      // záblesk zhasne rychle
      setTimeout(() => setZablesk(false), 180);
      setTimeout(() => setAktivni(0), 400);
      // další blesk za náhodný čas (4-10s)
      timeout = setTimeout(udeřit, 4000 + Math.random() * 6000);
    }

    // první blesk po 2-4s
    timeout = setTimeout(udeřit, 2000 + Math.random() * 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hero-blesky" aria-hidden="true">
      {/* Záblesk celé scény */}
      <div className={`hero-zablesk ${zablesk ? "hero-zablesk-on" : ""}`} />

      {/* SVG blesky */}
      <svg className="hero-blesky-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <path
          className={`hero-blesk ${aktivni === 1 ? "hero-blesk-on" : ""}`}
          d="M 1050 -20 L 1010 220 L 1075 235 L 1000 480 L 1055 250 L 990 235 L 1050 -20"
        />
        <path
          className={`hero-blesk ${aktivni === 2 ? "hero-blesk-on" : ""}`}
          d="M 1250 -20 L 1220 180 L 1275 195 L 1210 400 L 1265 210 L 1215 195 L 1250 -20"
        />
        <path
          className={`hero-blesk ${aktivni === 3 ? "hero-blesk-on" : ""}`}
          d="M 850 -20 L 825 160 L 880 172 L 820 340 L 862 185 L 812 172 L 850 -20"
        />
      </svg>
    </div>
  );
}
