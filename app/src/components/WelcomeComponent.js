import React from "react";
import oxygen from "../img/Logo_OxygenGaming2.png"
import twitter from "../img/twitter.png"
import tiktok from "../img/tiktok.png"
import instagram from "../img/instagram.png"
import discord from "../img/discord.png"
import Tarjeta from "../img/poster1.jpg"
import Tarjeta2 from "../img/poster2.jpg"
import Tarjeta3 from "../img/poster3.jpg"
import Tarjeta4 from "../img/poster4.jpg"
import Tarjeta5 from "../img/poster5.jpg"
import Tarjeta6 from "../img/poster6.jpg"
import Tarjeta7 from "../img/poster7.jpg"
import Tarjeta8 from "../img/poster8.jpg"
import Tarjeta9 from "../img/poster9.jpg"
import Logo from "../img/Logo_OxygenGaming2.png";
import Header from "./Header";
import Footer from "./Footer";

const rewards = [
  {
    title: "Watch Parties",
    text: "Disfruta de eventos en vivo con otros miembros de OxyClub.",
    image: "path/to/image1.jpg",
  },
  {
    title: "Eventos de Comunidad",
    text: "Participa en eventos exclusivos y conoce a otros gamers.",
    image: "path/to/image2.jpg",
  },
  {
    title: "Drops Exclusivos",
    text: "Obtén recompensas únicas y exclusivas para miembros de OxyClub.",
    image: "path/to/image3.jpg",
  },
  {
    title: "Wallpapers",
    text: "Descarga fondos de pantalla exclusivos para tu dispositivo.",
    image: "path/to/image4.jpg",
  },
  {
    title: "Descuento en Merchandising",
    text: "Aprovecha descuentos especiales en nuestra tienda.",
    image: "path/to/image5.jpg",
  },
  {
    title: "Contenido exclusivo",
    text: "Accede a contenido exclusivo solo para miembros de OxyClub.",
    image: "path/to/image6.jpg",
  },
  {
    title: "Acceso discord VIP",
    text: "Únete a nuestro servidor VIP en Discord.",
    image: "path/to/image7.jpg",
  },
  {
    title: "Recompensas por misiones",
    text: "Completa misiones y gana recompensas exclusivas.",
    image: "path/to/image8.jpg",
  },
  {
    title: "Guías competitivas",
    text: "Accede a guías y estrategias para mejorar tu juego.",
    image: "path/to/image9.jpg",
  }
]

const Images = [

  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo }
]

const OxygenGaming = () => {
  const cards = [
    { image: Tarjeta },
    { image: Tarjeta2 },
    { image: Tarjeta3 },
    { image: Tarjeta4 },
    { image: Tarjeta5 },
    { image: Tarjeta6 },
    { image: Tarjeta7 },
    { image: Tarjeta8 },
    { image: Tarjeta9 },
  ];

  return (
    <div className="bg-blue-900 text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      {/* HEADER */}
      <header className="flex justify-between items-center px-4 py-4 md:px-6 bg-[#18538a]">
        <a href="/" className="w-[70px] h-[70px] mr-8">
          <img src={oxygen} alt="OxygenGaming Logo" className="w-full h-full" />
        </a>
        <nav className="flex items-center gap-2">
          <a href="/" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600">Inicio</a>
          <a href="/competition" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
          <a href="/content" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
          <a href="/missions" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
          <a href="/rewards" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>
        </nav>
        <div className="flex items-center gap-2 ml-auto">
          <a
            href="/register"
            className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-2 border-white bg-transparent"
          >
            Registrarse
          </a>
          <a
            href="/login"
            className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-blue-600 ml-4"
          >
            Iniciar Sesión
          </a>
        </div>
      </header>
      {/* MAIN CONTENT */}
      <Header />
      <main className="flex items-center h-[calc(100vh-80px)] px-16 relative overflow-hidden">
        <svg
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] opacity-10 z-[1]"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250,50 L400,250 L250,450 L100,250 Z"
            className="fill-orange-400 opacity-20"
          />
        </svg>
        <div className="max-w-[600px] z-10 relative">
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VENTAJAS EXCLUSIVAS PARA{" "}
            <span className="text-blue-600">GAMERS</span>.
          </h1>
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VIVE LA MEJOR EXPERIENCIA GAMER CON{" "}
            <span className="text-blue-600">OXYCLUB</span>.
          </h1>
          <p className="mb-8 text-gray-300">
            ¡Bienvenido a OxyClub! La plataforma que te da más: más acceso a
            competiciones, más contenido exclusivo, más premios y más
            oportunidades para demostrar tu talento y vivir el gaming al máximo.
          </p>
          <div className="flex gap-4">
            <a
              href="/register"
              className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-blue-600 text-white"
            >
              Únete a Oxyclub
            </a>
            <a
              href="/faqs"
              className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-transparent text-white border-2 border-white"
            >
              FAQs
            </a>
          </div>
        </div>
      </main>
      <section className="py-16 px-8 bg-blue-800">
        <h2 className="text-center text-2xl md:text-3xl mb-8">Ventajas de unirte a OxyClub</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-2 gap-y-4 justify-items-center">
          {cards.map((item, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md bg-blue-700 transition-transform duration-300 hover:scale-105 hover:shadow-md" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '350px', maxWidth: '320px' }}>
              {/* Image only, no text */}
            </div>
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="w-full bg-neutral-900">
        <div
          id="contenido_footer"
          className="flex justify-between items-start gap-4 p-10 max-w-[1200px] mx-auto"
        >
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">
              OXYGENGAMING
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="https://oxygengaming.es/sobre-nosotros/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                SOBRE NOSOTROS
              </a>
              <a
                href="https://oxygengaming.es/patrocinadores/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                PATROCINADORES
              </a>
              <a
                href="https://oxygengaming.es/noticias/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                NOTICIAS
              </a>
              <a
                href="https://oxygengaming.es/tienda/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                TIENDA
              </a>
              <a
                href="https://oxygengaming.es/oxy-club/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                OXYCLUB
              </a>
              <a
                href="https://oxygengaming.es/creadores/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                CREADORES
              </a>
              <a
                href="https://oxygengaming.es/contacto/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                CONTACTO
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">
              EQUIPOS
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="https://oxygengaming.es/equipos/#leagueoflegends"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                LEAGUE OF LEGENDS
              </a>
              <a
                href="https://oxygengaming.es/equipos/#valorant"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                VALORANT
              </a>
              <a
                href="https://oxygengaming.es/creadores/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                CREADORES
              </a>
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
              <img id="logo_footer" src={oxygen} alt="Oxygen Gaming Logo" className="w-[80%] max-w-[200px] mb-4" />
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={twitter} alt="Twitter" className="w-full h-full rounded-full" />
              </a>
              <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={instagram} alt="Instagram" className="w-full h-full rounded-full" />
              </a>
              <a href="https://www.tiktok.com/@oxg_esports?lang=es" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={tiktok} alt="TikTok" className="w-full h-full rounded-full" />
              </a>
              <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full no-underline transition-all">
                <img src={discord} alt="Discord" className="w-full h-full rounded-full" />
              </a>
        <h2 className="text-center text-2xl md:text-3xl mb-8">
          Ventajas de unirte a OxyClub
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Images.map((item, index) => (
            <div key={index} className="p-8 rounded-lg shadow-md bg-blue-700 transition-transform duration-300 hover:scale-105 hover:shadow-md">
              <img src={item.image} alt={`Ventaja ${index + 1}`} className="w-full h-full" />
            </div>
          ))}
          {
          rewards.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-md bg-blue-700 transition-transform duration-300 hover:scale-105 hover:shadow-md"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>

            </div>
          ))}
          </div>
      </section>
<Footer></Footer>
    </div>
  );
};

export default OxygenGaming;