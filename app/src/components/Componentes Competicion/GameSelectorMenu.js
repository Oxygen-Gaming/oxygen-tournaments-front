import React from "react";

const GameSelectorMenu = ({ selectedGame, setSelectedGame, setShowAllTournaments }) => {
  const games = [
    { name: "League of Legends", image: require("@imgs/lol-logo.png") },
    { name: "Valorant", image: require("@imgs/Valorant_logo.png") },
    { name: "Rocket League", image: require("@imgs/rocket-league.png") },
  ];

  return (
    <div className="flex justify-center gap-16 mt-8 flex-wrap">
      <div
        className={`flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 w-1/2 sm:w-auto ${
          selectedGame === "Próximos Torneos" ? "opacity-100" : "opacity-50 hover:opacity-100"
        }`}
        onClick={() => {
          setSelectedGame("Próximos Torneos");
          setShowAllTournaments(false);
        }}
      >
        <div className="w-20 h-20 rounded-lg flex items-center justify-center">
          <i className="fas fa-calendar-alt text-white text-3xl md:text-5xl"></i>
        </div>
        <span className="text-white font-bold text-lg text-center">Próximos Torneos</span>
      </div>

      {games.map((game) => (
        <div
          key={game.name}
          className={`flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 w-1/2 sm:w-auto ${
            selectedGame === game.name ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          onClick={() => {
            setSelectedGame(game.name);
            setShowAllTournaments(true);
          }}
        >
          <img src={game.image} alt={game.name} className="w-20 h-20 object-cover rounded-lg" />
          <span className="text-white font-bold text-lg text-center">{game.name}</span>
        </div>
      ))}
    </div>
  );
};

export default GameSelectorMenu;
