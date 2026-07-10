"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconMail, IconCalendar } from "@tabler/icons-react";
import "./novinky-nahled.css";

const CLANKY = [
  {
    obraz: "/images/kamerovy-system.png",
    datum: "15. května 2026",
    nazev: "Moderní trendy v kamerových systémech pro rok 2026",
  },
  {
    obraz: "/images/mobilni-jednotka.png",
    datum: "8. května 2026",
    nazev: "Jak vybrat správnou bezpečnostní službu pro vaši firmu",
  },
  {
    obraz: "/images/operations-center.png",
    datum: "1. května 2026",
    nazev: "Výhody pultu centralizované ochrany pro váš business",
  },
];

export default function NovinkyNahled() {
  const [email, setEmail] = useState("");
  const [odeslano, setOdeslano] = useState(false);

  function odeslat() {
    if (email.trim() && email.includes("@")) {
      setOdeslano(true);
      setEmail("");
      setTimeout(() => setOdeslano(false), 4000);
    }
  }

  return (
    <section className="sekce nov-n">
      <div className="obsah">
        <div className="nov-n-hlava reveal">
          <div>
            <span className="eyebrow">Novinky</span>
            <h2 className="sekce-nadpis">Aktuality ze světa bezpečnosti</h2>
          </div>
          <Link href="/novinky" className="nov-n-vse">
            Zobrazit všechny novinky <IconArrowRight size={17} />
          </Link>
        </div>

        <div className="nov-n-mrizka">
          {/* Články */}
          {CLANKY.map((c, i) => (
            <Link href="/novinky" key={i} className={`nov-n-karta reveal reveal-${(i % 4) + 1}`}>
              <div className="nov-n-obraz">
                <img src={c.obraz} alt={c.nazev} />
              </div>
              <div className="nov-n-telo">
                <div className="nov-n-datum">
                  <IconCalendar size={13} /> {c.datum}
                </div>
                <h3 className="nov-n-nazev">{c.nazev}</h3>
                <span className="nov-n-vic">
                  Přečíst více <IconArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}

          {/* Odběr novinek */}
          <div className="nov-n-odber reveal reveal-4">
            <div className="nov-n-odber-ikona"><IconMail size={26} /></div>
            <h3 className="nov-n-odber-nadpis">Odebírejte novinky</h3>
            <p className="nov-n-odber-text">
              Získejte pravidelné informace o novinkách ze světa bezpečnosti a našich službách.
            </p>
            <input
              type="email"
              className="nov-n-odber-input"
              placeholder="Váš e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && odeslat()}
            />
            <button className="nov-n-odber-btn" onClick={odeslat}>
              {odeslano ? "Děkujeme! ✓" : "Odebírat novinky"}
            </button>
            <p className="nov-n-odber-mala">
              Odesláním souhlasíte se zpracováním osobních údajů.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
