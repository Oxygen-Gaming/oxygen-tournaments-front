import React from "react";

const Bracket = ({ closeBracket }) => {
  const bracketModalStyle = "bg-gray-900 text-white p-5 rounded-lg w-[90%] max-w-[1400px] h-[85%] fixed";
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={bracketModalStyle}>
        <div className="relative z-10 mb-8 border-b border-blue-500 pb-3">
          <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 drop-shadow-md">
            OXYGENGAMING - TOURNAMENT BRACKET
          </h1>
          <button onClick={closeBracket} className="absolute top-2 right-2 text-white text-2xl font-bold">X</button>
        </div>
        <div className="flex text-xs font-semibold mb-6 relative z-10">
          {['CUARTOS DE FINAL', 'SEMIFINALES', 'FINAL Y 3ER PUESTO', 'CAMPEÓN'].map((round, i) => (
            <div key={`round-header-${i}`} className="w-1/4 px-1">
              <div className="bg-blue-600 bg-opacity-20 py-2 text-center rounded border-l-2 border-blue-500">
                {round}
              </div>
            </div>
          ))}
        </div>
        <div className="flex relative z-10">
          <div className="w-1/4 pr-2">
            <div className="mb-16 relative">
              <div className="mb-1 text-xs text-blue-400 pl-2">Grupo 1</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-cyan-400">TEAM 1</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
                <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-cyan-400">TEAM 2</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/4 w-3 h-px bg-blue-500"></div>
              <div className="absolute right-0 top-1/4 w-px h-20 bg-blue-500"></div>
            </div>
            <div className="mb-16 relative">
              <div className="mb-1 text-xs text-blue-400 pl-2">Grupo 2</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-cyan-400">TEAM 3</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
                <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-cyan-400">TEAM 4</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 w-3 h-px bg-blue-500"></div>
              <div className="absolute right-0 bottom-1/2 w-px h-20 bg-blue-500"></div>
            </div>
            <div className="mb-16 relative">
              <div className="mb-1 text-xs text-blue-400 pl-2">Grupo 3</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-cyan-400">TEAM 5</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
                <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-cyan-400">TEAM 6</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/4 w-6 h-px bg-blue-500"></div>
              <div className="absolute right-0 top-1/4 w-px h-20 bg-blue-500"></div>
            </div>
            <div className="mb-16 relative">
              <div className="mb-1 text-xs text-blue-400 pl-2">Grupo 4</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-cyan-400">TEAM 7</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
                <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-cyan-400">TEAM 8</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
              </div>
              <div className="absolute right-0 top-3/4 w-6 h-px bg-blue-500"></div>
              <div className="absolute right-0 top-1/4 w-px h-20 bg-blue-500"></div>
            </div>
          </div>
          <div className="w-1/4 pr-2">
            <div className="mt-20 mb-16 relative">
              <div className="mb-1 text-xs text-blue-400 pl-2">Semifinal 1</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-gray-400">Ganador Grupo 1</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
                <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-gray-400">Ganador Grupo 2</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 w-3 h-px bg-blue-500"></div>
              <div className="absolute left-0 top-1/2 w-2 h-px bg-blue-500"></div>
              <div className="absolute right-0 top-1/2 w-px h-[calc(50%+120px)] bg-blue-500"></div>
            </div>
            <div className="mt-60 mb-16 relative">
              <div className="mb-1 text-xs text-blue-400 pl-2">Semifinal 2</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-gray-400">Ganador Grupo 3</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
                <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-gray-400">Ganador Grupo 4</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 w-3 h-px bg-blue-500"></div>
              <div className="absolute left-0 top-1/2 w-5 h-px bg-blue-500"></div>
              <div className="absolute right-0 bottom-1/2 w-px h-[calc(50%+120px)] bg-blue-500"></div>
            </div>
          </div>
          <div className="w-1/4 pr-2">
            <div className="mt-60 mb-16 relative">
              <div className="mb-1 text-xs text-blue-400 pl-2">Final</div>
              <div className="bg-gray-800 border border-blue-600 text-xs rounded overflow-hidden shadow-lg">
                <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 bg-opacity-80 hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-gray-400">Ganador SF1</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
                <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-gray-400">Ganador SF2</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 w-0 h-px bg-blue-500"></div>
              <div className="absolute left-0 top-1/2 w-0 h-px bg-blue-500"></div>
            </div>
            <div className="mt-44 mb-16 relative">
              <div className="mb-1 text-xs text-blue-400 pl-2">3er y 4to Puesto</div>
              <div className="bg-gray-800 border border-gray-700 text-xs rounded overflow-hidden shadow-lg">
                <div className="border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-gray-400">Perdedor SF1</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
                <div className="py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150">
                  <span className="font-bold text-gray-400">Perdedor SF2</span>
                  <span className="bg-gray-900 px-2 py-1 rounded-sm">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="mt-16 flex flex-col items-center">
              <div className="h-20 w-32 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-md flex items-center justify-center shadow-lg mb-3">
                <span className="font-bold text-white text-center">CAMPEÓN</span>
              </div>
              <div className="bg-gray-800 border border-blue-600 text-xs rounded overflow-hidden shadow-lg p-3 w-32 text-center">
                <span className="font-bold text-gray-400">TBD</span>
              </div>
              <div className="mt-16 w-full">
                <div className="text-xs text-blue-400 mb-2 text-center">PODIUM</div>
                <div className="flex justify-center items-end space-x-2">
                  <div className="w-20 bg-gray-800 border-t-2 border-blue-500 flex flex-col items-center pt-1 pb-8">
                    <div className="text-xs mb-1">2°</div>
                    <div className="text-xs font-bold">TBD</div>
                  </div>
                  <div className="w-20 bg-gray-800 border-t-2 border-cyan-500 flex flex-col items-center pt-1 pb-12">
                    <div className="text-xs mb-1">1°</div>
                    <div className="text-xs font-bold">TBD</div>
                  </div>
                  <div className="w-20 bg-gray-800 border-t-2 border-blue-400 flex flex-col items-center pt-1 pb-4">
                    <div className="text-xs mb-1">3°</div>
                    <div className="text-xs font-bold">TBD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bracket;

