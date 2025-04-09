import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import View from "@components/Componentes Competicion/ViewComponent";
import CardsComponent from '@components/Componentes Competicion/CardsComponent';
import LeagueOfLegends from "@imgs/lol.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import { useNavigate } from "react-router-dom"; 
import ValorantLogo from "@imgs/Valorant_logo.png";
import RocketLeagueLogo from "@imgs/rocket-league.png";
import LeagueOfLegendsLogo from "@imgs/lol-logo.png";
const Competition = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGeneralView, setShowGeneralView] = useState(true); 
  const [showAllTournaments, setShowAllTournaments] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null); 
  const [selectedCard, setSelectedCard] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBracket, setShowBracket] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [inscriptionStatus, setInscriptionStatus] = useState({});
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  const navigate = useNavigate();

  const images = [
    { src: Valorant, alt: "Valorant" },
    { src: RocketLeague, alt: "Rocket League" },
    { src: LeagueOfLegends, alt: "League of Legends" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (showBracket) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showBracket]);

  useEffect(() => {
    if (showInfoModal || showBracket || showRegistrationModal || showCancelConfirmation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showInfoModal, showBracket, showRegistrationModal, showCancelConfirmation]);

  const handleViewAll = (game) => {
    setSelectedGame(game);
    setShowGeneralView(false);
    setShowAllTournaments(true); // Show all tournaments
  };

  const handleCardClick = (content) => {
    setSelectedCard(content);
    navigate("/tournament-details", { state: { selectedCard: content } }); // Aseguramos que la ruta sea "/tournament-details"
  };

  const getImageForGame = (gameName) => {
    if (gameName === "League of Legends") return LeagueOfLegends;
    if (gameName === "Valorant") return Valorant;
    if (gameName === "Rocket League") return RocketLeague;
    return null;
  };

  const games = [
    { name: "League of Legends", image: LeagueOfLegendsLogo },
    { name: "Valorant", image: ValorantLogo },
    { name: "Rocket League", image: RocketLeagueLogo },
  ];

  return (
    <div className="bg-[#1AA9FF] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      <Header />
      <MenuHamburguesaNormal />
      {/* BANNER */}
      <div className="w-11/12 mx-auto h-80 bg-cover bg-center rounded-lg transition-all duration-1000 mt-8 relative">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Competiciones</h1>
        </div>
      </div>

 {/* LOGOS MENU */}
 <div className="flex justify-center gap-8 mt-8">
        {games.map((game) => (
          <div
            key={game.name}
            className={`flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 ${
              selectedGame === game.name ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => handleViewAll(game.name)}
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <span className="text-white font-bold text-lg">{game.name}</span>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto p-5">
        {showGeneralView && !selectedGame && (
          <View handleCardClick={handleCardClick} handleViewAll={handleViewAll} inscriptionStatus={inscriptionStatus} />
        )}

        {selectedGame && showAllTournaments && (
          <>
            <div className="relative mb-12">
              <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">
                Próximos Torneos
              </h2>
              <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent z-0 mt-2"></div> {/* Moved below the title */}
              <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>
            <CardsComponent
                handleCardClick={handleCardClick}
                selectedGame={selectedGame}
                filter="upcoming"
                inscriptionStatus={inscriptionStatus}
                selectedCard={selectedCard}
            />
            
            <div className="relative mb-12 mt-16">
              <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">
                Torneos en curso
              </h2>
              <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-0 mt-2"></div> {/* Moved below the title */}
              <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-400 rounded-full"></div>
            </div>
            <CardsComponent
                handleCardClick={handleCardClick}
                selectedGame={selectedGame}
                filter="ongoing"
                inscriptionStatus={inscriptionStatus}
                selectedCard={selectedCard}
            />
            
            <div className="relative mb-12 mt-16">
              <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">
                Torneos Finalizados
              </h2>
              <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent z-0 mt-2"></div> {/* Moved below the title */}
              <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 rounded-full"></div>
            </div>
            <CardsComponent
                handleCardClick={handleCardClick}
                selectedGame={selectedGame}
                filter="finished"
                inscriptionStatus={inscriptionStatus}
                selectedCard={selectedCard}
            />
            <div className="flex justify-center mt-8">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                onClick={() => {
                  setShowGeneralView(true);
                  setSelectedGame(null);
                  setShowAllTournaments(false);
                  setSelectedCard(null);
                }}
              >
                Volver
              </button>
            </div>
          </>
        )}

        {/* Nueva sección para mostrar información del torneo seleccionado */}
        {selectedCard && (
          <div id="detailed-section" className="mt-8">
            <div className="bg-[#002f5f] text-white rounded-lg w-full max-w-[1300px] mx-auto">
              {/* Encabezado del torneo */}
              <div
                className="relative bg-cover bg-center rounded-t-lg h-[300px] flex items-center justify-center"
                style={{
                  backgroundImage: `url(${getImageForGame(selectedCard[1])})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg"></div>
                <div className="relative z-10 text-center">
                  <h1 className="text-5xl font-extrabold">{selectedCard[2]}</h1>
                  <p className="text-lg mt-2">
                    En alrededor de 2 horas • {selectedCard[3]}
                  </p>
                  <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Unirse al torneo
                  </button>
                </div>
              </div>

              {/* Barra de progreso */}
              <div className="bg-[#003f7f] p-6">
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <span>Inscripción</span>
                  <span>Confirmación</span>
                  <span>Clasificación</span>
                  <span>Comienzo</span>
                </div>
                <div className="relative mt-2">
                  <div className="h-2 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full" style={{ width: '25%' }}></div>
                  <div className="absolute top-[-6px] left-[25%] w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
                <p className="text-center mt-2 text-sm text-gray-300">
                  Las inscripciones están abiertas, es el momento de registrarse.
                </p>
              </div>

              {/* Secciones de información */}
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">Formato</h2>
                <p className="text-gray-300 mb-6">
                  Eliminación directa con partidas al mejor de 3. Los mejores equipos avanzarán a la siguiente fase.
                </p>

                <h2 className="text-3xl font-bold mb-4">Jugadores</h2>
                <p className="text-gray-300 mb-6">3 jugadores registrados hasta ahora.</p>

                <h2 className="text-3xl font-bold mb-4">Premios</h2>
                <div className="flex gap-8">
                  <div className="text-center">
                    <span className="text-5xl text-yellow-400">🥇</span>
                    <p className="text-lg font-bold mt-2">1er Lugar</p>
                    <p className="text-md">$100</p>
                  </div>
                  <div className="text-center">
                    <span className="text-5xl text-gray-400">🥈</span>
                    <p className="text-lg font-bold mt-2">2do Lugar</p>
                    <p className="text-md">$50</p>
                  </div>
                  <div className="text-center">
                    <span className="text-5xl text-orange-400">🥉</span>
                    <p className="text-lg font-bold mt-2">3er Lugar</p>
                    <p className="text-md">$25</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">Reglas</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Juego limpio: No se permite el uso de hacks o trampas.</li>
                  <li>Respeto entre jugadores: Conducta ofensiva resultará en descalificación.</li>
                  <li>Puntualidad: Los jugadores deben estar presentes según el horario.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Competition;