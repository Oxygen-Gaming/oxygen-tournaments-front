import React, { useState, useEffect } from 'react';
import Header from "./Header"; // Import Header component
import Footer from "./Footer"; // Import Footer component
import logo from '../img/Logo_Blue.png';
import discord from '../img/discord.png';
import instagram from '../img/instagram.png';
import tiktok from '../img/tiktok.png';
import twitter from '../img/twitter.png';
import oxygen from '../img/Logo_Blue.png';

const Contenido = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState('');
  const [modalVideoTime, setModalVideoTime] = useState(0);
  const [modalProgressPercentage, setModalProgressPercentage] = useState('0%');

  const openModal = (videoId) => {
    const savedTime = parseFloat(localStorage.getItem(videoId + '_time')) || 0;
    const savedPercentage =
      localStorage.getItem(videoId + '_percentage') || '0%';
    setModalVideoSrc(videoId + '.webm');
    setModalVideoTime(savedTime);
    setModalProgressPercentage(savedPercentage);
    setModalVisible(true);
  };

  const closeModal = () => {
    const video = document.getElementById('modalVideo');
    const videoId = modalVideoSrc.split('/').pop().split('.')[0];
    localStorage.setItem(videoId + '_time', video.currentTime);
    const porcentaje = (video.currentTime / video.duration) * 100;
    localStorage.setItem(videoId + '_percentage', Math.round(porcentaje) + '%');
    setModalVisible(false);
  };

  const updateProgress = () => {
    const video = document.getElementById('modalVideo');
    const porcentaje = (video.currentTime / video.duration) * 100;
    if (!isNaN(porcentaje)) {
      setModalProgressPercentage(Math.round(porcentaje) + '%');
    } else {
      setModalProgressPercentage('0%');
    }
  };

  const compartir = () => {
    alert('¡Has ganado 200 puntos de loyalty por compartir el video!');
  };

  useEffect(() => {
    const video = document.getElementById('modalVideo');
    if (video) {
      video.currentTime = modalVideoTime;
      video.addEventListener('timeupdate', updateProgress);
    }
  }, [modalVideoTime, modalVisible]);

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [modalVisible]);

  return (
    <div>
      <Header /> {/* Add Header component */}
      <div className="font-sans bg-blue-900 text-black m-0 p-0 min-h-screen flex flex-col"> {/* Add min-h-screen and flex classes */}
        <div className="container p-5 flex justify-center items-center mt-16"> {/* Change mt-12 to mt-16 to move title down */}
          <h1 className="text-white text-4xl font-bold ml-80">Contenido</h1> {/* Change ml-10 to ml-20 to move it further to the right */}
        </div>
        <div className="flex-grow flex justify-between mt-12"> {/* Add mt-12 to create more space below "Contenido" */}
          <div className="info-card w-2/5 ml-10 m-5 p-5 bg-gradient-to-t from-blue-900 to-blue-500 text-white rounded-lg shadow-lg"> {/* Add ml-10 to create space on the left */}
            <h2 className="text-2xl">Sobre Oxygen Gaming</h2>
            <p>Oxygen Gaming es una plataforma dedicada a la organización de torneos de videojuegos. Ofrecemos una amplia variedad de contenido para los entusiastas de los videojuegos, incluyendo:</p>
            <ul className="list-disc list-inside">
              <li>Transmisiones en vivo de torneos</li>
              <li>Videos destacados de partidas</li>
              <li>Entrevistas con jugadores profesionales</li>
              <li>Guías y tutoriales para mejorar tus habilidades</li>
              <li>Noticias y actualizaciones sobre el mundo de los videojuegos</li>
            </ul>
            <p>Únete a nuestra comunidad y participa en nuestros torneos para ganar premios y reconocimiento. ¡Mantente conectado y sigue mejorando con Oxygen Gaming!</p>
          </div>
          <table className="ranking-table w-1/5 m-5 mr-10 border-collapse shadow-lg rounded-lg overflow-hidden"> {/* Add mr-10 to separate from the right */}
            <thead>
              <tr>
                <th className="bg-blue-500 text-white font-bold p-2.5">Posición</th>
                <th className="bg-blue-500 text-white font-bold p-2.5">Nombre</th>
                <th className="bg-blue-500 text-white font-bold p-2.5">Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                <td className="p-2.5 border-b border-white">1</td>
                <td className="p-2.5 border-b border-white">Juan Pérez</td>
                <td className="p-2.5 border-b border-white">1500</td>
              </tr>
              <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                <td className="p-2.5 border-b border-white">2</td>
                <td className="p-2.5 border-b border-white">María López</td>
                <td className="p-2.5 border-b border-white">1400</td>
              </tr>
              <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                <td className="p-2.5 border-b border-white">3</td>
                <td className="p-2.5 border-b border-white">Carlos García</td>
                <td className="p-2.5 border-b border-white">1300</td>
              </tr>
              <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                <td className="p-2.5 border-b border-white">4</td>
                <td className="p-2.5 border-b border-white">Ana Martínez</td>
                <td className="p-2.5 border-b border-white">1200</td>
              </tr>
              <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                <td className="p-2.5 border-b border-white">5</td>
                <td className="p-2.5 border-b border-white">Jose Juan</td>
                <td className="p-2.5 border-b border-white">1100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="video-row flex justify-between flex-nowrap overflow-hidden mt-24 mb-24 w-full px-10 gap-4"> {/* Add gap-4 to reduce space between video cards */}
          <div
            className="video-card flex items-center justify-between w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105"
            onClick={() => openModal('Minimalist Rotativo Dang3r 2025')}
          >
            <img
              src="Minimalist Rotativo Dang3r 2025.webm"
              alt="Video 1"
              className="video-thumbnail w-1/3 cursor-pointer"
            />
            <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
              <div className="video-title text-lg font-bold text-white absolute top-2.5 right-2.5">
                Video 1
              </div> {/* Change text color to white and position at top right */}
              <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">
                Puntos: 150
              </div>
            </div>
          </div>
          <div
            className="video-card flex items-center justify-between w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105"
            onClick={() => openModal('video2')}
          >
            <img
              src="thumbnail2.jpg"
              alt="Video 2"
              className="video-thumbnail w-1/3 cursor-pointer"
            />
            <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
              <div className="video-title text-lg font-bold text-white absolute top-2.5 right-2.5">
                Video 2
              </div> {/* Change text color to white and position at top right */}
              <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">
                Puntos: 150
              </div>
            </div>
          </div>
          <div
            className="video-card flex items-center justify-between w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105"
            onClick={() => openModal('video3')}
          >
            <img
              src="thumbnail3.jpg"
              alt="Video 3"
              className="video-thumbnail w-1/3 cursor-pointer"
            />
            <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
              <div className="video-title text-lg font-bold text-white absolute top-2.5 right-2.5">
                Video 3
              </div> {/* Change text color to white and position at top right */}
              <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">
                Puntos: 150
              </div>
            </div>
          </div>
          <div
            className="video-card flex items-center justify-between w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105"
            onClick={() => openModal('video4')}
          >
            <img
              src="thumbnail4.jpg"
              alt="Video 4"
              className="video-thumbnail w-1/3 cursor-pointer"
            />
            <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
              <div className="video-title text-lg font-bold text-white absolute top-2.5 right-2.5">
                Video 4
              </div> {/* Change text color to white and position at top right */}
              <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">
                Puntos: 150
              </div>
            </div>
          </div>
        </div>
        {modalVisible && (
          <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="modal-content p-5 rounded-lg shadow-lg relative w-3/4 h-3/4"> {/* Make the modal larger and remove white background */}
              <button
                className="absolute top-2 right-2 text-white"
                onClick={closeModal}
              >
                X
              </button> {/* Change text color to white */}
              <video
                id="modalVideo"
                src={modalVideoSrc}
                controls
                className="w-full h-4/5"
              /> {/* Increase video height slightly */}
              <div className="progress-bar bg-gray-200 h-2 rounded mt-2">
                <div
                  className="progress bg-blue-500 h-full rounded"
                  style={{ width: modalProgressPercentage }}
                ></div>
              </div>
              <button
                className="absolute bottom-16 right-2 bg-[#18538a] text-white px-4 py-2 rounded mt-2"
                onClick={compartir}
              >
                Compartir
              </button> {/* Move share button higher */}
            </div>
          </div>
        )}
        <Footer /> {/* Add Footer component */}
      </div>
    </div>
  );
};

export default Contenido;
