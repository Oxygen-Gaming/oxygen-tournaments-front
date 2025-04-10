import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Follow from '@imgs/Recompensas_Follow.jpg';
import Clave from '@imgs/Recompensas_Clave.jpg';
import Camiseta from '@imgs/Recompensas_Camiseta.jpg';
import Ticket from '@imgs/Recompensas_Ticket.jpg';
import Pavos from '@imgs/Recompensas_V-bucks.jpg';
import Box from '@imgs/Recompensas_Box.jpg';
import Google from '@imgs/Recompensas_10_Google.jpg';
import Playstation from '@imgs/Recompensas_10_Playstation.jpg';
import Silla from '@imgs/Recompensas_Silla.jpg';

const RewardDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reward = location.state?.reward;

  const allRewards = [
    { id: "reward1", image: Follow, title: "Follow en Redes", points: 50 },
    { id: "reward2", image: Clave, title: "Clave de Juego", points: 200 },
    { id: "reward3", image: Camiseta, title: "Camiseta Exclusiva", points: 500 },
    { id: "reward4", image: Ticket, title: "Ticket para Evento", points: 300 },
    { id: "reward5", image: Pavos, title: "V-Bucks", points: 150 },
    { id: "reward6", image: Box, title: "Caja Misteriosa", points: 400 },
    { id: "reward7", image: Google, title: "Tarjeta Google Play", points: 100 },
    { id: "reward8", image: Playstation, title: "Tarjeta PlayStation", points: 100 },
    { id: "reward9", image: Silla, title: "Silla Gamer", points: 1000 },
  ];

  // Filter out the current reward and select random recommended rewards
  const recommendedRewards = allRewards
    .filter((r) => r.id !== reward?.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!reward) {
    return (
      <div className="bg-[#1AA9FF] text-white h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center">No se encontró información de la recompensa.</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#1AA9FF] text-white min-h-screen font-['Roboto_Condensed',sans-serif]">
      <Header />
      <div className="container mx-auto p-6">
        {/* Back Button */}
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mb-6"
          onClick={() => navigate("/rewards")}
        >
          Volver
        </button>

        {/* Reward Details */}
        <div className="flex flex-col lg:flex-row gap-8 bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
          <img
            src={reward.image}
            alt={reward.title}
            className="w-full lg:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between w-full">
            <div>
              <h1 className="text-4xl font-bold mb-4">{reward.title}</h1>
              <div className="bg-[#2a2a2a] p-4 rounded-lg shadow-md mb-4">
                <p className="text-lg text-gray-300">
                  {reward.description || "Obtén esta recompensa exclusiva y disfruta de sus beneficios."}
                </p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold mb-2">Costo</h2>
              <p className="text-lg">{reward.points} puntos</p>
            </div>
          </div>
        </div>

        {/* Recommended Rewards */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Recompensas Recomendadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedRewards.map((recommendedReward) => (
              <div
                key={recommendedReward.id}
                className="bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => navigate("/reward-details", { state: { reward: recommendedReward } })}
              >
                <img
                  src={recommendedReward.image}
                  alt={recommendedReward.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{recommendedReward.title}</h3>
                  <p className="text-blue-400 font-bold">{recommendedReward.points} puntos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RewardDetailsPage;
