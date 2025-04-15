import React, { useState, useEffect } from 'react';
import LeagueOfLegends from "@imgs/lol.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import Logo from "@imgs/Logo_Blue.png";

const CardsComponent = ({ handleCardClick, selectedGame, filter }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [inscriptionStatus, setInscriptionStatus] = useState(() => {
        // Load inscription status from localStorage
        const savedStatus = localStorage.getItem("inscriptionStatus");
        return savedStatus ? JSON.parse(savedStatus) : {};
    });

    const resetInscriptions = () => {
        setInscriptionStatus({});
        localStorage.removeItem("inscriptionStatus");
    };

    const cancelInscription = (cardId) => {
        const updatedStatus = { ...inscriptionStatus };
        delete updatedStatus[cardId]; // Remove the inscription for the specific tournament
        setInscriptionStatus(updatedStatus);
        localStorage.setItem("inscriptionStatus", JSON.stringify(updatedStatus));
    };

    const allCards = [
        ['1', 'League of Legends', 'LoL Championship Series', '30/03/2025', 'upcoming', 78, LeagueOfLegends],
        ['2', 'League of Legends', 'LoL Winter Cup', '26/03/2025', 'ongoing', 150, LeagueOfLegends],
        ['3', 'League of Legends', 'LoL Spring Showdown', '15/03/2025', 'finished', 120, LeagueOfLegends],
        ['4', 'Valorant', 'Valorant Open', '01/04/2025', 'upcoming', 200, Valorant],
        ['5', 'Valorant', 'Valorant Elite Cup', '26/03/2025', 'ongoing', 250, Valorant],
        ['6', 'Valorant', 'Valorant Pro Series', '10/03/2025', 'finished', 300, Valorant],
        ['7', 'Rocket League', 'Rocket League Invitational', '28/03/2025', 'upcoming', 120, RocketLeague],
        ['8', 'Rocket League', 'Rocket League Championship', '26/03/2025', 'ongoing', 150, RocketLeague],
        ['9', 'Rocket League', 'Rocket League Showdown', '05/03/2025', 'finished', 180, RocketLeague],
        ['10', 'League of Legends', 'LoL Spring Clash', '10/04/2025', 'upcoming', 95, LeagueOfLegends],
        ['11', 'Valorant', 'Valorant Winter Invitational', '15/04/2025', 'upcoming', 220, Valorant],
        ['12', 'Rocket League', 'Rocket League Grand Prix', '20/03/2025', 'finished', 190, RocketLeague],
        ['13', 'League of Legends', 'LoL Summer Showdown', '05/05/2025', 'upcoming', 85, LeagueOfLegends],
        ['14', 'Valorant', 'Valorant Champions', '26/03/2025', 'ongoing', 270, Valorant],
        ['15', 'Rocket League', 'Rocket League Clash', '26/03/2025', 'ongoing', 160, RocketLeague],
    ];

    const filteredCards = allCards.filter(card => card[1] === selectedGame && card[4] === filter);

    const handleCardSelection = (card) => {
        setSelectedCard(card);
        handleCardClick(card);
    };

    const getInscriptionStatus = (cardId) => {
        if (!inscriptionStatus || !inscriptionStatus[cardId]) {
            return { text: "No Inscrito", style: "bg-red-500 text-white" };
        }
        if (inscriptionStatus[cardId] === "pending") {
            return { text: "Por Confirmar", style: "bg-orange-500 text-white" };
        }
        if (inscriptionStatus[cardId] === "confirmed") {
            return { text: "Confirmado", style: "bg-green-500 text-white" };
        }
        return { text: "No Inscrito", style: "bg-red-500 text-white" };
    };

    useEffect(() => {
        // Save inscription status to localStorage whenever it changes
        localStorage.setItem("inscriptionStatus", JSON.stringify(inscriptionStatus));
    }, [inscriptionStatus]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.slice(0, 3).map((card, index) => ( // Limit to 3 cards
                <div
                    key={card[0]}
                    className={`card relative overflow-hidden rounded-lg shadow-lg bg-[#1c1c1c] text-white p-6 flex flex-col justify-between h-[600px] cursor-pointer transition-transform transform hover:scale-105 group`}
                    onClick={() => handleCardClick(card)}
                >
                    <img src={card[6]} alt={card[1]} className="w-full h-[300px] object-cover rounded-lg mb-4 shadow-md" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <div className="text-center px-4 transform -translate-y-22 group-hover:-translate-y-24 transition-transform duration-300">
                            <p className="text-white text-lg font-extrabold">
                                Haz click en la tarjeta
                            </p>
                            <p className="text-white text-lg font-extrabold">
                                para ver los detalles del torneo <span className="text-blue-400">{card[2]}</span>
                            </p>
                        </div>
                    </div>
                    <h2 className="text-white text-3xl font-bold mb-2">{card[2]}</h2>
                    <p className="text-lg mb-2 text-gray-300">
                        Fecha de Inicio: {card[3]} • 18:00
                    </p>
                    <p className="text-lg mb-2 text-gray-300">
                        Formato: {card[1] === "Valorant" || card[1] === "League of Legends"
                            ? "5vs5"
                            : card[1] === "Rocket League" && index % 2 === 0
                            ? "1vs1"
                            : "3vs3"}
                    </p>
                    <p className="text-lg mb-2 text-gray-300">
                        Premio Total: $500
                    </p>
                    <div className="flex items-center mb-2">
                        <img src={Logo} alt="Trophy" className="w-8 h-8 mr-2" />
                        <span className={`text-lg font-bold ${
                            card[4] === 'finished' ? 'text-red-500' : card[4] === 'ongoing' ? 'text-yellow-400' : 'text-green-500'
                        }`}>
                            {card[4] === 'upcoming' ? 'Inscripciones Abiertas' : card[4] === 'ongoing' ? 'En Curso' : 'Finalizado'}
                        </span>
                    </div>
                    <div className="flex justify-between text-lg text-gray-300">
                        <span>Jugadores Inscritos: {card[5]}</span>
                    </div>
                    <div className="flex justify-between text-lg mt-2">
                        <span className={`text-lg font-bold px-4 py-2 rounded w-fit ${getInscriptionStatus(card[0]).style}`}>
                            {getInscriptionStatus(card[0]).text}
                        </span>
                    </div>
                    {inscriptionStatus[card[0]] && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering card selection
                                cancelInscription(card[0]);
                            }}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                            Cancelar Inscripción
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CardsComponent;