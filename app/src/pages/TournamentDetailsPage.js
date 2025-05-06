import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "@components/Header";
import Footer from "@components/Footer";
import TournamentHeader from "@components/Componentes Detalles/TournamentHeader";
import Tabs from "@components/Componentes Detalles/Tabs";
import TabContent from "@components/Componentes Detalles/TabContent";
import MatchModal from "@components/Componentes Detalles/MatchModal";

const TournamentDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCard = location.state?.selectedCard;

  const [activeTab, setActiveTab] = useState("resumen");
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isExiting, setIsExiting] = useState(false); // <-- nuevo estado

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
    }, 400); // Tiempo igual al de la animación
  };

  const scrollToInscription = () => {
    const currentPath = location.pathname;
    if (!currentPath.includes("/tournament-details")) {
      navigate("/tournament-details", { state: { selectedCard } });
      setTimeout(() => {
        setActiveTab("inscritos");
        const inscriptionSection = document.getElementById("inscription-section");
        if (inscriptionSection) {
          inscriptionSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
      return;
    }

    setActiveTab("inscritos");
    setTimeout(() => {
      const inscriptionSection = document.getElementById("inscription-section");
      if (inscriptionSection) {
        inscriptionSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
          className="bg-[#1AA9FF] text-white w-full min-h-screen font-['Roboto_Condensed',sans-serif]"
        >
          <Header />

          <div className="relative w-full">
            <button
              className="absolute top-4 left-4 px-4 py-2 bg-[#005f99] text-white rounded-lg hover:bg-[#0077b6] transition z-10"
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
            {/* Tabs Navigation */}
            <div className="flex justify-center mt-6 border-b-4 border-[#005f99] max-w-[1200px] mx-auto md:hidden">
              {["resumen", "bracket", "partidas", "inscritos"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 text-center px-4 py-2 text-sm font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? "border-b-4 border-white text-white"
                      : "text-gray-200 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="hidden md:flex justify-center mt-6 border-b-4 border-[#005f99] max-w-[1200px] mx-auto">
              {["resumen", "bracket", "partidas", "inscritos"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-3 text-lg font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? "border-b-4 border-white text-white"
                      : "text-gray-200 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Contenido con animación entre tabs */}
            <div className="mt-6 max-w-[1200px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <TabContent
                    activeTab={activeTab}
                    selectedCard={selectedCard}
                    setShowMatchModal={setShowMatchModal}
                    setSelectedMatch={setSelectedMatch}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
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


