import React, { useState } from "react";
import MatchDetailsPopup from "@components/Componentes Detalles/MatchDetailsPopup";

const Dieciseisavos = ({ positions }) => {
    const winners = [
        "ShadowReign",     "Crimson Vortex",   "IronFangs",        "Phantom Legion",
        "StormCrafters",   "BlazeHowl",        "NovaStrike",       "Obsidian Wolves",
        "Thunderborn",     "FrostGuard",       "EmberBlades",      "Viper Syndicate",
        "Lunar Howl",      "Wraith Dominion",  "Solar Shroud",     "Eclipse Order"
      ];
      
      const losers = [
        "VenomCore",       "NightRaiders",     "Titan Roar",       "ChaosKin",
        "VoidHunters",     "Hellspire",        "Arctic Revenants", "FireMaul",
        "Savage Echo",     "Crystal Doom",     "GrimPulse",        "Steel Serpents",
        "DuskHollow",      "Arcane Drifters",  "Inferno Pact",     "Rogue Reign"
      ];
      

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
        <div className="w-1/4 pr-2">
            {Array.from({ length: 16 }).map((_, i) => (
                <div key={`dieciseisavos-${i}`} className="mb-8 relative ml-8" style={{ top: positions.dieciseisavos[i].top }}>
                    <button className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500">
                        Partida {i + 1}
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
                        <div className="bg-black px-3 py-2 flex justify-center">
                            <button 
                                onClick={() => handleMatchClick(i + 1, winners[i], losers[i])}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                            >
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                </div>
            ))}

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
    );
};

export default Dieciseisavos;
