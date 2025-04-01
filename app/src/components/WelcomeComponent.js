import React, { useState, useEffect } from "react";
import Tarjeta from "@imgs/poster1.jpg";
import Tarjeta2 from "@imgs/poster2.jpg";
import Tarjeta3 from "@imgs/poster3.jpg";
import Tarjeta4 from "@imgs/poster4.jpg";
import Tarjeta5 from "@imgs/poster5.jpg";
import Tarjeta6 from "@imgs/poster6.jpg";
import Tarjeta7 from "@imgs/poster7.jpg";
import Tarjeta8 from "@imgs/poster8.jpg";
import Tarjeta9 from "@imgs/poster9.jpg";
import Header from "./Header";
import Footer from "./Footer";

const OxygenGaming = () => {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state

  const normalCards = []; // Cleared the normalCards array
  const premiumCards = [
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

  const [randomIndexNormal, setRandomIndexNormal] = useState(0);
  const [fadeClassNormal, setFadeClassNormal] = useState("opacity-100");
  const [isHoveredNormal, setIsHoveredNormal] = useState(false);

  const [randomIndexPremium, setRandomIndexPremium] = useState(0);
  const [fadeClassPremium, setFadeClassPremium] = useState("opacity-100");
  const [isHoveredPremium, setIsHoveredPremium] = useState(false);

  const [showAllNormal, setShowAllNormal] = useState(false);
  const [showAllPremium, setShowAllPremium] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIndexNormal((prevIndex) => (prevIndex + 1) % normalCards.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [normalCards.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIndexPremium((prevIndex) => (prevIndex + 1) % premiumCards.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [premiumCards.length]);

  return (
    <div className="bg-blue-900 text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0">
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
          </div>
        </div>
      </main>
      <section className="w-11/12 max-w-7xl mx-auto mt-16 p-10 bg-blue-800 rounded-lg shadow-lg flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex justify-start items-center order-1 md:order-none pl-10"> {/* Aligned to the left */}
          {/* Removed the image container */}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-white order-2 md:order-none"> {/* Text on the right */}
          <h2 
            className="text-5xl md:text-6xl font-extrabold mb-6"
            style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}
          >
            Ventajas de unirte a OxyClub
          </h2>
          <p className="text-xl leading-relaxed">
            Únete a OxyClub y disfruta de beneficios exclusivos diseñados para gamers como tú. 
            Participa en competiciones emocionantes, accede a contenido único y gana premios increíbles. 
            ¡Es tu momento de brillar y demostrar tu talento en el mundo del gaming!
          </p>
          <div className="relative w-full h-[300px] overflow-hidden rounded-lg mt-6">
            {showAllNormal ? (
              <div className="grid grid-cols-3 gap-4">
                {/* Removed rendering of normalCards */}
              </div>
            ) : (
              <div className="flex justify-center items-center h-full text-gray-400">
                No hay ventajas normales disponibles.
              </div>
            )}
          </div>
          <button
            className="mt-6 bg-white text-blue-800 font-bold px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-110 self-start md:self-center"
            onClick={() => setShowAllNormal(!showAllNormal)}
          >
            {showAllNormal ? "Ocultar" : "Ver Todas"}
          </button>
        </div>
      </section>
      <section 
        className="w-11/12 max-w-7xl mx-auto mt-20 p-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg flex flex-col md:flex-row gap-10"
        style={{
          boxShadow: '0 0 30px 10px rgba(255, 215, 0, 0.8)', // Removed border
        }}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center text-black order-1 md:order-none pr-10"> {/* Text on the left */}
          <h2 
            className="text-6xl md:text-7xl font-extrabold mb-6"
            style={{ textShadow: '0 0 15px rgba(255, 215, 0, 0.9)' }}
          >
            Ventajas Premium
          </h2>
          <p className="text-xl leading-relaxed">
            Conviértete en miembro premium de OxyClub y accede a un nivel superior de beneficios. 
            Obtén recompensas exclusivas, participa en torneos de élite y disfruta de una experiencia de gaming incomparable. 
            ¡Haz que cada partida cuente y alcanza la cima con OxyClub Premium!
          </p>
        </div>
        <div
          className="w-full md:w-1/2 flex justify-center items-center order-2 md:order-none"> {/* Image on the right */}
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg flex items-center"> {/* Added flex and items-center */}
            {showAllPremium ? (
              <div className="grid grid-cols-3 gap-4">
                {premiumCards.map((card, index) => (
                  <img
                    key={index}
                    src={card.image}
                    alt={`Ventaja Premium ${index + 1}`}
                    className="w-full h-[155px] object-cover rounded-lg" // Added fixed height and rounded borders
                  />
                ))}
              </div>
            ) : (
              premiumCards.map((card, index) => (
                <img
                  key={index}
                  src={card.image}
                  alt={`Ventaja Premium ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === randomIndexPremium ? "opacity-100" : "opacity-0"
                  } rounded-lg`} // Added rounded borders
                />
              ))
            )}
          </div>
        </div>
        <button
          className="mt-6 bg-white text-orange-500 font-bold px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-110"
          onClick={() => setShowAllPremium(!showAllPremium)}
        >
          {showAllPremium ? "Ocultar" : "Ver Todas"}
        </button>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default OxygenGaming;