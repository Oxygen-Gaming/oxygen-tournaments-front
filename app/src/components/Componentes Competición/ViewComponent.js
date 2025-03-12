import React from "react";
import LeagueOfLegends from "../../img/League.jpg";
import Valorant from "../../img/valorant.jpg";
import RocketLeague from "../../img/rocketleague.jpg";
import Logo from "../../img/Logo_OxygenGaming2.png";

const View = ({ handleCardClick, handleViewAll }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('League of Legends Tournament')}>
        <img src={LeagueOfLegends} alt="League of Legends" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h2 className="text-[#4ade80] text-2xl font-bold mb-2">League of Legends Tournament</h2>
        <p className="text-sm mb-2">Fecha de Inicio: 01/12/2023</p>
        <div className="flex items-center mb-2">
          <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
          <span className="text-green-500">Inscripciones abiertas</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Jugadores Inscritos: 78</span>
        </div>
        <button onClick={(e) => { e.stopPropagation(); handleViewAll('League of Legends'); }} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
      </div>

      <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Valorant Tournament')}>
        <img src={Valorant} alt="Valorant" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Valorant Tournament</h2>
        <p className="text-sm mb-2">Fecha de Inicio: 15/12/2023</p>
        <div className="flex items-center mb-2">
          <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
          <span className="text-green-500">Activo</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Jugadores Inscritos: 200</span>
        </div>
        <button onClick={(e) => { e.stopPropagation(); handleViewAll('Valorant'); }} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
      </div>

      <div className="bg-[#003f7f] rounded-lg p-5 transition-transform transform hover:scale-105 shadow-lg" onClick={() => handleCardClick('Rocket League Tournament')}>
        <img src={RocketLeague} alt="Rocket League" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h2 className="text-[#4ade80] text-2xl font-bold mb-2">Rocket League Tournament</h2>
        <p className="text-sm mb-2">Fecha de Inicio: 20/12/2023</p>
        <div className="flex items-center mb-2">
          <img src={Logo} alt="Trophy" className="w-6 h-6 mr-2" />
          <span className="text-green-500">Activo</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Jugadores Inscritos: 120</span>
        </div>
        <button onClick={(e) => { e.stopPropagation(); handleViewAll('Rocket League'); }} className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Ver Todo</button>
      </div>
    </div>
  );
};

export default View;
