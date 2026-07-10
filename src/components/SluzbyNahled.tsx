"use client";

import Link from "next/link";
import { IconArrowRight, IconShieldHalfFilled, IconDeviceCctv, IconVideo, IconCar, IconFingerprint } from "@tabler/icons-react";
import "./sluzby-nahled.css";

const SLUZBY = [
  {
    ikona: IconShieldHalfFilled,
    obraz: "/images/strazny-mesto-v2.png",
    nazev: "Fyzická ostraha",
    popis: "Profesionální strážní služba pro objekty, areály i osobní ochranu.",
  },
  {
    ikona: IconDeviceCctv,
    obraz: "/images/operations-center.png",
    nazev: "Pult centralizované ochrany (PCO)",
    popis: "24/7 monitoring a okamžitá reakce na poplachové události.",
  },
  {
    ikona: IconVideo,
    obraz: "/images/kamerovy-system.png",
    nazev: "Kamerové systémy",
    popis: "Moderní CCTV systémy s vysokým rozlišením a vzdáleným přístupem.",
  },
  {
    ikona: IconCar,
    obraz: "/images/mobilni-jednotka.png",
    nazev: "Mobilní zásahové jednotky",
    popis: "Rychlý zásah a kontrola objektů našimi mobilními hlídkami.",
  },
  {
    ikona: IconFingerprint,
    obraz: "/images/pristupovy-system.png",
    nazev: "Přístupové systémy",
    popis: "Elektronické zabezpečení a kontrola vstupu do objektů.",
  },
];

export default function SluzbyNahled() {
  return (
    <section className="sekce sluzby-n">
      <div className="obsah">
        <div className="sluzby-n-hlava reveal">
          <div>
            <span className="eyebrow">Naše služby</span>
            <h2 className="sekce-nadpis">Komplexní bezpečnostní řešení</h2>
            <span className="sluzby-n-podtrzeni" />
          </div>
          <Link href="/sluzby" className="sluzby-n-vse">
            Zobrazit všechny služby <IconArrowRight size={17} />
          </Link>
        </div>

        <div className="sluzby-n-mrizka">
          {SLUZBY.map((s, i) => {
            const Ikona = s.ikona;
            return (
              <Link href="/sluzby" key={i} className={`sluzby-n-karta tilt reveal reveal-stagger-${i + 1}`}>
                <div className="sluzby-n-obraz">
                  <img src={s.obraz} alt={s.nazev} />
                  <div className="sluzby-n-obraz-preliv" />
                  <div className="sluzby-n-ikona"><Ikona size={22} /></div>
                </div>
                <div className="sluzby-n-telo">
                  <h3 className="sluzby-n-nazev">{s.nazev}</h3>
                  <p className="sluzby-n-popis">{s.popis}</p>
                  <span className="sluzby-n-vic">
                    Více informací <IconArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
