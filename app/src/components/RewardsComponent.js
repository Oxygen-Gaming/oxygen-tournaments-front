import React from 'react';
import Header from './Header';
import Footer from './Footer';
import rewards from './rewardsData';
import Card from './Cardrewards'; 

const Rewards = () => {
  return (
    <div className="bg-[#18538a] text-[18px]">
      <Header />
      <div className="container p-6 flex justify-center mt-10">
        <h1 className="text-white text-4xl font-bold ml-80">Recompensas</h1>
      </div>
      <section className="cards-container flex flex-wrap justify-center gap-16 pt-40 mb-24">
        {rewards.map((reward) => (
          <Card key={reward.id} {...reward} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Rewards;
