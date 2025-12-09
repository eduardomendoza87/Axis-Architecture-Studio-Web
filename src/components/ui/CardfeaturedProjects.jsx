import React from "react";
import { Link } from "react-router-dom";

import { featuredProjects } from "../../data/home";



export default function CardFeaturedProjects() {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <h2 className="text-4xl font-bold mb-16 text-center text-concrete-900 font-sans">
          Proyectos destacados
        </h2>

        {/* Contenedor de proyectos alternados */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => {
            // Alternar: par = imagen derecha, impar = imagen izquierda
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
                  <h3 className="text-2xl font-bold font-sans text-concrete-900">
                    {project.title}
                  </h3>

                  {/* Badge de categoría */}
                  <span className="inline-block px-4 py-2 bg-concrete-200 text-concrete-500 text-sm font-mono rounded">
                    {project.categoria}
                  </span>

                  {/* Ubicación */}
                  <p className="text-concrete-600 text-lg">
                    {project.location}
                  </p>

                  {/* Año */}
                  <p className="text-concrete-500 font-medium">
                    {project.year}
                  </p>

                  {/* Botón */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Ver proyecto
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* IMAGEN */}
                <div
                  className={`${
                    isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    {/* Fondo azul decorativo */}
                    <div className="absolute inset-0 bg-primary-light rounded-3xl transform translate-x-4 translate-y-4 -z-10" />

                    {/* Imagen */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mb-4 gap-4 mt-12 ">
          <Link
            to="/proyectos"
            className="
    bg-primary-light rounded-2xl px-4 py-3 font-sans text-concrete-100
    shadow-lg shadow-primary/50
    hover:bg-primary-hover 
    hover:scale-105 transition-all duration-300
    "
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}