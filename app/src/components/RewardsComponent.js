import React from 'react';
import logo from '../img/Logo_Blue.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import tiktok from '../img/tiktok.png';
import discord from '../img/discord.png';
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
          <img src={logo} alt="OxygenGaming Logo" className="w-full h-full" />
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
      <div className="container p-6 flex justify-center mt-10"> {/* Change mt-6 to mt-10 to move title down */}
        <h1 className="text-white text-4xl font-bold ml-80">Recompensas</h1> {/* Move title slightly to the right */}
    </div>

      <section className="cards-container flex flex-wrap justify-center gap-16 pt-40 mb-24"> {/* Add mb-24 for margin-bottom */}
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
      <footer className="w-full bg-neutral-900">
        <div id="contenido_footer" className="flex justify-between items-start gap-4 p-10 max-w-[1200px] mx-auto">
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

          <div id="redes_sociales" className="flex flex-col items-center text-center flex-1 min-w-[250px]">
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
  )
}

export default Rewards;
