import React from 'react';

const VideoSection = ({ openModal }) => {
  return (
    <div className="video-row flex flex-wrap justify-between overflow-hidden mt-24 mb-24 w-full px-10 gap-8 md:gap-4">
      <div className="video-card flex items-center justify-between w-full md:w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105 md:w-1/5 w-2/5" onClick={() => openModal('Minimalist Rotativo Dang3r 2025')}>
        <img src="Minimalist Rotativo Dang3r 2025.webm" alt="Video 1" className="video-thumbnail w-1/3 cursor-pointer" />
        <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
          <div className="video-title text-lg font-bold text-white absolute top-2.5 right-2.5">Video 1</div>
          <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">Puntos: 150</div>
        </div>
      </div>
      <div className="video-card flex items-center justify-between w-full md:w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105 md:w-1/5 w-2/5" onClick={() => openModal('video2')}>
        <img src="thumbnail2.jpg" alt="Video 2" className="video-thumbnail w-1/3 cursor-pointer" />
        <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
          <div className="video-title text-lg font-bold text-white absolute top-2.5 right-2.5">Video 2</div>
          <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">Puntos: 150</div>
        </div>
      </div>
      <div className="video-card flex items-center justify-between w-full md:w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105 md:w-1/5 w-2/5" onClick={() => openModal('video3')}>
        <img src="thumbnail3.jpg" alt="Video 3" className="video-thumbnail w-1/3 cursor-pointer" />
        <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
          <div className="video-title text-lg font-bold text-white absolute top-2.5 right-2.5">Video 3</div>
          <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">Puntos: 150</div>
        </div>
      </div>
      <div className="video-card flex items-center justify-between w-full md:w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105 md:w-1/5 w-2/5" onClick={() => openModal('video4')}>
        <img src="thumbnail4.jpg" alt="Video 4" className="video-thumbnail w-1/3 cursor-pointer" />
        <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
          <div className="video-title text-lg font-bold text-white absolute top-2.5 right-2.5">Video 4</div>
          <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">Puntos: 150</div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
