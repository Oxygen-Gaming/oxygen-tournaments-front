import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import RecompensasInicio from "@components/componentesInicio/RecompensasInicioComponent";
import VentajasInicio from "@components/componentesInicio/VentajasInicioComponent";
import FuncionaInicio from "@components/componentesInicio/FuncionaInicio";
import PrincipalInicio from "@components/componentesInicio/PrincipalInicio";
import BannerShop from "@components/Componentes Tienda/BannerShopComponent";

const OxygenGaming = () => {
  
  return (
    <div className="bg-[#1AA9FF] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0">      
      <Header />
      <MenuHamburguesaNormal />
      <PrincipalInicio></PrincipalInicio>

      <div className="w-screen">
        
        <FuncionaInicio></FuncionaInicio>
        <VentajasInicio></VentajasInicio>
        <RecompensasInicio></RecompensasInicio>
        
      </div>
      <Footer />
    </div>
  );
};

export default OxygenGaming;
