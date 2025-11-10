'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Star, Building2, Paintbrush, Hammer } from 'lucide-react';

const sectors = [
  { name: 'Paris 20ᵉ', slug: 'paris-20e' },
  { name: 'Montreuil', slug: 'montreuil' },
  { name: 'Vincennes', slug: 'vincennes' },
  { name: 'Bagnolet', slug: 'bagnolet' },
  { name: 'Saint-Mandé', slug: 'saint-mande' },
  { name: 'Fontenay-sous-Bois', slug: 'fontenay-sous-bois' },
  { name: 'Pantin', slug: 'pantin' },
  { name: 'Les Lilas', slug: 'les-lilas' },
  { name: 'Nogent-sur-Marne', slug: 'nogent-sur-marne' },
  { name: 'Rosny-sous-Bois', slug: 'rosny-sous-bois' }
];

const services = [
  {
    type: 'renovation',
    title: 'Rénovation',
    description: 'Rénovation complète tous corps d\'état',
    icon: Building2,
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'peinture',
    title: 'Peinture',
    description: 'Peinture intérieure et extérieure',
    icon: Paintbrush,
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'pose-parquet',
    title: 'Pose Parquet',
    description: 'Pose de parquet massif et contrecollé',
    icon: Hammer,
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function SecteurIndexClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm mb-6 opacity-80">
              <span>Accueil</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-orange-300">Secteurs</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos secteurs d'intervention
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Découvrez nos prestations spécialisées par secteur : rénovation, peinture et pose de parquet 
              dans 10 communes d'Île-de-France.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-orange-300" />
                <span className="text-sm font-medium">Paris Est & Proche Banlieue</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">30 pages spécialisées</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Building2 className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium">3 services principaux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services par secteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez votre service et votre secteur pour découvrir nos prestations spécialisées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.type}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className={`absolute top-4 left-4 ${service.color} rounded-full p-2`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    Disponible dans {sectors.length} secteurs
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre secteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cliquez sur votre secteur puis choisissez le service qui vous intéresse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.slug}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {sector.name}
                </h3>
                
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={`${service.type}-${sector.slug}`}
                      href={`/secteur/${service.type}-${sector.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`${service.color} rounded p-1`}>
                          <service.icon className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {service.title}
                        </span>
                      </div>
                      <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous intervenons également dans d'autres communes d'Île-de-France. 
            Contactez-nous pour connaître nos possibilités d'intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Nous contacter
            </Link>
            <Link
              href="tel:+33659699415"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              06 59 69 94 15
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
