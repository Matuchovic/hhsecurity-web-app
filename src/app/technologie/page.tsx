"use client";

import Link from "next/link";
import { IconDeviceCctv, IconDeviceDesktop, IconCar, IconFingerprint, IconRadar2, IconBolt, IconArrowRight, IconCircleCheck } from "@tabler/icons-react";
import useReveal from "@/components/useReveal";
import PageHero from "@/components/PageHero";
import "./technologie.css";

const TECHNOLOGIE = [
  {
    ikona: IconDeviceCctv,
    obraz: "/images/kamerovy-system.png",
    nazev: "Kamerové systémy CCTV",
    popis: "Moderní kamery s vysokým rozlišením, nočním viděním a detekcí pohybu. Vzdálený přístup k záznamům 24/7.",
    body: ["4K rozlišení", "Noční vidění", "Detekce pohybu", "Cloudové úložiště"],
  },
  {
    ikona: IconDeviceDesktop,
    obraz: "/images/operations-center.png",
    nazev: "Pult centralizované ochrany",
    popis: "Nepřetržitý dohled nad vašimi objekty z našeho operačního střediska s okamžitou reakcí na poplach.",
    body: ["Nonstop monitoring", "Okamžitá reakce", "Vyhodnocení poplachů", "Přímé napojení"],
  },
  {
    ikona: IconCar,
    obraz: "/images/mobilni-jednotka.png",
    nazev: "Mobilní zásahové jednotky",
    popis: "Vybavené zásahové vozy s profesionálně vyškolenými týmy připravené vyjet kdykoliv.",
    body: ["Rychlý výjezd", "GPS sledování", "Vyškolený tým", "Zásah do 15 minut"],
  },
  {
    ikona: IconFingerprint,
    obraz: "/images/pristupovy-system.png",
    nazev: "Přístupové systémy",
    popis: "Čipové a biometrické systémy pro kontrolu vstupu s evidencí pohybu osob a správou oprávnění.",
    body: ["Biometrie", "Čipové karty", "Evidence vstupů", "Správa oprávnění"],
  },
];

export default function TechnologieStranka() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Technologie"
        nadpis="Moderní vybavení a technologie"
        popis="Spojujeme profesionální lidský přístup s nejmodernějšími technologiemi. Vaše bezpečnost stojí na špičkovém vybavení."
        obraz="/images/pristupovy-system.png"
      />

      <section className="tc">
        <div className="obsah tc-mrizka">
          {TECHNOLOGIE.map((t, i) => {
            const Ikona = t.ikona;
            return (
              <div key={i} className={`tc-karta reveal reveal-${(i % 4) + 1}`}>
                <div className="tc-obraz">
                  <img src={t.obraz} alt={t.nazev} />
                  <div className="tc-obraz-preliv" />
                  <div className="tc-ikona"><Ikona size={24} /></div>
                </div>
                <div className="tc-telo">
                  <h3 className="tc-nazev">{t.nazev}</h3>
                  <p className="tc-popis">{t.popis}</p>
                  <div className="tc-body">
                    {t.body.map((b, j) => (
                      <span key={j} className="tc-znacka">
                        <IconCircleCheck size={15} /> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pruh s výhodou */}
      <section className="tc-pruh">
        <div className="obsah tc-pruh-vnitrek reveal">
          <div className="tc-pruh-ikona"><IconBolt size={30} /></div>
          <div className="tc-pruh-text">
            <h2>Technologie ve službách vaší bezpečnosti</h2>
            <p>
              Všechny naše systémy jsou vzájemně propojené a monitorované z centrálního
              dispečinku. Kombinujeme fyzickou ostrahu, kamerový dohled a moderní technologie
              do jednoho spolehlivého celku.
            </p>
          </div>
          <Link href="/kontakt" className="btn btn-primar tc-pruh-btn">
            Nezávazná konzultace <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
