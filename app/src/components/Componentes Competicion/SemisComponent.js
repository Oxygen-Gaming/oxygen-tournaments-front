import React, { useState } from "react";



const Semis = ({ positions }) => {
    // Equipos ganadores de las semifinales
    const semifinalesWinners = [
        "Dragons", "Storm"
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
        <div className="w-1/5 pr-2">
            {Array.from({ length: 2 }).map((_, i) => (
                <div key={`semifinales-${i}`} className="mb-8 relative ml-8" style={{ top: positions.semifinales[i].top }}>
                    <button className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500">
                        Partida {i + 29}
                    </button>
                    <div className={`${getCardStyle(semifinalesWinners[i])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                        <div 
                            className="border-b border-gray-700 py-2 px-3 flex justify-between items-center transition-colors duration-150"
                            onMouseEnter={() => handleMouseEnter(semifinalesWinners[i])}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center font-bold text-white">
                                <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                                    <img 
                                        src={`/logos/${semifinalesWinners[i] ? semifinalesWinners[i].toLowerCase() : "default"}.png`} 
                                        alt={`${semifinalesWinners[i] || "Equipo desconocido"} logo`} 
                                        className="w-full h-full object-cover" 
                                    />

                                </div>
                                <p className="text-yellow-500">{semifinalesWinners[i]}</p>
                            </div>
                            <span>{i % 2 === 0 ? 2 : 1}</span>
                        </div>
                        <div 
                            className="py-2 px-3 flex justify-between items-center transition-colors duration-150"
                            onMouseEnter={() => handleMouseEnter(semifinalesWinners[i + 1])}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center font-bold text-white">
                                <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                                    <img 
                                        src={`/logos/${semifinalesWinners[i + 1] ? semifinalesWinners[i + 1].toLowerCase() : "default"}.png`} 
                                        alt={`${semifinalesWinners[i + 1] || "Equipo desconocido"} logo`} 
                                        className="w-full h-full object-cover" 
                                    />

                                </div>
                                <p className="text-blue-500">{semifinalesWinners[i + 1]}</p>
                            </div>
                            <span>{i % 2 === 0 ? 1 : 2}</span>
                        </div>
                        <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                            <button 
                                onClick={() => handleMatchClick(i + 17, semifinalesWinners[i], semifinalesWinners[i + 1])}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                            >
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                    {/* Líneas de conexión entre partidos */}
                    <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div>
                    <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[24rem] bg-white"></div>
                    <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[30rem] bg-white"></div>
                    <div className="absolute left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[2rem] bg-white"></div>
                    <div className="absolute left-[-2rem] top-[calc(50%+24rem)] w-[1rem] h-[1px] bg-white"></div>
                    <div className="absolute left-[-2rem] bottom-[calc(50%+30rem)] w-[1rem] h-[1px] bg-white"></div>
                </div>
            ))}

            {/* Modal para mostrar detalles del partido */}
            {showMatchDetails && selectedMatch && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-bold">Detalles de la Partida {selectedMatch.matchNumber}</h2>
                        <p>{selectedMatch.team1} vs {selectedMatch.team2}</p>
                        <button 
                            onClick={() => setShowMatchDetails(false)} 
                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Semis;