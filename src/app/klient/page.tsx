"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconShieldLock, IconArrowLeft, IconBolt, IconClock } from "@tabler/icons-react";
import "./klient.css";

export default function KlientStranka() {
  const [pocet, setPocet] = useState(0);

  useEffect(() => {
    // jemná animace "načítání" pro efekt
    const t = setInterval(() => {
      setPocet((p) => (p >= 100 ? 100 : p + 1));
    }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="kz">
      {/* Animované pozadí */}
      <div className="kz-pozadi">
        <div className="kz-mrizka" />
        <div className="kz-kruh kz-kruh-1" />
        <div className="kz-kruh kz-kruh-2" />
        <div className="kz-kruh kz-kruh-3" />
        {/* částice */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="kz-castice" style={{
            left: `${(i * 5.3) % 100}%`,
            animationDelay: `${(i * 0.4) % 8}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }} />
        ))}
      </div>

      <div className="kz-obsah">
        {/* Velký zámek s prstenci */}
        <div className="kz-zamek-obal">
          <div className="kz-prstenec kz-prstenec-1" />
          <div className="kz-prstenec kz-prstenec-2" />
          <div className="kz-prstenec kz-prstenec-3" />
          <div className="kz-zamek">
            <IconShieldLock size={64} />
          </div>
        </div>

        <span className="kz-eyebrow">
          <IconBolt size={15} /> Klientská zóna
        </span>

        <h1 className="kz-nadpis">
          Připravujeme pro vás<br />
          <span className="kz-nadpis-modra">něco výjimečného</span>
        </h1>

        <p className="kz-popis">
          Pracujeme na zabezpečeném klientském portálu nové generace. Získáte přístup
          k reálnému přehledu ostrahy, kamerovým záznamům, reportům a přímé komunikaci
          s dispečinkem — vše na jednom místě, chráněno špičkovým zabezpečením.
        </p>

        {/* Progress bar */}
        <div className="kz-progress-obal">
          <div className="kz-progress-hlava">
            <span>Vývoj portálu</span>
            <span className="kz-progress-cislo">{pocet}%</span>
          </div>
          <div className="kz-progress-drah">
            <div className="kz-progress-vypln" style={{ width: `${pocet}%` }} />
          </div>
        </div>

        {/* Funkce co přijdou */}
        <div className="kz-funkce">
          <div className="kz-funkce-polozka">
            <div className="kz-funkce-tecka" /> Živý přehled ostrahy
          </div>
          <div className="kz-funkce-polozka">
            <div className="kz-funkce-tecka" /> Kamerové záznamy 24/7
          </div>
          <div className="kz-funkce-polozka">
            <div className="kz-funkce-tecka" /> Reporty a statistiky
          </div>
          <div className="kz-funkce-polozka">
            <div className="kz-funkce-tecka" /> Přímá linka na dispečink
          </div>
        </div>

        {/* Info + zpět */}
        <div className="kz-spodek">
          <div className="kz-info">
            <IconClock size={16} />
            Spuštění již brzy
          </div>
          <Link href="/" className="kz-zpet">
            <IconArrowLeft size={16} /> Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
}
