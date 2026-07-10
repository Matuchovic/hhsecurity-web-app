// Reálné služby H&H Security (dle hhsecurity.cz)

export type Sluzba = {
  klic: string;
  ikona: string; // název tabler ikony
  obraz: string;
  nazev: string;
  kratky: string;
  body: string[];
};

export const SLUZBY: Sluzba[] = [
  {
    klic: "fyzicka-ostraha",
    ikona: "IconBuildingSkyscraper",
    obraz: "/images/strazny-mesto-v2.png",
    nazev: "Fyzická ostraha objektů",
    kratky: "Profesionální strážní služba pro objekty, areály i soukromé rezidence.",
    body: [
      "Střežení administrativních budov, průmyslových areálů, skladových prostor i soukromých rezidencí.",
      "Kontrola vstupu a výstupu osob či vozidel.",
      "Zajištění bezpečnosti při nepřetržitém provozu (24/7 ostraha).",
      "Prevence proti krádežím, vandalismu či jiným nežádoucím událostem.",
    ],
  },
  {
    klic: "akce",
    ikona: "IconUsersGroup",
    obraz: "/images/hero-zasah.png",
    nazev: "Bezpečnostní služby na akcích",
    kratky: "Zajištění pořádku na kulturních, sportovních a společenských akcích.",
    body: [
      "Zajištění pořádku na kulturních, sportovních a společenských akcích.",
      "Profesionální zvládnutí krizových situací a organizace davu.",
      "Kontrola vstupenek a identifikace osob na uzavřených akcích.",
    ],
  },
  {
    klic: "mesta",
    ikona: "IconBuildingCommunity",
    obraz: "/images/mobilni-jednotka.png",
    nazev: "Ochrana měst a obcí",
    kratky: "Zvýšení bezpečnosti občanů prostřednictvím viditelné přítomnosti v ulicích.",
    body: [
      "Zvýšení bezpečnosti občanů prostřednictvím viditelné přítomnosti v ulicích.",
      "Spolupráce s místní samosprávou a policií.",
      "Prevence proti kriminalitě, vandalismu a narušení veřejného pořádku.",
      "Asistent bezpečného města.",
    ],
  },
  {
    klic: "vip",
    ikona: "IconUserShield",
    obraz: "/images/hero-tym.png",
    nazev: "VIP ochranka a osobní bezpečnost",
    kratky: "Doprovod významných osobností, podnikatelů či členů rodiny.",
    body: [
      "Doprovod významných osobností, podnikatelů či členů rodiny.",
      "Ochranné služby při převozu cenností nebo důležitých dokumentů.",
      "Analýza rizik a vytvoření bezpečnostního plánu.",
    ],
  },
  {
    klic: "kamery",
    ikona: "IconDeviceCctv",
    obraz: "/images/operations-center.png",
    nazev: "Kamerové systémy a PCO",
    kratky: "Moderní CCTV systémy a pult centralizované ochrany s okamžitou reakcí.",
    body: [
      "Moderní CCTV systémy s vysokým rozlišením a vzdáleným přístupem.",
      "24/7 monitoring a okamžitá reakce na poplachové události.",
      "Napojení objektů na pult centralizované ochrany (PCO).",
      "Dálkový dohled a záznam pro maximální přehled.",
    ],
  },
  {
    klic: "pristup",
    ikona: "IconFingerprint",
    obraz: "/images/pristupovy-system.png",
    nazev: "Přístupové systémy",
    kratky: "Elektronické zabezpečení a kontrola vstupu do objektů.",
    body: [
      "Elektronické zabezpečení a kontrola vstupu do objektů.",
      "Čipové a biometrické přístupové systémy.",
      "Evidence pohybu osob a správa oprávnění.",
      "Integrace s kamerovým a poplachovým systémem.",
    ],
  },
];

// Statistiky firmy
export const STATY_FIRMA = [
  { cislo: "5+", popis: "Let zkušeností" },
  { cislo: "500+", popis: "Spokojených klientů" },
  { cislo: "24/7", popis: "Nonstop dostupnost" },
  { cislo: "99,9%", popis: "Úspěšnost zásahů" },
];

// Kontakt
export const KONTAKT = {
  firma: "H&H Security s.r.o.",
  osoba: "Antonín Havlan",
  telefon: "+420 720 305 344",
  telefonHref: "+420720305344",
  email: "a.havlan@hh-security.cz",
  ic: "14042711",
  dic: "CZ14042711",
  adresa: "Rybná 716/24, Praha 1, 110 00 Staré Město",
  facebook: "https://www.facebook.com/profile.php?id=100076107425832",
};

// Proč H&H Security (dle reálného webu)
export const PROC_HH = [
  {
    ikona: "IconShieldCheck",
    nazev: "Profesionální tým",
    popis: "Naši zaměstnanci jsou školení odborníci s licencí na výkon bezpečnostní činnosti.",
  },
  {
    ikona: "IconAdjustments",
    nazev: "Individuální přístup",
    popis: "Každý klient má specifické potřeby, proto vytváříme na míru šité bezpečnostní plány.",
  },
  {
    ikona: "IconLock",
    nazev: "Diskrétnost a spolehlivost",
    popis: "Dbáme na důvěrnost informací a špičkovou kvalitu poskytovaných služeb.",
  },
  {
    ikona: "IconClock24",
    nazev: "Nepřetržitá dostupnost",
    popis: "Jsme k dispozici 24/7, abychom zajistili vaši bezpečnost kdykoliv a kdekoliv.",
  },
];
