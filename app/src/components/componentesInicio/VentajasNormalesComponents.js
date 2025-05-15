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
import posternormal12 from "@imgs/Ventaja_Entradas_E.webp";
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
    { img: posternormal3, isPremium: true },
    { img: posternormal4 },
    { img: posternormal5 },
    { img: posternormal6, isPremium: true },
  ],
  contenido: [
    { img: posternormal7 },
    { img: posternormal8 },
    { img: posternormal9 },
    { img: posternormal10, isPremium: true },
  ],
  premios: [
    { img: posternormal11 },
    { img: posternormal12, isPremium: true },
    { img: posternormal13, isPremium: true },

    { img: posternormal14, isPremium: true },
    { img: posternormal15, isPremium: true },
    { img: ventajaEntradasE, isPremium: true }
  ],
  productos: [
    { img: posternormal16 },
    { img: posternormal17, isPremium: true },
    { img: posternormal18 },
    { img: posternormal2 },
  ],
};

const ImageCard = ({ item }) => (
  <div
    className={`relative w-full aspect-[1/1] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-lg ${
      item.isPremium ? "premium-glow" : ""
    }`}
  >
    <img src={item.img} alt="" className="w-full h-full object-cover rounded-xl" />
  </div>
);

const renderSixImagesLayout = (items) => (
  <div className="flex flex-col items-center gap-10 w-full">
    {/* Dos grandes arriba */}
    <div className="w-full sm:w-[80%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.slice(0, 2).map((item, index) => (
        <ImageCard key={index} item={item} />
      ))}
    </div>
    {/* Cuatro abajo */}
    <div className="w-full sm:w-[80%] md:w-[70%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.slice(2, 6).map((item, index) => (
        <ImageCard key={index} item={item} />

      ))}
    </div>
  </div>
);

const renderFourImagesLayout = (items) => (
  <div className="flex flex-col items-center gap-10 w-full sm:w-[80%] md:w-[70%]">
    <div className="w-full max-w-[500px]">
      <ImageCard item={items[0]} />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {items.slice(1).map((item, index) => (
        <ImageCard key={index} item={item} />
      ))}
    </div>
  </div>
);


const VentajasNormales = ({ section, title, subtitle }) => {
  const items = sections[section] || [];

  return (
    <section className="w-full py-12 px-4 flex flex-col items-center bg-black">

      <div className="max-w-6xl w-full flex flex-col items-center mb-16 mt-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center">
          <div className="w-[80px] h-[3px] bg-[#1AA9FF] md:w-[200px]" />
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase">{title}</h2>
          <div className="w-[80px] h-[3px] bg-[#1AA9FF] md:w-[200px]" />
        </div>
        <p className="text-md md:text-xl text-gray-400 mt-4">{subtitle}</p>
      </div>

      {items.length === 6 ? renderSixImagesLayout(items)
        : items.length === 4 ? renderFourImagesLayout(items)
        : (
          <div className="w-full sm:w-[80%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <ImageCard key={index} item={item} />
            ))}
          </div>
        )}

    </section>
  );
};

export default VentajasNormales;

