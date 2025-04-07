import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Reset scroll position to the top when the page loads
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    // Add fade-in animation class to the body
    document.body.classList.add("fade-in");
    return () => {
      document.body.classList.remove("fade-in");
    };
  }, []);

  const closeMatchModal = () => {
    setShowMatchModal(false);
    setSelectedMatch(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const scrollToInscription = () => {
    const currentPath = location.pathname;

    // Redirigir a la página de detalles del torneo si no estamos en ella
    if (!currentPath.includes("/tournament-details")) {
      navigate("/tournament-details", { state: { selectedCard } }); // Redirigir a la página de detalles
      setTimeout(() => {
        setActiveTab("inscritos"); // Cambiar automáticamente a la pestaña de inscripciones
        const inscriptionSection = document.getElementById("inscription-section");
        if (inscriptionSection) {
          inscriptionSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
        }
      }, 500); // Esperar un breve momento para garantizar que la página cargue
      return;
    }

    // Si ya estamos en la página, cambiar la pestaña y desplazarse directamente
    setActiveTab("inscritos"); // Cambiar automáticamente a la pestaña de inscripciones
    setTimeout(() => {
      const inscriptionSection = document.getElementById("inscription-section");
      if (inscriptionSection) {
        inscriptionSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      } else {
        console.error("No se encontró la sección de inscripción. Asegúrate de que el identificador sea correcto.");
      }
    }, 100); // Esperar un breve momento para garantizar que el DOM esté cargado
  };

  if (!selectedCard) {
    return (
      <div className="bg-[#1AA9FF] text-white h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center">No se encontró información del torneo.</h1> {/* Centrado */}
      </div>
    );
  }

  return (
    <div className="bg-[#1AA9FF] text-white w-full min-h-screen font-['Roboto_Condensed',sans-serif]">
      <Header />
      <div className="relative w-full">
        {/* Volver Button */}
        <button
          className="absolute top-4 left-4 px-4 py-2 bg-[#005f99] text-white rounded-lg hover:bg-[#0077b6] transition z-10"
          onClick={() => navigate("/competition")} // Navigate back to CompetitionPage
        >
          Volver
        </button>
        <TournamentHeader selectedCard={selectedCard} scrollToInscription={scrollToInscription} />
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
