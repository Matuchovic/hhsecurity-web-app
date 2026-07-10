"use client";

import Link from "next/link";
import { IconStar, IconQuote, IconArrowRight, IconShieldCheck, IconAdjustments, IconLock, IconClock24 } from "@tabler/icons-react";
import useReveal from "@/components/useReveal";
import useTilt from "@/components/useTilt";
import Cislo from "@/components/Cislo";
import PageHero from "@/components/PageHero";
import { PROC_HH } from "@/data/sluzby";
import "./reference.css";

const IKONY: Record<string, any> = {
  IconShieldCheck, IconAdjustments, IconLock, IconClock24,
};

const KLIENTI = [
  "ŠKODA", "Plzeňský Prazdroj", "Česká spořitelna", "Kaufland",
  "DHL", "Panasonic", "B. Braun", "Miele",
];

const REFERENCE = [
  {
    text: "Se službami H&H Security jsme maximálně spokojeni. Profesionální přístup, spolehlivost a rychlá reakce na jakoukoliv situaci. Doporučujeme.",
    autor: "Vedoucí ostrahy",
    firma: "Průmyslový areál",
  },
  {
    text: "Ocenili jsme individuální přístup a schopnost připravit bezpečnostní plán přesně na míru našim potřebám. Cítíme se v bezpečí.",
    autor: "Jednatel společnosti",
    firma: "Obchodní centrum",
  },
  {
    text: "Skvělá spolupráce při zajištění bezpečnosti na naší akci. Tým byl profesionální, diskrétní a vždy připravený. Určitě opět využijeme.",
    autor: "Organizátor akcí",
    firma: "Kulturní událost",
  },
];

const STATY = [
  { cislo: "500+", popis: "Spokojených klientů" },
  { cislo: "1000+", popis: "Úspěšných akcí" },
  { cislo: "5+", popis: "Let na trhu" },
  { cislo: "24/7", popis: "Nonstop dostupnost" },
];

export default function ReferenceStranka() {
  useReveal();
  useTilt();

  return (
    <>
      <PageHero
        eyebrow="Reference"
        nadpis="Důvěřují nám"
        popis="Za našimi službami stojí spokojení klienti a stovky úspěšně zajištěných zakázek. Vaše bezpečnost je naší nejlepší vizitkou."
        obraz="/images/mobilni-jednotka.png"
      />

      {/* Statistiky */}
      <section className="rf-staty">
        <div className="obsah rf-staty-mrizka">
          {STATY.map((s, i) => (
            <div key={i} className={`rf-stat reveal reveal-${(i % 4) + 1}`}>
              <div className="rf-stat-cislo"><Cislo hodnota={s.cislo} /></div>
              <div className="rf-stat-popis">{s.popis}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Loga klientů */}
      <section className="rf-klienti">
        <div className="obsah">
          <div className="rf-hlava reveal">
            <span className="eyebrow">Naši klienti</span>
            <h2 className="rf-nadpis">Spolupracujeme s předními společnostmi</h2>
          </div>
          <div className="rf-loga reveal">
            {KLIENTI.map((k, i) => (
              <div key={i} className="rf-logo">{k}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Recenze */}
      <section className="rf-recenze">
        <div className="obsah">
          <div className="rf-hlava reveal">
            <span className="eyebrow">Co o nás říkají</span>
            <h2 className="rf-nadpis">Reference našich klientů</h2>
          </div>
          <div className="rf-recenze-mrizka">
            {REFERENCE.map((r, i) => (
              <div key={i} className={`rf-karta reveal reveal-${(i % 3) + 1}`}>
                <div className="rf-karta-quote"><IconQuote size={28} /></div>
                <div className="rf-hvezdy">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <IconStar key={j} size={16} />
                  ))}
                </div>
                <p className="rf-karta-text">{r.text}</p>
                <div className="rf-karta-autor">
                  <div className="rf-karta-jmeno">{r.autor}</div>
                  <div className="rf-karta-firma">{r.firma}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proč H&H */}
      <section className="rf-proc">
        <div className="obsah">
          <div className="rf-hlava reveal">
            <span className="eyebrow">Proč H&amp;H Security</span>
            <h2 className="rf-nadpis">Důvody, proč nám klienti věří</h2>
          </div>
          <div className="rf-proc-mrizka">
            {PROC_HH.map((p, i) => {
              const Ikona = IKONY[p.ikona] || IconShieldCheck;
              return (
                <div key={i} className={`rf-proc-karta reveal reveal-${(i % 4) + 1}`}>
                  <div className="rf-proc-ikona"><Ikona size={24} /></div>
                  <h3>{p.nazev}</h3>
                  <p>{p.popis}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rf-cta">
        <div className="obsah rf-cta-vnitrek reveal">
          <h2>Staňte se dalším spokojeným klientem</h2>
          <p>Připojte se ke stovkám klientů, kteří svěřili svou bezpečnost do našich rukou.</p>
          <Link href="/kontakt" className="btn btn-primar">
            Kontaktujte nás <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
