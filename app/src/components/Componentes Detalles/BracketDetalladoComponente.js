// c:\Users\marco\Desktop\Resultados Oxygen Gaming\BracketDetalladoComponente.js

import React from 'react';

const BracketDetalladoComponente = () => {
    const rounds = [
        { title: "Ronda de 64", matches: 32 },
        { title: "Ronda de 32", matches: 16 },
        { title: "Ronda de 16", matches: 8 },
        { title: "Cuartos de final", matches: 4 },
        { title: "Semifinales", matches: 2 },
        { title: "Final", matches: 1 },
    ];

    return (
        <div className="bg-[#0b1120] text-white p-6 overflow-x-auto">
            <div className="flex justify-between items-start">
                {/* Left Side */}
                {rounds.map((round, roundIndex) => (
                    <div key={roundIndex} className="flex flex-col items-center mx-4">
                        <h3 className="text-lg font-bold mb-4 text-center">{round.title}</h3> {/* Centrado */}
                        {Array.from({ length: Math.ceil(round.matches / 2) }).map((_, matchIndex) => (
                            <div
                                key={matchIndex}
                                className="relative bg-[#1e293b] text-white p-4 rounded-lg shadow-lg mb-8 w-48"
                            >
                                {/* Match Details */}
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm font-bold">Por decidir</p>
                                    <p className="text-sm">0</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-bold">Por decidir</p>
                                    <p className="text-sm">0</p>
                                </div>
                                {/* Connector */}
                                {roundIndex < rounds.length - 1 && (
                                    <div className="absolute right-[-20px] top-1/2 transform translate-y-[-50%] w-10 h-10 border-t-2 border-r-2 border-gray-500 rounded-tr-lg"></div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

                {/* Right Side (Mirrored) */}
                {rounds.map((round, roundIndex) => (
                    <div key={roundIndex} className="flex flex-col items-center mx-4">
                        <h3 className="text-lg font-bold mb-4 text-center">{round.title}</h3> {/* Centrado */}
                        {Array.from({ length: Math.ceil(round.matches / 2) }).map((_, matchIndex) => (
                            <div
                                key={matchIndex}
                                className="relative bg-[#1e293b] text-white p-4 rounded-lg shadow-lg mb-8 w-48"
                            >
                                {/* Match Details */}
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm font-bold">Por decidir</p>
                                    <p className="text-sm">0</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-bold">Por decidir</p>
                                    <p className="text-sm">0</p>
                                </div>
                                {/* Connector */}
                                {roundIndex < rounds.length - 1 && (
                                    <div className="absolute left-[-20px] top-1/2 transform translate-y-[-50%] w-10 h-10 border-t-2 border-l-2 border-gray-500 rounded-tl-lg"></div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BracketDetalladoComponente;