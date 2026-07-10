"use client";

import { usePocitadlo } from "./usePocitadlo";

export default function Cislo({ hodnota, className }: { hodnota: string; className?: string }) {
  const { ref, zobraz } = usePocitadlo(hodnota);
  return <span ref={ref} className={className}>{zobraz}</span>;
}
