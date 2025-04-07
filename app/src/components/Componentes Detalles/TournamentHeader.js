import React from "react";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";

const TournamentHeader = ({ selectedCard, scrollToInscription }) => {
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
          radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.7) 100%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.6) 90%, rgba(0, 0, 0, 0.8) 100%),
          url(${getImageForGame(selectedCard[1])})
        `,
      }}
    >
      {/* Gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-extrabold text-white text-center">{selectedCard[2]}</h1> {/* Centrado */}
        <p className="text-lg mt-2 text-white">En alrededor de 2 horas • {selectedCard[3]}</p>
        <button
          className="mt-4 px-6 py-2 bg-[#005f99] text-white rounded-lg hover:bg-[#0077b6] transition"
          onClick={scrollToInscription} // Llamada a la función pasada como prop
        >
          Unirse al torneo
        </button>
      </div>
    </div>
  );
};

export default TournamentHeader;
