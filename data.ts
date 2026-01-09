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
                content: `Resumen Ejecutivo: La Constitución Española (CE) es la norma fundamental del Estado. Fue aprobada por las Cortes el 31 de octubre de 1978, ratificada por el pueblo el 6 de diciembre, sancionada por el Rey el 27 de diciembre y publicada en el BOE el 29 de diciembre de 1978, entrando en vigor ese mismo día. Se divide en una parte dogmática (valores y derechos) y una orgánica (organización de poderes).

Literalidad de la Norma (CLAVE EXAMEN):
1. Consta de 169 artículos.
2. Se estructura en un Título Preliminar y 10 Títulos numerados.
3. Posee 4 Disposiciones Adicionales.
4. Posee 9 Disposiciones Transitorias.
5. Posee 1 Disposición Derogatoria.
6. Posee 1 Disposición Final.
7. El Título I trata de los derechos y deberes fundamentales.
8. El Título II se dedica a la Corona.
9. El Título III regula las Cortes Generales.
10. El Título IV regula el Gobierno y la Administración.
11. El Título VIII trata de la Organización Territorial del Estado.
12. El Título IX regula el Tribunal Constitucional.
13. El Título X se dedica a la reforma constitucional.
14. Las Cortes han aprobado y el pueblo español ratificado la Constitución.
15. La Disposición Derogatoria deroga expresamente la Ley para la Reforma Política de 1977.
16. La Disposición Final ordena su publicación en las demás lenguas de España.
17. El Título I tiene 5 capítulos.
18. El Capítulo II del Título I tiene 2 secciones.
19. Los Títulos III, V y VIII también se dividen en capítulos.
20. El texto consolidado tiene su última modificación el 17 de febrero de 2024.

Trampas Habituales:
1. Confundir la fecha de ratificación (6 de diciembre) con la de entrada en vigor (29 de diciembre).
2. Creer que hay 11 títulos numerados; son 10 numerados más el Preliminar.
3. Afirmar que hay 5 Disposiciones Adicionales; son solo 4.
4. Intercambiar el número de Adicionales (4) con las Transitorias (9).
5. Pensar que el Preámbulo tiene fuerza jurídica articulada; es una declaración de voluntad.
6. Olvidar que el Título IV incluye tanto al Gobierno como a la Administración.
7. Confundir el Título VI (Poder Judicial) con el Título IX (Tribunal Constitucional).
8. Creer que la Constitución entró en vigor a los 20 días de su publicación; fue el mismo día.
9. Asumir que la Disposición Derogatoria es genérica; deroga leyes específicas como el Fuero de los Españoles.
10. Olvidar que el Título VIII incluye la Administración Local.
11. Pensar que el Rey promulga la CE en 15 días (regla general de leyes); la CE fue sancionada el 27 de diciembre.
12. Confundir el orden: el Título IX (TC) va antes que el Título X (Reforma).
13. Errar en el número de artículos: son 169, no 196.
14. Creer que las secciones están en todos los capítulos; solo están en el Capítulo II del Título I.
15. Afirmar que la soberanía reside en las Cortes; reside en el pueblo español.
16. Olvidar que el Título III tiene tres capítulos.
17. Pensar que el Título VII es sobre Justicia; es Economía y Hacienda.
18. Creer que la capital se regula en el Título VIII; está en el Preliminar.
19. Asumir que el Título I Capítulo I es sobre derechos; es sobre españoles y extranjeros.
20. Confundir la función del Rey: sanciona y promulga, pero no ratifica (lo hace el pueblo).

Esquema Rápido:
• Título Preliminar (Arts. 1-9).
• Título I: Derechos y Deberes Fundamentales (Arts. 10-55).
• Título II: La Corona (Arts. 56-65).
• Título III: Las Cortes Generales (Arts. 66-96).
• Título IV: El Gobierno y la Administración (Arts. 97-107).
• Título V: Relaciones Gobierno-Cortes (Arts. 108-116).
• Título VI: Poder Judicial (Arts. 117-127).
• Título VII: Economía y Hacienda (Arts. 128-136).
• Título VIII: Organización Territorial (Arts. 137-158).
• Título IX: Tribunal Constitucional (Arts. 159-165).
• Título X: Reforma Constitucional (Arts. 166-169).`
            }, 
            {
                id: "1.2", 
                title: "Título preliminar", 
                content: `Resumen Ejecutivo: El Título Preliminar (Arts. 1 al 9) define la esencia del Estado español: un Estado social y democrático de Derecho. Establece los valores superiores, la soberanía nacional, la monarquía parlamentaria, la unidad de la nación, el idioma oficial, la bandera, los partidos políticos, sindicatos y las Fuerzas Armadas.

Literalidad de la Norma (CLAVE EXAMEN):
1. Artículo 1.1: España es un Estado social y democrático de Derecho.
2. Valores superiores: libertad, justicia, igualdad y pluralismo político.
3. Artículo 1.2: La soberanía nacional reside en el pueblo español.
4. Artículo 1.3: La forma política es la Monarquía parlamentaria.
5. Artículo 2: Fundamentada en la indisoluble unidad de la Nación española.
6. Artículo 3.1: El castellano es la lengua española oficial del Estado.
7. Artículo 3.1: Todos los españoles tienen el deber de conocerla y el derecho a usarla.
8. Artículo 4.1: Bandera: tres franjas horizontales (roja, amarilla y roja).
9. Artículo 4.1: La franja amarilla es de doble anchura que cada una de las rojas.
10. Artículo 5: La capital del Estado es la villa de Madrid.
11. Artículo 6: Los partidos políticos son instrumento fundamental para la participación política.
12. Artículo 6: Su estructura interna y funcionamiento deberán ser democráticos.
13. Artículo 7: Sindicatos y asociaciones empresariales contribuyen a la defensa de intereses económicos y sociales.
14. Artículo 8.1: Fuerzas Armadas: Ejército de Tierra, Armada y Ejército del Aire.
15. Artículo 8.1: Misión: garantizar la soberanía, integridad territorial y orden constitucional.
16. Artículo 9.1: Ciudadanos y poderes públicos sujetos a la Constitución.
17. Artículo 9.3: Garantiza el principio de legalidad y jerarquía normativa.
18. Artículo 9.3: Garantiza la irretroactividad de disposiciones sancionadoras no favorables o restrictivas de derechos.
19. Artículo 9.3: Garantiza la interdicción de la arbitrariedad de los poderes públicos.
20. Artículo 3.2: Las demás lenguas serán oficiales en las CCAA de acuerdo con sus Estatutos.

Trampas Habituales:
1. Decir que la soberanía reside en el Rey; reside en el pueblo español.
2. Incluir la "paz" o "democracia" como valores superiores (solo son 4: libertad, justicia, igualdad, pluralismo).
3. Afirmar que la forma política es la República o Monarquía absoluta; es parlamentaria.
4. Confundir "nación" con "patria": la Constitución se fundamenta en la unidad de la Nación, patria común de todos.
5. Pensar que los españoles tienen el deber de conocer las lenguas cooficiales; solo tienen el deber con el castellano.
6. Creer que la franja amarilla es de igual anchura que las rojas; es el doble.
7. Afirmar que los partidos tienen libertad absoluta; deben respetar la CE y la ley.
8. Olvidar que sindicatos y asociaciones empresariales también deben ser democráticos.
9. Pensar que la misión de las FF.AA. es mantener el orden público (le corresponde a FF.CC. de Seguridad); su misión es soberanía, integridad y orden constitucional.
10. Creer que los ciudadanos no están sujetos a la CE, solo los poderes públicos; ambos lo están.
11. Confundir irretroactividad: se garantiza para normas no favorables, no para las favorables.
12. Afirmar que el Título Preliminar garantiza el derecho a la huelga; ese está en el Título I.
13. Pensar que el pluralismo político es solo para partidos; es un valor superior del ordenamiento.
14. Decir que la capital es la "Ciudad" de Madrid; la norma dice Villa.
15. Olvidar la jerarquía normativa como principio garantizado en el 9.3.
16. Creer que los sindicatos son instrumento para la participación política; ese papel es de los partidos.
17. Pensar que las banderas de CCAA pueden usarse sin la de España; deben usarse junto a ella.
18. Asumir que la FF.AA. incluye a la Guardia Civil en este artículo; cita solo Ejército de Tierra, Armada y Aire.
19. Confundir responsabilidad con arbitrariedad en el 9.3.
20. Decir que el castellano es la lengua oficial de "las Comunidades"; es del Estado.

Esquema Rápido:
• Art. 1: Estado, Valores, Soberanía, Monarquía.
• Art. 2: Unidad y Autonomía.
• Art. 3: Lengua (Castellano y cooficiales).
• Art. 4: Bandera (Nacional y Autonómicas).
• Art. 5: Capital (Villa de Madrid).
• Art. 6: Partidos Políticos.
• Art. 7: Sindicatos y Asociaciones Empresariales.
• Art. 8: Fuerzas Armadas.
• Art. 9: Legalidad, Participación y Garantías Jurídicas.`
            },
            {
                id: "1.3", 
                title: "Derechos y deberes fundamentales de los ciudadanos", 
                content: `Resumen Ejecutivo: El Título I (Arts. 10-55) protege la dignidad humana y los derechos fundamentales. Se divide en cinco capítulos, destacando el Capítulo II, donde la Sección 1.ª contiene los derechos con máxima protección (amparo) y la Sección 2.ª los derechos y deberes ciudadanos.

Literalidad de la Norma (CLAVE EXAMEN):
1. Artículo 10.1: La dignidad de la persona es fundamento del orden político.
2. Artículo 11.2: Ningún español de origen podrá ser privado de su nacionalidad.
3. Artículo 12: La mayoría de edad es a los dieciocho años.
4. Artículo 14: Los españoles son iguales ante la ley sin discriminación.
5. Artículo 15: Todos tienen derecho a la vida; queda abolida la pena de muerte (salvo leyes militares en guerra).
6. Artículo 16.2: Nadie podrá ser obligado a declarar sobre su ideología, religión o creencias.
7. Artículo 17.2: La detención preventiva no podrá durar más de setenta y dos horas.
8. Artículo 17.4: La ley regulará un procedimiento de «habeas corpus».
9. Artículo 18.2: El domicilio es inviolable; solo entrada por consentimiento, resolución judicial o flagrante delito.
10. Artículo 20.2: Estos derechos no pueden restringirse mediante ningún tipo de censura previa.
11. Artículo 21.1: El derecho de reunión pacífica no necesitará autorización previa.
12. Artículo 22.3: Las asociaciones deberán inscribirse solo a efectos de publicidad.
13. Artículo 27.4: La enseñanza básica es obligatoria y gratuita.
14. Artículo 28.1: Derecho a sindicarse libremente; nadie podrá ser obligado a afiliarse.
15. Artículo 28.2: Se reconoce el derecho a la huelga.
16. Artículo 30.1: Los españoles tienen el derecho y el deber de defender a España.
17. Artículo 31.1: Sistema tributario justo inspirado en igualdad y progresividad, nunca confiscatorio.
18. Artículo 32.1: Hombre y mujer tienen derecho al matrimonio con plena igualdad jurídica.
19. Artículo 33.1: Se reconoce el derecho a la propiedad privada y a la herencia.
20. Artículo 35.1: Todos los españoles tienen el deber de trabajar y el derecho al trabajo.

Trampas Habituales:
1. Pensar que un español de origen puede ser privado de su nacionalidad; está prohibido.
2. Confundir la mayoría de edad: son 18 años, no 16 ni 21.
3. Creer que la extradición se concede por delitos políticos; están excluidos (pero el terrorismo no es delito político).
4. Olvidar que la pena de muerte puede existir en tiempos de guerra según leyes militares.
5. Pensar que la detención preventiva es de 48 horas; el máximo constitucional es 72 horas.
6. Asumir que se puede obligar a alguien a declarar sobre sus creencias; está prohibido.
7. Afirmar que la policía puede entrar en un domicilio sin permiso ni orden si no hay delito; solo se puede en flagrante delito, consentimiento o resolución judicial.
8. Creer que el derecho de reunión en lugares de tránsito requiere autorización; solo requiere comunicación previa.
9. Pensar que las asociaciones secretas son legales; están prohibidas.
10. Olvidar que el derecho al honor tiene protección especial frente a la informática.
11. Confundir derechos de la Sección 1.ª con la 2.ª; solo la Sección 1.ª tiene Recurso de Amparo (y el Art. 14 y 30.2).
12. Pensar que la huelga no tiene límites; se deben asegurar los servicios esenciales.
13. Creer que la enseñanza básica solo es gratuita; es obligatoria y gratuita.
14. Olvidar que el derecho a la propiedad privada está limitado por su función social.
15. Pensar que el derecho de petición puede ser oral; debe ser por escrito.
16. Confundir deberes: defender a España es derecho y deber; el trabajo es derecho y deber.
17. Pensar que los Tribunales de Honor están permitidos; están prohibidos en la Administración civil.
18. Asumir que la libertad sindical es para todos; puede limitarse a las Fuerzas Armadas.
19. Creer que el sistema tributario puede ser confiscatorio; está prohibido por el 31.1.
20. Olvidar que el domicilio es inviolable para extranjeros también (Título I se aplica a extranjeros según tratados).

Esquema Rápido:
• Capítulo I: Nacionalidad, mayoría de edad, extranjeros.
• Capítulo II: Derechos y Libertades. 
   o Art. 14: Igualdad.
   o Sección 1.ª: Derechos Fundamentales (Arts. 15-29). Protección máxima.
   o Sección 2.ª: Derechos y Deberes ciudadanos (Arts. 30-38).
• Capítulo III: Principios Rectores (Política social y económica).
• Capítulo IV: Garantías (TC, Defensor del Pueblo).
• Capítulo V: Suspensión de derechos.`
            },
            {
                id: "1.4", 
                title: "La protección de la salud en la Constitución", 
                content: `Resumen Ejecutivo: La salud es un Principio Rector de la política social y económica regulado en el Artículo 43. No es un derecho fundamental subjetivo de aplicación directa, sino un mandato a los poderes públicos para organizar la salud pública mediante medidas preventivas y servicios.

Literalidad de la Norma (CLAVE EXAMEN):
1. Artículo 43.1: Se reconoce el derecho a la protección de la salud.
2. Artículo 43.2: Compete a los poderes públicos organizar y tutelar la salud pública.
3. Artículo 43.2: Se hará a través de medidas preventivas y prestaciones y servicios necesarios.
4. Artículo 43.2: La ley establecerá los derechos y deberes de todos al respecto.
5. Artículo 43.3: Los poderes públicos fomentarán la educación sanitaria, la educación física y el deporte.
6. Artículo 43.3: Facilitarán la adecuada utilización del ocio.
7. Artículo 41: Los poderes públicos mantendrán un régimen público de Seguridad Social.
8. Artículo 51.1: Garantizarán la defensa de consumidores y usuarios, protegiendo su salud.
9. Artículo 50: Los servicios sociales atenderán los problemas específicos de salud de la tercera edad.
10. Artículo 49.2: Se atenderán particularmente las necesidades de salud de las personas con discapacidad.
11. Artículo 45.2: Los poderes públicos velarán por la calidad de la vida y el medio ambiente.
12. Artículo 40.2: Velarán por la seguridad e higiene en el trabajo.
13. Artículo 148.1.21.ª: Las CCAA pueden asumir competencias en Sanidad e higiene.
14. Artículo 149.1.16.ª: El Estado tiene competencia exclusiva en Sanidad exterior.
15. Artículo 149.1.16.ª: El Estado dicta las bases y coordinación general de la sanidad.
16. Artículo 149.1.16.ª: El Estado tiene competencia exclusiva en la legislación sobre productos farmacéuticos.
17. Artículo 149.1.17.ª: Estado: legislación básica y régimen económico de la Seguridad Social.
18. Artículo 53.3: Los principios del Capítulo III (salud) informarán la legislación positiva y la práctica judicial.
19. Artículo 53.3: Solo podrán ser alegados ante la Jurisdicción ordinaria según las leyes que los desarrollen.
20. Artículo 39.1: Protección social, económica y jurídica de la familia.

Trampas Habituales:
1. Creer que la salud es un derecho fundamental de la Sección 1.ª; es un Principio Rector (Capítulo III).
2. Pensar que el Artículo 43 tiene Recurso de Amparo; no lo tiene.
3. Afirmar que solo el Estado organiza la salud; compete a los poderes públicos (incluye CCAA).
4. Decir que las CCAA tienen competencia exclusiva en legislación farmacéutica; es exclusiva del Estado.
5. Confundir sanidad exterior (Estado) con sanidad e higiene (CCAA).
6. Creer que el derecho a la salud se puede alegar directamente desde la CE; requiere de leyes de desarrollo para ser alegado en juicio.
7. Olvidar que el deporte y el ocio están vinculados constitucionalmente a la salud en el Art. 43.
8. Pensar que la Seguridad Social es solo para trabajadores; es para todos los ciudadanos.
9. Asumir que la Sanidad Exterior es competencia de las CCAA; es del Estado.
10. Errar en las bases: el Estado fija las bases, las CCAA pueden desarrollar y ejecutar.
11. Olvidar que la salud también incluye deberes para los ciudadanos, no solo derechos.
12. Creer que la higiene en el trabajo es un derecho de la Sección 1.ª; está en el Capítulo III (Art. 40).
13. Pensar que la protección de consumidores solo es económica; también incluye su salud y seguridad.
14. Asumir que la asistencia de Seguridad Social complementaria es obligatoria; es libre.
15. Olvidar la atención a la salud específica de la tercera edad en el Art. 50.
16. Pensar que el medio ambiente no tiene relación con la salud; la CE lo vincula a la calidad de vida.
17. Errar en el reparto de Seguridad Social: las CCAA pueden ejecutar servicios, pero el régimen económico es del Estado.
18. Confundir "asistencia sanitaria" con "protección de la salud"; el término constitucional es el segundo.
19. Creer que la educación sanitaria es obligatoria por el 43.3; los poderes públicos deben fomentarla.
20. Olvidar que la salud de los hijos es una obligación de los padres (Art. 39.3).

Esquema Rápido:
• Naturaleza: Principio Rector (Cap. III Título I).
• Mandato: Organizar y tutelar la salud pública.
• Contenido: Prevención, Prestaciones, Educación Sanitaria, Deporte y Ocio.
• Competencias:
   o Estado: Sanidad Exterior, Bases y Coordinación, Farmacia.
   o CCAA: Sanidad e higiene (asumible en Estatutos).
• Garantía: Informa la ley y práctica judicial; requiere ley de desarrollo para ser alegada.

Metáfora de estudio: Imagina que la Constitución es el plano de un hospital. El Título Preliminar son los cimientos y el cartel de la entrada. El Título I es la carta de derechos del paciente y las normas de seguridad. El Artículo 43 es el compromiso de que habrá medicinas y médicos para todos, pero el éxito del tratamiento depende de las leyes que digan cómo funciona cada planta del edificio.`
            }
        ] 
    },
    { 
        id: 2, 
        title: "Estatuto Autonomía Madrid", 
        fullTitle: "Tema 2. El Estatuto de Autonomía de la Comunidad de Madrid", 
        category: getCategory(2), 
        subtopics: [
            {
                id: "2.1", 
                title: "Estructura y contenido", 
                content: `RESUMEN EJECUTIVO: El Estatuto de Autonomía es la norma institucional básica de la Comunidad de Madrid, dictada en virtud de la Constitución Española. Su estructura se organiza en un Título Preliminar y varios títulos numerados que definen las instituciones, las competencias y el régimen jurídico y económico de la región. Establece que Madrid es una Comunidad Autónoma que organiza su autogobierno conforme a la Constitución y a este Estatuto.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
1. Ley Orgánica 3/1983, de 25 de febrero.
2. "Madrid... es una Comunidad Autónoma que organiza su autogobierno de conformidad con la Constitución Española y con el presente Estatuto".
3. El Estatuto es su "norma institucional básica".
4. "Los poderes de la Comunidad de Madrid se ejercen a través de sus instituciones de autogobierno: la Asamblea, el Gobierno y el Presidente".
5. Título I: "De la organización institucional de la Comunidad de Madrid".
6. Título II: "De las competencias de la Comunidad".
7. Título III: "Del régimen jurídico".
8. Título V: "Economía y Hacienda".
9. Artículo 35: "La Administración de la Comunidad de Madrid, como ente de derecho público, tiene personalidad jurídica y plena capacidad de obrar".
10. "El Derecho propio de la Comunidad de Madrid... es aplicable con preferencia a cualquier otro en el territorio de Madrid".
11. "En todo caso, el Derecho estatal tiene carácter supletorio del Derecho propio de Madrid".
12. Artículo 36.1.a: Potestad de "presunción de legitimidad y la ejecutoriedad de sus actos".
13. Artículo 36.1.e: "Inembargabilidad de sus bienes y derechos".
14. Artículo 42: "Las leyes de la Asamblea estarán sujetas únicamente al control de constitucionalidad por el Tribunal Constitucional".
15. Artículo 51: La Comunidad goza de "autonomía financiera".
16. El patrimonio está integrado por "bienes, derechos y acciones de los que sea titular".
17. Artículo 61.2: "El presupuesto será único, tendrá carácter anual e incluirá la totalidad de los ingresos y gastos".
18. Disposición Transitoria Cuarta: La Diputación Provincial de Madrid queda integrada en la Comunidad.
19. Disposición Final: "Entrará en vigor el mismo día de su publicación en el Boletín Oficial del Estado".
20. "No se admitirán interdictos contra las actuaciones de la Comunidad de Madrid en materia de su competencia".

TRAMPAS HABITUALES:
1. Creer que es una ley ordinaria; es Ley Orgánica.
2. Pensar que el Presidente no es una institución de autogobierno; son tres (Asamblea, Gobierno y Presidente).
3. Confundir la vigencia del Derecho estatal; es supletorio, no preferente.
4. Afirmar que las leyes de la Asamblea las controla el Tribunal Supremo; solo las controla el Tribunal Constitucional.
5. Suponer que la personalidad jurídica es de cada Consejería; la tiene la Administración como ente único.
6. Olvidar que el patrimonio incluye "acciones" además de bienes y derechos.
7. Pensar que la entrada en vigor es a los 20 días; fue el mismo día de publicación en el BOE.
8. Creer que la Diputación Provincial sigue existiendo de forma independiente; fue integrada y sus órganos disueltos.
9. Confundir el orden de los títulos: Organización Institucional es el Título I.
10. Considerar que la responsabilidad de los funcionarios se rige por leyes de Madrid; se rige por la legislación del Estado.
11. Pensar que los interdictos son admisibles contra la Comunidad.
12. Suponer que el presupuesto no es único.
13. Creer que Madrid no puede emitir deuda pública; puede hacerlo para financiar inversiones.
14. Olvidar que los actos del Gobierno son controlados por la jurisdicción contencioso-administrativa.
15. Pensar que la supresión de un tributo estatal cedido no afecta a la Comunidad.
16. Confundir la composición del Gobierno: incluye Presidente, Vicepresidentes (si los hay) y Consejeros.
17. Suponer que para ser Consejero hay que ser Diputado; no es necesario.
18. Creer que las leyes no se publican en el BOE; se publican en el BOCM y en el BOE.
19. Olvidar que los títulos de deuda tienen consideración de fondos públicos.
20. Pensar que el control económico es solo de la Cámara de Cuentas; es sin perjuicio del Tribunal de Cuentas.

ESQUEMA RÁPIDO:
• Título Preliminar: Definición y naturaleza.
• Título I (Organización Institucional): Asamblea, Gobierno y Presidente.
• Título II (Competencias): Materias exclusivas y compartidas.
• Título III (Régimen Jurídico): Administración, potestad sancionadora y control.
• Título V (Economía y Hacienda): Presupuestos, tributos y deuda.`
            },
            {
                id: "2.2", 
                title: "Las competencias de la Comunidad de Madrid", 
                content: `RESUMEN EJECUTIVO: La Comunidad ejerce la potestad legislativa, la reglamentaria y la función ejecutiva en las materias de su competencia exclusiva. La Asamblea ostenta el poder legislativo, mientras que el Consejo de Gobierno ostenta el reglamentario y la ejecución. Las competencias de ejecución incluyen la capacidad de dictar reglamentos de organización interna de los servicios.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
1. Artículo 15.1: "La Asamblea ejerce la potestad legislativa en las materias de competencia exclusiva".
2. Artículo 22.1: "Al Gobierno... correspondiéndole las funciones ejecutivas y administrativas".
3. Artículo 22.1: El Gobierno ejerce la potestad reglamentaria en materias no reservadas a la Asamblea.
4. Artículo 26.1: Competencia exclusiva en "organización, régimen y funcionamiento de sus instituciones".
5. Artículo 26.3: "Corresponderá a la Comunidad... la potestad legislativa, la reglamentaria y la función ejecutiva".
6. Artículo 34.2: A la Asamblea le corresponde la potestad legislativa y al Consejo de Gobierno la reglamentaria y la función ejecutiva.
7. Artículo 34.3: "Las competencias de ejecución... llevan implícito la correspondiente potestad reglamentaria para la organización interna".
8. Artículo 36.1.b: Potestad de expropiación.
9. Artículo 36.1.c: Potestad de sanción dentro de los límites del ordenamiento.
10. Artículo 36.1.d: "Facultad de utilización del procedimiento de apremio".
11. Artículo 36.1.f: "Potestades de investigación, deslinde y recuperación".
12. Artículo 32.3: Medidas necesarias para la ejecución de tratados internacionales en su territorio.
13. Artículo 38: Delegación de funciones ejecutivas en municipios si autoriza una Ley de la Asamblea.
14. Artículo 56.1: Gestión, recaudación e inspección de sus propios tributos.
15. Artículo 60.a: Gobierno aprueba "Reglamentos generales de sus propios tributos".
16. Artículo 61.1: Al Gobierno le corresponde la "elaboración y ejecución del presupuesto".
17. Artículo 36.1.g: Exención de prestar garantías o cauciones ante organismos administrativos y jueces.
18. Artículo 26.1.3: Competencia en el procedimiento administrativo derivado de las especialidades propias.
19. Artículo 26.3.1: Competencia exclusiva en "ordenación y planificación de la actividad económica regional".
20. Artículo 33.2: La Comunidad participará en la gestión del sector público económico estatal en los casos que proceda.

TRAMPAS HABITUALES:
1. Atribuir la potestad legislativa al Gobierno; es exclusiva de la Asamblea.
2. Pensar que el Gobierno puede reglamentar materias reservadas a la Asamblea.
3. Creer que las competencias de ejecución no permiten dictar reglamentos (permiten los de organización interna).
4. Suponer que la potestad de expropiación no incluye la declaración de urgente ocupación.
5. Olvidar que la potestad de sanción tiene límites legales.
6. Confundir la gestión de tributos propios (plenas atribuciones) con los cedidos (por delegación).
7. Pensar que la Comunidad no tiene privilegios de prelación para el cobro de créditos.
8. Creer que el Gobierno no puede realizar operaciones de crédito a corto plazo; puede si es inferior a un año.
9. Olvidar que la potestad legislativa también se ejerce sobre materias transferidas por el Estado (Art. 150 CE).
10. Suponer que la inspección no forma parte de las facultades de ejecución.
11. Pensar que la Comunidad no puede crear entidades institucionales; puede hacerlo mediante Ley.
12. Creer que el Presidente no nombra a los miembros del Gobierno.
13. Olvidar que la potestad reglamentaria del Gobierno incluye los reglamentos generales de sus tributos.
14. Confundir "función ejecutiva" con "potestad legislativa".
15. Suponer que la inembargabilidad no protege los derechos de la Hacienda madrileña.
16. Pensar que el Estado no puede delegar la gestión de sus impuestos en la Comunidad.
17. Creer que la Comunidad no tiene voz en tratados internacionales; puede solicitar su celebración.
18. Olvidar que el sector público económico de Madrid es competencia exclusiva.
19. Suponer que los actos normativos de organizaciones internacionales no los ejecuta la Comunidad en su territorio si afectan sus materias.
20. Pensar que los privilegios de la Administración madrileña son distintos a los del Estado.

ESQUEMA RÁPIDO:
• Potestad Legislativa: Asamblea de Madrid.
• Potestad Reglamentaria: Consejo de Gobierno (General) y ejecución (Organización interna).
• Función Ejecutiva: Gobierno de la Comunidad (Administración y gestión).`
            },
            {
                id: "2.3", 
                title: "La Asamblea de Madrid: composición, elección y funciones", 
                content: `RESUMEN EJECUTIVO: La Asamblea representa al pueblo de Madrid, ejerce la potestad legislativa, aprueba los presupuestos y controla la acción del Gobierno. Es una de las tres instituciones de autogobierno junto al Gobierno y al Presidente. Sus leyes solo pueden ser controladas por el Tribunal Constitucional.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
1. Artículo 15.1: "La Asamblea ejerce la potestad legislativa".
2. Artículo 16.2: Ejerce el "control ordinario del Gobierno".
3. Artículo 16.2: Ejerce funciones de "impulso, orientación y control".
4. Artículo 16.3.a: "La aprobación y control de los Presupuestos... y el examen y aprobación de sus cuentas".
5. Artículo 16.3.b: "El conocimiento y control de los planes económicos".
6. Artículo 16.3.c: "Acordar operaciones de crédito y deuda pública".
7. Artículo 16.3.d: "La ordenación básica de los órganos y servicios de la Comunidad".
8. Artículo 16.3.f: "La potestad de establecer y exigir tributos".
9. Artículo 16.3.m: Fijación de previsiones para suministrar al Gobierno de la Nación según el Art. 131.2 CE.
10. Artículo 16.3.n: "La aprobación de planes generales de fomento".
11. Artículo 40.1: "Las leyes aprobadas por la Asamblea serán promulgadas en nombre del Rey por el Presidente".
12. Artículo 42: Control de leyes únicamente por el Tribunal Constitucional.
13. Artículo 44: Una Ley de la Asamblea regulará la Cámara de Cuentas.
14. Artículo 52.2: Ley de la Asamblea regulará el régimen jurídico del patrimonio.
15. Artículo 54.2: "El porcentaje de participación [en ingresos del Estado] se establecerá por Ley".
16. Artículo 55.1: La Asamblea debe acordar concertar operaciones de crédito y deuda pública.
17. Artículo 59: Materias de reserva de Ley: establecimiento, modificación y supresión de impuestos propios.
18. Artículo 61.1: A la Asamblea le corresponde el "examen, enmienda, aprobación y control" del presupuesto.
19. Artículo 61.1: El Gobierno debe presentar el proyecto con antelación mínima de dos meses.
20. Disposición Adicional Segunda: Las elecciones se coordinarán con el calendario de las Cortes Generales.

TRAMPAS HABITUALES:
1. Pensar que el Gobierno aprueba los presupuestos; el Gobierno los elabora y la Asamblea los aprueba.
2. Creer que las leyes de la Asamblea las promulga el Rey; se promulgan en su nombre, pero lo hace el Presidente de la Comunidad.
3. Olvidar que la Asamblea también aprueba las cuentas, no solo el presupuesto.
4. Suponer que para ser Vicepresidente hay que ser Diputado; el EACAM dice que no será necesaria la condición de Diputado para miembros del Gobierno (excepto el Presidente).
5. Pensar que el control de la acción de gobierno se hace solo mediante leyes; existen mociones de carácter no legislativo.
6. Confundir el plazo de presentación del presupuesto: son 2 meses antes del inicio del ejercicio.
7. Creer que la Asamblea no tiene potestad tributaria; puede establecer y exigir tributos.
8. Suponer que el control del Tribunal de Cuentas anula el de la Cámara de Cuentas.
9. Olvidar que la Asamblea interviene en la designación de la Comisión Mixta de transferencias.
10. Pensar que la reforma del porcentaje de participación en tributos estatales no requiere Ley.
11. Creer que los planes de fomento de la Asamblea son independientes de la política económica nacional; deben enmarcarse en ella.
12. Suponer que el Reglamento de la Asamblea no puede regular el control administrativo.
13. Olvidar que las leyes se publican obligatoriamente en el BOE además de en el BOCM.
14. Pensar que la Asamblea no participa en la planificación económica nacional.
15. Creer que la modificación de la Disposición Adicional Primera sobre tributos cedidos es una reforma del Estatuto; no se considera como tal.
16. Confundir la función de "impulso" con la "legislativa".
17. Suponer que la Asamblea no tiene control sobre los planes económicos regionales.
18. Olvidar que las operaciones de crédito requieren acuerdo de la Asamblea.
19. Pensar que las leyes de la Asamblea pueden ser impugnadas por ilegalidad ante tribunales ordinarios; solo cabe el recurso de inconstitucionalidad.
20. Creer que el presupuesto anual no incluye a las empresas dependientes; debe incluir la totalidad.

ESQUEMA RÁPIDO:
• Composición: Diputados representantes del pueblo madrileño.
• Elección: Coordinada con el calendario nacional.
• Funciones Principales:
  - Legislativa.
  - Presupuestaria y financiera.
  - Control e impulso del Gobierno.
  - Normativa sobre patrimonio y tributos.`
            }
        ] 
    },
    { 
        id: 3, 
        title: "Gobierno y Admon. CM", 
        fullTitle: "Tema 3. La Ley de Gobierno y Administración de la CM", 
        category: getCategory(3), 
        subtopics: [
            { 
                id: "3.1", 
                title: "Estructura y contenido de la Ley 1/1983",
                content: `RESUMEN EJECUTIVO: La Ley 1/1983 es la norma encargada de sentar las bases del ejecutivo madrileño. Su filosofía se basa en un sistema parlamentario donde el Gobierno responde ante la Asamblea. La ley opta por un tratamiento conjunto de los aspectos políticos y administrativos del Gobierno, configurándolo como una unidad orgánica con personalidad jurídica única.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
1. Artículo 1.1: "Los órganos superiores de Gobierno y Administración de la Comunidad de Madrid son el Presidente, el Consejo de Gobierno y los Consejeros".
2. Artículo 3.2: "El Derecho estatal tendrá carácter supletorio, de conformidad con los artículos 149.3 de la Constitución y 34 del Estatuto de Autonomía".
3. Artículo 8.a: El Presidente debe promulgar las Leyes y ordenar su publicación "en el plazo máximo de quince días desde su aprobación".
4. Artículo 37.1: "La Administración de la Comunidad de Madrid, constituida por órganos jerárquicamente ordenados, actúa para el cumplimiento de sus fines con personalidad jurídica única".
5. Artículo 51.3: "Las disposiciones de carácter general entrarán en vigor a los veinte días de su publicación en el BOCM, salvo que en ellas se disponga otra cosa".
6. Artículo 82: "El «Boletín Oficial de la Comunidad de Madrid» será el medio oficial de publicación de las disposiciones y actos de los órganos de la Comunidad".
7. Artículo 86: "La Sede de la Presidencia... está ubicada en el edificio de la Real Casa de Correos, sito en la Puerta del Sol de Madrid".
8. Disposición Final Tercera: "La presente Ley entrará en vigor el día de su publicación en el «Boletín Oficial de la Comunidad de Madrid»".
9. Publicación Original: La ley fue publicada en el BOCM el 20-XII-1983 y en el BOE el 03-II-1984.
10. Artículo 10.1: El Presidente comunica la delegación de funciones a la Asamblea "dentro de las cuarenta y ocho horas siguientes a la adopción".

TRAMPAS HABITUALES:
1. Vigilancia del carácter supletorio: El derecho estatal no es preferente, es supletorio.
2. Personalidad jurídica: La Administración no tiene múltiples personalidades por Consejería; la personalidad es única.
3. Entrada en vigor de la Ley: La Ley 1/1983 entró en vigor el mismo día de su publicación, rompiendo la regla general de los 20 días.
4. Publicación de Leyes: El plazo para que el Presidente ordene la publicación de leyes aprobadas es de 15 días, no de 10 ni de 20.
5. Doble naturaleza: La ley no regula por separado lo político de lo administrativo; lo hace de forma unitaria.
6. Soberanía del nombre: El nombre "Consejero" es exclusivo de los miembros del Gobierno de la Comunidad o sus instituciones; ninguna otra administración local puede usarlo.
7. Tratamiento: El Presidente y los Consejeros tienen tratamiento de Excelencia.
8. Incompatibilidad Presidencial: El Presidente solo puede compatibilizar su cargo con el de Diputado de la Asamblea; se le prohíbe toda actividad laboral, profesional o empresarial.
9. Firma de acuerdos: Los acuerdos del Consejo son firmados por el Presidente y el Consejero correspondiente, o el de Presidencia si afecta a varias Consejerías.
10. Sede: No confundir la sede de la Asamblea con la de la Presidencia (Real Casa de Correos).

ESQUEMA RÁPIDO:
• Estructura Orgánica Superior (Art. 1.1): Presidente, Consejo de Gobierno, Consejeros.
• Símbolos y Honores del Presidente (Art. 5): Tratamiento de excelencia, Utilizar la bandera de la Comunidad como guion, Percibir sueldo (no superior a un Secretario de Estado).`
                    },
                    { 
                        id: "3.2", 
                        title: "El Gobierno de la Comunidad de Madrid",
                        content: `RESUMEN EJECUTIVO: El Consejo de Gobierno es el órgano colegiado que dirige la política y la administración regional. Ejerce la iniciativa legislativa, la función ejecutiva y la potestad reglamentaria. Está compuesto por el Presidente y los Consejeros, y su funcionamiento se rige por acuerdos de mayoría simple.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
1. Artículo 18: "El Consejo de Gobierno es el órgano colegiado que dirige la política y la administración de la Comunidad de Madrid".
2. Artículo 19.1: El Presidente podrá nombrar Vicepresidentes "que deberán ser Diputados de la Asamblea".
3. Artículo 21.m): Corresponde al Consejo "Decidir el nombramiento y cese de los cargos... con categoría igual o superior a Director general".
4. Artículo 23.1: Las reuniones se celebrarán con una periodicidad "igual o menor a quince días".
5. Artículo 24: "Los acuerdos del Consejo de Gobierno... se adoptan por mayoría simple, en caso de empate, el voto del Presidente es dirimente".
6. Artículo 25.1: "Las deliberaciones del Consejo tienen carácter reservado. Sus miembros están obligados a guardar secreto...".
7. Artículo 34.1: "El Consejo de Gobierno... responde solidariamente de su política ante la Asamblea".
8. Artículo 13.1: Para declarar la incapacidad física o mental del Presidente, se requiere acuerdo de las "cuatro quintas partes de la totalidad de sus miembros".
9. Artículo 15.1: La situación de interinidad en la Presidencia no podrá ser superior a dos meses, ampliable otros dos por acuerdo de la Asamblea.
10. Artículo 25.3: "El acta será sucinta y sólo contendrá el acuerdo del Consejo sobre las propuestas sometidas a su deliberación".

TRAMPAS HABITUALES:
1. Nombramiento de Vicepresidentes: Es una facultad potestativa ("podrá"), pero si se nombran, tienen que ser Diputados.
2. Quórum de asistencia: Para la validez de acuerdos se requiere al Presidente (o sustituto) y al menos la mitad de los Consejeros.
3. Secretaría del Consejo: No la ejerce un funcionario, sino el Consejero de la Presidencia.
4. Cuestión de confianza: El Presidente la plantea previa deliberación del Consejo de Gobierno, pero es una atribución presidencial.
5. Expertos en el Consejo: Pueden acudir expertos si el Presidente lo solicita, pero están obligados a guardar secreto.
6. Acuerdos vs Decretos: Los actos del Consejo que no sean disposiciones generales o actos previstos como Decreto adoptarán la forma de Acuerdo.
7. Moción de censura: No se puede presentar contra un Presidente en funciones (interino).
8. Incapacidad del Presidente (Cómputo): La mayoría de 4/5 para declarar incapacidad se computa sin contar al Presidente.
9. Cese del Consejo: El Consejo cesante continúa en funciones hasta la toma de posesión del nuevo.
10. Retirada de Proyectos de Ley: El Consejo puede retirar Proyectos de Ley remitidos a la Asamblea bajo las condiciones del Reglamento de la Cámara.

ESQUEMA RÁPIDO:
• Atribuciones del Consejo (Art. 21): Aprobar Proyectos de Ley, Dictar Decretos legislativos, Aprobar el Proyecto del Presupuesto anual, Acordar recursos de inconstitucionalidad.
• Orden de Prelación para sustitución del Presidente (Art. 17): 1. Vicepresidentes, 2. Consejeros.`
                    },
                    { 
                        id: "3.3", 
                        title: "Organización y estructura básica de las Consejerías",
                        content: `RESUMEN EJECUTIVO: La Administración se organiza bajo un modelo departamental con órganos jerárquicamente ordenados. Cada Consejería se estructura en una Secretaría General Técnica y Direcciones Generales por bloques de competencias homogéneas.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
1. Artículo 38.1: "Son órganos superiores de la Administración, el Presidente, el Vicepresidente o Vicepresidentes, el Consejo de Gobierno, los Consejeros y los Viceconsejeros".
2. Artículo 39.1: "Las Consejerías... contarán con una Secretaría General Técnica y se estructurarán... a través de Direcciones Generales".
3. Artículo 45: "Los Secretarios generales Técnicos y los Directores generales, ambos de idéntico nivel orgánico...".
4. Artículo 39.3: Los Directores generales serán nombrados "preferentemente de entre funcionarios de carrera... que pertenezcan a Cuerpos... para cuyo ingreso se exija título superior".
5. Artículo 39.3 (Subdirectores): La provisión de Subdirectores Generales será por convocatoria pública entre funcionarios con título de Doctor, Licenciado, Ingeniero, Arquitecto o equivalente.
6. Artículo 41.i): Los Consejeros son los encargados de "celebrar contratos relativos a las materias propias de la competencia de la Consejería".
7. Artículo 44.4: "El cargo de Viceconsejero es compatible con la condición de Diputado".
8. Artículo 46.1: Los Secretarios Generales Técnicos "certificarán todos los actos que sean atribución específica del Consejero".
9. Artículo 46.5: La SGT "confeccionará el proyecto de presupuesto anual de la propia Consejería".
10. Artículo 66: En cada Consejería existirá una Mesa de Contratación con un Letrado de los Servicios Jurídicos y un Interventor.

TRAMPAS HABITUALES:
1. Nivel de SGT vs Directores Generales: No hay jerarquía entre ellos; tienen el mismo nivel orgánico.
2. Nombramiento de Directores Generales: Se dice "preferentemente" funcionarios de carrera.
3. Retribuciones de Viceconsejeros-Diputados: Son compatibles en cargo, pero solo pueden percibir las retribuciones de Viceconsejero.
4. Forma de las Resoluciones: Los actos de Viceconsejeros, SGT y Directores Generales adoptan la forma de Resolución.
5. Órgano de contratación: Los Consejeros son los órganos de contratación originarios.
6. Responsabilidad de los Viceconsejeros: Responden ante el Consejero.
7. SGT: No es solo técnica; tramita expedientes de gastos y lleva el control de partidas.
8. DG: Son los "Jefes del Centro directivo".
9. Conflictos atribuciones: El Viceconsejero resuelve los conflictos entre órganos que dependan de él.
10. Unidades inferiores: Se establecen mediante RPT.

ESQUEMA RÁPIDO (Jerarquía): 1. Consejero, 2. Viceconsejero (Órgano superior), 3. SGT / Director General, 4. Subdirector General.`
                    },
                    { 
                        id: "3.4", 
                        title: "La Administración Institucional de la Comunidad de Madrid",
                        content: `RESUMEN EJECUTIVO: La ley prevé la descentralización funcional a través de Organismos Autónomos y Entes de derecho público. Estos organismos están bajo la superior inspección del Consejero.

LITERALIDAD DE LA NORMA (CLAVE EXAMEN):
1. Artículo 53.2: "Los actos dictados por los órganos de gobierno de los Organismos autónomos agotan la vía administrativa, salvo que su Ley de creación establezca otra cosa".
2. Artículo 53.3: "Las resoluciones dictadas por los Entes de derecho público en el ejercicio de potestades administrativas agotan la vía administrativa...".
3. Artículo 41.b): Es atribución de los Consejeros "Ejercer la superior inspección... respecto a la Administración institucional adscrita a su Consejería".
4. Artículo 53.4.c): Los Consejeros son competentes para la revisión de oficio de los actos dictados por los Consejos de administración de los Organismos autónomos.
5. Artículo 53.7: "En los Organismos autónomos... la competencia [de reclamaciones previas] corresponderá al Consejo de administración...".
6. Artículo 55.2: Para resolver la responsabilidad patrimonial en Organismos Autónomos, el competente es el titular de la Consejería de adscripción.
7. D.T. Primera.2: Compete al Consejo de Gobierno el nombramiento de los miembros de los Consejos de Administración de órganos de gestión directa y Fundaciones.
8. D.T. Primera.3: Los actos de entes de régimen transitorio no agotan la vía administrativa.
9. Artículo 58.1: Existirá un registro de Organismos y Entidades.
10. Artículo 54.1: La Junta Superior de Hacienda es el órgano económico-administrativo.

TRAMPAS HABITUALES:
1. Agotamiento vía: Por regla general la agotan.
2. Reclamaciones previas: Competencia del Consejo de Administración del organismo.
3. Revisión actos nulos: El Consejero puede revisar de oficio.
4. Responsabilidad Patrimonial: Competencia del Consejero de la Consejería adscrita.
5. Régimen Transitorio: Sus resoluciones NO agotan la vía administrativa.
6. Personalidad Jurídica: La Administración de la Comunidad tiene personalidad jurídica única.
7. SGT: Puede desempeñar la secretaría de los organismos descentralizados.
8. Junta Superior de Hacienda: Actúa con independencia funcional y conoce en única instancia.
9. Dependencia: Los org. autónomos dependen del Presidente, del Consejo o del Consejero.
10. Representantes: El Consejo de Gobierno los designa.

ESQUEMA RÁPIDO:
• Tipos de Entidades: Organismos Autónomos, Entes de derecho público.
• Controles: Consejero (Superior inspección), Junta Superior de Hacienda (Reclamaciones).`
                    }
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
            }
        ];