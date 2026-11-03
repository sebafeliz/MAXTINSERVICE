import React from 'react';
import { Logo } from './Logo';
import { COMPANY_CONTACT } from '../data/miningData';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Logo variant="dark" size="sm" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Socio estratégico en mantenimiento de flotas, mecanizado CNC, capacitación técnica y certificación minera de personas y equipos en faena.
            </p>
            <div className="text-slate-400 text-xs">
              Cumplimiento normativo SERNAGEOMIN · Política Cero Daños
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">
              Líneas de Negocio
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#capacitacion" className="hover:text-white transition-colors">
                  Capacitación Minera
                </a>
              </li>
              <li>
                <a href="#certificacion" className="hover:text-white transition-colors">
                  Certificación de Personas
                </a>
              </li>
              <li>
                <a href="#certificacion" className="hover:text-white transition-colors">
                  Inspección & Ensayos END
                </a>
              </li>
              <li>
                <a href="#faena" className="hover:text-white transition-colors">
                  Tornería & Cilindros
                </a>
              </li>
              <li>
                <a href="#faena" className="hover:text-white transition-colors">
                  Mantenimiento de Flotas
                </a>
              </li>
              <li>
                <a href="#faena" className="hover:text-white transition-colors">
                  Personal Técnico en Faena
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegación Corporativa */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">
              Empresa
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Propuesta de Valor
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Portafolio de Servicios
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="text-red-400 hover:text-red-300 transition-colors text-left font-semibold cursor-pointer"
                >
                  Cotización Rápida
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">
              Atención Directa
            </h4>
            <div className="space-y-2 text-xs">
              <div className="text-white font-semibold">
                {COMPANY_CONTACT.leadContact}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D9232A] shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white break-all">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D9232A] shrink-0" />
                <a href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Chile (Atención en Faenas)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} MAXTIN SERVICE SpA. Todos los derechos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
