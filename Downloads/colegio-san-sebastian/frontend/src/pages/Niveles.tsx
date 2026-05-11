import React from 'react';
import { Link } from 'react-router-dom';

const Niveles = () => {
  const nivelesInfo = [
    {
      id: 'inicial',
      nombre: 'Nivel Inicial',
      edades: '3 a 5 años',
      descripcion: 'Estimulamos la curiosidad natural y el descubrimiento a través del juego. Sentamos las bases emocionales, sociales y cognitivas del aprendizaje con mucho amor, paciencia y un entorno seguro.',
      imagen: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
      color: 'bg-[#E31E24]',
      icono: '🎨',
      horario: 'Lunes a Viernes: 8:00 AM - 1:00 PM',
      talleres: ['Psicomotricidad', 'Mini Chef', 'Música y Arte']
    },
    {
      id: 'primaria',
      nombre: 'Nivel Primaria',
      edades: '6 a 11 años',
      descripcion: 'Desarrollamos el pensamiento crítico, la lectura comprensiva y el razonamiento lógico-matemático. Fomentamos el trabajo en equipo y la práctica constante de nuestros valores institucionales.',
      imagen: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
      color: 'bg-[#002855]',
      icono: '📚',
      horario: 'Lunes a Viernes: 7:45 AM - 2:00 PM',
      talleres: ['Robótica Básica', 'Danzas Típicas', 'Inglés Lúdico']
    },
    {
      id: 'secundaria',
      nombre: 'Nivel Secundaria',
      edades: '12 a 16 años',
      descripcion: 'Preparación académica de alto nivel enfocada en el ingreso universitario. Consolidamos el liderazgo, la vocación profesional y la responsabilidad social para enfrentar los retos del futuro.',
      imagen: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800',
      color: 'bg-[#001a36]',
      icono: '🎓',
      horario: 'Lunes a Viernes: 7:30 AM - 3:00 PM',
      talleres: ['Programación', 'Oratoria y Debate', 'Selección de Deportes']
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* ============================================================ */}
      {/* CABECERA ESTANDARIZADA */}
      {/* ============================================================ */}
      <section 
        className="relative h-[350px] flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#002855]/85"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Niveles Educativos</h1>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Acompañamos a tus hijos en cada etapa de su desarrollo con excelencia y dedicación.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LISTA DE NIVELES (DISEÑO EN ZIG-ZAG) */}
      {/* ============================================================ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-20">
          {nivelesInfo.map((nivel, index) => (
            <div 
              key={nivel.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
            >
              
              {/* Bloque de Imagen */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl z-10">
                  <img 
                    src={nivel.imagen} 
                    alt={nivel.nombre} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Etiqueta flotante de edades */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm text-[#002855] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {nivel.edades}
                  </div>
                </div>
                {/* Cuadro decorativo de fondo */}
                <div className={`absolute -inset-4 ${nivel.color} rounded-[2rem] opacity-20 -z-0 transform transition-transform group-hover:rotate-2`}></div>
              </div>

              {/* Bloque de Texto */}
              <div className="w-full lg:w-1/2">
                <div className={`w-16 h-16 ${nivel.color} text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md`}>
                  {nivel.icono}
                </div>
                <h2 className="text-4xl font-black text-[#002855] mb-4 tracking-tight">
                  {nivel.nombre}
                </h2>
                <div className="w-16 h-1.5 bg-[#E31E24] mb-6 rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-6 text-justify">
                  {nivel.descripcion}
                </p>
                
                {/* Lista de características generales */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-[#002855] font-bold text-sm md:text-base">
                    <span className="text-[#E31E24]">✓</span> Metodología activa e innovadora
                  </li>
                  <li className="flex items-center gap-3 text-[#002855] font-bold text-sm md:text-base">
                    <span className="text-[#E31E24]">✓</span> Acompañamiento psicopedagógico
                  </li>
                  <li className="flex items-center gap-3 text-[#002855] font-bold text-sm md:text-base">
                    <span className="text-[#E31E24]">✓</span> Inglés intensivo
                  </li>
                </ul>

                {/* NUEVO: Panel de Horarios y Talleres */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-8 shadow-sm">
                  <div className="mb-4">
                    <p className="text-[#002855] font-black text-sm uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span className="text-[#E31E24] text-lg">🕒</span> Horario de Clases
                    </p>
                    <p className="text-gray-600 text-sm ml-7">{nivel.horario}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#002855] font-black text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="text-[#E31E24] text-lg">⭐</span> Talleres Destacados
                    </p>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {nivel.talleres.map(taller => (
                        <span key={taller} className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full shadow-sm hover:border-[#E31E24] hover:text-[#E31E24] transition-colors cursor-default">
                          {taller}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/contacto">
                  <button className="bg-[#E31E24] hover:bg-[#002855] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg hover:shadow-xl">
                    Solicitar Información
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Niveles;