import React, { useEffect, useState } from "react";

const MatchDetailsPopup = ({ matchNumber, team1, team2, onClose }) => {
  const [activeTab, setActiveTab] = useState("juegos");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const games = [
    { map: "Split", team1Score: 13, team2Score: 11, undisputed: false },
    { map: "Ascent", team1Score: 13, team2Score: 8, undisputed: false },
    { map: "Haven", team1Score: 0, team2Score: 0, undisputed: true }
  ];

  const team1Players = ["ShadowHunter", "BlazeFury", "NightWolf", "IronClaw", "StormBreaker"];
  const team2Players = ["PhoenixRider", "ThunderStrike", "FrostBlade", "DarkViper", "SteelFang"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black text-white p-6 rounded-lg w-[90%] max-w-[600px] relative">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
          onClick={onClose}
        >
          x
        </button>
        <h2 className="text-3xl font-bold mb-2 text-center">Partida {matchNumber}</h2>
        <div className="flex justify-center mb-4">
          <p className="text-white border px-4 py-1 rounded-full text-center text-sm bg-red-500">
            Finalizado
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white"></i>
            </div>
            <p className="text-lg font-bold mt-2">{team1}</p>
            <p className="text-4xl font-bold mt-2">2</p>
          </div>
          <p className="text-xl font-bold text-gray-300">vs</p>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white"></i>
            </div>
            <p className="text-lg font-bold mt-2">{team2}</p>
            <p className="text-4xl font-bold mt-2">0</p>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4">
          <div className="flex justify-center gap-4">
            <button
              className={`text-sm font-bold pb-2 ${
                activeTab === "juegos" ? "text-white border-b-4 border-blue-500" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("juegos")}
            >
              Juegos
            </button>
            <button
              className={`text-sm font-bold pb-2 ${
                activeTab === "alineaciones" ? "text-white border-b-4 border-blue-500" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("alineaciones")}
            >
              Alineaciones
            </button>
          </div>
          <div className="text-center mt-4">
            {activeTab === "juegos" && (
              <div>
                <h3 className="text-lg font-bold mb-4">Partidas</h3>
                <div className="flex flex-col gap-3">
                  {games.map((game, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center p-2 rounded-lg shadow-lg overflow-hidden bg-[#003366] text-white h-[120px]`}
                    >
                      <div className="absolute inset-0 bg-black opacity-50"></div>
                      {game.undisputed && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
                          <p className="text-white text-lg font-bold">No Disputado</p>
                        </div>
                      )}
                      <div className="absolute top-1 left-1 bg-black bg-opacity-60 px-2 py-1 rounded text-xs font-bold">
                        Mapa: {game.map}
                      </div>
                      <div className="relative z-10 text-center">
                        <h4 className="text-lg font-bold">Juego {index + 1}</h4>
                        <div className="flex justify-between items-center w-full mt-1">
                          {!game.undisputed ? (
                            <>
                              <div className="text-center">
                                <p className="text-sm font-bold">{team1}</p>
                                <hr className="w-full border-gray-500 my-1" />
                                <p
                                  className={`text-lg font-bold ${
                                    game.team1Score > game.team2Score
                                      ? "text-green-400"
                                      : "text-red-500"
                                  }`}
                                >
                                  {game.team1Score}
                                </p>
                              </div>
                              <p className="text-lg font-bold mx-2">vs</p>
                              <div className="text-center">
                                <p className="text-sm font-bold">{team2}</p>
                                <hr className="w-full border-gray-500 my-1" />
                                <p
                                  className={`text-lg font-bold ${
                                    game.team2Score > game.team1Score
                                      ? "text-green-400"
                                      : "text-red-500"
                                  }`}
                                >
                                  {game.team2Score}
                                </p>
                              </div>
                            </>
                          ) : (
                            <p className="text-gray-400 text-sm font-bold"></p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "alineaciones" && (
              <div>
                <h3 className="text-lg font-bold mb-4">Alineaciones</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white text-lg font-bold mb-4">Equipo 1</h4>
                    {team1Players.map((player, index) => (
                      <div
                        key={`team1-player-${index}`}
                        className="flex items-center text-white p-4 rounded-lg mb-2 shadow-lg bg-[#1c1c1c]"
                      >
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white"></i>
                        </div>
                        <p className="text-sm font-bold ml-4">{player}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-4">Equipo 2</h4>
                    {team2Players.map((player, index) => (
                      <div
                        key={`team2-player-${index}`}
                        className="flex items-center text-white p-4 rounded-lg mb-2 shadow-lg bg-[#1c1c1c]"
                      >
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white"></i>
                        </div>
                        <p className="text-sm font-bold ml-4">{player}</p>
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

export default MatchDetailsPopup;
