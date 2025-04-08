import React from "react";

const MatchDetailsPopup = ({ matchDetails, closePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
          onClick={closePopup}
        >
          X
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center">Detalles de la Partida</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Equipos</h3>
          <div className="flex justify-between items-center mt-2">
            <div className="text-center">
              <p className="text-lg font-bold">{matchDetails.team1}</p>
              <p className="text-2xl font-bold">{matchDetails.globalResult.team1Wins}</p>
            </div>
            <p className="text-xl font-bold">vs</p>
            <div className="text-center">
              <p className="text-lg font-bold">{matchDetails.team2}</p>
              <p className="text-2xl font-bold">{matchDetails.globalResult.team2Wins}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Partidas</h3>
          <div className="space-y-4">
            {matchDetails.games.map((game, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] p-4 rounded-lg shadow-md"
              >
                <p className="text-lg font-bold">Juego {index + 1}</p>
                <p className="text-sm text-gray-300">Mapa: {game.map}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-center">
                    <p className="text-sm font-bold">{matchDetails.team1}</p>
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
                  <p className="text-lg font-bold">vs</p>
                  <div className="text-center">
                    <p className="text-sm font-bold">{matchDetails.team2}</p>
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
                </div>
                {game.undisputed && (
                  <p className="text-center text-sm text-gray-400 mt-2">
                    No disputado
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailsPopup;
