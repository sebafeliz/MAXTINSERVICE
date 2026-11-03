/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesOverview } from './components/ServicesOverview';
import { CertificationSection } from './components/CertificationSection';
import { TrainingSection } from './components/TrainingSection';
import { WorkshopAndFieldSection } from './components/WorkshopAndFieldSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<string>('Certificación de Equipos y Personas');

  const handleOpenQuoteModal = (category?: string) => {
    if (category) {
      setQuoteCategory(category);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceFromOverview = (serviceId: string) => {
    const categoryMap: { [key: string]: string } = {
      capacitaciones: 'Capacitaciones Mineras',
      certificacion: 'Certificación de Equipos y Personas',
      mantenimiento: 'Mantenimiento y Tornería',
    };
    if (categoryMap[serviceId]) {
      setQuoteCategory(categoryMap[serviceId]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#D9232A] selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <main className="flex-grow">
        {/* Slide 1: Hero Cover */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Slide 2 & 3: Quiénes Somos & Marco Estratégico */}
        <AboutSection />

        {/* Slide 4: Portafolio de Servicios Integrales */}
        <ServicesOverview onSelectService={handleSelectServiceFromOverview} />

        {/* Slide 6 & 7: Certificación de Personas y Equipos (END) */}
        <CertificationSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Slide 5: Capacitaciones Técnicas y Operacionales */}
        <TrainingSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Slide 9 & 11: Tornería, Hidráulica, Flotas y Cuadrillas */}
        <WorkshopAndFieldSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Slide 12: Transformemos sus Operaciones (Cotizador y Contacto) */}
        <QuoteSection
          initialCategory={quoteCategory}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating Fast Action Shortcuts */}
      <FloatingActions
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quick Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedCategory={quoteCategory}
      />
    </div>
  );
}
