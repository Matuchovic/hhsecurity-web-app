"use client";

import useReveal from "@/components/useReveal";
import Hero from "@/components/Hero";
import SluzbyNahled from "@/components/SluzbyNahled";
import Statistiky from "@/components/Statistiky";
import Proces from "@/components/Proces";
import ReferenceNahled from "@/components/ReferenceNahled";
import NovinkyNahled from "@/components/NovinkyNahled";

export default function Domu() {
  useReveal();
  return (
    <>
      <Hero />
      <SluzbyNahled />
      <Statistiky />
      <Proces />
      <ReferenceNahled />
      <NovinkyNahled />
    </>
  );
}
