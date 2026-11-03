import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  FileCheck, 
  Scan, 
  AlertTriangle, 
  ChevronRight, 
  Download, 
  Radio, 
  Activity, 
  HelpCircle,
  FileBadge
} from 'lucide-react';
import { CERTIFICATION_STAGES_PERSONS, EQUIPMENT_CERTIFICATION_ITEMS } from '../data/miningData';

interface CertificationSectionProps {
  onOpenQuoteModal: (category: string) => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'personas' | 'equipos'>('personas');
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const [interactiveStepAudit, setInteractiveStepAudit] = useState<{ [key: string]: boolean }>({
    induccion: true,
    loto: true,
    altura: false,
    endUltrasonido: true,
    particulasMagneticas: false,
    mandantesCheck: true,
  });

  const toggleCheck = (key: string) => {
    setInteractiveStepAudit(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(interactiveStepAudit).filter(Boolean).length;
  const auditPercentage = Math.round((completedCount / Object.keys(interactiveStepAudit).length) * 100);

  return (
    <section id="certificacion" className="py-20 lg:py-28 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#D9232A] uppercase flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#D9232A]" />
              <span>Acreditación & Garantía de Calidad</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Certificación Técnica de Personas y Equipos
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-2xl">
              Garantizamos el cumplimiento normativo estricto y la idoneidad técnica en faena para superar las exigencias de mandantes mineros.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1 p-1.5 bg-slate-100 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('personas')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'personas'
                  ? 'bg-[#D9232A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Acreditación de Personas (3 Etapas)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('equipos')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'equipos'
                  ? 'bg-[#D9232A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Garantía de Equipos & END
            </button>
          </div>
        </div>

        {/* Tab 1: Acreditación de Personas (Slide 6) */}
        {activeTab === 'personas' && (
          <div className="mt-12 space-y-12">
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                Slide 06 // Metodología de Acreditación de Capital Humano
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Evaluación y Certificación de Calidad de Personas
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Proceso escalonado y auditable para asegurar que cada técnico u operador cumpla los estándares de faena antes de su ingreso.
              </p>
            </div>

            {/* 3 Etapas Grid matching Slide 6 visual */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATION_STAGES_PERSONS.map((stage, idx) => {
                const borderColors = [
                  'border-slate-300 hover:border-slate-400',
                  'border-[#D9232A] hover:border-red-700',
                  'border-emerald-500 hover:border-emerald-600',
                ];
                const badgeColors = [
                  'text-slate-700 bg-slate-100',
                  'text-[#D9232A] bg-red-50 border border-red-200',
                  'text-emerald-700 bg-emerald-50 border border-emerald-200',
                ];

                return (
                  <div
                    key={stage.step}
                    onClick={() => setSelectedStage(idx)}
                    className={`bg-white rounded-xl p-6 border-2 ${borderColors[idx]} flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md ${
                      selectedStage === idx ? 'ring-2 ring-[#D9232A]/30' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase ${badgeColors[idx]}`}>
                          {stage.step}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">Paso {idx + 1} de 3</span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 font-display mb-3">
                        {stage.title}
                      </h4>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-800">Entregable:</span> {stage.deliverable}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verification & compliance audit preview box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                    <FileBadge className="w-4 h-4" />
                    <span>Emisión de Certificado con Código de Trazabilidad</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    ¿Requiere certificar cuadrillas para ingreso a faena minera?
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                    Evaluamos técnicos mecánicos, electricistas, operadores y supervisores en terreno o dependencias de entrenamiento.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal('Certificación de Personas')}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#D9232A] hover:bg-[#B91C1C] rounded-md transition-colors cursor-pointer shadow-sm"
                  >
                    Cotizar Certificación de Personal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Garantía de Equipos & END (Slide 7) */}
        {activeTab === 'equipos' && (
          <div className="mt-12 space-y-12">
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                Slide 07 // Garantía de Operabilidad
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Evaluación y Certificación de Calidad de Equipos
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Inspección estructural, pruebas no destructivas y emisión de sello de operabilidad técnica para maquinaria pesada y equipos críticos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: 3 Core Items from Slide 7 */}
              <div className="lg:col-span-7 space-y-4">
                {EQUIPMENT_CERTIFICATION_ITEMS.map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors relative overflow-hidden shadow-xs"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#D9232A]" />
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-red-50 text-[#D9232A] shrink-0">
                        {idx === 0 && <Scan className="w-5 h-5" />}
                        {idx === 1 && <Activity className="w-5 h-5" />}
                        {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-slate-900 font-display">
                            {item.title}
                          </h4>
                          <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                        </div>

                        <p className="mt-1 text-sm font-semibold text-[#D9232A]">
                          {item.summary}
                        </p>

                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Interactive Protocol & END Scope Panel */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#D9232A] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Protocolo de Inspección en Faena
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                    {auditPercentage}% Completitud
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div 
                    onClick={() => toggleCheck('endUltrasonido')}
                    className="flex items-center justify-between p-2.5 rounded bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-slate-700 font-medium">Ultrasonido Phased Array en soldaduras críticas</span>
                    <span className={interactiveStepAudit.endUltrasonido ? "text-emerald-600 font-bold" : "text-slate-400"}>
                      {interactiveStepAudit.endUltrasonido ? "✓ Conforme" : "○ Pendiente"}
                    </span>
                  </div>

                  <div 
                    onClick={() => toggleCheck('particulasMagneticas')}
                    className="flex items-center justify-between p-2.5 rounded bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-slate-700 font-medium">Partículas magnéticas en pernos y uniones</span>
                    <span className={interactiveStepAudit.particulasMagneticas ? "text-emerald-600 font-bold" : "text-slate-400"}>
                      {interactiveStepAudit.particulasMagneticas ? "✓ Conforme" : "○ Pendiente"}
                    </span>
                  </div>

                  <div 
                    onClick={() => toggleCheck('mandantesCheck')}
                    className="flex items-center justify-between p-2.5 rounded bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-slate-700 font-medium">Revisión de espesores y desgaste electromecánico</span>
                    <span className={interactiveStepAudit.mandantesCheck ? "text-emerald-600 font-bold" : "text-slate-400"}>
                      {interactiveStepAudit.mandantesCheck ? "✓ Conforme" : "○ Pendiente"}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 leading-relaxed flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#D9232A] shrink-0 mt-0.5" />
                  <span>
                    El Sello de Operabilidad Normativa MAXTIN es válido para mandantes mineros en faenas Codelco, BHP, Antofagasta Minerals y Anglo American.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('Certificación de Equipos y END')}
                  className="mt-6 w-full py-3 text-xs font-bold text-white bg-[#D9232A] hover:bg-[#B91C1C] rounded-md transition-colors text-center block cursor-pointer shadow-sm"
                >
                  Solicitar Inspección Técnica y END
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
