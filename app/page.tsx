import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "Bati France - Spécialistes en Rénovation à Paris | Devis Gratuit",
  description: "Bati France, spécialistes dans tous les corps d'état : peinture, ravalement, électricité, plomberie, rénovation globale. Devis gratuit et personnalisé à Paris 75020. Intervention rapide et professionnelle.",
  keywords: "rénovation Paris, peinture ravalement Paris, électricité plomberie Paris, rénovation globale Paris, entrepreneur bâtiment Paris, travaux rénovation 75020, Bati France, construction Paris, artisan rénovation, devis gratuit",
  authors: [{ name: "Bati France" }],
  creator: "Bati France",
  publisher: "Bati France",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bati France - Spécialistes en Rénovation à Paris",
    description: "Spécialistes dans tous les corps d'état : peinture, ravalement, électricité, plomberie, rénovation globale. Devis gratuit à Paris.",
    type: "website",
    locale: "fr_FR",
    siteName: "Bati France - Spécialistes en Rénovation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bati France - Spécialistes en Rénovation à Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bati France - Spécialistes en Rénovation",
    description: "Spécialistes dans tous les corps d'état : peinture, ravalement, électricité, plomberie, rénovation globale à Paris.",
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
