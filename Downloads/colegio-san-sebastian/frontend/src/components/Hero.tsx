
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-[350px] bg-[#002855] text-white overflow-hidden relative font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 h-full">
        
        {/* LADO IZQUIERDO: Área Azul con el Texto (7 columnas) */}
        <div className="col-span-12 md:col-span-7 flex items-center px-10 md:px-20 z-10">
          <div className="max-w-xl text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Educación que <br/>
              transforma el <span className="text-[#E31E24]">futuro</span>
            </h2>
            
            {/* Línea decorativa roja */}
            <div className="w-16 h-1.5 bg-[#E31E24] mb-4"></div>
            
            <p className="text-base md:text-lg mb-8 font-light max-w-lg text-gray-200">
              Brindamos educación de calidad basada en valores, innovación y excelencia académica.
            </p>
            
            {/* Botón */}
            <Link to="/nosotros">
              <button className="bg-[#E31E24] hover:bg-[#b3181d] text-white px-6 py-2.5 rounded-lg font-bold transition-all flex items-center gap-3 transform hover:-translate-y-1 shadow-lg">
                Conoce más <span className="text-xl">→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* LADO DERECHO: Exclusivo para la imagen (5 columnas) */}
        {/* En celulares se oculta (hidden) para no aplastar el diseño, en PC/Tablet se muestra (md:block) */}
        <div className="hidden md:block col-span-5 relative h-full">
          {/* CORRECCIÓN: Comentario movido afuera de la etiqueta img. Usamos object-top para enfocar los rostros */}
          <img 
            src="https://ceperuanocanadiense.edu.pe/colegio/wp-content/uploads/2024/11/grupoprimaria.png" 
            alt="Estudiantes" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Degradado suave para difuminar el corte entre el azul y la foto */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#002855] to-transparent z-10"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;