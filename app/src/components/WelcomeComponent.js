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
import PortadaDeHome from "@imgs/Portada_de_Home.jpg"; // Import the background image
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
    <div className="bg-[#1AA9FF] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0">
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
        className="flex items-center h-[calc(100vh-80px)] px-16 relative overflow-hidden md:mt-0 mt-0 pt-7"
        style={{
          backgroundImage: `url(${PortadaDeHome})`, // Keep the original image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> {/* Restore the black overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10"></div>
        <div className="max-w-[600px] z-20 relative">
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VENTAJAS EXCLUSIVAS PARA{" "}
            <span className="text-white">GAMERS</span>.
          </h1>
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VIVE LA MEJOR EXPERIENCIA GAMER CON{" "}
            <span className="text-white">OXYCLUB</span>.
          </h1>
          <p className="mb-8 text-white">
            ¡Bienvenido a OxyClub! La plataforma que te da más: más acceso a
            competiciones, más contenido exclusivo, más premios y más
            oportunidades para demostrar tu talento y vivir el gaming al máximo.
          </p>
          <div className="flex gap-4 mt-[-20px]">
            <a
              href="/register"
              className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-[#005f99] text-white"
            >
              Únete a Oxyclub
            </a>
          </div>
        </div>
      </main>
      <section className="w-11/12 max-w-7xl mx-auto mt-16 p-10 bg-[#005f99] rounded-lg shadow-lg flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex justify-start items-center order-1 md:order-none pl-10">
          {/* Removed the image container */}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-white order-2 md:order-none">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Ventajas de unirte a OxyClub
          </h2>
          <p className="text-xl leading-relaxed">
            Únete a OxyClub y disfruta de beneficios exclusivos diseñados para gamers como tú. 
            Participa en competiciones emocionantes, accede a contenido único y gana premios increíbles. 
            ¡Es tu momento de brillar y demostrar tu talento en el mundo del gaming!
          </p>
        </div>
      </section>
      <section 
        className="w-11/12 max-w-7xl mx-auto mt-20 p-10 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] rounded-lg shadow-lg flex flex-col md:flex-row gap-10"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center text-white order-1 md:order-none pr-10">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6">
            Ventajas Premium
          </h2>
          <p className="text-xl leading-relaxed">
            Conviértete en miembro premium de OxyClub y accede a un nivel superior de beneficios. 
            Obtén recompensas exclusivas, participa en torneos de élite y disfruta de una experiencia de gaming incomparable. 
            ¡Haz que cada partida cuente y alcanza la cima con OxyClub Premium!
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center order-2 md:order-none">
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg flex items-center">
            {showAllPremium ? (
              <div className="grid grid-cols-3 gap-4">
                {premiumCards.map((card, index) => (
                  <img
                    key={index}
                    src={card.image}
                    alt={`Ventaja Premium ${index + 1}`}
                    className="w-full h-[155px] object-cover rounded-lg"
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
                  } rounded-lg`}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default OxygenGaming;