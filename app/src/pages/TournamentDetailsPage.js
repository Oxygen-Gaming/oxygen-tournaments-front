import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "@components/Header";
import Footer from "@components/Footer";
import TournamentHeader from "@components/Componentes Detalles/TournamentHeader";
import TabContent from "@components/Componentes Detalles/TabContent";
import MatchModal from "@components/Componentes Detalles/MatchModal";


import BackButton from "@components/Componentes Detalles/BackButton";
import TabNavigation from "@components/Componentes Detalles/TabNavigation";
import AnimatedTabContent from "@components/Componentes Detalles/AnimatedTabContent";
import useScrollToInscription from "@components/Componentes Detalles/useScrollToInscription";

const TournamentDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCard = location.state?.selectedCard;

  const [activeTab, setActiveTab] = useState("resumen");
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const scrollToInscription = useScrollToInscription({
    activeTab,
    setActiveTab,
    selectedCard,
    location,
    navigate,
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const closeMatchModal = () => {
    setShowMatchModal(false);
    setSelectedMatch(null);
    document.body.style.overflow = "auto";
  };

  const handleBackClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/competition");
    }, 400);
  };

  if (!selectedCard) {
    return (
      <div className="bg-[#1AA9FF] text-white h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center">No se encontró información del torneo.</h1>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {!isExiting && (
        <motion.div
          key="details-page"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-black text-white w-full min-h-screen font-['Roboto_Condensed',sans-serif]"
        >
          <Header />

          <div className="relative w-full">

            <BackButton onClick={handleBackClick} />
            <TournamentHeader selectedCard={selectedCard} scrollToInscription={scrollToInscription} />

            <button
              className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg hover:bg-[#0077b6] transition z-10"
              onClick={handleBackClick}
            >
              Volver
            </button>

            <TournamentHeader
              selectedCard={selectedCard}
              scrollToInscription={scrollToInscription}
            />

          </div>

          <div className="w-full p-4">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <AnimatedTabContent
              activeTab={activeTab}
              selectedCard={selectedCard}
              setShowMatchModal={setShowMatchModal}
              setSelectedMatch={setSelectedMatch}
            />
          </div>

          {showMatchModal && selectedMatch && (
            <MatchModal selectedMatch={selectedMatch} closeMatchModal={closeMatchModal} />
          )}

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TournamentDetailsPage;

