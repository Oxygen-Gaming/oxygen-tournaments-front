import React, { useState, useEffect } from "react";
import Tarjeta from "@imgs/poster1.jpg"
import Tarjeta2 from "@imgs/poster2.jpg"
import Tarjeta3 from "@imgs/poster3.jpg"
import Tarjeta4 from "@imgs/poster4.jpg"
import Tarjeta5 from "@imgs/poster5.jpg"
import Tarjeta6 from "@imgs/poster6.jpg"
import Tarjeta7 from "@imgs/poster7.jpg"
import Tarjeta8 from "@imgs/poster8.jpg"
import Tarjeta9 from "@imgs/poster9.jpg"
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
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const newVisibleCards = cards.map((_, index) => {
        const cardElement = document.getElementById(`card-${index}`);
        if (cardElement && !visibleCards[index]) { // Check if the card is not already visible
          const cardPosition = cardElement.offsetTop + cardElement.clientHeight / 2;
          return scrollPosition >= cardPosition;
        }
        return visibleCards[index]; // Keep the card visible once it has appeared
      });
      setVisibleCards(newVisibleCards);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards, visibleCards]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setActiveCardIndex(currentIndex);
      currentIndex = (currentIndex + 1) % cards.length; // Loop through cards
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [cards.length]);

  return (
    <div className="bg-blue-900 text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0"> {/* Removed gap between sections */}
      <Header /> 
      <button className="lg:hidden w-full mt-4 flex flex-col items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      <div className={`lg:hidden absolute ${isOpen ? 'block' : 'hidden'} w-full relative bg-blue-900 h-full flex flex-col justify-center items-center mt-4 gap-[20px] transition-transform ease-in-out duration-300`} onClick={() => setIsOpen(!isOpen)}>
        <a href="/" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Inicio</a>
        <a href="/competition" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Competiciones</a>
        <a href="/content" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Contenido</a>
        <a href="/missions" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Misiones</a>
        <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Recompensas</a>        
      </div>
      <main 
        className="flex items-center h-[calc(100vh-80px)] px-16 relative overflow-hidden md:mt-0 mt-0 pt-7 bg-blue-900" // Removed fixed background color
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1920x1080")', // Example background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
            VENTAJAS EXCLUSIVAS PARA{' '}
            <span className="text-blue-600">GAMERS</span>.
          </h1>
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VIVE LA MEJOR EXPERIENCIA GAMER CON{' '}
            <span className="text-blue-600">OXYCLUB</span>.
          </h1>
          <p className="mb-8 text-gray-300">
            ¡Bienvenido a OxyClub! La plataforma que te da más: más acceso a
            competiciones, más contenido exclusivo, más premios y más
            oportunidades para demostrar tu talento y vivir el gaming al máximo.
          </p>
          <div className="flex gap-4 mt-[-20px]">
            <a
              href="/register"
              className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-blue-600 text-white"
            >
              Únete a Oxyclub
            </a>
            {/* Removed the FAQs button */}
          </div>
        </div>
      </main>
      <section 
        className="py-8 px-8 mt-0" // Removed fixed background color class
        style={{
          background: 'linear-gradient(135deg, #2563eb, #1e3a8a)', // Reversed gradient background
        }}
      >
        <h2 
          className="text-center text-3xl md:text-4xl mb-8 font-bold" // Increased font size
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} // Add subtle text shadow
        >
          Ventajas de unirte a OxyClub
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-x-2 gap-y-4 justify-items-center">
          {cards.map((item, index) => (
            <div
              key={index}
              id={`card-${index}`}
              className={`p-6 rounded-lg shadow-md bg-blue-700 transition-opacity duration-700 ease-in-out ${visibleCards[index] ? 'opacity-100' : 'opacity-0'}`} // Fade-in animation restored
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '350px',
                maxWidth: '320px',
                transform: activeCardIndex === index ? 'scale(1.05)' : 'scale(1)', // Highlight active card
                boxShadow: activeCardIndex === index ? '0 0 20px 5px rgba(255, 255, 255, 0.8)' : 'none', // Glow effect for active card
                transition: 'transform 0.7s ease-in-out, box-shadow 0.7s ease-in-out, opacity 0.7s ease-in-out', // Ensure opacity transition
              }}
            >
              <div className="md:hidden" style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '300px', maxWidth: '280px' }}></div>
              {/* Image only, no text */}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
          
          ].map((item, index) => (
            <div key={index} className="p-8 rounded-lg shadow-md bg-blue-700 transition-transform duration-300 hover:scale-105 hover:shadow-md" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: 'center', width: '100%', height: '350px', maxWidth: '320px' }}>
              <div className="md:hidden" style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '300px', maxWidth: '280px' }}></div>
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