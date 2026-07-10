"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconShieldLock, IconArrowLeft, IconAlertTriangle, IconLoader2, IconLock, IconKey } from "@tabler/icons-react";
import "./interni.css";

// ⚠️ DOČASNÉ TESTOVACÍ ÚDAJE — nahradit bezpečnými před ostrým provozem.
// Poznámka: frontendové ověření je jen první brána, ne plná ochrana.
const TEST_KOD = "HH-OPS";
const TEST_HESLO = "test2026";

const CIL_URL = "https://www.hhplatform.cz/login";
const MAX_POKUSU = 5;
const ZAMCENI_MS = 60_000; // 60 sekund

export default function InterniStranka() {
  const [kod, setKod] = useState("");
  const [heslo, setHeslo] = useState("");
  const [chyba, setChyba] = useState("");
  const [pokusy, setPokusy] = useState(0);
  const [zamceno, setZamceno] = useState(false);
  const [zbyva, setZbyva] = useState(0);
  const [overuji, setOveruji] = useState(false);
  const [uspech, setUspech] = useState(false);

  // odpočet zámku
  useEffect(() => {
    if (!zamceno) return;
    const konec = Date.now() + ZAMCENI_MS;
    const t = setInterval(() => {
      const zb = Math.max(0, Math.ceil((konec - Date.now()) / 1000));
      setZbyva(zb);
      if (zb <= 0) {
        setZamceno(false);
        setPokusy(0);
        setChyba("");
        clearInterval(t);
      }
    }, 250);
    return () => clearInterval(t);
  }, [zamceno]);

  function odeslat() {
    if (zamceno || overuji) return;
    setChyba("");

    if (!kod.trim() || !heslo.trim()) {
      setChyba("Vyplňte přístupový kód i heslo.");
      return;
    }

    setOveruji(true);

    // simulace ověření (krátká prodleva pro dojem serverového ověření)
    setTimeout(() => {
      const spravne = kod.trim().toUpperCase() === TEST_KOD.toUpperCase() && heslo === TEST_HESLO;
      if (spravne) {
        setUspech(true);
        setOveruji(false);
        // přesměrování na platformu
        setTimeout(() => {
          window.location.href = CIL_URL;
        }, 1400);
      } else {
        const novePokusy = pokusy + 1;
        setPokusy(novePokusy);
        setOveruji(false);
        if (novePokusy >= MAX_POKUSU) {
          setZamceno(true);
          setChyba(`Příliš mnoho neúspěšných pokusů. Přístup dočasně zablokován.`);
        } else {
          setChyba(`Nesprávné údaje. Zbývá ${MAX_POKUSU - novePokusy} pokusů.`);
        }
        setHeslo("");
      }
    }, 900);
  }

  return (
    <div className="iz">
      {/* Animované pozadí */}
      <div className="iz-pozadi">
        <div className="iz-mrizka" />
        <div className="iz-kruh iz-kruh-1" />
        <div className="iz-kruh iz-kruh-2" />
        <div className="iz-skenovaci-linka" />
      </div>

      <div className="iz-panel">
        {/* Hlavička */}
        <div className="iz-hlava">
          <div className={`iz-ikona ${uspech ? "iz-ikona-uspech" : ""} ${zamceno ? "iz-ikona-zamek" : ""}`}>
            <IconShieldLock size={32} />
          </div>
          <div className="iz-znacka">
            <span className="iz-znacka-nazev">H&amp;H SECURITY</span>
            <span className="iz-znacka-podnazev">Interní zóna · Zabezpečený přístup</span>
          </div>
        </div>

        {uspech ? (
          /* Úspěch — přesměrování */
          <div className="iz-uspech">
            <div className="iz-uspech-ikona"><IconLoader2 size={28} className="iz-spin" /></div>
            <div className="iz-uspech-nadpis">Přístup ověřen</div>
            <div className="iz-uspech-text">Přesměrování do zabezpečené platformy…</div>
            <div className="iz-uspech-cil">{CIL_URL}</div>
          </div>
        ) : (
          <>
            <div className="iz-info">
              <IconAlertTriangle size={15} />
              Tento vstup je určen výhradně pro autorizovaný personál H&amp;H Security.
            </div>

            {/* Přístupový kód */}
            <div className="iz-pole">
              <label><IconKey size={14} /> Přístupový kód</label>
              <input
                type="text"
                value={kod}
                onChange={(e) => setKod(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && document.getElementById("iz-heslo")?.focus()}
                placeholder="Zadejte přístupový kód"
                disabled={zamceno || overuji}
                autoComplete="off"
                spellCheck={false}
              />
            </div>

            {/* Heslo */}
            <div className="iz-pole">
              <label><IconLock size={14} /> Heslo</label>
              <input
                id="iz-heslo"
                type="password"
                value={heslo}
                onChange={(e) => setHeslo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && odeslat()}
                placeholder="Zadejte heslo"
                disabled={zamceno || overuji}
                autoComplete="off"
              />
            </div>

            {/* Chyba */}
            {chyba && (
              <div className="iz-chyba">
                <IconAlertTriangle size={15} /> {chyba}
                {zamceno && zbyva > 0 && <span className="iz-odpocet"> Odemčení za {zbyva}s</span>}
              </div>
            )}

            {/* Indikátor pokusů */}
            {pokusy > 0 && !zamceno && (
              <div className="iz-pokusy">
                {Array.from({ length: MAX_POKUSU }).map((_, i) => (
                  <span key={i} className={`iz-pokus-tecka ${i < pokusy ? "iz-pokus-tecka-plna" : ""}`} />
                ))}
              </div>
            )}

            {/* Tlačítko */}
            <button className="iz-tlacitko" onClick={odeslat} disabled={zamceno || overuji}>
              {overuji ? (
                <><IconLoader2 size={18} className="iz-spin" /> Ověřuji…</>
              ) : zamceno ? (
                <>Přístup zablokován ({zbyva}s)</>
              ) : (
                <>Ověřit a pokračovat</>
              )}
            </button>

            {/* Bezpečnostní poznámka */}
            <div className="iz-poznamka">
              <IconLock size={12} /> Dvoustupňové zabezpečení · Veškeré pokusy o přístup jsou zaznamenávány
            </div>
          </>
        )}

        {/* Zpět */}
        <Link href="/" className="iz-zpet">
          <IconArrowLeft size={15} /> Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
}
