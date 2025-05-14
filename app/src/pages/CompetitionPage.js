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

      <Footer />
    </div>
  );
};

export default Competition;