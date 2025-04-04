import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "@components/Header";
import Footer from "@components/Footer";
import TournamentHeader from "@components/Componentes Detalles/TournamentHeader";
import Tabs from "@components/Componentes Detalles/Tabs";
import TabContent from "@components/Componentes Detalles/TabContent";
import MatchModal from "@components/Componentes Detalles/MatchModal";

const TournamentDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const selectedCard = location.state?.selectedCard;

  const [activeTab, setActiveTab] = useState("resumen");
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const closeMatchModal = () => {
    setShowMatchModal(false);
    setSelectedMatch(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  if (!selectedCard) {
    return (
      <div className="bg-[#003366] text-white h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">No se encontró información del torneo.</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#002f5f] text-white w-full min-h-screen font-['Roboto_Condensed',sans-serif]">
      <Header />
      <div className="relative w-full">
        {/* Volver Button */}
        <button
          className="absolute top-4 left-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition z-10"
          onClick={() => navigate("/competition")} // Navigate back to CompetitionPage
        >
          Volver
        </button>
        <TournamentHeader selectedCard={selectedCard} />
      </div>
      <div className="w-full p-4">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabContent
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
    </div>
  );
};

export default TournamentDetailsPage;
