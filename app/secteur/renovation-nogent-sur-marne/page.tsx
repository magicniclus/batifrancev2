import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const renovationNogentsurMarneConfig = {
  // SEO et métadonnées
  title: "Rénovation Nogent-sur-Marne – Bati France",
  description: "Spécialiste rénovation tous corps d'état Nogent-sur-Marne. Rénovation complète d'appartements et Rénovation énergétique. Devis gratuit.",
  keywords: [
    "renovation Nogent-sur-Marne",
    "rénovation Nogent-sur-Marne",
    "renovation appartement Nogent-sur-Marne",
    "rénovation complète d'appartements Nogent-sur-Marne",
    "rénovation énergétique Nogent-sur-Marne",
    "devis renovation Nogent-sur-Marne",
    "entreprise renovation Nogent-sur-Marne",
    "artisan renovation Nogent-sur-Marne",
    "travaux renovation Nogent-sur-Marne"
  ],
  
  // Contenu principal
  sectorName: "Nogent-sur-Marne",
  heroImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  heroTitle: "Rénovation Nogent-sur-Marne",
  heroSubtitle: "Spécialiste rénovation tous corps d'état à Nogent-sur-Marne. Rénovation complète d'appartements, Rénovation énergétique avec finitions expertes.",
  
  // Localisation
  location: "Nogent-sur-Marne",
  
  // Description détaillée
  mainDescription: "Bati France et votre spécialiste rénovation à Nogent-sur-Marne. Nous maîtrisons tous les aspects de la rénovation avec un savoir-faire artisanal reconnu. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Nogent-sur-Marne, en respectant le caractère de chaque quartier.",
  
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
    "Expert rénovation Nogent-sur-Marne",
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
      title: "Rénovation appartement Nogent-sur-Marne",
      type: "Appartement 3 pièces - 65m²",
      description: "Rénovation complète d'appartements avec rénovation énergétique, matériaux de qualité et finitions soignées."
    },
    {
      title: "Rénovation maison Nogent-sur-Marne",
      type: "Maison 4 pièces - 90m²",
      description: "Intervention complète avec rénovation de cuisines, rénovation de salles de bains et garantie décennale."
    },
    {
      title: "Rénovation rénovation Nogent-sur-Marne",
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
  "Rénovation " + renovationNogentsurMarneConfig.sectorName,
  renovationNogentsurMarneConfig.location,
  renovationNogentsurMarneConfig.description,
  renovationNogentsurMarneConfig.keywords
);

export default function RénovationNogentsurMarnePage() {
  return <SectorPage {...renovationNogentsurMarneConfig} />;
}