import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Bracket from "@components/Componentes Competicion/BracketComponent";
import Inscripciones from "@components/Componentes Detalles/Inscripciones";
import InscriptionForm from "@components/Componentes Detalles/InscriptionForm"; // Import the form as a pop-up
import ReportPlayerForm from "@components/Componentes Detalles/ReportPlayerForm"; // Import the pop-up form

const TabContent = ({ activeTab, selectedCard, setShowMatchModal, setSelectedMatch }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [registeredPlayers, setRegisteredPlayers] = useState(() => {
    // Retrieve registered players from localStorage
    const savedRegisteredPlayers = localStorage.getItem("registeredPlayers");
    return savedRegisteredPlayers ? parseInt(savedRegisteredPlayers, 10) : 126; // Default to 126
  });

  const [confirmedPlayers, setConfirmedPlayers] = useState(() => {
    // Retrieve confirmed players from localStorage
    const savedConfirmedPlayers = localStorage.getItem("confirmedPlayers");
    return savedConfirmedPlayers ? parseInt(savedConfirmedPlayers, 10) : 0;
  });

  const [showInscriptionForm, setShowInscriptionForm] = useState(false); // State to control the pop-up
  const [showReportForm, setShowReportForm] = useState(false); // State to control the pop-up

  const [confirmedPlayersList, setConfirmedPlayersList] = useState([
    { name: "Equipo A", avatar: "https://via.placeholder.com/40" },
    { name: "Equipo B", avatar: "https://via.placeholder.com/40" },
  ]); // Example confirmed players

  const [pendingPlayersList, setPendingPlayersList] = useState([
    { name: "Equipo C", avatar: "https://via.placeholder.com/40" },
  ]); // Example pending players

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleUpdateRegisteredPlayers = (newCount) => {
    setRegisteredPlayers(newCount); // Update state
    localStorage.setItem("registeredPlayers", newCount); // Save to localStorage
  };

  const handleUpdateConfirmedPlayers = (newCount) => {
    setConfirmedPlayers(newCount); // Update state
    localStorage.setItem("confirmedPlayers", newCount); // Save to localStorage
  };

  const handleJoinTournament = () => {
    setShowInscriptionForm(true); // Show the pop-up
  };

  const closeInscriptionForm = () => {
    setShowInscriptionForm(false); // Close the pop-up
  };

  const handleReportPlayer = () => {
    setShowReportForm(true); // Show the pop-up
  };

  const closeReportForm = () => {
    setShowReportForm(false); // Close the pop-up
  };

  const handleCardClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  useEffect(() => {
    // Ensure registered players are updated from localStorage on mount
    const savedRegisteredPlayers = localStorage.getItem("registeredPlayers");
    if (savedRegisteredPlayers) {
      setRegisteredPlayers(parseInt(savedRegisteredPlayers, 10));
    }

    // Ensure confirmed players are updated from localStorage on mount
    const savedConfirmedPlayers = localStorage.getItem("confirmedPlayers");
    if (savedConfirmedPlayers) {
      setConfirmedPlayers(parseInt(savedConfirmedPlayers, 10));
    }
  }, []);

  const handleViewMoreClick = (match) => {
    setSelectedMatch(match);
    setShowMatchModal(true);
    document.body.style.overflow = "hidden"; // Block scrolling
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {activeTab === "resumen" && (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Resumen</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Formato */}
            <div
              className="relative bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() =>
                handleCardClick({
                  title: "Formato",
                  content: `Este torneo sigue un formato de eliminación directa, donde los equipos compiten en rondas eliminatorias. 
                  Cada partida se juega al mejor de 3 mapas, asegurando que el mejor equipo avance a la siguiente fase.`,
                })
              }
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-bold">Haz click para ver más detalles</p>
              </div>
              <div className="group-hover:blur-sm transition duration-300">
                <h3 className="text-2xl font-extrabold mb-4 text-center">Formato</h3>
                <p className="text-lg mb-2 text-gray-300 text-center">
                  {selectedCard[1] === "Valorant" || selectedCard[1] === "League of Legends"
                    ? "5vs5"
                    : selectedCard[1] === "Rocket League"
                    ? "1vs1 y 3vs3"
                    : "Formato desconocido"}
                </p>
                <p className="text-lg text-gray-300 text-center">
                  Cada partida se juega al mejor de 3 mapas.
                </p>
              </div>
            </div>
            {/* Equipos */}
            <div
              className="relative bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() =>
                handleCardClick({
                  title: "Equipos",
                  content: `Jugadores Registrados: ${registeredPlayers}\nJugadores Confirmados: ${confirmedPlayers}\nLímite de Equipos: 32.`,
                })
              }
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-bold">Haz click para ver más detalles</p>
              </div>
              <div className="group-hover:blur-sm transition duration-300">
                <h3 className="text-2xl font-extrabold mb-4 text-center">Equipos</h3>
                <p className="text-lg mb-2 text-gray-300 text-center">
                  Jugadores Registrados: <span className="font-bold text-white">{registeredPlayers}</span>
                </p>
                <p className="text-lg mb-2 text-gray-300 text-center">
                  Jugadores Confirmados: <span className="font-bold text-white">{confirmedPlayers}</span>
                </p>
                <p className="text-lg text-gray-300 text-center">Límite de Equipos: 32</p>
              </div>
            </div>
            {/* Ajustes de partida */}
            <div
              className="relative bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() =>
                handleCardClick({
                  title: "Ajustes de partida",
                  content: `Mapa: Howling Abyss\nModo de juego: Destroy Nexus\nPick Mode: Blind Pick.`,
                })
              }
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-bold">Haz click para ver más detalles</p>
              </div>
              <div className="group-hover:blur-sm transition duration-300">
                <h3 className="text-2xl font-extrabold mb-4 text-center">Ajustes de partida</h3>
                <p className="text-lg mb-2 text-gray-300 text-center">Mapa: Howling Abyss</p>
                <p className="text-lg mb-2 text-gray-300 text-center">Modo de juego: Destroy Nexus</p>
                <p className="text-lg text-gray-300 text-center">Pick Mode: Blind Pick</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Información del torneo/Reglas */}
            <div
              className="relative bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() =>
                handleCardClick({
                  title: "Información del torneo/Reglas",
                  content: `1. Juego limpio: No se permite el uso de hacks o trampas.\n2. Respeto entre jugadores: Conducta ofensiva resultará en descalificación.\n3. Puntualidad: Los jugadores deben estar presentes según el horario.\n4. Las decisiones de los organizadores son finales.`,
                })
              }
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-bold">Haz click para ver más detalles</p>
              </div>
              <div className="group-hover:blur-sm transition duration-300">
                <h3 className="text-2xl font-extrabold mb-4 text-center">Reglas</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Juego limpio: No se permite el uso de hacks o trampas.</li>
                  <li>Respeto entre jugadores: Conducta ofensiva resultará en descalificación.</li>
                  <li>Puntualidad: Los jugadores deben estar presentes según el horario.</li>
                  <li>Las decisiones de los organizadores son finales.</li>
                </ul>
              </div>
            </div>
            {/* Premios */}
            <div
              className="relative bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() =>
                handleCardClick({
                  title: "Premios",
                  content: `1er Puesto: €300\n2º Puesto: €150\n3er Puesto: €50.`,
                })
              }
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-bold">Haz click para ver más detalles</p>
              </div>
              <div className="group-hover:blur-sm transition duration-300">
                <h3 className="text-2xl font-extrabold mb-4 text-center">Premios</h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-2 px-4 text-yellow-400 text-lg font-bold">🏆 1er Puesto</th>
                      <th className="py-2 px-4 text-gray-300">Por decidir</th>
                      <th className="py-2 px-4 text-yellow-400 text-right">€300</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4 text-gray-400 text-lg font-bold">🥈 2º Puesto</td>
                      <td className="py-2 px-4 text-gray-300">Por decidir</td>
                      <td className="py-2 px-4 text-gray-400 text-right">€150</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-orange-400 text-lg font-bold">🥉 3er Puesto</td>
                      <td className="py-2 px-4 text-gray-300">Por decidir</td>
                      <td className="py-2 px-4 text-orange-400 text-right">€50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "bracket" && (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">Bracket</h2>
          <Bracket tournamentName={selectedCard[2]} />
        </div>
      )}
      {activeTab === "partidas" && (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">Partidas</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Match 1 */}
            <div className="bg-[#1c1c1c] text-white p-3 rounded-lg shadow-lg flex justify-between items-center h-[120px]"> {/* Reduced height */}
              <div>
                <h3 className="text-xl font-bold">Partida 1</h3>
                <p className="text-sm text-gray-300">Fecha: 29/03/2025</p> {/* Fecha pasada */}
                <span className="text-red-500 text-sm">Finalizado</span> {/* Cambiado a Finalizado */}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">2</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Dragons</p>
                </div>
                <div className="w-px h-10 bg-gray-500"></div> {/* Línea en medio */}
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Wolves</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="hidden md:block px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 1,
                      team1: "Dragons",
                      team2: "Wolves",
                      globalResult: { team1Wins: 2, team2Wins: 0 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 13,
                          team2Score: 11,
                        },
                        {
                          map: "Ascent",
                          team1Score: 13,
                          team2Score: 8,
                        },
                        {
                          map: "Haven",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
                {/* Mobile Buttons */}
                <button
                  className="md:hidden px-3 py-1 text-sm bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 1,
                      team1: "Dragons",
                      team2: "Wolves",
                      globalResult: { team1Wins: 2, team2Wins: 0 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 13,
                          team2Score: 11,
                        },
                        {
                          map: "Ascent",
                          team1Score: 13,
                          team2Score: 8,
                        },
                        {
                          map: "Haven",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="md:hidden px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
              </div>
            </div>
            {/* Match 2 */}
            <div className="bg-[#1c1c1c] text-white p-3 rounded-lg shadow-lg flex justify-between items-center h-[120px]"> {/* Reduced height */}
              <div>
                <h3 className="text-xl font-bold">Partida 2</h3>
                <p className="text-sm text-gray-300">Fecha: 30/03/2025</p> {/* Fecha pasada */}
                <span className="text-red-500 text-sm">Finalizado</span> {/* Cambiado a Finalizado */}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">1</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Titans</p>
                </div>
                <div className="w-px h-10 bg-gray-500"></div> {/* Línea en medio */}
                <div className="text-center">
                  <p className="text-2xl font-bold">2</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Warriors</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="hidden md:block px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 2,
                      team1: "Titans",
                      team2: "Warriors",
                      globalResult: { team1Wins: 1, team2Wins: 2 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 13,
                          team2Score: 11,
                        },
                        {
                          map: "Ascent",
                          team1Score: 8,
                          team2Score: 13,
                        },
                        {
                          map: "Haven",
                          team1Score: 11,
                          team2Score: 13,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
                {/* Mobile Buttons */}
                <button
                  className="md:hidden px-3 py-1 text-sm bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 2,
                      team1: "Titans",
                      team2: "Warriors",
                      globalResult: { team1Wins: 1, team2Wins: 2 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 13,
                          team2Score: 11,
                        },
                        {
                          map: "Ascent",
                          team1Score: 8,
                          team2Score: 13,
                        },
                        {
                          map: "Haven",
                          team1Score: 11,
                          team2Score: 13,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="md:hidden px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
              </div>
            </div>
            {/* Match 3 */}
            <div className="bg-[#1c1c1c] text-white p-3 rounded-lg shadow-lg flex justify-between items-center h-[120px]"> {/* Reduced height */}
              <div>
                <h3 className="text-xl font-bold">Partida 3</h3>
                <p className="text-sm text-gray-300">Fecha: 10/04/2025</p> {/* Fecha futura */}
                <span className="text-blue-400 text-sm">Esperando</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Sharks</p>
                </div>
                <div className="w-px h-10 bg-gray-500"></div> {/* Línea en medio */}
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Eagles</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="hidden md:block px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 3,
                      team1: "Sharks",
                      team2: "Eagles",
                      globalResult: { team1Wins: 0, team2Wins: 0 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                        {
                          map: "Ascent",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                        {
                          map: "Haven",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
                {/* Mobile Buttons */}
                <button
                  className="md:hidden px-3 py-1 text-sm bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 3,
                      team1: "Sharks",
                      team2: "Eagles",
                      globalResult: { team1Wins: 0, team2Wins: 0 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                        {
                          map: "Ascent",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                        {
                          map: "Haven",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="md:hidden px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showReportForm && <ReportPlayerForm closeForm={closeReportForm} />}
      {activeTab === "inscritos" && (
        <Inscripciones
          confirmedPlayersList={confirmedPlayersList}
          pendingPlayersList={pendingPlayersList}
        />
      )}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{modalContent.title}</h2>
            <div className="space-y-4 text-lg">
              {modalContent.title === "Formato" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    El torneo sigue un formato de eliminación directa, diseñado para garantizar que solo los mejores equipos avancen a las etapas finales.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    Cada partida se juega al mejor de 3 mapas, lo que permite a los equipos demostrar su habilidad y adaptabilidad en diferentes escenarios.
                  </p>
                  <p>
                    Este formato asegura una competencia emocionante y justa para todos los participantes.
                  </p>
                </>
              )}
              {modalContent.title === "Equipos" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    Actualmente, hay <b>{registeredPlayers}</b> jugadores registrados para este torneo.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    De estos, <b>{confirmedPlayers}</b> jugadores han confirmado su participación.
                  </p>
                  <p>
                    El torneo tiene un límite de 32 equipos, así que asegúrate de registrarte pronto para asegurar tu lugar.
                  </p>
                </>
              )}
              {modalContent.title === "Ajustes de partida" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    El mapa seleccionado para este torneo es <b>Howling Abyss</b>, conocido por su diseño único y desafíos estratégicos.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    El modo de juego será <b>Destroy Nexus</b>, donde los equipos competirán para destruir la base enemiga.
                  </p>
                  <p>
                    El modo de selección será <b>Blind Pick</b>, lo que significa que los equipos seleccionarán sus campeones sin conocer las elecciones del oponente.
                  </p>
                </>
              )}
              {modalContent.title === "Información del torneo/Reglas" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    <b>Juego limpio:</b> No se permite el uso de hacks o trampas. Cualquier infracción resultará en descalificación inmediata.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    <b>Respeto:</b> Se espera que todos los jugadores mantengan una conducta respetuosa. El comportamiento ofensivo no será tolerado.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    <b>Puntualidad:</b> Los jugadores deben estar presentes según el horario establecido para evitar retrasos.
                  </p>
                  <p>
                    <b>Decisiones finales:</b> Las decisiones de los organizadores son definitivas y no están sujetas a apelación.
                  </p>
                </>
              )}
              {modalContent.title === "Premios" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    <b>1er Puesto:</b> El equipo ganador recibirá un premio de <b>€300</b>, junto con el reconocimiento como campeón del torneo.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    <b>2º Puesto:</b> El subcampeón será recompensado con <b>€150</b>.
                  </p>
                  <p>
                    <b>3er Puesto:</b> El equipo que termine en tercer lugar obtendrá un premio de <b>€50</b>.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Estos premios están diseñados para recompensar el esfuerzo y la dedicación de los equipos participantes.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabContent;
