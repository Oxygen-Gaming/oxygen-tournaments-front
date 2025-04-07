import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, points }) => {
  return (
    <div className="card w-84 h-96 bg-gradient-to-b from-[#1e3a8a] to-[#2563eb] rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative w-full h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <p className="absolute bottom-2 right-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded no-underline">
          {points}
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
