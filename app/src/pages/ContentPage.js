import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import RankingTable from '@components/Contenido/RankingTable';

const Contenido = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mainVideoSrc, setMainVideoSrc] = useState("main-video.webm");
  const [animateMainVideo, setAnimateMainVideo] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const videoRef = useRef(null);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  const handleVideoClick = (videoSrc) => {
    setAnimateMainVideo(true); // Trigger animation
    setTimeout(() => {
      setMainVideoSrc(videoSrc);
      setAnimateMainVideo(false); // Reset animation after transition
    }, 300); // Match the animation duration
  };

  const handleShareClick = () => {
    setShareMessage("¡Has compartido el video y has ganado 300 puntos!");
    setTimeout(() => setShareMessage(""), 3000); // Clear message after 3 seconds
  };

  const getVideoProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      return duration ? `${Math.floor((currentTime / duration) * 100)}%` : "0%";
    }
    return "0%";
  };

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case "creadores":
        return "Creadores de Contenido";
      case "valorant":
        return "Valorant";
      case "lol":
        return "League of Legends";
      case "rocketleague":
        return "Rocket League";
      default:
        return "";
    }
  };

  const getCategoryDescription = () => {
    switch (selectedCategory) {
      case "creadores":
        return "Descubre los mejores videos creados por nuestra comunidad. ¡Explora y disfruta!";
      case "valorant":
        return "Mira los mejores momentos y estrategias de Valorant. ¡Aprende de los mejores!";
      case "lol":
        return "Revive las mejores jugadas y estrategias de League of Legends.";
      case "rocketleague":
        return "Disfruta de las jugadas más emocionantes de Rocket League.";
      default:
        return "";
    }
  };

  return (
    <div className="font-['Roboto_Condensed',sans-serif] bg-[#1AA9FF] text-black m-0 p-0 min-h-screen flex flex-col items-center md:items-stretch">
      <Header />
      <MenuHamburguesaNormal />

      {/* Banner */}
      {!selectedCategory && (
        <div className="w-full h-96 bg-cover bg-center relative mt-0">
          <img
            src="https://via.placeholder.com/1920x1080" // Replace with an appropriate image URL
            alt="Contenido Banner"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-6xl font-extrabold text-white">Contenido</h1>
          </div>
        </div>
      )}

      {/* Page Title and Back Button */}
      {selectedCategory && (
        <div className="w-11/12 mx-auto mt-6 flex items-center justify-between">
          <button
            onClick={handleBackClick}
            className="bg-[#007ACC] text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Volver
          </button>
          <h2 className="text-4xl font-bold text-white text-center flex-1">{getCategoryTitle()}</h2>
        </div>
      )}

      {/* Category Description */}
      {selectedCategory && (
        <div className="w-11/12 mx-auto mt-4 text-center">
          <p className="text-lg text-white">{getCategoryDescription()}</p>
        </div>
      )}

      {/* Category-Specific Video Section */}
      {selectedCategory && (
        <div className="w-11/12 mx-auto mt-12 flex flex-col md:flex-row gap-6">
          {/* Main Video */}
          <div className="relative flex-1">
            <video
              ref={videoRef}
              src={mainVideoSrc}
              controls
              className={`w-3/4 h-auto rounded-lg shadow-lg mx-auto transition-transform duration-500 ${
                animateMainVideo ? "scale-90 opacity-50" : "scale-100 opacity-100"
              }`}
            />
          </div>

          {/* Video Info Card Slightly Larger */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg w-56 h-48 flex flex-col justify-between mt-36">
            <h3 className="text-sm text-center font-bold mb-2">Título del Video</h3>
            <p className="text-xs mb-2">Progreso: {getVideoProgress()}</p>
            <button
              onClick={handleShareClick}
              className="bg-blue-600 text-white text-xs px-2 py-1 rounded shadow hover:bg-blue-700 transition"
            >
              Compartir
            </button>
            {shareMessage && (
              <p className="text-green-400 text-xs mt-2">{shareMessage}</p>
            )}
          </div>
        </div>
      )}

      {/* Videos Below Main Video */}
      {selectedCategory && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {["video1.webm", "video2.webm", "video3.webm"].map((videoSrc, index) => (
            <video
              key={index}
              src={videoSrc}
              controls
              className={`w-5/6 h-auto rounded-lg shadow-lg cursor-pointer mx-auto transition-transform duration-500 ${
                animateMainVideo === videoSrc ? "scale-90 opacity-50" : "scale-100 opacity-100"
              }`}
              onClick={() => {
                setAnimateMainVideo(videoSrc); // Apply animation only to the clicked video
                setTimeout(() => {
                  setMainVideoSrc(videoSrc);
                  setAnimateMainVideo(false); // Reset animation after transition
                }, 500); // Match animation duration
              }}
            />
          ))}
        </div>
      )}

      {/* Page Introduction */}
      {!selectedCategory && (
        <div className="w-11/12 mx-auto mt-20 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Bienvenido a la página de contenido</h2>
          <p className="text-lg">
            Aquí encontrarás videos destacados, información sobre nuestra comunidad, y una tabla de clasificación para que puedas ver quién lidera en Oxygen Gaming. ¡Explora y disfruta del contenido que hemos preparado para ti!
          </p>
        </div>
      )}

      {/* Category Cards */}
      {!selectedCategory && (
        <div className="w-11/12 mx-auto mt-20 flex flex-col gap-4">
          <div
            className="bg-black p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform text-white flex h-48"
            onClick={() => handleCardClick("creadores")}
          >
            <div className="flex-1 flex flex-row">
              {/* Left Section: Title and Subtitle */}
              <div className="w-1/3 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-2 text-center">Creadores de Contenido</h3>
                <p className="text-base text-center">Descubre los mejores videos creados por nuestra comunidad. ¡Explora y disfruta!</p>
              </div>
              {/* Middle Section: First Video */}
              <div className="w-1/3 flex justify-center items-center">
                <video
                  src="video1.webm"
                  controls
                  className="w-30 h-27 rounded-lg shadow-lg cursor-pointer"
                />
              </div>
              {/* Right Section: Second Video */}
              <div className="w-1/3 flex justify-center items-center">
                <video
                  src="video2.webm"
                  controls
                  className="w-30 h-27 rounded-lg shadow-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div
            className="bg-black p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform text-white flex h-48"
            onClick={() => handleCardClick("valorant")}
          >
            <div className="flex-1 flex flex-row">
              {/* Left Section: Title and Subtitle */}
              <div className="w-1/3 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-2 text-center">Valorant</h3>
                <p className="text-base text-center">Mira los mejores momentos y estrategias de Valorant. ¡Aprende de los mejores!</p>
              </div>
              {/* Middle Section: First Video */}
              <div className="w-1/3 flex justify-center items-center">
                <video
                  src="video1.webm"
                  controls
                  className="w-30 h-27 rounded-lg shadow-lg cursor-pointer"
                />
              </div>
              {/* Right Section: Second Video */}
              <div className="w-1/3 flex justify-center items-center">
                <video
                  src="video2.webm"
                  controls
                  className="w-30 h-27 rounded-lg shadow-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div
            className="bg-black p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform text-white flex h-48"
            onClick={() => handleCardClick("lol")}
          >
            <div className="flex-1 flex flex-row">
              {/* Left Section: Title and Subtitle */}
              <div className="w-1/3 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-2 text-center">LOL</h3>
                <p className="text-base text-center">Revive las mejores jugadas y estrategias de League of Legends.</p>
              </div>
              {/* Middle Section: First Video */}
              <div className="w-1/3 flex justify-center items-center">
                <video
                  src="video1.webm"
                  controls
                  className="w-30 h-27 rounded-lg shadow-lg cursor-pointer"
                />
              </div>
              {/* Right Section: Second Video */}
              <div className="w-1/3 flex justify-center items-center">
                <video
                  src="video2.webm"
                  controls
                  className="w-30 h-27 rounded-lg shadow-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div
            className="bg-black p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform text-white flex h-48"
            onClick={() => handleCardClick("rocketleague")}
          >
            <div className="flex-1 flex flex-row">
              {/* Left Section: Title and Subtitle */}
              <div className="w-1/3 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-2 text-center">Rocket League</h3>
                <p className="text-base text-center">Disfruta de las jugadas más emocionantes de Rocket League.</p>
              </div>
              {/* Middle Section: First Video */}
              <div className="w-1/3 flex justify-center items-center">
                <video
                  src="video1.webm"
                  controls
                  className="w-30 h-27 rounded-lg shadow-lg cursor-pointer"
                />
              </div>
              {/* Right Section: Second Video */}
              <div className="w-1/3 flex justify-center items-center">
                <video
                  src="video2.webm"
                  controls
                  className="w-30 h-27 rounded-lg shadow-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ranking Table (only on main page) */}
      {!selectedCategory && (
        <div className="mt-12 w-11/12 mx-auto">
          <RankingTable />
        </div>
      )}

      {/* Footer Spacing */}
      <div className="mt-20"></div>
      <Footer />
    </div>
  );
};

export default Contenido;