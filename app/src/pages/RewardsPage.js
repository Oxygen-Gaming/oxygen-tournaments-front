import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import rewards from '../components/Recompensas/rewardsData';
import Card from '../components/Recompensas/Cardrewards';
import { useNavigate } from 'react-router-dom';

const Rewards = () => {
  const navigate = useNavigate();

  const handleCardClick = (reward) => {
    navigate("/reward-details", { state: { reward } });
  };

  return (
    <div className="bg-[#1AA9FF] text-[18px] font-['Roboto_Condensed'] min-h-screen">
      <Header />

      {/* Banner */}
      <div className="w-11/12 mx-auto h-80 bg-cover bg-center rounded-lg transition-all duration-1000 mt-8 relative">
        <img
          src="https://via.placeholder.com/1920x1080" // Replace with an appropriate image URL
          alt="Recompensas Banner"
          className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Recompensas</h1>
        </div>
      </div>

      <section className="hidden md:flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-16 md:gap-y-32 pt-24 pb-24 px-4 md:px-10 mb-24">
        {rewards.map((reward) => (
          <div key={reward.id} onClick={() => handleCardClick(reward)}>
            <Card {...reward} />
          </div>
        ))}
      </section>
      <div className="md:hidden px-4 mb-16">
        <div className="grid grid-cols-2 gap-2 gap-y-4 mt-4">
          {rewards.map((reward) => (
            <div key={reward.id} onClick={() => handleCardClick(reward)} className="p-1">
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
