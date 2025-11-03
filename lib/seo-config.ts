import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "Bati France - Spécialistes en Rénovation à Paris",
  description: "Bati France, spécialistes dans tous les corps d'état : peinture, ravalement, électricité, plomberie, rénovation globale. Devis gratuit à Paris 75020.",
  keywords: [
    "rénovation Paris",
    "peinture ravalement Paris",
    "électricité plomberie Paris",
    "rénovation globale Paris",
    "entrepreneur bâtiment Paris",
    "travaux rénovation 75020",
    "Bati France",
    "construction Paris",
    "artisan rénovation",
    "devis gratuit",
    "spécialistes en rénovation",
    "tous corps d'état",
    "entrepreneur du bâtiment"
  ],
  author: "Bati France",
  siteUrl: "https://batifrance.fr",
  siteName: "Bati France - Spécialistes en Rénovation",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@batifrance"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "Bati France",
  "legalName": "Bati France - Spécialistes en Rénovation",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Organization",
    "name": "Équipe Bati France"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "17 avenue Gambetta",
    "addressLocality": "Paris",
    "postalCode": "75020",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33659699415",
    "contactType": "customer service",
    "email": "batifrance@outlook.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Paris"
    },
    {
      "@type": "City",
      "name": "Paris 20e"
    },
    {
      "@type": "City",
      "name": "Belleville"
    },
    {
      "@type": "City",
      "name": "Ménilmontant"
    }
  ],
  "serviceType": [
    "Peinture et Ravalement",
    "Électricité et Plomberie", 
    "Rénovation globale",
    "Cloisons Sèches",
    "Doublages et Isolation",
    "Faux Plafonds",
    "Finitions Plâtrerie",
    "Construction",
    "Travaux de rénovation"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Sa 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de rénovation",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Peinture et Ravalement",
          "description": "Spécialisés en peinture générale et ravalement, intérieur et extérieur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Électricité et Plomberie",
          "description": "Installation et rénovation électricité et plomberie, conformes aux normes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Rénovation globale",
          "description": "Transformations et nettoyage, rénovation complète de vos espaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Cloisons Sèches",
          "description": "Installation de cloisons sèches et aménagement d'espaces intérieurs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Doublages et Isolation",
          "description": "Doublages et isolation thermique et phonique de vos murs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Faux Plafonds",
          "description": "Installation de faux plafonds et plafonds suspendus avec intégration d'éclairage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Finitions Plâtrerie",
          "description": "Finitions plâtrerie, enduits, lissage et préparation surfaces"
        }
      }
    ]
  }
};
