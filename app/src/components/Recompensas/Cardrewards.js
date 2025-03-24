import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, points }) => {
  return (
    <div className="card w-40 h-40 bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg transform transition duration-300 hover:scale-105">

      <div className="p-2 text-white text-sm text-left">{title}</div>
      <p className="text-[#55a5db] text-xs absolute bottom-2 right-3">
        Puntos: {points}
      </p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};

export default Card;
