import { Metadata } from 'next';
import MerciClient from './merci-client';

// Métadonnées SEO pour la page merci
export const metadata: Metadata = {
  title: "Merci - Bati France | Demande Reçue",
  description: "Merci pour votre demande de devis ! Bati France vous recontactera rapidement pour votre projet de rénovation : peinture, ravalement, électricité, plomberie ou rénovation globale à Paris.",
  keywords: "merci demande devis, confirmation contact Bati France, demande reçue rénovation, suivi projet Paris",
  authors: [{ name: "Bati France" }],
  creator: "Bati France",
  publisher: "Bati France",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return <MerciClient />;
}
