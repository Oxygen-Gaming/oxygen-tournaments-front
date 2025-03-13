import React, { useState } from 'react';

const MissionCard = ({ id, title, image, points }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      id={`mission-card-${id}`}
      className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-72 bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg transform transition duration-310 hover:scale-105 relative perspective-1000 ${flipped ? 'rotate-y-180' : ''}`}
    >
      <div className="w-full h-full relative transform-style-preserve-3d transition-transform duration-800">
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-[#18538a] to-[#1e90ff] text-black transform rotate-y-180 backface-hidden rounded-lg">
          <img src={image} alt={title} className="w-55 h-55 object-cover rounded-lg" />
          <p className="text-lg absolute bottom-0 right-2 text-white mb-2">{points}</p>
        </div>
      </div>
    </div>  
  );
};

export default MissionCard;
