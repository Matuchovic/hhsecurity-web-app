"use client";

import { IconChevronRight } from "@tabler/icons-react";
import "./pravni.css";

type Props = {
  eyebrow: string;
  nadpis: string;
  popis: string;
  ikona: React.ReactNode;
  ucinnost: string;
};

export function PravniHero({ eyebrow, nadpis, popis, ikona, ucinnost }: Props) {
  return (
    <section className="pr-hero">
      {/* Animované pozadí */}
      <div className="pr-hero-pozadi">
        <div className="pr-hero-mrizka" />
        <div className="pr-hero-kruh pr-hero-kruh-1" />
        <div className="pr-hero-kruh pr-hero-kruh-2" />
      </div>

      <div className="obsah pr-hero-vnitrek">
        <div className="pr-hero-ikona">{ikona}</div>
        <span className="pr-hero-eyebrow">{eyebrow}</span>
        <h1 className="pr-hero-nadpis">{nadpis}</h1>
        <p className="pr-hero-popis">{popis}</p>
        <div className="pr-hero-ucinnost">
          <IconChevronRight size={15} /> {ucinnost}
        </div>
      </div>
    </section>
  );
}
