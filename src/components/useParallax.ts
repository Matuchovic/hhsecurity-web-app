"use client";

import { useEffect, RefObject } from "react";

/**
 * Parallax efekt pro hero — vrstvy se posouvají podle pohybu myši.
 * Nastavuje CSS proměnné --parx a --pary (rozsah -1 až 1) na daném prvku.
 * Vypnuto na dotykových zařízeních a při reduced-motion.
 */
export default function useParallax(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // vypni na dotykových zařízeních
    if (window.matchMedia("(hover: none)").matches) return;
    // respektuj reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let cilX = 0, cilY = 0;    // cílová pozice (kde je myš)
    let aktX = 0, aktY = 0;    // aktuální (plynule dobíhá)

    function onMouse(e: MouseEvent) {
      const r = el!.getBoundingClientRect();
      // -1 až 1, střed = 0 (pro parallax)
      cilX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      cilY = ((e.clientY - r.top) / r.height - 0.5) * 2;
      // pozice v procentech pro světlo (reflektor)
      el!.style.setProperty("--svetlo-x", `${((e.clientX - r.left) / r.width) * 100}%`);
      el!.style.setProperty("--svetlo-y", `${((e.clientY - r.top) / r.height) * 100}%`);
      el!.classList.add("hero-svetlo-aktivni");
    }

    function onLeave() {
      el!.classList.remove("hero-svetlo-aktivni");
    }

    function tik() {
      // plynulé dobíhání (lerp) — měkký pohyb
      aktX += (cilX - aktX) * 0.06;
      aktY += (cilY - aktY) * 0.06;
      el!.style.setProperty("--parx", aktX.toFixed(4));
      el!.style.setProperty("--pary", aktY.toFixed(4));
      rafId = requestAnimationFrame(tik);
    }

    el.addEventListener("mousemove", onMouse);
    el.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tik);

    return () => {
      el.removeEventListener("mousemove", onMouse);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [ref]);
}
