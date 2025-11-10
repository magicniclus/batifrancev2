import { Metadata } from 'next';

export function generateSectorMetadata(
  sectorName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  return {
    title: `Rénovation ${location} – Bati France`,
    description: description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `Rénovation ${location} – Bati France`,
      description: description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Bati France',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Rénovation ${location} – Bati France`,
      description: description,
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
    alternates: {
      canonical: `https://batifrance.fr/secteur/${location.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    },
  };
}
