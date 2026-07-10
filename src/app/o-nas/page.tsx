"use client";

import Link from "next/link";
import {
  IconTargetArrow, IconEye, IconHeartHandshake, IconCertificate,
  IconClock24, IconUsers, IconAward, IconShieldCheck,
  IconArrowRight, IconMovie, IconBuildingSkyscraper,
} from "@tabler/icons-react";
import useReveal from "@/components/useReveal";
import PageHero from "@/components/PageHero";
import { STATY_FIRMA } from "@/data/sluzby";
import "@/components/o-nas.css";

const HODNOTY = [
  {
    ikona: IconShieldCheck,
    nazev: "Profesionalita",
    popis: "Naši pracovníci procházejí důkladným výběrem a školením. Klademe důraz na spolehlivost a bezúhonnost.",
  },
  {
    ikona: IconClock24,
    nazev: "Dostupnost 24/7",
    popis: "Jsme tu pro vás nepřetržitě. Bezpečnost nezná přestávky, a proto ani my.",
  },
  {
    ikona: IconHeartHandshake,
    nazev: "Individuální přístup",
    popis: "Každý klient a objekt je jiný. Připravíme řešení přesně na míru vašim potřebám.",
  },
  {
    ikona: IconCertificate,
    nazev: "Zkušenosti",
    popis: "Dlouholetá praxe v oboru včetně zajištění bezpečnosti při natáčení reklam a filmů.",
  },
];

export default function ONasStranka() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="O nás"
        nadpis="Kdo jsme"
        popis="H&H Security s.r.o. je komplexní bezpečnostní agentura, která chrání to nejcennější — vaše bezpečí, majetek a klid."
        obraz="/images/fyzicka-ostraha.png"
      />

      {/* Příběh */}
      <section className="on-pribeh">
        <div className="obsah on-pribeh-mrizka">
          <div className="on-pribeh-text reveal">
            <span className="eyebrow">Náš příběh</span>
            <h2 className="on-nadpis">Bezpečnost, na kterou se můžete spolehnout</h2>
            <p>
              Společnost H&amp;H Security poskytuje komplexní bezpečnostní služby s důrazem
              na profesionalitu, spolehlivost a moderní technologie. Zaměřujeme se na ochranu
              objektů, měst, obcí a areálů, ale i na zajištění bezpečnosti na společenských,
              kulturních a sportovních akcích.
            </p>
            <p>
              Díky našim zkušenostem zvládáme i náročné úkoly — mimo jiné jsme zajišťovali
              bezpečnost při natáčení reklam a filmů. Naším cílem je vytvořit prostředí,
              ve kterém se budete cítit v bezpečí, ať už jde o váš domov, firmu nebo veřejný prostor.
            </p>
            <Link href="/sluzby" className="btn btn-primar on-pribeh-btn">
              Naše služby <IconArrowRight size={18} />
            </Link>
          </div>
          <div className="on-pribeh-obraz reveal reveal-2">
            <img src="/images/hero-tym.png" alt="H&H Security tým" />
          </div>
        </div>
      </section>

      {/* Statistiky */}
      <section className="on-staty">
        <div className="obsah on-staty-mrizka">
          {STATY_FIRMA.map((s, i) => (
            <div key={i} className={`on-stat reveal reveal-${(i % 4) + 1}`}>
              <div className="on-stat-cislo">{s.cislo}</div>
              <div className="on-stat-popis">{s.popis}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mise a Vize */}
      <section className="on-mise">
        <div className="obsah on-mise-mrizka">
          <div className="on-mise-karta reveal">
            <div className="on-mise-ikona"><IconTargetArrow size={28} /></div>
            <h3>Naše mise</h3>
            <p>
              Poskytovat bezpečnostní služby nejvyšší kvality a vytvářet prostředí, ve kterém
              se lidé cítí chráněni. Klademe důraz na prevenci, rychlou reakci a profesionální jednání.
            </p>
          </div>
          <div className="on-mise-karta reveal reveal-2">
            <div className="on-mise-ikona"><IconEye size={28} /></div>
            <h3>Naše vize</h3>
            <p>
              Být spolehlivým partnerem v oblasti bezpečnosti — od fyzické ostrahy až po moderní
              technologie. Chceme být první volbou pro každého, kdo hledá jistotu a klid.
            </p>
          </div>
        </div>
      </section>

      {/* Hodnoty */}
      <section className="on-hodnoty">
        <div className="obsah">
          <div className="on-hodnoty-hlava reveal">
            <span className="eyebrow">Proč H&amp;H Security</span>
            <h2 className="on-nadpis">Naše hodnoty</h2>
          </div>
          <div className="on-hodnoty-mrizka">
            {HODNOTY.map((h, i) => {
              const Ikona = h.ikona;
              return (
                <div key={i} className={`on-hodnota reveal reveal-${(i % 4) + 1}`}>
                  <div className="on-hodnota-ikona"><Ikona size={26} /></div>
                  <h3>{h.nazev}</h3>
                  <p>{h.popis}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="on-cta">
        <div className="obsah on-cta-vnitrek reveal">
          <h2>Svěřte svou bezpečnost do rukou profesionálů</h2>
          <p>Kontaktujte nás a nezávazně proberme, jak můžeme ochránit právě vás.</p>
          <Link href="/kontakt" className="btn btn-primar">
            Kontaktujte nás <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
