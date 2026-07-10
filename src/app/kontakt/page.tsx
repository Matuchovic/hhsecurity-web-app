"use client";

import { useState } from "react";
import { IconMapPin, IconPhone, IconMail, IconClock, IconUser, IconSend, IconBrandFacebook, IconBuildingSkyscraper } from "@tabler/icons-react";
import useReveal from "@/components/useReveal";
import PageHero from "@/components/PageHero";
import { KONTAKT } from "@/data/sluzby";
import "./kontakt.css";

export default function KontaktStranka() {
  useReveal();
  const [form, setForm] = useState({ jmeno: "", email: "", telefon: "", zprava: "" });
  const [odeslano, setOdeslano] = useState(false);

  function odeslat() {
    if (form.jmeno.trim() && form.email.includes("@") && form.zprava.trim()) {
      setOdeslano(true);
      setForm({ jmeno: "", email: "", telefon: "", zprava: "" });
      setTimeout(() => setOdeslano(false), 5000);
    }
  }

  const KONTAKTY = [
    { ikona: IconUser, popisek: "Kontaktní osoba", hodnota: KONTAKT.osoba },
    { ikona: IconPhone, popisek: "Telefon", hodnota: KONTAKT.telefon, odkaz: `tel:${KONTAKT.telefonHref}` },
    { ikona: IconMail, popisek: "E-mail", hodnota: KONTAKT.email, odkaz: `mailto:${KONTAKT.email}` },
    { ikona: IconMapPin, popisek: "Adresa", hodnota: KONTAKT.adresa },
    { ikona: IconClock, popisek: "Dostupnost", hodnota: "24/7 Nonstop služba" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        nadpis="Spojte se s námi"
        popis="Máte dotaz nebo potřebujete bezpečnostní řešení na míru? Ozvěte se nám — jsme tu pro vás nepřetržitě."
        obraz="/images/operations-center.png"
      />

      <section className="kt">
        <div className="obsah kt-mrizka">
          {/* Levá strana — údaje */}
          <div className="kt-info reveal">
            <h2 className="kt-nadpis">Kontaktní informace</h2>
            <p className="kt-uvod">
              Neváhejte nás kontaktovat kdykoliv. Rádi s vámi probereme vaše potřeby
              a připravíme nezávaznou nabídku.
            </p>

            <div className="kt-seznam">
              {KONTAKTY.map((k, i) => {
                const Ikona = k.ikona;
                const obsah = (
                  <>
                    <div className="kt-polozka-ikona"><Ikona size={20} /></div>
                    <div>
                      <div className="kt-polozka-popisek">{k.popisek}</div>
                      <div className="kt-polozka-hodnota">{k.hodnota}</div>
                    </div>
                  </>
                );
                return k.odkaz ? (
                  <a key={i} href={k.odkaz} className="kt-polozka kt-polozka-odkaz">{obsah}</a>
                ) : (
                  <div key={i} className="kt-polozka">{obsah}</div>
                );
              })}
            </div>

            {/* Firemní údaje */}
            <div className="kt-firma">
              <div className="kt-firma-radek"><IconBuildingSkyscraper size={16} /> {KONTAKT.firma}</div>
              <div className="kt-firma-udaje">
                <span>IČ: {KONTAKT.ic}</span>
                <span>DIČ: {KONTAKT.dic}</span>
              </div>
            </div>

            <a href={KONTAKT.facebook} target="_blank" rel="noopener noreferrer" className="kt-social">
              <IconBrandFacebook size={18} /> Sledujte nás na Facebooku
            </a>
          </div>

          {/* Pravá strana — formulář */}
          <div className="kt-formular reveal reveal-2">
            <h3 className="kt-formular-nadpis">Napište nám</h3>
            <div className="kt-pole">
              <label>Jméno a příjmení *</label>
              <input
                type="text"
                value={form.jmeno}
                onChange={(e) => setForm({ ...form, jmeno: e.target.value })}
                placeholder="Jan Novák"
              />
            </div>
            <div className="kt-radek">
              <div className="kt-pole">
                <label>E-mail *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jan@email.cz"
                />
              </div>
              <div className="kt-pole">
                <label>Telefon</label>
                <input
                  type="tel"
                  value={form.telefon}
                  onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                  placeholder="+420 ..."
                />
              </div>
            </div>
            <div className="kt-pole">
              <label>Zpráva *</label>
              <textarea
                rows={5}
                value={form.zprava}
                onChange={(e) => setForm({ ...form, zprava: e.target.value })}
                placeholder="Popište, s čím vám můžeme pomoci..."
              />
            </div>
            <button className="kt-odeslat" onClick={odeslat}>
              {odeslano ? "Zpráva odeslána! Děkujeme ✓" : <>Odeslat zprávu <IconSend size={17} /></>}
            </button>
            <p className="kt-poznamka">Odesláním souhlasíte se zpracováním osobních údajů.</p>
          </div>
        </div>
      </section>
    </>
  );
}
