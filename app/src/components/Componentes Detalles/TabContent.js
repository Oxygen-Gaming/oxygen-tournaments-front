import React from "react";
import Bracket from "@components/Componentes Competicion/BracketComponent";
import BracketDetalladoComponente from "@components/Componentes Detalles/BracketDetalladoComponente";
import Inscripciones from "@components/Componentes Detalles/Inscripciones";
import Premios from "@components/Componentes Detalles/Premios";
import Reglas from "@components/Componentes Detalles/Reglas";

const TabContent = ({ activeTab, selectedCard, setShowMatchModal, setSelectedMatch }) => {
  const handleViewMoreClick = (match) => {
    setSelectedMatch(match);
    setShowMatchModal(true);
    document.body.style.overflow = "hidden"; // Block scrolling
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {activeTab === "resumen" && (
        <div>
          <h2 className="text-3xl font-bold mb-6">Resumen</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Formato */}
            <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Formato</h3>
              <p className="text-sm">Eliminación directa</p>
              <p className="text-sm">Partidas al mejor de 3</p>
            </div>
            {/* Jugadores */}
            <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Jugadores</h3>
              <p className="text-sm">Registrados: 78</p>
              <p className="text-sm">Listos: 0</p>
              <p className="text-sm">Espacios: 32</p>
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
            <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
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
          <div className="grid grid-cols-1 gap-4">
            {/* Match 1 */}
            <div className="bg-[#1c1c1c] text-white p-3 rounded-lg shadow-lg flex justify-between items-center h-[120px]"> {/* Reduced height */}
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
            </div>
            {/* Match 2 */}
            <div className="bg-[#1c1c1c] text-white p-3 rounded-lg shadow-lg flex justify-between items-center h-[120px]"> {/* Reduced height */}
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
            </div>
            {/* Match 3 */}
            <div className="bg-[#1c1c1c] text-white p-3 rounded-lg shadow-lg flex justify-between items-center h-[120px]"> {/* Reduced height */}
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
            </div>
          </div>
        </div>
      )}
      {activeTab === "inscritos" && <Inscripciones />}
      {activeTab === "premios" && <Premios />}
      {activeTab === "reglas" && <Reglas />}
      {activeTab === "bracket-detallado" && (
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Bracket Detallado</h2>
          <BracketDetalladoComponente />
        </div>
      )}
    </div>
  );
};

export default TabContent;
