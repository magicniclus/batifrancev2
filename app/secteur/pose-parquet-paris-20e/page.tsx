import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const poseParquetParis20Config = {
  // SEO et métadonnées
  title: "Pose parquet Paris 20ᵉ – Bati France",
  description: "Pose de parquet professionnel Paris 20ᵉ. Parquet massif, contrecollé et stratifié. Devis gratuit.",
  keywords: [
    "pose parquet Paris 20",
    "parquet Paris 20",
    "parqueteur Paris 20",
    "pose parquet appartement Paris 20",
    "parquet massif Paris 20",
    "parquet contrecollé Paris 20",
    "devis parquet Paris 20",
    "parquet Belleville",
    "parquet Ménilmontant"
  ],
  
  // Contenu principal
  sectorName: "Paris 20ᵉ",
  heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
  heroTitle: "Pose parquet Paris 20ᵉ",
  heroSubtitle: "Parqueteur professionnel dans le 20ème arrondissement. Pose de parquet massif, contrecollé, stratifié avec finitions expertes.",
  
  // Localisation
  location: "Paris 20ᵉ",
  
  // Description détaillée
  mainDescription: "Bati France et spécialiste de la pose de parquet à Paris 20ᵉ. Nous installons tous types de parquets avec un savoir-faire artisanal. Notre expertise du 20ème arrondissement nous permet d'adapter nos techniques aux contraintes spécifiques de chaque logement, qu'il s'agisse d'appartements anciens à Belleville ou de constructions récentes à Ménilmontant.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Pose parquet massif",
      description: "Installation de parquet chêne, hêtre, châtaignier avec techniques traditionnelles et finitions cirées."
    },
    {
      title: "Pose parquet contrecollé",
      description: "Parquet 2 et 3 plis avec pose flottante ou collée selon les contraintes techniques."
    },
    {
      title: "Pose parquet stratifié",
      description: "Sol stratifié haute qualité avec sous-couche acoustique et finitions soignées."
    },
    {
      title: "Rénovation parquet ancien",
      description: "Ponçage, vitrification, huilage de parquets anciens pour leur redonner éclat."
    },
    {
      title: "Parquet sur mesure",
      description: "Création de motifs personnalisés, marqueterie et parquets d'exception."
    },
    {
      title: "Finitions parquet",
      description: "Vitrification, huilage, cirage avec produits professionnels durables."
    }
  ],
  
  // Avantages
  advantages: [
    "Parqueteur expert Paris 20ᵉ",
    "Devis parquet gratuit",
    "Large choix d'essences",
    "Pose professionnelle garantie",
    "Finitions soignées",
    "Conseils techniques inclus",
    "Matériaux certifiés",
    "Garantie pose",
    "Équipe spécialisée",
    "Prix compétitifs"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Parquet chêne massif Belleville",
      type: "Appartement 3 pièces - 70m²",
      description: "Pose parquet chêne massif 14mm avec finition huilée naturelle, plinthes assorties et seuils de porte."
    },
    {
      title: "Parquet contrecollé Ménilmontant",
      type: "Appartement 4 pièces - 85m²",
      description: "Installation parquet contrecollé chêne vieilli avec sous-couche acoustique et pose flottante."
    },
    {
      title: "Rénovation parquet Père Lachaise",
      type: "Maison 6 pièces - 140m²",
      description: "Ponçage et vitrification parquet point de Hongrie ancien avec restauration des motifs d'origine."
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
  "Pose parquet " + poseParquetParis20Config.sectorName,
  poseParquetParis20Config.location,
  poseParquetParis20Config.description,
  poseParquetParis20Config.keywords
);

export default function PoseParquetParis20Page() {
  return <SectorPage {...poseParquetParis20Config} />;
}
