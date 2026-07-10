"use client";

import Link from "next/link";
import { IconArrowRight, IconBolt, IconClock24, IconAward, IconShieldCheck, IconTargetArrow } from "@tabler/icons-react";
import "./hero.css";

const STATY = [
  { ikona: IconClock24, cislo: "24/7", popis: "Nonstop dohled" },
  { ikona: IconAward, cislo: "15+ let", popis: "Zkušeností" },
  { ikona: IconShieldCheck, cislo: "500+", popis: "Spokojených klientů" },
  { ikona: IconTargetArrow, cislo: "99,9%", popis: "Úspěšnost zásahů" },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Pozadí obrázek */}
      <div className="hero-pozadi">
        <img src="/images/hero-tym.png" alt="H&H Security zásahová jednotka" />
        <div className="hero-preliv" />
        <div className="hero-preliv-spodni" />
      </div>

      <div className="obsah hero-vnitrek">
        <div className="hero-text">
          <span className="eyebrow hero-eyebrow">Vaše bezpečí. Naše priorita.</span>
          <h1 className="hero-nadpis">
            PROFESIONÁLNÍ<br />
            BEZPEČNOSTNÍ SLUŽBY<br />
            <span className="hero-nadpis-modra">PRO VÁŠ KLID</span>
          </h1>
          <p className="hero-popis">
            Komplexní řešení bezpečnosti na míru vašim potřebám.<br />
            24/7 ochrana, moderní technologie, profesionální přístup.
          </p>
          <div className="hero-tlacitka">
            <Link href="/sluzby" className="btn btn-primar">
              Naše služby <IconArrowRight size={18} />
            </Link>
            <Link href="/kontakt" className="btn btn-sekundar">
              Kontaktujte nás
            </Link>
          </div>

          {/* Statistiky */}
          <div className="hero-staty">
            {STATY.map((s, i) => {
              const Ikona = s.ikona;
              return (
                <div key={i} className="hero-stat">
                  <div className="hero-stat-ikona"><Ikona size={22} /></div>
                  <div>
                    <div className="hero-stat-cislo">{s.cislo}</div>
                    <div className="hero-stat-popis">{s.popis}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plovoucí karta Rychlý zásah */}
        <Link href="/sluzby" className="hero-karta">
          <div className="hero-karta-ikona"><IconBolt size={22} /></div>
          <div className="hero-karta-nadpis">Rychlý zásah</div>
          <div className="hero-karta-text">Dojedeme na místo již do 15 minut.</div>
          <div className="hero-karta-odkaz">
            Více o zásazích <IconArrowRight size={15} />
          </div>
        </Link>
      </div>
    </section>
  );
}
