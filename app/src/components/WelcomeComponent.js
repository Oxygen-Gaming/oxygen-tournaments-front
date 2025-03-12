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
import Header from "./Header"; // Import Header component
import Footer from "./Footer"; // Import Footer component

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
      <Header /> {/* Replace existing header with Header component */}
      {/* MAIN CONTENT */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
          
          ].map((item, index) => (
            <div key={index} className="p-8 rounded-lg shadow-md bg-blue-700 transition-transform duration-300 hover:scale-105 hover:shadow-md" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover" }}>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>

            </div>
          ))}
          </div>
      </section>
      
      <Footer /> {/* Replace existing footer with Footer component */}
    </div>
  );
};

export default OxygenGaming;