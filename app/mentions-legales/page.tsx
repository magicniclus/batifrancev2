import { Metadata } from 'next';
import MentionsLegalesClient from './mentions-legales-client';

// Métadonnées SEO pour la page mentions légales
export const metadata: Metadata = {
  title: "Mentions Légales - Bati France | Informations Légales",
  description: "Consultez les mentions légales de Bati France, spécialistes en rénovation : peinture, ravalement, électricité, plomberie, rénovation globale à Paris. Informations légales et réglementaires.",
  keywords: "mentions légales Bati France, informations légales rénovation, SIRET artisan Paris, mentions légales rénovation, informations entreprise BTP",
  authors: [{ name: "Bati France" }],
  creator: "Bati France",
  publisher: "Bati France",
  openGraph: {
    title: "Mentions Légales Bati France",
    description: "Informations légales et réglementaires de Bati France, spécialistes en rénovation à Paris.",
    type: "website",
    locale: "fr_FR",
    siteName: "Bati France - Spécialistes en Rénovation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />;
}