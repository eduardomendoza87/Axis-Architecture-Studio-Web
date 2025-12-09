import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// Funciones auxiliares
import { getProjectBySlug } from '../data/projects';
import { ArrowLeft } from 'lucide-react';


const ProjectsDetails = () => {
 
    const {slug}= useParams();
    const navigate = useNavigate();

    const project = getProjectBySlug(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return(
         <div className="h-screen flex flex-col items-center justify-center bg-concrete-50">
        <h1 className="text-4xl font-bold mb-4">404 - Proyecto no encontrado</h1>
        <Link to="/proyectos" className="text-primary hover:underline">Volver al portafolio</Link>
      </div>
        );
    }

    return (
      <div className="min-h-screen bg-concrete-50">
        {/* HEADER DE NAVEGACIÓN */}
        <div className="pt-24 px-6 max-w-[1800px] mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-concrete-500 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-mono text-sm uppercase">Volver</span>
          </button>
        </div>

        {/*Imagen principal del proyecto */}
        <section className="px-6 mb-20 max-w-[1800px] mx-auto">
          <div className="w-full h-[60vh] md:h-[80vh] bg-concrete-200 overflow-hidden relative">
            <img
              src={project.photo}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        {/* Contenido del proyecto */}
        <section className="px-6 mb-24 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-concrete-200 pt-10">
            {/*Columna izquierda - Datos */}
            <div className="lg:col-span-4 space-y-8 font-mono text-sm">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-concrete-900 leading-tight">
                    {project.title}
                  </h1>
                </div>
                <div>
                  <span className="block text-concrete-400 mb-1">Cliente</span>
                  <span className="block text-concrete-900 font-bold uppercase">
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="block text-concrete-400 mb-1">Año</span>
                  <span className="block text-concrete-900 font-bold">
                    {project.year}
                  </span>
                </div>
                <div>
                  <span className="block text-concrete-400 mb-1">
                    Ubicación
                  </span>
                  <span className="block text-concrete-900 font-bold uppercase">
                    {project.location}
                  </span>
                </div>
                <div>
                  <span className="block text-concrete-400 mb-1">Área</span>
                  <span className="block text-concrete-900 font-bold">
                    {project.area}
                  </span>
                </div>
              </div>
              {/* Team Mapping */}
              <div className="pt-8 border-t border-concrete-100">
                <span className="block text-concrete-400 mb-4">Créditos</span>
                <ul className="space-y-2">
                  {project.team.map((member, i) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-bold text-concrete-900">
                        {member.name}
                      </span>
                      <span className="text-xs text-concrete-400">
                        {member.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Columna Derecha: Narrativa */}
            <div className="lg:col-span-8 lg:pl-12">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-concrete-800 whitespace-pre-line mb-12">
                {project.description}
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-3">
                {project.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border border-concrete-200 rounded-full text-sm text-concrete-600 hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galería de imágenes */}
        <section className="px-6 mb-24 max-w-[1800px] mx-auto">
          <div className="space-y-6 md:space-y-12">
            {project.gallery[1] && (
              <div className="w-full h-[60vh] md:h-[80vh]">
                <img
                  src={project.gallery[1]}
                  alt="Interior detail"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            )}
            {/* Grid de 2 columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {project.gallery.slice(2, 4).map((img, idx) => (
                <div key={idx} className="h-[50vh] md:h-[70vh]">
                  <img
                    src={img}
                    alt="Detail"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
            {/* Resto de imágenes */}
            {project.gallery.slice(4).map((img, idx) => (
              <div key={idx} className="w-full h-[60vh] md:h-[90vh]">
                <img
                  src={img}
                  alt="Full view"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
export default ProjectsDetails;