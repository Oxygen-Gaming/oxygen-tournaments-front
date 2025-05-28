import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import oxygen from '@imgs/Logo_OxygenGaming2.png';

const Header = () => {
  const location = useLocation();

  return (
    <header className="lg:flex justify-between hidden items-center px-4 py-4 md:px-6 bg-[#000000] text-[18px] font-['Roboto_Condensed']"> {/* Updated background color */}
      <a href="/" className="w-[70px] h-[70px] mr-8">
        <img src={oxygen} alt="OxygenGaming Logo" className="w-full h-full" />
      </a>
      <nav className="flex items-center gap-2">
        <NavLink
          to="/"
          className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${
            location.pathname === "/" ? "bg-gradient-to-r from-[#005f99] to-[#1AA9FF]" : ""
          }`}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/ventajas"
          className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${
            location.pathname.startsWith("/ventajas") ? "bg-gradient-to-r from-[#005f99] to-[#1AA9FF]" : ""
          }`}
        >
          Ventajas
        </NavLink>
        <NavLink
          to="/competition"
          className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${
            location.pathname.startsWith("/competition") || location.pathname.startsWith("/tournament-details") ? "bg-gradient-to-r from-[#005f99] to-[#1AA9FF]" : ""
          }`}
        >
          Competiciones
        </NavLink>
        <NavLink
          to="/content"
          className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${
            location.pathname.startsWith("/content") ? "bg-gradient-to-r from-[#005f99] to-[#1AA9FF]" : ""
          }`}
        >
          Contenido
        </NavLink>
        <NavLink
          to="/missions"
          className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${
            location.pathname.startsWith("/missions") || location.pathname.startsWith("/mission-details") ? "bg-gradient-to-r from-[#005f99] to-[#1AA9FF]" : ""
          }`}
        >
          Misiones
        </NavLink>
        <NavLink
          to="/rewards"
          className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${
            location.pathname.startsWith("/rewards") || location.pathname.startsWith("/reward-details") ? "bg-gradient-to-r from-[#005f99] to-[#1AA9FF]" : ""
          }`}
        >
          Recompensas
        </NavLink>

        <NavLink
          to="/tienda"
          className={`text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 font-['Roboto_Condensed',sans-serif] ${
            location.pathname.startsWith("/tienda") ? "bg-gradient-to-r from-[#005f99] to-[#1AA9FF]" : ""
          }`}
        >
          Tienda
        </NavLink>

        
      </nav>
      <div className="flex items-center gap-2 ml-auto">
        <a href="/register" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-gradient-to-r from-[#005f99] to-[#1AA9FF]">Registrarse</a>
        <a href="/login" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-gradient-to-r from-[#005f99] to-[#1AA9FF] ml-4">Iniciar Sesión</a>
      </div>
    </header>
  );
};

export default Header;