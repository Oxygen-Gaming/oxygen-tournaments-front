import React, { useState } from 'react';
import logo from '@imgs/Logo_Blue.png';
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
import Header from '@components/Header';
import Footer from '@components/Footer';

const missions = [
  { id: 1, title: 'Síguenos en X', image: Twitter, points: 'Puntos: 120' },
  {
    id: 2,
    title: 'Síguenos en Instagram',
    image: Instagram,
    points: 'Puntos: 100',
  },
  { id: 3, title: 'Síguenos en Tik Tok', image: TikTok, points: 'Puntos: 110' },
  {
    id: 4,
    title: 'Completa el quiz semanal',
    image: Quiz,
    points: 'Puntos: 250',
  },
  { id: 5, title: 'Meme del mes', image: Meme, points: 'Puntos: 190' },
  { id: 6, title: 'Únete al discord', image: Discord, points: 'Puntos: 200' },
  { id: 7, title: 'Invita a un amigo', image: Amigo, points: 'Puntos: 250' },
  {
    id: 8,
    title: 'Mejor clip creadores oxygen',
    image: Clip,
    points: 'Puntos: 220',
  },
  {
    id: 9,
    title: 'Clip de la cagada de la semana',
    image: Caca,
    points: 'Puntos: 170',
  },
  {
    id: 10,
    title: 'Hazte con la camiseta',
    image: Camiseta,
    points: 'Puntos: 400',
  },
];

const MissionCard = ({ id, title, image, points }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      id={`mission-card-${id}`}
      className={`w-1/6 h-72 bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg transform transition duration-310 hover:scale-105 relative perspective-1000 ${flipped ? 'rotate-y-180' : ''}`}
    >
      <div className="w-full h-full relative transform-style-preserve-3d transition-transform duration-800">
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-[#18538a] to-[#1e90ff] text-black transform rotate-y-180 backface-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-55 h-55 object-cover rounded-lg"
          />
          <p className="text-lg absolute bottom-0 right-2 text-white mb-2">
            {points}
          </p>
        </div>
      </div>
    </div>
  );
};

const Missions = () => (
  <div className="bg-[#18538a] text-[18px] font-['Roboto_Condensed'] min-h-screen">
   <Header /> {/* Replace existing header with Header component */}
    <div className="container p-6 flex justify-center mt-10"> {/* Change mt-6 to mt-10 to move title down */}
        <h1 className="text-white text-4xl font-bold ml-80">Misiones</h1> {/* Move title slightly to the right */}
    </div>
    <section className="flex flex-wrap justify-center gap-x-16 gap-y-32 pt-24 pb-24 px-10 mb-24">
      {' '}
      {/* Add mb-24 for margin-bottom */}
      {missions.map((mission) => (
        <MissionCard key={mission.id} {...mission} />
      ))}
    </section>
    <Footer /> {/* Replace existing footer with Footer component */}
  </div>
);

export default Missions;
