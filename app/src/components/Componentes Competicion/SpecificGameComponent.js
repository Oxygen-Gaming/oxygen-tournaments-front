import React, { useState } from 'react';
import ViewAllComponent from '@components/Componentes Competicion/ViewAllComponent';

const SpecificGameComponent = ({ handleCardClick }) => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleViewAll = (game) => {
        setSelectedGame(game);
    };

    return (
        <div className="container mx-auto p-5">
            {!selectedGame ? (
                <ViewAllComponent 
                    handleCardClick={handleCardClick} 
                    handleViewAll={handleViewAll} // Pass handleViewAll to ViewAllComponent
                />
            ) : (
                <ViewAllComponent 
                    handleCardClick={handleCardClick} 
                    selectedGame={selectedGame} // Pass selectedGame to ViewAllComponent
                />
            )}
        </div>
    );
};
export default SpecificGameComponent;
