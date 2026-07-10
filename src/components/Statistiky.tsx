"use client";

import Link from "next/link";
import { IconArrowRight, IconAward, IconUsers, IconClock24, IconTargetArrow } from "@tabler/icons-react";
import Cislo from "./Cislo";
import "./statistiky.css";

const STATY = [
  { ikona: IconAward, cislo: "15+", popis: "Let zkušeností" },
  { ikona: IconUsers, cislo: "500+", popis: "Spokojených klientů" },
  { ikona: IconClock24, cislo: "24/7", popis: "Nonstop služba" },
  { ikona: IconTargetArrow, cislo: "99,9%", popis: "Úspěšnost zásahů" },
];

export default function Statistiky() {
  return (
    <section className="sekce staty">
      <div className="obsah staty-mrizka">
        {/* Levý text */}
        <div className="staty-text reveal">
          <span className="eyebrow">Proč H&amp;H Security?</span>
          <h2 className="sekce-nadpis">
            Spolehlivost, na kterou<br />se můžete spolehnout
          </h2>
          <p className="sekce-popis">
            Naše dlouholeté zkušenosti, moderní technologie a profesionální tým
            jsou zárukou vaší bezpečnosti.
          </p>
          <Link href="/o-nas" className="btn btn-primar staty-btn">
            O nás <IconArrowRight size={18} />
          </Link>
        </div>

        {/* Pravé karty */}
        <div className="staty-karty">
          {STATY.map((s, i) => {
            const Ikona = s.ikona;
            return (
              <div key={i} className={`staty-karta tilt reveal reveal-${(i % 4) + 1}`}>
                <div className="staty-karta-cislo"><Cislo hodnota={s.cislo} /></div>
                <div className="staty-karta-popis">{s.popis}</div>
                <div className="staty-karta-ikona"><Ikona size={30} /></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
