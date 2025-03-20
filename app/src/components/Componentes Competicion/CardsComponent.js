import React, { useState } from 'react';
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import Logo from "@imgs/Logo_Blue.png";

const CardsComponent = ({ handleCardClick, selectedGame, filter, inscriptionStatus }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const allCards = [
        ['1', 'League of Legends', 'LoL Championship Series', '01/12/2023', 'upcoming', 78, LeagueOfLegends],
        ['2', 'League of Legends', 'LoL Winter Cup', '05/12/2023', 'ongoing', 150, LeagueOfLegends],
        ['3', 'League of Legends', 'LoL Spring Showdown', '10/12/2023', 'finished', 120, LeagueOfLegends],
        ['4', 'Valorant', 'Valorant Open', '15/12/2023', 'upcoming', 200, Valorant],
        ['5', 'Valorant', 'Valorant Elite Cup', '20/12/2023', 'ongoing', 250, Valorant],
        ['6', 'Valorant', 'Valorant Pro Series', '25/12/2023', 'finished', 300, Valorant],
        ['7', 'Rocket League', 'Rocket League Invitational', '20/12/2023', 'upcoming', 120, RocketLeague],
        ['8', 'Rocket League', 'Rocket League Championship', '25/12/2023', 'ongoing', 150, RocketLeague],
        ['9', 'Rocket League', 'Rocket League Showdown', '30/12/2023', 'finished', 180, RocketLeague],
        ['10', 'League of Legends', 'LoL Summer Clash', '01/01/2024', 'upcoming', 80, LeagueOfLegends],
        ['11', 'League of Legends', 'LoL Autumn Arena', '05/01/2024', 'ongoing', 160, LeagueOfLegends],
        ['12', 'League of Legends', 'LoL Grand Finale', '10/01/2024', 'finished', 130, LeagueOfLegends],
        ['13', 'Valorant', 'Valorant Masters', '15/01/2024', 'upcoming', 210, Valorant],
        ['14', 'Valorant', 'Valorant Champions', '20/01/2024', 'ongoing', 260, Valorant],
        ['15', 'Valorant', 'Valorant World Cup', '25/01/2024', 'finished', 310, Valorant],
        ['16', 'Rocket League', 'Rocket League Cup', '20/01/2024', 'upcoming', 130, RocketLeague],
        ['17', 'Rocket League', 'Rocket League Clash', '25/01/2024', 'ongoing', 160, RocketLeague],
        ['18', 'Rocket League', 'Rocket League Grand Prix', '30/01/2024', 'finished', 190, RocketLeague],
        // New cards
        ['19', 'League of Legends', 'LoL Winter Showdown', '15/01/2024', 'upcoming', 90, LeagueOfLegends],
        ['20', 'League of Legends', 'LoL Spring Clash', '20/01/2024', 'ongoing', 170, LeagueOfLegends],
        ['21', 'League of Legends', 'LoL Summer Finale', '25/01/2024', 'finished', 140, LeagueOfLegends],
        ['22', 'Valorant', 'Valorant Winter Invitational', '30/01/2024', 'upcoming', 220, Valorant],
        ['23', 'Valorant', 'Valorant Spring Championship', '05/02/2024', 'ongoing', 270, Valorant],
        ['24', 'Valorant', 'Valorant Summer Showdown', '10/02/2024', 'finished', 320, Valorant],
        ['25', 'Rocket League', 'Rocket League Winter Cup', '15/02/2024', 'upcoming', 140, RocketLeague],
        ['26', 'Rocket League', 'Rocket League Spring Invitational', '20/02/2024', 'ongoing', 180, RocketLeague],
        ['27', 'Rocket League', 'Rocket League Summer Championship', '25/02/2024', 'finished', 200, RocketLeague],
    ];

    const filteredCards = allCards.filter(card => card[1] === selectedGame && card[4] === filter);

    const handleCardSelection = (card) => {
        setSelectedCard(card);
        handleCardClick(card);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCards.map(card => (
                    <div
                        key={card[0]}
                        className={`card ${card[4] === 'finished' ? 'opacity-50' : ''}`}
                        onClick={() => handleCardSelection(card)}
                    >
                        <div className="bg-gradient-to-r from-[#0074D9] to-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg">
                            <img src={card[6]} alt={card[1]} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-[#4ade80] text-2xl font-bold mb-2">{card[2]}</h2>
                            <p className="text-sm mb-2">Fecha de Inicio: {card[3]}</p>
                            <div className="flex items-center mb-2">
                                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                                <span className={card[4] === 'finished' ? 'text-red-500' : card[4] === 'ongoing' ? 'text-orange-500' : 'text-green-500'}>
                                    {card[4] === 'upcoming' ? 'Inscripciones Abiertas' : card[4] === 'ongoing' ? 'En Curso' : 'Finalizado'}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jugadores Inscritos: {card[5]}</span>
                            </div>
                            <div className="flex justify-between text-sm mt-2">
                                <span className={inscriptionStatus && inscriptionStatus[card[0]] ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                                    {inscriptionStatus && inscriptionStatus[card[0]] ? "Inscrito" : "No inscrito"}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardsComponent;
