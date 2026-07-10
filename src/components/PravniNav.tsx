"use client";

import { useState, useEffect } from "react";

type Sekce = { id: string; nazev: string };

export function PravniNav({ sekce }: { sekce: Sekce[] }) {
  const [aktivni, setAktivni] = useState(sekce[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setAktivni(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sekce.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sekce]);

  const skoc = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="pr-nav">
      <div className="pr-nav-nadpis">Obsah dokumentu</div>
      <div className="pr-nav-seznam">
        {sekce.map((s, i) => (
          <button
            key={s.id}
            className={`pr-nav-odkaz ${aktivni === s.id ? "pr-nav-odkaz-aktivni" : ""}`}
            onClick={() => skoc(s.id)}
          >
            <span className="pr-nav-cislo">{i + 1}</span>
            {s.nazev}
          </button>
        ))}
      </div>
    </nav>
  );
}
