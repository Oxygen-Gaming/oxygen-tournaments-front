import React from "react";

const Matches = ({ handleViewMoreClick, setShowReportForm }) => {
  const matches = [
    { number: 1, team1: "Dragons", team2: "Wolves", date: "29/03/2025", result: "Finalizado", score1: 2, score2: 0 },
    { number: 2, team1: "Titans", team2: "Warriors", date: "30/03/2025", result: "Finalizado", score1: 1, score2: 2 },
    { number: 3, team1: "Sharks", team2: "Eagles", date: "10/04/2025", result: "Esperando", score1: 0, score2: 0 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Partidas</h2>
      <div className="grid grid-cols-1 gap-4">
        {matches.map((match) => (
          <div key={match.number} className="bg-black border-blue-500 border-b-2 text-white p-12 shadow-lg flex justify-between items-center flex-col min-[568px]:flex-row h-30 gap-8">
            <div>
              <h3 className="text-xl font-bold">Partida {match.number}</h3>
              <p className="text-sm text-gray-300">Fecha: {match.date}</p>
              <span className={match.result === "Finalizado" ? "text-red-500 text-sm" : "text-blue-400 text-sm"}>{match.result}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{match.score1}</p>
                <p className="text-sm text-gray-300">{match.team1}</p>
              </div>
              <div className="w-px h-10 bg-gray-500"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">{match.score2}</p>
                <p className="text-sm text-gray-300">{match.team2}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg" onClick={() => handleViewMoreClick(match)}>Ver más</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={() => setShowReportForm(true)}>Reportar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;