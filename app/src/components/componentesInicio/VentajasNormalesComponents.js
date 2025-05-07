import React from "react";
import posternormal1 from "@imgs/Watch parties.webp";
import posternormal2 from "@imgs/wallpapers.webp";
import posternormal3 from "@imgs/Banner exclusivo.webp";
import posternormal4 from "@imgs/Follow club.webp";
import posternormal5 from "@imgs/acceso.webp";
import posternormal6 from "@imgs/Información privilegiada.webp";
import posternormal7 from "@imgs/contenido.webp";
import posternormal8 from "@imgs/eventos comunidad.webp";
import posternormal9 from "@imgs/guias competitivas.webp";
import posternormal10 from "@imgs/Sesion coaching.webp";
import posternormal11 from "@imgs/recompensas por misiones.webp";
import posternormal12 from "@imgs/Entradas a eventos.webp";
import posternormal13 from "@imgs/Obsequio cumpleaños.webp";
import posternormal14 from "@imgs/Puntos Dobles.webp";
import posternormal15 from "@imgs/Activo digital.webp";
import posternormal16 from "@imgs/descuento.webp";
import posternormal17 from "@imgs/Descuentos merchandising.webp";
import posternormal18 from "@imgs/drops exclusivos.webp";

const sections = {
  oxygen: [
    { img: posternormal1 },
    { img: posternormal2 },
    { img: posternormal3, isPremium: true }, // Banner Exclusivo
    { img: posternormal4 },
    { img: posternormal5 },
    { img: posternormal6, isPremium: true }, // Información Privilegiada
  ],
  contenido: [
    { img: posternormal7 },
    { img: posternormal8 },
    { img: posternormal9 },
    { img: posternormal10, isPremium: true }, // Sesión de coaching
  ],
  premios: [
    { img: posternormal11 },
    { img: posternormal12, isPremium: true }, // Entradas a Eventos
    { img: posternormal13, isPremium: true }, // Obsequio cumpleaños
    { img: posternormal14, isPremium: true }, // Puntos Dobles
    { img: posternormal15, isPremium: true }, // Activo Digital
  ],
  productos: [
    { img: posternormal16 },
    { img: posternormal17, isPremium: true }, // Descuento 15% Merchandising
    { img: posternormal18 },
    { img: posternormal2 },
  ],
};

const VentajasNormales = ({ section, title, subtitle, isBlue }) => {
  const items = sections[section] || [];
  const bgColor = isBlue ? "bg-[#1AA9FF]" : "bg-white";
  const textColor = isBlue ? "text-white" : "text-gray-800";

  const renderImages = () => {
    const isMobile = window.innerWidth <= 768; // Check if the view is mobile
    if (isMobile) {
      return (
        <div className="flex flex-col items-center gap-4"> {/* Vertical layout for mobile */}
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative w-2/3 h-auto rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                item.isPremium ? "premium-glow" : ""
              }`} // Reduced width for smaller images
            >
              <img src={item.img} alt="" className="w-full h-auto object-contain rounded-xl" />
            </div>
          ))}
        </div>
      );
    }
    if (section === "contenido") { // Adjust gap specifically for "contenido"
      return (
        <div className="flex flex-col items-center gap-[80px] pb-[80px]"> {/* Added padding-bottom of 50px */}
          <div className="grid grid-cols-2 gap-[90px] justify-center"> {/* Increased gap from 70px to 90px */}
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative h-[300px] w-[300px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (section === "premios") { // Adjust gap and size specifically for "premios"
      return (
        <div className="flex flex-col items-center gap-[60px]"> {/* Reduced gap from 80px to 60px */}
          <div className="grid grid-cols-3 gap-[50px] justify-center"> {/* Reduced gap from 90px to 50px */}
            {items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={`relative h-[250px] w-[250px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-[50px] justify-center"> {/* Reduced gap from 90px to 50px */}
            {items.slice(3).map((item, index) => (
              <div
                key={index}
                className={`relative h-[250px] w-[250px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (section === "productos") { // Adjust gap specifically for "productos"
      return (
        <div className="flex flex-col items-center gap-[80px] pb-[80px]"> {/* Added padding-bottom of 50px */}
          <div className="grid grid-cols-2 gap-[90px] justify-center"> {/* Increased gap from 70px to 90px */}
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative h-[300px] w-[300px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (section === "oxygen") { // Adjust gap specifically for "oxygen"
      return (
        <div className="flex flex-col items-center gap-[80px]"> {/* Increased gap from 60px to 80px */}
          <div className="grid grid-cols-3 gap-[90px] justify-center"> {/* Increased gap from 70px to 90px */}
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative h-[300px] w-[300px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (items.length === 6) {
      return (
        <div className="flex flex-col items-center gap-[60px]"> {/* Increased gap from 40px to 60px */}
          <div className="grid grid-cols-3 gap-[70px] justify-center"> {/* Increased gap from 50px to 70px */}
            {items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={`relative h-[300px] w-[300px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[70px] justify-center"> {/* Increased gap from 50px to 70px */}
            {items.slice(3).map((item, index) => (
              <div
                key={index}
                className={`relative h-[300px] w-[300px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (items.length === 4) {
      return (
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-[30px]">
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative h-[300px] w-[300px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (items.length === 5) {
      return (
        <div className="flex flex-col items-center gap-[20px]">
          <div className="grid grid-cols-2 gap-[30px] justify-center">
            {items.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`relative h-[350px] w-[350px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[30px] justify-center">
            {items.slice(2).map((item, index) => (
              <div
                key={index}
                className={`relative h-[250px] w-[250px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                  item.isPremium ? "premium-glow" : ""
                }`}
              >
                <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      className={`w-full py-[50px] px-[15px] flex justify-center relative ${
        isBlue ? "bg-[#1AA9FF]" : "bg-white"
      }`}
    >
      <div className="max-w-[1200px] w-full">
        <div className="text-center mb-[60px]"> {/* Increased margin from 30px to 60px */}
          <h2 className={`text-[48px] font-extrabold uppercase ${textColor}`}>{title}</h2> {/* Increased font size from 36px to 48px */}
          <p className={`text-[18px] font-light ${isBlue ? "text-gray-200" : "text-gray-600"}`}>
            {subtitle}
          </p>
        </div>
        {renderImages()}
      </div>
      {section === "oxygen" && (
        <div className="absolute inset-x-0 bottom-[-183px] h-[115px] bg-gradient-to-b from-[#1AA9FF] via-[#1AA9FF] to-white pointer-events-nonee"></div>
      )} {/* Gradient for "oxygen" moved to the bottom edge */}
      {section === "contenido" && (
        <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-b from-white via-white to-[#1AA9FF] pointer-events-none"></div>
      )} {/* Gradient for "contenido" */}
      {section === "premios" && (
        <div className="absolute inset-x-0 bottom-[-183px] h-[115px] bg-gradient-to-b from-[#1AA9FF] via-[#1AA9FF] to-white pointer-events-none"></div>
      )} {/* Gradient for "premios" moved 50px further down */}
      {section === "productos" && (
        <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-b from-white via-white to-[#1AA9FF] pointer-events-none"></div>
      )} {/* Gradient for "productos" */}
    </section>
  );
};

export default VentajasNormales;
