import React, { useEffect } from "react";
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

  useEffect(() => {
    // Animación para desplazarse al principio de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const allMissions = [
    { id: 1, image: Amigo, title: "Completa la Misión: Invita a un Amigo", points: 250, description: "Comparte la diversión con tus amigos. Invítalos a unirse a nuestra comunidad y juntos podrán disfrutar de más momentos increíbles. ¿Quién será tu próximo compañero de aventuras?", link: "https://example.com/invita-amigo" },
    { id: 2, image: Clip, title: "Completa la Misión: Mejor Clip Creadores Oxygen", points: 220, description: "Muestra tu talento como fan. Envía tus mejores clips de nuestros creadores de contenido y destaca.", link: "https://example.com/mejor-clip" },
    { id: 3, image: Discord, title: "Completa la Misión: Únete a Discord", points: 200, description: "Dale click, sigue a Oxygen y disfruta de tus puntos.", link: "https://discord.com/invite/Udsstfpeze" },
    { id: 4, image: Instagram, title: "Completa la Misión: Síguenos en Instagram", points: 100, description: "Dale click, sigue a Oxygen y disfruta de tus puntos.", link: "https://www.instagram.com/GamingOxygen/" },
    { id: 5, image: Quiz, title: "Completa la Misión: Quiz Semanal", points: 250, description: "Vamos a medir tu ingenio, esperamos mucho de ti. Responde las preguntas de forma correcta y lo más rápido posible para llevarte el mayor número de puntos. ¿Te atreves?", link: "https://example.com/quiz-semanal" },
    { id: 6, image: TikTok, title: "Completa la Misión: Síguenos en TikTok", points: 110, description: "Dale click, sigue a Oxygen y disfruta de tus puntos.", link: "https://www.tiktok.com/@oxg_esports?lang=es" },
    { id: 7, image: Twitter, title: "Completa la Misión: Síguenos en X", points: 120, description: "Dale click, sigue a Oxygen y disfruta de tus puntos.", link: "https://x.com/GamingOxygen" },
    { id: 8, image: Camiseta, title: "Completa la Misión: Hazte con la Camiseta", points: 400, description: "Demuestra tu lealtad y estilo. No es solo una prenda, es un símbolo de tu compromiso. ¿Estás listo para lucirla?", link: "https://example.com/camiseta" },
    { id: 9, image: Meme, title: "Completa la Misión: Meme del Mes", points: 190, description: "Demuestra tu sentido del humor. Crea o elige el meme que hará reír a todos. ¿Tienes lo que se necesita para ser el rey del meme?", link: "https://example.com/meme-del-mes" },
    { id: 10, image: Caca, title: "Completa la Misión: Clip de la Cagada de la Semana", points: 170, description: "Todos tenemos esos momentos. Comparte tu clip más divertido o embarazoso de la semana. ¿Te atreves a mostrar tu lado más torpe?", link: "https://example.com/clip-cagada" },
  ];

  // Buscar la misión en caso de que no se pase la descripción
  const currentMission = mission || allMissions.find((m) => m.id === location.state?.mission?.id); // Ensure the mission is found

  // Filter out the current mission and select random recommended missions
  const recommendedMissions = allMissions
    .filter((m) => m.id !== currentMission?.id) // Cambiar `mission` a `currentMission`
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!currentMission) {
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
              <h1 className="text-4xl font-bold mb-8 text-center">{currentMission.title}</h1> {/* Increased margin-bottom */}
              <div className="mb-12"> {/* Increased margin-bottom */}
                <h2 className="text-2xl font-semibold text-gray-300 mb-4 text-center">Descripción</h2> {/* Centered title */}
                <p className="text-lg text-gray-300 text-center">{currentMission.description}</p> {/* Centered text */}
                <div className="flex justify-center mt-12"> {/* Increased margin-top */}
                  <a
                    href={currentMission.link} // Use the specific link for the current mission
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Más Información
                  </a>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold mb-2">Recompensa</h2>
              <p className="text-lg">{currentMission.points} puntos</p>
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
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" }); // Animación de scroll al principio
                  navigate("/mission-details", { state: { mission: recommendedMission } });
                }}
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