import React from 'react';

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
      <header className="navbar fixed top-0 left-0 w-full bg-[#1465b6] text-white shadow-lg z-50 flex flex-col items-center p-5">
        <div className="logo absolute left-5 top-5 flex items-center">
          <img src="Logo_OxygenGaming2.png" alt="Logo" className="w-20 h-20 rounded-full transition-transform duration-300 hover:scale-110" />
        </div>
        <div className="page-title text-center">
          <h1 className="text-4xl font-bold text-white hover:text-[#f0f8ff] transition duration-300">Competiciones</h1>
          <nav className="nav-menu flex gap-4 mt-2">
            <a href="#registration" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Inscripción</a>
            <a href="#ranking" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Clasificación</a>
            <a href="#history" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Historial</a>
            <a href="#prizes" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Premios</a>
            <a href="misiones.html" className="hover:bg-white hover:text-blue-500 p-2 rounded transition">Misiones</a>
          </nav>
        </div>
      </header>

      <section className="cards-container flex flex-wrap justify-center gap-16 pt-48">
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
