import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import proyecto1 from '../../assets/proyecto1/Proyecto_destacado_1.webp';
import proyecto2 from '../../assets/proyecto2/Proyecto_destacado_2.webp';
import proyecto3 from '../../assets/proyecto3/Proyecto_destacado_3.webp';
import proyecto4 from '../../assets/proyecto4/Proyecto_destacado_4.webp';
import proyecto5 from '../../assets/proyecto5/Proyecto_destacado_5.webp';
import proyecto6 from '../../assets/proyecto6/Proyecto_destacado_6.webp';
import proyecto7 from '../../assets/proyecto7/Proyecto_destacado_7.webp';


export default function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    proyecto1,
    proyecto2,
    proyecto3,
    proyecto4,
    proyecto5,
    proyecto6,
    proyecto7,
  ];

  // Auto-scroll cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full py-12 bg-concrete-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Proyectos</h2>

        {/* Carrusel */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
          {/* Imágenes */}
          <div className="relative h-96 md:h-96">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Proyecto ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Botón anterior */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-concrete-900" />
          </button>

          {/* Botón siguiente */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6 text-concrete-900" />
          </button>

          {/* Indicadores (puntos) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-concrete-900 w-8'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}