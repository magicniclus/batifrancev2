import { Metadata } from 'next';
import { seoConfig } from './seo-config';

// Fonction utilitaire pour générer les métadonnées SEO des pages services
export function generateServiceMetadata(
  serviceName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  const title = `${serviceName} ${location} - Bati France | Devis Gratuit`;
  const metaDescription = `${description} Devis gratuit et personnalisé pour vos travaux de ${serviceName.toLowerCase()} à ${location}. Contactez Bati France.`;

  return {
    title,
    description: metaDescription,
    keywords: [...keywords, 'devis gratuit', 'Bati France', location].join(', '),
    authors: [{ name: 'Bati France' }],
    creator: 'Bati France',
    publisher: 'Bati France',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    openGraph: {
      title,
      description: metaDescription,
      url: `${seoConfig.siteUrl}/services/${serviceName.toLowerCase().replace(/\s+/g, '-').replace(/é/g, 'e')}`,
      siteName: seoConfig.siteName,
      images: [
        {
          url: `${seoConfig.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [`${seoConfig.siteUrl}/og-image.jpg`],
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
  };
}
