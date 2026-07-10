"use client";

import { IconShieldLock, IconChevronRight, IconCircleCheck, IconDatabase, IconEye, IconUserCheck, IconMail, IconPhone, IconServer, IconCalendarTime } from "@tabler/icons-react";
import { PravniHero } from "@/components/PravniHero";
import { PravniNav } from "@/components/PravniNav";
import { KONTAKT } from "@/data/sluzby";
import "@/components/pravni.css";

const SEKCE = [
  { id: "spravce", nazev: "Správce údajů" },
  { id: "soc", nazev: "Security Operations Center" },
  { id: "ucel", nazev: "Účel zpracování" },
  { id: "rozsah", nazev: "Rozsah údajů" },
  { id: "pravni-zaklad", nazev: "Právní základ" },
  { id: "kamery", nazev: "Kamerové systémy" },
  { id: "doba", nazev: "Doba uchování" },
  { id: "prijemci", nazev: "Příjemci údajů" },
  { id: "zabezpeceni", nazev: "Zabezpečení dat" },
  { id: "prava", nazev: "Práva subjektů" },
  { id: "kontakt", nazev: "Kontakt a dozor" },
];

export default function OchranaUdaju() {
  return (
    <>
      <PravniHero
        eyebrow="Ochrana soukromí"
        nadpis="Zásady zpracování osobních údajů (GDPR)"
        popis="Informace o zpracování osobních údajů společností H&H Security s.r.o. v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR), včetně provozu Security Operations Center."
        ikona={<IconShieldLock size={34} />}
        ucinnost="Účinné od 1. ledna 2026 · GDPR / Nařízení (EU) 2016/679"
      />

      <section className="pr-telo">
        <div className="obsah pr-mrizka">
          <PravniNav sekce={SEKCE} />

          <div className="pr-obsah">
            {/* Správce */}
            <div id="spravce" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">1</span>
                <h2 className="pr-sekce-nadpis">Správce osobních údajů</h2>
              </div>
              <p>
                Správcem osobních údajů ve smyslu čl. 4 odst. 7 GDPR je společnost
                {" "}<strong>{KONTAKT.firma}</strong>, která určuje účely a prostředky zpracování
                osobních údajů.
              </p>
              <div className="pr-spravce">
                <div className="pr-spravce-avatar">AH</div>
                <div className="pr-spravce-info">
                  <div className="pr-spravce-jmeno">{KONTAKT.osoba}</div>
                  <div className="pr-spravce-role">Jednatel a zakladatel · odpovědná osoba za ochranu údajů</div>
                  <div className="pr-spravce-udaje">
                    <span>{KONTAKT.firma}</span>
                    <span>IČ: {KONTAKT.ic}</span>
                    <span>{KONTAKT.adresa}</span>
                  </div>
                </div>
              </div>
              <p>
                Ve všech záležitostech týkajících se zpracování osobních údajů se můžete obracet
                přímo na jednatele společnosti pana <strong>{KONTAKT.osoba}</strong>, který osobně
                dohlíží na dodržování zásad ochrany osobních údajů v celé organizaci.
              </p>
            </div>

            {/* SOC */}
            <div id="soc" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">2</span>
                <h2 className="pr-sekce-nadpis">H&amp;H Security Operations Center</h2>
              </div>
              <p>
                <strong>Security Operations Center (SOC)</strong> je centrální dohledové pracoviště
                společnosti H&amp;H Security, které zajišťuje nepřetržitý monitoring zabezpečovaných
                objektů, vyhodnocování poplachových událostí a koordinaci zásahů.
              </p>
              <div className="pr-box">
                <div className="pr-box-nadpis"><IconServer size={15} /> Provoz SOC a zpracování dat</div>
                <p>
                  V rámci provozu SOC dochází ke zpracování osobních údajů zejména prostřednictvím
                  kamerových systémů, přístupových systémů, záznamů poplachových událostí a komunikačních
                  záznamů. Veškeré zpracování probíhá za přísných bezpečnostních podmínek a v souladu s GDPR.
                </p>
              </div>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> Nepřetržitý dohled 24 hodin denně, 7 dní v týdnu.</li>
                <li><IconCircleCheck size={18} /> Monitoring kamerových systémů napojených objektů.</li>
                <li><IconCircleCheck size={18} /> Evidence a vyhodnocování poplachových událostí.</li>
                <li><IconCircleCheck size={18} /> Koordinace mobilních zásahových jednotek.</li>
              </ul>
            </div>

            {/* Účel */}
            <div id="ucel" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">3</span>
                <h2 className="pr-sekce-nadpis">Účel zpracování osobních údajů</h2>
              </div>
              <p>Osobní údaje zpracováváme pro následující účely:</p>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> Zajištění bezpečnosti osob a majetku v zabezpečovaných objektech.</li>
                <li><IconCircleCheck size={18} /> Provoz kamerových a přístupových systémů (ochrana oprávněných zájmů).</li>
                <li><IconCircleCheck size={18} /> Vyhodnocování a dokumentace bezpečnostních incidentů.</li>
                <li><IconCircleCheck size={18} /> Plnění smluvních závazků vůči klientům.</li>
                <li><IconCircleCheck size={18} /> Vedení personální a mzdové agendy zaměstnanců.</li>
                <li><IconCircleCheck size={18} /> Plnění zákonných povinností správce.</li>
              </ul>
            </div>

            {/* Rozsah */}
            <div id="rozsah" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">4</span>
                <h2 className="pr-sekce-nadpis">Rozsah zpracovávaných údajů</h2>
              </div>
              <div className="pr-def">
                <div className="pr-def-klic">Identifikační údaje</div>
                <div className="pr-def-hodnota">Jméno, příjmení, datum narození, rodné číslo (u zaměstnanců).</div>
                <div className="pr-def-klic">Kontaktní údaje</div>
                <div className="pr-def-hodnota">Adresa, telefonní číslo, e-mailová adresa.</div>
                <div className="pr-def-klic">Obrazové záznamy</div>
                <div className="pr-def-hodnota">Kamerové záznamy z monitorovaných prostor.</div>
                <div className="pr-def-klic">Přístupové údaje</div>
                <div className="pr-def-hodnota">Záznamy o vstupu a pohybu osob v zabezpečených objektech.</div>
                <div className="pr-def-klic">Údaje o incidentech</div>
                <div className="pr-def-hodnota">Záznamy o poplachových a mimořádných událostech.</div>
              </div>
            </div>

            {/* Právní základ */}
            <div id="pravni-zaklad" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">5</span>
                <h2 className="pr-sekce-nadpis">Právní základ zpracování</h2>
              </div>
              <p>Zpracování osobních údajů probíhá na základě těchto právních titulů dle čl. 6 GDPR:</p>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> <strong>Plnění smlouvy</strong> — poskytování sjednaných bezpečnostních služeb.</li>
                <li><IconCircleCheck size={18} /> <strong>Oprávněný zájem</strong> — ochrana majetku a bezpečnosti (kamerové systémy).</li>
                <li><IconCircleCheck size={18} /> <strong>Plnění právní povinnosti</strong> — zákonné povinnosti správce.</li>
                <li><IconCircleCheck size={18} /> <strong>Souhlas</strong> — v případech, kdy je souhlas vyžadován.</li>
              </ul>
            </div>

            {/* Kamery */}
            <div id="kamery" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">6</span>
                <h2 className="pr-sekce-nadpis">Kamerové systémy a monitoring</h2>
              </div>
              <p>
                Monitorované prostory jsou viditelně označeny informačními tabulkami o kamerovém systému.
                Kamerové záznamy jsou zpracovávány výhradně za účelem ochrany osob a majetku.
              </p>
              <div className="pr-box">
                <div className="pr-box-nadpis"><IconEye size={15} /> Přístup k záznamům</div>
                <p>
                  Přístup ke kamerovým záznamům mají pouze oprávnění pracovníci Security Operations Center
                  vázaní mlčenlivostí. Záznamy jsou zabezpečeny proti neoprávněnému přístupu a zneužití.
                </p>
              </div>
            </div>

            {/* Doba */}
            <div id="doba" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">7</span>
                <h2 className="pr-sekce-nadpis">Doba uchování údajů</h2>
              </div>
              <div className="pr-def">
                <div className="pr-def-klic">Kamerové záznamy</div>
                <div className="pr-def-hodnota">Zpravidla maximálně 14 dnů, není-li důvod pro delší uchování (incident).</div>
                <div className="pr-def-klic">Záznamy o incidentech</div>
                <div className="pr-def-hodnota">Po dobu nezbytnou pro vyřešení a dle zákonných lhůt.</div>
                <div className="pr-def-klic">Smluvní údaje</div>
                <div className="pr-def-hodnota">Po dobu trvání smlouvy a následně dle archivačních lhůt.</div>
                <div className="pr-def-klic">Personální údaje</div>
                <div className="pr-def-hodnota">Po dobu stanovenou pracovněprávními a daňovými předpisy.</div>
              </div>
            </div>

            {/* Příjemci */}
            <div id="prijemci" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">8</span>
                <h2 className="pr-sekce-nadpis">Příjemci osobních údajů</h2>
              </div>
              <p>
                Osobní údaje jsou zpřístupněny pouze oprávněným osobám a zpracovatelům, kteří pro správce
                zajišťují dílčí činnosti. Osobní údaje mohou být předány:
              </p>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> Oprávněným pracovníkům Security Operations Center.</li>
                <li><IconCircleCheck size={18} /> Orgánům činným v trestním řízení (na základě zákona).</li>
                <li><IconCircleCheck size={18} /> Smluvním zpracovatelům (IT, účetnictví) vázaným mlčenlivostí.</li>
              </ul>
              <p>
                Osobní údaje <strong>nejsou předávány</strong> do třetích zemí mimo Evropskou unii
                ani mezinárodním organizacím.
              </p>
            </div>

            {/* Zabezpečení */}
            <div id="zabezpeceni" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">9</span>
                <h2 className="pr-sekce-nadpis">Zabezpečení osobních údajů</h2>
              </div>
              <p>
                Společnost H&amp;H Security přijala odpovídající technická a organizační opatření k zajištění
                ochrany osobních údajů, zejména:
              </p>
              <ul className="pr-seznam">
                <li><IconCircleCheck size={18} /> Šifrování a zabezpečený přístup k datovým úložištím.</li>
                <li><IconCircleCheck size={18} /> Řízení přístupových oprávnění a autentizace.</li>
                <li><IconCircleCheck size={18} /> Fyzické zabezpečení prostor Security Operations Center.</li>
                <li><IconCircleCheck size={18} /> Pravidelné zálohování a monitoring bezpečnosti.</li>
                <li><IconCircleCheck size={18} /> Povinnost mlčenlivosti všech pracovníků.</li>
              </ul>
            </div>

            {/* Práva */}
            <div id="prava" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">10</span>
                <h2 className="pr-sekce-nadpis">Práva subjektů údajů</h2>
              </div>
              <p>V souladu s GDPR máte jako subjekt údajů následující práva:</p>
              <ul className="pr-seznam">
                <li><IconUserCheck size={18} /> <strong>Právo na přístup</strong> — informace o zpracování vašich údajů.</li>
                <li><IconUserCheck size={18} /> <strong>Právo na opravu</strong> — oprava nepřesných údajů.</li>
                <li><IconUserCheck size={18} /> <strong>Právo na výmaz</strong> — „právo být zapomenut“ za stanovených podmínek.</li>
                <li><IconUserCheck size={18} /> <strong>Právo na omezení</strong> — omezení zpracování údajů.</li>
                <li><IconUserCheck size={18} /> <strong>Právo na přenositelnost</strong> — získání údajů ve strukturovaném formátu.</li>
                <li><IconUserCheck size={18} /> <strong>Právo vznést námitku</strong> — proti zpracování z oprávněného zájmu.</li>
                <li><IconUserCheck size={18} /> <strong>Právo podat stížnost</strong> — u dozorového úřadu.</li>
              </ul>
            </div>

            {/* Kontakt */}
            <div id="kontakt" className="pr-sekce">
              <div className="pr-sekce-hlava">
                <span className="pr-sekce-cislo">11</span>
                <h2 className="pr-sekce-nadpis">Kontakt a dozorový úřad</h2>
              </div>
              <p>
                Pro uplatnění svých práv nebo v případě jakýchkoli dotazů ohledně zpracování osobních
                údajů se obracejte na jednatele společnosti pana <strong>{KONTAKT.osoba}</strong>:
              </p>
              <div className="pr-spravce">
                <div className="pr-spravce-avatar">AH</div>
                <div className="pr-spravce-info">
                  <div className="pr-spravce-jmeno">{KONTAKT.osoba}</div>
                  <div className="pr-spravce-role">Jednatel · odpovědná osoba za ochranu osobních údajů</div>
                  <div className="pr-spravce-udaje">
                    <a href={`tel:${KONTAKT.telefonHref}`}><IconPhone size={13} style={{ verticalAlign: "-2px" }} /> {KONTAKT.telefon}</a>
                    <a href={`mailto:${KONTAKT.email}`}><IconMail size={13} style={{ verticalAlign: "-2px" }} /> {KONTAKT.email}</a>
                  </div>
                </div>
              </div>
              <div className="pr-box">
                <div className="pr-box-nadpis"><IconChevronRight size={15} /> Dozorový úřad</div>
                <p>
                  Máte právo podat stížnost u dozorového úřadu, kterým je <strong>Úřad pro ochranu
                  osobních údajů</strong>, se sídlem Pplk. Sochora 27, 170 00 Praha 7, www.uoou.cz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
