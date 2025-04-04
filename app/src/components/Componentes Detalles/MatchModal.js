import React, { useState } from "react";
import CompetitionBackground from "@imgs/Prueba Fondo Competiciones.avif";

const MatchModal = ({ selectedMatch, closeMatchModal }) => {
  const [activeMatchTab, setActiveMatchTab] = useState("juegos");

  // Use the games array from the selectedMatch object
  const games = selectedMatch.games || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#002f5f] text-white p-6 rounded-lg w-[90%] max-w-[800px] relative">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
          onClick={closeMatchModal}
        >
          X
        </button>
        <h2 className="text-3xl font-bold mb-2 text-center">Partida {selectedMatch.matchNumber}</h2>
        <div className="flex justify-center mb-4">
          <p className="text-white border border-blue-400 px-4 py-1 rounded-full text-center bg-blue-400 text-sm">
            Esperando
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white"></i>
            </div>
            <p className="text-lg font-bold mt-2">{selectedMatch.team1}</p>
            <p className="text-5xl font-bold mt-2">{selectedMatch.globalResult.team1Wins}</p>
          </div>
          <p className="text-2xl font-bold text-gray-300">vs</p>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white"></i>
            </div>
            <p className="text-lg font-bold mt-2">{selectedMatch.team2}</p>
            <p className="text-5xl font-bold mt-2">{selectedMatch.globalResult.team2Wins}</p>
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
            {activeMatchTab === "juegos" && (
              <div>
                <h3 className="text-lg font-bold mb-4">Partidas</h3>
                <div className="flex flex-col gap-4">
                  {games.map((game, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center p-4 rounded-lg shadow-lg overflow-hidden bg-[#003f7f] text-white`}
                    >
                      <img
                        src={CompetitionBackground}
                        alt="Competition Background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-60"></div>
                      {game.undisputed && (
                        <>
                          <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-20"></div>
                          <div className="absolute inset-0 flex items-center justify-center z-30">
                            <p className="text-white text-2xl font-bold">No Disputado</p>
                          </div>
                        </>
                      )}
                      <div className="absolute top-2 left-2 bg-black bg-opacity-60 px-3 py-1 rounded text-sm font-bold z-10">
                        Mapa: {game.map}
                      </div>
                      <div className="relative z-10 text-center">
                        <h4 className="text-2xl font-extrabold">Juego {index + 1}</h4>
                        <div className="flex justify-between items-center w-full mt-4">
                          <div className="text-center">
                            <p className="text-lg font-extrabold">{selectedMatch.team1}</p>
                            <hr className="w-full border-gray-500 my-2" />
                            <p
                              className={`text-2xl font-extrabold ${
                                game.undisputed
                                  ? "text-white"
                                  : game.team1Score > game.team2Score
                                  ? "text-green-400"
                                  : "text-red-500"
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
                                game.undisputed
                                  ? "text-white"
                                  : game.team2Score > game.team1Score
                                  ? "text-green-400"
                                  : "text-red-500"
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
            {activeMatchTab === "alineaciones" && (
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
  );
};

export default MatchModal;
