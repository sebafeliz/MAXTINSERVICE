import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/miningData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      {/* Top micro-bar with contact data */}
      <div className="bg-slate-900 text-slate-300 py-1.5 px-4 text-xs font-medium border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Atención Directa: <strong className="text-white font-semibold">{COMPANY_CONTACT.leadContact}</strong>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-[#D9232A]" />
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white transition-colors">
                {COMPANY_CONTACT.email}
              </a>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-[#D9232A]" />
              <a href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono transition-colors">
                {COMPANY_CONTACT.phoneDisplay}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Soporte y Respuesta en Faena
            </span>
            <span>·</span>
            <span>Estándares SERNAGEOMIN & OSHA</span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Brand & Logo */}
        <a href="#inicio" className="flex items-center gap-3 group focus:outline-none" aria-label="Ir al inicio">
          <Logo variant="light" size="sm" />
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
            MAXTIN <span className="text-slate-500 font-medium text-base">SERVICE</span>
          </span>
        </a>

        {/* Zone 2: Nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#servicios" className="hover:text-slate-950 transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#D9232A]">
            Servicios
          </a>
          <a href="#certificacion" className="hover:text-slate-950 transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#D9232A]">
            Certificación
          </a>
          <a href="#capacitacion" className="hover:text-slate-950 transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#D9232A]">
            Capacitación
          </a>
          <a href="#faena" className="hover:text-slate-950 transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#D9232A]">
            Taller & Faena
          </a>
          <a href="#contacto" className="hover:text-slate-950 transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#D9232A]">
            Contacto
          </a>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            WhatsApp Directo
          </a>
          
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#D9232A] rounded-md hover:bg-[#B91C1C] active:scale-[0.98] transition-all duration-150 shadow-sm whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <span>Cotizar Servicios</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#D9232A] rounded-md hover:bg-[#B91C1C]"
          >
            Cotizar
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-slate-700">
            <a 
              href="#servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-100 text-slate-800"
            >
              Servicios Integrales
            </a>
            <a 
              href="#certificacion" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-100 text-slate-800"
            >
              Certificación Minera
            </a>
            <a 
              href="#capacitacion" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-100 text-slate-800"
            >
              Capacitación Técnica
            </a>
            <a 
              href="#faena" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-100 text-slate-800"
            >
              Taller & Flotas
            </a>
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-100 text-slate-800"
            >
              Contacto Directo
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#D9232A] hover:bg-[#B91C1C] rounded flex items-center justify-center gap-2"
            >
              <span>Solicitar Cotización</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
