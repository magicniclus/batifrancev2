'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/cgv' },
    { name: 'Contact', href: '/contact' },
    { name: 'Espace pro', href: 'https://app.trouver-mon-chantier.fr' },
  ];

  const servicesLinks = [
    { name: 'Peinture et Ravalement', href: '/services/peinture-ravalement' },
    { name: 'Électricité et Plomberie', href: '/services/electricite-plomberie' },
    { name: 'Rénovation globale', href: '/services/renovation-globale' },
    { name: 'Cloisons sèches', href: '/services/cloisons-seches' },
    { name: 'Finitions plâtrerie', href: '/services/finitions-platrerie' },
  ];

  const sectorsLinks = [
    { name: 'Paris 20ᵉ', href: '/secteur', subLinks: [
      { name: 'Rénovation Paris 20ᵉ', href: '/secteur/renovation-paris-20e' },
      { name: 'Peinture Paris 20ᵉ', href: '/secteur/peinture-paris-20e' },
      { name: 'Parquet Paris 20ᵉ', href: '/secteur/pose-parquet-paris-20e' },
    ]},
    { name: 'Montreuil', href: '/secteur', subLinks: [
      { name: 'Rénovation Montreuil', href: '/secteur/renovation-montreuil' },
      { name: 'Peinture Montreuil', href: '/secteur/peinture-montreuil' },
      { name: 'Parquet Montreuil', href: '/secteur/pose-parquet-montreuil' },
    ]},
    { name: 'Vincennes', href: '/secteur', subLinks: [
      { name: 'Rénovation Vincennes', href: '/secteur/renovation-vincennes' },
      { name: 'Peinture Vincennes', href: '/secteur/peinture-vincennes' },
      { name: 'Parquet Vincennes', href: '/secteur/pose-parquet-vincennes' },
    ]},
    { name: 'Bagnolet', href: '/secteur', subLinks: [
      { name: 'Rénovation Bagnolet', href: '/secteur/renovation-bagnolet' },
      { name: 'Peinture Bagnolet', href: '/secteur/peinture-bagnolet' },
      { name: 'Parquet Bagnolet', href: '/secteur/pose-parquet-bagnolet' },
    ]},
    { name: 'Voir tous nos secteurs', href: '/secteur' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and description */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </motion.div>
                <span className="text-xl font-bold">
                  BATI FRANCE
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Spécialistes dans tous les corps d'état, nous garantissons qualité et respect des délais pour vos projets de construction et rénovation.
              </p>
              <a 
                href="tel:+33659699415" 
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                +33 6 59 69 94 15
              </a>
            </motion.div>

            {/* Legal links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Liens utiles</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Nos Prestations</h3>
              <ul className="space-y-2">
                {servicesLinks.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Secteurs links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Nos Secteurs</h3>
              <ul className="space-y-2">
                {sectorsLinks.map((sector) => (
                  <li key={sector.name}>
                    {sector.subLinks ? (
                      <div className="space-y-1">
                        <span className="text-slate-300 text-sm font-medium">{sector.name}</span>
                        <ul className="ml-2 space-y-1">
                          {sector.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <a
                                href={subLink.href}
                                className="text-slate-400 hover:text-white text-xs transition-colors duration-200 hover:underline block"
                              >
                                {subLink.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a
                        href={sector.href}
                        className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline font-medium"
                      >
                        {sector.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2">
                <a 
                  href="tel:+33659699415"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-200 block flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>+33 6 59 69 94 15</span>
                </a>
                <p className="text-slate-400 text-xs">
                  Disponible du Lundi à Samedi - 8h à 18h
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p 
              className="text-slate-400 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {currentYear} Bati France. Tous droits réservés.
            </motion.p>

            {/* Powered by */}
            <motion.p 
              className="text-slate-500 text-xs text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Site propulsé par{' '}
              <a 
                href="https://trouver-mon-chantier.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-500/80 transition-colors underline"
              >
                trouver-mon-chantier.fr
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
