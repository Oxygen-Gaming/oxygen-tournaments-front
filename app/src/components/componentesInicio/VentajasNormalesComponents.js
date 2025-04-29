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
    if (items.length === 6) {
      return (
        <div className="flex flex-col items-center gap-[20px]">
          <div className="grid grid-cols-3 gap-[30px] justify-center">
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
          <div className="grid grid-cols-3 gap-[30px] justify-center">
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
    <section className={`w-full py-[50px] px-[15px] ${bgColor} flex justify-center`}>
      <div className="max-w-[1200px] w-full">
        <div className="text-center mb-[30px]">
          <h2 className={`text-[36px] font-extrabold uppercase ${textColor}`}>{title}</h2>
          <p className={`text-[18px] font-light ${isBlue ? "text-gray-200" : "text-gray-600"}`}>
            {subtitle}
          </p>
        </div>
        {renderImages()}
      </div>
    </section>
  );
};

export default VentajasNormales;

// Add the following styles directly in this file using a <style> tag
<style>{`
  .premium-glow::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(255, 223, 0, 0.5), transparent);
    border-radius: 50%;
    z-index: -1;
  }
`}</style>