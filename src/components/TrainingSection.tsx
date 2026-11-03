import React, { useState } from 'react';
import { GraduationCap, Clock, Award, Users, BookOpen, ChevronRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { TRAINING_COURSES } from '../data/miningData';
import { TrainingCourse } from '../types';

interface TrainingSectionProps {
  onOpenQuoteModal: (category: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCourse, setSelectedCourse] = useState<TrainingCourse>(TRAINING_COURSES[0]);

  return (
    <section id="capacitacion" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#D9232A] uppercase flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#D9232A]" />
              <span>Formación de Capital Humano</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Capacitaciones Técnicas y Operacionales Mineras
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-2xl">
              Cursos diseñados para elevar competencias, reducir tasas de accidentabilidad y potenciar la productividad en equipos de alta criticidad.
            </p>
          </div>

          <div className="text-xs text-slate-600 font-medium flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-xs">
            <Award className="w-4 h-4 text-[#D9232A]" />
            <span>Alineado con estándares OSHA y SERNAGEOMIN</span>
          </div>
        </div>

        {/* 3 Courses Layout + Detailed Syllabus preview (Slide 5) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 3 Selectable Program Cards */}
          <div className="lg:col-span-5 space-y-4">
            {TRAINING_COURSES.map((course, idx) => {
              const isSelected = selectedCourse.id === course.id;
              return (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`p-6 rounded-xl border cursor-pointer transition-all duration-200 relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#D9232A] shadow-md ring-1 ring-[#D9232A]/30'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#D9232A]" />
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                    <span className="font-mono text-[#D9232A] font-bold uppercase">
                      Programa 0{idx + 1}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.durationHours} hrs cronológicas
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.shortDesc}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">{course.modality}</span>
                    <span className={isSelected ? 'text-[#D9232A] flex items-center gap-1 font-bold' : 'text-slate-400'}>
                      {isSelected ? 'Módulos activos' : 'Ver programa'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Course Syllabus & Target Audience Panel */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 relative shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono text-[#D9232A] uppercase tracking-wide font-bold">
                  Malla Curricular & Acreditación
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 font-display">
                  {selectedCourse.title}
                </h3>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded border border-slate-200 font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#D9232A]" />
                <span>{selectedCourse.durationHours} Horas</span>
              </div>
            </div>

            {/* Target audience */}
            <div className="mt-6 flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <Users className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <span className="font-bold text-slate-900">Dirigido a:</span> {selectedCourse.targetAudience}
              </div>
            </div>

            {/* Modules list */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D9232A]" />
                <span>Módulos de Aprendizaje Teórico-Práctico</span>
              </h4>

              <div className="space-y-2.5">
                {selectedCourse.modules.map((mod, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-md bg-slate-50 border border-slate-200">
                    <div className="w-5 h-5 rounded-full bg-red-100 border border-red-200 text-[#D9232A] text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold">
                      {i + 1}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Standard */}
            <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Normativa & Certificado:</span> {selectedCourse.certificationStandard}
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Impartición en faena minera o dependencias MAXTIN
              </div>
              <button
                type="button"
                onClick={() => onOpenQuoteModal(`Capacitación: ${selectedCourse.title}`)}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-[#D9232A] hover:bg-[#B91C1C] rounded-md transition-colors cursor-pointer shadow-sm"
              >
                Cotizar este Programa para Cuadrillas
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
