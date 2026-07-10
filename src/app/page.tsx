"use client";

import useReveal from "@/components/useReveal";
import Hero from "@/components/Hero";
import SluzbyNahled from "@/components/SluzbyNahled";

export default function Domu() {
  useReveal();
  return (
    <>
      <Hero />
      <SluzbyNahled />
    </>
  );
}
