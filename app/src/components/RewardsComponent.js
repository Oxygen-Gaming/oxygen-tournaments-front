import React from 'react';
import oxygen from "../img/Logo_OxygenGaming2.png"
const Card = ({ image, title, points }) => {
  return (
    <div className="card w-1/5 h-52 bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-1/2 object-cover" />
      <div className="p-3 text-white text-lg text-left">{title}</div>
      <p className="text-[#55a5db] text-sm absolute bottom-3 right-5">Puntos: {points}</p>
    </div>
  )
}

const Rewards = () => {
  return (
    <div className="bg-[#18538a] text-[18px]">
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

      <section className="cards-container flex flex-wrap justify-center gap-16">
        <Card image="Logo_OxygenGaming2.png" title="Follow por parte de Oxygen" points="100" />
        <Card image="premio2.jpg" title="Clave aleatoria de Steam" points="200" />
        <Card image="premio3.jpg" title="Camiseta del club" points="300" />
        <Card image="premio4.jpg" title="10€ Riot Points" points="400" />
        <Card image="premio4.jpg" title="Ticket a sorteo" points="500" />
        <Card image="premio4.jpg" title="1000 v-bucks Fortnite" points="600" />
        <Card image="premio4.jpg" title="Mystery Box" points="700" />
        <Card image="premio4.jpg" title="10€ Google Play" points="800" />
        <Card image="premio4.jpg" title="10€ Playstation" points="900" />
        <Card image="premio4.jpg" title="Silla Playseat Puma" points="1000" />
      </section>
    </div>
  )
}

export default Rewards;
