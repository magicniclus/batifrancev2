import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const finitionsConfig = {
  // SEO et métadonnées
  title: "Finitions Plâtrerie Paris - Bati France",
  description: "Finitions plâtrerie, enduits, lissage et préparation surfaces. Devis gratuit et personnalisé à Paris 75020.",
  keywords: [
    "finitions plâtrerie Paris",
    "enduits placo",
    "lissage murs",
    "préparation peinture",
    "devis gratuit finitions",
    "enduits Paris",
    "finitions murs"
  ],
  
  // Contenu principal
  serviceName: "Finitions Plâtrerie",
  heroImage: "/mur.png",
  heroTitle: "Finitions Plâtrerie à Paris",
  heroSubtitle: "Enduits et finitions parfaites avec Bati France",
  
  // Localisation
  sector: "Rénovation - Finitions Plâtrerie",
  location: "Paris",
  
  // Description détaillée
  mainDescription: "Bati France, expert en finitions plâtrerie depuis plusieurs années, vous garantit des surfaces parfaites à Paris. Nous réalisons tous types d'enduits, lissage et préparation de surfaces pour obtenir un rendu professionnel impeccable, prêt pour vos peintures et revêtements muraux."
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  finitionsConfig.serviceName,
  finitionsConfig.location,
  finitionsConfig.description,
  finitionsConfig.keywords
);

// Compléter la configuration
const finitionsConfigComplete = {
  ...finitionsConfig,
  
  // Sous-prestations
  subServices: [
    {
      title: "Enduits de finition",
      description: "Application d'enduits de lissage et de finition pour obtenir des surfaces parfaitement lisses et prêtes à peindre."
    },
    {
      title: "Lissage et ponçage",
      description: "Préparation minutieuse des surfaces avec lissage et ponçage pour un rendu professionnel impeccable."
    },
    {
      title: "Réparation de fissures",
      description: "Traitement et réparation des fissures dans les murs et plafonds avec techniques professionnelles durables."
    },
    {
      title: "Préparation pour peinture",
      description: "Préparation complète des surfaces pour application de peinture ou pose de revêtements muraux."
    },
    {
      title: "Enduits décoratifs",
      description: "Réalisation d'enduits à effets décoratifs (talochés, grattés, projetés) pour personnaliser vos intérieurs."
    },
    {
      title: "Ratissage et rebouchage",
      description: "Correction des défauts, rebouchage des trous et ratissage pour une surface parfaitement uniforme."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Finitions parfaites garanties",
    "Surfaces prêtes à peindre",
    "Techniques professionnelles",
    "Matériaux de qualité certifiés",
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

export default function FinitionsPllatreriePrestationPage() {
  return <ServicePage {...finitionsConfigComplete} />;
}
