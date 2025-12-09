import React from 'react';
import { Link } from 'react-router-dom';

// Images
import heroImage from '../assets/home/Hero_Imagen_Axis.jpg';
import filosofiaImage1 from '../assets/home/Home_image.jpg';
import filosofiaImage2 from '../assets/home/Home_image_1.jpg';
import filosofiaImage3 from '../assets/home/Home_image_2.jpg';
import filosofiaImage4 from '../assets/home/Home_image_3.jpg';
import filosofiaImage5 from '../assets/home/Home_image_4.jpg';

// Data
import { teamMembers } from '../data/home';

// Components
import InfiniteCarousel from '../components/ui/InfiniteCarousel';
import WorkLocations from '../components/ui/WorkLocations';
import CardFeaturedProjects from '../components/ui/CardfeaturedProjects';

const Home = () => {
  //  Datos de filosofía 
  const philosophyData = [
    {
      title: "Innovación",
      description: "Aplicamos las últimas tendencias en diseño para crear espacios únicos y funcionales.",
      images: [filosofiaImage1, filosofiaImage2], 
      layout: "left" 
    },
    {
      title: "Colaboración",
      description: "Trabajamos de cerca con nuestros clientes para entender sus necesidades y visión.",
      images: [filosofiaImage3],
      layout: "right" 
    },
    {
      title: "Precisión",
      description: "Cada detalle cuenta. Nos enfocamos en la calidad y perfección en cada proyecto.",
      images: [filosofiaImage4, filosofiaImage5],
      layout: "left"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen">
        {/* Imagen  */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Axis Architecture Hero" 
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro para legibilidad del texto */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <p className="text-lg font-mono text-concrete-50 tracking-widest mb-4 uppercase">
            Diseño de espacios únicos
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl tracking-tight leading-tight">
            Creamos ambientes que <span className="text-primary-light">inspiran</span> y perduran.
          </h1>
          <p className="text-xl text-concrete-100 max-w-2xl font-light">
            Transformamos tus ideas en realidad a través del diseño de interiores y arquitectura.
          </p>
        </div>
      </section>

      {/* FILOSOFÍA  */}
      <section className="py-20 px-6 bg-concrete-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-concrete-900 mb-4">Nuestra Filosofía</h2>
             <div className="w-24 h-1 bg-primary mx-auto"></div> 
          </div>

          <div className="space-y-32">
            {philosophyData.map((item, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${item.layout === 'right' ? 'md:grid-flow-dense' : ''}`}>
                
                {/* Columna de Imágenes  */}
                <div className={`relative h-[500px] ${item.layout === 'right' ? 'md:col-start-2' : ''}`}>
                  {item.images.length > 1 ? (
                    <>
                      <img
                        src={item.images[0]}
                        alt={`${item.title} 1`}
                        className="absolute top-0 left-0 w-3/4 h-3/4 object-cover shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <img
                        src={item.images[1]}
                        alt={`${item.title} 2`}
                        className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </>
                  ) : (
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </div>

                {/* Columna de Texto */}
                <div className="flex flex-col justify-center">
                  <span className="text-primary font-mono text-sm mb-2">0{index + 1}.</span>
                  <h3 className="text-4xl font-bold text-concrete-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-xl text-concrete-500 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARRUSEL DE FOTOS */}
      <div className="border-y border-concrete-200">
        <InfiniteCarousel /> 
      </div>

      {/* EL EQUIPO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-left border-l-4 border-primary pl-6">El Equipo</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Foto Rectangular y B&N */}
                <div className="overflow-hidden mb-4 relative aspect-3/4 rounded-lg shadow-lg">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                {/* Info Técnica */}
                <h3 className="text-xl font-bold text-concrete-900">{member.name}</h3>
                <p className="text-primary font-mono text-sm uppercase tracking-wide mb-2">
                  {member.role}
                </p>
                <p className="text-concrete-500 text-sm line-clamp-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIONES*/}
      <WorkLocations />

      {/* PROYECTOS DESTACADOS */}
      <section className="py-20 bg-concrete-50">
      
        <CardFeaturedProjects />
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-concrete-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-xl text-concrete-400 mb-10 font-light">
            Contáctanos hoy y comencemos a crear el espacio de tus sueños.
          </p>

          <Link
            to="/contacto"
            className="
              inline-block
              bg-primary hover:bg-primary-light
              text-white font-mono uppercase tracking-widest
              px-10 py-4
              border border-transparent hover:border-white
              transition-all duration-300
            "
          >
            Iniciar Proyecto
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;