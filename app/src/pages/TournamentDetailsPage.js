import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import Bracket from "@components/Componentes Competicion/BracketComponent";
import CompetitionBackground from "@imgs/Prueba Fondo Competiciones.avif"; // Import the image

const TournamentDetailsPage = () => {
  const location = useLocation();
  const selectedCard = location.state?.selectedCard;

  const [activeTab, setActiveTab] = useState("resumen");
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeMatchTab, setActiveMatchTab] = useState("juegos"); // State for toggling between "Juegos" and "Alineaciones"

  const getImageForGame = (gameName) => {
    if (gameName === "League of Legends") return LeagueOfLegends;
    if (gameName === "Valorant") return Valorant;
    if (gameName === "Rocket League") return RocketLeague;
    return null;
  };

  const handleViewMoreClickMatch1 = () => {
    setSelectedMatch({
      matchNumber: 1,
      team1: "Dragons",
      team2: "Wolves",
      globalResult: { team1: "Dragons", team2: "Wolves", team1Wins: 2, team2Wins: 0 },
    });
    setShowMatchModal(true);
    document.body.style.overflow = "hidden"; // Block scrolling
  };

  const handleViewMoreClickMatch2 = () => {
    setSelectedMatch({
      matchNumber: 2,
      team1: "Titans",
      team2: "Warriors",
      globalResult: { team1: "Titans", team2: "Warriors", team1Wins: 1, team2Wins: 2 },
      games: [
        { gameNumber: 1, team1Score: 13, team2Score: 11 },
        { gameNumber: 2, team1Score: 8, team2Score: 13 },
        { gameNumber: 3, team1Score: 9, team2Score: 13 },
      ], // Ensure only 3 games are included
    });
    setShowMatchModal(true);
    document.body.style.overflow = "hidden"; // Block scrolling
  };

  const handleViewMoreClickMatch3 = () => {
    setSelectedMatch({
      matchNumber: 3,
      team1: "Sharks",
      team2: "Eagles",
      globalResult: { team1: "Sharks", team2: "Eagles", team1Wins: 0, team2Wins: 0 },
    });
    setShowMatchModal(true);
    document.body.style.overflow = "hidden"; // Block scrolling
  };

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
    <div className="bg-[#003366] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      <Header />
      <div className="container mx-auto p-5">
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
              <p className="text-lg mt-2">En alrededor de 2 horas • {selectedCard[3]}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Unirse al torneo
              </button>
            </div>
          </div>

          {/* Pestañas */}
          <div className="flex justify-center mt-6 border-b border-gray-600">
            <button
              className={`px-4 py-2 ${activeTab === "resumen" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("resumen")}
            >
              Resumen
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "bracket" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("bracket")}
            >
              Bracket
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "partidas" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("partidas")}
            >
              Partidas
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "inscritos" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("inscritos")}
            >
              Inscripciones
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "premios" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("premios")}
            >
              Premios
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "reglas" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("reglas")}
            >
              Reglas
            </button>
          </div>

          {/* Contenido de las pestañas */}
          <div className="p-6">
            {activeTab === "resumen" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Resumen</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Formato */}
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Formato</h3>
                    <p className="text-sm">Eliminación directa</p>
                    <p className="text-sm">Partidas al mejor de 3</p>
                  </div>
                  {/* Jugadores */}
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Jugadores</h3>
                    <p className="text-sm">Registrados: 78</p>
                    <p className="text-sm">Listos: 0</p>
                    <p className="text-sm">Espacios: 32</p>
                  </div>
                  {/* Ajustes de partida */}
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Ajustes de partida</h3>
                    <p className="text-sm">Mapa: Howling Abyss</p>
                    <p className="text-sm">Modo de juego: Destroy Nexus</p>
                    <p className="text-sm">Pick Mode: Blind Pick</p>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  {/* Información */}
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Información</h3>
                    <p className="text-sm">
                      <strong>Reglas:</strong> Comenzar el juego sin tu oponente resultará en una pérdida.
                    </p>
                    <p className="text-sm">El lado derecho en el lobby es el lado rojo en el juego.</p>
                    <p className="text-sm mt-4">
                      <strong>Reportes:</strong> Puedes reportar jugadores por trampas, toxicidad o multi-cuentas.
                    </p>
                    <a href="#" className="text-blue-400 underline text-sm">Reportar jugador</a>
                  </div>
                  {/* Organizado por */}
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Organizado por</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-bold">Oxygen Gaming</p>
                        <p className="text-sm">40 mil miembros</p>
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      Bienvenido a Oxygen Gaming, la plataforma para gamers que buscan demostrar su talento en torneos de alta calidad.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "bracket" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Bracket</h2>
                <Bracket tournamentName={selectedCard[2]} />
              </div>
            )}
            {activeTab === "partidas" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Partidas</h2>
                <div className="flex justify-center items-center mb-6 gap-4">
                  <button
                    className={`w-full px-6 py-2 rounded-lg transition-all duration-300 ${
                      selectedMatch === null ? "bg-blue-500 text-white" : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                    onClick={() => setSelectedMatch(null)}
                  >
                    Todo
                  </button>
                  <button
                    className={`w-full px-6 py-2 rounded-lg transition-all duration-300 ${
                      selectedMatch !== null ? "bg-blue-500 text-white" : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                    onClick={() => setSelectedMatch({ matchNumber: 1 })}
                  >
                    En curso
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {selectedMatch === null && (
                    <>
                      {/* Match 1 */}
                      <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">Partida 1</h3>
                          <p className="text-sm text-gray-300">Sin cronograma</p>
                          <span className="text-blue-400 text-sm">Esperando</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold">2</p>
                            <p className="text-sm text-gray-300">Dragons</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold">0</p>
                            <p className="text-sm text-gray-300">Wolves</p>
                          </div>
                        </div>
                        <button
                          className="px-4 py-2 bg-[#005f99] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#0077b6]"
                          onClick={handleViewMoreClickMatch1}
                        >
                          Ver más
                        </button>
                      </div>

                      {/* Match 2 */}
                      <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">Partida 2</h3>
                          <p className="text-sm text-gray-300">Sin cronograma</p>
                          <span className="text-blue-400 text-sm">Esperando</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold">1</p>
                            <p className="text-sm text-gray-300">Titans</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold">2</p>
                            <p className="text-sm text-gray-300">Warriors</p>
                          </div>
                        </div>
                        <button
                          className="px-4 py-2 bg-[#005f99] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#0077b6]"
                          onClick={handleViewMoreClickMatch2}
                        >
                          Ver más
                        </button>
                      </div>

                      {/* Match 3 */}
                      <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">Partida 3</h3>
                          <p className="text-sm text-gray-300">Sin cronograma</p>
                          <span className="text-blue-400 text-sm">Esperando</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold">0</p>
                            <p className="text-sm text-gray-300">Sharks</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold">0</p>
                            <p className="text-sm text-gray-300">Eagles</p>
                          </div>
                        </div>
                        <button
                          className="px-4 py-2 bg-[#005f99] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#0077b6]"
                          onClick={handleViewMoreClickMatch3}
                        >
                          Ver más
                        </button>
                      </div>
                    </>
                  )}
                  {/* No Matches Available */}
                  {selectedMatch !== null && (
                    <div className="flex flex-col items-center justify-center text-center mt-10">
                      <div className="text-blue-400 text-4xl mb-4">
                        <i className="fas fa-info-circle"></i>
                      </div>
                      <h3 className="text-xl font-bold text-white">Sin partidas</h3>
                      <p className="text-gray-300 mt-2">
                        No hay partidas disponibles en este momento. Vuelve a intentarlo más tarde.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {activeTab === "inscritos" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Inscritos</h2>
                <p className="text-gray-300">
                  Actualmente, hay 78 jugadores inscritos en este torneo. ¡No pierdas la oportunidad de unirte y demostrar tu habilidad!
                </p>
              </div>
            )}
            {activeTab === "premios" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Premios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className="text-5xl text-yellow-400">🥇</span>
                    <h3 className="text-xl font-bold mt-2">1er Lugar</h3>
                    <p className="text-lg font-bold mt-2">Premio: $100</p>
                  </div>
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className="text-5xl text-gray-400">🥈</span>
                    <h3 className="text-xl font-bold mt-2">2do Lugar</h3>
                    <p className="text-lg font-bold mt-2">Premio: $50</p>
                  </div>
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className="text-5xl text-orange-400">🥉</span>
                    <h3 className="text-xl font-bold mt-2">3er Lugar</h3>
                    <p className="text-lg font-bold mt-2">Premio: $25</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "reglas" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Reglas</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Juego limpio: No se permite el uso de hacks o trampas.</li>
                  <li>Respeto entre jugadores: Conducta ofensiva resultará en descalificación.</li>
                  <li>Puntualidad: Los jugadores deben estar presentes según el horario.</li>
                  <li>Las decisiones de los organizadores son finales.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de partida */}
      {showMatchModal && selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#002f5f] text-white p-6 rounded-lg w-[90%] max-w-[600px] relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
              onClick={closeMatchModal}
            >
              X
            </button>
            <h2 className="text-3xl font-bold mb-2 text-center">Partida {selectedMatch.matchNumber}</h2>
            <div className="flex justify-center mb-4 relative">
              <div className="relative group">
                <p className="text-white border border-blue-400 px-4 py-1 rounded-full text-center bg-blue-400 text-sm relative z-10">
                  Esperando
                </p>
                <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded-lg px-14 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                  Esperando que empiece la partida. Por favor, mantente atento.
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rotate-45"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white"></i>
                </div>
                <p className="text-lg font-bold mt-2">
                  {selectedMatch?.matchNumber === 1
                    ? selectedMatch?.globalResult?.team1 || "Por decidir"
                    : selectedMatch?.team1 || "Por decidir"}
                </p>
                <p className="text-5xl font-bold mt-2">
                  {selectedMatch?.matchNumber === 1
                    ? selectedMatch?.globalResult?.team1Wins || "0"
                    : selectedMatch?.team1Score || "0"}
                </p>
              </div>
              <p className="text-2xl font-bold text-gray-300">vs</p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white"></i>
                </div>
                <p className="text-lg font-bold mt-2">
                  {selectedMatch?.matchNumber === 1
                    ? selectedMatch?.globalResult?.team2 || "Por decidir"
                    : selectedMatch?.team2 || "Por decidir"}
                </p>
                <p className="text-5xl font-bold mt-2">
                  {selectedMatch?.matchNumber === 1
                    ? selectedMatch?.globalResult?.team2Wins || "0"
                    : selectedMatch?.team2Score || "0"}
                </p>
              </div>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-center gap-8">
                <button
                  className={`text-sm font-bold pb-2 ${
                    activeMatchTab === "juegos"
                      ? "text-white border-b-4 border-blue-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveMatchTab("juegos")}
                >
                  Juegos
                </button>
                <button
                  className={`text-sm font-bold pb-2 ${
                    activeMatchTab === "alineaciones"
                      ? "text-white border-b-4 border-blue-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveMatchTab("alineaciones")}
                >
                  Alineaciones
                </button>
              </div>
              <div className="text-center mt-4">
                {activeMatchTab === "juegos" && selectedMatch?.matchNumber === 2 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4">Partidas</h3>
                    <div className="flex flex-col gap-4">
                      {selectedMatch.games.slice(0, 3).map((game) => (
                        <div
                          key={`game-${game.gameNumber}`}
                          className="relative flex flex-col items-center p-4 rounded-lg shadow-lg overflow-hidden bg-[#003f7f] text-white"
                        >
                          <img
                            src={CompetitionBackground}
                            alt="Competition Background"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black opacity-60"></div>
                          {/* Map Name */}
                          <div className="absolute top-2 left-2 bg-black bg-opacity-60 px-3 py-1 rounded text-sm font-bold z-10">
                            Mapa: Split
                          </div>
                          {/* Game Info */}
                          <div className="relative z-10 text-center">
                            <h4 className="text-2xl font-extrabold">Juego {game.gameNumber}</h4>
                            <div className="flex justify-between items-center w-full mt-4">
                              <div className="text-center">
                                <p className="text-lg font-extrabold">{selectedMatch.team1}</p>
                                <hr className="w-full border-gray-500 my-2" />
                                <p
                                  className={`text-2xl font-extrabold ${
                                    game.team1Score > game.team2Score ? "text-green-400" : "text-red-500"
                                  }`}
                                >
                                  {game.team1Score}
                                </p>
                              </div>
                              <p className="text-2xl font-extrabold mx-4">vs</p>
                              <div className="text-center">
                                <p className="text-lg font-extrabold">{selectedMatch.team2}</p>
                                <hr className="w-full border-gray-500 my-2" />
                                <p
                                  className={`text-2xl font-extrabold ${
                                    game.team2Score > game.team1Score ? "text-green-400" : "text-red-500"
                                  }`}
                                >
                                  {game.team2Score}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeMatchTab === "juegos" ? (
                  <div>
                    <h3 className="text-lg font-bold mb-4">Partidas</h3>
                    <div className="flex flex-col gap-4">
                      {/* Existing cards with darker semi-transparent black filter */}
                      {[
                        {
                          matchNumber: 1,
                          team1: "Dragons",
                          team2: "Wolves",
                          team1Score: 13,
                          team2Score: 11,
                          cardStyle: "bg-[#003f7f] text-white",
                          globalResult: { team1: "Dragons", team2: "Wolves", team1Wins: 2, team2Wins: 0 }, // Added team names
                        },
                        {
                          matchNumber: 2,
                          team1: "Dragons", // Updated to match the first game's team1
                          team2: "Wolves",  // Updated to match the first game's team2
                          team1Score: 13,
                          team2Score: 8,
                          cardStyle: "bg-[#005f99] text-white",
                          globalResult: { team1: "Dragons", team2: "Wolves", team1Wins: 2, team2Wins: 0 }, // Added team names
                        },
                        {
                          matchNumber: 3,
                          team1: "Sharks",
                          team2: "Eagles",
                          team1Score: 11,
                          team2Score: 13,
                          cardStyle: "bg-[#0077b6] text-white",
                          globalResult: { team1: "Sharks", team2: "Eagles", team1Wins: 2, team2Wins: 0 }, // Added team names
                        },
                      ].map((game, index) => (
                        <div
                          key={`game-${game.matchNumber}`}
                          className={`relative flex flex-col items-center p-4 rounded-lg shadow-lg overflow-hidden ${game.cardStyle}`}
                        >
                          <img
                            src={CompetitionBackground}
                            alt="Competition Background"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black opacity-60"></div>
                          {/* Blurred Background and "No Disputado" Text */}
                          {index === 2 && (game.globalResult.team1Wins === 2 || game.globalResult.team2Wins === 2) && (
                            <>
                              <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-20"></div>
                              <div className="absolute inset-0 flex items-center justify-center z-30">
                                <p className="text-white text-2xl font-bold">No Disputado</p>
                              </div>
                            </>
                          )}
                          {/* Map Name */}
                          <div className="absolute top-2 left-2 bg-black bg-opacity-60 px-3 py-1 rounded text-sm font-bold z-10">
                            Mapa: Split
                          </div>
                          {/* Game Info */}
                          <div className="relative z-10 text-center">
                            <h4 className="text-2xl font-extrabold">Juego {game.matchNumber}</h4>
                            <div className="flex justify-between items-center w-full mt-4">
                              <div className="text-center">
                                <p className="text-lg font-extrabold">{game.team1}</p>
                                <hr className="w-full border-gray-500 my-2" />
                                <p
                                  className={`text-2xl font-extrabold ${
                                    index === 2 && (game.globalResult.team1Wins === 2 || game.globalResult.team2Wins === 2)
                                      ? "text-white"
                                      : game.team1Score > game.team2Score
                                      ? "text-green-400"
                                      : "text-red-500"
                                  }`}
                                >
                                  {index === 2 && (game.globalResult.team1Wins === 2 || game.globalResult.team2Wins === 2)
                                    ? "0"
                                    : game.team1Score}
                                </p>
                              </div>
                              <p className="text-2xl font-extrabold mx-4">vs</p>
                              <div className="text-center">
                                <p className="text-lg font-extrabold">{game.team2}</p>
                                <hr className="w-full border-gray-500 my-2" />
                                <p
                                  className={`text-2xl font-extrabold ${
                                    index === 2 && (game.globalResult.team1Wins === 2 || game.globalResult.team2Wins === 2)
                                      ? "text-white"
                                      : game.team2Score > game.team1Score
                                      ? "text-green-400"
                                      : "text-red-500"
                                  }`}
                                >
                                  {index === 2 && (game.globalResult.team1Wins === 2 || game.globalResult.team2Wins === 2)
                                    ? "0"
                                    : game.team2Score}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-bold mb-4">Alineaciones</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {/* Team 1 */}
                      <div>
                        <h4 className="text-white text-lg font-bold mb-4">Equipo 1</h4>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={`team1-player-${index}`}
                            className="flex items-center text-white p-4 rounded-lg mb-2 shadow-lg"
                          >
                            <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                              <i className="fas fa-user text-white"></i>
                            </div>
                            <p className="text-sm font-bold ml-4">Por definir</p>
                          </div>
                        ))}
                      </div>
                      {/* Team 2 */}
                      <div>
                        <h4 className="text-white text-lg font-bold mb-4">Equipo 2</h4>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={`team2-player-${index}`}
                            className="flex items-center text-white p-4 rounded-lg mb-2 shadow-lg"
                          >
                            <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                              <i className="fas fa-user text-white"></i>
                            </div>
                            <p className="text-sm font-bold ml-4">Por definir</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TournamentDetailsPage;
