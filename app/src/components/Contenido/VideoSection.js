import React from 'react';

const videos = [
  { id: 'Minimalist Rotativo Dang3r 2025', thumbnail: 'Minimalist Rotativo Dang3r 2025.webm', title: 'Video 1', points: 150 },
  { id: 'video2', thumbnail: 'thumbnail2.jpg', title: 'Video 2', points: 150 },
  { id: 'video3', thumbnail: 'thumbnail3.jpg', title: 'Video 3', points: 150 },
  { id: 'video4', thumbnail: 'thumbnail4.jpg', title: 'Video 4', points: 150 },
];

const VideoSection = ({ openModal }) => {
  return (
    <div className="video-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 mb-24 px-10">
      {videos.map((video) => (
        <div
          key={video.id}
          className="video-card bg-[#1c1c1c] rounded-lg p-4 shadow-lg transition-transform duration-300 relative hover:scale-105"
          onClick={() => openModal(video.id)}
        >
          <img src={video.thumbnail} alt={video.title} className="video-thumbnail w-full h-[150px] object-cover rounded-lg mb-4" />
          <div className="video-info">
            <h3 className="video-title text-lg font-bold text-white">{video.title}</h3>
            <p className="video-points text-white mt-2">Puntos: {video.points}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSection;
