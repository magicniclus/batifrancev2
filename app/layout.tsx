import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NEAGU LONUT - Rénovation Intérieure, Plomberie, Salle de Bain & Carrelage en Île-de-France",
  description: "NEAGU LONUT, expert en rénovation intérieure, plomberie, salle de bain et carrelage en Île-de-France. Devis gratuit et intervention rapide à Suresnes et Hauts-de-Seine. Artisan qualifié et expérimenté.",
  keywords: "rénovation intérieure Île-de-France, plomberie Suresnes, salle de bain Hauts-de-Seine, carrelage Paris, NEAGU LONUT, devis gratuit, artisan qualifié, travaux rénovation, BTP Île-de-France, plombier Suresnes, carreleur Hauts-de-Seine",
  authors: [{ name: "NEAGU LONUT" }],
  creator: "NEAGU LONUT",
  publisher: "NEAGU LONUT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neagu-lonut.fr"),
  alternates: {
    canonical: "https://neagu-lonut.fr",
  },
  openGraph: {
    title: "NEAGU LONUT - Expert Rénovation Intérieure en Île-de-France",
    description: "NEAGU LONUT, spécialiste rénovation intérieure, plomberie, salle de bain et carrelage. Intervention rapide en Île-de-France. Devis gratuit et personnalisé.",
    url: "https://neagu-lonut.fr",
    siteName: "NEAGU LONUT - Rénovation Intérieure",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEAGU LONUT - Rénovation Intérieure en Île-de-France",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEAGU LONUT - Expert Rénovation Intérieure",
    description: "Spécialiste rénovation intérieure, plomberie, salle de bain et carrelage en Île-de-France. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) - New */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `}
        </Script>

      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
