import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  UserCheck, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  AlertCircle
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/miningData';
import { ContactQuoteForm } from '../types';

interface QuoteSectionProps {
  initialCategory?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  initialCategory = 'Certificación de Equipos y Personas',
}) => {
  const [form, setForm] = useState<ContactQuoteForm>({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    serviceCategory: initialCategory || 'Certificación de Equipos y Personas',
    faenaLocation: '',
    urgency: 'normal',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company || !form.contactName || !form.email || !form.phone) {
      setErrorMsg('Por favor complete todos los campos obligatorios (*).');
      return;
    }

    setErrorMsg('');
    const randomRef = `MAX-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteRef(randomRef);
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `*COTIZACIÓN MAXTIN SERVICE - REF: ${quoteRef || 'WEB'}*`,
      `*Empresa:* ${form.company}`,
      `*Contacto:* ${form.contactName}`,
      `*Email:* ${form.email}`,
      `*Teléfono:* ${form.phone}`,
      `*Servicio:* ${form.serviceCategory}`,
      `*Faena / Región:* ${form.faenaLocation || 'No especificada'}`,
      `*Urgencia:* ${form.urgency.toUpperCase()}`,
      `*Detalle:* ${form.details || 'Solicito contacto para coordinar cotización formal.'}`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Slide 12: Transformemos sus Operaciones) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#D9232A] text-xs font-bold tracking-widest uppercase mb-3">
            <span>Slide 12 // Contacto Directo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Transformemos sus Operaciones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Estamos a su disposición para cotizaciones, diagnósticos técnicos y programas de acreditación minera.
          </p>
        </div>

        {/* 3 Executive Contact Badges (Slide 12 Card) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Card 1: Claudia Maya */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4 relative overflow-hidden group hover:border-[#D9232A] transition-colors shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#D9232A] flex items-center justify-center text-white shrink-0 shadow-md shadow-red-500/20">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                ATENCIÓN DIRECTA
              </div>
              <div className="text-lg font-extrabold text-slate-900 font-display mt-0.5">
                {COMPANY_CONTACT.leadContact}
              </div>
              <div className="text-xs text-[#D9232A] font-semibold mt-0.5">
                {COMPANY_CONTACT.leadTitle}
              </div>
            </div>
          </div>

          {/* Card 2: Correo Electrónico */}
          <a
            href={`mailto:${COMPANY_CONTACT.email}?subject=Cotizacion%20Servicios%20Mineros%20MAXTIN`}
            className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4 relative overflow-hidden group hover:border-[#D9232A] transition-colors shadow-xs"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D9232A] flex items-center justify-center text-white shrink-0 shadow-md shadow-red-500/20">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                CORREO ELECTRÓNICO
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 font-mono mt-0.5 group-hover:text-[#D9232A] transition-colors break-all">
                {COMPANY_CONTACT.email}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">
                Respuesta en menos de 24 horas
              </div>
            </div>
          </a>

          {/* Card 3: Teléfonos / WhatsApp */}
          <a
            href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=Hola%20Claudia,%20me%20comunico%20desde%20el%20sitio%20web%20para%20solicitar%20una%20cotizacion.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4 relative overflow-hidden group hover:border-[#D9232A] transition-colors shadow-xs"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D9232A] flex items-center justify-center text-white shrink-0 shadow-md shadow-red-500/20">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                TELÉFONOS & WHATSAPP
              </div>
              <div className="text-lg font-extrabold text-slate-900 font-mono mt-0.5 group-hover:text-[#D9232A] transition-colors">
                {COMPANY_CONTACT.phoneDisplay}
              </div>
              <div className="text-xs text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Línea directa activa</span>
              </div>
            </div>
          </a>

        </div>

        {/* Lead Capture Form & Interactive Quote Console */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9232A] to-red-500" />

          {submitted ? (
            <div className="py-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                  Solicitud Registrada con Éxito
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 font-display">
                  ¡Gracias, {form.contactName}!
                </h3>
                <p className="text-slate-600 text-sm max-w-lg mx-auto mt-2">
                  Hemos generado la solicitud técnica <span className="font-mono font-bold text-[#D9232A]">#{quoteRef}</span> para la empresa <span className="font-bold text-slate-900">{form.company}</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700 font-mono">
                <div><span className="text-slate-500 font-semibold">Atiende:</span> {COMPANY_CONTACT.leadContact}</div>
                <div><span className="text-slate-500 font-semibold">Categoría:</span> {form.serviceCategory}</div>
                <div><span className="text-slate-500 font-semibold">Faena:</span> {form.faenaLocation || 'Por confirmar'}</div>
                <div><span className="text-slate-500 font-semibold">Urgencia:</span> {form.urgency.toUpperCase()}</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar datos directo a WhatsApp</span>
                </a>

                <a
                  href={`mailto:${COMPANY_CONTACT.email}?subject=Cotizacion%20${quoteRef}&body=${generateWhatsAppMessage()}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-300 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Enviar por Correo Electrónico</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-500 hover:text-slate-800 transition-colors underline pt-4 block mx-auto cursor-pointer"
              >
                Crear otra solicitud o cotización
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Formulario Oficial de Requerimiento Técnico
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete la información para asignarle un ejecutivo técnico especializado.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#D9232A] shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Empresa */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Empresa / Minera / Contratista *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Ej. Minera Escondida / Echeverría Izquierdo..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A] transition-colors"
                  />
                </div>

                {/* Contacto */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nombre del Solicitante *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    placeholder="Nombre y apellido"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Correo Electrónico Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="contacto@empresa.cl"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A] transition-colors"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Teléfono / WhatsApp de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+56 9 1234 5678"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A] transition-colors"
                  />
                </div>

                {/* Línea de Servicio */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Línea Principal de Servicio
                  </label>
                  <select
                    value={form.serviceCategory}
                    onChange={(e) => setForm({ ...form, serviceCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A] transition-colors"
                  >
                    <option value="Certificación de Personas">Certificación y Acreditación de Personas</option>
                    <option value="Certificación de Equipos y END">Inspección de Equipos y Ensayos END</option>
                    <option value="Capacitaciones Mineras">Capacitación Técnica y Operacional</option>
                    <option value="Tornería y Cilindros">Mecanizado CNC y Cilindros Hidráulicos</option>
                    <option value="Mantenimiento de Flotas">Mantenimiento de Flotas en Faena</option>
                    <option value="Personal Técnico">Prestación de Cuadrillas y Personal Técnico</option>
                  </select>
                </div>

                {/* Ubicación / Faena */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Faena Minera o Región
                  </label>
                  <input
                    type="text"
                    value={form.faenaLocation}
                    onChange={(e) => setForm({ ...form, faenaLocation: e.target.value })}
                    placeholder="Ej. Antofagasta, Calama, Sierra Gorda..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A] transition-colors"
                  />
                </div>

              </div>

              {/* Urgencia selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Criticidad Operacional
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, urgency: 'normal' })}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      form.urgency === 'normal'
                        ? 'bg-slate-800 border-slate-800 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Normal (Planificación)
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, urgency: 'alta' })}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      form.urgency === 'alta'
                        ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Alta (Prioridad Semanal)
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, urgency: 'emergencia_parada_planta' })}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      form.urgency === 'emergencia_parada_planta'
                        ? 'bg-red-100 border-red-400 text-[#D9232A] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Parada de Planta (Urgente)
                  </button>
                </div>
              </div>

              {/* Detalle */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Detalle del Requerimiento / Especificaciones
                </label>
                <textarea
                  rows={3}
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  placeholder="Indique equipos, modelos, normas aplicables o cualquier requerimiento particular..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D9232A]" />
                  <span>Respuesta técnica y comercial por Claudia Maya</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-white bg-[#D9232A] hover:bg-[#B91C1C] active:scale-[0.98] rounded-lg transition-all shadow-md shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Generar Solicitud de Cotización</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
