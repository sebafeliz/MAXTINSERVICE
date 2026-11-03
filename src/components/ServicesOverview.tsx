import React from 'react';
import { GraduationCap, ShieldCheck, Wrench, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FOUR_PILLARS } from '../data/miningData';

interface ServicesOverviewProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService }) => {
  // Filter out 'suministros' to reflect user request
  const activePillars = FOUR_PILLARS.filter((p) => p.id !== 'suministros');

  const getIcon = (id: string) => {
    switch (id) {
      case 'capacitaciones':
        return <GraduationCap className="w-6 h-6" />;
      case 'certificacion':
        return <ShieldCheck className="w-6 h-6" />;
      case 'mantenimiento':
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  const getAnchor = (id: string) => {
    switch (id) {
      case 'capacitaciones':
        return '#capacitacion';
      case 'certificacion':
        return '#certificacion';
      case 'mantenimiento':
      default:
        return '#faena';
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#D9232A] uppercase flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#D9232A]" />
              <span>Nuestro Portafolio</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Estructura de Servicios Integrales MAXTIN
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-2xl">
              Soluciones estructuradas para satisfacer las necesidades operacionales y de seguridad en minería subterránea, rajo abierto y faenas de procesamiento.
            </p>
          </div>

          <div className="text-xs text-slate-600 font-medium flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Disponibilidad inmediata para faenas en Chile</span>
          </div>
        </div>

        {/* 3 Active Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {activePillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-slate-50 border border-slate-200 hover:border-[#D9232A] hover:bg-white rounded-xl flex flex-col justify-between p-6 sm:p-8 relative group transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              {/* Red accent line on top */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#D9232A] rounded-full" />

              <div>
                {/* Icon box */}
                <div className="mt-2 w-12 h-12 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#D9232A] mb-6 group-hover:bg-[#D9232A] group-hover:text-white transition-colors shadow-xs">
                  {getIcon(pillar.id)}
                </div>

                <div className="text-xs font-mono text-slate-500 uppercase mb-1 font-semibold">
                  0{idx + 1} // Área Especializada
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {pillar.summary}
                </p>

                {/* Sub features */}
                <ul className="mt-5 space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-4">
                  {pillar.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D9232A] shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={getAnchor(pillar.id)}
                  onClick={() => onSelectService(pillar.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9232A] hover:text-[#B91C1C] transition-colors"
                >
                  <span>Ver detalles del área</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
