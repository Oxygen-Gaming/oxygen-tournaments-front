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
import Logo from "@imgs/Logo_Blue.png"; // Added import for Logo
import Banner from "@imgs/Header_Competiciones.jpg"; 

const Competition = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGeneralView, setShowGeneralView] = useState(false); // Default to false
  const [showAllTournaments, setShowAllTournaments] = useState(false);
  const [selectedGame, setSelectedGame] = useState("Próximos Torneos"); // Default to "Próximos Torneos"
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

  const defaultCards = [
    ['1', 'League of Legends', 'LoL Championship Series', '30/03/2025', 'upcoming', 78, LeagueOfLegends],
    ['4', 'Valorant', 'Valorant Open', '01/04/2025', 'upcoming', 200, Valorant],
    ['7', 'Rocket League', 'Rocket League Invitational', '28/03/2025', 'upcoming', 120, RocketLeague],
  ];

  return (
    <div className="bg-[#1AA9FF] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      <Header />
      <MenuHamburguesaNormal />
      {/* BANNER */}
      <div className="w-full h-96 bg-cover bg-center relative mt-0">
        <img
          src={Banner}
          alt={images[currentImage].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Competiciones</h1>
        </div>
      </div>

      {/* LOGOS MENU */}
      <div className="flex justify-center gap-8 mt-8 flex-wrap">
        <div
          className={`flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 w-1/2 sm:w-auto ${
            selectedGame === "Próximos Torneos" ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          onClick={() => {
            setSelectedGame("Próximos Torneos");
            setShowGeneralView(false);
            setShowAllTournaments(false);
          }}
        >
          <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center md:w-16 md:h-16">
            <i className="fas fa-calendar-alt text-white text-3xl md:text-2xl"></i>
          </div>
          <span className="text-white font-bold text-lg md:text-sm text-center">Próximos Torneos</span>
        </div>
        <div
          className={`flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 w-1/2 sm:w-auto ${
            selectedGame === "League of Legends" ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          onClick={() => handleViewAll("League of Legends")}
        >
          <img
            src={LeagueOfLegendsLogo}
            alt="League of Legends"
            className="w-20 h-20 object-cover rounded-lg md:w-16 md:h-16"
          />
          <span className="text-white font-bold text-lg md:text-sm text-center">League of Legends</span>
        </div>
        <div
          className={`flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 w-1/2 sm:w-auto ${
            selectedGame === "Valorant" ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          onClick={() => handleViewAll("Valorant")}
        >
          <img
            src={ValorantLogo}
            alt="Valorant"
            className="w-20 h-20 object-cover rounded-lg md:w-16 md:h-16"
          />
          <span className="text-white font-bold text-lg md:text-sm text-center">Valorant</span>
        </div>
        <div
          className={`flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 w-1/2 sm:w-auto ${
            selectedGame === "Rocket League" ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          onClick={() => handleViewAll("Rocket League")}
        >
          <img
            src={RocketLeagueLogo}
            alt="Rocket League"
            className="w-20 h-20 object-cover rounded-lg md:w-16 md:h-16"
          />
          <span className="text-white font-bold text-lg md:text-sm text-center">Rocket League</span>
        </div>
      </div>

      <div className="container mx-auto p-5">
        {selectedGame === "Próximos Torneos" && (
          <div className="mt-0"> {/* Adjusted margin-top to align with other sections */}
            <div className="relative mb-12">
              <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">
                Próximos Torneos
              </h2>
              <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent z-0 mt-2"></div> {/* Blue line below the title */}
              <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {defaultCards.map((card) => (
                <div
                  key={card[0]}
                  className="card relative overflow-hidden rounded-lg shadow-lg bg-[#1c1c1c] text-white p-6 flex flex-col justify-between h-[600px] cursor-pointer transition-transform transform hover:scale-105 group"
                  onClick={() => handleCardClick(card)}
                >
                  <img src={card[6]} alt={card[1]} className="w-full h-[300px] object-cover rounded-lg mb-4 shadow-md" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="text-center px-4 transform -translate-y-22 group-hover:-translate-y-24 transition-transform duration-300">
                      <p className="text-white text-lg font-extrabold">
                        Haz click en la tarjeta
                      </p>
                      <p className="text-white text-lg font-extrabold">
                        para ver los detalles del torneo <span className="text-blue-400">{card[2]}</span>
                      </p>
                    </div>
                  </div>
                  <h2 className="text-white text-3xl font-bold mb-2">{card[2]}</h2>
                  <p className="text-lg mb-2 text-gray-300">Fecha de Inicio: {card[3]} • 18:00</p>
                  <p className="text-lg mb-2 text-gray-300">Formato: {card[1] === "Valorant" || card[1] === "League of Legends" ? "5vs5" : "1vs1 y 3vs3"}</p>
                  <p className="text-lg mb-2 text-gray-300">Premio Total: $500</p>
                  <div className="flex items-center mb-2">
                    <img src={Logo} alt="Trophy" className="w-8 h-8 mr-2" />
                    <span className="text-lg font-bold text-green-500">Inscripciones Abiertas</span>
                  </div>
                  <div className="flex justify-between text-lg text-gray-300">
                    <span>Jugadores Inscritos: {card[5]}</span>
                  </div>
                  <div className="flex justify-between text-lg mt-2">
                    <span className="text-lg font-bold px-4 py-2 rounded bg-red-500 text-white">
                      No inscrito
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showGeneralView && !selectedGame && (
          <View handleCardClick={handleCardClick} handleViewAll={handleViewAll} inscriptionStatus={inscriptionStatus} />
        )}

        {selectedGame && showAllTournaments && (
          <>
            <div className="relative mb-12">
              <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">
                Próximos Torneos
              </h2>
              <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent z-0 mt-2"></div>
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
          </>
        )}

        {selectedGame === "Próximos Torneos" && (
          <div className="mt-12">
            <CardsComponent
              handleCardClick={handleCardClick}
              selectedGame={null} // Show tournaments from all games
              filter="upcoming"
              inscriptionStatus={inscriptionStatus}
              selectedCard={selectedCard}
            />
          </div>
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