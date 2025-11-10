import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const poseparquetNogentsurMarneConfig = {
  // SEO et métadonnées
  title: "Pose parquet Nogent-sur-Marne – Bati France",
  description: "Parqueteur professionnel Nogent-sur-Marne. Pose parquet massif et Pose parquet contrecollé. Devis gratuit.",
  keywords: [
    "pose parquet Nogent-sur-Marne",
    "pose parquet Nogent-sur-Marne",
    "pose parquet appartement Nogent-sur-Marne",
    "pose parquet massif Nogent-sur-Marne",
    "pose parquet contrecollé Nogent-sur-Marne",
    "devis pose parquet Nogent-sur-Marne",
    "entreprise pose parquet Nogent-sur-Marne",
    "artisan pose parquet Nogent-sur-Marne",
    "travaux pose parquet Nogent-sur-Marne"
  ],
  
  // Contenu principal
  sectorName: "Nogent-sur-Marne",
  heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  heroTitle: "Pose parquet Nogent-sur-Marne",
  heroSubtitle: "Parqueteur professionnel à Nogent-sur-Marne. Pose parquet massif, Pose parquet contrecollé avec finitions expertes.",
  
  // Localisation
  location: "Nogent-sur-Marne",
  
  // Description détaillée
  mainDescription: "Bati France et votre spécialiste pose parquet à Nogent-sur-Marne. Nous maîtrisons tous les aspects de la pose parquet avec un savoir-faire artisanal reconnu. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Nogent-sur-Marne, en respectant le caractère de chaque quartier.",
  
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
    "Expert pose parquet Nogent-sur-Marne",
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
      title: "Pose parquet appartement Nogent-sur-Marne",
      type: "Appartement 3 pièces - 65m²",
      description: "Pose parquet massif avec pose parquet contrecollé, matériaux de qualité et finitions soignées."
    },
    {
      title: "Pose parquet maison Nogent-sur-Marne",
      type: "Maison 4 pièces - 90m²",
      description: "Intervention complète avec pose parquet stratifié, rénovation parquet ancien et garantie décennale."
    },
    {
      title: "Pose parquet rénovation Nogent-sur-Marne",
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
  "Pose parquet " + poseparquetNogentsurMarneConfig.sectorName,
  poseparquetNogentsurMarneConfig.location,
  poseparquetNogentsurMarneConfig.description,
  poseparquetNogentsurMarneConfig.keywords
);

export default function PoseparquetNogentsurMarnePage() {
  return <SectorPage {...poseparquetNogentsurMarneConfig} />;
}