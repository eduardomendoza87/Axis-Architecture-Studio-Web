import React from 'react';
import { Link } from 'react-router-dom';

//images
import heroImage from '../assets/home/Hero_Imagen_Axis.jpg';
//Filosofía images  
import filosofiaImage1 from '../assets/home/Home_image.jpg';
import filosofiaImage2 from '../assets/home/Home_image_1.jpg';
import filosofiaImage3 from '../assets/home/Home_image_2.jpg';
import filosofiaImage4 from '../assets/home/Home_image_3.jpg';
import filosofiaImage5 from '../assets/home/Home_image_4.jpg';

//data
import { teamMembers } from '../data/home';

//Components
import InfiniteCarousel from '../components/ui/InfiniteCarousel';
import WorkLocations from '../components/ui/WorkLocations';
import CardFeaturedProjects from '../components/ui/CardfeaturedProjects';

const Home = () => {
  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <p className="text-lg text-concrete-900 mb-4">
            Diseño de espacios únicos
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-concrete-900 mb-6 max-w-3xl">
            Creamos ambientes que inspiran y perduran
          </h1>
          <p className="text-xl text-concrete-900 max-w-2xl">
            Transformamos tus ideas en realidad a través del diseño de
            interiores y arquitectura
          </p>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Nuestra Filosofía
          </h2>

          {/* PRIMER BLOQUE - Imágenes izquierda, Texto derecha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Imágenes */}
            <div className="relative h-96">
              <img
                src={filosofiaImage1}
                alt="Filosofía Imagen 1"
                className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg"
              />
              <img
                src={filosofiaImage2}
                alt="Filosofía Imagen 2"
                className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Texto */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-5xl font-bold text-concrete-900 mb-4">
                Innovación
              </h3>
              <p className="text-lg text-concrete-500 leading-relaxed">
                Aplicamos las últimas tendencias en diseño para crear espacios
                únicos y funcionales
              </p>
            </div>
          </div>

          {/* SEGUNDO BLOQUE - Texto izquierda, Imagen derecha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-5xl font-bold text-concrete-900 mb-4">
                Colaboración
              </h3>
              <p className="text-lg text-concrete-500 leading-relaxed">
                Trabajamos de cerca con nuestros clientes para entender sus
                necesidades y visión
              </p>
            </div>
            {/* Imagen */}
            <div className="relative h-96">
              <img
                src={filosofiaImage3}
                alt="Filosofía Imagen 3"
                className="absolute top-0 right-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* TERCER BLOQUE - Imágenes izquierda, Texto derecha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Imágenes */}
            <div className="relative h-96">
              <img
                src={filosofiaImage4}
                alt="Filosofía Imagen 1"
                className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg"
              />
              <img
                src={filosofiaImage5}
                alt="Filosofía Imagen 2"
                className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Texto */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-5xl font-bold text-concrete-900 mb-4">
                Precisión
              </h3>
              <p className="text-lg text-concrete-500 leading-relaxed">
                Cada detalle cuenta. Nos enfocamos en la calidad y perfección en
                cada proyecto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Carrusel de Proyectos */}
      <InfiniteCarousel />

      {/* Sección del Equipo */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">El equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-concrete-100 rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-concrete-900 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-concrete-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicaciones de Trabajo */}
      <WorkLocations />

      {/*Propyectos Destacados */}
      <CardFeaturedProjects />

      {/* Sección CTA FINAL */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-center mb-4 gap-4 ">
            <div className="bg-primary-light rounded-lg shadow-2xl ">
              <div className="px-8 py-6 text-center">
                <h2 className="text-2xl font-semibold mb-6 text-concrete-200">
                  ¿Listo para transformar tu espacio?
                </h2>
                <p className="text-lg font-normal mb-8 text-concrete-100  ">
                  Contáctanos hoy y comencemos a crear el espacio de tus sueños
                </p>

                <Link
                  to="contacto"
                  className="
    group
    bg-concrete-100 rounded-2xl px-6 py-3 font-sans text-primary-light
    shadow-lg shadow-primary/50
    hover:bg-primary-hover 
    hover:scale-105 transition-all duration-300
    inline-block
  "
                >
                  Envianos un mensaje
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;