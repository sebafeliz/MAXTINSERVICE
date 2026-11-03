import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/miningData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
}) => {
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(selectedCategory || 'Certificación de Equipos y Personas');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [quoteCode, setQuoteCode] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      setService(selectedCategory);
    }
  }, [selectedCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `MAX-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteCode(code);
    setSubmitted(true);
  };

  const buildWhatsAppText = () => {
    const text = [
      `*SOLICITUD DE COTIZACIÓN - ${quoteCode || 'MAXTIN WEB'}*`,
      `*Empresa:* ${company}`,
      `*Contacto:* ${contactName}`,
      `*Email:* ${email}`,
      `*Teléfono:* ${phone}`,
      `*Línea de Servicio:* ${service}`,
      `*Notas adicionales:* ${notes || 'Solicitud generada desde el cotizador web.'}`,
    ].filter(Boolean).join('\n');

    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-[#D9232A] uppercase">
              MAXTIN SERVICE · Solicitud Rápida
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Cotización & Atención Comercial
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Cotización Registrada: {quoteCode}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Su solicitud ha sido enviada al equipo de Claudia Maya en MAXTIN SERVICE. También puede acelerar su atención despachándola por WhatsApp con 1 clic:
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=${buildWhatsAppText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar a WhatsApp ({COMPANY_CONTACT.phoneDisplay})</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-3 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Empresa / Razón Social *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Minera o Contratista"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nombre del Solicitante *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jperez@empresa.cl"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+56 9 ..."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Línea de Interés
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A]"
                >
                  <option value="Certificación de Equipos y END">Certificación de Equipos e Inspección END</option>
                  <option value="Certificación de Personas">Acreditación y Certificación de Personas</option>
                  <option value="Capacitaciones Mineras">Capacitaciones Técnicas y Operacionales</option>
                  <option value="Mecanizado y Cilindros">Tornería, Fresado y Cilindros Hidráulicos</option>
                  <option value="Mantenimiento de Flotas">Mantenimiento de Flotas y Equipos en Faena</option>
                  <option value="Personal Técnico">Prestación de Personal Técnico Operacional</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Detalles o especificaciones del requerimiento
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Detalles sobre plazo, faena o requerimiento especial..."
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9232A] focus:ring-1 focus:ring-[#D9232A]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  Atención Directa: {COMPANY_CONTACT.leadContact}
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#D9232A] hover:bg-[#B91C1C] text-white text-xs font-bold transition-all shadow-md shadow-red-500/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Cotización</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
