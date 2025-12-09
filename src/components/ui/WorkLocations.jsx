import { useState, useEffect } from 'react';

export default function WorkLocations() {
  const [offset, setOffset] = useState(0);

  const locations = [
    'Ciudad de méxico',
    'Cancún, Quintana Roo',
    'Tulum, Quintana Roo',
    'Barrancas del Cobre, Chihuahua',
    'Nueva York, Estados Unidos',
    'Tokio, Japón',
    'París, Francia',
    'Londres, Reino Unido',
    'Sídney, Australia',
  ];

  // Duplicar array para efecto infinito
  const duplicatedLocations = [...locations, ...locations];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Reiniciar cuando llegue al final
  useEffect(() => {
    if (offset >= locations.length * 180) {
      setOffset(0);
    }
  }, [offset, locations.length]);

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-full">
        <h2 className="text-4xl font-bold text-center mb-12 px-6">
          Donde hemos trabajado
        </h2>

        {/* Contenedor del carrusel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-12 transition-transform ease-linear"
            style={{
              transform: `translateX(-${offset}px)`,
              transitionDuration: '0ms',
            }}
          >
            {duplicatedLocations.map((location, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-concrete-900 font-medium text-sm whitespace-nowrap"
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}