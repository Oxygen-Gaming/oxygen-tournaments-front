import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import missions from '../components/Misiones/missions';
import MissionCard from '../components/Misiones/MissionCard';
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import { useNavigate } from "react-router-dom";

const Missions = () => {
  const navigate = useNavigate();

  const handleCardClick = (mission) => {
    navigate("/mission-details", { state: { mission } });
  };

  return (
    <div className="bg-[#1AA9FF] text-[18px] font-['Roboto_Condensed'] min-h-screen">
      {/* Cambiado el color de fondo a #1AA9FF para que coincida con la página de Competiciones */}
      <Header />

      {/* Banner */}
      <div className="w-11/12 mx-auto h-80 bg-cover bg-center rounded-lg transition-all duration-1000 mt-8 relative">
        <img
          src="https://via.placeholder.com/1920x1080" // Replace with an appropriate image URL
          alt="Misiones Banner"
          className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Misiones</h1>
        </div>
      </div>

      <section className="hidden md:flex flex-wrap justify-center gap-x-16 gap-y-20 pt-40 pb-24 px-4 md:px-16 mb-24 lg:flex">
        {missions.map((mission) => (
          <div key={mission.id} onClick={() => handleCardClick(mission)}>
            <MissionCard {...mission} />
          </div>
        ))}
      </section>
      <br></br>
      <div className="md:hidden px-4 mb-16">
        <div className="grid grid-cols-2 gap-8 gap-y-10">
          {missions.map((mission) => (
            <div key={mission.id} onClick={() => handleCardClick(mission)}>
              <MissionCard {...mission} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Missions;