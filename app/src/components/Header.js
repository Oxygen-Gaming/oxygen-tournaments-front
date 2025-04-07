import React from 'react';
import { useLocation } from 'react-router-dom';
import oxygen from '@imgs/Logo_OxygenGaming2.png';

const Header = () => {
  const location = useLocation();

  return (
    <header className="lg:flex justify-between hidden items-center px-4 py-4 md:px-6 bg-[#18538a] text-[18px] font-['Roboto_Condensed']">
      <a href="/" className="w-[70px] h-[70px] mr-8">
        <img src={oxygen} alt="OxygenGaming Logo" className="w-full h-full" />
      </a>
      <nav className="flex items-center gap-2">
        <a href="/" className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${location.pathname === '/' ? 'bg-blue-600' : ''}`}>Inicio</a>
        <a href="/competition" className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${(location.pathname === '/competition' || location.pathname === '/tournament-details') ? 'bg-blue-600' : ''}`}>Competiciones</a>
        <a href="/content" className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${location.pathname === '/content' ? 'bg-blue-600' : ''}`}>Contenido</a>
        <a href="/missions" className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${location.pathname === '/missions' ? 'bg-blue-600' : ''}`}>Misiones</a>
        <a href="/rewards" className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${location.pathname === '/rewards' ? 'bg-blue-600' : ''}`}>Recompensas</a>
        <a href="/ventajas" className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${location.pathname === '/ventajas' ? 'bg-blue-600' : ''}`}>Ventajas</a>
      </nav>
      <div className="flex items-center gap-2 ml-auto">
        <a href="/register" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-2 border-white bg-transparent">Registrarse</a>
        <a href="/login" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-blue-600 ml-4">Iniciar Sesión</a>
      </div>
    </header>
  );
};

export default Header;