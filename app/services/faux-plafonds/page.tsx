import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const fauxPlafondsConfig = {
  // SEO et métadonnées
  title: "Faux Plafonds Paris - Bati France",
  description: "Installation de faux plafonds et plafonds suspendus avec intégration d'éclairage. Devis gratuit et personnalisé à Paris 75020.",
  keywords: [
    "faux plafonds Paris",
    "plafonds suspendus",
    "plafond placo",
    "éclairage intégré",
    "devis gratuit plafonds",
    "faux plafond Paris",
    "plafond moderne"
  ],
  
  // Contenu principal
  serviceName: "Faux Plafonds",
  heroImage: "/maison-work.png",
  heroTitle: "Faux Plafonds à Paris",
  heroSubtitle: "Plafonds suspendus modernes avec Bati France",
  
  // Localisation
  sector: "Rénovation - Faux Plafonds",
  location: "Paris",
  
  // Description détaillée
  mainDescription: "Bati France, spécialiste des faux plafonds depuis plusieurs années, transforme vos intérieurs à Paris. Nous installons des plafonds suspendus en plaques de plâtre avec intégration d'éclairage, amélioration de l'isolation et création de volumes sur mesure pour moderniser et embellir vos espaces."
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  fauxPlafondsConfig.serviceName,
  fauxPlafondsConfig.location,
  fauxPlafondsConfig.description,
  fauxPlafondsConfig.keywords
);

// Compléter la configuration
const fauxPlafondsConfigComplete = {
  ...fauxPlafondsConfig,
  
  // Sous-prestations
  subServices: [
    {
      title: "Plafonds suspendus",
      description: "Installation de faux plafonds sur ossature métallique avec plaques de plâtre pour masquer les défauts et créer des volumes."
    },
    {
      title: "Plafonds décoratifs",
      description: "Réalisation de plafonds design avec formes géométriques, courbes et éléments décoratifs personnalisés."
    },
    {
      title: "Intégration d'éclairage",
      description: "Incorporation de spots LED, éclairage indirect, bandeaux lumineux dans la structure du faux plafond."
    },
    {
      title: "Plafonds acoustiques",
      description: "Solutions avec isolation phonique pour réduire les bruits d'impact et améliorer le confort acoustique."
    },
    {
      title: "Plafonds techniques",
      description: "Intégration de systèmes de ventilation, climatisation et passages de câbles avec accès technique."
    },
    {
      title: "Finitions et peinture",
      description: "Réalisation des finitions parfaites avec enduits, lissage et préparation pour peinture ou revêtements."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Design moderne et personnalisé",
    "Intégration d'éclairage LED",
    "Amélioration acoustique",
    "Masquage des défauts existants",
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

export default function FauxPlafondsPrestationPage() {
  return <ServicePage {...fauxPlafondsConfigComplete} />;
}
