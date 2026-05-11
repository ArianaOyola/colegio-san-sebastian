import React from 'react';
// ...otras importaciones
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats'; // <-- Asegúrate de que esté importado
import Levels from '../components/Levels';
import LatestNews from '../components/LatestNews';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <About />
      
      {/* NUEVO ORDEN: Stats va ANTES que Levels */}
      <Stats />
      
      <Levels />
      
      <LatestNews />
      <Testimonials />
    </div>
  );
};

export default Home;