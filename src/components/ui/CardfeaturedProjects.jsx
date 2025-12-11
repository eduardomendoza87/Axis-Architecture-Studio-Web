import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function CardFeaturedProjects() {
  
  const featuredIds = [1, 2, 7];
  const featured = projects.filter(p => featuredIds.includes(p.id));

  return (
    <section className="py-16 px-6 bg-concrete-50">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <h2 className="text-4xl font-bold mb-16 text-center text-concrete-900 font-sans tracking-tight">
          Proyectos Seleccionados
        </h2>

        {/* Contenedor */}
        <div className="space-y-24">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
                  ${isEven ? "" : "lg:grid-flow-dense"}
                `}
              >
                {/* TEXTO */}
                <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
                  <h3 className="text-3xl font-bold font-sans text-concrete-900 leading-tight">
                    {project.title}
                  </h3>

                  {/* Badge de categoría */}
                  <span className="inline-block px-3 py-1 border border-concrete-300 text-concrete-600 text-xs font-mono uppercase tracking-widest rounded-full">
                    {project.type}{" "}
                  </span>

                  {/* Ubicación */}
                  <p className="text-concrete-500 font-mono text-sm uppercase tracking-wide">
                    {project.location} — {project.year}
                  </p>

                  {/* Descripción corta */}
                  <p className="text-concrete-600 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Botón */}
                  <div className="pt-4">
                    <Link
                      to={`/proyectos/${project.slug}`}
                      className="group inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
                    >
                      Explorar Proyecto
                      <span className="text-xl group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* IMAGEN */}
                <div
                  className={`${
                    isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                  }`}
                >
                  <Link
                    to={`/proyectos/${project.slug}`}
                    className="block relative rounded-sm overflow-hidden group cursor-pointer aspect-4/3"
                  >
                    {/* Imagen con efecto Zoom */}
                    <img
                      src={project.photo}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay sutil al hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center mt-20">
          <Link
            to="/proyectos"
            className="
              px-8 py-4 bg-concrete-900 text-white font-mono uppercase text-xs tracking-widest
              hover:bg-primary transition-colors duration-300
            "
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}