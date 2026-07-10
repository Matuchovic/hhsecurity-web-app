"use client";

import { useState } from "react";
import { IconTrendingUp, IconSchool, IconHeartHandshake, IconClock24, IconBriefcase, IconArrowRight, IconCircleCheck, IconSend } from "@tabler/icons-react";
import useReveal from "@/components/useReveal";
import PageHero from "@/components/PageHero";
import { KONTAKT } from "@/data/sluzby";
import "./kariera.css";

const VYHODY = [
  { ikona: IconTrendingUp, nazev: "Stabilní zaměstnání", popis: "Dlouhodobá spolupráce a jistota pravidelného příjmu v rostoucí firmě." },
  { ikona: IconSchool, nazev: "Školení a rozvoj", popis: "Zajistíme potřebná školení a licence. Podporujeme váš profesní růst." },
  { ikona: IconHeartHandshake, nazev: "Férové jednání", popis: "Přátelský kolektiv, korektní přístup a ohodnocení, které si zasloužíte." },
  { ikona: IconClock24, nazev: "Flexibilní směny", popis: "Nabízíme různé formy úvazků a rozvržení směn dle vašich možností." },
];

const POZICE = [
  {
    nazev: "Strážný / Ostraha objektů",
    typ: "Plný i zkrácený úvazek",
    popis: "Fyzická ostraha objektů, kontrola vstupu, obchůzková činnost.",
    pozadavky: ["Bezúhonnost", "Spolehlivost", "Ochota pracovat na směny"],
  },
  {
    nazev: "Člen mobilní zásahové jednotky",
    typ: "Plný úvazek",
    popis: "Výjezdy k poplachům, kontrola objektů, rychlá reakce na události.",
    pozadavky: ["Řidičský průkaz sk. B", "Fyzická zdatnost", "Rozhodnost"],
  },
  {
    nazev: "Operátor dispečinku (PCO)",
    typ: "Plný úvazek",
    popis: "Monitoring objektů, vyhodnocování poplachů, koordinace zásahů.",
    pozadavky: ["Práce s PC", "Pečlivost", "Komunikační dovednosti"],
  },
];

export default function KarieraStranka() {
  useReveal();
  const [form, setForm] = useState({ jmeno: "", email: "", telefon: "", pozice: "", zprava: "" });
  const [odeslano, setOdeslano] = useState(false);

  function odeslat() {
    if (form.jmeno.trim() && form.email.includes("@")) {
      setOdeslano(true);
      setForm({ jmeno: "", email: "", telefon: "", pozice: "", zprava: "" });
      setTimeout(() => setOdeslano(false), 5000);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Kariéra"
        nadpis="Přidejte se k našemu týmu"
        popis="Hledáme spolehlivé a profesionální kolegy, kteří chtějí být součástí špičkové bezpečnostní agentury. Staňte se součástí H&H Security."
        obraz="/images/hero-zasah.png"
      />

      {/* Výhody */}
      <section className="kr-vyhody">
        <div className="obsah">
          <div className="kr-hlava reveal">
            <span className="eyebrow">Proč pracovat u nás</span>
            <h2 className="kr-nadpis">Co vám nabízíme</h2>
          </div>
          <div className="kr-vyhody-mrizka">
            {VYHODY.map((v, i) => {
              const Ikona = v.ikona;
              return (
                <div key={i} className={`kr-vyhoda reveal reveal-${(i % 4) + 1}`}>
                  <div className="kr-vyhoda-ikona"><Ikona size={24} /></div>
                  <h3>{v.nazev}</h3>
                  <p>{v.popis}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pozice */}
      <section className="kr-pozice">
        <div className="obsah">
          <div className="kr-hlava reveal">
            <span className="eyebrow">Volné pozice</span>
            <h2 className="kr-nadpis">Aktuálně hledáme</h2>
          </div>
          <div className="kr-pozice-seznam">
            {POZICE.map((p, i) => (
              <div key={i} className={`kr-pozice-karta reveal reveal-${(i % 3) + 1}`}>
                <div className="kr-pozice-ikona"><IconBriefcase size={22} /></div>
                <div className="kr-pozice-obsah">
                  <div className="kr-pozice-hlava">
                    <h3>{p.nazev}</h3>
                    <span className="kr-pozice-typ">{p.typ}</span>
                  </div>
                  <p className="kr-pozice-popis">{p.popis}</p>
                  <div className="kr-pozice-pozadavky">
                    {p.pozadavky.map((poz, j) => (
                      <span key={j} className="kr-pozadavek">
                        <IconCircleCheck size={14} /> {poz}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulář */}
      <section className="kr-form-sekce">
        <div className="obsah kr-form-mrizka">
          <div className="kr-form-info reveal">
            <span className="eyebrow">Máte zájem?</span>
            <h2 className="kr-nadpis">Ozvěte se nám</h2>
            <p className="kr-form-uvod">
              Nenašli jste vhodnou pozici, ale chcete u nás pracovat? Napište nám i tak —
              rádi vás poznáme. Pošlete nám své údaje a my se vám ozveme.
            </p>
            <div className="kr-form-kontakt">
              <div>Nebo nás kontaktujte přímo:</div>
              <a href={`tel:${KONTAKT.telefonHref}`}>{KONTAKT.telefon}</a>
              <a href={`mailto:${KONTAKT.email}`}>{KONTAKT.email}</a>
            </div>
          </div>

          <div className="kr-form reveal reveal-2">
            <div className="kr-radek">
              <div className="kr-pole">
                <label>Jméno a příjmení *</label>
                <input type="text" value={form.jmeno} onChange={(e) => setForm({ ...form, jmeno: e.target.value })} placeholder="Jan Novák" />
              </div>
              <div className="kr-pole">
                <label>Telefon</label>
                <input type="tel" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} placeholder="+420 ..." />
              </div>
            </div>
            <div className="kr-pole">
              <label>E-mail *</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jan@email.cz" />
            </div>
            <div className="kr-pole">
              <label>Pozice, o kterou máte zájem</label>
              <input type="text" value={form.pozice} onChange={(e) => setForm({ ...form, pozice: e.target.value })} placeholder="Např. Strážný" />
            </div>
            <div className="kr-pole">
              <label>Zpráva</label>
              <textarea rows={4} value={form.zprava} onChange={(e) => setForm({ ...form, zprava: e.target.value })} placeholder="Něco o vás a vašich zkušenostech..." />
            </div>
            <button className="kr-odeslat" onClick={odeslat}>
              {odeslano ? "Přihláška odeslána! Děkujeme ✓" : <>Odeslat přihlášku <IconSend size={17} /></>}
            </button>
            <p className="kr-poznamka">Odesláním souhlasíte se zpracováním osobních údajů.</p>
          </div>
        </div>
      </section>
    </>
  );
}
