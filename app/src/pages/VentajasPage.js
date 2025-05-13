import React from "react";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import CardVentajas from "@components/componentesInicio/CardVentajasComponent";
import TablaVentajas from "@components/ComponentesVentajas/VentajasTablaComponent";
import VentajasNormales from "@components/componentesInicio/VentajasNormalesComponents";


const Ventajas = () => {
  const bannerImage = "https://via.placeholder.com/1920x1080";

  return (
    <div className="bg-[#0f0f0f] text-[white] font-roboto-condensed">
      <Header />
      <MenuHamburguesaNormal />

      {/* Banner */}
      <div className="w-full h-96 bg-cover bg-center relative mt-0">
        <img
          src={bannerImage}
          alt="Ventajas Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Ventajas</h1>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center">
        {/* Section: OXYGEN */}
        <VentajasNormales
          section="oxygen"
          title="OXYGEN GAMING"
          subtitle="Donde la competición no tiene límites, la emoción es constante y el nivel de juego alcanza su máximo potencial"

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

        <TablaVentajas />
      </div>

      <Footer />
    </div>
  );
};

export default Ventajas;