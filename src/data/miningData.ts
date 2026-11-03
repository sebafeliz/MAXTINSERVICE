import { SupplyItem, TrainingCourse } from '../types';

export const COMPANY_CONTACT = {
  name: 'MAXTIN SERVICE',
  tagline: 'SOLUCIONES MINERAS E INDUSTRIALES',
  mainPitch: 'Excelencia en Mantenimiento, Capacitación y Certificación Minera',
  subPitch: 'Socio estratégico para optimizar la disponibilidad operacional, elevar estándares de seguridad y certificar la calidad de equipos y capital humano en la alta minería.',
  leadContact: 'Claudia Maya',
  leadTitle: 'Atención Directa y Gestión Comercial',
  email: 'maxtinservice@gmail.com',
  phoneDisplay: '+56 9 68479491',
  phoneRaw: '56968479491',
  hours: 'Lunes a Sábado: 08:00 - 19:00 | Faena / Soporte Crítico 24/7',
  location: 'Antofagasta / Regiones Mineras de Chile',
};

export const VALUE_PROPOSITIONS = [
  {
    id: 'respuesta',
    title: 'Respuesta Oportuna',
    highlight: 'Tiempos récord de atención',
    desc: 'Logística de aprovisionamiento rápido y despliegue técnico inmediato para mitigar detenciones imprevistas en planta y mina.',
  },
  {
    id: 'calidad',
    title: 'Estándar de Calidad',
    highlight: 'Evaluaciones técnicas rigurosas',
    desc: 'Control metrológico, ensayos no destructivos (END) e ingeniería inversa con tolerancia milimétrica para componentes críticos.',
  },
  {
    id: 'seguridad',
    title: 'Seguridad Minera',
    highlight: 'Alineación total con cero daños',
    desc: 'Compromiso irrestricto con normas SERNAGEOMIN, aislamiento de energías críticas, estándares OSHA y protocolos de faena.',
  },
];

export const STRATEGIC_FRAMEWORK = {
  mission: {
    title: 'Misión Institucional',
    text: 'Ser el socio estratégico de nuestros clientes en sus procesos y proyectos industriales, entregando servicios y suministros con máxima seguridad, calidad técnica, protección al medio ambiente y compromiso comunitario.',
  },
  vision: {
    title: 'Visión Institucional',
    text: 'Posicionarnos como líder integral en la venta de productos, mantenimiento especializado, capacitación y certificación de competencias y maquinarias para la minería e industrias avanzadas en la región.',
  },
};

export const FOUR_PILLARS = [
  {
    id: 'capacitaciones',
    title: 'Capacitaciones',
    subtitle: 'Formación de Capital Humano',
    summary: 'Programas teóricos y prácticos para personal minero e industrial orientados a la excelencia operacional y cero incidentes.',
    bulletPoints: [
      'Entrenamiento en cargadores, retroexcavadoras y camiones de extracción',
      'Aislamiento de energías, trabajo en altura y espacios confinados',
      'Diagnóstico de fallas en sistemas oleohidráulicos y automatización PLC',
    ],
  },
  {
    id: 'certificacion',
    title: 'Certificación',
    subtitle: 'Personas y Equipos en Faena',
    summary: 'Evaluación de competencias laborales y condición estructural/electromecánica bajo estrictos estándares mandantes.',
    bulletPoints: [
      'Acreditación competencial y auditoría de desempeño en terreno',
      'Ensayos no destructivos (END): ultrasonido y partículas magnéticas',
      'Sello de operabilidad normativa para ingreso a faena',
    ],
  },
  {
    id: 'suministros',
    title: 'Suministros',
    subtitle: 'Aprovisionamiento Especializado',
    summary: 'Venta y distribución oportuna de productos industriales, metalmecánicos, eléctricos y repuestos críticos.',
    bulletPoints: [
      'Perfiles, vigas de acero estructural y planchas lisas',
      'Cables varios diámetros, tableros y luminarias industriales',
      'Importación directa de PLC, válvulas, sellos y compresores',
    ],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento',
    subtitle: 'Taller Especializado y Faena',
    summary: 'Servicios mecánicos, hidráulicos, tornería de precisión y cuadrillas técnicas operacionales en faena minera.',
    bulletPoints: [
      'Confección de pasadores, bujes, engranajes y cilindros de potencia',
      'Ensamblado de flexibles y acoples de alta presión en faena',
      'Mantenimiento de flotas multimarca (CAT, Komatsu, Volvo, Promina, Schramm)',
    ],
  },
];

export const CERTIFICATION_STAGES_PERSONS = [
  {
    step: 'ETAPA 01',
    title: 'Evaluación Competencial',
    description: 'Diagnóstico teórico y práctico exhaustivo del personal técnico y operadores que se desempeñan en faenas de alta exigencia.',
    deliverable: 'Matriz de brechas técnicas y validación de conocimientos normativos.',
  },
  {
    step: 'ETAPA 02',
    title: 'Auditoría de Desempeño',
    description: 'Verificación en terreno de cumplimiento riguroso de protocolos, estándares de seguridad SERNAGEOMIN y disciplina operativa.',
    deliverable: 'Checklist de supervisión en faena y evaluación de maniobras críticas.',
  },
  {
    step: 'ETAPA 03',
    title: 'Acreditación Oficial',
    description: 'Emisión de certificación de idoneidad técnica apta para el pase de ingreso formal a mandantes mineros.',
    deliverable: 'Certificado de idoneidad con código de verificación para pases de ingreso.',
  },
];

export const EQUIPMENT_CERTIFICATION_ITEMS = [
  {
    id: 'inspeccion',
    title: 'Inspección Técnica Integral',
    summary: 'Evaluación estructural, electromecánica y desgaste en maquinaria crítica.',
    details: 'Diagnóstico exhaustivo de chasis, plumas, sistemas de levante, mandos finales, tren de rodaje y sistemas eléctricos de potencia.',
  },
  {
    id: 'end',
    title: 'Ensayos No Destructivos (END)',
    summary: 'Pruebas ultrasónicas y partículas magnéticas en soldaduras y estructuras de acero.',
    details: 'Detección temprana de microfisuras por fatiga de material, discontinuidades en cordones de soldadura y verificación de espesores.',
  },
  {
    id: 'sello',
    title: 'Sello de Operabilidad Normativa',
    summary: 'Acreditación de cumplimiento normativo exigido por mandantes mineros.',
    details: 'Emisión del expediente técnico que garantiza la operatividad segura según requerimientos de faenas de Gran Minería (Codelco, BHP, Antofagasta Minerals, Anglo American).',
  },
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'op-maquinaria-pesada',
    category: 'maquinaria',
    title: 'Operación de Maquinaria Pesada',
    shortDesc: 'Entrenamiento intensivo en cargadores frontales, retroexcavadoras, camiones de extracción y equipos de sondaje.',
    durationHours: 80,
    modality: 'Teórico - Práctico en Terreno',
    targetAudience: 'Operadores de mina raso y subterránea, mantenedores de equipos y supervisores.',
    modules: [
      'Inspección pre-operacional y checklist 360°',
      'Dinámica de estabilidad y curvas de torque en camiones CAEX',
      'Técnicas de excavación, carguío y volteo eficiente',
      'Protocolos de comunicación radial y zonas ciegas en botaderos',
      'Operación de equipos de perforación y sondaje (Schramm / Promina)',
    ],
    certificationStandard: 'Acreditación conforme a estándares de seguridad minera y evaluación práctica.',
  },
  {
    id: 'seguridad-procedimientos',
    category: 'seguridad',
    title: 'Seguridad y Procedimientos Críticos',
    shortDesc: 'Cursos certificados de aislamiento y bloqueo de energías (LOTO), trabajo en altura física, espacios confinados y soldadura segura.',
    durationHours: 40,
    modality: 'Presencial / Simulador',
    targetAudience: 'Mecánicos, electricistas, personal de montaje y contratistas en faena.',
    modules: [
      'Bloqueo, consignación y disipación de energías residuales (LOTO)',
      'Sistemas de detención de caídas y líneas de vida en altura',
      'Medición de atmósferas peligrosas y rescate en espacios confinados',
      'Seguridad en trabajos en caliente, oxi-corte y soldadura al arco',
      'Primeros auxilios y respuesta ante emergencias en faena',
    ],
    certificationStandard: 'Homologación de estándares mandantes mineros y acreditación OSHA / SERNAGEOMIN.',
  },
  {
    id: 'mantencion-hidraulica-plc',
    category: 'mantenimiento',
    title: 'Mantenimiento Mecánico e Hidráulico',
    shortDesc: 'Formación especializada en diagnóstico de fallas, sistemas oleohidráulicos de alta presión y automatización con PLC.',
    durationHours: 60,
    modality: 'En Faena Minera',
    targetAudience: 'Técnicos electromecánicos, jefes de turno de mantenimiento y analistas de confiabilidad.',
    modules: [
      'Lectura e interpretación de esquemas hidráulicos e ISO 1219',
      'Diagnóstico de bombas de pistones, válvulas proporcionales y cilindros',
      'Manejo de contaminación y filtración en fluidos hidráulicos ISO 4406',
      'Programación básica, monitoreo y diagnóstico de fallas en PLC industriales',
      'Metrología dimensional y alineamiento láser de conjuntos mecánicos',
    ],
    certificationStandard: 'Certificado técnico de capacitación con reporte de horas y competencias logradas.',
  },
];

export const SUPPLIES_CATALOG: SupplyItem[] = [
  // Page 8: Estructurales
  {
    id: 'sup-est-01',
    category: 'estructurales',
    title: 'Perfiles y Vigas de Acero Estructural',
    description: 'Vigas H, I, UPN, costaneras y tubos estructurales para obras mineras de alta resistencia.',
    specs: ['Normas ASTM A36 / A572 Grado 50', 'Largo estándar 6m y 12m', 'Corte dimensionado a medida disponible'],
    unit: 'Barras / Toneladas',
  },
  {
    id: 'sup-est-02',
    category: 'estructurales',
    title: 'Planchas Lisas y Mallas de Fierro',
    description: 'Planchas laminadas en caliente, mallas electro-soldadas y grating electroforjado para plataformas industriales.',
    specs: ['Espesores desde 2mm hasta 50mm', 'Acabado negro o galvanizado por inmersión', 'Parrillas de piso grating standard y aserrado'],
    unit: 'Planchas / m²',
  },
  // Page 8: Material Eléctrico
  {
    id: 'sup-elec-01',
    category: 'electrico',
    title: 'Cables Industriales Varios Diámetros',
    description: 'Conductores de cobre libre de halógenos, cables de fuerza apantallados y cables de control para ambientes corrosivos.',
    specs: ['Normas EVA / Superflex / THHN / RZ1-K', 'Aislamiento hasta 1kV y media tensión', 'Resistentes a hidrocarburos y rayos UV'],
    unit: 'Rollos / Bobinas por metro',
  },
  {
    id: 'sup-elec-02',
    category: 'electrico',
    title: 'Focos LED / Halógenos y Tableros',
    description: 'Luminarias industriales LED de alta potencia para torres de iluminación en rajo y tableros eléctricos estancos IP66/NEMA 4X.',
    specs: ['Luminarias LED 200W a 1000W antiexplosión', 'Cajas de paso y tableros auto-soportados', 'Equipamiento de protecciones Schneider/ABB'],
    unit: 'Unidades',
  },
  // Page 8: Herramientas
  {
    id: 'sup-herr-01',
    category: 'herramientas',
    title: 'Máquinas de Soldar y Esmeriles Angulares',
    description: 'Equipos inversores multiproceso (MIG, TIG, Arco manual) para faena pesada y esmeriles angulares industriales.',
    specs: ['Inversores trifásicos 400A - 600A continuo', 'Esmeriles 4.5" y 9" de alto torque con embrague de seguridad', 'Marcas Miller, Lincoln Electric, Bosch Heavy Duty'],
    unit: 'Equipos / Kit',
  },
  {
    id: 'sup-herr-02',
    category: 'herramientas',
    title: 'Sierras Circulares y Herramientas Manuales',
    description: 'Herramental manual aislado 1000V, llaves de impacto neumáticas/batería y cortadoras de metal para mantención rápida.',
    specs: ['Llaves de impacto 1/2", 3/4" y 1" hasta 2500 Nm', 'Juegos de dados de cromo-molibdeno para faena', 'Torquímetros certificados con calibración'],
    unit: 'Sets / Piezas',
  },
  // Page 8: Químicos y Aseo
  {
    id: 'sup-quim-01',
    category: 'quimicos',
    title: 'Desengrasantes y Químicos de Limpieza Pesada',
    description: 'Desengrasantes dieléctricos y solubles en agua de alta eficiencia para lavado de maquinaria y partes de motor.',
    specs: ['Biodegradables conforme a normas ambientales', 'Disolución rápida de grasas saponificadas y carbón', 'Hojas de seguridad (HDS) vigentes'],
    unit: 'Tambores 200L / Bidones 20L',
  },
  // Page 10: Sistemas PLC
  {
    id: 'sup-plc-01',
    category: 'plc',
    title: 'Sistemas PLC y Automatización Industrial',
    description: 'Importación directa de controladores lógicos programables, módulos I/O analógicos y digitales para chancado y molienda.',
    specs: ['Marcas Siemens S7-1200/1500, Allen-Bradley GuardLogix, Schneider', 'Tarjetas de comunicación Ethernet/IP y Profinet', 'Fuentes de poder redundantes 24VDC'],
    brands: ['Siemens', 'Allen-Bradley', 'Schneider Electric', 'Omron'],
    unit: 'Módulos / Sistemas',
  },
  // Page 10: Válvulas y Cañerías
  {
    id: 'sup-valv-01',
    category: 'valvulas',
    title: 'Válvulas y Cañerías para Fluidos Mineros',
    description: 'Válvulas de compuerta, mariposa, globo, bola, cuchillo para pulpas abrasivas, conectores y codos de alta presión.',
    specs: ['Rating ANSI 150, 300, 600, 900, 1500', 'Cuerpos en acero forjado, hierro nodular y recubrimiento cerámico/caucho', 'Conexiones bridadas, soldadas y Victaulic'],
    brands: ['DeZurik', 'Flowserve', 'Bray', 'Velan'],
    unit: 'Unidades',
  },
  // Page 10: Rodamientos y Sellos
  {
    id: 'sup-rod-01',
    category: 'rodamientos',
    title: 'Rodamientos Multimarca y Sellos Hidráulicos',
    description: 'Rodamientos oscilantes de rodillos, cónicos para poleas de correas transportadoras, retenes, descansos partidos y sellos.',
    specs: ['Juegos axiales y radiales especiales C3 / C4 para vibración', 'Descansos SNL / SAF con sellos laberinto taconite', 'Sellos de poliuretano y Viton para cilindros pesados'],
    brands: ['SKF', 'FAG / Schaeffler', 'Timken', 'NSK'],
    unit: 'Unidades / Juegos',
  },
  // Page 10: Compresores de Aire
  {
    id: 'sup-comp-01',
    category: 'compresores',
    title: 'Repuestos para Compresores de Aire (Alta y Baja Presión)',
    description: 'Filtros separadores de aceite, elementos filtrantes de aire, válvulas de admisión, tornillos y kits de mantención.',
    specs: ['Compatibilidad garantizada para equipos de perforación y planta', 'Aceites sintéticos para compresión 8000 horas', 'Kits de sellos y acoplamientos elásticos'],
    brands: ['Sullair', 'Atlas Copco', 'Ingersoll Rand', 'Kaeser'],
    unit: 'Kits / Repuestos',
  },
];

export const MINING_SUPPLIES = SUPPLIES_CATALOG;

export const WORKSHOP_SERVICES = [
  {
    id: 'mecanizado',
    title: 'Mecanizado de Piezas Especiales',
    subtitle: 'Tornería y Fresado CNC de Alta Precisión',
    desc: 'Confección y recuperación de pasadores tratados térmicamente, engranajes cónicos y rectos, ejes estriados, piñones, bujes de bronce al aluminio y polines de precisión para transporte de mineral.',
    features: ['Tolerancias certificadas micrométricas', 'Tratamientos térmicos por inducción y cementación', 'Ingeniería inversa de piezas discontinuadas'],
  },
  {
    id: 'cilindros',
    title: 'Cilindros e Hidráulica de Potencia',
    subtitle: 'Fabricación y Reparación Integral',
    desc: 'Desarme, bruñido de camisas, rectificado y cromado duro de vástagos, reemplazo integral de empaquetaduras y pruebas hidrostáticas dinámicas con banco de pruebas certificado.',
    features: ['Cilindros de dirección, levante y volteo', 'Pruebas de presión hasta 350 bar', 'Cromado duro con resistencia a corrosión salina'],
  },
  {
    id: 'flexibles',
    title: 'Flexibles y Acoples de Alta Presión',
    subtitle: 'Ensamblado Rápido en Taller y Terreno',
    desc: 'Prensado de mangueras hidráulicas de 2, 4 y 6 mallas espirales de acero para presiones extremas de trabajo. Venta de adaptadores, bridas SAE Code 61/62 y acoples rápidos antipérdida.',
    features: ['Certificado de prueba de reventón', 'Protecciones espirales y fundas térmicas ignífugas', 'Servicio de armado de emergencia en faena'],
  },
];

export const FIELD_SERVICES = [
  {
    id: 'flotas',
    title: 'Mantenimiento de Flotas Multimarca',
    desc: 'Servicio integral de mantenimiento preventivo, predictivo y correctivo para camiones aljibe, camionetas de supervisión, maquinaria pesada de movimiento de tierra y equipos de sondaje minero.',
    supportedBrands: ['Caterpillar', 'Komatsu', 'Volvo', 'Promina', 'Schramm', 'Hitachi', 'Sandvik'],
    activities: [
      'Pautas de mantención programada cada 250, 500 y 1000 horas',
      'Diagnóstico computarizado de motor, transmisión y sistemas de freno',
      'Atención en talleres de faena y estaciones remotas de sondaje',
      'Mantención especializada de compresores y cabezales de perforación',
    ],
  },
  {
    id: 'personal-tecnico',
    title: 'Prestación de Personal Técnico Operacional',
    desc: 'Suministro de cuadrillas técnicas y especialistas acreditados con pase de faena vigente para labores críticas de soporte operativo e infraestructura industrial.',
    supportedBrands: ['Personal Certificado', 'Equipos con EPP Clase A', 'Protocolos SERNAGEOMIN'],
    activities: [
      'Aseo y orden operacional en áreas de alta fricción mecánica',
      'Limpieza técnica de correas transportadoras, chutes y estanques industriales',
      'Reparación estructural de fachadas y naves industriales de taller',
      'Mantención y reposición de cierres perimetrales y protecciones de faena',
    ],
  },
];

export const PRESENTATION_PAGES = [
  {
    pageNum: 1,
    title: 'Excelencia en Mantenimiento, Capacitación y Certificación Minera',
    category: 'Portada Institucional',
    content: 'Socio estratégico para optimizar la disponibilidad operacional, elevar estándares de seguridad y certificar la calidad de equipos y capital humano en la alta minería.',
    pillars: ['Certificación de Equipos y Personas', 'Capacitación Técnica Minera', 'Mantenimiento, Tornería & Flotas'],
  },
  {
    pageNum: 2,
    title: 'Quiénes Somos & Propuesta de Valor',
    category: 'Experiencia Técnica e Ingenieril',
    content: 'Respaldo operacional y cobertura integral de procesos desde el taller de mecanizado hasta la certificación técnica en faena, garantizando continuidad y cumplimiento.',
    pillars: ['Respuesta Oportuna: Tiempos récord de atención', 'Estándar de Calidad: Evaluaciones técnicas rigurosas', 'Seguridad Minera: Alineación total con cero daños'],
  },
  {
    pageNum: 3,
    title: 'Marco Estratégico',
    category: 'Misión y Visión Institucional',
    content: 'Misión: Ser el socio estratégico en procesos y proyectos industriales con máxima seguridad y calidad técnica. Visión: Posicionarnos como líder integral regional.',
    pillars: ['Seguridad Absoluta', 'Calidad Técnica', 'Protección Ambiental', 'Compromiso Comunitario'],
  },
  {
    pageNum: 4,
    title: 'Estructura de Servicios Integrales MAXTIN',
    category: 'Portafolio Principal',
    content: 'Tres líneas maestras de negocio: Capacitaciones, Certificación y Mantenimiento.',
    pillars: ['Capacitaciones', 'Certificación', 'Mantenimiento'],
  },
  {
    pageNum: 5,
    title: 'Capacitaciones Técnicas y Operacionales Mineras',
    category: 'Formación de Capital Humano',
    content: 'Programas de alto nivel en Operación de Maquinaria Pesada, Seguridad y Procedimientos Críticos (LOTO, Altura, Confinados) y Mantenimiento Mecánico e Hidráulico.',
    pillars: ['Operación Maquinaria Pesada', 'Seguridad y Procedimientos Críticos', 'Mantenimiento Mecánico e Hidráulico'],
  },
  {
    pageNum: 6,
    title: 'Evaluación y Certificación de Calidad de Personas',
    category: 'Acreditación de Capital Humano',
    content: 'Metodología en 3 etapas estructuradas: Etapa 01 Evaluación Competencial, Etapa 02 Auditoría de Desempeño y Etapa 03 Acreditación Oficial.',
    pillars: ['Etapa 01: Evaluación Competencial', 'Etapa 02: Auditoría de Desempeño', 'Etapa 03: Acreditación Oficial'],
  },
  {
    pageNum: 7,
    title: 'Evaluación y Certificación de Calidad de Equipos',
    category: 'Garantía de Operabilidad',
    content: 'Inspección Técnica Integral, Ensayos No Destructivos (END) por ultrasonido y partículas magnéticas, y Sello de Operabilidad Normativa para mandantes mineros.',
    pillars: ['Inspección Técnica Integral', 'Ensayos No Destructivos (END)', 'Sello de Operabilidad Normativa'],
  },
  {
    pageNum: 8,
    title: 'Productos Metalmecánicos, Eléctricos y Químicos',
    category: 'Suministros Técnicos',
    content: 'Aprovisionamiento de perfiles y vigas estructurales, planchas lisas y mallas de fierro, conductores eléctricos, luminarias LED, herramientas pesadas y desengrasantes industriales.',
    pillars: ['Estructurales', 'Material Eléctrico', 'Herramientas', 'Químicos y Aseo'],
  },
  {
    pageNum: 9,
    title: 'Tornería, Fresado y Cilindros Hidráulicos',
    category: 'Mecanizado e Hidráulica',
    content: 'Mecanizado de piezas especiales (pasadores, engranajes, bujes, polines), cilindros e hidráulica de potencia y ensamblado de flexibles y acoples de alta presión.',
    pillars: ['Mecanizado de Piezas Especiales', 'Cilindros e Hidráulica de Potencia', 'Flexibles y Acoples de Alta Presión'],
  },
  {
    pageNum: 10,
    title: 'Repuestos Críticos, Componentes y PLC',
    category: 'Aprovisionamiento Especializado',
    content: 'Sistemas PLC para automatización, válvulas de compuerta/mariposa/globo/cuchillo, rodamientos multimarca y sellos hidráulicos, y repuestos para compresores Sullair y Atlas Copco.',
    pillars: ['Sistemas PLC', 'Válvulas y Cañerías', 'Rodamientos y Sellos', 'Compresores de Aire'],
  },
  {
    pageNum: 11,
    title: 'Mantenimiento de Flotas y Servicios Operacionales',
    category: 'Servicio en Faena',
    content: 'Mantenimiento multimarca para camiones, camionetas, maquinaria de movimiento de tierra y equipos de sondaje (Promina, Schramm, CAT, Komatsu, Volvo) y cuadrillas de personal técnico calificado.',
    pillars: ['Mantenimiento de Equipos en Faena', 'Prestación de Personal Técnico Operacional'],
  },
  {
    pageNum: 12,
    title: 'Transformemos sus Operaciones',
    category: 'Contacto Directo y Cotizaciones',
    content: 'Atención Directa: Claudia Maya | maxtinservice@gmail.com | +56 9 68479491. A su disposición para cotizaciones, diagnósticos técnicos y programas de acreditación minera.',
    pillars: ['Atención Directa: Claudia Maya', 'Correo: maxtinservice@gmail.com', 'Teléfono: +56 9 68479491'],
  },
];
