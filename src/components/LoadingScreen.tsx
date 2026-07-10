"use client";

import { useState, useEffect } from "react";
import { IconShieldLock } from "@tabler/icons-react";
import "./loading-screen.css";

export default function LoadingScreen() {
  const [pocet, setPocet] = useState(0);
  const [mizi, setMizi] = useState(false);
  const [pryc, setPryc] = useState(false);

  useEffect(() => {
    // zablokuj scroll během loadingu
    document.body.style.overflow = "hidden";

    let aktualni = 0;
    const t = setInterval(() => {
      // nerovnoměrné načítání pro realistický efekt
      const krok = aktualni < 60 ? 3 : aktualni < 85 ? 2 : 1;
      aktualni = Math.min(100, aktualni + krok);
      setPocet(aktualni);

      if (aktualni >= 100) {
        clearInterval(t);
        // po dokončení počkej chvíli, pak fade out
        setTimeout(() => setMizi(true), 400);
        setTimeout(() => {
          setPryc(true);
          document.body.style.overflow = "";
        }, 1100);
      }
    }, 30);

    return () => {
      clearInterval(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (pryc) return null;

  return (
    <div className={`ls ${mizi ? "ls-mizi" : ""}`}>
      {/* Animované pozadí */}
      <div className="ls-pozadi">
        <div className="ls-mrizka" />
        <div className="ls-kruh ls-kruh-1" />
        <div className="ls-kruh ls-kruh-2" />
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="ls-castice" style={{
            left: `${(i * 7.1) % 100}%`,
            animationDelay: `${(i * 0.5) % 6}s`,
            animationDuration: `${6 + (i % 4)}s`,
          }} />
        ))}
      </div>

      <div className="ls-obsah">
        {/* Zámek s prstenci */}
        <div className="ls-zamek-obal">
          <div className="ls-prstenec ls-prstenec-1" />
          <div className="ls-prstenec ls-prstenec-2" />
          <div className="ls-prstenec ls-prstenec-3" />
          <div className="ls-zamek">
            <IconShieldLock size={48} />
          </div>
        </div>

        {/* Název */}
        <div className="ls-nazev">
          <span className="ls-nazev-hlavni">H&amp;H SECURITY</span>
          <span className="ls-nazev-slogan">ZABEZPEČÍME VÁŠ KLID</span>
        </div>

        {/* Progress */}
        <div className="ls-progress">
          <div className="ls-progress-drah">
            <div className="ls-progress-vypln" style={{ width: `${pocet}%` }} />
          </div>
          <div className="ls-progress-cislo">{pocet}%</div>
        </div>
      </div>
    </div>
  );
}
