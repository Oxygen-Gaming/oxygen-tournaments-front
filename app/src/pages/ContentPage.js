import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoSection from '../components/Contenido/VideoSection';
import RankingTable from '../components/Contenido/RankingTable';

const Contenido = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState('');
  const [modalVideoTime, setModalVideoTime] = useState(0);
  const [modalProgressPercentage, setModalProgressPercentage] = useState('0%');

  const openModal = (videoId) => {
    const savedTime = parseFloat(localStorage.getItem(videoId + "_time")) || 0;
    const savedPercentage = localStorage.getItem(videoId + "_percentage") || "0%";
    setModalVideoSrc(videoId + ".webm");
    setModalVideoTime(savedTime);
    setModalProgressPercentage(savedPercentage);
    setModalVisible(true);
  };

  const closeModal = () => {
    const video = document.getElementById("modalVideo");
    const videoId = modalVideoSrc.split('/').pop().split('.')[0];
    localStorage.setItem(videoId + "_time", video.currentTime);
    const porcentaje = (video.currentTime / video.duration) * 100;
    localStorage.setItem(videoId + "_percentage", Math.round(porcentaje) + "%");
    setModalVisible(false);
  };

  const updateProgress = () => {
    const video = document.getElementById("modalVideo");
    const porcentaje = (video.currentTime / video.duration) * 100;
    if (!isNaN(porcentaje)) {
      setModalProgressPercentage(Math.round(porcentaje) + "%");
    } else {
      setModalProgressPercentage("0%");
    }
  };

  const compartir = () => {
    alert("¡Has ganado 200 puntos de loyalty por compartir el video!");
  };

  useEffect(() => {
    const video = document.getElementById("modalVideo");
    if (video) {
      video.currentTime = modalVideoTime;
      video.addEventListener("timeupdate", updateProgress);
    }
  }, [modalVideoTime, modalVisible]);

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [modalVisible]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-['Roboto_Condensed',sans-serif] bg-blue-900 text-black m-0 p-0 min-h-screen flex flex-col">
      <Header />
      <button className="lg:hidden w-full flex flex-col items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      <div className={`lg:hidden absolute ${isOpen ? 'block' : 'hidden'} w-full relative bg-blue-900 h-full flex flex-col justify-center items-center mt-4 gap-[20px] transition-transform ease-in-out duration-300`}>
        <a href="/" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Inicio</a>
        <a href="/competiciones" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
        <a href="/reglamentos" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
        <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
        <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>        
      </div>
      <div className="container p-5 flex justify-center items-center mt-16">
        <h1 className="text-white text-4xl font-bold ml-80 md:ml-0 md:text-left text-left md:text-center">Contenido</h1>
      </div>
      <div className="flex-grow flex justify-between mt-12 flex-col md:flex-row items-center md:items-start">
        <div className="info-card w-full md:w-2/5 ml-10 m-5 p-5 bg-gradient-to-t from-blue-900 to-blue-500 text-white rounded-lg shadow-lg md:w-2/5 w-4/5">
          <h2 className="text-2xl">Sobre Oxygen Gaming</h2>
          <p>Oxygen Gaming es una plataforma dedicada a la organización de torneos de videojuegos. Ofrecemos una amplia variedad de contenido para los entusiastas de los videojuegos, incluyendo:</p>
          <ul className="list-disc list-inside">
            <br></br>
            <li>Transmisiones en vivo de torneos</li>
            <li>Videos destacados de partidas</li>
            <li>Entrevistas con jugadores profesionales</li>
            <li>Guías y tutoriales para mejorar tus habilidades</li>
            <li>Noticias y actualizaciones sobre el mundo de los videojuegos</li>
          </ul>
          <br></br>
          <p>Únete a nuestra comunidad y participa en nuestros torneos para ganar premios y reconocimiento. ¡Mantente conectado y sigue mejorando con Oxygen Gaming!</p>
        </div>
        <RankingTable />
      </div>
      <VideoSection openModal={openModal} />
      {modalVisible && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="modal-content p-5 rounded-lg shadow-lg relative w-3/4 h-3/4">
            <button className="absolute top-2 right-2 text-white" onClick={closeModal}>X</button>
            <video id="modalVideo" src={modalVideoSrc} controls className="w-full h-4/5" />
            <div className="progress-bar bg-gray-200 h-2 rounded mt-2">
              <div className="progress bg-blue-500 h-full rounded" style={{ width: modalProgressPercentage }}></div>
            </div>
            <button className="absolute bottom-16 right-2 bg-[#18538a] text-white px-4 py-2 rounded mt-2" onClick={compartir}>Compartir</button>
          </div>
        </div>
      )}
      <div className="mt-10 md:mt-24"></div>
      <Footer />
    </div>
  );
};

export default Contenido;
