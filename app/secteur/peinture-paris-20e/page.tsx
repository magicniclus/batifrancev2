import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const peintureParis20Config = {
  // SEO et métadonnées
  title: "Peinture Paris 20ᵉ – Bati France",
  description: "Peintre professionnel Paris 20ᵉ. Peinture intérieure, extérieure et ravalement. Devis gratuit.",
  keywords: [
    "peinture Paris 20",
    "peintre Paris 20",
    "peinture appartement Paris 20",
    "peinture intérieure Paris 20",
    "peinture extérieure Paris 20",
    "ravalement Paris 20",
    "devis peinture Paris 20",
    "peinture Belleville",
    "peinture Ménilmontant"
  ],
  
  // Contenu principal
  sectorName: "Paris 20ᵉ",
  heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  heroTitle: "Peinture Paris 20ᵉ",
  heroSubtitle: "Peintre professionnel dans le 20ème arrondissement. Peinture intérieure, extérieure et ravalement avec finitions soignées.",
  
  // Localisation
  location: "Paris 20ᵉ",
  
  // Description détaillée
  mainDescription: "Bati France, votre peintre de confiance à Paris 20ᵉ. Nous maîtrisons tous les types de peinture : intérieure, extérieure et décorative. Notre expertise du 20ème arrondissement nous permet d'adapter nos techniques aux spécificités de chaque quartier, de Belleville à Ménilmontant, en respectant le caractère architectural local.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Peinture intérieure",
      description: "Peinture de murs, plafonds, boiseries avec préparation soignée et finitions parfaites."
    },
    {
      title: "Peinture extérieure",
      description: "Peinture de façades, volets, portails avec produits résistants aux intempéries."
    },
    {
      title: "Ravalement de façade",
      description: "Nettoyage, réparation et peinture de façades avec respect des normes de copropriété."
    },
    {
      title: "Peinture décorative",
      description: "Techniques spéciales, effets décoratifs, patines et finitions artistiques."
    },
    {
      title: "Préparation des supports",
      description: "Ponçage, rebouchage, application d'enduits pour une finition durable."
    },
    {
      title: "Conseils couleurs",
      description: "Accompagnement dans le choix des couleurs et harmonies pour vos espaces."
    }
  ],
  
  // Avantages
  advantages: [
    "Peintre expert Paris 20ᵉ",
    "Devis peinture gratuit",
    "Matériaux de qualité professionnelle",
    "Finitions soignées garanties",
    "Respect des délais",
    "Conseils couleurs inclus",
    "Nettoyage inclus",
    "Garantie travaux",
    "Équipe qualifiée",
    "Prix compétitifs"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Peinture appartement Belleville",
      type: "Appartement 4 pièces - 80m²",
      description: "Peinture complète avec couleurs contemporaines, préparation murs et plafonds et boiseries. Finition mate et satinée."
    },
    {
      title: "Ravalement façade Ménilmontant",
      type: "Immeuble 4 étages",
      description: "Nettoyage haute pression, réparation fissures, application peinture façade avec échafaudage complet."
    },
    {
      title: "Peinture décorative Père Lachaise",
      type: "Maison 5 pièces - 120m²",
      description: "Peinture artistique avec effets patinés, couleurs sur mesure et techniques décoratives anciennes."
    }
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "+33 6 59 69 94 15",
    email: "batifrance@outlook.fr",
    address: "17 avenue Gambetta, Paris 75020"
  },
  
  // Secteurs proches
  nearbyAreas: [
    "Belleville",
    "Ménilmontant",
    "Père Lachaise", 
    "Gambetta",
    "République",
    "Bastille",
    "Paris 11ᵉ",
    "Paris 19ᵉ",
    "Montreuil",
    "Bagnolet"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Peinture " + peintureParis20Config.sectorName,
  peintureParis20Config.location,
  peintureParis20Config.description,
  peintureParis20Config.keywords
);

export default function PeintureParis20Page() {
  return <SectorPage {...peintureParis20Config} />;
}
