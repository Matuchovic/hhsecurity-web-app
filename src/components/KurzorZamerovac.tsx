"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vlastní kurzor ve tvaru vojenského zaměřovače.
 * Sleduje myš, "zamkne se" (zvětší + zezelená) nad odkazy a tlačítky.
 * Vypnuto na dotykových zařízeních a při reduced-motion.
 */
export default function KurzorZamerovac() {
  const kurzorRef = useRef<HTMLDivElement>(null);
  const [aktivni, setAktivni] = useState(false);
  const [zamceno, setZamceno] = useState(false);
  const [klik, setKlik] = useState(false);

  useEffect(() => {
    // vypni na dotyku a reduced-motion
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setAktivni(true);
    document.body.classList.add("ma-vlastni-kurzor");

    let rafId = 0;
    let cilX = window.innerWidth / 2, cilY = window.innerHeight / 2;
    let aktX = cilX, aktY = cilY;

    function onMove(e: MouseEvent) {
      cilX = e.clientX;
      cilY = e.clientY;
      // detekce interaktivního prvku pod kurzorem
      const el = e.target as HTMLElement;
      const interaktivni = el.closest('a, button, input, textarea, [role="button"], .tilt, .ck-switch');
      setZamceno(!!interaktivni);
    }
    function onDown() { setKlik(true); }
    function onUp() { setKlik(false); }

    function tik() {
      // plynulé dobíhání
      aktX += (cilX - aktX) * 0.2;
      aktY += (cilY - aktY) * 0.2;
      if (kurzorRef.current) {
        kurzorRef.current.style.transform = `translate3d(${aktX}px, ${aktY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tik);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafId = requestAnimationFrame(tik);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("ma-vlastni-kurzor");
    };
  }, []);

  if (!aktivni) return null;

  return (
    <div
      ref={kurzorRef}
      className={`kurzor-zamerovac ${zamceno ? "kurzor-zamceno" : ""} ${klik ? "kurzor-klik" : ""}`}
      aria-hidden="true"
    >
      {/* Vnější kruh */}
      <span className="kurzor-kruh" />
      {/* Rohové značky zaměřovače */}
      <span className="kurzor-roh kurzor-roh-tl" />
      <span className="kurzor-roh kurzor-roh-tr" />
      <span className="kurzor-roh kurzor-roh-bl" />
      <span className="kurzor-roh kurzor-roh-br" />
      {/* Střední tečka */}
      <span className="kurzor-tecka" />
      {/* Nitkový kříž */}
      <span className="kurzor-linka kurzor-linka-h" />
      <span className="kurzor-linka kurzor-linka-v" />
    </div>
  );
}
