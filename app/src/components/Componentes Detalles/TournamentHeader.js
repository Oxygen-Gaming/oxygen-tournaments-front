import React from "react";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";

const TournamentHeader = ({ selectedCard }) => {
  const getImageForGame = (gameName) => {
    if (gameName === "League of Legends") return LeagueOfLegends;
    if (gameName === "Valorant") return Valorant;
    if (gameName === "Rocket League") return RocketLeague;
    return null;
  };

  return (
    <div
      className="relative bg-cover bg-center h-[450px] w-full flex items-center justify-center"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 60%, #002f5f 100%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0.8) 90%, #002f5f 100%),
          url(${getImageForGame(selectedCard[1])})
        `,
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold">{selectedCard[2]}</h1>
        <p className="text-lg mt-2">En alrededor de 2 horas • {selectedCard[3]}</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Unirse al torneo
        </button>
      </div>
    </div>
  );
};

export default TournamentHeader;
