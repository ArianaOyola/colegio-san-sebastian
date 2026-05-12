import { useState, useEffect } from 'react';

const Nosotros = () => {
  // Array de 6 imágenes para el carrusel automático
  const infrastructureImages = [
    'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800',
    'https://images.unsplash.com/photo-1596495573105-d14658ce587a?q=80&w=800',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800',
    'https://images.unsplash.com/photo-1519452285022-eb1281dfce11?q=80&w=800',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lógica de automatización del carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % infrastructureImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [infrastructureImages.length]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* ============================================================ */}
      {/* CABECERA ESTANDARIZADA: Fondo completo con imagen oscura */}
      {/* ============================================================ */}
      <section 
        className="relative h-[350px] flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('https://cbb.edu.pe/wp-content/uploads/2024/01/Invertir-en-educacion.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Capa de color oscuro para que el texto resalte */}
        <div className="absolute inset-0 bg-[#002855]/85"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Nuestra Historia</h1>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Conoce los cimientos sobre los que construimos el futuro de nuestros estudiantes.
          </p>
        </div>
      </section>
      {/* ============================================================ */}

      {/* HISTORIA Y VALORES */}
      <section className="py-20 px-10 md:px-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3">
            <h3 className="text-4xl font-bold text-[#002855] mb-6 tracking-tight">¿Cómo empezamos?</h3>
            <div className="w-16 h-1.5 bg-[#E31E24] mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm text-justify font-light">
              El Colegio San Sebastián nació con el firme propósito de transformar la educación y brindar un espacio donde la excelencia académica y los valores humanos se unan. Desde el primer día, nuestra meta ha sido formar líderes preparados para los retos del mundo moderno.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm text-justify font-light">
              A lo largo de los años, hemos construido una comunidad sólida, innovando en nuestras metodologías sin perder nuestra esencia: el compromiso, la disciplina y el amor por la enseñanza.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer border border-gray-100 h-full">
              <div className="w-16 h-16 bg-[#E31E24] rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-sm">
                👤
              </div>
              <h4 className="font-black text-[#002855] mb-3 text-lg">Misión</h4>
              <p className="text-xs text-gray-500 leading-relaxed flex-grow">
                Formar personas íntegras, críticas y competentes, comprometidas con su comunidad.
              </p>
              <div className="w-8 h-1 bg-[#002855] mt-6 rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer border border-gray-100 h-full">
              <div className="w-16 h-16 bg-[#002855] rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-sm">
                👁️
              </div>
              <h4 className="font-black text-[#002855] mb-3 text-lg">Visión</h4>
              <p className="text-xs text-gray-500 leading-relaxed flex-grow">
                Ser reconocidos como una institución educativa líder en formación integral.
              </p>
              <div className="w-8 h-1 bg-[#002855] mt-6 rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer border border-gray-100 h-full">
              <div className="w-16 h-16 bg-[#E31E24] rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-sm">
                ❤️
              </div>
              <h4 className="font-black text-[#002855] mb-3 text-lg">Valores</h4>
              <p className="text-xs text-gray-500 leading-relaxed flex-grow">
                Respeto, responsabilidad, solidaridad, honestidad y perseverancia.
              </p>
              <div className="w-8 h-1 bg-[#002855] mt-6 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CARRUSEL DE INFRAESTRUCTURA */}
      <section className="py-16 px-10 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h3 className="text-3xl font-bold text-[#002855] tracking-tight">Conoce nuestras instalaciones</h3>
            <p className="text-gray-600 max-w-lg text-sm font-light">
              Explora los espacios diseñados para el aprendizaje, la innovación y el desarrollo integral.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src={infrastructureImages[currentImageIndex]} 
                alt={`Instalación ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" 
              />
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full">
              {infrastructureImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-[#E31E24] w-6' : 'bg-white'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENSAJE DE LA DIRECCIÓN */}
      <section className="py-20 px-10 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-gray-50 p-12 rounded-[2rem] shadow-md border border-gray-100">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img src="https://i0.wp.com/educacionalfuturo.com/wp-content/uploads/2012/06/Reina-del-mundo.jpg?fit=1024%2C783&ssl=1" alt="Directora del Colegio" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-3xl font-black text-[#002855] mb-4 tracking-tight">Mensaje de la Dirección</h4>
            <div className="w-16 h-1.5 bg-[#E31E24] mb-8 rounded-full"></div>
            <blockquote className="text-gray-600 leading-relaxed italic mb-6 font-light text-lg">
              "Bienvenidos al Colegio San Sebastián. Nuestra misión es formar líderes con valores, capaces de transformar su entorno con innovación y excelencia académica."
            </blockquote>
            <p className="font-bold text-[#002855] text-lg">Dra. María Fernández</p>
            <p className="text-[#E31E24] text-xs font-bold uppercase tracking-widest mt-1">Directora Ejecutiva</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;