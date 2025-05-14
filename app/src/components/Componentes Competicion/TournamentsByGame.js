import React from "react";
import CardsComponent from "@components/Componentes Competicion/CardsComponent";
import SectionTitle from "./SectionTitle";

const TournamentsByGame = ({ selectedGame, handleCardClick, inscriptionStatus, selectedCard }) => {
  return (
    <>
      <SectionTitle title={`Próximos Torneos de ${selectedGame}`} gradientColor="blue-900" />
      <CardsComponent
        handleCardClick={handleCardClick}
        selectedGame={selectedGame}
        filter="upcoming"
        inscriptionStatus={inscriptionStatus}
        selectedCard={selectedCard}
      />

      <SectionTitle title="Torneos en curso" gradientColor="yellow-400" />
      <CardsComponent
        handleCardClick={handleCardClick}
        selectedGame={selectedGame}
        filter="ongoing"
        inscriptionStatus={inscriptionStatus}
        selectedCard={selectedCard}
      />

      <SectionTitle title="Torneos Finalizados" gradientColor="red-500" />
      <div className="transition-opacity duration-500 opacity-[45%]">
        <CardsComponent
          handleCardClick={handleCardClick}
          selectedGame={selectedGame}
          filter="finished"
          inscriptionStatus={inscriptionStatus}
          selectedCard={selectedCard}
        />
      </div>
    </>
  );
};

export default TournamentsByGame;
