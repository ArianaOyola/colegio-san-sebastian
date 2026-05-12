

const Testimonials = () => {
  const opiniones = [
    {
      id: 1,
      nombre: 'Claudia Rivas',
      rol: 'Madre - Primaria',
      comentario: 'La calidez de los profesores y el enfoque en valores es lo que más resalto.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150'
    },
    {
      id: 2,
      nombre: 'Ricardo Montaner',
      rol: 'Padre - Secundaria',
      comentario: 'En secundaria los preparan realmente para la universidad con un nivel académico exigente.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150'
    },
    {
      id: 3,
      nombre: 'Sofía Velásquez',
      rol: 'Exalumna - Promoción 2022',
      comentario: 'Gracias a la base que recibí, pude ingresar a la universidad sin problemas ni retrasos.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ff80289067?q=80&w=150'
    }
  ];

  return (
    // CAMBIO 1: Reducción drástica del padding vertical de py-20 a py-10
    <section className="py-10 px-10 md:px-20 bg-slate-50 font-sans relative overflow-hidden">
      
      {/* Comilla gigante decorativa de fondo sutil */}
      <div className="absolute -top-6 -left-6 text-[#002855]/5 text-[250px] font-serif pointer-events-none select-none italic">
        “
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* CAMBIO 2: Cabecera en formato horizontal (izquierda) para compactar el bloque */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 shrink-0">
          <span className="text-[#E31E24] font-black tracking-[0.2em] uppercase text-xs mb-1 block">
            Testimonios
          </span>
          <h2 className="text-3xl font-black text-[#002855] tracking-tight leading-tight mb-3">
            Nuestra comunidad <br/>opina
          </h2>
          <div className="w-12 h-1 bg-[#E31E24] rounded-full"></div>
        </div>

        {/* CAMBIO 3: Grid de 3 tarjetas compactas en formato horizontal (derecha) */}
        <div className="w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {opiniones.map((op) => (
            <div 
              key={op.id} 
              // CAMBIO 4: Reducción de padding de p-8 a p-5, bordes redondeados medianos, y borde azul más delgado
              className="bg-[#002855] p-5 rounded-2xl flex flex-col shadow-lg shadow-blue-900/10 hover:-translate-y-1.5 transition-all duration-300 group border-b-4 border-[#E31E24] relative"
            >
              {/* Encabezado compacto: Foto y Datos */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                {/* CAMBIO 5: Foto más pequeña de w-16 a w-12 */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E31E24] shrink-0 shadow-md">
                  <img src={op.avatar} alt={op.nombre} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base leading-tight">{op.nombre}</h4>
                  <p className="text-[#E31E24] text-[9px] font-black uppercase tracking-widest mt-0.5">
                    {op.rol}
                  </p>
                </div>
              </div>

              {/* Contenedor de Texto con Comillas */}
              <div className="relative mb-3 px-3">
                {/* Apertura */}
                <span className="text-[#E31E24] text-5xl font-serif leading-none absolute -top-4 -left-2 opacity-40 italic select-none">
                  “
                </span>
                
                {/* CAMBIO 6: Texto más pequeño (text-xs md:text-sm) y espaciado py-1 */}
                <p className="text-gray-100 italic text-xs md:text-sm leading-relaxed relative z-10 py-1 line-clamp-3">
                  {op.comentario}
                </p>

                {/* Cierre */}
                <div className="flex justify-end -mt-3.5">
                  <span className="text-[#E31E24] text-5xl font-serif leading-none opacity-40 italic select-none">
                    ”
                  </span>
                </div>
              </div>
              
              <div className="mt-auto flex justify-start pl-3">
                <div className="w-8 h-0.5 bg-white/10 rounded-full group-hover:bg-[#E31E24] transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;