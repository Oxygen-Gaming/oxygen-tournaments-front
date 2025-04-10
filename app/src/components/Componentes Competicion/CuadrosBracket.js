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
      <div className="flex text-xs font-semibold mb-6 relative z-10 justify-center overflow-x-auto scrollbar scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full scrollbar-track-gray-700 scrollbar-track-rounded-full">
        {['DIECISEISAVOS DE FINAL', 'OCTAVOS DE FINAL', 'CUARTOS DE FINAL', 'SEMIFINALES', 'FINAL Y 3ER PUESTO', 'CAMPEÓN'].map((round, i) => (
          <div key={`round-header-${i}`} className="w-1/5 px-1"> {/* Changed w-1/6 to w-1/5 */}
            <div className="bg-blue-600 bg-opacity-20 py-2 text-center rounded border-l-2 border-blue-500">
              {round}
            </div>
          </div>
        ))}
      </div>
      <div className="flex relative z-10 justify-center overflow-x-auto scrollbar scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full scrollbar-track-gray-700 scrollbar-track-rounded-full">
        <div className="w-1/5 pr-2"> {/* Changed w-1/6 to w-1/5 */}
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`dieciseisavos-${i}`} className="mb-8 relative ml-8" style={{ top: positions.dieciseisavos[i].top }}> {/* Correctly aligned using positions.dieciseisavos */}
              <div className="mb-1 text-xs text-blue-400 pl-2">Grupo {i + 1}</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg"> {/* Updated to match mission card style */}
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
        <div className="w-1/5 pr-2"> {/* Changed w-1/6 to w-1/5 */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`octavos-${i}`} className="mb-8 relative ml-8" style={{ top: positions.octavos[i].top }}> {/* Correctly aligned using positions.octavos */}
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
              <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from dieciseisavos to octavos */}
              <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[4rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[5rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[3rem] bg-white"></div> {/* Additional vertical line */}
              <div className="absolute left-[-2rem] top-[calc(50%+6rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              <div className="absolute left-[-2rem] bottom-[calc(50%+5rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
            </div>
          ))}
        </div>
        <div className="w-1/5 pr-2"> {/* Changed w-1/6 to w-1/5 */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`cuartos-${i}`} className="mb-16 relative ml-8" style={{ top: positions.cuartos[i].top }}> {/* Correctly aligned using positions.cuartos */}
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
              <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from octavos to cuartos */}
              <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[14rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[11rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] top-[calc(50%+5rem)] w-[1px] h-[5rem] bg-white"></div> {/* Additional vertical line */}
              <div className="absolute left-[-2rem] top-[calc(50%+14rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              <div className="absolute left-[-2rem] bottom-[calc(50%+11rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
            </div>
          ))}
        </div>
        <div className="w-1/5 pr-2"> {/* Changed w-1/6 to w-1/5 */}
          <div className="mt-20 mb-16 relative ml-8" style={{ top: positions.semifinales[0].top }}> {/* Correctly aligned using positions.semifinales[0] */}
            <div className="mb-1 text-xs text-blue-400 pl-2">Semifinal 1</div>
            <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${phaseWinnerStyle}`}>
                <span className="font-bold text-white">{cuartosWinners[0]}</span> {/* Updated style */}
                <span className={scoreWinnerStyle}>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150`}>
                <span className="font-bold text-white">{cuartosWinners[1]}</span> {/* Updated style */}
                <span className="bg-black text-white px-2 py-1 rounded-sm">1</span> {/* Updated style */}
                <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from cuartos to semifinal */}
            <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[29rem] bg-white"></div> {/* Vertical line */}
            <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[21rem] bg-white"></div> {/* Vertical line */}
            <div className="absolute left-[-1rem] top-[calc(50%+9rem)] w-[1px] h-[9rem] bg-white"></div> {/* Additional vertical line */}
            <div className="absolute left-[-2rem] top-[calc(50%+29rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              <div className="absolute left-[-2rem] bottom-[calc(50%+21rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              </div>
            </div>
            
          </div>
          <div className="mt-60 mb-16 relative ml-8" style={{ top: positions.semifinales[1].top }}> {/* Correctly aligned using positions.semifinales[1] */}
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
            <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from cuartos to semifinal */}
            <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[27rem] bg-white"></div> {/* Vertical line */}
            <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[24rem] bg-white"></div> {/* Vertical line */}
            <div className="absolute left-[-1rem] top-[calc(50%+9rem)] w-[1px] h-[9rem] bg-white"></div> {/* Additional vertical line */}
            <div className="absolute left-[-2rem] top-[calc(50%+27rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              <div className="absolute left-[-2rem] bottom-[calc(50%+24rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
           
            
          </div>
        </div>
        <div className="w-1/5 pr-2"> {/* Changed w-1/6 to w-1/5 */}
          <div className="mt-60 mb-16 relative ml-8" style={{ top: positions.final.top }}> {/* Correctly aligned using positions.final */}
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
            <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from semifinal to final */}
            <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[30rem] bg-white"></div> {/* Vertical line */}
            <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[52rem] bg-white"></div> {/* Vertical line */}
            <div className="absolute left-[-1rem] top-[calc(50%+17rem)] w-[1px] h-[32rem] bg-white"></div> {/* Additional vertical line */}
            <div className="absolute left-[-2rem] top-[calc(50%+49rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              <div className="absolute left-[-2rem] bottom-[calc(50%+52rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
           
          </div>
          <div className="mt-44 mb-16 relative ml-8" style={{ top: positions.tercerPuesto.top }}> {/* Correctly aligned using positions.tercerPuesto */}
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
        <div className="w-1/5"> {/* Changed w-1/6 to w-1/5 */}
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
