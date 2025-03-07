import React, { useState, useEffect } from "react";
import Logo from "../img/Logo_OxygenGaming2.png";
import Twitter from "../img/twitter.png";
import Instagram from "../img/instagram.png";
import TikTok from "../img/tiktok.png";
import Discord from "../img/discord.png";
import LeagueOfLegends from "../img/lol.jpg";
import Valorant from "../img/valorant.jpg";
import RocketLeague from "../img/rocketleague.jpg";

const Competition = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGeneralView, setShowGeneralView] = useState(true); // Set default to true
  const [showAllTournaments, setShowAllTournaments] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null); // New state for selected game
  const images = [
    { src: Valorant, alt: "Valorant" },
    { src: RocketLeague, alt: "Rocket League" },
    { src: LeagueOfLegends, alt: "League of Legends" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Increase duration to 5000ms (5 seconds)
    return () => clearInterval(interval);
  }, [images.length]);

  const handleViewAll = (game) => {
    setSelectedGame(game);
    setShowAllTournaments(false);
    setShowGeneralView(false);
  };

  return (
    <div className="bg-blue-900 text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      {/* HEADER */}
      <header className="flex justify-between items-center px-4 py-4 md:px-6">
        <a href="/" className="w-[70px] h-[70px] mr-8">
          <img src={Logo} alt="OxygenGaming Logo" className="w-full h-full" />
        </a>
        <nav className="flex items-center gap-2">
          <a href="/" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Inicio</a>
          <a href="/competition" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600">Competiciones</a>
          <a href="/reglamentos" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
          <a href="/missions" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
          <a href="/rewards" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>
        </nav>
        <div className="flex items-center gap-2 ml-auto">
          <a href="/register" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-2 border-white bg-transparent">Registrarse</a>
          <a href="/login" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-blue-600 ml-4">Iniciar Sesión</a>
        </div>
      </header>

      {/* BANNER */}
      <div className="w-11/12 mx-auto h-80 bg-cover bg-center rounded-lg transition-all duration-1000" style={{ backgroundImage: `url(${images[currentImage].src})` }}>
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold text-white">Competiciones</h1>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="w-11/12 mx-auto mt-4 flex justify-center gap-4">
        <button
          className={`px-4 py-2 text-white border-2 rounded-lg transition-all ${showGeneralView && !showAllTournaments && !selectedGame ? 'bg-green-500 text-black' : 'border-green-500 hover:bg-green-500 hover:text-black'}`}
          onClick={() => {
            setShowGeneralView(true);
            setShowAllTournaments(false);
            setSelectedGame(null); // Reset selected game
          }}
        >
          Vista General
        </button>
        <button
          className={`px-4 py-2 text-white border-2 rounded-lg transition-all ${showAllTournaments && !selectedGame ? 'bg-blue-500 text-black' : 'border-blue-500 hover:bg-blue-500 hover:text-black'}`}
          onClick={() => {
            setShowAllTournaments(true);
            setShowGeneralView(false);
            setSelectedGame(null); // Reset selected game
          }}
        >
          Torneos 
        </button>
      </div>

      <div className="container mx-auto p-5">
        {showGeneralView && !showAllTournaments && !selectedGame && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
              <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-[#4ade80] text-xl mb-2">League of Legends Tournament</h2>
              <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
              <div className="flex items-center mb-2">
                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                <span className="text-green-500">Inscripciones abiertas</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Jugadores Inscritos: 78</span>
              </div>
              <button onClick={() => handleViewAll('League of Legends')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            </div>

            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
              <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-[#4ade80] text-xl mb-2">Valorant Tournament</h2>
              <p className="text-sm mb-2">Fecha de Inicio: 15/12/2023</p>
              <div className="flex items-center mb-2">
                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                <span className="text-green-500">Activo</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Jugadores Inscritos: 200</span>
              </div>
              <button onClick={() => handleViewAll('Valorant')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            </div>

            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
              <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-[#4ade80] text-xl mb-2">Rocket League Tournament</h2>
              <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
              <div className="flex items-center mb-2">
                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                <span className="text-green-500">Activo</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Jugadores Inscritos: 120</span>
              </div>
              <button onClick={() => handleViewAll('Rocket League')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            </div>
          </div>
        )}

        {showAllTournaments && !selectedGame && (
          <>
            {/* League of Legends */}
            <h2 className="text-2xl mb-4">League of Legends</h2>
            <button onClick={() => handleViewAll('League of Legends')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">League of Legends Tournament 1</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Inscripciones abiertas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 78</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">League of Legends Tournament 2</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 05/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 150</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">League of Legends Tournament 3</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 10/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 120</span>
                </div>
              </div>
            </div>

            {/* Valorant */}
            <h2 className="text-2xl mb-4">Valorant</h2>
            <button onClick={() => handleViewAll('Valorant')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">Valorant Tournament 1</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 15/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Inscripciones abiertas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 200</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">Valorant Tournament 2</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 250</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">Valorant Tournament 3</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 25/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 300</span>
                </div>
              </div>
            </div>

            {/* Rocket League */}
            <h2 className="text-2xl mb-4">Rocket League</h2>
            <button onClick={() => handleViewAll('Rocket League')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">Rocket League Tournament 1</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Inscripciones abiertas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 120</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">Rocket League Tournament 2</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 25/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 150</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-xl mb-2">Rocket League Tournament 3</h2>
                <p className="text-sm mb-2">Fecha de Inicio: 30/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 180</span>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedGame && (
          <>
            <h2 className="text-2xl mb-4">{selectedGame}</h2>
            <div className="mb-10">
              <h3 className="text-xl mb-2">Torneos Próximos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Add upcoming tournaments for the selected game */}
                {/* Example: */}
                <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                  <img src={selectedGame === 'League of Legends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h2 className="text-[#4ade80] text-xl mb-2">{selectedGame} Tournament 1</h2>
                  <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
                  <div className="flex items-center mb-2">
                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                    <span className="text-green-500">Inscripciones abiertas</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Jugadores Inscritos: 78</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-xl mb-2">Torneos en Curso</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Add ongoing tournaments for the selected game */}
                {/* Example: */}
                <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                  <img src={selectedGame === 'League of Legends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h2 className="text-[#4ade80] text-xl mb-2">{selectedGame} Tournament 2</h2>
                  <p className="text-sm mb-2">Fecha de Inicio: 05/12/2023</p>
                  <div className="flex items-center mb-2">
                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                    <span className="text-green-500">Activo</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Jugadores Inscritos: 150</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-xl mb-2">Torneos Finalizados</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Add finished tournaments for the selected game */}
                {/* Example: */}
                <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg opacity-50"> {/* Add opacity-50 class */}
                  <img src={selectedGame === 'League of Legends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h2 className="text-[#4ade80] text-xl mb-2">{selectedGame} Tournament 3</h2>
                  <p className="text-sm mb-2">Fecha de Inicio: 10/12/2023</p>
                  <div className="flex items-center mb-2">
                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                    <span className="text-red-500">Finalizado</span> {/* Change text color to red */}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Jugadores Inscritos: 120</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-neutral-900">
        <div id="contenido_footer" className="flex justify-between items-start gap-4 p-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">OXYGENGAMING</span>
            <div className="flex flex-col gap-4">
              <a href="https://oxygengaming.es/sobre-nosotros/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">SOBRE NOSOTROS</a>
              <a href="https://oxygengaming.es/patrocinadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">PATROCINADORES</a>
              <a href="https://oxygengaming.es/noticias/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">NOTICIAS</a>
              <a href="https://oxygengaming.es/tienda/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">TIENDA</a>
              <a href="https://oxygengaming.es/oxy-club/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">OXYCLUB</a>
              <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CREADORES</a>
              <a href="https://oxygengaming.es/contacto/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CONTACTO</a>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">EQUIPOS</span>
            <div className="flex flex-col gap-4">
              <a href="https://oxygengaming.es/equipos/#leagueoflegends" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">LEAGUE OF LEGENDS</a>
              <a href="https://oxygengaming.es/equipos/#valorant" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">VALORANT</a>
              <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CREADORES</a>
            </div>
          </div>

          <div id="redes_sociales" className="flex flex-col items-center text-center flex-1 min-w-[250px]">
            <a href="https://oxygengaming.es/">
              <img id="logo_footer" src="https://oxygengaming.es/wp-content/uploads/2022/06/Logo-OG200.png" alt="Oxygen Gaming Logo" className="w-[80%] max-w-[200px] mb-4" />
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={Twitter} alt="Twitter" className="w-full h-full rounded-full" />
              </a>
              <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={Instagram} alt="Instagram" className="w-full h-full rounded-full" />
              </a>
              <a href="https://www.tiktok.com/@oxg_esports?lang=es" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={TikTok} alt="TikTok" className="w-full h-full rounded-full" />
              </a>
              <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={Discord} alt="Discord" className="w-full h-full rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Competition;

