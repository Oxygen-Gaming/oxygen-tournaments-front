import React from "react";

const Competition = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-4 py-4 md:px-6 bg-[#002b5c]">
        <a href="/" className="w-[70px] h-[70px] mr-8">
          <img src="Logo_OxygenGaming2.png" alt="OxygenGaming Logo" className="w-full h-full rounded-full" />
        </a>
        <nav className="flex items-center gap-2">
          <a href="/" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Inicio</a>
          <a href="/competition" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600">Competiciones</a>
          <a href="/reglamentos" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
          <a href="/inscripciones" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
          <a href="/clasificaciones" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>
        </nav>
        <div className="flex items-center gap-2 ml-auto">
          <a href="/register" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-2 border-white bg-transparent">Registrarse</a>
          <a href="/login" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-blue-600 ml-4">Iniciar Sesión</a>
        </div>
      </header>

      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#4ade80] text-xl">Información General</h2>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Estado</span>
              <span className="text-green-500">Activo</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Juego</span>
              <span>League of Legends</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Región</span>
              <span>Latinoamérica</span>
            </div>
          </div>

          <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#4ade80] text-xl">Precintas</h2>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-700 text-center p-2 rounded">1er Lugar</div>
              <div className="bg-gray-700 text-center p-2 rounded">2do Lugar</div>
              <div className="bg-gray-700 text-center p-2 rounded">3er Lugar</div>
            </div>
          </div>

          <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#4ade80] text-xl">Reglamento</h2>
            </div>
            <button className="w-full mt-2 bg-transparent border-2 border-[#4ade80] text-[#4ade80] py-2 transition-all hover:bg-[#4ade80] hover:text-[#001f3f]">
              Ver Reglamento
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-[#4ade80] text-xl mb-5">Tournament Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="bg-[#003f7f] rounded-lg overflow-hidden transition-transform transform hover:scale-105 shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Evento 1" className="w-full h-52 object-cover" />
              <div className="p-2 text-sm">Evento 1</div>
            </div>
            <div className="bg-[#003f7f] rounded-lg overflow-hidden transition-transform transform hover:scale-105 shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Evento 2" className="w-full h-52 object-cover" />
              <div className="p-2 text-sm">Evento 2</div>
            </div>
            <div className="bg-[#003f7f] rounded-lg overflow-hidden transition-transform transform hover:scale-105 shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Evento 3" className="w-full h-52 object-cover" />
              <div className="p-2 text-sm">Evento 3</div>
            </div>
            <div className="bg-[#003f7f] rounded-lg overflow-hidden transition-transform transform hover:scale-105 shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Evento 4" className="w-full h-52 object-cover" />
              <div className="p-2 text-sm">Evento 4</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#002b5c] p-5 mt-10 flex justify-between items-center">
        <div>&copy; 2025 Superliga Fantástica</div>
        <div className="flex gap-4">
          <a href="#" className="text-[#4ade80]">Términos</a>
          <a href="#" className="text-[#4ade80]">Privacidad</a>
          <a href="#" className="text-[#4ade80]">Contacto</a>
        </div>
      </footer>
    </div>
  );
};

export default Competition;
