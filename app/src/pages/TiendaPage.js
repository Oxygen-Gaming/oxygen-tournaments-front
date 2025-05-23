import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import BannerShop from "@components/Componentes Tienda/BannerShopComponent";
import CamisetasComponent from "@components/Componentes Tienda/CamisetasComponent";
import Sidebar from '@components/Componentes Tienda/Carrito_Component';
const Tienda = () => {
  
  return (
    <div className="bg-black text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0">      
      <Header />
      <MenuHamburguesaNormal />
      <BannerShop></BannerShop>
      <Sidebar></Sidebar>
      <CamisetasComponent></CamisetasComponent> 
      <Footer />
      
    </div>
  );
};

export default Tienda;