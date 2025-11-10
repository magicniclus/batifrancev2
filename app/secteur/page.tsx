import { Metadata } from 'next';
import SecteurIndexClient from './SecteurIndexClient';

export const metadata: Metadata = {
  title: 'Nos secteurs d\'intervention - Bati France',
  description: 'Découvrez tous nos secteurs d\'intervention en Île-de-France. Rénovation, peinture, pose de parquet à Paris 20ᵉ, Montreuil, Vincennes et plus encore.',
  keywords: 'rénovation Paris, peinture secteurs, pose parquet, entreprise rénovation Île-de-France, travaux Paris Est',
  openGraph: {
    title: 'Nos secteurs d\'intervention - Bati France',
    description: 'Découvrez tous nos secteurs d\'intervention en Île-de-France. Rénovation, peinture, pose de parquet à Paris 20ᵉ, Montreuil, Vincennes et plus encore.',
    type: 'website',
  },
};

export default function SecteurPage() {
  return <SecteurIndexClient />;
}
