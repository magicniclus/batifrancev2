import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const renovationFontenaysousBoisConfig = {
  // SEO et métadonnées
  title: "Rénovation Fontenay-sous-Bois – Bati France",
  description: "Spécialiste rénovation tous corps d'état Fontenay-sous-Bois. Rénovation complète d'appartements et Rénovation énergétique. Devis gratuit.",
  keywords: [
    "renovation Fontenay-sous-Bois",
    "rénovation Fontenay-sous-Bois",
    "renovation appartement Fontenay-sous-Bois",
    "rénovation complète d'appartements Fontenay-sous-Bois",
    "rénovation énergétique Fontenay-sous-Bois",
    "devis renovation Fontenay-sous-Bois",
    "entreprise renovation Fontenay-sous-Bois",
    "artisan renovation Fontenay-sous-Bois",
    "travaux renovation Fontenay-sous-Bois"
  ],
  
  // Contenu principal
  sectorName: "Fontenay-sous-Bois",
  heroImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  heroTitle: "Rénovation Fontenay-sous-Bois",
  heroSubtitle: "Spécialiste rénovation tous corps d'état à Fontenay-sous-Bois. Rénovation complète d'appartements, Rénovation énergétique avec finitions expertes.",
  
  // Localisation
  location: "Fontenay-sous-Bois",
  
  // Description détaillée
  mainDescription: "Bati France et votre spécialiste rénovation à Fontenay-sous-Bois. Nous maîtrisons tous les aspects de la rénovation avec un savoir-faire artisanal reconnu. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Fontenay-sous-Bois, en respectant le caractère de chaque quartier.",
  
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
    "Expert rénovation Fontenay-sous-Bois",
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
      title: "Rénovation appartement Fontenay-sous-Bois",
      type: "Appartement 3 pièces - 65m²",
      description: "Rénovation complète d'appartements avec rénovation énergétique, matériaux de qualité et finitions soignées."
    },
    {
      title: "Rénovation maison Fontenay-sous-Bois",
      type: "Maison 4 pièces - 90m²",
      description: "Intervention complète avec rénovation de cuisines, rénovation de salles de bains et garantie décennale."
    },
    {
      title: "Rénovation rénovation Fontenay-sous-Bois",
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
  "Rénovation " + renovationFontenaysousBoisConfig.sectorName,
  renovationFontenaysousBoisConfig.location,
  renovationFontenaysousBoisConfig.description,
  renovationFontenaysousBoisConfig.keywords
);

export default function RénovationFontenaysousBoisPage() {
  return <SectorPage {...renovationFontenaysousBoisConfig} />;
}