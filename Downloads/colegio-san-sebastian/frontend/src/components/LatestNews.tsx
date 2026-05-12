
import { Link } from 'react-router-dom';

const LatestNews = () => {
  // Tomamos solo las 3 noticias más recientes para el "adelanto"
  const noticiasRecientes = [
    {
      id: 1,
      fecha: '20 MAY',
      categoria: 'Avisos Dirección',
      titulo: 'Apertura del proceso de matrícula para el año escolar 2025',
      imagen: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800'
    },
    {
      id: 2,
      fecha: '15 MAY',
      categoria: 'Académico',
      titulo: 'Inicio del periodo de exámenes bimestrales',
      imagen: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800'
    },
    {
      id: 3,
      fecha: '12 MAY',
      categoria: 'Deportes',
      titulo: '¡Campeones en las Olimpiadas Interescolares!',
      imagen: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800'
    }
  ];

  return (
    <section className="py-20 px-10 md:px-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-200 pb-6">
          <div>
            <span className="text-[#E31E24] font-black tracking-[0.2em] uppercase text-sm mb-2 block">
              Actualidad
            </span>
            <h2 className="text-4xl font-black text-[#002855] tracking-tight">
              Últimas Noticias
            </h2>
          </div>
          
          {/* Botón para ir a la página completa de noticias */}
          <Link to="/noticias">
            <button className="text-[#002855] font-bold hover:text-[#E31E24] transition-colors flex items-center gap-2 group">
              Ver todas las noticias 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </Link>
        </div>

        {/* Cuadrícula de 3 Tarjetas de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticiasRecientes.map((noticia) => (
            <Link to="/noticias" key={noticia.id}>
              <div className="group cursor-pointer">
                {/* Contenedor de Imagen con Efecto Hover */}
                <div className="w-full h-56 rounded-2xl overflow-hidden relative mb-5 shadow-md">
                  {/* Etiqueta de Fecha Flotante */}
                  <div className="absolute top-4 left-4 bg-white/95 text-[#002855] font-black text-center px-3 py-1.5 rounded-lg z-10 shadow-sm text-sm">
                    {noticia.fecha}
                  </div>
                  <img 
                    src={noticia.imagen} 
                    alt={noticia.titulo} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Capa oscura que aparece al pasar el ratón */}
                  <div className="absolute inset-0 bg-[#002855]/0 group-hover:bg-[#002855]/20 transition-colors duration-300"></div>
                </div>

                {/* Textos de la Noticia */}
                <span className="text-xs font-bold text-[#E31E24] tracking-wider uppercase">
                  {noticia.categoria}
                </span>
                <h3 className="text-xl font-bold text-[#002855] mt-2 group-hover:text-[#E31E24] transition-colors leading-tight">
                  {noticia.titulo}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;