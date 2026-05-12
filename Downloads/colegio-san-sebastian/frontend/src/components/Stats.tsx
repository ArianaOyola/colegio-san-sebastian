import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({ exp: 0, students: 0, uni: 0, levels: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 1. Detectar visibilidad con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Lógica de animación de conteo
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        exp: Math.min(20, Math.floor((20 / steps) * currentStep)),
        students: Math.min(1500, Math.floor((1500 / steps) * currentStep)),
        uni: Math.min(100, Math.floor((100 / steps) * currentStep)),
        levels: Math.min(3, Math.floor((3 / steps) * currentStep))
      });
      if (currentStep >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  const statData = [
    { id: 'exp', value: `+${counts.exp}`, label: 'Años de Experiencia', icon: '🤝' },
    { id: 'students', value: `+${counts.students}`, label: 'Estudiantes Formados', icon: '👥' },
    { id: 'uni', value: `${counts.uni}%`, label: 'Ingreso Universitario', icon: '🎓' },
    { id: 'levels', value: counts.levels, label: 'Niveles Educativos', icon: '📚' },
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-slate-50 font-sans relative overflow-hidden" ref={sectionRef}>
      
      {/* Destello sutil decorativo rojo de fondo */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E31E24] rounded-full filter blur-[120px] opacity-10 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* ============================================================ */}
        {/* COLUMNA IZQUIERDA (Cols 1-7): Rejilla de Tarjetas AZULES - AHORA MÁS PEQUEÑAS */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch pt-10 lg:pt-0 order-2 lg:order-1">
          {statData.map((stat) => (
            <div 
              key={stat.id} 
              // Diseño: Fondo Azul Institucional, REDUCIMOS PADDING (p-6) Y SOMBRA (shadow-lg)
              className="bg-[#002855] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg shadow-blue-950/20 border border-blue-950 transition-all duration-500 hover:-translate-y-2 group cursor-pointer h-full"
            >
              {/* Icono más pequeño: REDUCIMOS TAMAÑO (w-14, h-14, text-4xl) Y MARGEN (mb-4) */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-inner relative z-10 transform transition-transform group-hover:scale-110">
                {stat.icon}
              </div>

              {/* Número más pequeño: REDUCIMOS TAMAÑO (text-4xl md:text-5xl) Y MARGEN (mb-2) */}
              <span className="text-4xl md:text-5xl font-black text-[#E31E24] mb-2 tracking-tighter relative z-10">
                {stat.value}
              </span>

              {/* Etiqueta más pequeña: REDUCIMOS TAMAÑO (text-xs) */}
              <span className="text-white text-xs font-medium uppercase tracking-widest relative z-10 leading-snug">
                {stat.label}
              </span>

              {/* Detalle inferior decorativo Rojo */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-[#E31E24] rounded-full transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* COLUMNA DERECHA (Cols 8-12): Texto Descriptivo (Sin cambios de tamaño) */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <span className="text-[#E31E24] font-black tracking-[0.2em] uppercase text-sm mb-2 block">
            Nuestra Trayectoria
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#002855] mb-6 tracking-tight leading-tight">
            Excelencia avalada por números
          </h2>
          <div className="w-20 h-1.5 bg-[#E31E24] mb-8 rounded-full"></div>
          <p className="text-gray-600 leading-relaxed text-lg text-justify font-light">
            Más de dos décadas formando líderes con valores y excelencia académica. Nuestros indicadores reflejan el compromiso de toda la comunidad San Sebastianense con la educación integral de nuestros estudiantes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;