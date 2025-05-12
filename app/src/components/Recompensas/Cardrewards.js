import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, points }) => {
  return (
    <div className="card border-2 border-blue-500 w-84 h-96 bg-gradient-to-b from-blue-900 to-blue-600 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 group">
      <div className="relative w-full h-full">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:blur-sm transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-center text-sm font-bold px-4">
            Haz click para ver más detalles de la Recompensa: <br /> <span className="text-yellow-400">{title}</span>
          </p>
        </div>
        <p className="absolute bottom-2 right-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded no-underline">
          Puntos: {points}
        </p>
      </div>
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};

export default Card;
