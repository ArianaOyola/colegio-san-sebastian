import { useState, useRef } from 'react';
// 1. IMPORTAMOS EMAILJS
import emailjs from '@emailjs/browser';

const Galeria = () => {
  const [filtro, setFiltro] = useState('Todos');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false); // Estado de carga
  
  // 2. REFERENCIA AL FORMULARIO DEL MODAL
  const form = useRef<HTMLFormElement>(null);

  const categorias = ['Todos', 'Infraestructura', 'Eventos', 'Talleres'];
  const imagenes = [
    { id: 1, categoria: 'Infraestructura', url: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800', titulo: 'Laboratorio de Cómputo' },
    { id: 2, categoria: 'Eventos', url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800', titulo: 'Día de la Madre' },
    { id: 3, categoria: 'Talleres', url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800', titulo: 'Taller de Pintura' },
    { id: 4, categoria: 'Infraestructura', url: 'https://images.unsplash.com/photo-1596495573105-d14658ce587a?q=80&w=800', titulo: 'Patio Principal' },
    { id: 5, categoria: 'Talleres', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800', titulo: 'Clase de Ciencias' },
    { id: 6, categoria: 'Eventos', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800', titulo: 'Graduación 2024' },
  ];

  const imagenesFiltradas = filtro === 'Todos' ? imagenes : imagenes.filter(img => img.categoria === filtro);

  // 3. FUNCIÓN REAL DE ENVÍO CON EMAILJS
  const handleAgendar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setCargando(true);

    // Usamos TUS claves exactas
    emailjs.sendForm(
      'service_p1ibsnw',
      'template_et9dkbh',
      form.current,
      '-I1XUkDz25opl6M_B'
    )
    .then((result) => {
        console.log('Visita agendada:', result.text);
        setEnviado(true);
        setCargando(false);
        form.current?.reset();
        
        // Cerramos el modal después de 3 segundos
        setTimeout(() => { 
          setEnviado(false); 
          setModalAbierto(false); 
        }, 3000);
    }, (error) => {
        console.error('Error al agendar:', error.text);
        alert('Hubo un error al enviar la solicitud. Intenta de nuevo.');
        setCargando(false);
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans relative">
      
      {/* CABECERA ESTANDARIZADA */}
      <section 
        className="relative h-[350px] flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#002855]/85"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Galería Escolar</h1>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Capturando momentos, logros y el crecimiento diario de nuestra comunidad.
          </p>
        </div>
      </section>

      {/* GRILLA DE IMÁGENES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categorias.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFiltro(cat)} 
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${filtro === cat ? 'bg-[#E31E24] text-white scale-105' : 'bg-white text-[#002855] hover:bg-gray-100 border border-gray-100'}`}
              >
                {cat}
              </button>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {imagenesFiltradas.map(img => (
              <div key={img.id} className="h-64 rounded-3xl overflow-hidden shadow-lg group relative border border-gray-100">
                <img src={img.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={img.titulo} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-[#E31E24] font-black uppercase text-[10px] tracking-widest mb-1">{img.categoria}</span>
                  <span className="text-white font-bold text-lg leading-tight">{img.titulo}</span>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA (BOTÓN INFERIOR) */}
      <section className="py-16 px-6 bg-[#002855] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 gap-4 transform -rotate-12 scale-150">
             {[...Array(24)].map((_, i) => (
               <div key={i} className="w-20 h-20 bg-white rounded-xl"></div>
             ))}
          </div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-4">¿Quieres conocer nuestro campus?</h2>
          <p className="text-blue-100 mb-8 italic font-light">"Ven y descubre por qué somos el lugar ideal para el crecimiento de tus hijos."</p>
          <button 
            onClick={() => setModalAbierto(true)}
            className="bg-[#E31E24] hover:bg-white hover:text-[#002855] text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl"
          >
            Agenda una Visita Guiada
          </button>
        </div>
      </section>

      {/* MODAL DE AGENDAMIENTO CON EMAILJS */}
      {modalAbierto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#002855]/80 backdrop-blur-sm animate-fadeIn" onClick={() => setModalAbierto(false)}>
          <div className="bg-white rounded-3xl w-full max-w-lg p-8 sm:p-12 relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setModalAbierto(false)} className="absolute top-4 right-4 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#E31E24] hover:text-white transition-colors">✕</button>
            
            {enviado ? (
              <div className="text-center py-10 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-black text-[#002855] mb-2">¡Solicitud Recibida!</h3>
                <p className="text-gray-500">Nos pondremos en contacto contigo pronto por WhatsApp para coordinar.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleAgendar} className="space-y-5">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-[#002855] mb-2">Agendar Visita</h3>
                  <p className="text-gray-500 text-sm">Déjanos tus datos y coordinaremos el recorrido.</p>
                </div>
                
                {/* CAMPOS VISIBLES CON SUS "name" */}
                <input type="text" name="user_name" required placeholder="Nombre del Padre/Madre" className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 transition-all text-sm" />
                <input type="tel" name="user_phone" required placeholder="WhatsApp de contacto" className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 transition-all text-sm" />
                <select name="user_level" required className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 transition-all text-sm text-gray-600">
                  <option value="">Nivel de Interés...</option>
                  <option value="Inicial">Inicial</option>
                  <option value="Primaria">Primaria</option>
                  <option value="Secundaria">Secundaria</option>
                </select>

                {/* TRUCO: CAMPOS OCULTOS PARA QUE LA PLANTILLA DE EMAILJS NO FALLE */}
                <input type="hidden" name="user_email" value="Contacto Vía WhatsApp" />
                <input type="hidden" name="message" value="¡Hola! He llenado el formulario corto de 'Agendar Visita' desde la galería. Por favor contáctenme a mi WhatsApp para coordinar la fecha." />
                
                <button type="submit" disabled={cargando} className="w-full bg-[#E31E24] hover:bg-[#002855] text-white py-4 rounded-xl font-bold transition-colors shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                  {cargando ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;