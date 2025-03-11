import React, { useState, useEffect } from "react";
import Logo from "../img/Logo_OxygenGaming2.png";
import Twitter from "../img/twitter.png";
import Instagram from "../img/instagram.png";
import TikTok from "../img/tiktok.png";
import Discord from "../img/discord.png";
import LeagueOfLegends from "../img/lol.jpg";
import Valorant from "../img/valorant.jpg";
import RocketLeague from "../img/rocketleague.jpg";

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

  const handleViewAll = (game) => {
    setSelectedGame(game);
    setShowAllTournaments(false);
    setShowGeneralView(false);
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
    setTimeout(() => {
      setShowSuccessMessage(false);
      closeRegistrationModal();
    }, 3000); // Hide message after 3 seconds
  };

  const modalStyle = "bg-[#002f5f] text-white p-5 rounded-lg w-[85%] max-w-[1300px] h-[75%] overflow-hidden fixed"; // Keep this for info modal
  const buttonModalStyle = "bg-[#002f5f] text-white p-5 rounded-lg w-[40%] max-w-[500px] h-[40%] overflow-hidden fixed"; // Smaller size for button modal
  const bracketModalStyle = "bg-gray-900 text-white p-5 rounded-lg w-[90%] max-w-[1400px] h-[85%] fixed"; // Adjusted size for bracket modal
  const modalContentStyle = "overflow-y-auto h-full pr-4"; // New style for modal content
  const buttonStyle = "px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 w-full"; // Ensure buttons have the same size
  const smallButtonStyle = "px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900"; // Slightly larger button style
  const noZoomButtonStyle = "px-3 py-2 rounded-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900"; // Button style without zoom
  const panelStyle = "bg-[#003f7f] p-4 rounded-lg shadow-lg w-3/4"; // Style for panels with reduced width
  const infoTitleStyle = "text-4xl font-bold mb-4 text-center relative"; // New style for info modal title
  const underlineAnimation = "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-yellow-400 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100"; // New underline animation
  const zoomAnimation = "animate-pulse"; // New animation class
  const bounceAnimation = "animate-bounce"; // New animation class
  const hoverEffect = "transition-transform transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 duration-500"; // Updated hover effect class with slower duration

  const defaultRounds = [256, 128, 64, 32, 16, 8, 4, 2, 1];

  const Bracket = ({ bracketSize = 8, matchStyle = {} }) => {
    const rounds = defaultRounds.filter(rounds => rounds <= bracketSize);
    return (
      <div className="flex">
        {rounds.map((round, index) => (
          <div key={index} className="flex flex-col flex-grow">
            {Array.from({ length: round / 2 }).map((_, matchIndex) => (
              <div key={matchIndex} className="flex flex-col justify-center m-2 p-1 flex-grow relative">
                <div className="relative" style={matchStyle}></div>
                <div className="absolute left-0 top-1/2 w-2 border-l-2 border-purple-500"></div>
                {matchIndex % 2 === 0 && (
                  <div className="absolute right-0 top-1/2 w-2 h-1/2 border-t-2 border-r-2 border-purple-500"></div>
                )}
                {matchIndex % 2 !== 0 && (
                  <div className="absolute right-0 bottom-1/2 w-2 h-1/2 border-b-2 border-r-2 border-purple-500"></div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const TournamentBracket = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Primera ronda */}
          <div className="space-y-8">
            <div className="p-4 bg-gray-800 rounded-lg text-center">Jugador 1</div>
            <div className="p-4 bg-gray-800 rounded-lg text-center">Jugador 2</div>
            <div className="p-4 bg-gray-800 rounded-lg text-center">Jugador 3</div>
            <div className="p-4 bg-gray-800 rounded-lg text-center">Jugador 4</div>
          </div>

          {/* Segunda ronda */}
          <div className="space-y-16 relative">
            <div className="p-4 bg-gray-700 rounded-lg text-center">Ganador 1</div>
            <div className="p-4 bg-gray-700 rounded-lg text-center">Ganador 2</div>
            <div className="absolute top-6 left-[-50px] h-14 w-12 border-l-2 border-b-2 border-white"></div>
            <div className="absolute top-32 left-[-50px] h-14 w-12 border-l-2 border-t-2 border-white"></div>
          </div>

          {/* Final */}
          <div className="space-y-32 relative">
            <div className="p-4 bg-gray-600 rounded-lg text-center">Finalista</div>
            <div className="absolute top-10 left-[-50px] h-28 w-12 border-l-2 border-b-2 border-white"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-blue-900 text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      {/* HEADER */}
      <header className="flex justify-between items-center px-4 py-4 md:px-6">
        <a href="/" className="w-[70px] h-[70px] mr-8">
          <img src={Logo} alt="OxygenGaming Logo" className="w-full h-full" />
        </a>
        <nav className="flex items-center gap-2">
          <a href="/" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Inicio</a>
          <a href="/competition" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600">Competiciones</a>
          <a href="/content" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
          <a href="/missions" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
          <a href="/rewards" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>
        </nav>
        <div className="flex items-center gap-2 ml-auto">
          <a href="/register" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-2 border-white bg-transparent">Registrarse</a>
          <a href="/login" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-blue-600 ml-4">Iniciar Sesión</a>
        </div>
      </header>

      {/* BANNER */}
      <div className="w-11/12 mx-auto h-80 bg-cover bg-center rounded-lg transition-all duration-1000" style={{ backgroundImage: `url(${images[currentImage].src})` }}>
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
        </div>
      </div>

      {/* TITLE */}
      <div className="w-11/12 mx-auto mt-8"> {/* Increased margin-top */}
        <h1 className="text-5xl font-extrabold text-yellow-400 text-center">Competiciones</h1> {/* Highlighted title */}
      </div>

      {/* BUTTONS */}
      <div className="w-11/12 mx-auto mt-6 flex justify-center gap-4"> {/* Increased margin-top */}
        <button
          className={`px-4 py-2 text-white border-2 rounded-lg transition-all ${showGeneralView && !showAllTournaments && !selectedGame ? 'bg-green-500 text-black' : 'border-green-500 hover:bg-green-500 hover:text-black'}`}
          onClick={() => {
            setShowGeneralView(true);
            setShowAllTournaments(false);
            setSelectedGame(null); // Reset selected game
          }}
        >
          Vista General
        </button>
        <button
          className={`px-4 py-2 text-white border-2 rounded-lg transition-all ${showAllTournaments && !selectedGame ? 'bg-blue-500 text-black' : 'border-blue-500 hover:bg-blue-500 hover:text-black'}`}
          onClick={() => {
            setShowAllTournaments(true);
            setShowGeneralView(false);
            setSelectedGame(null); // Reset selected game
          }}
        >
          Torneos 
        </button>
      </div>

      <div className="container mx-auto p-5">
        {showGeneralView && !showAllTournaments && !selectedGame && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('League of Legends Tournament')}>
              <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-[#4ade80] text-2xl font-bold mb-2">League of Legends Tournament</h2> {/* Highlighted tournament title */}
              <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
              <div className="flex items-center mb-2">
                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                <span className="text-green-500">Inscripciones abiertas</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Jugadores Inscritos: 78</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleViewAll('League of Legends'); }} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            </div>

            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Valorant Tournament')}>
              <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Valorant Tournament</h2> {/* Highlighted tournament title */}
              <p className="text-sm mb-2">Fecha de Inicio: 15/12/2023</p>
              <div className="flex items-center mb-2">
                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                <span className="text-green-500">Activo</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Jugadores Inscritos: 200</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleViewAll('Valorant'); }} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            </div>

            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Rocket League Tournament')}>
              <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Rocket League Tournament</h2> {/* Highlighted tournament title */}
              <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
              <div className="flex items-center mb-2">
                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                <span className="text-green-500">Activo</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Jugadores Inscritos: 120</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleViewAll('Rocket League'); }} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            </div>
          </div>
        )}

        {showAllTournaments && !selectedGame && (
          <>
            {/* League of Legends */}
            <h2 className="text-2xl mb-4">League of Legends</h2>
            <button onClick={() => handleViewAll('League of Legends')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('League of Legends Tournament 1')}>
                <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">League of Legends Tournament 1</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Inscripciones abiertas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 78</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('League of Legends Tournament 2')}>
                <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">League of Legends Tournament 2</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 05/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 150</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('League of Legends Tournament 3')}>
                <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">League of Legends Tournament 3</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 10/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 120</span>
                </div>
              </div>
            </div>

            {/* Valorant */}
            <h2 className="text-2xl mb-4">Valorant</h2>
            <button onClick={() => handleViewAll('Valorant')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Valorant Tournament 1')}>
                <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Valorant Tournament 1</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 15/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Inscripciones abiertas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 200</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Valorant Tournament 2')}>
                <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Valorant Tournament 2</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 250</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Valorant Tournament 3')}>
                <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Valorant Tournament 3</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 25/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 300</span>
                </div>
              </div>
            </div>

            {/* Rocket League */}
            <h2 className="text-2xl mb-4">Rocket League</h2>
            <button onClick={() => handleViewAll('Rocket League')} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Rocket League Tournament 1')}>
                <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Rocket League Tournament 1</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Inscripciones abiertas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 120</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Rocket League Tournament 2')}>
                <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Rocket League Tournament 2</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 25/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 150</span>
                </div>
              </div>
              <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Rocket League Tournament 3')}>
                <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Rocket League Tournament 3</h2> {/* Highlighted tournament title */}
                <p className="text-sm mb-2">Fecha de Inicio: 30/12/2023</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className="text-green-500">Activo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: 180</span>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedGame && (
          <>
            <h2 className="text-3xl font-bold mb-4">{selectedGame}</h2> {/* Highlighted selected game title */}
            <div className="mb-10">
              <h3 className="text-xl mb-2">Torneos Próximos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Add upcoming tournaments for the selected game */}
                {/* Example: */}
                <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick(`${selectedGame} Tournament 1`)}>
                  <img src={selectedGame === 'League of Legends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h2 className="text-[#4ade80] text-2xl font-bold mb-2">{selectedGame} Tournament 1</h2> {/* Highlighted tournament title */}
                  <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
                  <div className="flex items-center mb-2">
                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                    <span className="text-green-500">Inscripciones abiertas</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Jugadores Inscritos: 78</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-xl mb-2">Torneos en Curso</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Add ongoing tournaments for the selected game */}
                {/* Example: */}
                <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick(`${selectedGame} Tournament 2`)}>
                  <img src={selectedGame === 'League of Legends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h2 className="text-[#4ade80] text-2xl font-bold mb-2">{selectedGame} Tournament 2</h2> {/* Highlighted tournament title */}
                  <p className="text-sm mb-2">Fecha de Inicio: 05/12/2023</p>
                  <div className="flex items-center mb-2">
                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                    <span className="text-green-500">Activo</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Jugadores Inscritos: 150</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-xl mb-2">Torneos Finalizados</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Add finished tournaments for the selected game */}
                {/* Example: */}
                <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg opacity-50" onClick={() => handleCardClick(`${selectedGame} Tournament 3`)}> {/* Add opacity-50 class */}
                  <img src={selectedGame === 'LeagueOfLegends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h2 className="text-[#4ade80] text-2xl font-bold mb-2">{selectedGame} Tournament 3</h2> {/* Highlighted tournament title */}
                  <p className="text-sm mb-2">Fecha de Inicio: 10/12/2023</p>
                  <div className="flex items-center mb-2">
                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                    <span className="text-red-500">Finalizado</span> {/* Change text color to red */}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Jugadores Inscritos: 120</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal for buttons */}
      {selectedCard === 'League of Legends Tournament' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'Valorant Tournament' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'Rocket League Tournament' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'League of Legends Tournament 1' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'League of Legends Tournament 2' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'League of Legends Tournament 3' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button>
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'Valorant Tournament 1' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'Valorant Tournament 2' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'Valorant Tournament 3' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'Rocket League Tournament 1' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'Rocket League Tournament 2' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}
      {selectedCard === 'Rocket League Tournament 3' && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={buttonModalStyle}>
            <h2 className="text-3xl font-bold mb-8 text-center">{modalContent}</h2> {/* Highlighted modal content title */}
            <div className="flex flex-col gap-6 mt-4">
              <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
              <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button> {/* Updated button */}
              <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button> {/* Updated button */}
            </div>
            <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
          </div>
        </div>
      )}

      {showInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={modalStyle}>
            <div className={modalContentStyle}>
              <img src={selectedCard === 'League of Legends Tournament' ? LeagueOfLegends : selectedCard === 'Valorant Tournament' ? Valorant : RocketLeague} alt={selectedCard} className="w-full h-48 object-cover rounded-lg mb-4" /> {/* Adjust height to 48 */}
              <h2 className={infoTitleStyle}>{modalContent}</h2> {/* Highlighted modal content title without underline animation */}
              <div className="flex flex-col items-center w-full text-center"> {/* Center align all panels */}
                <h3 className="text-2xl font-semibold">Información General</h3> {/* Highlighted section title without color */}
                <div className={`${panelStyle} text-left mb-4`}> {/* Align text to the left and add margin-bottom */}
                  <ul className="list-disc list-inside ml-5"> {/* Use list for better visual presentation */}
                    <li>Organizador: OxygenGaming</li>
                    <li>Plataforma: PC</li>
                    <li>Juego: Valorant</li>
                    <li>Fecha de inicio: 21/03/2025</li>
                    <li>Inscripciones: 09/03/2025 - 20/03/2025</li>
                    <li>Formato: Eliminación directa</li>
                    <li>Requisitos de participación: 16 años o más</li>
                  </ul>
                </div>
                <h3 className="text-2xl font-semibold">Reglamento</h3> {/* Highlighted section title without color */}
                <div className={`${panelStyle} text-left mb-4`}> {/* Align text to the left and add margin-bottom */}
                  <ul className="list-disc list-inside ml-5"> {/* Use list for better visual presentation */}
                    <li>Juego limpio - No se permite el uso de hacks, trampas o cualquier forma de conducta antideportiva.</li>
                    <li>Respeto entre jugadores - Cualquier tipo de comportamiento ofensivo, racista o agresivo resultará en descalificación.</li>
                    <li>Puntualidad - Los jugadores deben estar presentes en sus partidas según el horario establecido.</li>
                    <li>Desconexiones y problemas técnicos - Se dará un tiempo de gracia en caso de desconexiones involuntarias.</li>
                    <li>Decisiones de los organizadores - Cualquier situación no contemplada será resuelta por el equipo de administración del torneo.</li>
                  </ul>
                </div>
                <h3 className="text-2xl font-semibold">Estado de inscripción</h3> {/* Highlighted section title without color */}
                <div className={`${panelStyle} text-center mb-4`}> {/* Center align text and add margin-bottom */}
                  <p className="text-red-500 font-bold">No inscrito</p> {/* Highlighted and colored text */}
                  <p>¡Prepárate para la batalla y demuestra que eres el mejor! Inscríbete ahora y sé parte de esta competencia épica. Para más información, síguenos en nuestras redes sociales y mantente al tanto de todas las novedades.</p>
                  <button className={`${noZoomButtonStyle} ${hoverEffect} w-1/4 mt-4`}>Inscribirse</button> {/* Apply hover effect */}
                </div>
                <h3 className="text-2xl font-semibold">Formato del torneo</h3> {/* Highlighted section title without color */}
                <div className={`${panelStyle} text-left mb-4`}> {/* Align text to the left and add margin-bottom */}
                  <ul className="list-disc list-inside ml-5"> {/* Use list for better visual presentation */}
                    <p className="font-bold">Rondas Preliminares:</p> {/* Highlighted text */}
                    <li>Todos los participantes competirán en rondas preliminares.</li>
                    <li>Se jugará un sistema de puntos o eliminación simple según el juego.</li>
                    <li>Los mejores jugadores o equipos avanzarán a la siguiente fase.</li>
                    <p className="font-bold">Eliminación Directa:</p> {/* Highlighted text */}
                    <li>Los clasificados se enfrentarán en un formato de eliminación directa.</li>
                    <li>Cada partida será al mejor de [X] rondas/mapas según la mecánica del juego.</li>
                    <li>Solo los más fuertes avanzarán a la Gran Final.</li>
                    <p className="font-bold">Gran Final:</p> {/* Highlighted text */}
                    <li>Los dos mejores jugadores o equipos se enfrentarán en un enfrentamiento definitivo.</li>
                    <li>El formato será al mejor de [X] partidas para definir al campeón.</li>
                    <li>Se transmitirá en vivo con comentaristas y cobertura en nuestras redes sociales.</li>
                  </ul>
                </div>
                <h3 className="text-2xl font-semibold">Redes Sociales</h3> {/* Highlighted section title without color */}
                <div className={`${panelStyle} text-center mb-4`}> {/* Center align text */}
                  <p>¡Bienvenidos al Torneo de OxygenGaming! Bienvenidos al torneo definitivo donde la habilidad, la estrategia y la adrenalina se combinan en una competencia sin igual. OxygenGaming te trae un evento épico donde los mejores jugadores se enfrentarán por la gloria, la competencia y, por supuesto, increíbles premios.</p>
                  <div className="flex gap-2 justify-center"> {/* Center align icons */}
                    <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noreferrer">
                      <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noreferrer">
                      <img src={Instagram} alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="https://www.tiktok.com/@oxg_esports?lang=es" target="_blank" rel="noreferrer">
                      <img src={TikTok} alt="TikTok" className="w-6 h-6" />
                    </a>
                    <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noreferrer">
                      <img src={Discord} alt="Discord" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold">Premios</h3> {/* Highlighted section title without color */}
                <div className={`${panelStyle} text-center mb-4`}> {/* Center align text */}
                  <p>Los mejores jugadores no solo ganarán respeto y reconocimiento, sino también premios exclusivos:</p>
                  <p className="text-4xl font-bold text-yellow-400">🥇 1er Lugar: 100$</p> {/* Highlight 1st place prize */}
                  <p className="text-3xl font-semibold text-gray-300">🥈 2do Lugar: 50$</p> {/* Highlight 2nd place prize */}
                  <p className="text-2xl font-medium text-gray-500">🥉 3er Lugar: 25$</p> {/* Highlight 3rd place prize */}
                </div>
              </div>
              <button onClick={closeInfoModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={modalStyle}>
            <div className={modalContentStyle}>
              <img src={selectedCard === 'League of Legends Tournament' ? LeagueOfLegends : selectedCard === 'Valorant Tournament' ? Valorant : RocketLeague} alt={selectedCard} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className={infoTitleStyle}>{modalContent}</h2>
              <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                <input type="text" placeholder="Nombre de usuario" className="p-2 rounded-lg bg-gray-800 text-white w-3/4" /> {/* Reduced width */}
                <input type="email" placeholder="Correo electrónico" className="p-2 rounded-lg bg-gray-800 text-white w-3/4" /> {/* Reduced width */}
                <input type="text" placeholder="Nombre del equipo" className="p-2 rounded-lg bg-gray-800 text-white w-3/4" /> {/* Reduced width */}
                <input type="text" placeholder="Representante del equipo" className="p-2 rounded-lg bg-gray-800 text-white w-3/4" /> {/* Reduced width */}
                <button type="submit" className="px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 w-1/5">Enviar</button> {/* Smaller button */}
              </form>
              <button onClick={closeRegistrationModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out scale-105">
            <h2 className="text-4xl font-bold mb-4">¡Registro Exitoso!</h2>
            <p className="text-lg">Tu inscripción ha sido completada correctamente.</p>
          </div>
        </div>
      )}

      {showBracket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={bracketModalStyle}>
            <div className="relative z-10 mb-8 border-b border-blue-500 pb-3">
              <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 drop-shadow-md">
                OXYGENGAMING - TOURNAMENT BRACKET
              </h1>
              <button onClick={closeBracket} className="absolute top-2 right-2 text-white text-2xl font-bold">X</button> {/* Added close button */}
            </div>
            <div className="flex text-xs font-semibold mb-6 relative z-10">
              {['CUARTOS DE FINAL', 'SEMIFINALES', 'FINAL Y 3ER PUESTO', 'CAMPEÓN'].map((round, i) => (
                <div key={`round-header-${i}`} className="w-1/4 px-1">
                  <div className="bg-blue-600 bg-opacity-20 py-2 text-center rounded border-l-2 border-blue-500">
                    {round}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex relative z-10">
              <div className="w-1/4 pr-2">
                <div className="mb-16 relative">
                  <div className="mb-1 text-xs text-blue-400 pl-2">Grupo 1</div>
                  <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                    <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-cyan-400">TEAM 1</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-cyan-400">TEAM 2</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/4 w-3 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute right-0 top-1/4 w-px h-20 bg-blue-500"></div> {/* Increased height */}
                </div>
                <div className="mb-16 relative">
                  <div className="mb-1 text-xs text-blue-400 pl-2">Grupo 2</div>
                  <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                    <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-cyan-400">TEAM 3</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-cyan-400">TEAM 4</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 w-3 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute right-0 bottom-1/2 w-px h-20 bg-blue-500"></div> {/* Moved line between Team 3 and Team 4 */}
                </div>
                <div className="mb-16 relative">
                  <div className="mb-1 text-xs text-blue-400 pl-2">Grupo 3</div>
                  <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                    <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-cyan-400">TEAM 5</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-cyan-400">TEAM 6</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    
                  </div>
                  <div className="absolute right-0 top-1/4 w-6 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute right-0 top-1/4 w-px h-20 bg-blue-500"></div> {/* Increased height */}
                </div>
                <div className="mb-16 relative">
                  <div className="mb-1 text-xs text-blue-400 pl-2">Grupo 4</div>
                  <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                    <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-cyan-400">TEAM 7</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-cyan-400">TEAM 8</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                  </div>
                  <div className="absolute right-0 top-3/4 w-6 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute right-0 top-1/4 w-px h-20 bg-blue-500"></div> {/* Increased height */}
                </div>
              </div>
              <div className="w-1/4 pr-2">
                <div className="mt-20 mb-16 relative">
                  <div className="mb-1 text-xs text-blue-400 pl-2">Semifinal 1</div>
                  <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                    <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-gray-400">Ganador Grupo 1</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-gray-400">Ganador Grupo 2</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 w-3 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute left-0 top-1/2 w-2 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute right-0 top-1/2 w-px h-[calc(50%+120px)] bg-blue-500"></div> {/* Increased height */}
                </div>
                <div className="mt-60 mb-16 relative"> {/* Increased margin-top to move Semifinal 2 further down */}
                  <div className="mb-1 text-xs text-blue-400 pl-2">Semifinal 2</div> {/* Moved Semifinal 2 here */}
                  <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                    <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-gray-400">Ganador Grupo 3</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-gray-400">Ganador Grupo 4</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 w-3 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute left-0 top-1/2 w-5 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute right-0 bottom-1/2 w-px h-[calc(50%+120px)] bg-blue-500"></div> {/* Increased height */}
                </div>
              </div>
              <div className="w-1/4 pr-2">
                <div className="mt-60 mb-16 relative">
                  <div className="mb-1 text-xs text-blue-400 pl-2">Final</div>
                  <div className="bg-gray-800 border border-blue-600 text-xs rounded overflow-hidden shadow-lg">
                    <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 bg-opacity-80 hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-gray-400">Ganador SF1</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-gray-400">Ganador SF2</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                  </div>
                  
                  <div className="absolute right-0 top-1/2 w-0 h-px bg-blue-500"></div> {/* Increased width */}
                  <div className="absolute left-0 top-1/2 w-0 h-px bg-blue-500"></div> {/* Increased width */}
                </div>
                <div className="mt-44 mb-16 relative">
                  <div className="mb-1 text-xs text-blue-400 pl-2">3er y 4to Puesto</div>
                  <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                    <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-gray-400">Perdedor SF1</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                    <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                      <span className="font-bold text-gray-400">Perdedor SF2</span>
                      <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <div className="mt-16 flex flex-col items-center">
                  <div className="h-20 w-32 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-md flex items-center justify-center shadow-lg mb-3">
                    <span className="font-bold text-white text-center">CAMPEÓN</span>
                  </div>
                  <div className="bg-gray-800 border border-blue-600 text-xs rounded overflow-hidden shadow-lg p-3 w-32 text-center">
                    <span className="font-bold text-gray-400">TBD</span>
                  </div>
                  <div className="mt-16 w-full">
                    <div className="text-xs text-blue-400 mb-2 text-center">PODIUM</div>
                    <div className="flex justify-center items-end space-x-2">
                      <div className="w-20 bg-gray-800 border-t-2 border-blue-500 flex flex-col items-center pt-1 pb-8">
                        <div className="text-xs mb-1">2°</div>
                        <div className="text-xs font-bold">TBD</div>
                      </div>
                      <div className="w-20 bg-gray-800 border-t-2 border-cyan-500 flex flex-col items-center pt-1 pb-12">
                        <div className="text-xs mb-1">1°</div>
                        <div className="text-xs font-bold">TBD</div>
                      </div>
                      <div className="w-20 bg-gray-800 border-t-2 border-blue-400 flex flex-col items-center pt-1 pb-4">
                        <div className="text-xs mb-1">3°</div>
                        <div className="text-xs font-bold">TBD</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="w-full bg-neutral-900">
        <div id="contenido_footer" className="flex justify-between items-start gap-4 p-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">OXYGENGAMING</span>
            <div className="flex flex-col gap-4">
              <a href="https://oxygengaming.es/sobre-nosotros/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">SOBRE NOSOTROS</a>
              <a href="https://oxygengaming.es/patrocinadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">PATROCINADORES</a>
              <a href="https://oxygengaming.es/noticias/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">NOTICIAS</a>
              <a href="https://oxygengaming.es/tienda/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">TIENDA</a>
              <a href="https://oxygengaming.es/oxy-club/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">OXYCLUB</a>
              <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CREADORES</a>
              <a href="https://oxygengaming.es/contacto/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CONTACTO</a>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w=[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">EQUIPOS</span>
            <div className="flex flex-col gap-4">
              <a href="https://oxygengaming.es/equipos/#leagueoflegends" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">LEAGUE OF LEGENDS</a>
              <a href="https://oxygengaming.es/equipos/#valorant" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">VALORANT</a>
              <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CREADORES</a>
            </div>
          </div>

          <div id="redes_sociales" className="flex flex-col items-center text-center flex-1 min-w-[250px]">
            <a href="https://oxygengaming.es/">
              <img id="logo_footer" src="https://oxygengaming.es/wp-content/uploads/2022/06/Logo-OG200.png" alt="Oxygen Gaming Logo" className="w-[80%] max-w-[200px] mb-4" />
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={Twitter} alt="Twitter" className="w-full h-full rounded-full" />
              </a>
              <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={Instagram} alt="Instagram" className="w-full h-full rounded-full" />
              </a>
              <a href="https://www.tiktok.com/@oxg_esports?lang=es" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={TikTok} alt="TikTok" className="w-full h-full rounded-full" />
              </a>
              <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={Discord} alt="Discord" className="w-full h-full rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Competition;

