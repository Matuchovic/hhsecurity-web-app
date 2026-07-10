"use client";

import "./reference-nahled.css";

const KLIENTI = [
  "ŠKODA",
  "Plzeňský Prazdroj",
  "Česká spořitelna",
  "Kaufland",
  "DHL",
  "Panasonic",
  "B. Braun",
  "Miele",
];

export default function ReferenceNahled() {
  // zdvojení pro plynulou nekonečnou smyčku
  const rada = [...KLIENTI, ...KLIENTI];

  return (
    <section className="sekce ref-n">
      <div className="obsah ref-n-hlava reveal">
        <span className="eyebrow">Důvěřují nám</span>
        <h2 className="sekce-nadpis">Reference našich klientů</h2>
      </div>

      <div className="ref-n-pas">
        <div className="ref-n-stopa">
          {rada.map((k, i) => (
            <div key={i} className="ref-n-logo">{k}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
