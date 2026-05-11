import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    setCargando(true);

    // AQUÍ ESTÁN TUS CLAVES REALES DE EMAILJS
    emailjs.sendForm(
      'service_p1ibsnw',
      'template_et9dkbh',
      form.current,
      '-I1XUkDz25opl6M_B'
    )
    .then((result) => {
        console.log('Mensaje enviado:', result.text);
        setEnviado(true);
        setCargando(false);
        form.current?.reset(); 
        setTimeout(() => setEnviado(false), 5000);
    }, (error) => {
        console.error('Error al enviar:', error.text);
        alert('Hubo un error al enviar el mensaje. Intenta de nuevo.');
        setCargando(false);
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* CABECERA */}
      <section 
        className="relative h-[350px] flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#002855]/85"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Contáctanos</h1>
          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Estamos listos para resolver todas tus dudas y darte la bienvenida a nuestra familia.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LADO IZQUIERDO: Información y Mapa */}
          <div>
            <h2 className="text-3xl font-black text-[#002855] mb-6">Ponte en contacto con nosotros</h2>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              ¿Tienes alguna pregunta sobre nuestro proceso de admisión, pensiones o metodología? 
              Escríbenos o visítanos directamente en nuestro campus. Nuestro equipo de atención te responderá a la brevedad.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#E31E24] shadow-sm shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#002855] mb-1">Nuestra Ubicación</h4>
                  <p className="text-gray-600 text-sm font-light">Av. Los Próceres 123, Distrito Escolar<br/>Lima - Perú</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#E31E24] shadow-sm shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#002855] mb-1">Llámanos</h4>
                  <p className="text-gray-600 text-sm font-light">(01) 123 4567<br/>+51 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#E31E24] shadow-sm shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#002855] mb-1">Correo Electrónico</h4>
                  <p className="text-gray-600 text-sm font-light">admision@sansebastian.edu.pe<br/>info@sansebastian.edu.pe</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-[2rem] overflow-hidden shadow-inner relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124864.08693836791!2d-77.10636881775836!3d-12.046373059880196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1715011234567!5m2!1ses-419!2spe" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de Ubicación"
              ></iframe>
            </div>
          </div>

          {/* LADO DERECHO: Formulario de Contacto Funcional */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-gray-50 h-fit">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-[#002855] mb-2">Envíanos un mensaje</h3>
              <p className="text-gray-500 text-sm font-light">Completa tus datos y nos comunicaremos contigo pronto.</p>
            </div>

            {enviado ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl text-center animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-bold text-xl mb-2">¡Mensaje Enviado!</h4>
                <p className="text-sm">Gracias por escribirnos. Un asesor académico se pondrá en contacto contigo muy pronto.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#002855] uppercase tracking-wider ml-1">Nombres</label>
                    <input type="text" name="user_name" required placeholder="Ej. Juan Pérez" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#002855] uppercase tracking-wider ml-1">Teléfono</label>
                    <input type="tel" name="user_phone" required placeholder="Ej. 987 654 321" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all text-sm" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#002855] uppercase tracking-wider ml-1">Correo Electrónico</label>
                  <input type="email" name="user_email" required placeholder="tu@correo.com" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all text-sm" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#002855] uppercase tracking-wider ml-1">Nivel de Interés</label>
                  <select name="user_level" required className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all text-sm text-gray-600 bg-white">
                    <option value="">Selecciona un nivel...</option>
                    <option value="Inicial">Nivel Inicial</option>
                    <option value="Primaria">Nivel Primaria</option>
                    <option value="Secundaria">Nivel Secundaria</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#002855] uppercase tracking-wider ml-1">Mensaje</label>
                  <textarea name="message" required rows={4} placeholder="Escribe tus consultas aquí..." className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all text-sm resize-none"></textarea>
                </div>

                <button type="submit" disabled={cargando} className="w-full bg-[#E31E24] text-white py-4 rounded-xl font-bold hover:bg-[#002855] transition-colors shadow-lg hover:shadow-xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                  {cargando ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contacto;