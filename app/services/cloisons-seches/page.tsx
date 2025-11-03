import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const cloisonsSecheConfig = {
  // SEO et métadonnées
  title: "Cloisons Sèches Paris - Bati France",
  description: "Installation de cloisons sèches et aménagement d'espaces intérieurs. Devis gratuit et personnalisé à Paris 75020.",
  keywords: [
    "cloisons sèches Paris",
    "placo cloisons",
    "séparation espaces",
    "aménagement intérieur",
    "cloisons placo Paris",
    "installation cloisons",
    "devis cloisons gratuit"
  ],
  
  // Contenu principal
  serviceName: "Cloisons Sèches",
  heroImage: "/placo.png",
  heroTitle: "Cloisons Sèches à Paris",
  heroSubtitle: "Aménagement et séparation d'espaces avec Bati France",
  
  // Localisation
  sector: "Rénovation - Cloisons Sèches",
  location: "Paris",
  
  // Description détaillée
  mainDescription: "Bati France, votre spécialiste en cloisons sèches depuis plusieurs années, vous accompagne dans tous vos projets d'aménagement intérieur à Paris. Nous réalisons des cloisons en plaques de plâtre sur ossature métallique pour créer, séparer ou réorganiser vos espaces intérieurs selon vos besoins et votre budget.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Cloisons de distribution",
      description: "Création de nouvelles pièces et séparation d'espaces avec ossature métallique et plaques de plâtre."
    },
    {
      title: "Cloisons acoustiques",
      description: "Cloisons avec isolation phonique renforcée pour réduire les nuisances sonores entre les pièces."
    },
    {
      title: "Cloisons techniques",
      description: "Intégration de gaines électriques, plomberie et ventilation dans les cloisons avec accès technique."
    },
    {
      title: "Cloisons courbes",
      description: "Réalisation de cloisons cintrées et formes spéciales pour des aménagements design et originaux."
    },
    {
      title: "Cloisons amovibles",
      description: "Solutions modulables permettant de modifier facilement la configuration des espaces selon vos besoins."
    },
    {
      title: "Finitions et peinture",
      description: "Enduits, lissage et préparation des surfaces pour peinture ou pose de revêtements muraux."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Pose professionnelle et soignée",
    "Matériaux de qualité certifiés",
    "Isolation phonique et thermique",
    "Respect des délais convenus",
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

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  cloisonsSecheConfig.serviceName,
  cloisonsSecheConfig.location,
  cloisonsSecheConfig.description,
  cloisonsSecheConfig.keywords
);

export default function CloisonsSechesPrestationPage() {
  return <ServicePage {...cloisonsSecheConfig} />;
}
