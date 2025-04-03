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
      
      <div className="bg-blue-900 text-[white] font-roboto-condensed">
        <Header />
        <MenuHamburguesaNormal />
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