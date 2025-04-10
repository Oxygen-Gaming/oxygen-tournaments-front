import React from "react";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import CardVentajas from "@components/componentesInicio/CardVentajasComponent";
import TablaVentajas from "@components/ComponentesVentajas/VentajasTablaComponent";
import VentajasNormales from "@components/componentesInicio/VentajasNormalesComponents";
import VentajasPremium from "@components/componentesInicio/VentajasPremiumComponent";

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
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Ventajas</h1>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-[10vh]">
        <VentajasNormales />
        <CardVentajas />
        <VentajasPremium />
        <TablaVentajas />
      </div>

      <Footer />
    </div>
  );
};

export default Ventajas;