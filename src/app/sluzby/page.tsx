"use client";

import Link from "next/link";
import {
  IconBuildingSkyscraper, IconUsersGroup, IconBuildingCommunity,
  IconUserShield, IconDeviceCctv, IconFingerprint,
  IconCheck, IconArrowRight, IconPhone,
} from "@tabler/icons-react";
import useReveal from "@/components/useReveal";
import PageHero from "@/components/PageHero";
import { SLUZBY, KONTAKT } from "@/data/sluzby";
import "@/components/sluzby.css";

const IKONY: Record<string, any> = {
  IconBuildingSkyscraper, IconUsersGroup, IconBuildingCommunity,
  IconUserShield, IconDeviceCctv, IconFingerprint,
};

export default function SluzbyStranka() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Naše služby"
        nadpis="Komplexní bezpečnostní řešení"
        popis="Poskytujeme širokou škálu bezpečnostních služeb na míru — od fyzické ostrahy přes ochranu akcí až po VIP ochranku a moderní technologie."
        obraz="/images/hero-zasah.png"
      />

      <section className="sluzby-detail">
        <div className="obsah">
          {SLUZBY.map((s, i) => {
            const Ikona = IKONY[s.ikona];
            const zprava = i % 2 === 1;
            return (
              <div
                key={s.klic}
                id={s.klic}
                className={`sluzba-blok ${zprava ? "sluzba-blok-obraceny" : ""} reveal`}
              >
                {/* Obraz */}
                <div className="sluzba-obraz">
                  <img src={s.obraz} alt={s.nazev} />
                  <div className="sluzba-obraz-ram" />
                  <div className="sluzba-obraz-ikona">
                    {Ikona && <Ikona size={26} />}
                  </div>
                </div>

                {/* Text */}
                <div className="sluzba-text">
                  <span className="sluzba-cislo">0{i + 1}</span>
                  <h2 className="sluzba-nazev">{s.nazev}</h2>
                  <p className="sluzba-kratky">{s.kratky}</p>
                  <ul className="sluzba-body">
                    {s.body.map((b, j) => (
                      <li key={j}>
                        <IconCheck size={18} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="sluzby-cta">
        <div className="obsah sluzby-cta-vnitrek reveal">
          <h2 className="sluzby-cta-nadpis">Nenašli jste, co hledáte?</h2>
          <p className="sluzby-cta-popis">
            Připravíme bezpečnostní řešení přesně na míru vašim potřebám. Ozvěte se nám a probereme detaily.
          </p>
          <div className="sluzby-cta-tlacitka">
            <Link href="/kontakt" className="btn btn-primar">
              Kontaktujte nás <IconArrowRight size={18} />
            </Link>
            <a href={`tel:${KONTAKT.telefonHref}`} className="btn btn-sekundar">
              <IconPhone size={18} /> {KONTAKT.telefon}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
