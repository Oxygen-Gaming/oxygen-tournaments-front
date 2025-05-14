import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import missions from '../components/Misiones/missions';
import MissionCard from '../components/Misiones/MissionCard';
import { useNavigate } from "react-router-dom";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Banner from '@imgs/Header_Misiones.jpg'; // Import the banner image

const Missions = () => {
  const navigate = useNavigate();

  const handleCardClick = (mission) => {
    navigate("/mission-details", { state: { mission } }); // Pass the entire mission object, including the link
  };

  return (
    <div className="bg-black text-white text-[18px] font-['Roboto_Condensed'] min-h-screen">
      <Header />
      <MenuHamburguesaNormal /> {/* Added MenuHamburguesaNormal */}

      {/* Banner */}
      <div className="w-full h-96 bg-cover bg-center relative mt-0">
        <img
          src={Banner} // Replace with an appropriate image URL
          alt="Misiones Banner"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-extrabold text-white">Misiones</h1>
        </div>
      </div>

      <section className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-44 pt-24 pb-32 px-4 md:px-10 mb-32 justify-items-center">

        {missions.map((mission) => (
          <div key={mission.id} onClick={() => handleCardClick(mission)} className="w-[360px] h-[320px] rounded-lg shadow-lg cursor-pointer">
            <MissionCard {...mission} />
          </div>
        ))}
      </section>

      <div className="md:hidden px-4 mb-24">
        <div className="grid grid-cols-1 gap-16 mt-12"> {/* Single column for mobile */}
          {missions.map((mission) => (
            <div key={mission.id} onClick={() => handleCardClick(mission)} className="w-full h-80 rounded-lg shadow-lg">
              <div className="relative">
                <img src={mission.image} alt={mission.title} className="w-full h-[360px] object-cover rounded-lg" />
                <p className="text-white text-lg absolute bottom-4 right-4 flex items-center">
                  <span className="mr-1">Puntos:</span> {mission.points}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Missions;