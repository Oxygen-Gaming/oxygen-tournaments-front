import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Amigo from '@imgs/Mision_Amigo.jpg';
import Clip from '@imgs/Mision_Clip.jpg';
import Discord from '@imgs/Mision_Discord.jpg';
import Instagram from '@imgs/Mision_Instagram.jpg';
import Quiz from '@imgs/Mision_Quiz.jpg';
import TikTok from '@imgs/Mision_TikTok.jpg';
import Twitter from '@imgs/Mision_X.jpg';
import Camiseta from '@imgs/Mision_Camiseta.jpg';
import Meme from '@imgs/Mision_Meme.jpg';
import Caca from '@imgs/Mision_Caca.jpg';

const MissionDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const mission = location.state?.mission;

  const allMissions = [
    { id: "mission1", image: Amigo, title: "Invita a un Amigo", points: 100 },
    { id: "mission2", image: Clip, title: "Sube un Clip", points: 150 },
    { id: "mission3", image: Discord, title: "Únete a Discord", points: 200 },
    { id: "mission4", image: Instagram, title: "Publica en Instagram", points: 250 },
    { id: "mission5", image: Quiz, title: "Completa el Quiz", points: 300 },
    { id: "mission6", image: TikTok, title: "Crea un TikTok", points: 350 },
    { id: "mission7", image: Twitter, title: "Publica en Twitter", points: 400 },
    { id: "mission8", image: Camiseta, title: "Diseña una Camiseta", points: 450 },
    { id: "mission9", image: Meme, title: "Crea un Meme", points: 500 },
    { id: "mission10", image: Caca, title: "Completa la Misión Caca", points: 550 },
  ];

  // Filter out the current mission and select random recommended missions
  const recommendedMissions = allMissions
    .filter((m) => m.id !== mission?.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!mission) {
    return (
      <div className="bg-[#1AA9FF] text-white h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center">No se encontró información de la misión.</h1>
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
          onClick={() => navigate("/missions")}
        >
          Volver
        </button>

        {/* Mission Details */}
        <div className="flex flex-col lg:flex-row gap-8 bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
          <img
            src={mission.image}
            alt={mission.title}
            className="w-full lg:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between w-full">
            <div>
              <h1 className="text-4xl font-bold mb-4">{mission.title}</h1>
              <div className="bg-[#2a2a2a] p-4 rounded-lg shadow-md mb-4">
                <p className="text-lg text-gray-300">
                  Completa esta misión para ganar puntos y mejorar tu posición en la clasificación.
                </p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold mb-2">Recompensa</h2>
              <p className="text-lg">{mission.points} puntos</p>
            </div>
          </div>
        </div>

        {/* Recommended Missions */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Misiones Recomendadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedMissions.map((recommendedMission) => (
              <div
                key={recommendedMission.id}
                className="bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => navigate("/mission-details", { state: { mission: recommendedMission } })}
              >
                <img
                  src={recommendedMission.image}
                  alt={recommendedMission.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{recommendedMission.title}</h3>
                  <p className="text-blue-400 font-bold">{recommendedMission.points} puntos</p>
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

export default MissionDetailsPage;