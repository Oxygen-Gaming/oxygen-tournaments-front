import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import rewards from '../components/Recompensas/rewardsData';
import Card from '../components/Recompensas/Cardrewards'; 
import { useState } from 'react';
const Rewards = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
  <div className="bg-blue-900 text-[18px] font-['Roboto_Condensed'] min-h-screen">
    <Header />
    <button className="lg:hidden w-full flex flex-col items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
      <div className="w-6 h-0.5 bg-white mb-1"></div>
      <div className="w-6 h-0.5 bg-white mb-1"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </button>
    <div className={`lg:hidden absolute ${isOpen ? 'block' : 'hidden'} w-full relative bg-blue-900 h-full flex flex-col justify-center items-center mt-4 gap-[20px] transition-transform ease-in-out duration-300`}>
      <a href="/" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Inicio</a>
      <a href="/competiciones" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
      <a href="/reglamentos" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
      <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
      <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>        
    </div>
    <div className="container p-6 flex justify-center mt-10">
      <h1 className="text-white text-4xl font-bold text-center md:mx-auto">Recompensas</h1>
      <br></br>
    </div>
    <section className="hidden md:flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-16 md:gap-y-32 pt-24 pb-24 px-4 md:px-10 mb-24">
      {rewards.map((reward) => (
        <Card key={reward.id} {...reward} />
      ))}
    </section>
    <br></br>
    <div className="md:hidden px-4 mb-16">
      <div className="grid grid-cols-2 gap-2 gap-y-4 mt-4">
        {rewards.map((reward) => (
          <div key={reward.id} className="p-1">
            <div className="bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg p-1 relative">
              <img src={reward.image} alt={reward.title} className="w-full h-36 object-cover rounded-lg" />
              <p className="text-white text-xs absolute bottom-1 right-1">{reward.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
   );
}


export default Rewards;
