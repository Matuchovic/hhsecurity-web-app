"use client";

import { useEffect } from "react";

/**
 * 3D tilt efekt — prvky s třídou .tilt se naklánějí za kurzorem myši.
 * Přidává lesklý odlesk. Na dotykových zařízeních vypnuto.
 */
export default function useTilt() {
  useEffect(() => {
    // vypni na dotykových zařízeních
    if (window.matchMedia("(hover: none)").matches) return;

    const prvky = document.querySelectorAll<HTMLElement>(".tilt");

    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    prvky.forEach((el) => {
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotX = (y - 0.5) * -8; // náklon nahoru/dolů
        const rotY = (x - 0.5) * 8;  // náklon vlevo/vpravo
        el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
        // lesk
        el.style.setProperty("--lesk-x", `${x * 100}%`);
        el.style.setProperty("--lesk-y", `${y * 100}%`);
      };
      const leave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);
}
