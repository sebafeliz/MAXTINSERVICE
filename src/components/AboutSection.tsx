import React from 'react';
import { Shield, Zap, Target, Eye, Compass, Layers, CheckCircle } from 'lucide-react';
import { STRATEGIC_FRAMEWORK, VALUE_PROPOSITIONS } from '../data/miningData';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-widest text-[#D9232A] uppercase flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#D9232A]" />
            <span>Quiénes Somos & Propuesta de Valor</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Experiencia Técnica e Ingenieril al Servicio de la Minería
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            MAXTIN SERVICE surge para dar respuesta integral a las exigencias operacionales, mecánicas y normativas más rigurosas de la industria minera regional.
          </p>
        </div>

        {/* 2-Column Core Story & Value Card (Page 2 layout) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Operational Backing & Process Coverage */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D9232A]" />
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded bg-red-50 text-[#D9232A]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Respaldo Operacional y Técnico
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nos constituimos para poner a disposición de nuestros clientes una sólida trayectoria en ingeniería, aprovisionamiento crítico, capacitación técnica y evaluación de calidad. Acompañamos cada fase con personal altamente cualificado y trazabilidad total.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-400" />
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded bg-slate-100 text-slate-700">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Cobertura Integral de Procesos
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Atendemos requerimientos desde la adquisición de insumos hasta la certificación técnica en faena, garantizando continuidad operacional y cumplimiento normativo estricto exigido por mandantes de Gran Minería.
              </p>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs text-center">
                <div className="text-2xl font-black text-slate-900 font-mono">100%</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Alineación SERNAGEOMIN</div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs text-center">
                <div className="text-2xl font-black text-[#D9232A] font-mono">0 Daños</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Cultura de Seguridad</div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs text-center">
                <div className="text-2xl font-black text-slate-900 font-mono">24/7</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Respaldo en Terreno</div>
              </div>
            </div>
          </div>

          {/* Right: Propuesta de Valor (Clean White / Accent Card) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 shadow-md p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-red-50 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="text-xs font-extrabold tracking-wider text-[#D9232A] uppercase mb-2">
                PROPUESTA DE VALOR
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Solución Unificada en Suministros, Personas y Equipos
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Eliminamos intermediarios y fragmentaciones con un único interlocutor técnico de confianza.
              </p>

              <div className="mt-8 space-y-6">
                {VALUE_PROPOSITIONS.map((prop) => (
                  <div key={prop.id} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5 text-[#D9232A]">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-900">
                        {prop.title}: <span className="text-[#D9232A] font-semibold">{prop.highlight}</span>
                      </div>
                      <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {prop.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 text-xs font-semibold text-slate-500 flex items-center justify-between">
              <span>Auditorías en Faena</span>
              <span>·</span>
              <span>Control Metrológico</span>
              <span>·</span>
              <span>Ensayos END</span>
            </div>
          </div>

        </div>

        {/* Marco Estratégico (Slide 3) */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase text-center mb-8">
            MARCO ESTRATÉGICO INSTITUCIONAL
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#D9232A] transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9232A]" />
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#D9232A] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                {STRATEGIC_FRAMEWORK.mission.title}
              </h4>
              <p className="text-slate-600 text-base leading-relaxed">
                {STRATEGIC_FRAMEWORK.mission.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Máxima Seguridad</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Calidad Técnica</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Medio Ambiente</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Compromiso Comunitario</span>
              </div>
            </div>

            {/* Visión */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-slate-400 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-400" />
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                {STRATEGIC_FRAMEWORK.vision.title}
              </h4>
              <p className="text-slate-600 text-base leading-relaxed">
                {STRATEGIC_FRAMEWORK.vision.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Liderazgo Regional</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Venta Especializada</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Acreditación Maquinarias</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Industrias Avanzadas</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
