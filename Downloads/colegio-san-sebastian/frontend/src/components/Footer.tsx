
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // CAMBIO 1: Fondo Rojo (#E31E24) y reducción de padding (pt-12 pb-6)
    // CAMBIO 2: Línea superior Azul (#002855)
    <footer className="bg-[#E31E24] text-white pt-12 pb-6 px-10 md:px-20 font-sans border-t-[4px] border-[#002855]">
      
      {/* Reducción de gap y márgenes inferiores */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        
        {/* Columna 1: Logo y Redes */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#E31E24] font-black text-lg shadow-sm">
              SS
            </div>
            <div>
              <h2 className="font-black text-sm leading-none tracking-tight">COLEGIO</h2>
              <h3 className="font-light text-xl tracking-tighter">SAN SEBASTIÁN</h3>
            </div>
          </div>
          <p className="text-red-100 text-xs leading-relaxed mb-5 font-light max-w-xs">
            Formamos personas íntegras, críticas y competentes, promoviendo sus habilidades para transformar el mundo.
          </p>
          <div className="flex gap-3">
            {/* Redes Sociales con fondo Azul */}
            {[
              { icon: 'f', link: '#' },
              { icon: 'ig', link: '#' },
              { icon: 'yt', link: '#' }
            ].map((social, idx) => (
              <a key={idx} href={social.link} className="w-8 h-8 rounded-full bg-[#002855] flex items-center justify-center text-xs hover:bg-[#001a36] transition-all hover:scale-110">
                {social.icon === 'f' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>}
                {social.icon === 'ig' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.011-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>}
                {social.icon === 'yt' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>}
              </a>
            ))}
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos (Texto más pequeño) */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-red-100 text-xs">
            <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-1"> Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-white transition-colors flex items-center gap-1"> Nuestra Historia</Link></li>
            <li><Link to="/niveles" className="hover:text-white transition-colors flex items-center gap-1"> Niveles Educativos</Link></li>
            <li><Link to="/noticias" className="hover:text-white transition-colors flex items-center gap-1"> Noticias</Link></li>
            <li><Link to="/galeria" className="hover:text-white transition-colors flex items-center gap-1"> Galería</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto (Iconos pequeños) */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">Contáctanos</h4>
          <ul className="space-y-3 text-red-100 text-xs">
            <li className="flex items-center gap-2">
              <span className="text-[#002855]">📍</span> Av. Los Próceres 123, Lima
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#002855]">📞</span> (01) 123 4567
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#002855]">✉️</span> admision@sansebastian.edu.pe
            </li>
          </ul>
        </div>

        {/* Columna 4: Admisiones (Botón Azul) */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">Admisiones 2026</h4>
          <p className="text-red-100 text-xs mb-4 leading-relaxed">
            Proceso de matrícula disponible. Asegura la vacante hoy.
          </p>
          <Link to="/contacto">
            {/* CAMBIO 3: Botón Azul (#002855) */}
            <button className="bg-[#002855] text-white px-5 py-2 rounded-lg font-bold hover:bg-[#001a36] transition-all w-full shadow-md text-sm">
              Iniciar Proceso
            </button>
          </Link>
        </div>

      </div>

      {/* Barra Inferior */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-red-200/60">
        <p>© 2026 Colegio San Sebastián. Todos los derechos reservados.</p>
        <div className="flex gap-3 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Privacidad</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;