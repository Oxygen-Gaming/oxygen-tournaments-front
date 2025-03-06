import React from 'react';

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
    <header className="fixed top-0 left-0 w-full bg-[#1465b6] text-white shadow-lg z-50 flex flex-col items-center p-5">
      <div className="absolute left-5 top-5 flex items-center">
        <img src="Logo_OxygenGaming2.png" alt="Logo" className="w-20 h-20 rounded-full transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white hover:text-[#f0f8ff] transition duration-300">Misiones</h1>
        <nav className="flex gap-4 mt-2">
          <a href="#registration" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Inscripción</a>
          <a href="#ranking" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Clasificación</a>
          <a href="#history" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Historial</a>
          <a href="/rewards" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Premios</a>
          <a href="/missions" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Misiones</a>
        </nav>
      </div>
    </header>
    <section className="flex flex-wrap justify-center gap-16 pt-48">
      {missions.map((mission, index) => (
        <MissionCard key={index} {...mission} />
      ))}
    </section>
  </div>
)

export default Missions;
