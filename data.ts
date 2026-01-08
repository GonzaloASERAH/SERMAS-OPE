import { Topic, TopicCategory } from './types';

// Helper to determine category based on topic number as per prompt
const getCategory = (id: number): TopicCategory => {
  const legalIds = [1, 2, 3, 6, 7, 9, 10, 11, 13, 14, 18, 19, 23, 24];
  const sermasIds = [4, 5, 8, 12, 20, 21, 22, 25, 26, 31];
  const itIds = [27, 28, 29, 30];

  if (legalIds.includes(id)) return TopicCategory.LEGAL;
  if (sermasIds.includes(id)) return TopicCategory.SERMAS;
  if (itIds.includes(id)) return TopicCategory.IT;
  return TopicCategory.OTHER; // Fallback for 15, 16, 17 if not explicitly categorized in prompt but likely Legal/Statutory
};

// Simplified parser simulation for the provided text. 
// In a real app, this would be a database or separate JSON files.
export const TOPICS: Topic[] = [
  { id: 1, title: "La Constitución Española", fullTitle: "Tema 1. La Constitución española de 1978", category: getCategory(1), subtopics: [{id: "1.1", title: "Estructura y contenido"}, {id: "1.2", title: "Título preliminar"}, {id: "1.3", title: "Derechos y deberes fundamentales"}, {id: "1.4", title: "Protección de la salud"}] },
  { id: 2, title: "Estatuto Autonomía Madrid", fullTitle: "Tema 2. El Estatuto de Autonomía de la Comunidad de Madrid", category: getCategory(2), subtopics: [{id: "2.1", title: "Estructura y contenido"}, {id: "2.2", title: "Competencias CM (legislativa, reglamentaria, ejecutiva)"}, {id: "2.3", title: "La Asamblea de Madrid"}] },
  { id: 3, title: "Gobierno y Admon. CM", fullTitle: "Tema 3. La Ley de Gobierno y Administración de la Comunidad de Madrid", category: getCategory(3), subtopics: [{id: "3.1", title: "Estructura y contenido"}, {id: "3.2", title: "El Gobierno de la CM"}, {id: "3.3", title: "Consejerías"}, {id: "3.4", title: "Administración Institucional"}] },
  { id: 4, title: "Ley General de Sanidad", fullTitle: "Tema 4. Ley 14/1986 General de Sanidad", category: getCategory(4), subtopics: [{id: "4.1", title: "Estructura sistema sanitario"}, {id: "4.2", title: "Organización general"}, {id: "4.3", title: "Servicios de salud de las CC.AA."}] },
  { id: 5, title: "Ordenación Sanitaria CM", fullTitle: "Tema 5. Ley 12/2001 de Ordenación Sanitaria CM", category: getCategory(5), subtopics: [{id: "5.1", title: "Sistema sanitario CM"}, {id: "5.2", title: "Derechos y deberes"}, {id: "5.3", title: "El Servicio Madrileño de Salud"}] },
  { id: 6, title: "Violencia de Género e Igualdad", fullTitle: "Tema 6. Ley Orgánica 1/2004 y Ley 3/2007", category: getCategory(6), subtopics: [{id: "6.1", title: "Principios rectores y sensibilización"}, {id: "6.3", title: "Prevención en ámbito sanitario"}, {id: "6.5", title: "Ley de Igualdad efectiva"}] },
  { id: 7, title: "Cohesión y Calidad SNS", fullTitle: "Tema 7. Ley 16/2003 y Autonomía del Paciente", category: getCategory(7), subtopics: [{id: "7.1", title: "Derechos de los ciudadanos"}, {id: "7.2", title: "Tarjeta sanitaria individual"}, {id: "7.3", title: "Derechos de información sanitaria (Ley 41/2002)"}] },
  { id: 8, title: "Modalidades Asistenciales", fullTitle: "Tema 8. Las modalidades de la asistencia sanitaria", category: getCategory(8), subtopics: [{id: "8.1", title: "Atención primaria"}, {id: "8.2", title: "Asistencia hospitalaria"}, {id: "8.3", title: "El área sanitaria"}] },
  { id: 9, title: "Régimen Jurídico Sector Público", fullTitle: "Tema 9. Ley 40/2015", category: getCategory(9), subtopics: [{id: "9.1", title: "Disposiciones generales"}, {id: "9.2", title: "Órganos administrativos"}, {id: "9.5", title: "Funcionamiento electrónico"}] },
  { id: 10, title: "Procedimiento Adm. Común (I)", fullTitle: "Tema 10. Ley 39/2015 (I)", category: getCategory(10), subtopics: [{id: "10.1", title: "Objeto y ámbito"}, {id: "10.2", title: "Interesados"}, {id: "10.4", title: "Términos y plazos"}] },
  { id: 11, title: "Procedimiento Adm. Común (II)", fullTitle: "Tema 11. Ley 39/2015 (II)", category: getCategory(11), subtopics: [{id: "11.1", title: "Actos administrativos"}, {id: "11.2", title: "Procedimiento común"}, {id: "11.3", title: "Revisión de actos"}] },
  { id: 12, title: "Buen Gobierno SERMAS", fullTitle: "Tema 12. Ley 11/2017 de Buen gobierno", category: getCategory(12), subtopics: [{id: "12.0", title: "Contenido general de la Ley"}] },
  { id: 13, title: "Prevención Riesgos Laborales", fullTitle: "Tema 13. Ley 31/1995 PRL", category: getCategory(13), subtopics: [{id: "13.1", title: "Derechos y obligaciones"}, {id: "13.2", title: "Consulta y participación"}] },
  { id: 14, title: "Estatuto Básico Empleado Público", fullTitle: "Tema 14. TREBEP", category: getCategory(14), subtopics: [{id: "14.1", title: "Objeto y clases de personal"}, {id: "14.2", title: "Acceso al empleo público"}, {id: "14.4", title: "Órganos de selección"}] },
  { id: 15, title: "Estatuto Marco (I)", fullTitle: "Tema 15. Estatuto Marco Personal Estatutario (I)", category: TopicCategory.LEGAL, subtopics: [{id: "15.1", title: "Normas generales y clasificación"}, {id: "15.4", title: "Derechos y deberes"}, {id: "15.5", title: "Adquisición de condición"}] },
  { id: 16, title: "Estatuto Marco (II)", fullTitle: "Tema 16. Estatuto Marco Personal Estatutario (II)", category: TopicCategory.LEGAL, subtopics: [{id: "16.1", title: "Provisión y selección"}, {id: "16.3", title: "Carrera profesional"}, {id: "16.5", title: "Jornada, permisos y licencias"}] },
  { id: 17, title: "Estatuto Marco (III)", fullTitle: "Tema 17. Estatuto Marco Personal Estatutario (III)", category: TopicCategory.LEGAL, subtopics: [{id: "17.1", title: "Situaciones administrativas"}, {id: "17.2", title: "Régimen disciplinario"}, {id: "17.3", title: "Incompatibilidades"}] },
  { id: 18, title: "Protección a la Infancia", fullTitle: "Tema 18. Ley Orgánica 8/2021", category: getCategory(18), subtopics: [{id: "18.1", title: "Ámbito y principios"}, {id: "18.3", title: "Tratamiento de datos"}, {id: "18.6", title: "Deber de reserva"}] },
  { id: 19, title: "Seguridad Social", fullTitle: "Tema 19. Ley General Seguridad Social", category: getCategory(19), subtopics: [{id: "19.1", title: "Régimen General"}, {id: "19.2", title: "Afiliación, altas y bajas"}, {id: "19.5", title: "Acción protectora"}] },
  { id: 20, title: "Documentación Sanitaria", fullTitle: "Tema 20. Documentación de uso Instituciones Sanitarias", category: getCategory(20), subtopics: [{id: "20.1", title: "Administrativa y clínica"}, {id: "20.2", title: "Historia clínica"}, {id: "20.5", title: "Registro Entrada/Salida"}] },
  { id: 21, title: "Admisión y Archivo", fullTitle: "Tema 21. Servicio de Admisión y documentación", category: getCategory(21), subtopics: [{id: "21.1", title: "Gestión historia clínica"}, {id: "21.2", title: "Archivo"}, {id: "21.3", title: "Codificación básica"}] },
  { id: 22, title: "Atención al Ciudadano", fullTitle: "Tema 22. Información y atención al ciudadano CM", category: getCategory(22), subtopics: [{id: "22.1", title: "Administración electrónica"}, {id: "22.2", title: "Identificación y autenticación"}] },
  { id: 23, title: "Protección de Datos", fullTitle: "Tema 23. RGPD y Protección de Datos", category: getCategory(23), subtopics: [{id: "23.1", title: "Principios RGPD"}, {id: "23.1.4", title: "Consentimiento"}, {id: "23.1.7", title: "Derecho de acceso"}] },
  { id: 24, title: "Contratos Sector Público", fullTitle: "Tema 24. Ley 9/2017 Contratos", category: getCategory(24), subtopics: [{id: "24.1", title: "Tipos de contratos"}, {id: "24.2", title: "Partes del contrato"}, {id: "24.3", title: "Expediente de contratación"}] },
  { id: 25, title: "Centros Hospitalarios", fullTitle: "Tema 25. Estructura Centros Hospitalarios", category: getCategory(25), subtopics: [{id: "25.1", title: "Gerencia"}, {id: "25.2", title: "Dirección Médica"}, {id: "25.3", title: "Dirección Enfermería"}, {id: "25.4", title: "Dirección Gestión"}] },
  { id: 26, title: "Plataformas Informáticas", fullTitle: "Tema 26. Plataformas informáticas Sanidad CM", category: getCategory(26), subtopics: [{id: "26.1", title: "Cibeles"}, {id: "26.2", title: "Historia Clínica Electrónica Única"}] },
  { id: 27, title: "Windows 10", fullTitle: "Tema 27. Entorno gráfico Windows 10", category: getCategory(27), subtopics: [{id: "27.1", title: "Ventanas e iconos"}, {id: "27.6", title: "Escritorio"}, {id: "27.9", title: "Explorador de Windows"}] },
  { id: 28, title: "Word 2016", fullTitle: "Tema 28. Word 2016", category: getCategory(28), subtopics: [{id: "28.1", title: "Creación documentos"}, {id: "28.5", title: "Composición"}, {id: "28.6", title: "Combinar correspondencia"}] },
  { id: 29, title: "Excel 2016", fullTitle: "Tema 29. Excel 2016", category: getCategory(29), subtopics: [{id: "29.1", title: "Hojas de cálculo"}, {id: "29.5", title: "Edición datos"}, {id: "29.8", title: "Fórmulas y funciones"}] },
  { id: 30, title: "Internet y Correo", fullTitle: "Tema 30. Redes de Comunicaciones e Internet", category: getCategory(30), subtopics: [{id: "30.2", title: "Navegadores"}, {id: "30.5", title: "Correo electrónico (Outlook)"}] },
  { id: 31, title: "Admon. Electrónica CM", fullTitle: "Tema 31. Administración Electrónica en la CM", category: getCategory(31), subtopics: [{id: "31.1", title: "Servicios telemáticos"}, {id: "31.2", title: "Normativa uso sistemas"}] },
];
