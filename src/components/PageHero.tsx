import "./page-hero.css";

type Props = {
  eyebrow: string;
  nadpis: string;
  popis?: string;
  obraz?: string;
};

export default function PageHero({ eyebrow, nadpis, popis, obraz }: Props) {
  return (
    <section className="ph">
      {obraz && (
        <div className="ph-pozadi">
          <img src={obraz} alt="" />
          <div className="ph-preliv" />
        </div>
      )}
      <div className="obsah ph-vnitrek">
        <span className="eyebrow ph-eyebrow">{eyebrow}</span>
        <h1 className="ph-nadpis">{nadpis}</h1>
        {popis && <p className="ph-popis">{popis}</p>}
      </div>
    </section>
  );
}
