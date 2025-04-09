import React from "react";
import Banner from "@components/componentesInicio/BannerComponent";
import VentajasMixtas from "@components/componentesInicio/VentajasMixtasComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Tarjeta from "@imgs/poster1.webp";
import Tarjeta2 from "@imgs/poster2.webp";
import Tarjeta3 from "@imgs/poster3.webp";
import Tarjeta4 from "@imgs/poster4.webp";
import Tarjeta5 from "@imgs/poster5.webp";
import Tarjeta6 from "@imgs/poster6.webp";
import Tarjeta7 from "@imgs/poster7.webp";
import Tarjeta8 from "@imgs/poster8.webp";
import Tarjeta9 from "@imgs/poster9.webp";

const OxygenGaming = () => {
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

  return (
    <div className="bg-[#1AA9FF] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0 px-[20px]">
      <Header />
      <MenuHamburguesaNormal />
      <Banner /> {/* Usar el componente Banner para manejar la imagen */}
      <div className="flex flex-col justify-center items-center bg-[#1AA9FF]">
        <VentajasMixtas />
      </div>
      <Footer />
    </div>
  );
};

export default OxygenGaming;