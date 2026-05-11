import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Estado para controlar si el menú de celular está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Lista de enlaces para no repetir código
  const enlaces = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Niveles', path: '/niveles' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Noticias', path: '/noticias' }
  ];

  return (
    // Agregamos 'relative' para que el menú móvil se posicione bien debajo
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans relative">
      
      {/* ========================================= */}
      {/* BARRA SUPERIOR (Mantiene su diseño) */}
      {/* ========================================= */}
      <div className="bg-[#002855] text-white py-2 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="flex gap-2 mb-2 md:mb-0">
          <a href="#" className="w-6 h-6 bg-white text-[#002855] rounded-full flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all shadow-sm">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 bg-white text-[#002855] rounded-full flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all shadow-sm">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.011-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-8 font-medium tracking-wide">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#E31E24]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>(01) 123 4567</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#E31E24]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span className="hidden sm:inline">info@sansebastian.edu.pe</span>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* NAVBAR PRINCIPAL (Escritorio y Celular) */}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-[#002855] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:bg-[#E31E24] transition-all duration-300">
            SS
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#002855] font-black text-xl leading-none tracking-tighter">COLEGIO</h1>
            <h2 className="text-[#002855] font-light text-2xl tracking-[ -0.05em] leading-tight">SAN SEBASTIÁN</h2>
          </div>
        </Link>

        {/* ========================================= */}
        {/* BOTÓN HAMBURGUESA (Solo visible en celular) */}
        {/* ========================================= */}
        <button 
          className="lg:hidden text-[#002855] focus:outline-none"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? (
            // Icono de X (Cerrar)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            // Icono de Hamburguesa (Abrir)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* ========================================= */}
        {/* MENÚ VERSIÓN ESCRITORIO (Oculto en celular) */}
        {/* ========================================= */}
        <div className="hidden lg:flex items-center gap-8">
          {enlaces.map((link) => (
            <Link key={link.name} to={link.path} className="text-[#002855] font-bold hover:text-[#E31E24] transition-colors relative group py-2">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E31E24] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link to="/contacto">
            <button className="bg-[#E31E24] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#002855] transition-all shadow-md flex items-center gap-2">
              <span>📞</span> Contáctanos
            </button>
          </Link>
        </div>
      </div>

      {/* ========================================= */}
      {/* MENÚ DESPLEGABLE CELULAR */}
      {/* ========================================= */}
      {menuAbierto && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 flex flex-col px-6 py-4 animate-fadeIn">
          {enlaces.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              // IMPORTANTE: Al hacer clic en un enlace, cerramos el menú
              onClick={() => setMenuAbierto(false)}
              className="text-[#002855] font-bold text-lg py-3 border-b border-gray-100 hover:text-[#E31E24]"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" onClick={() => setMenuAbierto(false)} className="mt-6 mb-4">
            <button className="w-full bg-[#E31E24] text-white py-3 rounded-xl font-bold shadow-md">
              Contáctanos
            </button>
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;