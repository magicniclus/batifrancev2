import { Metadata } from 'next';
import CGVClient from './cgv-client';

// Métadonnées SEO pour la page CGV
export const metadata: Metadata = {
  title: "Conditions Générales de Vente - Bati France | CGV Rénovation",
  description: "Consultez les Conditions Générales de Vente de Bati France pour vos travaux de rénovation : peinture, ravalement, électricité, plomberie, rénovation globale à Paris. Garanties et modalités de service.",
  keywords: "CGV Bati France, conditions générales vente rénovation, garantie travaux Paris, modalités service rénovation, CGV artisan rénovation",
  authors: [{ name: "Bati France" }],
  creator: "Bati France",
  publisher: "Bati France",
  openGraph: {
    title: "CGV Bati France - Conditions Générales de Vente",
    description: "Conditions Générales de Vente pour vos travaux de rénovation à Paris et Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "Bati France - Spécialistes en Rénovation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGVPage() {
  return <CGVClient />;
}