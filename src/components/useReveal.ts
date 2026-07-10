"use client";

import { useEffect } from "react";

/**
 * Odhalí prvky s třídou .reveal při scrollu do viewportu (přidá .viditelny).
 * Robustní verze — odhalí prvek, až když k němu uživatel doscrolluje,
 * a re-scanuje po plném načtení stránky.
 */
export default function useReveal() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    function nastav() {
      const prvky = Array.from(document.querySelectorAll(".reveal:not(.viditelny)"));
      if (prvky.length === 0) return;

      if (!("IntersectionObserver" in window)) {
        prvky.forEach((p) => p.classList.add("viditelny"));
        return;
      }

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("viditelny");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );

      prvky.forEach((p) => observer!.observe(p));
    }

    const t = setTimeout(nastav, 100);
    window.addEventListener("load", nastav);

    return () => {
      clearTimeout(t);
      window.removeEventListener("load", nastav);
      observer?.disconnect();
    };
  }, []);
}
