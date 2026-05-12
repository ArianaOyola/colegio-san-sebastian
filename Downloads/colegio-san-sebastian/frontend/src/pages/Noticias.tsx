import { useState } from 'react';

// Definimos la estructura de la noticia para TypeScript/React
interface Noticia {
  id: number;
  fecha: string;
  categoria: string;
  titulo: string;
  extracto: string;
  contenidoCompleto: string;
  imagen: string;
}

const Noticias = () => {
  // Estado para controlar qué noticia está abierta en el Modal
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<Noticia | null>(null);

  // Datos extendidos con "contenidoCompleto"
  const noticiasData: Noticia[] = [
    {
      id: 1,
      fecha: '15 May, 2026',
      categoria: 'Académico',
      titulo: 'Iniciamos el programa de Robótica Educativa',
      extracto: 'Nuestros alumnos de primaria han comenzado a utilizar los nuevos kits de robótica para desarrollar habilidades STEM desde temprana edad.',
      contenidoCompleto: 'Con mucha emoción anunciamos el inicio oficial de nuestro nuevo programa de Robótica Educativa. Gracias a la adquisición de kits de última generación, nuestros estudiantes de nivel primaria ahora tienen acceso a herramientas prácticas para aprender programación básica, lógica matemática y resolución de problemas.\n\nEste esfuerzo forma parte de nuestra visión de integrar la metodología STEM (Ciencia, Tecnología, Ingeniería y Matemáticas) en nuestro currículo diario, preparando a los líderes del mañana para los retos tecnológicos del futuro.',
      imagen: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=800'
    },
    {
      id: 2,
      fecha: '10 May, 2026',
      categoria: 'Comunicados',
      titulo: 'Reunión de Padres de Familia - Bimestre I',
      extracto: 'Se convoca a todos los padres de familia a la primera entrega de libretas del año escolar. La asistencia es obligatoria y se realizará por niveles.',
      contenidoCompleto: 'Estimados Padres de Familia: Por medio del presente comunicado los convocamos a la primera reunión oficial del año escolar para la entrega de libretas correspondientes al Bimestre I.\n\nLa reunión se llevará a cabo en las instalaciones del colegio bajo el siguiente cronograma:\n- Nivel Inicial: Martes 12, 4:00 PM\n- Nivel Primaria: Miércoles 13, 4:00 PM\n- Nivel Secundaria: Jueves 14, 5:00 PM\n\nSu asistencia es de carácter obligatorio ya que se tocarán temas importantes sobre el rendimiento académico y conductual de los estudiantes.',
      imagen: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800'
    },
    {
      id: 3,
      fecha: '05 May, 2026',
      categoria: 'Deportes',
      titulo: '¡Campeones en las Olimpiadas Interescolares!',
      extracto: 'Nuestra selección de baloncesto se coronó campeona en el torneo regional demostrando perseverancia, trabajo en equipo y nuestros valores institucionales.',
      contenidoCompleto: '¡Un orgullo para nuestra institución! El pasado fin de semana, nuestra selección de baloncesto categoría Sub-16 logró levantar la copa de campeones en las Olimpiadas Interescolares Regionales.\n\nEl partido final fue sumamente reñido, pero nuestros chicos demostraron que la disciplina, el trabajo en equipo y el respeto al rival son la verdadera clave del éxito. Felicitamos a nuestro entrenador y a todos los alumnos participantes por dejar el nombre del Colegio San Sebastián en lo más alto.',
      imagen: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800'
    },
    {
      id: 4,
      fecha: '28 Abr, 2026',
      categoria: 'Eventos',
      titulo: 'Celebración del Día del Idioma',
      extracto: 'Con declamaciones, obras de teatro y exposiciones, nuestros estudiantes celebraron la riqueza de nuestro idioma español en un evento inolvidable.',
      contenidoCompleto: 'En conmemoración a la riqueza de nuestro idioma y recordando a grandes autores de la literatura, se llevó a cabo el Festival del Día del Idioma. \n\nLos patios del colegio se llenaron de arte con declamaciones poéticas, pequeñas obras teatrales organizadas por el nivel secundario y una hermosa exposición de cuentos creados por los más pequeños de primaria. Agradecemos al área de Comunicaciones por la excelente organización.',
      imagen: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800'
    },
    {
      id: 5,
      fecha: '20 Abr, 2026',
      categoria: 'Académico',
      titulo: 'Simulacro de Admisión Universitaria',
      extracto: 'Los alumnos de 4to y 5to de secundaria rindieron su primer simulacro tipo examen de admisión para evaluar sus competencias.',
      contenidoCompleto: 'Comprometidos con el futuro profesional de nuestros estudiantes, el pasado viernes se realizó el primer gran Simulacro de Admisión tipo universitario para los grados de 4to y 5to de secundaria.\n\nEsta prueba tiene como objetivo familiarizar a los alumnos con la presión, el tiempo y la estructura de los exámenes reales de las principales universidades del país. Los resultados serán entregados de forma personal junto a una asesoría vocacional.',
      imagen: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800'
    },
    {
      id: 6,
      fecha: '15 Abr, 2026',
      categoria: 'Comunidad',
      titulo: 'Campaña de Reciclaje "Cuidando nuestro planeta"',
      extracto: 'Invitamos a toda la comunidad educativa a participar en nuestra gran campaña de recolección de plástico y papel este fin de semana.',
      contenidoCompleto: 'Como parte de nuestro compromiso con el medio ambiente, iniciamos la campaña "Cuidando nuestro planeta". \n\nInvitamos a todas las familias a enviar botellas de plástico limpias, tapitas y papel en desuso. Todo lo recaudado será donado a fundaciones que se encargan de su procesamiento responsable. Tendremos contenedores especiales en el ingreso principal durante toda la semana.',
      imagen: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800'
    }
  ];

  // Función para cerrar el modal
  const cerrarModal = () => {
    setNoticiaSeleccionada(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans relative">
      
      {/* CABECERA ESTANDARIZADA */}
      <section 
        className="relative h-[350px] flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#002855]/85"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Noticias y Comunicados</h1>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Mantente al día con las últimas novedades, logros y eventos de nuestra institución.
          </p>
        </div>
      </section>

      {/* GRILLA DE NOTICIAS */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {noticiasData.map((noticia) => (
            <article 
              key={noticia.id} 
              // Al hacer clic, guardamos la noticia en el estado para abrir el modal
              onClick={() => setNoticiaSeleccionada(noticia)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#E31E24] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md z-10">
                  {noticia.categoria}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {noticia.fecha}
                </div>
                <h3 className="text-xl font-black text-[#002855] mb-4 leading-tight group-hover:text-[#E31E24] transition-colors line-clamp-2">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light flex-grow line-clamp-3">
                  {noticia.extracto}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-[#002855] font-bold text-sm flex items-center gap-2 group-hover:text-[#E31E24] transition-colors">
                    Leer artículo completo <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* MODAL (VENTANA EMERGENTE DE LA NOTICIA) */}
      {/* ============================================================ */}
      {noticiaSeleccionada && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#002855]/80 backdrop-blur-sm animate-fadeIn"
          // Cerrar modal si hacen clic en el fondo oscuro
          onClick={cerrarModal}
        >
          {/* Contenedor principal del Modal */}
          <div 
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            // Evitar que el clic dentro del cuadro blanco cierre el modal
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón flotante para cerrar (X) */}
            <button 
              onClick={cerrarModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#002855] hover:bg-[#E31E24] hover:text-white transition-colors z-10 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Imagen gigante de cabecera del modal */}
            <div className="h-64 sm:h-80 w-full relative">
              <img 
                src={noticiaSeleccionada.imagen} 
                alt={noticiaSeleccionada.titulo} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-[#E31E24] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                  {noticiaSeleccionada.categoria}
                </span>
                <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {noticiaSeleccionada.fecha}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#002855] mb-8 leading-tight">
                {noticiaSeleccionada.titulo}
              </h2>

              {/* El texto renderizado conservando los saltos de línea (\n) */}
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed font-light space-y-6 whitespace-pre-wrap">
                {noticiaSeleccionada.contenidoCompleto}
              </div>
              
              {/* Botón inferior para cerrar */}
              <div className="mt-12 flex justify-end border-t border-gray-100 pt-6">
                 <button 
                    onClick={cerrarModal}
                    className="bg-gray-100 text-gray-600 px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-colors"
                  >
                    Cerrar noticia
                 </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Noticias;