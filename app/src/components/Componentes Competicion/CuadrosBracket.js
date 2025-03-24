import React from "react";

const CuadrosBracket = ({ positions }) => {
  const winnerStyle = "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold"; // New style for the winner
  const secondPlaceStyle = "bg-gradient-to-r from-gray-400 to-gray-600 text-black font-bold"; // New style for the second place
  const thirdPlaceStyle = "bg-gradient-to-r from-orange-400 to-orange-600 text-black font-bold"; // New style for the third place
  const phaseWinnerStyle = "bg-blue-500 text-black font-bold"; // New style for phase winners
  const scoreWinnerStyle = "bg-black text-white font-bold px-2 py-1 rounded-sm"; // Updated style for winner's score

  const teamNames = [
    "Dragons", "Warriors", "Titans", "Phoenix", "Sharks", "Wolves", "Eagles", "Lions",
    "Bears", "Panthers", "Hawks", "Tigers", "Bulls", "Raptors", "Knights", "Spartans",
    "Vikings", "Samurais", "Ninjas", "Pirates", "Gladiators", "Raiders", "Giants", "Cyclones",
    "Storm", "Thunder", "Lightning", "Blaze", "Inferno", "Tornadoes", "Avalanche", "Quakes"
  ];

  const dieciseisavosWinners = [
    "Dragons", "Titans", "Sharks", "Eagles", "Bears", "Hawks", "Bulls", "Knights",
    "Vikings", "Ninjas", "Gladiators", "Giants", "Storm", "Lightning", "Inferno", "Avalanche"
  ];

  const octavosWinners = [
    "Dragons", "Sharks", "Bears", "Bulls", "Vikings", "Gladiators", "Storm", "Inferno"
  ];

  const cuartosWinners = [
    "Dragons", "Bears", "Vikings", "Storm"
  ];

  const semifinalWinners = [
    "Dragons", "Storm"
  ];

  const finalWinner = "Dragons";
  const secondPlaceWinner = "Storm";
  const thirdPlaceWinner = "Bears";

  return (
    <>
      <div className="flex text-xs font-semibold mb-6 relative z-10 justify-center">
        {['DIECISEISAVOS DE FINAL', 'OCTAVOS DE FINAL', 'CUARTOS DE FINAL', 'SEMIFINALES', 'FINAL Y 3ER PUESTO', 'CAMPEÓN'].map((round, i) => (
          <div key={`round-header-${i}`} className="w-1/6 px-1">
            <div className="bg-blue-600 bg-opacity-20 py-2 text-center rounded border-l-2 border-blue-500">
              {round}
            </div>
          </div>
        ))}
      </div>
      <div className="flex relative z-10 justify-center">
        <div className="w-1/6 pr-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`dieciseisavos-${i}`} className="mb-8 relative" style={{ top: positions.dieciseisavos[i].top }}>
              <div className="mb-1 text-xs text-blue-400 pl-2">Grupo {i + 1}</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${phaseWinnerStyle}`}>
                  <span className="font-bold text-white">{teamNames[i * 2]}</span> {/* Updated style */}
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150`}>
                  <span className="font-bold text-white">{teamNames[i * 2 + 1]}</span> {/* Updated style */}
                  <span className="bg-black text-white px-2 py-1 rounded-sm">{i % 2 === 0 ? 1 : 2}</span> {/* Updated style */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/6 pr-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`octavos-${i}`} className="mb-8 relative" style={{ top: positions.octavos[i].top }}>
              <div className="mb-1 text-xs text-blue-400 pl-2">Grupo {i + 1}</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${phaseWinnerStyle}`}>
                  <span className="font-bold text-white">{dieciseisavosWinners[i * 2]}</span> {/* Updated style */}
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150`}>
                  <span className="font-bold text-white">{dieciseisavosWinners[i * 2 + 1]}</span> {/* Updated style */}
                  <span className="bg-black text-white px-2 py-1 rounded-sm">{i % 2 === 0 ? 1 : 2}</span> {/* Updated style */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/6 pr-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`cuartos-${i}`} className="mb-16 relative" style={{ top: positions.cuartos[i].top }}>
              <div className="mb-1 text-xs text-blue-400 pl-2">Grupo {i + 1}</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${phaseWinnerStyle}`}>
                  <span className="font-bold text-white">{octavosWinners[i * 2]}</span> {/* Updated style */}
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150`}>
                  <span className="font-bold text-white">{octavosWinners[i * 2 + 1]}</span> {/* Updated style */}
                  <span className="bg-black text-white px-2 py-1 rounded-sm">{i % 2 === 0 ? 1 : 2}</span> {/* Updated style */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/6 pr-2">
          <div className="mt-20 mb-16 relative" style={{ top: positions.semifinales[0].top }}>
            <div className="mb-1 text-xs text-blue-400 pl-2">Semifinal 1</div>
            <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${phaseWinnerStyle}`}>
                <span className="font-bold text-white">{cuartosWinners[0]}</span> {/* Updated style */}
                <span className={scoreWinnerStyle}>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150`}>
                <span className="font-bold text-white">{cuartosWinners[1]}</span> {/* Updated style */}
                <span className="bg-black text-white px-2 py-1 rounded-sm">1</span> {/* Updated style */}
              </div>
            </div>
          </div>
          <div className="mt-60 mb-16 relative" style={{ top: positions.semifinales[1].top }}>
            <div className="mb-1 text-xs text-blue-400 pl-2">Semifinal 2</div>
            <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${phaseWinnerStyle}`}>
                <span className="font-bold text-white">{cuartosWinners[2]}</span> {/* Updated style */}
                <span className={scoreWinnerStyle}>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150`}>
                <span className="font-bold text-white">{cuartosWinners[3]}</span> {/* Updated style */}
                <span className="bg-black text-white px-2 py-1 rounded-sm">1</span> {/* Updated style */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/6 pr-2">
          <div className="mt-60 mb-16 relative" style={{ top: positions.final.top }}>
            <div className="mb-1 text-xs text-blue-400 pl-2">Final</div>
            <div className="bg-gray-800 border border-blue-600 text-xs rounded overflow-hidden shadow-lg">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 bg-opacity-80 hover:bg-gray-700 transition-colors duration-150 ${winnerStyle}`}> {/* Winner row */}
                <span className="font-bold text-white">{finalWinner}</span> {/* Updated style */}
                <span className={scoreWinnerStyle}>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${secondPlaceStyle}`}> {/* Second place row */}
                <span className="font-bold text-white">{secondPlaceWinner}</span> {/* Updated style */}
                <span className="bg-black text-white px-2 py-1 rounded-sm">1</span> {/* Updated style */}
              </div>
            </div>
          </div>
          <div className="mt-44 mb-16 relative" style={{ top: positions.tercerPuesto.top }}>
            <div className="mb-1 text-xs text-blue-400 pl-2">3er y 4to Puesto</div>
            <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${thirdPlaceStyle}`}> {/* Third place row */}
                <span className="font-bold text-white">{thirdPlaceWinner}</span> {/* Updated style */}
                <span className={scoreWinnerStyle}>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150`}>
                <span className="font-bold text-white">{cuartosWinners[3]}</span> {/* Updated style */}
                <span className="bg-black text-white px-2 py-1 rounded-sm">1</span> {/* Updated style */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/6">
          <div className="mt-16 flex flex-col items-center">
            <div className={`h-20 w-32 rounded-md flex items-center justify-center shadow-lg mb-3 ${winnerStyle}`}>
              <span className="font-bold text-center">CAMPEÓN</span>
            </div>
            <div className={`bg-gray-800 border border-blue-600 text-xs rounded overflow-hidden shadow-lg p-3 w-32 text-center ${winnerStyle}`}>
              <span className="font-bold text-black">{finalWinner}</span> {/* Changed text color to black */}
            </div>
            <div className="mt-16 w-full">
              <div className="text-xs text-blue-400 mb-2 text-center">PODIUM</div>
              <div className="flex justify-center items-end space-x-2">
                <div className={`w-20 bg-gray-800 border-t-2 border-blue-500 flex flex-col items-center pt-1 pb-8 ${secondPlaceStyle}`}>
                  <div className="text-xs mb-1">2°</div>
                  <div className="text-xs font-bold">{secondPlaceWinner}</div>
                </div>
                <div className={`w-20 bg-gray-800 border-t-2 border-cyan-500 flex flex-col items-center pt-1 pb-12 ${winnerStyle}`}>
                  <div className="text-xs mb-1">1°</div>
                  <div className="text-xs font-bold text-black">{finalWinner}</div> {/* Changed text color to black */}
                </div>
                <div className={`w-20 bg-gray-800 border-t-2 border-blue-400 flex flex-col items-center pt-1 pb-4 ${thirdPlaceStyle}`}>
                  <div className="text-xs mb-1">3°</div>
                  <div className="text-xs font-bold">{thirdPlaceWinner}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CuadrosBracket;
