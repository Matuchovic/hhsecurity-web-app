"use client";

import { IconChevronRight } from "@tabler/icons-react";
import "./proces.css";

const KROKY = [
  {
    cislo: "01",
    nazev: "Analýza potřeb",
    popis: "Důkladně analyzujeme vaše požadavky a specifika objektu.",
  },
  {
    cislo: "02",
    nazev: "Návrh řešení",
    popis: "Připravíme optimální bezpečnostní řešení na míru.",
  },
  {
    cislo: "03",
    nazev: "Implementace",
    popis: "Profesionálně implementujeme dohodnuté řešení.",
  },
  {
    cislo: "04",
    nazev: "Nepřetržitá ochrana",
    popis: "Zajišťujeme 24/7 monitoring a okamžitou reakci.",
  },
];

export default function Proces() {
  return (
    <section className="sekce proces">
      <div className="obsah">
        <div className="proces-hlava reveal">
          <span className="eyebrow">Jak pracujeme</span>
          <h2 className="sekce-nadpis">Náš osvědčený proces spolupráce</h2>
        </div>

        <div className="proces-kroky">
          {KROKY.map((k, i) => (
            <div key={i} className="proces-krok-obal">
              <div className={`proces-krok reveal reveal-${(i % 4) + 1}`}>
                <div className="proces-cislo">{k.cislo}</div>
                <h3 className="proces-nazev">{k.nazev}</h3>
                <p className="proces-popis">{k.popis}</p>
              </div>
              {i < KROKY.length - 1 && (
                <div className="proces-sipka"><IconChevronRight size={22} /></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
