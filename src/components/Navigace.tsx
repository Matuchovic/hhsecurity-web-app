"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconLock, IconMenu2, IconX } from "@tabler/icons-react";
import "./navigace.css";

const ODKAZY = [
  { label: "Domů", href: "/" },
  { label: "Služby", href: "/sluzby" },
  { label: "O nás", href: "/o-nas" },
  { label: "Reference", href: "/reference" },
  { label: "Technologie", href: "/technologie" },
  { label: "Kariéra", href: "/kariera" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigace() {
  const [scrolled, setScrolled] = useState(false);
  const [mobilOtevren, setMobilOtevren] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobilOtevren(false);
  }, [pathname]);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="obsah nav-vnitrek">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <img src="/hh-logo-bile.png" alt="H&H Security" className="nav-logo-img" />
          <span className="nav-logo-text">
            <span className="nav-logo-nazev">H&amp;H SECURITY</span>
            <span className="nav-logo-slogan">ZABEZPEČÍME VÁŠ KLID</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="nav-menu">
          {ODKAZY.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className={`nav-odkaz ${pathname === o.href ? "nav-odkaz-aktivni" : ""}`}
            >
              {o.label}
            </Link>
          ))}
        </nav>

        {/* Klientská zóna */}
        <Link href="/klient" className="nav-klient">
          <IconLock size={16} />
          Klientská zóna
        </Link>

        {/* Mobilní tlačítko */}
        <button
          className="nav-burger"
          onClick={() => setMobilOtevren((v) => !v)}
          aria-label="Menu"
        >
          {mobilOtevren ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobilní menu */}
      <div className={`nav-mobil ${mobilOtevren ? "nav-mobil-otevren" : ""}`}>
        {ODKAZY.map((o) => (
          <Link
            key={o.href}
            href={o.href}
            className={`nav-mobil-odkaz ${pathname === o.href ? "nav-mobil-odkaz-aktivni" : ""}`}
          >
            {o.label}
          </Link>
        ))}
        <Link href="/klient" className="nav-mobil-klient">
          <IconLock size={16} /> Klientská zóna
        </Link>
      </div>
    </header>
  );
}
