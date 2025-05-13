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
    { img: posternormal13, isPremium: true }, // Obsequio cumpleaños
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

const renderSixImagesLayout = (items) => (
  <div className="flex flex-col items-center gap-10 ">
    {/* Primera fila con dos imágenes grandes */}
    <div className="grid grid-cols-2 gap-10">
      {items.slice(0, 2).map((item, index) => (
        <div
          key={index}
          className={`relative h-[600px] w-[600px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
            item.isPremium ? "premium-glow" : ""
          }`}
        >
          <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
        </div>
      ))}
    </div>
    {/* Segunda fila con cuatro imágenes más pequeñas */}
    <div className="grid grid-cols-4 gap-10">
      {items.slice(2, 6).map((item, index) => (
        <div
          key={index}
          className={`relative h-[280px] w-[280px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg ${
            item.isPremium ? "premium-glow" : ""
          }`}
        >
          <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
        </div>
      ))}
    </div>
  </div>
);

const renderFourImagesLayout = (items) => (
  <div className="flex flex-col items-center gap-10">
    {/* Imagen destacada arriba */}
    <div className="w-[400px] h-[400px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg">
      <img src={items[0].img} alt="" className="h-full w-full object-cover rounded-xl" />
    </div>
    {/* Tres imágenes más pequeñas abajo */}
    <div className="grid grid-cols-3 gap-10">
      {items.slice(1).map((item, index) => (
        <div 
          key={index} 
          className="relative h-[280px] w-[280px] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-110 hover:shadow-lg"
        >
          <img src={item.img} alt="" className="h-full w-full object-cover rounded-xl" />
        </div>
      ))}
    </div>
  </div>
);


const VentajasNormales = ({ section, title, subtitle }) => {
  const items = sections[section] || [];

  return (
    <section className="w-full py-12 px-4 flex flex-col items-center bg-black">
    <div className="max-w-[1200px] w-full flex flex-col items-center mb-16 mt-[20px]">
      <div className="flex items-center justify-center gap-6">
        {/* Línea izquierda */}
        <div className="w-[200px] h-[3px] bg-[#1AA9FF]"></div>

        {/* Título */}
        <h2 className="text-6xl text-center font-extrabold uppercase text-white">{title}</h2>

        {/* Línea derecha */}
        <div className="w-[200px] h-[3px] bg-[#1AA9FF]"></div>
      </div>

      {/* Subtítulo */}
      <p className="text-xl text-gray-400">{subtitle}</p>
    </div>

      {items.length === 6 ? renderSixImagesLayout(items) : 
       items.length === 4 ? renderFourImagesLayout(items) : (
        <div className="grid grid-cols-2 gap-10">
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
      )}
    </section>
  );
};

export default VentajasNormales;

