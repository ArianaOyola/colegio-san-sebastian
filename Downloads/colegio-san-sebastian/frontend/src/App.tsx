import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- Importamos el Footer
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Niveles from './pages/Niveles';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Noticias from './pages/Noticias';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        
        {/* Barra superior de navegación (aparece en todas las páginas) */}
        <Navbar />
        
        {/* Contenedor principal que se expande para empujar el Footer abajo si la página es muy corta */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/niveles" element={<Niveles />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/noticias" element={<Noticias />} />
          </Routes>
        </div>

        {/* Pie de página (aparece en todas las páginas) */}
        <Footer /> 

      </div>
    </Router>
  );
}

export default App;