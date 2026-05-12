const About = () => {
  return (
    <section className="py-20 px-10 md:px-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO IZQUIERDO: Texto y Beneficios */}
        <div>
          <h2 className="text-[#002855] text-5xl font-black mb-6 tracking-tight">
            ¿Quiénes somos?
          </h2>
          <div className="w-20 h-1.5 bg-[#E31E24] mb-8 rounded-full"></div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-10 text-justify font-light">
            Somos una institución educativa comprometida con la formación integral de nuestros estudiantes, 
            promoviendo sus habilidades, valores y talentos para que sean líderes en un mundo global.
          </p>

          <ul className="space-y-5">
            {[
              'Excelencia Académica',
              'Sólida Formación en Valores',
              'Innovación Tecnológica'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-[#002855] font-bold text-lg">
                <span className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#E31E24] shadow-sm">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* LADO DERECHO: Tarjetas de Misión, Visión y Valores (AHORA ROJAS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          
          {/* Tarjeta 1: Misión */}
          <div className="bg-[#E31E24] rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl shadow-red-900/20 hover:-translate-y-2 transition-all duration-300 border-b-8 border-[#002855]">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 backdrop-blur-sm">
              🎯
            </div>
            <h3 className="text-white font-black text-xl mb-4 uppercase tracking-tighter">Misión</h3>
            <p className="text-red-50 text-xs leading-relaxed font-light">
              Formar personas íntegras, críticas y competentes, comprometidas con su comunidad.
            </p>
          </div>

          {/* Tarjeta 2: Visión */}
          <div className="bg-[#E31E24] rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl shadow-red-900/20 hover:-translate-y-2 transition-all duration-300 border-b-8 border-[#002855]">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 backdrop-blur-sm">
              👁️
            </div>
            <h3 className="text-white font-black text-xl mb-4 uppercase tracking-tighter">Visión</h3>
            <p className="text-red-50 text-xs leading-relaxed font-light">
              Ser reconocidos como una institución educativa líder en formación integral.
            </p>
          </div>

          {/* Tarjeta 3: Valores */}
          <div className="bg-[#E31E24] rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl shadow-red-900/20 hover:-translate-y-2 transition-all duration-300 border-b-8 border-[#002855]">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 backdrop-blur-sm">
              ❤️
            </div>
            <h3 className="text-white font-black text-xl mb-4 uppercase tracking-tighter">Valores</h3>
            <p className="text-red-50 text-xs leading-relaxed font-light">
              Respeto, responsabilidad, solidaridad, honestidad y perseverancia.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;