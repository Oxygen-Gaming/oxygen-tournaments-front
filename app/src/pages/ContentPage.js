import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoSection from '../components/Contenido/VideoSection';
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";


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

    <div className="font-['Roboto_Condensed',sans-serif] bg-[#1AA9FF] text-black m-0 p-0 min-h-screen flex flex-col items-center md:items-stretch">
      {/* Cambiado el color de fondo a #1AA9FF para que coincida con la página de Competiciones */}
      <Header />
      <MenuHamburguesaNormal />

      {/* Banner */}
      <div className="w-11/12 mx-auto h-80 bg-cover bg-center rounded-lg transition-all duration-1000 mt-8 relative">
        <img
          src="https://via.placeholder.com/1920x1080" // Replace with an appropriate image URL
          alt="Contenido Banner"
          className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Contenido</h1>
        </div>
      </div>

      <div className="flex-grow flex justify-between mt-12 flex-col md:flex-row items-center md:items-start text-left">
        <div className="info-card w-full md:w-2/5 ml-10 m-5 p-5 bg-[#1c1c1c] text-white rounded-lg shadow-lg md:w-2/5 w-11/12">
          {/* Cambiado el color de fondo a #1c1c1c */}
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
        <div className="ranking-table w-full md:w-2/5 ml-5 m-5 p-5 bg-[#1c1c1c] text-white rounded-lg shadow-lg">
          {/* Aumentado ligeramente el tamaño de la tabla de clasificación */}
          <h2 className="text-2xl font-bold mb-4">Clasificación</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4">Posición</th>
                <th className="py-2 px-4">Jugador</th>
                <th className="py-2 px-4">Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#1c1c1c] border-b border-gray-700">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Alex Thunder</td>
                <td className="py-2 px-4">1500</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Sophia Blaze</td>
                <td className="py-2 px-4">1400</td>
              </tr>
              <tr className="bg-[#1c1c1c] border-b border-gray-700">
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-4">Liam Shadow</td>
                <td className="py-2 px-4">1300</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-700">
                <td className="py-2 px-4">4</td>
                <td className="py-2 px-4">Emma Frost</td>
                <td className="py-2 px-4">1200</td>
              </tr>
              <tr className="bg-[#1c1c1c]">
                <td className="py-2 px-4">5</td>
                <td className="py-2 px-4">Noah Phoenix</td>
                <td className="py-2 px-4">1100</td>
              </tr>
            </tbody>
          </table>
        </div>
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