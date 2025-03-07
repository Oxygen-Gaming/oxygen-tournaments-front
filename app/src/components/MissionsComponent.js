import React from 'react';
import oxygen from "../img/Logo_OxygenGaming2.png"
const missions = [
  { title: 'Síguenos en X', image: 'images-removebg-preview.png', points: 'Puntos:' },
  { title: 'Síguenos en Instagram', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
  { title: 'Síguenos en Tik Tok', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
  { title: 'Completa el quiz semanal', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
  { title: 'Meme del mes', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
  { title: 'Únete al discord', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
  { title: 'Invita a un amigo', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
  { title: 'Mejor clip creadores oxygen', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
  { title: 'Clip de la cagada de la semana', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
  { title: 'Hazte con la camiseta', image: 'Logo_OxygenGaming2.png', points: 'Puntos:' },
]

const MissionCard = ({ title, image, points }) => (
  <div className="w-1/5 h-52 bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg transform transition duration-300 hover:scale-105 relative perspective-1000">
    <div className="w-full h-full relative transform-style-preserve-3d transition-transform duration-800">
      <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden">
        <img src={image} alt={title} className="w-1/2 h-1/2 object-cover" />
        <div className="p-3 text-white text-lg text-center">{title}</div>
      </div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-[#18538a] to-[#1e90ff] text-black transform rotate-y-180 backface-hidden">
        <img src="Logo_OxygenGaming2.png" alt={title} className="w-1/4 mb-2" />
        <p className="text-lg">{points}</p>
      </div>
    </div>
  </div>
)

const Missions = () => (
  <div className="bg-[#18538a] text-[18px] font-['Roboto_Condensed'] min-h-screen">
    <header className="flex justify-between items-center px-4 py-4 md:px-6 bg-[#18538a]">
        <a href="/" className="w-[70px] h-[70px] mr-8">
          <img src={oxygen} alt="OxygenGaming Logo" className="w-full h-full" />
        </a>
        <nav className="flex items-center gap-2">
          <a href="/" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600">Inicio</a>
          <a href="/competiciones" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
          <a href="/reglamentos" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
          <a href="/missions" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
          <a href="/rewards" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>
        </nav>
        <div className="flex items-center gap-2 ml-auto">
          <a href="/register" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-2 border-white bg-transparent">Registrarse</a>
          <a href="/login" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-blue-600 ml-4">Iniciar Sesión</a>
        </div>
      </header>
    <section className="flex flex-wrap justify-center gap-16">
      {missions.map((mission, index) => (
        <MissionCard key={index} {...mission} />
      ))}
    </section>
  </div>
)

export default Missions;
