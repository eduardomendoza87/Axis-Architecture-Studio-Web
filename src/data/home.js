//miembros del equipo
import JorgePhoto from '../assets/team/jorge.jpg';
import EnriquePhoto from '../assets/team/Enrique.jpg';
import MariaPhoto from '../assets/team/Maria.jpg';
//proyectos destacados
import proyecto1 from '../assets/proyecto1/Proyecto_destacado_1.webp';
import proyecto2 from '../assets/proyecto2/Proyecto_destacado_2.webp';
import proyecto3 from '../assets/proyecto3/Proyecto_destacado_3.webp';

export const teamMembers = [
  {
    name: "Jorge Pérez",
    role: "Arquitecto Senior y Director de Proyectos",
    photo: JorgePhoto,
    bio: "Jorge es un arquitecto con más de 20 años de experiencia liderando proyectos arquitectónicos de gran escala, especializado en planeación urbana y dirección de obra.",
  },
  {
    name: "Enrique Gómez",
    role: "Diseñador Arquitectónico Junior",
    photo: EnriquePhoto,
    bio: "Enrique es un diseñador arquitectónico joven y creativo, con gran interés en el modelado 3D, renders arquitectónicos y soluciones de diseño modernas.",
  },
  {
    name: "María Rodríguez",
    role: "Arquitecta Especialista en Diseño Sostenible",
    photo: MariaPhoto,
    bio: "María se especializa en arquitectura sostenible y eficiencia energética, con experiencia en el desarrollo de proyectos residenciales y comerciales de alto nivel.",
  },
];

export const featuredProjects = [
  {
    id: 1,
    title: "Residencia Moderna en las Colinas",
    categoria: "Residencial",
    location: "Colinas de San Ángel, CDMX",
    year: 2023,
    image: proyecto1,
  },
    {
    id: 2,
    title: "Oficinas Corporativas en el Centro",
    categoria: "Comercial",
    location: "Centro Histórico, CDMX",
    year: 2022,
    image: proyecto2,
    },
    {
    id: 3,
    title: "Centro Comercial Ecológico",
    categoria: "Comercial",
    location: "Santa Fe, CDMX",
    year: 2024,
    image: proyecto3,
    },
];
