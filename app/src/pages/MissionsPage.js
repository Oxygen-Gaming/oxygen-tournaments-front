import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import missions from '../components/Misiones/missions';
import MissionCard from '../components/Misiones/MissionCard';
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";

const Missions = () => {
  return (
    <div className="bg-[#18538a] text-[18px] font-['Roboto_Condensed'] min-h-screen">
      <Header />
      <MenuHamburguesaNormal />
      <div className="container p-6 flex justify-center items-center mt-10 md:mt-16 lg:mt-24">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Misiones</h1>
        <br></br>
      </div>
      <section className="hidden md:flex flex-wrap justify-center gap-x-12 gap-y-16 md:gap-x-24 md:gap-y-32 pt-60 pb-24 px-4 md:px-28 mb-24 lg:flex">
        {missions.map((mission) => (
          <MissionCard key={mission.id} {...mission} />
        ))}
      </section>
      <br></br>
      <div className="md:hidden px-4 mb-16">
        <div className="grid grid-cols-2 gap-2 gap-y-4">
          {missions.map((mission) => (
            <div key={mission.id} className="p-1">
              <div className="bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg p-1 relative">
                <img src={mission.image} alt={mission.title} className="w-full h-auto object-contain rounded-lg" />
                <p className="text-white text-xs absolute bottom-1 right-1">{mission.points}</p>
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