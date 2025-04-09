import React from "react";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import CardVentajas from "@components/componentesInicio/CardVentajasComponent";
import TablaVentajas from "@components/ComponentesVentajas/VentajasTablaComponent";
import VentajasNormales from "@components/componentesInicio/VentajasNormalesComponents";
import VentajasPremium from "@components/componentesInicio/VentajasPremiumComponent";


const Ventajas = () => {
  
    return (
      
      <div className="bg-[#1AA9FF] text-[white] font-roboto-condensed"> {/* Cambiado a bg-[#1AA9FF] */}
        <Header />
        <MenuHamburguesaNormal />
        {/* BANNER */}
        <div className="w-11/12 mx-auto h-80 bg-cover bg-center rounded-lg transition-all duration-1000 mt-8 relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
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