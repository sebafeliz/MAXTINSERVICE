export interface SupplyItem {
  id: string;
  category: 'estructurales' | 'electrico' | 'herramientas' | 'quimicos' | 'plc' | 'valvulas' | 'rodamientos' | 'compresores';
  title: string;
  description: string;
  specs: string[];
  brands?: string[];
  unit: string;
}

export interface TrainingCourse {
  id: string;
  category: 'maquinaria' | 'seguridad' | 'mantenimiento';
  title: string;
  shortDesc: string;
  durationHours: number;
  modality: 'Teórico - Práctico en Terreno' | 'Presencial / Simulador' | 'En Faena Minera';
  targetAudience: string;
  modules: string[];
  certificationStandard: string;
}

export interface QuoteCartItem {
  type: 'suministro' | 'servicio' | 'capacitacion' | 'certificacion';
  title: string;
  category: string;
  quantity: number;
  notes?: string;
}

export interface ContactQuoteForm {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  faenaLocation: string;
  urgency: 'normal' | 'alta' | 'emergencia_parada_planta';
  details: string;
}
