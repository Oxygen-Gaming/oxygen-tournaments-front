import React, { useState } from "react";
import MatchDetailsPopup from "@components/Componentes Detalles/MatchDetailsPopup";

const Octavos = ({ positions }) => {

    

    const winners = [
        "ShadowReign", "IronFangs","StormCrafters","NovaStrike",
        "Thunderborn", "EmberBlades","Lunar Howl", "Solar Shroud"
    ]

    const losers = [
        "Crimson Vortex","Phantom Legion","BlazeHowl","Obsidian Wolves",
        "FrostGuard","Viper Syndicate","Wraith Dominion","Eclipse Order"
    ]



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
        <div className="w-1/5 pr-2">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={`octavos-${i}`} className="mb-8 relative ml-8" style={{ top: positions.octavos[i].top }}>
                    <button className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500">
                        Partida {i + 17}
                    </button>
                    <div className={`${getCardStyle(winners[i])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                        <div 
                            className="border-b border-gray-700 py-2 px-3 flex justify-between items-center transition-colors duration-150"
                            onMouseEnter={() => handleMouseEnter(winners[i])}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center font-bold text-white">
                                <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                                    <img 
                                        src={`/logos/${winners[i] ? winners[i].toLowerCase() : "default"}.png`} 
                                        alt={`${winners[i] || "Equipo desconocido"} logo`} 
                                        className="w-full h-full object-cover" 
                                    />

                                </div>
                                <p className="text-yellow-500">{winners[i]}</p>
                            </div>
                            <span>{i % 2 === 0 ? 2 : 1}</span>
                        </div>
                        <div 
                            className="py-2 px-3 flex justify-between items-center transition-colors duration-150"
                            onMouseEnter={() => handleMouseEnter(winners[i + 1])}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center font-bold text-white">
                                <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                                    <img 
                                        src={`/logos/${winners[i + 1] ? winners[i + 1].toLowerCase() : "default"}.png`} 
                                        alt={`${winners[i + 1] || "Equipo desconocido"} logo`} 
                                        className="w-full h-full object-cover" 
                                    />

                                </div>
                                <p className="text-blue-500">{losers[i]}</p>
                            </div>
                            <span>{i % 2 === 0 ? 1 : 2}</span>
                        </div>
                        <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                            <button 
                                onClick={() => handleMatchClick(i + 17, winners[i], losers[i])}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                            >
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                    {/* Líneas de conexión entre partidos */}
                    <div className="absolute left-[-1rem] top-[32%] w-[1rem] h-[1px] bg-white"></div>
                    <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[3rem] bg-white"></div>
                    <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[8rem] bg-white"></div>
                    <div className="absolute left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[2rem] bg-white"></div>
                    <div className="absolute left-[-2rem] top-[calc(50%+5rem)] w-[1rem] h-[1px] bg-white"></div>
                    <div className="absolute left-[-2rem] bottom-[calc(50%+8rem)] w-[1rem] h-[1px] bg-white"></div>
                </div>
            ))}

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
    );
};

export default Octavos;
