import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeagueOfLegends from "@imgs/lol.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import Logo from "@imgs/Logo_Blue.png";

const ViewAllComponent = ({ selectedGame, handleViewAll }) => {
  const [selectedGameState, setSelectedGameState] = useState(selectedGame);
  const navigate = useNavigate();

  const handleViewAllClick = (game) => {
    setSelectedGameState(game);
  };

  const tournaments = {
    'League of Legends': [
      { name: 'LoL Championship Series', date: '30/03/2025', status: 'Inscripciones abiertas', players: 78, img: LeagueOfLegends },
      { name: 'LoL Winter Cup', date: '26/03/2025', status: 'Activo', players: 150, img: LeagueOfLegends },
      { name: 'LoL Spring Showdown', date: '15/03/2025', status: 'Finalizado', players: 120, img: LeagueOfLegends },
      { name: 'LoL Spring Clash', date: '10/04/2025', status: 'Inscripciones abiertas', players: 95, img: LeagueOfLegends },
      { name: 'LoL Summer Showdown', date: '05/05/2025', status: 'Inscripciones abiertas', players: 85, img: LeagueOfLegends },
    ],
    'Valorant': [
      { name: 'Valorant Open', date: '01/04/2025', status: 'Inscripciones abiertas', players: 200, img: Valorant },
      { name: 'Valorant Elite Cup', date: '26/03/2025', status: 'Activo', players: 250, img: Valorant },
      { name: 'Valorant Pro Series', date: '10/03/2025', status: 'Finalizado', players: 300, img: Valorant },
      { name: 'Valorant Winter Invitational', date: '15/04/2025', status: 'Inscripciones abiertas', players: 220, img: Valorant },
      { name: 'Valorant Champions', date: '26/03/2025', status: 'Activo', players: 270, img: Valorant },
    ],
    'Rocket League': [
      { name: 'Rocket League Invitational', date: '28/03/2025', status: 'Inscripciones abiertas', players: 120, img: RocketLeague },
      { name: 'Rocket League Championship', date: '26/03/2025', status: 'Activo', players: 150, img: RocketLeague },
      { name: 'Rocket League Showdown', date: '05/03/2025', status: 'Finalizado', players: 180, img: RocketLeague },
      { name: 'Rocket League Grand Prix', date: '20/03/2025', status: 'Finalizado', players: 190, img: RocketLeague },
      { name: 'Rocket League Clash', date: '26/03/2025', status: 'Activo', players: 160, img: RocketLeague },
    ]
  };

  const filteredTournaments = selectedGameState ? tournaments[selectedGameState] : [];

  const handleCardClick = (tournament) => {
    navigate("/tournament-details", { state: { selectedCard: tournament } });
  };

  return (
    <div className="container mx-auto p-5">
      {!selectedGameState && (
        <>
          {Object.keys(tournaments).map((game) => (
            <div key={game}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl">{game}</h2>
                <button onClick={() => handleViewAllClick(game)} className="text-blue-500">Ver Todo</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {tournaments[game].slice(0, 3).map((tournament, index) => (
                  <div
                    key={index}
                    className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg flex flex-col justify-between h-[500px] cursor-pointer"
                    onClick={() => handleCardClick(tournament)}
                  >
                    <img src={tournament.img} alt={tournament.name} className="w-full h-[220px] object-cover rounded-lg mb-4" />
                    <h2 className="text-white text-2xl font-bold mb-2">{tournament.name}</h2>
                    <p className="text-sm mb-2">Fecha de Inicio: {tournament.date}</p>
                    <div className="flex items-center mb-2">
                      <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                      <span className={`text-sm font-bold ${
                        tournament.status === 'Inscripciones abiertas' ? 'text-green-500' : tournament.status === 'Activo' ? 'text-yellow-400' : 'text-red-500'
                      }`}>{tournament.status}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Jugadores Inscritos: {tournament.players}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}

      {selectedGameState && (
        <>
          <h2 className="text-3xl font-bold mb-4">{selectedGameState}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredTournaments.map((tournament, index) => (
              <div
                key={index}
                className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg flex flex-col justify-between h-[500px] cursor-pointer"
                onClick={() => handleCardClick(tournament)}
              >
                <img src={tournament.img} alt={tournament.name} className="w-full h-[220px] object-cover rounded-lg mb-4" />
                <h2 className="text-white text-2xl font-bold mb-2">{tournament.name}</h2>
                <p className="text-sm mb-2">Fecha de Inicio: {tournament.date}</p>
                <div className="flex items-center mb-2">
                  <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
                  <span className={`text-sm font-bold ${
                    tournament.status === 'Inscripciones abiertas' ? 'text-green-500' : tournament.status === 'Activo' ? 'text-yellow-400' : 'text-red-500'
                  }`}>{tournament.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jugadores Inscritos: {tournament.players}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewAllComponent;
