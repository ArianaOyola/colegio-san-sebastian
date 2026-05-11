import React from 'react';
import { Link } from 'react-router-dom';

const Levels = () => {
  return (
    <section className="py-20 px-10 md:px-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de la sección: Título a la izquierda, Botón a la derecha */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-4xl font-black text-[#002855] tracking-tight leading-tight">
            Nuestros niveles educativos
          </h2>
          
          {/* Botón conectado a la ruta de niveles */}
          <Link to="/niveles">
            <button className="bg-[#E31E24] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b3181d] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2 shrink-0">
              Ver todos los niveles <span>→</span>
            </button>
          </Link>
        </div>

        {/* Cuadrícula de Tarjetas con DIFUMINADO DE TRANSICIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* TARJETA 1: INICIAL (Fondo Rojo) */}
          <div className="flex rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-56 cursor-pointer group z-0 relative">
            {/* Lado izquierdo: Color y Texto (Rojo) */}
            <div className="w-1/2 bg-[#E31E24] p-6 flex flex-col justify-center text-white relative z-0">
              <div className="text-4xl mb-3 relative z-10 transform group-hover:scale-110 transition-transform">🧸</div>
              <h3 className="font-bold text-2xl mb-2 relative z-10">Inicial</h3>
              <p className="text-xs font-light text-red-100 leading-snug relative z-10">
                Aprendizaje divertido y creativo.
              </p>
            </div>
            {/* Lado derecho: Imagen + DIFUMINADO */}
            <div className="w-1/2 relative overflow-hidden z-0">
              <img 
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800" 
                alt="Nivel Inicial" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 z-0"
              />
              {/* LA SOLUCIÓN: Capa de difuminado que va de Rojo a Transparente */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#E31E24] to-transparent z-10"></div>
            </div>
          </div>

          {/* TARJETA 2: PRIMARIA (Fondo Azul - Centro) */}
          <div className="flex rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-56 cursor-pointer group z-0 relative">
            <div className="w-1/2 bg-[#002855] p-6 flex flex-col justify-center text-white relative z-0">
              <div className="text-4xl mb-3 relative z-10 transform group-hover:scale-110 transition-transform">📖</div>
              <h3 className="font-bold text-2xl mb-2 relative z-10">Primaria</h3>
              <p className="text-xs font-light text-blue-200 leading-snug relative z-10">
                Formación sólida en conocimientos y valores.
              </p>
            </div>
            {/* Lado derecho: Imagen + DIFUMINADO */}
            <div className="w-1/2 relative overflow-hidden z-0">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800" 
                alt="Nivel Primaria" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 z-0"
              />
              {/* Capa de difuminado que va de Azul a Transparente */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#002855] to-transparent z-10"></div>
            </div>
          </div>

          {/* TARJETA 3: SECUNDARIA (Fondo Rojo) */}
          <div className="flex rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-56 cursor-pointer group z-0 relative">
            {/* Lado izquierdo: Color y Texto (Rojo) */}
            <div className="w-1/2 bg-[#E31E24] p-6 flex flex-col justify-center text-white relative z-0">
              <div className="text-4xl mb-3 relative z-10 transform group-hover:scale-110 transition-transform">🎓</div>
              <h3 className="font-bold text-2xl mb-2 relative z-10">Secundaria</h3>
              <p className="text-xs font-light text-red-100 leading-snug relative z-10">
                Preparación para los retos del futuro.
              </p>
            </div>
            {/* Lado derecho: Imagen + DIFUMINADO */}
            <div className="w-1/2 relative overflow-hidden z-0">
              <img 
                src="https://www.campuseducacion.com/blog/wp-content/uploads/2019/09/foto03.jpg" 
                alt="Nivel Secundaria" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 z-0"
              />
              {/* Capa de difuminado que va de Rojo a Transparente */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#E31E24] to-transparent z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Levels;