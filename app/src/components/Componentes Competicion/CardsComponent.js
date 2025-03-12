import React, { useState } from 'react';
import LeagueOfLegends from "../../img/League.jpg";
import Valorant from "../../img/valorant.jpg";
import RocketLeague from "../../img/rocketleague.jpg";
import Logo from "../../img/Logo_Blue.png";

const CardsComponent = ({ handleCardClick }) => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleViewAll = (game) => {
        setSelectedGame(game);
    };

    return (
        <div className="container mx-auto p-5">
            {!selectedGame && (
                <>
                    {/* League of Legends */}
                    <h2 className="text-2xl mb-4">League of Legends</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('League of Legends Tournament 1')}>
                            <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">League of Legends Tournament 1</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Inscripciones abiertas</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 78</span>
                            </div>
                        </div>
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('League of Legends Tournament 2')}>
                            <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">League of Legends Tournament 2</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 05/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Activo</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 150</span>
                            </div>
                        </div>
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('League of Legends Tournament 3')}>
                            <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">League of Legends Tournament 3</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 10/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Activo</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 120</span>
                            </div>
                        </div>
                    </div>

                    {/* Valorant */}
                    <h2 className="text-2xl mb-4">Valorant</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Valorant Tournament 1')}>
                            <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Valorant Tournament 1</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 15/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Inscripciones abiertas</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 200</span>
                            </div>
                        </div>
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Valorant Tournament 2')}>
                            <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Valorant Tournament 2</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Activo</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 250</span>
                            </div>
                        </div>
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Valorant Tournament 3')}>
                            <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Valorant Tournament 3</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 25/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Activo</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 300</span>
                            </div>
                        </div>
                    </div>

                    {/* Rocket League */}
                    <h2 className="text-2xl mb-4">Rocket League</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Rocket League Tournament 1')}>
                            <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Rocket League Tournament 1</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Inscripciones abiertas</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 120</span>
                            </div>
                        </div>
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Rocket League Tournament 2')}>
                            <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Rocket League Tournament 2</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 25/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Activo</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 150</span>
                            </div>
                        </div>
                        <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Rocket League Tournament 3')}>
                            <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Rocket League Tournament 3</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: 30/12/2023</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className="text-green-500">Activo</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: 180</span>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {selectedGame && (
                <>
                    <h2 className="text-3xl font-bold mb-4">{selectedGame}</h2>
                    <div className="mb-10">
                        <h3 className="text-xl mb-2">Torneos Próximos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick(`${selectedGame} Tournament 1`)}>
                                <img src={selectedGame === 'League of Legends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">{selectedGame} Tournament 1</h2>
                                <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
                                <div className="flex items-center mb-2">
                                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                    <span className="text-green-500">Inscripciones abiertas</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Jugadores Inscritos: 78</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-xl mb-2">Torneos en Curso</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick(`${selectedGame} Tournament 2`)}>
                                <img src={selectedGame === 'League of Legends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">{selectedGame} Tournament 2</h2>
                                <p className="text-sm mb-2">Fecha de Inicio: 05/12/2023</p>
                                <div className="flex items-center mb-2">
                                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                    <span className="text-green-500">Activo</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Jugadores Inscritos: 150</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-xl mb-2">Torneos Finalizados</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg opacity-50" onClick={() => handleCardClick(`${selectedGame} Tournament 3`)}>
                                <img src={selectedGame === 'LeagueOfLegends' ? LeagueOfLegends : selectedGame === 'Valorant' ? Valorant : RocketLeague} alt={selectedGame} className="w-full h-40 object-cover rounded-lg mb-4" />
                                <h2 className="text-[#4ade80] text-2xl font-bold mb-2">{selectedGame} Tournament 3</h2>
                                <p className="text-sm mb-2">Fecha de Inicio: 10/12/2023</p>
                                <div className="flex items-center mb-2">
                                    <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                    <span className="text-red-500">Finalizado</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Jugadores Inscritos: 120</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CardsComponent;
