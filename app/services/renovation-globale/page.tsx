import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const renovationGlobaleConfig = {
  // SEO et métadonnées
  title: "Rénovation Globale Paris - Bati France",
  description: "Transformations et nettoyage, rénovation complète de vos espaces. Devis gratuit et personnalisé à Paris 75020.",
  keywords: [
    "rénovation globale Paris",
    "transformation appartement",
    "rénovation complète",
    "nettoyage chantier",
    "rénovation 75020",
    "devis rénovation gratuit",
    "transformation maison"
  ],
  
  // Contenu principal
  serviceName: "Rénovation Globale",
  heroImage: "/maison-work.png",
  heroTitle: "Rénovation Globale à Paris",
  heroSubtitle: "Transformations et nettoyage complets pour donner une nouvelle vie à vos espaces de vie et de travail.",
  
  // Localisation
  sector: "Rénovation - Rénovation Globale",
  location: "Paris",
  
  // Description détaillée
  mainDescription: "Bati France vous propose des services complets de rénovation globale à Paris. De la transformation complète d'appartements au nettoyage post-travaux, notre équipe prend en charge tous les aspects de votre projet pour vous offrir un résultat clé en main de qualité professionnelle.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Transformation complète",
      description: "Rénovation intégrale d'appartements et maisons avec restructuration des espaces."
    },
    {
      title: "Nettoyage post-travaux",
      description: "Nettoyage professionnel après chantier pour une remise en état parfaite."
    },
    {
      title: "Démolition et gros œuvre",
      description: "Abattage de cloisons, création d'ouvertures et travaux de structure."
    },
    {
      title: "Aménagement intérieur",
      description: "Création de nouveaux espaces, optimisation des volumes existants."
    },
    {
      title: "Finitions et décoration",
      description: "Pose de revêtements, peinture et finitions décoratives personnalisées."
    },
    {
      title: "Coordination des corps d'état",
      description: "Gestion complète du projet avec coordination de tous les intervenants."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Projet clé en main complet",
    "Coordination de tous les corps d'état",
    "Respect des délais et du budget",
    "Matériaux de qualité sélectionnés",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Suivi personnalisé du projet"
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
  renovationGlobaleConfig.serviceName,
  renovationGlobaleConfig.location,
  renovationGlobaleConfig.description,
  renovationGlobaleConfig.keywords
);

export default function RenovationGlobalePage() {
  return <ServicePage {...renovationGlobaleConfig} />;
}
