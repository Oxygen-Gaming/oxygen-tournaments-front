import React, { useState } from 'react';
import CardsComponent from './CardsComponent';

const TournamentComponent = ({ handleCardClick }) => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleViewAll = (game) => {
        setSelectedGame(game);
    };

    return (
        <div className="container mx-auto p-5">
            <CardsComponent handleCardClick={handleCardClick} />
        </div>
    );
};

export default TournamentComponent;
