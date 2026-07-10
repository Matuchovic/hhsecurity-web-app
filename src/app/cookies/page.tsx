"use client";

import { useState } from "react";
import { IconCookie, IconChevronRight, IconCircleCheck, IconSettings, IconChartBar, IconShieldCheck, IconMail } from "@tabler/icons-react";
import { PravniHero } from "@/components/PravniHero";
import { PravniNav } from "@/components/PravniNav";
import { KONTAKT } from "@/data/sluzby";
import "@/components/pravni.css";
import "./cookies.css";

const SEKCE = [
  { id: "co-jsou", nazev: "Co jsou cookies" },
  { id: "proc", nazev: "Proč cookies používáme" },
  { id: "druhy", nazev: "Druhy cookies" },
  { id: "prehled", nazev: "Přehled cookies" },
  { id: "nastaveni", nazev: "Nastavení cookies" },
  { id: "sprava", nazev: "Správa v prohlížeči" },
  { id: "kontakt", nazev: "Kontakt" },
];

export default function CookiesStranka() {
  const [analyticke, setAnalyticke] = useState(true);
  const [marketingove, setMarketingove] = useState(false);
  const [ulozeno, setUlozeno] = useState(false);

  function ulozit() {
    setUlozeno(true);
    setTimeout(() => setUlozeno(false), 3000);
  }

  return (
    <>
      <PravniHero
        eyebrow="Zásady cookies"
        nadpis="Používání souborů cookies"
        popis="Informace o tom, jak společnost H&H Security s.r.o. používá soubory cookies a podobné technologie na svých webových stránkách, a jak můžete spravovat své předvolby."
        ikona={<IconCookie size={34} />}
        ucinnost="Účinné od 1. ledna 2026"
      />

      <section className="pr-telo">
        <div className="obsah pr-mrizka">
          <PravniNav sekce={SEKCE} />

          <div className="pr-obsah">
            {/* Co jsou */}
            <div id="co-jsou" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">1</span>
                <h2 className="pr-sekce-nadpis">Co jsou soubory cookies</h2>
              </div>
              <p>
                Soubory <strong>cookies</strong> jsou malé textové soubory, které se ukládají do vašeho
                zařízení (počítač, tablet, mobilní telefon) při návštěvě webových stránek. Umožňují webu
                zapamatovat si vaše akce a preference po určitou dobu.
              </p>
              <p>
                Cookies nám pomáhají zajistit správné fungování webu, zlepšovat jeho obsah a přizpůsobovat
                jej vašim potřebám. Neobsahují žádné škodlivé programy a nepoškozují vaše zařízení.
              </p>
            </div>

            {/* Proč */}
            <div id="proc" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">2</span>
                <h2 className="pr-sekce-nadpis">Proč cookies používáme</h2>
              </div>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> Zajištění základní funkčnosti a bezpečnosti webových stránek.</li>
                <li><IconCircleCheck size={18} /> Zapamatování vašich předvoleb a nastavení.</li>
                <li><IconCircleCheck size={18} /> Analýza návštěvnosti a chování uživatelů pro zlepšení webu.</li>
                <li><IconCircleCheck size={18} /> Vyhodnocování účinnosti našeho obsahu.</li>
              </ul>
            </div>

            {/* Druhy */}
            <div id="druhy" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">3</span>
                <h2 className="pr-sekce-nadpis">Druhy cookies</h2>
              </div>
              <div className="ck-druhy">
                <div className="ck-druh">
                  <div className="ck-druh-ikona ck-druh-nutne"><IconShieldCheck size={22} /></div>
                  <div className="ck-druh-nazev">Nezbytné cookies</div>
                  <div className="ck-druh-popis">
                    Nutné pro základní fungování webu. Bez nich by web nefungoval správně. Nelze je vypnout.
                  </div>
                  <div className="ck-druh-stav ck-druh-stav-vzdy">Vždy aktivní</div>
                </div>
                <div className="ck-druh">
                  <div className="ck-druh-ikona ck-druh-analyticke"><IconChartBar size={22} /></div>
                  <div className="ck-druh-nazev">Analytické cookies</div>
                  <div className="ck-druh-popis">
                    Pomáhají nám pochopit, jak návštěvníci web používají, abychom jej mohli zlepšovat.
                  </div>
                  <div className="ck-druh-stav">Volitelné</div>
                </div>
                <div className="ck-druh">
                  <div className="ck-druh-ikona ck-druh-marketing"><IconSettings size={22} /></div>
                  <div className="ck-druh-nazev">Marketingové cookies</div>
                  <div className="ck-druh-popis">
                    Slouží k přizpůsobení obsahu a měření účinnosti marketingových kampaní.
                  </div>
                  <div className="ck-druh-stav">Volitelné</div>
                </div>
              </div>
            </div>

            {/* Přehled */}
            <div id="prehled" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">4</span>
                <h2 className="pr-sekce-nadpis">Přehled používaných cookies</h2>
              </div>
              <div className="ck-tabulka-obal">
                <table className="ck-tabulka">
                  <thead>
                    <tr>
                      <th>Název</th>
                      <th>Účel</th>
                      <th>Doba platnosti</th>
                      <th>Typ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>session_id</td>
                      <td>Udržení relace uživatele</td>
                      <td>Relace</td>
                      <td><span className="ck-tag ck-tag-nutne">Nezbytné</span></td>
                    </tr>
                    <tr>
                      <td>cookie_consent</td>
                      <td>Uložení souhlasu s cookies</td>
                      <td>12 měsíců</td>
                      <td><span className="ck-tag ck-tag-nutne">Nezbytné</span></td>
                    </tr>
                    <tr>
                      <td>_ga</td>
                      <td>Rozlišení uživatelů (analytika)</td>
                      <td>24 měsíců</td>
                      <td><span className="ck-tag ck-tag-analyticke">Analytické</span></td>
                    </tr>
                    <tr>
                      <td>_gid</td>
                      <td>Rozlišení uživatelů (analytika)</td>
                      <td>24 hodin</td>
                      <td><span className="ck-tag ck-tag-analyticke">Analytické</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Nastavení */}
            <div id="nastaveni" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">5</span>
                <h2 className="pr-sekce-nadpis">Nastavení předvoleb cookies</h2>
              </div>
              <p>Zde si můžete nastavit, které cookies chcete povolit:</p>
              <div className="ck-nastaveni">
                <div className="ck-prepnout ck-prepnout-disabled">
                  <div>
                    <div className="ck-prepnout-nazev">Nezbytné cookies</div>
                    <div className="ck-prepnout-popis">Nutné pro fungování webu</div>
                  </div>
                  <div className="ck-switch ck-switch-on ck-switch-locked">
                    <span className="ck-switch-knob" />
                  </div>
                </div>
                <div className="ck-prepnout">
                  <div>
                    <div className="ck-prepnout-nazev">Analytické cookies</div>
                    <div className="ck-prepnout-popis">Pomáhají nám zlepšovat web</div>
                  </div>
                  <button
                    className={`ck-switch ${analyticke ? "ck-switch-on" : ""}`}
                    onClick={() => setAnalyticke((v) => !v)}
                    aria-label="Analytické cookies"
                  >
                    <span className="ck-switch-knob" />
                  </button>
                </div>
                <div className="ck-prepnout">
                  <div>
                    <div className="ck-prepnout-nazev">Marketingové cookies</div>
                    <div className="ck-prepnout-popis">Přizpůsobení obsahu a kampaní</div>
                  </div>
                  <button
                    className={`ck-switch ${marketingove ? "ck-switch-on" : ""}`}
                    onClick={() => setMarketingove((v) => !v)}
                    aria-label="Marketingové cookies"
                  >
                    <span className="ck-switch-knob" />
                  </button>
                </div>
              </div>
              <button className="ck-ulozit" onClick={ulozit}>
                {ulozeno ? "Předvolby uloženy ✓" : "Uložit předvolby"}
              </button>
            </div>

            {/* Správa */}
            <div id="sprava" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">6</span>
                <h2 className="pr-sekce-nadpis">Správa cookies v prohlížeči</h2>
              </div>
              <p>
                Soubory cookies můžete také spravovat přímo ve svém webovém prohlížeči. Můžete je smazat
                nebo nastavit prohlížeč tak, aby některé cookies blokoval. Postup se liší podle prohlížeče:
              </p>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> <strong>Google Chrome</strong> — Nastavení → Soukromí a zabezpečení → Cookies.</li>
                <li><IconCircleCheck size={18} /> <strong>Mozilla Firefox</strong> — Nastavení → Soukromí a zabezpečení.</li>
                <li><IconCircleCheck size={18} /> <strong>Safari</strong> — Předvolby → Soukromí.</li>
                <li><IconCircleCheck size={18} /> <strong>Microsoft Edge</strong> — Nastavení → Soubory cookie a oprávnění webu.</li>
              </ul>
              <div className="pr-box">
                <div className="pr-box-nadpis"><IconChevronRight size={15} /> Upozornění</div>
                <p>
                  Zablokování některých cookies může ovlivnit funkčnost webových stránek a snížit
                  komfort jejich používání.
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div id="kontakt" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">7</span>
                <h2 className="pr-sekce-nadpis">Kontakt</h2>
              </div>
              <p>
                V případě dotazů ohledně používání cookies nás neváhejte kontaktovat na adrese
                společnosti H&amp;H Security s.r.o.:
              </p>
              <div className="pr-spravce">
                <div className="pr-spravce-avatar">AH</div>
                <div className="pr-spravce-info">
                  <div className="pr-spravce-jmeno">{KONTAKT.osoba}</div>
                  <div className="pr-spravce-role">Jednatel společnosti {KONTAKT.firma}</div>
                  <div className="pr-spravce-udaje">
                    <a href={`mailto:${KONTAKT.email}`}><IconMail size={13} style={{ verticalAlign: "-2px" }} /> {KONTAKT.email}</a>
                    <span>{KONTAKT.adresa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
