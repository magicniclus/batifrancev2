import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const peintureRavalementConfig = {
  // SEO et métadonnées
  title: "Peinture et Ravalement Paris - Bati France",
  description: "Spécialisés en peinture générale et ravalement, intérieur et extérieur. Devis gratuit et personnalisé à Paris 75020.",
  keywords: [
    "peinture Paris",
    "ravalement Paris",
    "peinture intérieure",
    "peinture extérieure",
    "ravalement façade",
    "peinture 75020",
    "devis peinture gratuit"
  ],
  
  // Contenu principal
  serviceName: "Peinture et Ravalement",
  heroImage: "/placo.png",
  heroTitle: "Peinture et Ravalement à Paris",
  heroSubtitle: "Spécialisés en peinture générale et ravalement, nous transformons vos espaces avec soin et professionnalisme.",
  
  // Localisation
  sector: "Rénovation - Peinture et Ravalement",
  location: "Paris",
  
  // Description détaillée
  mainDescription: "Bati France vous accompagne dans tous vos projets de peinture et ravalement à Paris. Notre équipe de professionnels qualifiés intervient aussi bien en intérieur qu'en extérieur pour redonner vie à vos espaces. Nous utilisons des matériaux de qualité et respectons les délais convenus pour votre entière satisfaction.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Peinture intérieure",
      description: "Peinture de murs, plafonds, boiseries avec finitions soignées et conseils couleurs personnalisés."
    },
    {
      title: "Peinture extérieure",
      description: "Peinture de façades, volets, portails avec produits résistants aux intempéries."
    },
    {
      title: "Ravalement de façade",
      description: "Nettoyage, réparation et remise en état des façades avec respect des normes."
    },
    {
      title: "Préparation des supports",
      description: "Ponçage, rebouchage, application d'enduits pour une finition parfaite."
    },
    {
      title: "Peinture décorative",
      description: "Techniques spéciales, effets décoratifs et finitions personnalisées."
    },
    {
      title: "Protection et étanchéité",
      description: "Application de produits de protection contre l'humidité et les intempéries."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Matériaux de qualité professionnelle",
    "Respect des délais garantis",
    "Finitions soignées et durables",
    "Conseil personnalisé en couleurs",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux incluse"
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
  peintureRavalementConfig.serviceName,
  peintureRavalementConfig.location,
  peintureRavalementConfig.description,
  peintureRavalementConfig.keywords
);

export default function PeintureRavalementPage() {
  return <ServicePage {...peintureRavalementConfig} />;
}
