import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import rewards from '../components/Recompensas/rewardsData'; 
import RewardCard from '../components/Recompensas/Cardrewards'; 
import { useNavigate } from "react-router-dom";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Banner from '@imgs/Headers_Recompensas_2.webp'; 

const Rewards = () => {
  const navigate = useNavigate();

  const handleCardClick = (reward) => {
    navigate("/reward-details", { state: { reward } });
  };

  return (
    <div className="bg-black text-[18px] font-['Roboto_Condensed'] min-h-screen">
      <Header />
      <MenuHamburguesaNormal /> {/* Added MenuHamburguesaNormal */}

      {/* Banner */}
      <div className="w-full h-96 bg-cover bg-center relative mt-0"> {/* Increased height to h-96 */}
        <img
          src={Banner} // Replace with an appropriate image URL
          alt="Rewards Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Recompensas</h1>
        </div>
      </div>

      <section className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-44 pt-24 pb-32 px-4 md:px-10 mb-32 justify-items-center">



        {rewards.filter((reward) => reward.title !== "Follow por parte de Oxygen").map((reward) => (
          <div key={reward.id} onClick={() => handleCardClick(reward)} className="w-[360px] h-[320px] rounded-lg shadow-lg">
            <RewardCard {...reward} />
          </div>
        ))}
      </section>
      <div className="md:hidden px-4 mb-24">
        <div className="grid grid-cols-1 gap-16 mt-12"> {/* Single column for mobile */}
          {rewards.filter((reward) => reward.title !== "Follow por parte de Oxygen").map((reward) => (
            <div key={reward.id} onClick={() => handleCardClick(reward)} className="w-full h-80 rounded-lg shadow-lg">
              <div className="relative">
                <img src={reward.image} alt={reward.title} className="w-full h-[360px] object-cover rounded-lg" />
                <p className="text-white text-lg absolute bottom-4 right-4 flex items-center">
                  <span className="mr-1">Puntos:</span> {reward.points}
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

export default Rewards;