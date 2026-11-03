import React, { useState } from 'react';
import { Cog, Wrench, Shield, CheckCircle2, Truck, Users, ArrowRight, Gauge, Activity } from 'lucide-react';
import { WORKSHOP_SERVICES, FIELD_SERVICES } from '../data/miningData';

interface WorkshopAndFieldSectionProps {
  onOpenQuoteModal: (category: string) => void;
}

export const WorkshopAndFieldSection: React.FC<WorkshopAndFieldSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'taller' | 'faena'>('taller');

  return (
    <section id="faena" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#D9232A] uppercase flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#D9232A]" />
              <span>Taller Especializado & Servicios en Faena</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Mecanizado, Hidráulica y Mantenimiento de Flotas
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-2xl">
              Capacidad técnica instalada para recuperación de componentes de potencia y cuadrillas especializadas con despliegue en mina y planta.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 p-1.5 bg-slate-100 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('taller')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'taller'
                  ? 'bg-[#D9232A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mecanizado & Cilindros (Slide 09)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('faena')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'faena'
                  ? 'bg-[#D9232A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mantenimiento en Faena (Slide 11)
            </button>
          </div>
        </div>

        {/* Tab 1: Mecanizado & Cilindros (Slide 9) */}
        {activeTab === 'taller' && (
          <div className="mt-12 space-y-12">
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                Slide 09 // Mecanizado y Oleohidráulica de Potencia
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Tornería, Fresado y Cilindros Hidráulicos
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Soluciones mecánicas para componentes sometidos a alta fatiga, abrasión y presiones hidráulicas extremas en faena minera.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {WORKSHOP_SERVICES.map((srv, idx) => (
                <div
                  key={srv.id}
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 flex flex-col justify-between relative group hover:shadow-md transition-all"
                >
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#D9232A]" />

                  <div>
                    <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#D9232A] mb-5">
                      {idx === 0 && <Cog className="w-5 h-5" />}
                      {idx === 1 && <Gauge className="w-5 h-5" />}
                      {idx === 2 && <Wrench className="w-5 h-5" />}
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 font-display">
                      {srv.title}
                    </h4>
                    <div className="text-xs font-bold text-[#D9232A] mt-1 mb-3">
                      {srv.subtitle}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {srv.desc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(`Taller Mecanizado: ${srv.title}`)}
                      className="w-full py-2 text-xs font-bold text-[#D9232A] hover:text-white hover:bg-[#D9232A] bg-red-50/50 rounded-md border border-red-200 hover:border-[#D9232A] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Cotizar servicio de taller</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Industrial workshop badge */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-red-50 text-[#D9232A]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Banco de Pruebas Hidrostáticas y Certificado de Presión</div>
                  <div className="text-xs text-slate-500">Cada cilindro o flexible es entregado con protocolo de prueba y garantía operacional.</div>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200 font-bold">
                Garantía Certificada
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Servicio en Faena (Slide 11) */}
        {activeTab === 'faena' && (
          <div className="mt-12 space-y-12">
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                Slide 11 // Servicio en Faena & Soporte Operacional
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Mantenimiento de Flotas y Prestación de Personal Técnico
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Servicio integral multimarca para equipos de minería raso/subterránea y cuadrillas calificadas para continuidad de procesos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Box 1: Mantenimiento de Equipos Multimarca */}
              <div className="bg-white border border-slate-200 rounded-xl p-8 relative overflow-hidden flex flex-col justify-between shadow-xs">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9232A]" />
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-red-50 text-[#D9232A]">
                      <Truck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 font-display">
                        Mantenimiento de Equipos y Flotas
                      </h4>
                      <span className="text-xs text-slate-500">Camiones, camionetas, maquinaria pesada y sondaje</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {FIELD_SERVICES[0].desc}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-mono text-slate-500 uppercase mb-2 font-semibold">
                      Marcas de Maquinaria y Equipos Atendidos:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {FIELD_SERVICES[0].supportedBrands.map((b) => (
                        <span key={b} className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {FIELD_SERVICES[0].activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9232A] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal('Mantenimiento de Flotas')}
                    className="w-full py-2.5 text-xs font-bold text-white bg-[#D9232A] hover:bg-[#B91C1C] rounded-md transition-colors cursor-pointer shadow-sm"
                  >
                    Cotizar Mantenimiento de Flota
                  </button>
                </div>
              </div>

              {/* Box 2: Prestación de Personal Técnico Operacional */}
              <div className="bg-white border border-slate-200 rounded-xl p-8 relative overflow-hidden flex flex-col justify-between shadow-xs">
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-400" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 font-display">
                        Prestación de Personal Técnico Operacional
                      </h4>
                      <span className="text-xs text-slate-500">Cuadrillas calificadas para faenas mineras</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {FIELD_SERVICES[1].desc}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-mono text-slate-500 uppercase mb-2 font-semibold">
                      Estándar y Certificaciones de Cuadrilla:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {FIELD_SERVICES[1].supportedBrands.map((b) => (
                        <span key={b} className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {FIELD_SERVICES[1].activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal('Prestación de Personal Técnico')}
                    className="w-full py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors cursor-pointer"
                  >
                    Solicitar Cuadrilla para Faena
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
