import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const peintureVincennesConfig = {
  // SEO et métadonnées
  title: "Peinture Vincennes – Bati France",
  description: "Peintre professionnel Vincennes. Peinture intérieure et Peinture extérieure. Devis gratuit.",
  keywords: [
    "peinture Vincennes",
    "peinture Vincennes",
    "peinture appartement Vincennes",
    "peinture intérieure Vincennes",
    "peinture extérieure Vincennes",
    "devis peinture Vincennes",
    "entreprise peinture Vincennes",
    "artisan peinture Vincennes",
    "travaux peinture Vincennes"
  ],
  
  // Contenu principal
  sectorName: "Vincennes",
  heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  heroTitle: "Peinture Vincennes",
  heroSubtitle: "Peintre professionnel à Vincennes. Peinture intérieure, Peinture extérieure avec finitions expertes.",
  
  // Localisation
  location: "Vincennes",
  
  // Description détaillée
  mainDescription: "Bati France et votre spécialiste peinture à Vincennes. Nous maîtrisons tous les aspects de la peinture avec un savoir-faire artisanal reconnu. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Vincennes, en respectant le caractère de chaque quartier.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Peinture intérieure",
      description: "Peinture intérieure avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Peinture extérieure",
      description: "Peinture extérieure avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Ravalement de façade",
      description: "Ravalement de façade avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Peinture décorative",
      description: "Peinture décorative avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Préparation des supports",
      description: "Préparation des supports avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Conseils couleurs",
      description: "Conseils couleurs avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    }
  ],
  
  // Avantages
  advantages: [
    "Expert peinture Vincennes",
    "Devis gratuit et détaillé",
    "Matériaux de qualité professionnelle",
    "Finitions soignées garanties",
    "Respect des délais",
    "Équipe locale expérimentée",
    "Garantie travaux",
    "Prix compétitifs",
    "Conseils techniques inclus",
    "Service après-vente"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Peinture appartement Vincennes",
      type: "Appartement 3 pièces - 65m²",
      description: "Peinture intérieure avec peinture extérieure, matériaux de qualité et finitions soignées."
    },
    {
      title: "Peinture maison Vincennes",
      type: "Maison 4 pièces - 90m²",
      description: "Intervention complète avec ravalement de façade, peinture décorative et garantie décennale."
    },
    {
      title: "Peinture rénovation Vincennes",
      type: "Local commercial - 120m²",
      description: "Préparation des supports avec conseils couleurs et respect des délais convenus."
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
    "Paris 20ᵉ",
    "Montreuil",
    "Vincennes", 
    "Bagnolet",
    "Saint-Mandé",
    "Fontenay-sous-Bois",
    "Pantin",
    "Les Lilas",
    "Nogent-sur-Marne",
    "Rosny-sous-Bois"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Peinture " + peintureVincennesConfig.sectorName,
  peintureVincennesConfig.location,
  peintureVincennesConfig.description,
  peintureVincennesConfig.keywords
);

export default function PeintureVincennesPage() {
  return <SectorPage {...peintureVincennesConfig} />;
}