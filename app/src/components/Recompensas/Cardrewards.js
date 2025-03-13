import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, points }) => {
  return (
    <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-52 bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-3/4 object-cover rounded-t-lg" />
      <div className="p-3 text-white text-lg text-left">{title}</div>
      <p className="text-[#55a5db] text-sm absolute bottom-3 right-5">
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
