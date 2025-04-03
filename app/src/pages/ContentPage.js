import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoSection from '../components/Contenido/VideoSection';
import RankingTable from '../components/Contenido/RankingTable';
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

    <div className="font-['Roboto_Condensed',sans-serif] bg-blue-900 text-black m-0 p-0 min-h-screen flex flex-col items-center md:items-stretch">

      <Header />
      <MenuHamburguesaNormal />

      <div className="container p-5 flex justify-center items-center mt-16 text-center">
        <h1 className="text-white text-4xl font-bold md:ml-0">Contenido</h1>
      </div>
      <div className="flex-grow flex justify-between mt-12 flex-col md:flex-row items-center md:items-start text-left">
        <div className="info-card w-full md:w-2/5 ml-10 m-5 p-5 bg-gradient-to-t from-blue-900 to-blue-500 text-white rounded-lg shadow-lg md:w-2/5 w-11/12">

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