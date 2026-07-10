"use client";

import { IconScale, IconChevronRight, IconCircleCheck, IconAlertTriangle, IconMail, IconPhone } from "@tabler/icons-react";
import { PravniHero } from "@/components/PravniHero";
import { PravniNav } from "@/components/PravniNav";
import { KONTAKT } from "@/data/sluzby";
import "@/components/pravni.css";

const SEKCE = [
  { id: "uvod", nazev: "Úvodní ustanovení" },
  { id: "vymezeni", nazev: "Vymezení pojmů" },
  { id: "sluzby", nazev: "Předmět služeb" },
  { id: "vznik", nazev: "Vznik smluvního vztahu" },
  { id: "prava", nazev: "Práva a povinnosti" },
  { id: "cena", nazev: "Cena a platební podmínky" },
  { id: "odpovednost", nazev: "Odpovědnost za škodu" },
  { id: "mlcenlivost", nazev: "Mlčenlivost" },
  { id: "trvani", nazev: "Trvání a ukončení" },
  { id: "reklamace", nazev: "Reklamace" },
  { id: "zaverecna", nazev: "Závěrečná ustanovení" },
];

export default function ObchodniPodminky() {
  return (
    <>
      <PravniHero
        eyebrow="Právní dokumenty"
        nadpis="Obchodní podmínky"
        popis="Všeobecné obchodní podmínky společnosti H&H Security s.r.o. upravující poskytování bezpečnostních služeb. Přečtěte si prosím pozorně tento dokument."
        ikona={<IconScale size={34} />}
        ucinnost="Účinné od 1. ledna 2026"
      />

      <section className="pr-telo">
        <div className="obsah pr-mrizka">
          <PravniNav sekce={SEKCE} />

          <div className="pr-obsah">
            {/* 1 */}
            <div id="uvod" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">1</span>
                <h2 className="pr-sekce-nadpis">Úvodní ustanovení</h2>
              </div>
              <p>
                Tyto všeobecné obchodní podmínky (dále jen <strong>„obchodní podmínky“</strong>) upravují
                v souladu s ustanovením § 1751 odst. 1 zákona č. 89/2012 Sb., občanský zákoník, ve znění
                pozdějších předpisů (dále jen <strong>„občanský zákoník“</strong>), vzájemná práva a povinnosti
                smluvních stran vzniklé v souvislosti s poskytováním bezpečnostních služeb.
              </p>
              <div className="pr-spravce">
                <div className="pr-spravce-avatar">AH</div>
                <div className="pr-spravce-info">
                  <div className="pr-spravce-jmeno">{KONTAKT.osoba}</div>
                  <div className="pr-spravce-role">Jednatel a zakladatel společnosti H&amp;H Security s.r.o.</div>
                  <div className="pr-spravce-udaje">
                    <span>{KONTAKT.firma}</span>
                    <span>IČ: {KONTAKT.ic}</span>
                    <span>DIČ: {KONTAKT.dic}</span>
                  </div>
                </div>
              </div>
              <p>
                Společnost <strong>{KONTAKT.firma}</strong>, se sídlem {KONTAKT.adresa}, IČ: {KONTAKT.ic},
                zapsaná v obchodním rejstříku, zastoupená jednatelem panem <strong>{KONTAKT.osoba}</strong>
                {" "}(dále jen <strong>„poskytovatel“</strong>), poskytuje komplexní bezpečnostní služby
                na základě příslušných oprávnění.
              </p>
            </div>

            {/* 2 */}
            <div id="vymezeni" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">2</span>
                <h2 className="pr-sekce-nadpis">Vymezení pojmů</h2>
              </div>
              <div className="pr-def">
                <div className="pr-def-klic">Poskytovatel</div>
                <div className="pr-def-hodnota">Společnost {KONTAKT.firma} poskytující bezpečnostní služby.</div>
                <div className="pr-def-klic">Objednatel / Klient</div>
                <div className="pr-def-hodnota">Fyzická nebo právnická osoba, která si objednává služby poskytovatele.</div>
                <div className="pr-def-klic">Služba</div>
                <div className="pr-def-hodnota">Bezpečnostní činnost poskytovaná dle uzavřené smlouvy.</div>
                <div className="pr-def-klic">Smlouva</div>
                <div className="pr-def-hodnota">Písemná dohoda mezi poskytovatelem a objednatelem o poskytování služeb.</div>
                <div className="pr-def-klic">Objekt</div>
                <div className="pr-def-hodnota">Místo, prostor nebo osoba, na které se vztahuje bezpečnostní ochrana.</div>
              </div>
            </div>

            {/* 3 */}
            <div id="sluzby" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">3</span>
                <h2 className="pr-sekce-nadpis">Předmět služeb</h2>
              </div>
              <p>Poskytovatel zajišťuje zejména následující bezpečnostní služby:</p>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> Fyzická ostraha objektů, areálů, skladů a soukromých rezidencí.</li>
                <li><IconCircleCheck size={18} /> Bezpečnostní služby na kulturních, sportovních a společenských akcích.</li>
                <li><IconCircleCheck size={18} /> Ochrana měst, obcí a veřejných prostor.</li>
                <li><IconCircleCheck size={18} /> VIP ochranka a osobní bezpečnost.</li>
                <li><IconCircleCheck size={18} /> Provoz pultu centralizované ochrany (PCO) a kamerových systémů.</li>
                <li><IconCircleCheck size={18} /> Mobilní zásahové jednotky a výjezdy k poplachům.</li>
              </ul>
              <p>
                Konkrétní rozsah, specifikace a podmínky poskytovaných služeb jsou vždy sjednány
                v individuální smlouvě mezi poskytovatelem a objednatelem.
              </p>
            </div>

            {/* 4 */}
            <div id="vznik" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">4</span>
                <h2 className="pr-sekce-nadpis">Vznik smluvního vztahu</h2>
              </div>
              <p>
                Smluvní vztah vzniká na základě písemné smlouvy nebo písemně potvrzené objednávky.
                Poskytovatel před uzavřením smlouvy zpravidla provede analýzu bezpečnostních rizik
                a navrhne optimální řešení na míru potřebám objednatele.
              </p>
              <div className="pr-box">
                <div className="pr-box-nadpis"><IconChevronRight size={15} /> Nezávazná poptávka</div>
                <p>
                  Zaslání poptávky ze strany objednatele je nezávazné. K uzavření smluvního vztahu
                  dochází až podpisem smlouvy oběma smluvními stranami.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div id="prava" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">5</span>
                <h2 className="pr-sekce-nadpis">Práva a povinnosti smluvních stran</h2>
              </div>
              <p><strong>Poskytovatel se zavazuje:</strong></p>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> Poskytovat služby řádně, odborně a s náležitou péčí.</li>
                <li><IconCircleCheck size={18} /> Zajistit služby prostřednictvím proškolených a bezúhonných pracovníků.</li>
                <li><IconCircleCheck size={18} /> Dodržovat platné právní předpisy a interní bezpečnostní standardy.</li>
                <li><IconCircleCheck size={18} /> Bezodkladně informovat objednatele o mimořádných událostech.</li>
              </ul>
              <p><strong>Objednatel se zavazuje:</strong></p>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> Poskytnout poskytovateli součinnost nezbytnou pro řádné plnění služeb.</li>
                <li><IconCircleCheck size={18} /> Uhradit sjednanou cenu za poskytnuté služby řádně a včas.</li>
                <li><IconCircleCheck size={18} /> Informovat poskytovatele o všech skutečnostech ovlivňujících bezpečnost.</li>
              </ul>
            </div>

            {/* 6 */}
            <div id="cena" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">6</span>
                <h2 className="pr-sekce-nadpis">Cena a platební podmínky</h2>
              </div>
              <p>
                Cena za poskytované služby je sjednána individuálně dle rozsahu, náročnosti a specifik
                jednotlivé zakázky. Cena může být stanovena hodinovou sazbou, měsíčním paušálem nebo
                jednorázovou částkou.
              </p>
              <p>
                Není-li sjednáno jinak, jsou platby prováděny na základě vystavené faktury se splatností
                14 dnů ode dne vystavení. V případě prodlení s úhradou je poskytovatel oprávněn účtovat
                úrok z prodlení v zákonné výši.
              </p>
            </div>

            {/* 7 */}
            <div id="odpovednost" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">7</span>
                <h2 className="pr-sekce-nadpis">Odpovědnost za škodu</h2>
              </div>
              <p>
                Poskytovatel odpovídá za škodu způsobenou porušením svých povinností v souladu
                s příslušnými ustanoveními občanského zákoníku. Poskytovatel je pojištěn pro případ
                odpovědnosti za škodu způsobenou při výkonu činnosti.
              </p>
              <div className="pr-box">
                <div className="pr-box-nadpis"><IconAlertTriangle size={15} /> Omezení odpovědnosti</div>
                <p>
                  Poskytovatel neodpovídá za škody vzniklé v důsledku okolností vylučujících odpovědnost
                  (vyšší moc), ani za škody způsobené porušením povinností na straně objednatele.
                </p>
              </div>
            </div>

            {/* 8 */}
            <div id="mlcenlivost" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">8</span>
                <h2 className="pr-sekce-nadpis">Mlčenlivost</h2>
              </div>
              <p>
                Poskytovatel a všichni jeho pracovníci jsou vázáni <strong>mlčenlivostí</strong> o všech
                skutečnostech, o kterých se dozvěděli v souvislosti s poskytováním služeb. Tato povinnost
                trvá i po ukončení smluvního vztahu.
              </p>
              <p>
                Diskrétnost a ochrana citlivých informací patří mezi základní hodnoty společnosti
                H&amp;H Security a jsou nedílnou součástí profesionálního přístupu k našim klientům.
              </p>
            </div>

            {/* 9 */}
            <div id="trvani" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">9</span>
                <h2 className="pr-sekce-nadpis">Trvání a ukončení smluvního vztahu</h2>
              </div>
              <p>
                Smluvní vztah se uzavírá na dobu určitou nebo neurčitou dle dohody smluvních stran.
                Smluvní vztah lze ukončit dohodou, výpovědí nebo odstoupením za podmínek sjednaných
                ve smlouvě a v souladu s občanským zákoníkem.
              </p>
              <p>
                Výpovědní doba, není-li sjednáno jinak, činí zpravidla jeden měsíc a počíná běžet
                prvním dnem měsíce následujícího po doručení výpovědi druhé smluvní straně.
              </p>
            </div>

            {/* 10 */}
            <div id="reklamace" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">10</span>
                <h2 className="pr-sekce-nadpis">Reklamace</h2>
              </div>
              <p>
                Objednatel je oprávněn reklamovat vady poskytnutých služeb bez zbytečného odkladu poté,
                co je zjistil. Reklamaci lze uplatnit písemně na kontaktní adrese poskytovatele.
                Poskytovatel se zavazuje reklamaci vyřídit v přiměřené lhůtě.
              </p>
            </div>

            {/* 11 */}
            <div id="zaverecna" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">11</span>
                <h2 className="pr-sekce-nadpis">Závěrečná ustanovení</h2>
              </div>
              <p>
                Tyto obchodní podmínky jsou platné a účinné od data uvedeného v záhlaví. Poskytovatel
                si vyhrazuje právo obchodní podmínky měnit či doplňovat. Vztahy neupravené těmito
                podmínkami se řídí příslušnými ustanoveními občanského zákoníku a dalších právních předpisů
                České republiky.
              </p>
              <p>
                Případné spory budou smluvní strany řešit přednostně smírnou cestou. Nedojde-li k dohodě,
                je k řešení sporu příslušný obecný soud České republiky.
              </p>
              <div className="pr-spravce">
                <div className="pr-spravce-avatar">AH</div>
                <div className="pr-spravce-info">
                  <div className="pr-spravce-jmeno">Kontakt pro dotazy</div>
                  <div className="pr-spravce-role">{KONTAKT.osoba} · jednatel</div>
                  <div className="pr-spravce-udaje">
                    <a href={`tel:${KONTAKT.telefonHref}`}><IconPhone size={13} style={{ verticalAlign: "-2px" }} /> {KONTAKT.telefon}</a>
                    <a href={`mailto:${KONTAKT.email}`}><IconMail size={13} style={{ verticalAlign: "-2px" }} /> {KONTAKT.email}</a>
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
