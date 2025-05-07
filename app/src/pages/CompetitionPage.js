import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import View from "@components/Componentes Competicion/ViewComponent";
import CardsComponent from "@components/Componentes Competicion/CardsComponent";
import LeagueOfLegends from "@imgs/lol.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import { useNavigate } from "react-router-dom";
import ValorantLogo from "@imgs/Valorant_logo.png";
import RocketLeagueLogo from "@imgs/rocket-league.png";
import LeagueOfLegendsLogo from "@imgs/lol-logo.png";
import Logo from "@imgs/Logo_Blue.png";
import Banner from "@imgs/Header_Competiciones.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Competition = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGeneralView, setShowGeneralView] = useState(false);
  const [showAllTournaments, setShowAllTournaments] = useState(false);
  const [selectedGame, setSelectedGame] = useState("Próximos Torneos");
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
    if (showInfoModal || showBracket || showRegistrationModal || showCancelConfirmation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showInfoModal, showBracket, showRegistrationModal, showCancelConfirmation]);

  const handleViewAll = (game) => {
    setSelectedGame(game);
    setShowGeneralView(false);
    setShowAllTournaments(true);
  };

  const handleCardClick = (content) => {
    setSelectedCard(content);
    navigate("/tournament-details", { state: { selectedCard: content } });
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
    ['1', 'League of Legends', 'LoL Championship Series', '06/05/2025', 'upcoming', 78, LeagueOfLegends],
    ['4', 'Valorant', 'Valorant Open', '01/06/2025', 'upcoming', 200, Valorant],
    ['7', 'Rocket League', 'Rocket League Invitational', '28/05/2025', 'upcoming', 120, RocketLeague],
  ];

  const fadeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

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
      <div className="flex justify-center gap-16 mt-8 flex-wrap">
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
          <div className="w-20 h-20 rounded-lg flex items-center justify-center md:w-20 md:h-20">
            <i className="fas fa-calendar-alt text-white text-3xl md:text-5xl"></i>
          </div>
          <span className="text-white font-bold text-lg md:text-sm text-center">Próximos Torneos</span>
        </div>

        {games.map((game) => (
          <div
            key={game.name}
            className={`flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 w-1/2 sm:w-auto ${
              selectedGame === game.name ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => handleViewAll(game.name)}
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-20 h-20 object-cover rounded-lg md:w-20 md:h-20"
            />
            <span className="text-white font-bold text-lg md:text-sm text-center">{game.name}</span>
          </div>
        ))}
      </div>

      <div className="container mx-auto p-5">
  <AnimatePresence mode="wait">
    <motion.div
      key={selectedGame}
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {selectedGame === "Próximos Torneos" && !showAllTournaments && (
        <>
          <div className="relative mb-12">
            <h2 className="text-4xl font-extrabold text-center text-white relative z-10">Próximos Torneos</h2>
            <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent z-0 mt-2"></div>
            <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-900 rounded-full"></div>
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
                    <p className="text-white text-lg font-extrabold">Haz click en la tarjeta</p>
                    <p className="text-white text-lg font-extrabold">
                      para ver los detalles del torneo <span className="text-blue-400">{card[2]}</span>
                    </p>
                  </div>
                </div>
                <h2 className="text-white text-3xl font-bold mb-2">{card[2]}</h2>
                <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-md font-semibold">
                            🗓️ {card[3]} • 18:00
                        </span>
                    </div>
                <p className="text-lg mb-2 text-gray-300">Formato: {card[1] === "Valorant" || card[1] === "League of Legends" ? "5vs5" : "1vs1 y 3vs3"}</p>
                <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-md font-semibold">
                            🏆 Premio: $500
                        </span>
                    </div>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-8 h-8 mr-2" />
                  <span className="text-lg font-bold text-green-500">Inscripciones Abiertas</span>
                </div>
                <div className="flex justify-between text-lg mt-2">
                  <span className="text-lg font-bold px-4 py-2 rounded bg-red-500 text-white">No inscrito</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedGame && showAllTournaments && (
        <>
          <div className="relative mb-12">
            <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">
              Próximos Torneos de {selectedGame}
            </h2>
            <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent z-0 mt-2"></div>
            <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-900 rounded-full"></div>
          </div>
          <CardsComponent
            handleCardClick={handleCardClick}
            selectedGame={selectedGame}
            filter="upcoming"
            inscriptionStatus={inscriptionStatus}
            selectedCard={selectedCard}
          />

          <div className="relative mb-12 mt-16">
            <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">Torneos en curso</h2>
            <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-0 mt-2"></div>
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
            <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">Torneos Finalizados</h2>
            <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent z-0 mt-2"></div>
            <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 rounded-full"></div>
          </div>
          <div className={'transition-opacity duration-500 opacity-[45%]'}>
            <CardsComponent
              handleCardClick={handleCardClick}
              selectedGame={selectedGame}
              filter="finished"
              inscriptionStatus={inscriptionStatus}
              selectedCard={selectedCard}
            />
          </div>
        </>
      )}
    </motion.div>
  </AnimatePresence>
</div>


      <Footer />
    </div>
  );
};

export default Competition;
