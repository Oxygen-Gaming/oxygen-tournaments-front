import React, { useState, useEffect } from "react";
import CompetitionBackground from "@imgs/Prueba Fondo Competiciones.avif";

const MatchModal = ({ selectedMatch, closeMatchModal }) => {
  const [activeMatchTab, setActiveMatchTab] = useState("juegos");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  const games = selectedMatch.games || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-[#002f5f] text-white p-4 sm:p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
          onClick={closeMatchModal}
        >
          X
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Partida {selectedMatch.matchNumber}</h2>

        <div className="flex justify-center mb-4">
          <p
            className={`text-white border px-3 py-1 sm:px-4 rounded-full text-center text-sm ${
              selectedMatch.matchNumber === 3
                ? "border-blue-400 bg-blue-400"
                : "border-red-500 bg-red-500"
            }`}
          >
            {selectedMatch.matchNumber === 3 ? "Esperando" : "Finalizado"}
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white"></i>
            </div>
            <p className="text-base sm:text-lg font-bold mt-2">{selectedMatch.team1}</p>
            <p className="text-3xl sm:text-4xl font-bold mt-1">{selectedMatch.globalResult.team1Wins}</p>
          </div>

          <p className="text-lg sm:text-xl font-bold text-gray-300">vs</p>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white"></i>
            </div>
            <p className="text-base sm:text-lg font-bold mt-2">{selectedMatch.team2}</p>
            <p className="text-3xl sm:text-4xl font-bold mt-1">{selectedMatch.globalResult.team2Wins}</p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4">
          <div className="flex justify-center gap-4">
            <button
              className={`text-sm sm:text-base font-bold pb-2 ${
                activeMatchTab === "juegos"
                  ? "text-white border-b-4 border-blue-500"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveMatchTab("juegos")}
            >
              Juegos
            </button>
            <button
              className={`text-sm sm:text-base font-bold pb-2 ${
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
                <h3 className="text-lg sm:text-xl font-bold mb-4">Partidas</h3>
                <div className="flex flex-col gap-3">
                  {games.map((game, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-center p-3 rounded-lg shadow-lg overflow-hidden bg-[#003366] text-white h-[120px] sm:h-[130px] w-full max-w-[500px] mx-auto"
                    >
                      <img
                        src={CompetitionBackground}
                        alt="Competition Background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-50"></div>

                      {game.undisputed && (
                        <>
                          <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-20"></div>
                          <div className="absolute inset-0 flex items-center justify-center z-30">
                            <p className="text-white text-sm sm:text-base font-bold">No Disputado</p>
                          </div>
                        </>
                      )}

                      <div className="absolute top-1 left-1 bg-black bg-opacity-60 px-2 py-1 rounded text-xs font-bold z-10">
                        Mapa: {game.map}
                      </div>

                      <div className="relative z-10 text-center w-full">
                        <h4 className="text-base sm:text-lg font-bold">Juego {index + 1}</h4>
                        <div className="flex justify-between items-center w-full mt-1">
                          <div className="text-center w-1/2">
                            <p className="text-xs sm:text-sm font-bold">{selectedMatch.team1}</p>
                            <hr className="w-full border-gray-500 my-1" />
                            <p
                              className={`text-base sm:text-lg font-bold ${
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

                          <p className="text-base font-bold mx-1 sm:mx-2">vs</p>

                          <div className="text-center w-1/2">
                            <p className="text-xs sm:text-sm font-bold">{selectedMatch.team2}</p>
                            <hr className="w-full border-gray-500 my-1" />
                            <p
                              className={`text-base sm:text-lg font-bold ${
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
                <h3 className="text-lg sm:text-xl font-bold mb-4">Alineaciones</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white text-base sm:text-lg font-bold mb-4">Equipo 1</h4>
                    {["ShadowHunter", "BlazeFury", "NightWolf", "IronClaw", "StormBreaker"].map((nick, index) => (
                      <div
                        key={`team1-player-${index}`}
                        className="flex items-center text-white p-3 sm:p-4 rounded-lg mb-2 shadow-lg bg-[#1c1c1c]"
                      >
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white text-sm"></i>
                        </div>
                        <p className="text-sm sm:text-base font-bold ml-3">{nick}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-white text-base sm:text-lg font-bold mb-4">Equipo 2</h4>
                    {["PhoenixRider", "ThunderStrike", "FrostBlade", "DarkViper", "SteelFang"].map((nick, index) => (
                      <div
                        key={`team2-player-${index}`}
                        className="flex items-center text-white p-3 sm:p-4 rounded-lg mb-2 shadow-lg bg-[#1c1c1c]"
                      >
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white text-sm"></i>
                        </div>
                        <p className="text-sm sm:text-base font-bold ml-3">{nick}</p>
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
