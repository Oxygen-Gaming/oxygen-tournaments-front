import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Tabs from "@components/Componentes Detalles/Tabs";
import TabContent from "@components/Componentes Detalles/TabContent";
import MatchModal from "@components/Componentes Detalles/MatchModal";

const TournamentDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCard = location.state?.selectedCard || {}; // Asegura que siempre haya datos

  const [activeTab, setActiveTab] = useState("resumen");
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    // Si no hay datos, evitar errores mostrando valores por defecto
    if (!location.state?.selectedCard) {
      console.warn("No se encontró información del torneo, mostrando valores por defecto.");
    }
  }, [location.state]);

  const parseDate = (dateString) => {
    if (!dateString) return "Fecha no disponible";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const closeMatchModal = () => {
    setShowMatchModal(false);
    setSelectedMatch(null);
    document.body.style.overflow = "auto";
  };

  const handleBackClick = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/competition"), 400);
  };

  const scrollToInscription = () => {
    setActiveTab("inscritos");
    setTimeout(() => document.getElementById("inscription-section")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <AnimatePresence mode="wait">
      {!isExiting && (
        <motion.div
          key="details-page"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1AA9FF] text-white w-full min-h-screen font-['Roboto_Condensed',sans-serif] flex flex-col"
        >
          <Header />

          <div className="relative w-full p-4">
            <button
              className="absolute top-4 left-4 px-4 py-2 bg-[#005f99] text-white rounded-lg hover:bg-[#0077b6] transition z-10"
              onClick={handleBackClick}
            >
              Volver
            </button>

            {/* Información del torneo */}
            <div className="text-center p-6 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">{selectedCard.title || "Torneo sin título"}</h1>
              <p className="text-lg">{selectedCard.description || "Descripción no disponible"}</p>
              <p className="text-md">Fecha: {parseDate(selectedCard.date)}</p>
              <button
                className="mt-4 px-6 py-2 bg-[#005f99] text-white rounded-lg hover:bg-[#0077b6] transition"
                onClick={scrollToInscription}
              >
                Ir a Inscripción
              </button>
            </div>
          </div>

          <div className="w-full p-4">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center mt-6 border-b-4 border-[#005f99] max-w-[1200px] mx-auto">
              {["resumen", "bracket", "partidas", "inscritos"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-3 text-lg font-bold transition-all duration-300 ${
                    activeTab === tab ? "border-b-4 border-white text-white" : "text-gray-200 hover:text-white"
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

          {showMatchModal && selectedMatch && <MatchModal selectedMatch={selectedMatch} closeMatchModal={closeMatchModal} />}

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TournamentDetailsPage;
