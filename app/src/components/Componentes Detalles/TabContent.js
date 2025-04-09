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
            <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Formato</h3>
              <p className="text-sm">
                {selectedCard[1] === "Valorant" || selectedCard[1] === "League of Legends"
                  ? "5vs5"
                  : selectedCard[1] === "Rocket League"
                  ? "1vs1 y 3vs3"
                  : "Formato desconocido"}
              </p> {/* Updated format */}
              <p className="text-sm">Partidas al mejor de 3</p>
            </div>
            {/* Jugadores */}
            <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Equipos</h3>
              <p className="text-sm">
                Jugadores Registrados:{" "}
                <span className="font-bold text-white">{registeredPlayers}</span>
              </p>
              <p className="text-sm">
                Jugadores Confirmados:{" "}
                <span className="font-bold text-white">{confirmedPlayers}</span>
              </p>
              <p className="text-sm">Limite de Equipos: 32</p>
            </div>
            {/* Ajustes de partida */}
            <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Ajustes de partida</h3>
              <p className="text-sm">Mapa: Howling Abyss</p>
              <p className="text-sm">Modo de juego: Destroy Nexus</p>
              <p className="text-sm">Pick Mode: Blind Pick</p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Información */}
            <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Reglas</h3> {/* Updated title size */}
              <ul className="list-disc list-inside text-gray-300">
                <li>Juego limpio: No se permite el uso de hacks o trampas.</li>
                <li>Respeto entre jugadores: Conducta ofensiva resultará en descalificación.</li>
                <li>Puntualidad: Los jugadores deben estar presentes según el horario.</li>
                <li>Las decisiones de los organizadores son finales.</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                Torneo: League of Legends Championship - Fecha: 30/03/2025
              </p> {/* Added tournament information */}
            </div>
            {/* Premios */}
            <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Premios</h3>
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
                    <td className="py-2 px-4 text-gray-400 text-lg font-bold">🥈 2º Puesto </td>
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
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar Jugador
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
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar Jugador
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
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar Jugador
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
    </div>
  );
};

export default TabContent;
