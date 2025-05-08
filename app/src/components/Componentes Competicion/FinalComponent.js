import React, { useState, useRef } from "react";
import MatchDetailsPopup from "@components/Componentes Detalles/MatchDetailsPopup";

const Final = ({positions}) => {
    // Ganador final, subcampeón y tercer lugar
    const finalWinner = "ShadowReign";
    const secondPlaceWinner = "Thunderborn";
    const thirdPlaceWinner = "StormCrafters";
    const forthPlaceWinner = "Lunar Howl"

    const [highlightedTeam, setHighlightedTeam] = useState(null);
    const [showMatchDetails, setShowMatchDetails] = useState(false);
    const [selectedMatch, setSelectedMatch] = useState(null);

    const getCardStyle = (team) => {
        return `bg-gray-800 ${highlightedTeam === team ? "border-gray-600 shadow-lg" : "border-gray-700"}`;
    };

    const handleMouseEnter = (team) => {
        setHighlightedTeam(team);
    };

    const handleMouseLeave = () => {
        setHighlightedTeam(null);
    };

    const handleMatchClick = (matchNumber, team1, team2) => {
        setSelectedMatch({ matchNumber, team1, team2 });
        setShowMatchDetails(true);
    };
    return (
        <div className="w-1/4 pr-2"> {/* Final */}
          <div className="mt-20 mb-16 relative ml-8" style={{ top: positions.final.top }}>
            <button
              className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500"
            >
              Partida 31
            </button>
            <div className="bg-gray-800 text-sm rounded overflow-hidden shadow-lg w-[12rem]">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-cente bg-opacity-80 transition-colors duration-150  text-gold`}>
                <div className="flex items-center font-bold text-white">
                  <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${finalWinner.toLowerCase()}.png`} alt={`${finalWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-yellow-500">{finalWinner}</p>
                  
                </div>
                <span>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                
              >
                <div className="flex items-center font-bold text-white">
                  <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${secondPlaceWinner.toLowerCase()}.png`} alt={`${secondPlaceWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-blue-500">{secondPlaceWinner}</p>
                  
                </div>
                <span >1</span>
              </div>
              <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                <button 
                  onClick={() => handleMatchClick(31, finalWinner, secondPlaceWinner)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
            <div className="absolute left-[-1rem] top-[33%] w-[1rem] h-[1px] bg-white"></div>
            <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[30rem] bg-white"></div>
            <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[58rem] bg-white"></div>
            <div className="absolute left-[-1rem] top-[calc(50%+17rem)] w-[1px] h-[40rem] bg-white"></div>
            <div className="absolute left-[-2rem] top-[calc(50%+57rem)] w-[1rem] h-[1px] bg-white"></div>
            <div className="absolute left-[-2rem] bottom-[calc(50%+58rem)] w-[1rem] h-[1px] bg-white"></div>
          </div>
          <div className="mt-44 mb-16 relative ml-8" style={{ top: positions.tercerPuesto.top }}>
            <button
              className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500"
            >
              Partida 32
            </button>
            <div className="bg-gray-800 text-sm rounded overflow-hidden shadow-lg w-[12rem]">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                
              >
                <div className="flex items-center font-bold text-white">
                  <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${thirdPlaceWinner.toLowerCase()}.png`} alt={`${thirdPlaceWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-yellow-500">{thirdPlaceWinner}</p>
                  
                </div>
                <span >2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                
              >
                <div className="flex items-center font-bold text-white">
                  <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${finalWinner.toLowerCase()}.png`} alt={`${finalWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  
                  <p className="text-blue-500">{forthPlaceWinner}</p>
                  
                </div>
                <span>1</span>
              </div>
              <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                <button 
                  onClick={() => handleMatchClick(32, thirdPlaceWinner, forthPlaceWinner)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>

          {/* Modal para mostrar detalles del partido */}
          {/* Modal para mostrar detalles del partido */}
          {showMatchDetails && selectedMatch && (
                <MatchDetailsPopup
                    matchNumber={selectedMatch.matchNumber}
                    team1={selectedMatch.team1}
                    team2={selectedMatch.team2}
                    onClose={() => setShowMatchDetails(false)}
                />
            )}
        </div>
    )
}

export default Final;