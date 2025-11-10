import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const currentDate = new Date().toISOString();

  // Secteurs géographiques
  const sectors = [
    'paris-20e', 'montreuil', 'vincennes', 'bagnolet', 'saint-mande',
    'fontenay-sous-bois', 'pantin', 'les-lilas', 'nogent-sur-marne', 'rosny-sous-bois'
  ];

  // Services spécialisés
  const services = ['renovation', 'peinture', 'pose-parquet'];

  const sitemapEntries: MetadataRoute.Sitemap = [
    // Page d'accueil
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Page contact
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Page secteurs principale
    {
      url: `${baseUrl}/secteur`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Pages services existantes
    {
      url: `${baseUrl}/services/peinture-ravalement`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/renovation-globale`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/cloisons-seches`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/doublages`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/electricite-plomberie`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/faux-plafonds`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/finitions-platrerie`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Pages légales
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/merci`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // Ajouter toutes les pages secteurs spécialisées
  sectors.forEach(sector => {
    services.forEach(service => {
      sitemapEntries.push({
        url: `${baseUrl}/secteur/${service}-${sector}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.85, // Priorité élevée pour les pages géolocalisées
      });
    });
  });

  return sitemapEntries;
}
