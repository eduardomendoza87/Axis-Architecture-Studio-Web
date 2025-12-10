import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-concrete-50 border-t border-concrete-200 pt-16 pb-8 px-6 md:px-16 lg:px-28">
            <div className="max-w-[1800px] mx-auto">
                
                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    
                    {/* Columna 1: Branding */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-concrete-900 tracking-tight">AXIS.</h2>
                        <p className="text-concrete-500 text-sm leading-relaxed max-w-xs">
                            Estudio de arquitectura enfocado en la precisión, la materialidad y la experiencia humana.
                        </p>
                    </div>

                    {/* Columna 2: Sitemap (Links) */}
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-concrete-400 mb-6">Explorar</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-concrete-600 hover:text-primary transition-colors text-sm">Inicio</Link></li>
                            <li><Link to="/work" className="text-concrete-600 hover:text-primary transition-colors text-sm">Proyectos</Link></li>
                            <li><Link to="/studio" className="text-concrete-600 hover:text-primary transition-colors text-sm">Studio</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-concrete-400 mb-6">Contacto</h3>
                        <ul className="space-y-3 text-sm text-concrete-600">
                            <li>
                                <a href="mailto:hola@axis.com" className="hover:text-primary transition-colors">hola@axisarquitectura.com</a>
                            </li>
                            <li>
                                <a href="tel:+529931234567" className="hover:text-primary transition-colors">(+52) 993 123 4567</a>
                            </li>
                            <li>Villahermosa, Tabasco, MX</li>
                        </ul>
                    </div>

                    {/* Columna 4: Social */}
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-concrete-400 mb-6">Social</h3>
                        <ul className="space-y-3">
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-concrete-600 hover:text-primary transition-colors text-sm">Instagram ↗</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-concrete-600 hover:text-primary transition-colors text-sm">LinkedIn ↗</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-concrete-600 hover:text-primary transition-colors text-sm">Facebook ↗</a></li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT  */}
                <div className="border-t border-concrete-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-concrete-400 text-xs font-mono text-center md:text-left">
                        © {new Date().getFullYear()} AXIS Architecture Studio. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/legal" className="text-concrete-400 text-xs font-mono hover:text-concrete-900">Aviso Legal</Link>
                        <Link to="/privacy" className="text-concrete-400 text-xs font-mono hover:text-concrete-900">Privacidad</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;