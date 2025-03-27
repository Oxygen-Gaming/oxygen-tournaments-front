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
      <h2 className="text-3xl font-bold mb-8 text-left">Grandes Torneos</h2> {/* Changed mb-4 to mb-8 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Changed gap-4 to gap-8 */}
        {games.map(game => (
          <div key={game.name} className="relative card">
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] rounded-lg p-6 transition-transform transform hover:scale-110 shadow-2xl border-4 border-blue-500 h-[600px] flex flex-col justify-between" onClick={() => handleCardClick([game.name, game.name, `${game.name} Championship`, '30/03/2025', 'upcoming'])}> {/* Updated date */}
              <img src={game.image} alt={game.name} className="w-full h-[250px] object-cover rounded-lg mb-4 shadow-lg" /> {/* Changed h-[300px] to h-[250px] */}
              <h2 className="text-white text-3xl font-extrabold mb-4">{game.name} Championship</h2>
              <button
                className="absolute top-2 right-2 bg-blue-600 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-110 shadow-md"
                onClick={(e) => { e.stopPropagation(); handleViewAll(game.name); }}
              >
                Ver Más
              </button>
              <p className="text-lg mb-4 font-semibold">Fecha de Inicio: 30/03/2025</p> {/* Updated date */}
              <div className="flex items-center mb-4">
                <img src={Logo} alt="Trophy" className="w-8 h-8 mr-3" />
                <span className={game.status === 'En Curso' ? 'text-yellow-400 font-bold text-lg' : 'text-green-500 font-bold text-lg'}>
                  {game.status === 'En Curso' ? 'En Curso' : 'Inscripciones abiertas'}
                </span> {/* Changed to text-yellow-400 for "En Curso" */}
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
