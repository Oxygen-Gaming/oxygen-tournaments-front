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
import PopUpsComponent from "@components/Componentes Competicion/PopUpsComponent";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

const Competition = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGeneralView, setShowGeneralView] = useState(true); // Set default to true
  const [showAllTournaments, setShowAllTournaments] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null); // New state for selected game
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
  const [currentPopUp, setCurrentPopUp] = useState(Math.floor(Math.random() * 3)); // Randomly select the first pop-up
  const [showPopUp, setShowPopUp] = useState(true);
  const [showSuccessPopUp, setShowSuccessPopUp] = useState(false); // New state for success pop-up

  const [showInfoSection, setShowInfoSection] = useState(false);
  const [showBracketSection, setShowBracketSection] = useState(false);
  const [showInscriptionSection, setShowInscriptionSection] = useState(false);

  const navigate = useNavigate(); // Inicializamos useNavigate

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

  const handleInfoClick = (card) => {
    setSelectedCard(card); // Set the selected card to display its content
    setShowInfoModal(true); // Open the tournament information modal
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const handleBracketClick = () => {
    setShowBracket(true);
  };

  const closeBracket = () => {
    setShowBracket(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationModal(true);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInscriptionStatus((prevStatus) => ({
      ...prevStatus,
      [selectedCard[0]]: true, // Actualiza el estado de inscripción
    }));
    setShowSuccessMessage(true);
    setShowSuccessPopUp(true); // Muestra el pop-up de éxito
    setTimeout(() => {
      setShowSuccessMessage(false);
      setShowSuccessPopUp(false); // Oculta el pop-up después de 3 segundos
      closeRegistrationModal();
    }, 3000);
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

  const handlePopUpClose = () => {
    setShowPopUp(false); // Hide all pop-ups when the "X" button is clicked
  };

  const handleMoreInfo = (tournamentName) => {
    setShowPopUp(false); // Hide the pop-up
    setSelectedCard([tournamentName, tournamentName, `${tournamentName} Championship`, '30/03/2025', 'upcoming']);
    setShowInfoModal(true); // Open the tournament information modal
    setTimeout(() => {
        const infoSection = document.getElementById("info-section");
        if (infoSection) {
            infoSection.scrollIntoView({ behavior: "smooth" });
        }
    }, 300); // Delay to ensure modal opens before scrolling
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

  const popUps = [
    {
      title: "League of Legends Championship",
      message: "¡Prepárate para la batalla definitiva en el torneo de League of Legends! Inscríbete ahora y demuestra tu habilidad.",
      image: LeagueOfLegends,
      onMoreInfo: () => handleMoreInfo("League of Legends"),
      linkText: "Más Información",
    },
    {
      title: "Valorant Championship",
      message: "¡El torneo de Valorant está aquí! Compete con los mejores y lleva a tu equipo a la victoria.",
      image: Valorant,
      onMoreInfo: () => handleMoreInfo("Valorant"),
      linkText: "Más Información",
    },
    {
      title: "Rocket League Championship",
      message: "¡Desafía la gravedad en el Rocket League Championship! Inscríbete y compite por premios increíbles.",
      image: RocketLeague,
      onMoreInfo: () => handleMoreInfo("Rocket League"),
      linkText: "Más Información",
    },
  ];

  const getImageForGame = (gameName) => {
    if (gameName === "League of Legends") return LeagueOfLegends;
    if (gameName === "Valorant") return Valorant;
    if (gameName === "Rocket League") return RocketLeague;
    return null;
  };

  return (
    <div className="bg-[#1AA9FF] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]"> {/* Updated background color */}
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
            <div className="relative mb-12">
              <h2 className="text-4xl font-extrabold text-center relative z-10 text-white">
                Próximos Torneos
              </h2>
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent z-0"></div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full mt-2"></div>
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
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-0"></div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-400 rounded-full mt-2"></div>
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
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent z-0"></div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 rounded-full mt-2"></div>
            </div>
            <CardsComponent
                handleCardClick={handleCardClick}
                selectedGame={selectedGame}
                filter="finished"
                inscriptionStatus={inscriptionStatus}
                selectedCard={selectedCard}
            />

            <div className="flex justify-center mt-8">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                onClick={() => {
                  setShowGeneralView(true);
                  setSelectedGame(null);
                  setShowAllTournaments(false);
                  setSelectedCard(null);
                }}
              >
                Volver
              </button>
            </div>
          </>
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

      {showSuccessPopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg w-[600px] text-center">
            <h2 className="text-3xl font-bold mb-6">¡Registro Exitoso!</h2>
            <p className="text-lg mb-6">
              ¡Felicidades! Te has inscrito correctamente al torneo. Prepárate para demostrar tus habilidades y competir contra los mejores. 
              Recuerda revisar tu correo electrónico para más detalles sobre el torneo y las próximas etapas. ¡Buena suerte!
            </p>
            {/* Removed inscription status text */}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Competition;

