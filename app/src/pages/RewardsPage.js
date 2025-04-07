import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import rewards from '../components/Recompensas/rewardsData';
import Card from '../components/Recompensas/Cardrewards';
import { useState } from 'react';
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";

const Rewards = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1AA9FF] text-[18px] font-['Roboto_Condensed'] min-h-screen">
      {/* Cambiado el color de fondo a #1AA9FF para que coincida con la página de Competiciones */}
      <Header />
      
      <div className="w-11/12 mx-auto mt-8">
        <h1 className="text-5xl text-white font-extrabold text-center">Recompensas</h1>
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
};

export default Rewards;
