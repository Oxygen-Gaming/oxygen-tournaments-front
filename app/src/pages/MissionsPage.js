import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import missions from '../components/Misiones/missions';
import MissionCard from '../components/Misiones/MissionCard';
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";

const Missions = () => {
  return (
    <div className="bg-blue-900 text-[18px] font-['Roboto_Condensed'] min-h-screen">
      <Header />
     
      <div className="w-11/12 mx-auto mt-8">
        <h1 className="text-5xl text-white font-extrabold text-center">Misiones</h1>
      </div>
      <section className="hidden md:flex flex-wrap justify-center gap-x-16 gap-y-20 pt-40 pb-24 px-4 md:px-16 mb-24 lg:flex">
        {missions.map((mission) => (
          <MissionCard key={mission.id} {...mission} />
        ))}
      </section>
      <br></br>
      <div className="md:hidden px-4 mb-16">
        <div className="grid grid-cols-2 gap-8 gap-y-10">
          {missions.map((mission) => (
            <div key={mission.id} className="p-4">
              <div className="bg-gradient-to-t from-[#1e3a8a] to-[#2563eb] rounded-lg shadow-lg p-1 relative">
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