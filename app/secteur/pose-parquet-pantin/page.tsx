import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const poseparquetPantinConfig = {
  // SEO et métadonnées
  title: "Pose parquet Pantin – Bati France",
  description: "Parqueteur professionnel Pantin. Pose parquet massif et Pose parquet contrecollé. Devis gratuit.",
  keywords: [
    "pose parquet Pantin",
    "pose parquet Pantin",
    "pose parquet appartement Pantin",
    "pose parquet massif Pantin",
    "pose parquet contrecollé Pantin",
    "devis pose parquet Pantin",
    "entreprise pose parquet Pantin",
    "artisan pose parquet Pantin",
    "travaux pose parquet Pantin"
  ],
  
  // Contenu principal
  sectorName: "Pantin",
  heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  heroTitle: "Pose parquet Pantin",
  heroSubtitle: "Parqueteur professionnel à Pantin. Pose parquet massif, Pose parquet contrecollé avec finitions expertes.",
  
  // Localisation
  location: "Pantin",
  
  // Description détaillée
  mainDescription: "Bati France et votre spécialiste pose parquet à Pantin. Nous maîtrisons tous les aspects de la pose parquet avec un savoir-faire artisanal reconnu. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Pantin, en respectant le caractère de chaque quartier.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Pose parquet massif",
      description: "Pose parquet massif avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Pose parquet contrecollé",
      description: "Pose parquet contrecollé avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Pose parquet stratifié",
      description: "Pose parquet stratifié avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Rénovation parquet ancien",
      description: "Rénovation parquet ancien avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Parquet sur mesure",
      description: "Parquet sur mesure avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    },
    {
      title: "Finitions parquet",
      description: "Finitions parquet avec techniques professionnelles et matériaux de qualité pour des résultats durables."
    }
  ],
  
  // Avantages
  advantages: [
    "Expert pose parquet Pantin",
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
      title: "Pose parquet appartement Pantin",
      type: "Appartement 3 pièces - 65m²",
      description: "Pose parquet massif avec pose parquet contrecollé, matériaux de qualité et finitions soignées."
    },
    {
      title: "Pose parquet maison Pantin",
      type: "Maison 4 pièces - 90m²",
      description: "Intervention complète avec pose parquet stratifié, rénovation parquet ancien et garantie décennale."
    },
    {
      title: "Pose parquet rénovation Pantin",
      type: "Local commercial - 120m²",
      description: "Parquet sur mesure avec finitions parquet et respect des délais convenus."
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
  "Pose parquet " + poseparquetPantinConfig.sectorName,
  poseparquetPantinConfig.location,
  poseparquetPantinConfig.description,
  poseparquetPantinConfig.keywords
);

export default function PoseparquetPantinPage() {
  return <SectorPage {...poseparquetPantinConfig} />;
}