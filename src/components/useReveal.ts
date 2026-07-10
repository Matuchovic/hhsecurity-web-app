"use client";

import { useEffect } from "react";

/**
 * Odhalí prvky s třídou .reveal při scrollu do viewportu.
 * Přidá jim třídu .viditelny.
 */
export default function useReveal() {
  useEffect(() => {
    const prvky = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      prvky.forEach((p) => p.classList.add("viditelny"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("viditelny");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    prvky.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, []);
}
