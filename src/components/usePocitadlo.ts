"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animované počítadlo — číslo naskáče od 0 k cíli, když je prvek viditelný.
 * Podporuje formáty jako "500+", "99,9%", "24/7", "15+".
 */
export function usePocitadlo(cil: string, trvani = 1800) {
  const [zobraz, setZobraz] = useState(cil);
  const ref = useRef<HTMLSpanElement>(null);
  const spusteno = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // rozeber cíl: číslo + přípona/oddělovač
    const match = cil.match(/^([\d,\.]+)(.*)$/);
    if (!match) {
      setZobraz(cil);
      return;
    }

    // speciál: "24/7" necháme být
    if (cil.includes("/")) {
      setZobraz(cil);
      return;
    }

    const cisloText = match[1].replace(",", ".");
    const ciloveCislo = parseFloat(cisloText);
    const pripona = match[2];
    const desetinne = cisloText.includes(".");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !spusteno.current) {
            spusteno.current = true;
            const start = performance.now();
            const animuj = (now: number) => {
              const uplynulo = now - start;
              const postup = Math.min(1, uplynulo / trvani);
              // easeOutExpo pro pěkný dojezd
              const eased = postup === 1 ? 1 : 1 - Math.pow(2, -10 * postup);
              const aktualni = ciloveCislo * eased;
              const formatovane = desetinne
                ? aktualni.toFixed(1).replace(".", ",")
                : Math.round(aktualni).toString();
              setZobraz(formatovane + pripona);
              if (postup < 1) requestAnimationFrame(animuj);
              else setZobraz(cil);
            };
            requestAnimationFrame(animuj);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [cil, trvani]);

  return { ref, zobraz };
}
