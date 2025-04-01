import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, points, description, footer }) => {
  return (
    <div className="card-container w-60 h-80 relative bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="card-image w-full h-2/3 object-cover" />
      <div className="card-content p-4 text-white">
        <h3 className="card-title text-lg font-bold">{title}</h3>
        {description && <p className="card-description text-sm mt-2">{description}</p>}
        <p className="card-points text-sm mt-4">Puntos: {points}</p>
      </div>
      {footer && <div className="card-footer p-2 bg-gray-900 text-xs text-center">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  description: PropTypes.string, // Nueva propiedad opcional
  footer: PropTypes.string, // Nueva propiedad opcional
};

export default Card;
