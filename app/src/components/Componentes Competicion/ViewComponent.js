import React from "react";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import Logo from "@imgs/Logo_OxygenGaming2.png";

const View = ({ handleCardClick, handleViewAll, inscriptionStatus }) => {
  const games = [
    { name: 'League of Legends', image: LeagueOfLegends },
    { name: 'Valorant', image: Valorant },
    { name: 'Rocket League', image: RocketLeague },
  ];

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-left">Torneos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map(game => (
          <div key={game.name} className="relative card">
            <div className="bg-gradient-to-r from-[#0074D9] to-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick([game.name, game.name, `${game.name} Championship`, '01/12/2023', 'upcoming'])}>
              <img src={game.image} alt={game.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-[#4ade80] text-2xl font-bold mb-2">{game.name} Championship</h2>
              <button
                className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-lg transition-transform transform hover:scale-110"
                onClick={(e) => { e.stopPropagation(); handleViewAll(game.name); }}
              >
                Ver Más
              </button>
              <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
              <div className="flex items-center mb-2">
                <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                <span className="text-green-500">Inscripciones abiertas</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Jugadores Inscritos: 78</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className={inscriptionStatus && inscriptionStatus[game.name] ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                  {inscriptionStatus && inscriptionStatus[game.name] ? "Inscrito" : "No inscrito"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
