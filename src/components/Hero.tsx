import React from 'react';
import { Logo } from './Logo';
import { ArrowRight, PhoneCall, ShieldCheck, Award, Wrench, CheckCircle } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/miningData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200">
      
      {/* Subtle background technical grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative gradient blur in corner */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand identity badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D9232A]" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-700 uppercase">
            MAXTIN SERVICE · SOLUCIONES MINERAS E INDUSTRIALES
          </span>
        </div>

        {/* Hero Identity with Logo */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
            <Logo variant="light" size="md" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-[#D9232A] uppercase tracking-widest">
              Socio Estratégico en Minería
            </div>
            <div className="text-sm font-semibold text-slate-700">
              Antofagasta & Faenas Mineras en Chile
            </div>
          </div>
        </div>

        {/* Core Headline & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance font-display">
            Excelencia en Mantenimiento, Capacitación y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9232A] to-red-600">Certificación Minera</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl font-normal">
            Socio estratégico para optimizar la disponibilidad operacional, elevar estándares de seguridad y certificar la calidad de equipos y capital humano en la alta minería.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3.5 text-sm font-bold text-white bg-[#D9232A] hover:bg-[#B91C1C] active:scale-[0.99] rounded-lg transition-all duration-150 shadow-md shadow-red-500/20 flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Solicitar Cotización Inmediata</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=Hola%20Claudia,%20me%20comunico%20desde%20el%20sitio%20web%20de%20MAXTIN%20SERVICE%20para%20consultar%20por%20servicios.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Directo: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="w-4 h-4 text-[#D9232A] shrink-0" />
              <span className="font-semibold">Atención Rápida en Terreno</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="w-4 h-4 text-[#D9232A] shrink-0" />
              <span className="font-semibold">Normas SERNAGEOMIN & OSHA</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="w-4 h-4 text-[#D9232A] shrink-0" />
              <span className="font-semibold">Ensayos No Destructivos (END)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="w-4 h-4 text-[#D9232A] shrink-0" />
              <span className="font-semibold">Flotas Multimarca</span>
            </div>
          </div>
        </div>

        {/* 3 Executive Pillars Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Certificación */}
          <a
            href="#certificacion"
            className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#D9232A] rounded-xl p-6 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-lg bg-[#D9232A] flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform shadow-md shadow-red-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#D9232A] transition-colors">
              Certificación de Equipos y Personas
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Evaluación competencial, auditoría de desempeño y acreditación oficial bajo normas SERNAGEOMIN, con ensayos END de ultrasonido y partículas magnéticas.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#D9232A]">
              <span>Conocer metodología</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: Capacitación */}
          <a
            href="#capacitacion"
            className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#D9232A] rounded-xl p-6 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-lg bg-[#D9232A] flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform shadow-md shadow-red-500/20">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#D9232A] transition-colors">
              Capacitación Técnica Minera
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Formación teórico-práctica para operadores de maquinaria pesada, procedimientos de bloqueo LOTO, trabajo en altura y diagnóstico de fallas oleohidráulicas.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#D9232A]">
              <span>Ver programas formativos</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: Taller y Mantenimiento */}
          <a
            href="#faena"
            className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#D9232A] rounded-xl p-6 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-lg bg-[#D9232A] flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform shadow-md shadow-red-500/20">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#D9232A] transition-colors">
              Mecanizado, Hidráulica & Flotas
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Tornería y fresado CNC, reparación y pruebas de cilindros hidráulicos, ensamblado de flexibles y mantención de flotas en faena.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#D9232A]">
              <span>Explorar taller y servicios</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
