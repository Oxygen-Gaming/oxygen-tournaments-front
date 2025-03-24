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
      
      <div className="container p-6 flex justify-center items-center mt-10 md:mt-16 lg:mt-24">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Recompensas</h1>
       
      </div>
      <section className="hidden md:grid grid-cols-2 gap-x-20 gap-y-24 md:gap-x-28 md:gap-y-32 pt-40 pb-24 px-10 md:px-32 mb-24 lg:grid justify-items-center">
       
      </section>
      <div className="bg-blue-900 text-[18px] font-['Roboto_Condensed'] min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-12 gap-y-16 justify-items-center px-4"> 
        {rewards.map((reward) => (
          <div key={reward.id} className="p-4">
            <div className="bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg p-4 relative w-full">
              <img src={reward.image} alt="" className="w-full h-[30rem] object-cover rounded-lg" />
              <p className="text-white text-lg absolute bottom-4 right-4">{reward.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <br></br>
      <Footer />
    </div>
  );
};

export default Rewards;
