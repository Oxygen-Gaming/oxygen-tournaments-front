import React from "react";
import Banner from "@components/componentesInicio/BannerComponent";
import VentajasMixtas from "@components/componentesInicio/VentajasMixtasComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";

const OxygenGaming = () => {
  return (
    <div className="bg-blue-900 text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0 px-[20px]">
      <Header />
      <MenuHamburguesaNormal />
      <Banner />
      <VentajasMixtas />
      <Footer />
    </div>
  );
};

export default OxygenGaming;