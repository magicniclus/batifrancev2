import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const electricitePlomberieConfig = {
  // SEO et métadonnées
  title: "Électricité et Plomberie Paris - Bati France",
  description: "Installation et rénovation électricité et plomberie, conformes aux normes. Devis gratuit et personnalisé à Paris 75020.",
  keywords: [
    "électricité Paris",
    "plomberie Paris",
    "installation électrique",
    "rénovation plomberie",
    "électricien Paris",
    "plombier Paris",
    "devis électricité gratuit",
    "devis plomberie gratuit"
  ],
  
  // Contenu principal
  serviceName: "Électricité et Plomberie",
  heroImage: "/plomberie.png",
  heroTitle: "Électricité et Plomberie à Paris",
  heroSubtitle: "Nos experts en électricité et plomberie assurent des installations fiables et conformes aux normes en vigueur.",
  
  // Localisation
  sector: "BTP - Électricité et Plomberie",
  location: "Paris",
  
  // Description détaillée
  mainDescription: "Bati France met à votre disposition une équipe d'électriciens et plombiers qualifiés pour tous vos travaux d'installation et de rénovation. Nous garantissons des interventions conformes aux normes de sécurité et réglementations en vigueur, avec un service de qualité et des matériaux professionnels.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Installation électrique",
      description: "Mise en place de tableaux électriques, câblage, prises et éclairage aux normes."
    },
    {
      title: "Rénovation électrique",
      description: "Mise aux normes, remplacement d'installations vétustes et modernisation."
    },
    {
      title: "Installation plomberie",
      description: "Pose de canalisations, raccordements, robinetterie et équipements sanitaires."
    },
    {
      title: "Réparation plomberie",
      description: "Dépannage fuites, débouchage, remplacement de pièces défectueuses."
    },
    {
      title: "Chauffage et climatisation",
      description: "Installation et maintenance de systèmes de chauffage et climatisation."
    },
    {
      title: "Dépannage d'urgence",
      description: "Interventions rapides pour pannes électriques et fuites d'eau."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Installations conformes aux normes",
    "Matériaux certifiés et durables",
    "Interventions rapides et efficaces",
    "Garantie sur tous les travaux",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Service de dépannage disponible"
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
  electricitePlomberieConfig.serviceName,
  electricitePlomberieConfig.location,
  electricitePlomberieConfig.description,
  electricitePlomberieConfig.keywords
);

export default function ElectricitePlomberiePage() {
  return <ServicePage {...electricitePlomberieConfig} />;
}
