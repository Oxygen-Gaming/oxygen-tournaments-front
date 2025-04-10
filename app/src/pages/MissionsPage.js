import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import missions from '../components/Misiones/missions';
import MissionCard from '../components/Misiones/MissionCard';
import { useNavigate } from "react-router-dom";

const Missions = () => {
  const navigate = useNavigate();

  const handleCardClick = (mission) => {
    navigate("/mission-details", { state: { mission } });
  };

  return (
    <div className="bg-[#1AA9FF] text-[18px] font-['Roboto_Condensed'] min-h-screen">
      <Header />

      {/* Banner */}
      <div className="w-11/12 mx-auto h-96 bg-cover bg-center rounded-lg transition-all duration-1000 mt-8 relative">
        <img
          src="https://via.placeholder.com/1920x1080" // Replace with an appropriate image URL
          alt="Misiones Banner"
          className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <h1 className="text-6xl font-extrabold text-white">Misiones</h1>
        </div>
      </div>

      <section className="hidden md:flex flex-wrap justify-center gap-x-12 gap-y-16 md:gap-x-28 md:gap-y-44 pt-24 pb-32 px-4 md:px-10 mb-32">
        {missions.map((mission) => (
          <div key={mission.id} onClick={() => handleCardClick(mission)} className="w-[440px] h-[540px] bg-[#1c1c1c] rounded-lg shadow-lg p-4">
            <MissionCard {...mission} />
          </div>
        ))}
      </section>
      <div className="md:hidden px-4 mb-24">
        <div className="grid grid-cols-1 gap-16 mt-12"> {/* Single column for mobile */}
          {missions.map((mission) => (
            <div key={mission.id} onClick={() => handleCardClick(mission)} className="p-4 bg-[#1c1c1c] rounded-lg shadow-lg">
              <div className="relative">
                <img src={mission.image} alt={mission.title} className="w-full h-80 object-cover rounded-lg" />
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