import React from 'react';

const VideoSection = ({ mainVideoSrc, handleVideoClick, animate }) => {
  return (
    <div className="video-section w-11/12 mx-auto mt-12">
      {/* Main large video */}
      <div
        className={`main-video w-full md:w-3/4 mx-auto mb-10 transition-transform duration-300 ${
          animate ? "scale-90 opacity-50" : "scale-100 opacity-100"
        }`}
      >
        <video
          src={mainVideoSrc}
          controls
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Row of smaller videos */}
      <div className="small-videos grid grid-cols-1 md:grid-cols-3 gap-4">
        <video
          src="video1.webm"
          controls
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleVideoClick("video1.webm")}
        />
        <video
          src="video2.webm"
          controls
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleVideoClick("video2.webm")}
        />
        <video
          src="video3.webm"
          controls
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleVideoClick("video3.webm")}
        />
      </div>
    </div>
  );
};

export default VideoSection;