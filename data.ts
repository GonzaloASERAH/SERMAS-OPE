import { Topic, TopicCategory } from './types';

// Helper to determine category based on topic number as per prompt
const getCategory = (id: number): TopicCategory => {
  const legalIds = [1, 2, 3, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 23, 24];
  const sermasIds = [4, 5, 8, 12, 20, 21, 22, 25, 26, 31];
  const itIds = [27, 28, 29, 30];

  if (legalIds.includes(id)) return TopicCategory.LEGAL;
  if (sermasIds.includes(id)) return TopicCategory.SERMAS;
  if (itIds.includes(id)) return TopicCategory.IT;
  return TopicCategory.OTHER;
};

export const TOPICS: Topic[] = [
    { 
        id: 1, 
        title: "La Constitución Española", 
        fullTitle: "Tema 1. La Constitución española de 1978", 
        category: getCategory(1), 
        subtopics: [
            {
                id: "1.1", 
                title: "Estructura y contenido",
                content: `RESUMEN EJECUTIVO: La Constitución es la norma suprema del ordenamiento jurídico español. Su estructura se divide en una parte dogmática (principios y derechos) y una orgánica (organización de los poderes). Fue aprobada por las Cortes el 31 de octubre de 1978, ratificada en referéndum el 6 de diciembre y publicada en el BOE el 29 de diciembre de 1978, fecha en la que entró en vigor.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
• 169 artículos en total.
• 10 Títulos, precedidos por un Título Preliminar.
• 4 Disposiciones Adicionales.
• 9 Disposiciones Transitorias.
• 1 Disposición Derogatoria.
• 1 Disposición Final.

TRAMPAS HABITUALES:
• Fecha de entrada en vigor: No fue el día de la firma (27 de diciembre), sino el día de su publicación oficial en el BOE (29 de diciembre).
• Número de Títulos: Son 11 si contamos el Preliminar, pero se suele preguntar por "Títulos numerados", que son 10.

ESQUEMA RÁPIDO:
• Preámbulo: Sin valor normativo directo.
• Título Preliminar: Artículos 1 al 9.
• Título I: Derechos y Deberes Fundamentales (el más largo para examen).
• Título II al X: Parte orgánica (Corona, Cortes, Gobierno, Poder Judicial, etc.).`
            }, 
            {
                id: "1.2", 
                title: "Título preliminar (Arts. 1 a 9)", 
                content: `RESUMEN EJECUTIVO: Define la esencia del Estado español, sus valores, símbolos y principios jurídicos fundamentales que vinculan a ciudadanos y poderes públicos.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
• Artículo 1.1: España es un Estado social y democrático de Derecho.
• Valores superiores: Libertad, justicia, igualdad y pluralismo político.
• Artículo 1.2: La soberanía nacional reside en el pueblo español.
• Artículo 1.3: Forma política: Monarquía parlamentaria.
• Artículo 3: El castellano es la lengua española oficial; todos los españoles tienen el deber de conocerla y el derecho a usarla.
• Artículo 4: Bandera formada por tres franjas horizontales: roja, amarilla y roja; la amarilla es de doble anchura que cada una de las rojas.

TRAMPAS HABITUALES:
• Soberanía: Reside en el "pueblo español", no en el Rey ni en las Cortes.
• Lenguas cooficiales: Son oficiales en las Comunidades Autónomas de acuerdo con sus Estatutos, no por la Constitución directamente.
• Fuerzas Armadas (Art. 8): Misión: Garantizar soberanía e independencia, defender integridad territorial y ordenamiento constitucional.

ESQUEMA RÁPIDO:
• Art. 1: Definición de Estado.
• Art. 2: Unidad de la Nación y derecho a la autonomía.
• Art. 5: Madrid es la capital.
• Art. 6 y 7: Partidos políticos y Sindicatos (estructura interna democrática).
• Art. 9.3: Garantía de principios: legalidad, jerarquía normativa, publicidad de normas, seguridad jurídica.`
            }, 
            {
                id: "1.3", 
                title: "Derechos y deberes fundamentales", 
                content: `RESUMEN EJECUTIVO: El Título I (Arts. 10 a 55) es el núcleo de las libertades ciudadanas. Se divide en capítulos según el grado de protección jurídica de los derechos.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
• Artículo 12: Los españoles son mayores de edad a los dieciocho años.
• Artículo 14 (Igualdad): Los españoles son iguales ante la ley sin discriminación por nacimiento, raza, sexo, religión u opinión.
• Artículo 17.2: La detención preventiva no podrá durar más del tiempo estrictamente necesario y, en todo caso, un máximo de setenta y dos horas.
• Artículo 27: Derecho a la educación; la enseñanza básica es obligatoria y gratuita.
• Artículo 54: El Defensor del Pueblo es el alto comisionado de las Cortes para defender estos derechos.

TRAMPAS HABITUALES:
• Recurso de Amparo: Solo protege la igualdad (Art. 14), los derechos de la Sección 1.ª del Cap. II (Arts. 15-29) y la objeción de conciencia (Art. 30).
• Habeas Corpus: Es el procedimiento para la inmediata puesta a disposición judicial de toda persona detenida ilegalmente.
• Extradición (Art. 13): Solo se concede bajo el principio de reciprocidad y se excluyen delitos políticos (el terrorismo no es delito político).

ESQUEMA RÁPIDO DE ESTRUCTURA (TÍTULO I):
• Cap. I: Españoles y extranjeros (Arts. 11-13).
• Cap. II: Derechos y libertades (Arts. 14-38).
   o Sección 1.ª: Derechos fundamentales (Máxima protección).
   o Sección 2.ª: Derechos y deberes de los ciudadanos.
• Cap. III: Principios rectores de la política social y económica (Arts. 39-52).
• Cap. IV: Garantías de las libertades y derechos (Art. 53-54).
• Cap. V: Suspensión de derechos (Art. 55).`
            }, 
            {
                id: "1.4", 
                title: "La protección de la salud", 
                content: `RESUMEN EJECUTIVO: La salud se reconoce no como un derecho fundamental de máxima protección, sino como un Principio Rector que debe informar la actuación de los poderes públicos.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
• Artículo 43.1: Se reconoce el derecho a la protección de la salud.
• Artículo 43.2: Compete a los poderes públicos organizar y tutelar la salud pública a través de:
   1. Medidas preventivas.
   2. Prestaciones y servicios necesarios.
• Artículo 43.3: Los poderes públicos fomentarán la educación sanitaria, la educación física y el deporte, y facilitarán la adecuada utilización del ocio.

TRAMPAS HABITUALES:
• Ubicación: Se encuentra en el Capítulo III del Título I (Principios Rectores), no en la Sección 1.ª de Derechos Fundamentales. Por tanto, no se puede acudir directamente en amparo por él.
• Seguridad Social (Art. 41): Obliga a los poderes públicos a mantener un régimen público de Seguridad Social que garantice asistencia y prestaciones ante necesidad, especialmente en caso de desempleo.
• Consumidores (Art. 51): Los poderes públicos garantizarán la defensa de los consumidores, protegiendo su seguridad, salud e intereses económicos.

ESQUEMA RÁPIDO:
• Reconocimiento: Derecho a la salud (Art. 43.1).
• Gestión: Organización por poderes públicos (Art. 43.2).
• Fomento: Educación sanitaria y deporte (Art. 43.3).
• Protección Salud Consumidores: Garantizada en el Art. 51.1.`
            }
        ] 
    },
    { 
        id: 2, 
        title: "Estatuto Autonomía Madrid", 
        fullTitle: "Tema 2. El Estatuto de Autonomía de la Comunidad de Madrid", 
        category: getCategory(2), 
        subtopics: [
            { id: "2.1", title: "Estructura y contenido" },
            { id: "2.2", title: "Las competencias de la Comunidad de Madrid (legislativa, reglamentaria, ejecutiva)" },
            { id: "2.3", title: "La Asamblea de Madrid: composición, elección y funciones" }
        ] 
    },
    { 
        id: 3, 
        title: "Gobierno y Admon. CM", 
        fullTitle: "Tema 3. La Ley de Gobierno y Administración de la CM", 
        category: getCategory(3), 
        subtopics: [
            { id: "3.1", title: "Estructura y contenido" },
            { id: "3.2", title: "El Gobierno de la Comunidad de Madrid" },
            { id: "3.3", title: "Organización y estructura básica de las Consejerías" },
            { id: "3.4", title: "La Administración Institucional de la Comunidad de Madrid" }
        ] 
    },
    { 
        id: 4, 
        title: "Ley General de Sanidad", 
        fullTitle: "Tema 4. Ley 14/1986 General de Sanidad", 
        category: getCategory(4), 
        subtopics: [
            { id: "4.1", title: "Estructura del sistema sanitario público" },
            { id: "4.2", title: "Organización general del sistema sanitario público" },
            { id: "4.3", title: "Servicios de salud de las CC.AA. y Áreas de Salud" }
        ] 
    },
    { 
        id: 5, 
        title: "Ordenación Sanitaria CM", 
        fullTitle: "Tema 5. Ley 12/2001 de Ordenación Sanitaria de la CM", 
        category: getCategory(5), 
        subtopics: [
            { id: "5.1", title: "Sistema sanitario de la Comunidad de Madrid" },
            { id: "5.2", title: "Derechos y deberes de los ciudadanos" },
            { id: "5.3", title: "El Servicio Madrileño de Salud" }
        ] 
    },
    { 
        id: 6, 
        title: "Violencia de Género e Igualdad", 
        fullTitle: "Tema 6. Ley Orgánica 1/2004 y Ley 3/2007", 
        category: getCategory(6), 
        subtopics: [
            { id: "6.1", title: "LO 1/2004: Principios rectores" },
            { id: "6.2", title: "Medidas de sensibilización" },
            { id: "6.3", title: "Prevención y detección en el ámbito sanitario" },
            { id: "6.4", title: "Derechos de las funcionarias públicas" },
            { id: "6.5", title: "LO 3/2007 Igualdad efectiva: objeto, ámbito e integración en salud" }
        ] 
    },
    { 
        id: 7, 
        title: "Cohesión y Calidad SNS", 
        fullTitle: "Tema 7. Ley 16/2003 y Autonomía del Paciente", 
        category: getCategory(7), 
        subtopics: [
            { id: "7.1", title: "Derechos de los ciudadanos (Ley 16/2003)" },
            { id: "7.2", title: "La tarjeta sanitaria individual" },
            { id: "7.3", title: "Ley 41/2002: Derechos de información sanitaria y a la intimidad" }
        ] 
    },
    { 
        id: 8, 
        title: "Modalidades Asistenciales", 
        fullTitle: "Tema 8. Las modalidades de la asistencia sanitaria", 
        category: getCategory(8), 
        subtopics: [
            { id: "8.1", title: "La atención primaria de la salud" },
            { id: "8.2", title: "La asistencia hospitalaria" },
            { id: "8.3", title: "El área sanitaria" },
            { id: "8.4", title: "Los hospitales y los centros de especialidades" }
        ] 
    },
    { 
        id: 9, 
        title: "Régimen Jurídico Sector Público", 
        fullTitle: "Tema 9. Ley 40/2015 de Régimen Jurídico del Sector Público", 
        category: getCategory(9), 
        subtopics: [
            { id: "9.1", title: "Disposiciones generales" },
            { id: "9.2", title: "Los órganos administrativos" },
            { id: "9.3", title: "Principios generales y competencia" },
            { id: "9.4", title: "Abstención y recusación" },
            { id: "9.5", title: "Funcionamiento electrónico del sector público" },
            { id: "9.6", title: "Relaciones interadministrativas" }
        ] 
    },
    { 
        id: 10, 
        title: "Procedimiento Adm. Común (I)", 
        fullTitle: "Tema 10. Ley 39/2015 del Procedimiento Administrativo Común (I)", 
        category: getCategory(10), 
        subtopics: [
            { id: "10.1", title: "Objeto y ámbito subjetivo de aplicación" },
            { id: "10.2", title: "De los interesados en el procedimiento" },
            { id: "10.3", title: "De la actividad de las Administraciones Públicas" },
            { id: "10.4", title: "Términos y plazos" }
        ] 
    },
    { 
        id: 11, 
        title: "Procedimiento Adm. Común (II)", 
        fullTitle: "Tema 11. Ley 39/2015 del Procedimiento Administrativo Común (II)", 
        category: getCategory(11), 
        subtopics: [
            { id: "11.1", title: "De los actos administrativos" },
            { id: "11.2", title: "El procedimiento administrativo común" },
            { id: "11.3", title: "Revisión de los actos administrativos" },
            { id: "11.4", title: "Iniciativa legislativa y potestad reglamentaria" }
        ] 
    },
    { 
        id: 12, 
        title: "Buen Gobierno SERMAS", 
        fullTitle: "Tema 12. Ley 11/2017 de Buen gobierno y Profesionalización", 
        category: getCategory(12), 
        subtopics: [
            { id: "12.1", title: "Contenido general de la Ley" }
        ] 
    },
    { 
        id: 13, 
        title: "Prevención Riesgos Laborales", 
        fullTitle: "Tema 13. Ley 31/1995 de Prevención de Riesgos laborales", 
        category: getCategory(13), 
        subtopics: [
            { id: "13.1", title: "Derechos y obligaciones" },
            { id: "13.2", title: "Consulta y participación de los trabajadores" }
        ] 
    },
    { 
        id: 14, 
        title: "Estatuto Básico Empleado Público", 
        fullTitle: "Tema 14. Texto refundido de la Ley del Estatuto Básico del Empleado Público", 
        category: getCategory(14), 
        subtopics: [
            { id: "14.1", title: "Objeto y ámbito de aplicación" },
            { id: "14.2", title: "Clases de Personal" },
            { id: "14.3", title: "Acceso al empleo público (principios y requisitos)" },
            { id: "14.4", title: "Acceso personas con discapacidad y otros Estados" },
            { id: "14.5", title: "Órganos de selección" }
        ] 
    },
    { 
        id: 15, 
        title: "Estatuto Marco (I)", 
        fullTitle: "Tema 15. Estatuto Marco del personal estatutario (I)", 
        category: getCategory(15), 
        subtopics: [
            { id: "15.1", title: "Normas generales" },
            { id: "15.2", title: "Clasificación del personal estatutario" },
            { id: "15.3", title: "Planificación y ordenación del personal" },
            { id: "15.4", title: "Derechos y deberes" },
            { id: "15.5", title: "Adquisición y pérdida de la condición de fijo" }
        ] 
    },
    { 
        id: 16, 
        title: "Estatuto Marco (II)", 
        fullTitle: "Tema 16. Estatuto Marco del personal estatutario (II)", 
        category: getCategory(16), 
        subtopics: [
            { id: "16.1", title: "Provisión de plazas, selección y promoción interna" },
            { id: "16.2", title: "Movilidad del personal" },
            { id: "16.3", title: "Carrera profesional" },
            { id: "16.4", title: "Retribuciones" },
            { id: "16.5", title: "Jornada de trabajo, permisos y licencias" }
        ] 
    },
    { 
        id: 17, 
        title: "Estatuto Marco (III)", 
        fullTitle: "Tema 17. Estatuto Marco del personal estatutario (III)", 
        category: getCategory(17), 
        subtopics: [
            { id: "17.1", title: "Situaciones del personal estatutario" },
            { id: "17.2", title: "Régimen disciplinario" },
            { id: "17.3", title: "Incompatibilidades" },
            { id: "17.4", title: "Representación, participación y negociación colectiva" }
        ] 
    },
    { 
        id: 18, 
        title: "Protección a la Infancia", 
        fullTitle: "Tema 18. LO 8/2021 de protección integral a la infancia", 
        category: getCategory(18), 
        subtopics: [
            { id: "18.1", title: "Ámbito de aplicación e Interés superior del menor" },
            { id: "18.2", title: "Tratamiento de datos de carácter personal" },
            { id: "18.3", title: "Actuaciones de protección" },
            { id: "18.4", title: "Obligaciones de los ciudadanos y deber de reserva" }
        ] 
    },
    { 
        id: 19, 
        title: "Seguridad Social", 
        fullTitle: "Tema 19. Ley General de la Seguridad Social", 
        category: getCategory(19), 
        subtopics: [
            { id: "19.1", title: "Régimen General: campo de aplicación" },
            { id: "19.2", title: "Afiliación, altas y bajas" },
            { id: "19.3", title: "Cotización: obligatoriedad" },
            { id: "19.4", title: "Liquidación: competencia y prescripción" },
            { id: "19.5", title: "Acción protectora: Disposiciones generales" }
        ] 
    },
    { 
        id: 20, 
        title: "Documentación Sanitaria", 
        fullTitle: "Tema 20. Documentación de uso de las Instituciones Sanitarias", 
        category: getCategory(20), 
        subtopics: [
            { id: "20.1", title: "Administrativa y clínica" },
            { id: "20.2", title: "La historia clínica" },
            { id: "20.3", title: "Clasificación de los documentos" },
            { id: "20.4", title: "Circuitos de los documentos: archivo" },
            { id: "20.5", title: "El Registro de Entrada y Salida de documentos" }
        ] 
    },
    { 
        id: 21, 
        title: "Admisión y Archivo", 
        fullTitle: "Tema 21. El servicio de Admisión y documentación clínica", 
        category: getCategory(21), 
        subtopics: [
            { id: "21.1", title: "Gestión de la historia clínica" },
            { id: "21.2", title: "Archivo de historias clínicas" },
            { id: "21.3", title: "Nociones básicas de codificación" }
        ] 
    },
    { 
        id: 22, 
        title: "Atención al Ciudadano", 
        fullTitle: "Tema 22. Información y atención al ciudadano CM", 
        category: getCategory(22), 
        subtopics: [
            { id: "22.1", title: "La Administración electrónica" },
            { id: "22.2", title: "Identificación y autenticación (físicas y jurídicas)" }
        ] 
    },
    { 
        id: 23, 
        title: "Protección de Datos", 
        fullTitle: "Tema 23. RGPD y Protección de Datos", 
        category: getCategory(23), 
        subtopics: [
            { id: "23.1", title: "Objeto, ámbito y definiciones" },
            { id: "23.2", title: "Condiciones para el consentimiento" },
            { id: "23.3", title: "Tratamiento de categorías especiales de datos" },
            { id: "23.4", title: "Datos relativos a condenas e infracciones" },
            { id: "23.5", title: "Derecho de acceso del interesado" }
        ] 
    },
    { 
        id: 24, 
        title: "Contratos Sector Público", 
        fullTitle: "Tema 24. Ley 9/2017 de Contratos del Sector Público", 
        category: getCategory(24), 
        subtopics: [
            { id: "24.1", title: "Tipos de contratos" },
            { id: "24.2", title: "Partes del contrato" },
            { id: "24.3", title: "El expediente de contratación" }
        ] 
    },
    { 
        id: 25, 
        title: "Centros Hospitalarios", 
        fullTitle: "Tema 25. Estructura Centros Hospitalarios", 
        category: getCategory(25), 
        subtopics: [
            { id: "25.1", title: "Estructura funcional de la Gerencia" },
            { id: "25.2", title: "Dirección Médica" },
            { id: "25.3", title: "Dirección de Enfermería" },
            { id: "25.4", title: "Dirección de Gestión" }
        ] 
    },
    { 
        id: 26, 
        title: "Plataformas Informáticas", 
        fullTitle: "Tema 26. Plataformas informáticas sanidad CM", 
        category: getCategory(26), 
        subtopics: [
            { id: "26.1", title: "Cibeles" },
            { id: "26.2", title: "Historia Clínica Electrónica Única" }
        ] 
    },
    { 
        id: 27, 
        title: "Windows 10", 
        fullTitle: "Tema 27. Trabajo en el entorno gráfico de Windows 10", 
        category: getCategory(27), 
        subtopics: [
            { id: "27.1", title: "Ventanas, iconos, accesos directos" },
            { id: "27.2", title: "Menús contextuales y cuadros de diálogo" },
            { id: "27.3", title: "El escritorio y el menú inicio" },
            { id: "27.4", title: "La papelera de reciclaje" },
            { id: "27.5", title: "Explorador de Windows: carpetas y archivos" }
        ] 
    },
    { 
        id: 28, 
        title: "Word 2016", 
        fullTitle: "Tema 28. Word 2016 principales funciones", 
        category: getCategory(28), 
        subtopics: [
            { id: "28.1", title: "Creación, estructuración y plantillas" },
            { id: "28.2", title: "Herramientas de escritura y composición" },
            { id: "28.3", title: "Combinar correspondencia" },
            { id: "28.4", title: "Listas, esquemas y elementos gráficos" },
            { id: "28.5", title: "Impresión y Control de cambios" }
        ] 
    },
    { 
        id: 29, 
        title: "Excel 2016", 
        fullTitle: "Tema 29. Excel 2016", 
        category: getCategory(29), 
        subtopics: [
            { id: "29.1", title: "Hojas de cálculo: funciones y utilidades" },
            { id: "29.2", title: "Libros, hojas y celdas" },
            { id: "29.3", title: "Introducción, edición de datos y formatos" },
            { id: "29.4", title: "Configuración e impresión" },
            { id: "29.5", title: "Fórmulas, funciones y gráficos" }
        ] 
    },
    { 
        id: 30, 
        title: "Internet y Correo", 
        fullTitle: "Tema 30. Redes de Comunicaciones e Internet", 
        category: getCategory(30), 
        subtopics: [
            { id: "30.1", title: "Conceptos elementales, navegadores y búsquedas" },
            { id: "30.2", title: "Servicios en la Red" },
            { id: "30.3", title: "Correo electrónico: envío, recepción y gestión" },
            { id: "30.4", title: "Creación de mensajes y reglas" },
            { id: "30.5", title: "Libreta de direcciones y firmas" }
        ] 
    },
    { 
        id: 31, 
        title: "Admon. Electrónica CM", 
        fullTitle: "Tema 31. La Administración Electrónica en la CM", 
        category: getCategory(31), 
        subtopics: [
            { id: "31.1", title: "Servicios Telemáticos al ciudadano" },
            { id: "31.2", title: "Normativa de uso de sistemas informáticos" }
        ] 
    }
];