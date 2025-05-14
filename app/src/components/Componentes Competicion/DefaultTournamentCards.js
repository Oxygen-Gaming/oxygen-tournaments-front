import React from "react";
import Logo from "@imgs/Logo_Blue.png";

const DefaultTournamentCards = ({ cards, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card) => (
        <div
          key={card[0]}
          className="card relative overflow-hidden rounded-lg shadow-lg bg-black text-white p-6 flex flex-col justify-between h-[600px] cursor-pointer transition-transform transform hover:scale-105 group"
          onClick={() => onCardClick(card)}
        >
          <img src={card[6]} alt={card[1]} className="w-full h-[300px] object-cover rounded-lg mb-4 shadow-md" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <div className="text-center px-4 transform -translate-y-22 group-hover:-translate-y-24 transition-transform duration-300">
              <p className="text-white text-lg font-extrabold">Haz click en la tarjeta</p>
              <p className="text-white text-lg font-extrabold">para ver los detalles del torneo <span className="text-blue-400">{card[2]}</span></p>
            </div>
          </div>
          <h2 className="text-white text-3xl font-bold mb-2">{card[2]}</h2>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-md font-semibold">
              🗓️ {card[3]} • 18:00
            </span>
          </div>
          <p className="text-lg mb-2 text-gray-300">Formato: {card[1] === "Valorant" || card[1] === "League of Legends" ? "5vs5" : "1vs1 y 3vs3"}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-md font-semibold">
              🏆 Premio: $500
            </span>
          </div>
          <div className="flex items-center mb-2">
            <img src={Logo} alt="Trophy" className="w-8 h-8 mr-2" />
            <span className="text-lg font-bold text-green-500">Inscripciones Abiertas</span>
          </div>
          <div className="flex justify-between text-lg mt-2">
            <span className="text-lg font-bold px-4 py-2 rounded bg-red-500 text-white">No inscrito</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DefaultTournamentCards;
