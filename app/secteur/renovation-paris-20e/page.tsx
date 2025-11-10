import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const renovationParis20Config = {
  // SEO et métadonnées
  title: "Rénovation appartement Paris 20ᵉ – Bati France",
  description: "Spécialiste rénovation tous corps d'état à Paris 20ᵉ. Peinture, parquet, plomberie et rénovation complète. Devis gratuit.",
  keywords: [
    "rénovation Paris 20",
    "rénovation appartement Paris 20",
    "entreprise rénovation Paris 20ème",
    "travaux rénovation Paris 20",
    "rénovation complète Paris 20",
    "devis rénovation Paris 20",
    "artisan rénovation Paris 20",
    "rénovation Belleville",
    "rénovation Ménilmontant"
  ],
  
  // Contenu principal
  sectorName: "Paris 20ᵉ",
  heroImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  heroTitle: "Rénovation appartement Paris 20ᵉ",
  heroSubtitle: "Spécialiste rénovation tous corps d'état dans le 20ème arrondissement. Transformation complète de vos espaces avec expertise locale.",
  
  // Localisation
  location: "Paris 20ᵉ",
  
  // Description détaillée
  mainDescription: "Bati France et votre expert en rénovation à Paris 20ᵉ. Nous transformons vos appartements et maisons avec une approche complète : de la conception à la finition. Notre connaissance approfondie du 20ème arrondissement nous permet d'adapter nos interventions aux spécificités architecturales locales, des immeubles haussmanniens de Belleville aux constructions modernes de Ménilmontant.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Rénovation complète d'appartements",
      description: "Transformation totale de vos espaces : démolition, restructuration, tous corps d'état jusqu'aux finitions."
    },
    {
      title: "Rénovation énergétique",
      description: "Isolation, chauffage, ventilation pour améliorer les performances énergétiques de votre logement."
    },
    {
      title: "Rénovation de cuisines",
      description: "Création de cuisines modernes et fonctionnelles avec aménagement sur mesure."
    },
    {
      title: "Rénovation de salles de bains",
      description: "Transformation complète avec douche italienne, baignoire, carrelage et équipements modernes."
    },
    {
      title: "Rénovation de sols",
      description: "Pose de parquet, carrelage, sol vinyle avec préparation des supports."
    },
    {
      title: "Rénovation peinture",
      description: "Peinture intérieure et extérieure avec préparation des murs et finitions soignées."
    }
  ],
  
  // Avantages
  advantages: [
    "Expert rénovation Paris 20ᵉ",
    "Devis gratuit et détaillé",
    "Coordination tous corps d'état",
    "Respect des copropriétés",
    "Matériaux de qualité",
    "Délais garantis",
    "Garantie décennale",
    "Équipe locale expérimentée",
    "Suivi personnalisé",
    "Prix transparents"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Rénovation complète Belleville",
      type: "Appartement 3 pièces - 65m²",
      description: "Rénovation totale avec ouverture d'espaces, cuisine américaine, parquet chêne, salle de bain moderne et peinture contemporaine."
    },
    {
      title: "Transformation Ménilmontant",
      type: "Appartement 2 pièces - 45m²",
      description: "Optimisation d'espace avec création d'une mezzanine, cuisine équipée, salle d'eau design et rangements sur mesure."
    },
    {
      title: "Rénovation énergétique Père Lachaise",
      type: "Maison 4 pièces - 90m²",
      description: "Isolation complète, chauffage au sol, peinture écologique, parquet massif et aménagement combles."
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
  "Rénovation " + renovationParis20Config.sectorName,
  renovationParis20Config.location,
  renovationParis20Config.description,
  renovationParis20Config.keywords
);

export default function RenovationParis20Page() {
  return <SectorPage {...renovationParis20Config} />;
}
