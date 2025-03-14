import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import missions from '../components/Misiones/missions';
import MissionCard from '../components/Misiones/MissionCard';
import { useState } from 'react';

const Missions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#18538a] text-[18px] font-['Roboto_Condensed'] min-h-screen lg:p-0 pt-[30px] flex flex-col gap-[35px]">
      <Header />
      <button className="lg:hidden w-full flex flex-col items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      <div className={`lg:hidden absolute ${isOpen ? 'block' : 'hidden'} w-full relative bg-blue-900 h-full flex flex-col justify-center items-center mt-4 gap-[20px] transition-transform ease-in-out duration-300`}>
        <a href="/" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Inicio</a>
        <a href="/competition" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Competiciones</a>
        <a href="/content" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Contenido</a>
        <a href="/missions" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Misiones</a>
        <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Recompensas</a>        
      </div>
      <div className="container p-6 flex justify-center mt-10">
        <h1 className="text-white text-4xl font-bold text-center md:text-left ml-0 md:ml-80">Misiones</h1>
        <br></br>
      </div>
      <section className="hidden md:flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-16 md:gap-y-32 pt-24 pb-24 px-4 md:px-10 mb-24">
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
                <img src={mission.image} alt={mission.title} className="w-full h-36 object-cover rounded-lg" />
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