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
import ventajaEntradasE from "@imgs/Ventaja_Entradas_E.webp";


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
    { img: ventajaEntradasE, isPremium: true } //Ventajas entradas

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
    if (items.length === 4) {
      return (
        <div className="grid grid-cols-2 gap-8 px-6"> {/* Reduced gap */}
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative bg-black rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                item.isPremium ? "premium-glow" : ""
              }`}
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      );
    }

    if (items.length === 6) {
      return (
        <div className="grid grid-cols-3 gap-6 px-6"> {/* Reduced gap */}
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative bg-black rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
                item.isPremium ? "premium-glow" : ""
              }`}
            >
              <img
                src={item.img}
                alt=""
                className="w-[100] h-[450px] object-cover" 
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6"> {/* Default structure */}
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative bg-black rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
              item.isPremium ? "premium-glow" : ""
            }`}
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    );
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
