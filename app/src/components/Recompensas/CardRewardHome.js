import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, points }) => {
  return (
    <div className="card flex flex-col items-center justify-between w-full h-full aspect-[1/1] bg-gradient-to-b from-blue-900 to-blue-600 rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full h-full">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="p-4 text-white text-center">
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
