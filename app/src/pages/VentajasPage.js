import React from "react";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import CardVentajas from "@components/componentesInicio/CardVentajasComponent";
import TablaVentajas from "@components/ComponentesVentajas/VentajasTablaComponent";
import VentajasNormales from "@components/componentesInicio/VentajasNormalesComponents";


const Ventajas = () => {
  const bannerImage = "https://via.placeholder.com/1920x1080"; // Replace with the desired image URL

  return (
    <div className="bg-[#1AA9FF] text-[white] font-roboto-condensed">
      <Header />
      <MenuHamburguesaNormal />

      {/* Banner */}
      <div className="w-full h-96 bg-cover bg-center relative mt-0">
        <img
          src={bannerImage} // Use the custom image
          alt="Ventajas Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Ventajas</h1>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-[10vh]">
        {/* Section: OXYGEN */}
        <VentajasNormales
          section="oxygen"
          title="OXYGEN, TU EQUIPO"
          subtitle="Descubre las ventajas exclusivas que Oxygen tiene para ti."
          isBlue={true}
        />

        {/* Section: CONTENIDO POR Y PARA TI */}
        <VentajasNormales
          section="contenido"
          title="CONTENIDO POR Y PARA TI"
          subtitle="Aprovecha contenido exclusivo diseñado especialmente para ti."
          isBlue={false}
        />

        {/* Section: GANA PREMIOS */}
        <VentajasNormales
          section="premios"
          title="GANA PREMIOS"
          subtitle="Participa en actividades y eventos para ganar increíbles premios."
          isBlue={true}
        />

        {/* Section: PRODUCTOS EXCLUSIVOS Y DESCUENTOS */}
        <VentajasNormales
          section="productos"
          title="PRODUCTOS EXCLUSIVOS Y DESCUENTOS"
          subtitle="Aprovecha ofertas exclusivas y descuentos en productos seleccionados."
          isBlue={false}
        />

        <CardVentajas /> {/* No animations */}
        <TablaVentajas />
      </div>

      <Footer />
      <style>{`
  .premium-glow {
    border: 10px  gold;
    box-shadow: 0 0 15px 5px rgba(255, 217, 0, 0.76);
    transition: transform 0.3s, border 0.3s, box-shadow 0.3s;
  }

  .premium-glow:hover {
    transform: scale(1.1);
    border-width: 12px;
    box-shadow: 0 0 20px 7px rgba(255, 217, 0, 0.9);
  }
`}</style>
    </div>
  );
};

export default Ventajas;