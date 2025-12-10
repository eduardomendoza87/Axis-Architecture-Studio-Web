import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import team_contact from '../assets/team/team_contact.webp';

const Contact = () => {
  const form = useRef(); // Referencia al formulario para EmailJS
  const [projectType, setProjectType] = useState('Residencial');
  
  // Estados para feedback visual (UX)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setStatus('success');
          form.current.reset();
          setProjectType('Residencial');
      }, (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          setStatus('error');
      });
  };

  return (
    <>
      <section className='min-h-screen py-24 px-6 bg-concrete-50 flex items-center'>
        <div className='max-w-7xl mx-auto w-full'>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>
            
            {/* COLUMNA 1: MANIFIESTO & DATOS */}
            <div className='flex flex-col h-full'>
              <div className="mb-10">
                 <h1 className='text-4xl md:text-6xl font-bold text-concrete-900 mb-2'>Contacto</h1>
                 <div className="h-1 w-20 bg-primary"></div>
              </div>

              <div className="relative w-full aspect-4/3 mb-10 overflow-hidden">
                <img
                    src={team_contact}
                    alt='Equipo de Axis en obra'
                    className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700'
                />
              </div>

              <div className="mb-12">
                <h2 className='font-mono text-sm uppercase tracking-widest text-primary mb-4'>// Manifiesto</h2>
                <p className='text-lg text-concrete-600 leading-relaxed font-light'>
                  En Axis, la arquitectura es más que construir estructuras; es esculpir el vacío. 
                  Fusionamos estética brutalista y funcionalidad.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-sm border-t border-concrete-200 pt-8 mt-auto'>
                <div>
                  <p className='text-concrete-400 mb-1 uppercase text-xs'>Ubicación</p>
                  <p className='text-concrete-900 font-bold'>Villahermosa, Tabasco</p>
                </div>
                <div>
                  <p className='text-concrete-400 mb-1 uppercase text-xs'>Contacto</p>
                  <p className='text-concrete-900 font-bold'>(+52) 993 123 4567</p>
                  <p className='text-concrete-900'>hola@axisarquitectura.com</p>
                </div>
              </div>
            </div>

            {/* COLUMNA 2: FORMULARIO */}
            <div className='lg:pt-20'>
              <div className='bg-transparent'>
                <h3 className='text-2xl font-bold mb-8'>Iniciar Proyecto</h3>
                
                <form ref={form} onSubmit={sendEmail} className='space-y-10'>
                  
                  {/* TRUCO: Input oculto para enviar el estado de React (projectType) */}
                  <input type="hidden" name="project_type" value={projectType} />

                  <div className="group">
                    <label htmlFor='user_name' className='block font-mono text-xs uppercase tracking-widest text-concrete-500 mb-2 group-focus-within:text-primary transition-colors'>
                      Nombre / Empresa
                    </label>
                    <input 
                      type='text' 
                      name='user_name' 
                      required
                      className='w-full bg-transparent border-b border-concrete-300 py-3 text-concrete-900 focus:border-primary focus:outline-none transition-colors text-lg' 
                      placeholder='Ej. Juan Pérez' 
                    />
                  </div>

                  <div className="group">
                    <label htmlFor='user_email' className='block font-mono text-xs uppercase tracking-widest text-concrete-500 mb-2 group-focus-within:text-primary transition-colors'>
                      Email de contacto
                    </label>
                    <input 
                      type='email' 
                      name='user_email' 
                      required
                      className='w-full bg-transparent border-b border-concrete-300 py-3 text-concrete-900 focus:border-primary focus:outline-none transition-colors text-lg' 
                      placeholder='nombre@empresa.com' 
                    />
                  </div>

                  <div>
                    <label className='block font-mono text-xs uppercase tracking-widest text-concrete-500 mb-4'>
                      Tipo de Proyecto
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Residencial', 'Comercial', 'Interiorismo', 'Otro'].map((type) => (
                        <button
                          key={type}
                          type="button" 
                          onClick={() => setProjectType(type)}
                          className={`
                            px-4 py-2 border text-sm font-mono transition-all duration-300
                            ${projectType === type 
                              ? 'border-primary bg-primary text-white' 
                              : 'border-concrete-300 text-concrete-500 hover:border-concrete-900 hover:text-concrete-900'}
                          `}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor='message' className='block font-mono text-xs uppercase tracking-widest text-concrete-500 mb-2 group-focus-within:text-primary transition-colors'>
                      Detalles del proyecto
                    </label>
                    <textarea 
                      name='message' 
                      required
                      rows='4' 
                      className='w-full bg-transparent border-b border-concrete-300 py-3 text-concrete-900 focus:border-primary focus:outline-none transition-colors text-lg resize-none' 
                      placeholder='Cuéntanos sobre tus necesidades...'
                    ></textarea>
                  </div>

                  {/* Feedback Messages */}
                  {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-mono">
                      ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-mono">
                      Hubo un error al enviar. Por favor intenta nuevamente.
                    </div>
                  )}

                  <div className='pt-6'>
                    <button 
                      type='submit' 
                      disabled={isSubmitting} 
                      className={`
                        w-full md:w-auto
                        bg-concrete-900 text-white font-mono uppercase tracking-widest text-xs
                        px-12 py-5
                        transition-all duration-300
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'}
                      `}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud →'}
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;