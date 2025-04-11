import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import RankingTable from '@components/Contenido/RankingTable';
import VideoSection from '@components/Contenido/VideoSection';

const Contenido = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mainVideoSrc, setMainVideoSrc] = useState("main-video.webm"); // Default main video source
  const [animate, setAnimate] = useState(false); // Animation state

  const handleVideoClick = (videoSrc) => {
    setAnimate(true); // Trigger animation
    setTimeout(() => {
      setMainVideoSrc(videoSrc); // Update main video source
      setAnimate(false); // Reset animation
    }, 300); // Animation duration
  };

  return (
    <div className="font-['Roboto_Condensed',sans-serif] bg-[#1AA9FF] text-black m-0 p-0 min-h-screen flex flex-col items-center md:items-stretch">
      {/* Cambiado el color de fondo a #1AA9FF para que coincida con la página de Competiciones */}
      <Header />
      <MenuHamburguesaNormal />

       {/* Banner */}
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

      {/* Page Introduction */}
      <div className="w-11/12 mx-auto mt-20 text-center text-white">
        {/* Added text-white to make the text color white */}
        <h2 className="text-4xl font-bold mb-4">Bienvenido a la página de contenido</h2>
        <p className="text-lg">
          Aquí encontrarás videos destacados, información sobre nuestra comunidad, y una tabla de clasificación para que puedas ver quién lidera en Oxygen Gaming. ¡Explora y disfruta del contenido que hemos preparado para ti!
        </p>
      </div>

      {/* Video Section */}
      <VideoSection
        mainVideoSrc={mainVideoSrc}
        handleVideoClick={handleVideoClick}
        animate={animate}
      />

      <br></br>
      <h1 className="text-5xl font-bold text-center mt-12 text-white">Tabla de clasificación</h1>
      <p className="text-center text-xl mt-6 mx-6 text-white">
        ¡Mira los videos destacados y acumula puntos para subir en la tabla de clasificación! 
        Participa activamente y demuestra que eres el mejor en Oxygen Gaming.
      </p>
      <RankingTable />

      <div className="mt-10 md:mt-24"></div>
      <Footer />
    </div>
  );
};

export default Contenido;