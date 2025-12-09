
// IMPORTAR IMÁGENES 
// Proyecto 1 - Casa moderna maderera
import proyecto1_main from '../assets/proyecto1/Proyecto_destacado_1.webp';
import proyecto1_1 from '../assets/proyecto1/Proyecto_1_1.webp';
import proyecto1_2 from '../assets/proyecto1/Proyecto_1_2.webp';
import proyecto1_3 from '../assets/proyecto1/Proyecto_1_3.webp';
import proyecto1_4 from '../assets/proyecto1/Proyecto_1_4.webp';
import proyecto1_5 from '../assets/proyecto1/Proyecto_1_6.webp';
import proyecto1_6 from '../assets/proyecto1/Proyecto_1_7.webp';

// Proyecto 2 - Torre Residencial
import proyecto2_main from '../assets/proyecto2/Proyecto_destacado_2.webp';
import proyecto2_1 from '../assets/proyecto2/Proyecto_2_1.webp';
import proyecto2_2 from '../assets/proyecto2/Proyecto_2_2.webp';
import proyecto2_3 from '../assets/proyecto2/Proyecto_2_3.webp';
import proyecto2_4 from '../assets/proyecto2/Proyecto_2_4.webp';
import proyecto2_5 from '../assets/proyecto2/Proyecto_2_5.webp';
import proyecto2_6 from '../assets/proyecto2/Proyecto_2_6.webp';

// Proyecto 3 - Casa ladrillo
import proyecto3_main from '../assets/proyecto3/Proyecto_destacado_3.webp';
import proyecto3_1 from '../assets/proyecto3/Proyecto_3_1.webp';
import proyecto3_2 from '../assets/proyecto3/Proyecto_3_2.webp';
import proyecto3_3 from '../assets/proyecto3/Proyecto_3_3.webp';
import proyecto3_4 from '../assets/proyecto3/Proyecto_3_4.webp';
import proyecto3_5 from '../assets/proyecto3/Proyecto_3_5.webp';
import proyecto3_6 from '../assets/proyecto3/Proyecto_3_6.webp';

// Proyecto 4 - Edificio Urbano
import proyecto4_main from '../assets/proyecto4/Proyecto_destacado_4.webp';
import proyecto4_1 from '../assets/proyecto4/Proyecto_4_1.webp';
import proyecto4_2 from '../assets/proyecto4/Proyecto_4_2.webp';
import proyecto4_3 from '../assets/proyecto4/Proyecto_4_3.webp';
import proyecto4_4 from '../assets/proyecto4/Proyecto_4_4.webp';
import proyecto4_5 from '../assets/proyecto4/Proyecto_4_5.webp';
import proyecto4_6 from '../assets/proyecto4/Proyecto_4_6.webp';

// Proyecto 5 - Casa Zen
import proyecto5_main from '../assets/proyecto5/Proyecto_destacado_5.webp';
import proyecto5_1 from '../assets/proyecto5/Proyecto_5_1.webp';
import proyecto5_2 from '../assets/proyecto5/Proyecto_5_2.webp';
import proyecto5_3 from '../assets/proyecto5/Proyecto_5_3.webp';
import proyecto5_4 from '../assets/proyecto5/Proyecto_5_4.webp';
import proyecto5_5 from '../assets/proyecto5/Proyecto_5_5.webp';
import proyecto5_6 from '../assets/proyecto5/Proyecto_5_6.webp';

// Proyecto 6 - Diseño de interior minimalista
import proyecto6_main from '../assets/proyecto6/Proyecto_destacado_6.webp';
import proyecto6_1 from '../assets/proyecto6/Proyecto_6_1.webp';
import proyecto6_2 from '../assets/proyecto6/Proyecto_6_2.webp';
import proyecto6_3 from '../assets/proyecto6/Proyecto_6_3.webp';
import proyecto6_4 from '../assets/proyecto6/Proyecto_6_4.webp';
import proyecto6_5 from '../assets/proyecto6/Proyecto_6_5.webp';
import proyecto6_6 from '../assets/proyecto6/Proyecto_6_6.webp';

// Proyecto 7 - Edificio Residencial Esmeralda
import proyecto7_main from '../assets/proyecto7/Proyecto_destacado_7.webp';
import proyecto7_1 from '../assets/proyecto7/Proyecto_7_1.webp';
import proyecto7_2 from '../assets/proyecto7/Proyecto_7_2.webp';
import proyecto7_3 from '../assets/proyecto7/Proyecto_7_3.webp';
import proyecto7_4 from '../assets/proyecto7/Proyecto_7_4.webp';
import proyecto7_5 from '../assets/proyecto7/Proyecto_7_5.webp';
import proyecto7_6 from '../assets/proyecto7/Proyecto_7_6.webp';


// ARRAY DE PROYECTOS 
export const projects = [
  {
    id: 1,
    title: "Casa Timber Modern",
    type: "Residencial",
    location: "Valle de Bravo, MX",
    layout: "wide", 
    slug: "casa-timber-modern", 
    
    photo: proyecto1_main,
    
    gallery: [
      proyecto1_main, proyecto1_1, proyecto1_2, proyecto1_3, 
      proyecto1_4, proyecto1_5, proyecto1_6
    ],
    
    client: "Familia Montemayor",
    year: "2024",
    area: "450m²",
    
    description: `Una reinterpretación contemporánea de la cabaña tradicional. Este proyecto explora la versatilidad de la madera laminada (CLT) combinada con grandes superficies acristaladas. La estructura de madera no solo sostiene la casa, sino que se convierte en el acabado principal, aportando calidez y textura a cada espacio.

    El diseño se integra respetuosamente en el entorno boscoso, elevándose ligeramente sobre el terreno para minimizar el impacto en el suelo natural. Los interiores fluyen hacia el exterior, borrando los límites entre el refugio y el bosque.`,
    
    features: [
      "Estructura de madera CLT",
      "Sostenibilidad pasiva",
      "Integración boscosa",
      "Acabados naturales",
      "Ventanales de piso a techo"
    ],
    
    team: [
      { role: "Arquitecto Líder", name: "Jorge Pérez" },
      { role: "Ingeniería Estructural", name: "Madera Lab" }
    ],
    
    tags: ["madera", "bosque", "sostenible", "cabaña", "moderno"]
  },

  {
    id: 2,
    title: "Torre Axis Uno",
    type: "Comercial", 
    location: "San Pedro, NL",
    layout: "tall", 
    slug: "torre-axis-uno",
    
    photo: proyecto2_main,
    
    gallery: [
      proyecto2_main, proyecto2_1, proyecto2_2, proyecto2_3, 
      proyecto2_4, proyecto2_5, proyecto2_6
    ],
    
    client: "Grupo Axis",
    year: "2023",
    area: "12,500m²",
    
    description: `Un hito vertical en el horizonte de la ciudad. La Torre Axis Uno desafía la gravedad con una estructura de concreto expuesto y volúmenes que giran sutilmente para optimizar las vistas panorámicas de la Sierra Madre.

    El proyecto combina residencias de lujo en los niveles superiores con oficinas corporativas y comercio en la base. La fachada ventilada y el uso de cristales de alto rendimiento garantizan la eficiencia energética en un clima extremo.`,
    
    features: [
      "Uso mixto",
      "Certificación LEED Gold",
      "Vistas 360°",
      "Estructura antisísmica",
      "Domótica integrada"
    ],
    
    team: [
      { role: "Arquitecto Principal", name: "Jorge Pérez" },
      { role: "Diseño de Fachada", name: "Glass Tech" }
    ],
    
    tags: ["torre", "concreto", "vertical", "lujo", "oficinas"]
  },

  {
    id: 3,
    title: "Casa Ladrillo",
    type: "Residencial",
    location: "Puebla, MX",
    layout: "normal",
    slug: "casa-ladrillo",
    
    photo: proyecto3_main,
    
    gallery: [
      proyecto3_main, proyecto3_1, proyecto3_2, proyecto3_3, 
      proyecto3_4, proyecto3_5, proyecto3_6
    ],
    
    client: "Privado",
    year: "2023",
    area: "320m²",
    
    description: `Una oda a la artesanía local. Casa Ladrillo utiliza el material más humilde de la construcción para crear una arquitectura de texturas ricas y juegos de luces y sombras. La celosía de ladrillo permite la ventilación cruzada y privacidad sin perder la conexión con el exterior.

    El diseño se organiza en torno a un patio central, reinterpretando la tipología de la casa mexicana tradicional con un lenguaje decididamente contemporáneo y brutalista.`,
    
    features: [
      "Celosía artesanal",
      "Patio central",
      "Ventilación pasiva",
      "Materialidad cruda",
      "Jardín endémico"
    ],
    
    team: [
      { role: "Arquitecto", name: "Enrique Gómez" },
      { role: "Artesano", name: "Taller Local" }
    ],
    
    tags: ["ladrillo", "textura", "artesanal", "patio", "mexicano"]
  },

  {
    id: 4,
    title: "Edificio Urbano Modular",
    type: "Residencial",
    location: "Ciudad de México, MX",
    layout: "normal",
    slug: "edificio-urbano-modular",
    
    photo: proyecto4_main,
    
    gallery: [
      proyecto4_main, proyecto4_1, proyecto4_2, proyecto4_3, 
      proyecto4_4, proyecto4_5, proyecto4_6
    ],
    
    client: "Desarrolladora Metro",
    year: "2024",
    area: "850m²",
    
    description: `Respuesta arquitectónica a la densidad urbana. Este edificio de departamentos utiliza un sistema constructivo modular que aceleró la obra y redujo desperdicios. La fachada de concreto y acero negro se integra perfectamente en el contexto industrial-chic de la zona.

    Cada unidad cuenta con balcones privados que actúan como extensiones del espacio habitable, permitiendo a los usuarios reconectar con la ciudad desde la privacidad de su hogar.`,
    
    features: [
      "Construcción modular",
      "Eficiencia espacial",
      "Roof garden común",
      "Estética industrial",
      "Bajo mantenimiento"
    ],
    
    team: [
      { role: "Arquitecto", name: "Enrique Gómez" },
      { role: "Estructura", name: "Acero Estudio" }
    ],
    
    tags: ["urbano", "departamentos", "industrial", "modular", "ciudad"]
  },

  {
    id: 5,
    title: "Casa Zen",
    type: "Conceptual", 
    location: "Kyoto, JP (Concepto)",
    layout: "wide",
    slug: "casa-zen",
    
    photo: proyecto5_main,
    
    gallery: [
      proyecto5_main, proyecto5_1, proyecto5_2, proyecto5_3, 
      proyecto5_4, proyecto5_5, proyecto5_6
    ],
    
    client: "Concurso Internacional",
    year: "2023",
    area: "200m²",
    
    description: `Un ejercicio de sustracción. Casa Zen busca la esencia del habitar a través del silencio visual. Espacios diáfanos, líneas puras y una conexión espiritual con el jardín de rocas exterior.

    La paleta de materiales se reduce al mínimo: concreto blanco, madera clara y piedra. La luz natural actúa como el cuarto material, cambiando la atmósfera de la casa a lo largo del día.`,
    
    features: [
      "Minimalismo extremo",
      "Jardín seco",
      "Luz cenital",
      "Atmósfera meditativa",
      "Espacios fluidos"
    ],
    
    team: [
      { role: "Diseño", name: "Maria Rodríguez" },
      { role: "Visualización", name: "Render Studio" }
    ],
    
    tags: ["zen", "minimalista", "blanco", "paz", "conceptual"]
  },

  {
    id: 6,
    title: "Interior Minimalista",
    type: "Interior",
    location: "Nueva York, USA",
    layout: "normal",
    slug: "interior-minimalista",
    
    photo: proyecto6_main,
    
    gallery: [
      proyecto6_main, proyecto6_1, proyecto6_2, proyecto6_3, 
      proyecto6_4, proyecto6_5, proyecto6_6
    ],
    
    client: "Coleccionista de Arte",
    year: "2024",
    area: "180m²",
    
    description: `Renovación de un loft histórico transformado en una galería habitable. El objetivo fue limpiar el ruido visual para que el mobiliario de diseño y la colección de arte del cliente fueran los protagonistas.

    Se eliminaron particiones innecesarias para crear una planta libre. El suelo de microcemento continuo unifica todo el apartamento, mientras que la iluminación de riel permite flexibilidad museográfica.`,
    
    features: [
      "Renovación",
      "Mobiliario de autor",
      "Iluminación museográfica",
      "Planta libre",
      "Microcemento"
    ],
    
    team: [
      { role: "Interiorista", name: "María Rodríguez" },
      { role: "Curaduría", name: "Art Consult" }
    ],
    
    tags: ["interior", "reforma", "arte", "loft", "diseño"]
  },

  {
    id: 7,
    title: "Residencial Esmeralda",
    type: "Residencial",
    location: "Mérida, MX",
    layout: "tall",
    slug: "residencial-esmeralda",
    
    photo: proyecto7_main,
    
    gallery: [
      proyecto7_main, proyecto7_1, proyecto7_2, proyecto7_3, 
      proyecto7_4, proyecto7_5, proyecto7_6
    ],
    
    client: "Inmobiliaria Península",
    year: "2024",
    area: "3,500m²",
    
    description: `Lujo tropical contemporáneo. Este complejo residencial integra la vegetación exuberante en la propia arquitectura. Grandes terrazas voladas funcionan como brise-soleil naturales, protegiendo los interiores del sol y albergando jardines privados.

    El uso de piedra caliza de la región y maderas tropicales ancla el edificio a su contexto geográfico, ofreciendo una experiencia de resort en la vida diaria.`,
    
    features: [
      "Arquitectura tropical",
      "Jardines en terraza",
      "Ventilación cruzada",
      "Piedra local",
      "Amenidades wellness"
    ],
    
    team: [
      { role: "Arquitecto", name: "Jorge Pérez" },
      { role: "Paisajismo", name: "Verde Vivo" }
    ],
    
    tags: ["tropical", "jardines", "lujo", "piedra", "terraza"]
  }
];

// FUNCIONES HELPER

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

// Obtener proyecto por slug
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};
// Filtrar proyectos por tipo
export const getProjectsByType = (type) => {
  if (type === 'Todos') return projects;
  return projects.filter(project => project.type === type);
};
// Obtener proyectos relacionados por tipo, excluyendo el actual
export const getRelatedProjects = (currentId, limit = 3) => {
  const currentProject = getProjectById(currentId);
  if (!currentProject) return [];
  
  return projects
    .filter(p => p.type === currentProject.type && p.id !== currentId)
    .slice(0, limit);
};