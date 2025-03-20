import React, { useState } from 'react';
import ViewAllComponent from './ViewAllComponent';

const TournamentComponent = ({ handleCardClick }) => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleViewAll = (game) => {
        setSelectedGame(game);
    };

    return (
        <div className="container mx-auto p-5">
            <ViewAllComponent handleCardClick={handleCardClick} />
        </div>
    );
};

export default TournamentComponent;
