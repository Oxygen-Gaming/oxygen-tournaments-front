import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import BannerCarousel from "@components/Componentes Competicion/BannerCarousel";
import GameSelectorMenu from "@components/Componentes Competicion/GameSelectorMenu";
import DefaultTournamentCards from "@components/Componentes Competicion/DefaultTournamentCards";
import TournamentsByGame from "@components/Componentes Competicion/TournamentsByGame";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import LeagueOfLegends from "@imgs/lol.jpg";

const Competition = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showAllTournaments, setShowAllTournaments] = useState(false);
  const [selectedGame, setSelectedGame] = useState("Próximos Torneos");
  const [selectedCard, setSelectedCard] = useState(null);
  const [inscriptionStatus, setInscriptionStatus] = useState({});

  const navigate = useNavigate();

  const images = [
    { src: Valorant, alt: "Valorant" },
    { src: RocketLeague, alt: "Rocket League" },
    { src: LeagueOfLegends, alt: "League of Legends" },
  ];

  const defaultCards = [
    ['1', 'League of Legends', 'LoL Championship Series', '06/06/2025', 'upcoming', 78, LeagueOfLegends],
    ['4', 'Valorant', 'Valorant Open', '01/06/2025', 'upcoming', 200, Valorant],
    ['7', 'Rocket League', 'Rocket League Invitational', '28/06/2025', 'upcoming', 120, RocketLeague],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleCardClick = (content) => {
    setSelectedCard(content);
    navigate("/tournament-details", { state: { selectedCard: content } });
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-black text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      <Header />
      <MenuHamburguesaNormal />
      <BannerCarousel currentImage={currentImage} images={images} />
      <GameSelectorMenu
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
        setShowAllTournaments={setShowAllTournaments}
      />
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
              <DefaultTournamentCards cards={defaultCards} onCardClick={handleCardClick} />
            )}

            {selectedGame && showAllTournaments && (
              <TournamentsByGame
                selectedGame={selectedGame}
                handleCardClick={handleCardClick}
                inscriptionStatus={inscriptionStatus}
                selectedCard={selectedCard}
              />
            )}
          </motion.div>
        </AnimatePresence>
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
            <h2 className="text-4xl font-extrabold text-center text-[white] relative z-10">Próximos Torneos</h2>
            <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent z-0 mt-2"></div>
            <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-900 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultCards.map((card) => (
              <div
                key={card[0]}
                className="card relative overflow-hidden rounded-lg shadow-lg bg-black text-white p-6 flex flex-col justify-between h-[600px] cursor-pointer transition-transform transform hover:scale-105 group"
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