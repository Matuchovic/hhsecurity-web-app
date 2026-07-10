import Link from "next/link";
import { IconMapPin, IconPhone, IconMail, IconClock, IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";
import "./paticka.css";

export default function Paticka() {
  return (
    <footer className="paticka">
      <div className="obsah paticka-mrizka">
        {/* Značka */}
        <div className="paticka-znacka">
          <Link href="/" className="paticka-logo">
            <span className="paticka-logo-kruh">
              <img src="/hh-logo.png" alt="H&H Security" />
            </span>
            <span>H&amp;H SECURITY</span>
          </Link>
          <p className="paticka-popis">
            Poskytujeme komplexní bezpečnostní služby s důrazem na profesionalitu,
            spolehlivost a moderní technologie.
          </p>
          <div className="paticka-social">
            <a href="#" aria-label="Facebook"><IconBrandFacebook size={18} /></a>
            <a href="#" aria-label="LinkedIn"><IconBrandLinkedin size={18} /></a>
            <a href="#" aria-label="Instagram"><IconBrandInstagram size={18} /></a>
          </div>
        </div>

        {/* Rychlé odkazy */}
        <div className="paticka-sloupec">
          <h4>Rychlé odkazy</h4>
          <Link href="/">Domů</Link>
          <Link href="/o-nas">O nás</Link>
          <Link href="/sluzby">Služby</Link>
          <Link href="/reference">Reference</Link>
          <Link href="/kariera">Kariéra</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>

        {/* Služby */}
        <div className="paticka-sloupec">
          <h4>Naše služby</h4>
          <Link href="/sluzby">Fyzická ostraha</Link>
          <Link href="/sluzby">Pult centralizované ochrany</Link>
          <Link href="/sluzby">Kamerové systémy</Link>
          <Link href="/sluzby">Mobilní zásahové jednotky</Link>
          <Link href="/sluzby">Přístupové systémy</Link>
          <Link href="/sluzby">Požární ochrana</Link>
        </div>

        {/* Kontakt */}
        <div className="paticka-sloupec">
          <h4>Kontaktní informace</h4>
          <div className="paticka-kontakt">
            <IconMapPin size={17} />
            <span>H&amp;H Security s.r.o.<br />Rybná 716/24, Praha 1<br />110 00 Staré Město</span>
          </div>
          <a className="paticka-kontakt" href="tel:+420222333125">
            <IconPhone size={17} />
            <span>+420 222 333 125</span>
          </a>
          <a className="paticka-kontakt" href="mailto:info@hhsecurity.cz">
            <IconMail size={17} />
            <span>info@hhsecurity.cz</span>
          </a>
          <div className="paticka-kontakt">
            <IconClock size={17} />
            <span>24/7 Nonstop služba</span>
          </div>
        </div>
      </div>

      <div className="paticka-spodek">
        <div className="obsah paticka-spodek-vnitrek">
          <span>© {new Date().getFullYear()} H&amp;H Security s.r.o. Všechna práva vyhrazena.</span>
          <div className="paticka-spodek-odkazy">
            <Link href="/ochrana-udaju">Ochrana osobních údajů</Link>
            <Link href="/obchodni-podminky">Obchodní podmínky</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
