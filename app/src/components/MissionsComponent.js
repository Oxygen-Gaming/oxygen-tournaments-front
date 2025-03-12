import React, { useState } from 'react';
import logo from '../img/Logo_Blue.png';
import Amigo from '../img/Mision_Amigo.jpg';
import Clip from '../img/Mision_Clip.jpg';
import Discord from '../img/Mision_Discord.jpg';
import Instagram from '../img/Mision_Instagram.jpg';
import Quiz from '../img/Mision_Quiz.jpg';
import TikTok from '../img/Mision_TikTok.jpg';
import Twitter from '../img/Mision_X.jpg';
import Camiseta from '../img/Mision_Camiseta.jpg';
import Meme from '../img/Mision_Meme.jpg';
import Caca from '../img/Mision_Caca.jpg';
import discord from '../img/discord.png';
import instagram from '../img/instagram.png';
import tiktok from '../img/tiktok.png';
import twitter from '../img/twitter.png';

const missions = [
  { id: 1, title: 'Síguenos en X', image: Twitter, points: 'Puntos: 120' },
  { id: 2, title: 'Síguenos en Instagram', image: Instagram, points: 'Puntos: 100' },
  { id: 3, title: 'Síguenos en Tik Tok', image: TikTok, points: 'Puntos: 110' },
  { id: 4, title: 'Completa el quiz semanal', image: Quiz, points: 'Puntos: 250' },
  { id: 5, title: 'Meme del mes', image: Meme, points: 'Puntos: 190' },
  { id: 6, title: 'Únete al discord', image: Discord, points: 'Puntos: 200' },
  { id: 7, title: 'Invita a un amigo', image: Amigo, points: 'Puntos: 250' },
  { id: 8, title: 'Mejor clip creadores oxygen', image: Clip, points: 'Puntos: 220' },
  { id: 9, title: 'Clip de la cagada de la semana', image: Caca, points: 'Puntos: 170' },
  { id: 10, title: 'Hazte con la camiseta', image: Camiseta, points: 'Puntos: 400' },
];

const MissionCard = ({ id, title, image, points }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      id={`mission-card-${id}`}
      className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-72 bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg transform transition duration-310 hover:scale-105 relative perspective-1000 ${flipped ? 'rotate-y-180' : ''}`}
    >
      <div className="w-full h-full relative transform-style-preserve-3d transition-transform duration-800">
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-[#18538a] to-[#1e90ff] text-black transform rotate-y-180 backface-hidden rounded-lg">
          <img src={image} alt={title} className="w-55 h-55 object-cover rounded-lg" />
          <p className="text-lg absolute bottom-0 right-2 text-white mb-2">{points}</p>
        </div>
      </div>
    </div>  
  );
};

const Missions = () => (
  <div className="bg-[#18538a] text-[18px] font-['Roboto_Condensed'] min-h-screen">
    <header className="flex flex-col md:flex-row justify-between items-center px-2 py-2 md:px-6 md:py-4 bg-[#18538a]">
      <a href="/" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mr-4 md:mr-8">
        <img src={logo} alt="Logo_Blue.png" className="w-full h-full" />
      </a>
      <nav className="flex flex-wrap items-center gap-1 md:gap-2 text-xs md:text-base">
        <a href="/" className="text-white no-underline px-1 py-1 md:px-2 md:py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600">Inicio</a>
        <a href="/competition" className="text-white no-underline px-1 py-1 md:px-2 md:py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
        <a href="/content" className="text-white no-underline px-1 py-1 md:px-2 md:py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
        <a href="/missions" className="text-white no-underline px-1 py-1 md:px-2 md:py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
        <a href="/rewards" className="text-white no-underline px-1 py-1 md:px-2 md:py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>
      </nav>
      <div className="flex items-center gap-1 md:gap-2 mt-2 md:mt-0 ml-auto text-xs md:text-base">
        <a href="/register" className="text-white no-underline px-1 py-1 md:px-2 md:py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-2 border-white bg-transparent">Registrarse</a>
        <a href="/login" className="text-white no-underline px-1 py-1 md:px-2 md:py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-blue-600 ml-2 md:ml-4">Iniciar Sesión</a>
      </div>
    </header>
    <div className="container p-6 flex justify-center mt-10">
        <h1 className="text-white text-4xl font-bold text-center md:text-left ml-0 md:ml-80">Misiones</h1>
    </div>
    <section className="hidden md:flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-16 md:gap-y-32 pt-24 pb-24 px-4 md:px-10 mb-24">
      {missions.map((mission) => (
        <MissionCard key={mission.id} {...mission} />
      ))}
    </section>
    <div className="md:hidden">
      <div className="grid grid-cols-2 gap-2 gap-y-4">
        {missions.map((mission) => (
          <div key={mission.id} className="p-1">
            <div className="bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg p-1 relative">
              <img src={mission.image} alt={mission.title} className="w-full h-full object-cover rounded-lg" />
              <p className="text-white text-xs absolute bottom-1 right-1">{mission.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer className="w-full bg-neutral-900 mt-4 md:mt-0">
      <div id="contenido_footer" className="flex flex-col md:flex-row justify-between items-start gap-4 p-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
          <span className="text-cyan-400 font-bold text-[22px] mb-2">OXYGENGAMING</span>
          <div className="flex flex-col gap-4">
            <a href="https://oxygengaming.es/sobre-nosotros/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">SOBRE NOSOTROS</a>
            <a href="https://oxygengaming.es/patrocinadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">PATROCINADORES</a>
            <a href="https://oxygengaming.es/noticias/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">NOTICIAS</a>
            <a href="https://oxygengaming.es/tienda/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">TIENDA</a>
            <a href="https://oxygengaming.es/oxy-club/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">OXYCLUB</a>
            <a href="https://oxygengaming.es/contacto/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CONTACTO</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
          <span className="text-cyan-400 font-bold text-[22px] mb-2">EQUIPOS</span>
          <div className="flex flex-col gap-4">
            <a href="https://oxygengaming.es/equipos/#leagueoflegends" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">LEAGUE OF LEGENDS</a>
            <a href="https://oxygengaming.es/equipos/#valorant" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">VALORANT</a>
            <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CREADORES</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
          <span className="text-cyan-400 font-bold text-[22px] mb-2">Políticas</span>
          <div className="flex flex-col gap-4">
            <a href="https://oxygengaming.es/equipos/#leagueoflegends" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">AVISO LEGAL</a>
            <a href="https://oxygengaming.es/equipos/#valorant" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">PRIVACIDAD</a>
            <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">COOKIES</a>
          </div>
        </div>
        <div id="redes_sociales" className="flex flex-col items-center text-center flex-1 min-w-[250px] mt-4 md:mt-0">
          <a href="https://oxygengaming.es/">
            <img id="logo_footer" src={logo} alt="Oxygen Gaming Logo" className="w-[80%] max-w-[200px] mb-4" />
          </a>
          <div className="flex gap-4 mt-2">
            <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all">
              <img src={twitter} alt="Twitter" className="w-full h-full rounded-full" />
            </a>
            <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all">
              <img src={instagram} alt="Instagram" className="w-full h-full rounded-full" />
            </a>
            <a href="https://www.tiktok.com/@oxg_esports?lang=es" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all">
              <img src={tiktok} alt="TikTok" className="w-full h-full rounded-full" />
            </a>
            <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all">
              <img src={discord} alt="Discord" className="w-full h-full rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Missions;
