import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "NEAGU LONUT - Rénovation Intérieure, Plomberie, Salle de Bain & Carrelage en Île-de-France",
  description: "Expert en rénovation intérieure, plomberie, salle de bain et carrelage en Île-de-France. NEAGU LONUT vous accompagne dans tous vos projets. Devis gratuit et intervention rapide à Suresnes et Hauts-de-Seine.",
  keywords: "rénovation intérieure Île-de-France, plomberie Suresnes, salle de bain Hauts-de-Seine, carrelage Paris, NEAGU LONUT, devis gratuit, artisan qualifié, travaux rénovation, BTP Île-de-France",
  authors: [{ name: "NEAGU LONUT" }],
  creator: "NEAGU LONUT",
  publisher: "NEAGU LONUT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "NEAGU LONUT - Expert Rénovation Intérieure en Île-de-France",
    description: "Spécialiste rénovation intérieure, plomberie, salle de bain et carrelage. Intervention rapide en Île-de-France. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "NEAGU LONUT - Rénovation Intérieure",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEAGU LONUT - Rénovation Intérieure en Île-de-France",
      },
    ],
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

export default function Home() {
  return <HomeClient />;
}
