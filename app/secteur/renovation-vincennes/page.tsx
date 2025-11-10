import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const renovationVincennesConfig = {
  // SEO et métadonnées
  title: "Rénovation Vincennes – Bati France",
  description: "Spécialiste rénovation tous corps d'état Vincennes. Rénovation complète d'appartements et Rénovation énergétique. Devis gratuit.",
  keywords: [
    "renovation Vincennes",
    "rénovation Vincennes",
    "renovation appartement Vincennes",
    "rénovation complète d'appartements Vincennes",
    "rénovation énergétique Vincennes",
    "devis renovation Vincennes",
    "entreprise renovation Vincennes",
    "artisan renovation Vincennes",
    "travaux renovation Vincennes"
  ],
  
  // Contenu principal
  sectorName: "Vincennes",
  heroImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  heroTitle: "Rénovation Vincennes",
  heroSubtitle: "Spécialiste rénovation tous corps d'état à Vincennes. Rénovation complète d'appartements, Rénovation énergétique avec finitions expertes.",
  
  // Localisation
  location: "Vincennes",
  
  // Description détaillée
  mainDescription: "Bati France et votre spécialiste rénovation à Vincennes. Nous maîtrisons tous les aspects de la rénovation avec un savoir-faire artisanal reconnu. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Vincennes, en respectant le caractère de chaque quartier.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Rénovation complète d'appartements",
      description: "Rénovation complète d'appartements avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Rénovation énergétique",
      description: "Rénovation énergétique avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Rénovation de cuisines",
      description: "Rénovation de cuisines avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Rénovation de salles de bains",
      description: "Rénovation de salles de bains avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Rénovation de sols",
      description: "Rénovation de sols avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Rénovation peinture",
      description: "Rénovation peinture avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    }
  ],
  
  // Avantages
  advantages: [
    "Expert rénovation Vincennes",
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
      title: "Rénovation appartement Vincennes",
      type: "Appartement 3 pièces - 65m²",
      description: "Rénovation complète d'appartements avec rénovation énergétique, matériaux de qualité et finitions soignées."
    },
    {
      title: "Rénovation maison Vincennes",
      type: "Maison 4 pièces - 90m²",
      description: "Intervention complète avec rénovation de cuisines, rénovation de salles de bains et garantie décennale."
    },
    {
      title: "Rénovation rénovation Vincennes",
      type: "Local commercial - 120m²",
      description: "Rénovation de sols avec rénovation peinture et respect des délais convenus."
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
  "Rénovation " + renovationVincennesConfig.sectorName,
  renovationVincennesConfig.location,
  renovationVincennesConfig.description,
  renovationVincennesConfig.keywords
);

export default function RénovationVincennesPage() {
  return <SectorPage {...renovationVincennesConfig} />;
}