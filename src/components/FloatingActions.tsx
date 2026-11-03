import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/miningData';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuoteModal: _onOpenQuoteModal }) => {
  return (
    <aside aria-label="Acciones Rápidas" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${COMPANY_CONTACT.phoneRaw}?text=Hola%20Claudia,%20me%20comunico%20desde%20el%20sitio%20web%20de%20MAXTIN%20SERVICE%20para%20consultar%20por%20servicios.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Claudia Maya por WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 transition-all hover:scale-105 active:scale-95 group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold hidden sm:inline">
          WhatsApp Directo
        </span>
      </a>
    </aside>
  );
};
