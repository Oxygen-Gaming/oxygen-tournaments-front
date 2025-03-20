import React, { useState, useEffect } from 'react';
import CardsComponent from '@components/Componentes Competicion/CardsComponent';

const SpecificGameComponent = ({ selectedGame, handleCardClick }) => {
  const [filteredGame, setFilteredGame] = useState(selectedGame);

  useEffect(() => {
    setFilteredGame(selectedGame);
  }, [selectedGame]);

  const handleGameClick = (game) => {
    setFilteredGame(game);
    handleCardClick(game);
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-4 text-center">Torneos de {filteredGame}</h2>
      <div className="flex justify-around">
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4 text-center">Torneos Próximos</h3>
          <CardsComponent handleCardClick={handleGameClick} selectedGame={filteredGame} status="upcoming" />
        </div>
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4 text-center">Torneos en Curso</h3>
          <CardsComponent handleCardClick={handleGameClick} selectedGame={filteredGame} status="ongoing" />
        </div>
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4 text-center">Torneos Finalizados</h3>
          <CardsComponent handleCardClick={handleGameClick} selectedGame={filteredGame} status="finished" />
        </div>
      </div>
    </div>
  );
};

export default SpecificGameComponent;
