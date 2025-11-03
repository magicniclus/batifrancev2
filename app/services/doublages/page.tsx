import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const doublagesConfig = {
  // SEO et métadonnées
  title: "Doublages Paris - Bati France",
  description: "Doublages et isolation thermique et phonique de vos murs. Devis gratuit et personnalisé à Paris 75020.",
  keywords: [
    "doublage murs Paris",
    "isolation thermique",
    "isolation phonique",
    "placo doublage",
    "devis gratuit isolation",
    "doublage Paris",
    "isolation murs"
  ],
  
  // Contenu principal
  serviceName: "Doublages",
  heroImage: "/plomberie.png",
  heroTitle: "Doublages et Isolation à Paris",
  heroSubtitle: "Amélioration thermique et phonique avec Bati France",
  
  // Localisation
  sector: "Rénovation - Doublages",
  location: "Paris",
  
  // Description détaillée
  mainDescription: "Bati France, expert en doublages depuis plusieurs années, améliore l'isolation thermique et phonique de vos murs à Paris. Nous proposons des solutions d'isolation adaptées à vos besoins : doublage collé, sur ossature métallique, avec isolants performants pour optimiser votre confort et réduire vos factures énergétiques."
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  doublagesConfig.serviceName,
  doublagesConfig.location,
  doublagesConfig.description,
  doublagesConfig.keywords
);

// Compléter la configuration
const doublagesConfigComplete = {
  ...doublagesConfig,
  
  // Sous-prestations
  subServices: [
    {
      title: "Doublage collé",
      description: "Pose de complexes isolants collés directement sur les murs existants pour une isolation thermique efficace."
    },
    {
      title: "Doublage sur ossature",
      description: "Installation de plaques de plâtre sur ossature métallique avec isolant pour une isolation renforcée."
    },
    {
      title: "Isolation thermique",
      description: "Amélioration des performances énergétiques avec des isolants adaptés (laine de verre, polystyrène, etc.)."
    },
    {
      title: "Isolation phonique",
      description: "Réduction des nuisances sonores avec des matériaux isolants acoustiques spécialisés."
    },
    {
      title: "Doublage hydrofuge",
      description: "Solutions spéciales pour pièces humides (salles de bain, cuisines) avec plaques résistantes à l'humidité."
    },
    {
      title: "Finitions et enduits",
      description: "Réalisation des finitions parfaites avec enduits et préparation pour peinture ou revêtements."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Amélioration thermique garantie",
    "Réduction des nuisances sonores",
    "Matériaux isolants certifiés",
    "Pose professionnelle et soignée",
    "Garantie sur tous les travaux"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Paris 20e",
    "Paris centre",
    "Belleville",
    "Ménilmontant",
    "Père Lachaise",
    "Gambetta",
    "République",
    "Bastille"
  ],
  
  // Contact
  contactInfo: {
    phone: "+33 6 59 69 94 15",
    email: "batifrance@outlook.fr",
    address: "17 avenue Gambetta, Paris 75020"
  }
};

export default function DoublagesPrestationPage() {
  return <ServicePage {...doublagesConfigComplete} />;
}
