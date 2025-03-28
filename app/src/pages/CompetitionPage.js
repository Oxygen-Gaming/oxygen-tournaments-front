import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Bracket from "@components/Componentes Competicion/BracketComponent";
import Info from "@components/Componentes Competicion/InfoComponent";
import Inscription from "@components/Componentes Competicion/InscriptionComponent";
import View from "@components/Componentes Competicion/ViewComponent";
import CardsComponent from '@components/Componentes Competicion/CardsComponent';
import ButtonsComponent from '@components/Componentes Competicion/ButtonsComponent';
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";

const Competition = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGeneralView, setShowGeneralView] = useState(true); // Set default to true
  const [showAllTournaments, setShowAllTournaments] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null); // New state for selected game
  const [showModal, setShowModal] = useState(false); // New state for modal visibility
  const [modalContent, setModalContent] = useState(null); // New state for modal content
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card
  const [showInfoModal, setShowInfoModal] = useState(false); // New state for info modal visibility
  const [showBracket, setShowBracket] = useState(false); // New state for bracket visibility
  const [showRegistrationModal, setShowRegistrationModal] = useState(false); // New state for registration modal visibility
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state for success message
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    teamName: '',
    teamRepresentative: ''
  });
  const [inscriptionStatus, setInscriptionStatus] = useState({}); // New state for inscription status
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false); // New state for cancel confirmation modal
  const [showTournaments, setShowTournaments] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return formData.username && formData.email && formData.teamName && formData.teamRepresentative;
  };

  const images = [
    { src: Valorant, alt: "Valorant" },
    { src: RocketLeague, alt: "Rocket League" },
    { src: LeagueOfLegends, alt: "League of Legends" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Increase duration to 5000ms (5 seconds)
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
    if (showModal || showInfoModal || showBracket || showRegistrationModal || showCancelConfirmation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal, showInfoModal, showBracket, showRegistrationModal, showCancelConfirmation]);

  const handleViewAll = (game) => {
    setSelectedGame(game);
    setShowGeneralView(false);
    setShowAllTournaments(true); // Show all tournaments
  };

  const handleCardClick = (content) => {
    setModalContent(content);
    setShowModal(true);
    setSelectedCard(content); // Add this line to set the selected card
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
    setSelectedCard(null); // Add this line to reset the selected card
  };

  const handleInfoClick = () => {
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const handleBracketClick = () => {
    setShowBracket(true);
    setShowModal(false);
  };

  const closeBracket = () => {
    setShowBracket(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationModal(true);
    setShowModal(false);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    setInscriptionStatus({ ...inscriptionStatus, [selectedCard[0]]: true }); // Update inscription status
    setTimeout(() => {
      setShowSuccessMessage(false);
      closeRegistrationModal();
    }, 3000); // Hide message after 3 seconds
  };

  const handleInscriptionRedirect = () => {
    setShowInfoModal(false);
    setShowRegistrationModal(true);
  };

  const handleCancelRegistration = () => {
    setShowCancelConfirmation(true); // Show confirmation modal
  };

  const confirmCancelRegistration = () => {
    setInscriptionStatus({ ...inscriptionStatus, [selectedCard[0]]: false });
    setShowModal(false);
    setShowCancelConfirmation(false); // Hide confirmation modal
  };

  const closeCancelConfirmation = () => {
    setShowCancelConfirmation(false); // Hide confirmation modal
  };

  const handleTorneosClick = () => {
    setShowTournaments(true);
    setShowGeneralView(false);
    setShowAllTournaments(false);
  };

  const modalStyle = "bg-[#002f5f] text-white p-5 rounded-lg w-[85%] max-w-[1300px] h-[75%] overflow-hidden fixed"; // Keep this for info modal
  const buttonModalStyle = "bg-[#002f5f] text-white p-5 rounded-lg w-[40%] max-w-[500px] h-[40%] overflow-hidden fixed"; // Smaller size for button modal
  const bracketModalStyle = "bg-gray-900 text-white p-5 rounded-lg w-[90%] max-w-[1400px] h-[85%] fixed"; // Adjusted size for bracket modal
  const modalContentStyle = "overflow-y-auto h-full pr-4"; // Revert to original style for modal content
  const buttonStyle = "px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 w-full"; // Ensure buttons have the same size
  const smallButtonStyle = "px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900"; // Slightly larger button style
  const noZoomButtonStyle = "px-3 py-2 rounded-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900"; // Button style without zoom
  const panelStyle = "bg-[#003f7f] p-4 rounded-lg shadow-lg w-3/4"; // Style for panels with reduced width
  const infoTitleStyle = "text-4xl font-bold mb-4 text-center relative"; // New style for info modal title
  const hoverEffect = "transition-transform transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 duration-500"; // Updated hover effect class with slower duration
  const [isOpen, setIsOpen] = useState(false);

  const teamNamesByTournament = {
    "LoL Championship Series": ["Dragons", "Warriors", "Titans", "Phoenix", "Sharks", "Wolves", "Eagles", "Lions", "Bears", "Panthers", "Hawks", "Tigers", "Bulls", "Raptors", "Knights", "Spartans", "Vikings", "Samurais", "Ninjas", "Pirates", "Gladiators", "Raiders", "Giants", "Cyclones", "Storm", "Thunder", "Lightning", "Blaze", "Inferno", "Tornadoes", "Avalanche", "Quakes"],
    "Valorant Open": ["Vipers", "Cobras", "Pythons", "Anacondas", "Rattlesnakes", "Mambas", "Copperheads", "Boomslangs", "Taipans", "Kraits", "Adders", "Asps", "Bushmasters", "Fer-de-lances", "Cottonmouths", "Sidewinders", "Coral Snakes", "Sea Snakes", "Garter Snakes", "King Snakes", "Milk Snakes", "Rat Snakes", "Corn Snakes", "Water Snakes", "Tree Snakes", "Vine Snakes", "Whip Snakes", "Blind Snakes", "Thread Snakes", "Pipe Snakes", "Shieldtail Snakes", "Sunbeam Snakes"],
    "Rocket League Invitational": ["Jets", "Rockets", "Comets", "Asteroids", "Meteors", "Stars", "Planets", "Galaxies", "Nebulas", "Quasars", "Pulsars", "Supernovas", "Black Holes", "White Dwarfs", "Red Giants", "Blue Giants", "Brown Dwarfs", "Neutron Stars", "Protostars", "T Tauri Stars", "Wolf-Rayet Stars", "Hypergiants", "Supergiants", "Main Sequence Stars", "Variable Stars", "Cepheid Variables", "RR Lyrae Variables", "Mira Variables", "Eclipsing Binaries", "Spectroscopic Binaries", "X-ray Binaries", "Gamma-ray Binaries"]
  };

  return (
    <div className="bg-[#003366] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      <Header />
      <button className="lg:hidden w-full flex flex-col items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      <div className={`lg:hidden absolute ${isOpen ? 'block' : 'hidden'} w-full relative bg-blue-900 h-full flex flex-col justify-center items-center mt-4 gap-[20px] transition-transform ease-in-out duration-300`}>
        <a href="/" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Inicio</a>
        <a href="/competition" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Competiciones</a>
        <a href="/content" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Contenido</a>
        <a href="/missions" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Misiones</a>
        <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Recompensas</a>        
      </div>
      {/* BANNER */}
      <div className="w-11/12 mx-auto h-80 bg-cover bg-center rounded-lg transition-all duration-1000 mt-8" style={{ backgroundImage: `url(${images[currentImage].src})` }}>
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
        </div>
      </div>
      {/* TITLE */}
      <div className="w-11/12 mx-auto mt-8">
        <h1 className="text-5xl font-extrabold text-center">Competiciones</h1>
      </div>
      {/* BUTTONS */}
      <div className="w-11/12 mx-auto mt-6 flex justify-center gap-4">
        {/* Remove Vista General button */}
      </div>

      <div className="container mx-auto p-5">
        {showGeneralView && !selectedGame && (
          <View handleCardClick={handleCardClick} handleViewAll={handleViewAll} inscriptionStatus={inscriptionStatus} />
        )}

        {selectedGame && showAllTournaments && (
          <>
            <h2 className="text-3xl font-bold mb-4">Próximos torneos</h2>
            <CardsComponent handleCardClick={handleCardClick} selectedGame={selectedGame} filter="upcoming" inscriptionStatus={inscriptionStatus} />
            
            <h2 className="text-3xl font-bold mb-4 mt-8">Torneos en curso</h2>
            <CardsComponent handleCardClick={handleCardClick} selectedGame={selectedGame} filter="ongoing" inscriptionStatus={inscriptionStatus} />
            
            <h2 className="text-3xl font-bold mb-4 mt-8">Torneos Finalizados</h2>
            <CardsComponent handleCardClick={handleCardClick} selectedGame={selectedGame} filter="finished" inscriptionStatus={inscriptionStatus} />

            <div className="flex justify-center mt-8">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                onClick={() => {
                  setShowGeneralView(true);
                  setSelectedGame(null);
                  setShowAllTournaments(false);
                }}
              >
                Volver
              </button>
            </div>
          </>
        )}
      </div>

      {showModal && (
        <ButtonsComponent
          selectedCard={selectedCard}
          modalContent={modalContent}
          handleInfoClick={handleInfoClick}
          handleCancelRegistration={handleCancelRegistration}
          handleRegistrationClick={handleRegistrationClick}
          handleBracketClick={handleBracketClick}
          closeModal={closeModal}
          inscriptionStatus={inscriptionStatus}
        />
      )}

      {showInfoModal && (
        <Info
          selectedCard={selectedCard}
          modalContent={modalContent}
          closeInfoModal={closeInfoModal}
          handleCancelRegistration={handleCancelRegistration}
          handleInscriptionRedirect={handleInscriptionRedirect}
          inscriptionStatus={inscriptionStatus}
        />
      )}

      {showRegistrationModal && (
        <Inscription
          selectedCard={selectedCard}
          modalContent={modalContent}
          closeRegistrationModal={closeRegistrationModal}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          formData={formData}
          isFormValid={isFormValid}
        />
      )}

      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out scale-105">
            <h2 className="text-4xl font-bold mb-4">¡Registro Exitoso!</h2>
            <p className="text-lg">Tu inscripción ha sido completada correctamente.</p>
          </div>
        </div>
      )}

      {showBracket && selectedCard && (
        <Bracket closeBracket={closeBracket} tournamentName={selectedCard[2]} />
      )}

      {showCancelConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#002f5f] text-white p-5 rounded-lg w-[90%] max-w-[500px] h-auto overflow-hidden fixed">
            <h2 className="text-3xl font-bold mb-4 text-center">¿Estas seguro de que deseas cancelar tu inscripción?</h2>
            <p className="text-sm mb-8 text-center">Una vez cancelada, se te quitará la plaza para el torneo, por lo tanto si alguien se inscribe se le asignará tu plaza reservada. Es posible que después de la cancelación te quedes sin plaza.</p>
            <div className="flex justify-around">
              <button className={buttonStyle} onClick={confirmCancelRegistration}>Sí</button>
              <button className={buttonStyle} onClick={closeCancelConfirmation}>No</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Competition;

