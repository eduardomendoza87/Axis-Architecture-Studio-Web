import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Filtros disponibles
  const filters = ['Todos', 'Residencial', 'Interior', 'Conceptual', 'Comercial'];

  // Filtrar proyectos según el filtro activo
  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // Helper: Obtener clases según el layout
  const getLayoutClasses = (layout) => {
    switch (layout) {
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2';
      case 'large':
        return 'col-span-2 row-span-2';
      default:
        return '';
    }
  };

  // Helper: Obtener color según el tipo
  const getTypeColor = (type) => {
    const colors = {
      Residencial: "bg-blue-100 text-blue-800 border-blue-200",
      Interior: "bg-purple-100 text-purple-800 border-purple-200",
      Conceptual: "bg-amber-100 text-amber-800 border-amber-200",
      Comercial: "bg-green-100 text-green-800 border-green-200",
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <>
      {/*  HEADER  */}
      <section className="py-16 px-6 bg-concrete-50">
        <div className="max-w-7xl mx-auto">
          {/* Título con contador */}
          <div className="flex items-baseline gap-3 mb-4">
            <h1 className="text-5xl font-bold text-concrete-900">
              Proyectos
            </h1>
            <span className="text-2xl text-concrete-500 font-medium">
              ({filteredProjects.length})
            </span>
          </div>
          
          {/* Descripción */}
          <p className="text-concrete-600 text-lg">
            Explora nuestra colección de proyectos arquitectónicos únicos
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="py-8 px-6 bg-white border-b border-concrete-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-6 py-2.5 rounded-full font-semibold text-sm
                  transition-all duration-300
                  ${activeFilter === filter
                    ? 'bg-concrete-900 text-white shadow-lg'
                    : 'bg-concrete-100 text-concrete-700 hover:bg-concrete-200 hover:scale-105'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/*  GRID DE PROYECTOS  */}
      <section className="py-16 px-6 bg-concrete-50">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            // Estado vacío
            <div className="text-center py-20">
              <p className="text-concrete-500 text-lg">
                No hay proyectos en esta categoría
              </p>
            </div>
          ) : (
            // Grid de proyectos
            <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`
                    group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl 
                    transition-all duration-300 cursor-pointer
                    ${getLayoutClasses(project.layout)}
                  `}
                >
                  {/* Imagen de fondo */}
                  <img
                    src={project.photo}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay oscuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Contenido */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Badge de tipo */}
                    <div className="flex justify-start">
                      <span className={`
                        px-3 py-1.5 rounded-full text-xs font-semibold border
                        ${getTypeColor(project.type)}
                        backdrop-blur-sm
                      `}>
                        {project.type}
                      </span>
                    </div>

                    {/* Título y ubicación */}
                    <div className="text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                      <h3 className="text-2xl font-bold mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </p>

                      {/* Botón "Ver más" */}
                      <Link 
                        to={`/proyectos/${project.slug}`} 
                        className="
                          inline-block mt-4 px-4 py-2 bg-concrete-100 text-concrete-900 rounded-lg font-medium text-sm
                          opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0
                          transition-all duration-300
                          hover:bg-gray-100
                        "
                      >
                        Ver detalles →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;