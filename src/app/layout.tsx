import type { Metadata } from "next";
import "./globals.css";
import Navigace from "@/components/Navigace";
import Paticka from "@/components/Paticka";

export const metadata: Metadata = {
  title: "H&H Security — Zabezpečíme váš klid",
  description:
    "Profesionální bezpečnostní služby na míru. 24/7 ostraha, moderní technologie, rychlý zásah do 15 minut. Fyzická ostraha, PCO, kamerové systémy, mobilní jednotky.",
  keywords: ["bezpečnostní služby", "ostraha", "PCO", "kamerové systémy", "H&H Security"],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "H&H Security — Zabezpečíme váš klid",
    description: "Profesionální bezpečnostní služby na míru. 24/7 ochrana, moderní technologie.",
    images: ["/og-banner.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <Navigace />
        <main>{children}</main>
        <Paticka />
      </body>
    </html>
  );
}
