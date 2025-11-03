import { Metadata } from 'next';
import ContactClient from './contact-client';

// Métadonnées SEO pour la page contact
export const metadata: Metadata = {
  title: "Contact - Bati France | Devis Gratuit Rénovation Paris",
  description: "Contactez Bati France pour votre projet de rénovation : peinture, ravalement, électricité, plomberie, rénovation globale à Paris. Devis gratuit et personnalisé. Intervention rapide dans le 20ème arrondissement.",
  keywords: "contact Bati France, devis gratuit rénovation, contact rénovation Paris, devis peinture Paris, contact artisan 75020, rénovation contact",
  authors: [{ name: "Bati France" }],
  creator: "Bati France",
  publisher: "Bati France",
  openGraph: {
    title: "Contact Bati France - Devis Gratuit Rénovation Paris",
    description: "Contactez nos experts en rénovation pour votre projet. Devis gratuit et personnalisé à Paris.",
    type: "website",
    locale: "fr_FR",
    siteName: "Bati France - Spécialistes en Rénovation",
  },
  twitter: {
    card: "summary",
    title: "Contact Bati France - Devis Gratuit",
    description: "Contactez nos experts en rénovation pour votre projet à Paris.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}