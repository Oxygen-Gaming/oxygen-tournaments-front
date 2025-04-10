import React from "react";
import Logo from "@imgs/Logo_OxygenGaming2.png";
import LeagueOfLegends from "@imgs/lol.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";

const View = ({ handleCardClick, inscriptionStatus, selectedGame }) => {
  const games = [
    { name: 'League of Legends', image: LeagueOfLegends },
    { name: 'Valorant', image: Valorant },
    { name: 'Rocket League', image: RocketLeague },
  ];

  return (
    <div className="w-11/12 mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map(game => (
          <div
            key={game.name}
            className={`relative card overflow-hidden rounded-lg shadow-lg bg-[#1c1c1c] ${
              selectedGame === game.name ? 'ring-4 ring-blue-500' : 'hover:scale-105 transition-transform'
            }`}
            onClick={() => handleCardClick([game.name, game.name, `${game.name} Championship`, '30/03/2025', 'upcoming'])}
          >
            <div className="relative p-6 flex flex-col justify-between h-[650px]"> {/* Increased height */}
              <img src={game.image} alt={game.name} className="w-full h-[250px] object-cover rounded-lg mb-4 shadow-lg" />
              <h2 className="text-white text-3xl font-extrabold mb-4">{game.name} Championship</h2>
              <p className="text-lg mb-2 font-semibold text-gray-300">Premio Total: $500</p>
              <p className="text-lg mb-2 font-semibold text-gray-300">Formato: {game.name === "Valorant" || game.name === "League of Legends" ? "5vs5" : "1vs1 y 3vs3"}</p>
              <p className="text-lg mb-4 font-semibold text-gray-300">Fecha y Hora: 30/03/2025 - 18:00</p>
              <div className="flex items-center mb-4">
                <img src={Logo} alt="Trophy" className="w-8 h-8 mr-3" />
                <span className={game.status === 'En Curso' ? 'text-yellow-400 font-bold text-lg' : 'text-green-500 font-bold text-lg'}>
                  {game.status === 'En Curso' ? 'En Curso' : 'Inscripciones abiertas'}
                </span>
              </div>
              <div className="flex justify-between text-md font-semibold">
                <span>Jugadores Inscritos: 78</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span
                  className={`text-lg font-bold px-4 py-2 rounded w-fit ${
                    inscriptionStatus && inscriptionStatus[game.name]
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
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
