import React, { useState } from "react";
import Enlace from "../components/componentesPerfil/enlacesPerfilComponent";
import Perfil2 from "../components/componentesPerfil/interfazPerfilComponent";
import Cuenta from "../components/componentesPerfil/interfazCuentaComponent";
import Conexiones from "../components/componentesPerfil/interfazConexionesComponent";
import CuentasJuego from "../components/componentesPerfil/interfazCuentasJuegoComponent";
import Inventario from "../components/componentesPerfil/interfazInventarioComponent";
import Pedidos from "../components/componentesPerfil/interfazPedidosComponent";
import Logros from "../components/componentesPerfil/interfazLogrosComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getImagenPerfil } from "../components/componentesPerfil/interfazCuentaComponent";
import MenuHamburguesaPerfil from "@components/ComponentesMenuHamburguesa/MenuHamburguesaPerfilComponent";

const Perfil = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('perfil');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el estado del menú hamburguesa

    const renderContent = () => {
        switch(opcionSeleccionada) {
            case 'perfil':
                return <Perfil2/>;
            case 'cuenta':
                return <Cuenta />;
            case 'conexiones':
                return <Conexiones />;
            case 'cuentas de juego':
                return <CuentasJuego />;
            case 'inventario':
                return <Inventario />;
            case 'logros':
                return <Logros />;
            case 'pedidos':
                return <Pedidos />;
            default:
                return <Perfil2 />;
        }
    };

    return (
        <div className="bg-[#1c1c1c] text-white min-h-screen font-['Roboto_Condensed',sans-serif] pt-5 lg:pt-0">
            <Header />
            <MenuHamburguesaPerfil 
                isOpen={isMenuOpen} 
                setIsOpen={setIsMenuOpen} 
                setOpcionSeleccionada={(opcion) => {
                    setOpcionSeleccionada(opcion);
                    setIsMenuOpen(false); // Cierra el menú al seleccionar una opción
                }} 
            />
            
            <div className="pl-[100px] px-[30px] hidden lg:flex lg:flex-col mt-[50px] ">
                <div className="flex text-[10px] gap-[7px] lg:text-[20px] lg:gap-[30px] w-[100%] font-bold">
                    <Enlace opcion={'perfil'} nombre={'Perfil'} setOpcionSeleccionada={setOpcionSeleccionada} opcionSeleccionada={opcionSeleccionada}/>
                    <Enlace opcion={'logros'} nombre={'Logros'} setOpcionSeleccionada={setOpcionSeleccionada} opcionSeleccionada={opcionSeleccionada}/>
                    <Enlace opcion={'pedidos'} nombre={'Pedidos'} setOpcionSeleccionada={setOpcionSeleccionada} opcionSeleccionada={opcionSeleccionada}/>
                    <Enlace opcion={'cuentas de juego'} nombre={'Cuentas de Juego'} setOpcionSeleccionada={setOpcionSeleccionada} opcionSeleccionada={opcionSeleccionada}/>
                    <Enlace opcion={'conexiones'} nombre={'Conexiones'} setOpcionSeleccionada={setOpcionSeleccionada} opcionSeleccionada={opcionSeleccionada}/>
                    <Enlace opcion={'cuenta'} nombre={'Editar Perfil'} setOpcionSeleccionada={setOpcionSeleccionada} opcionSeleccionada={opcionSeleccionada}/>
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:mt-[50px] lg:mb-[50px]">
                {renderContent()}
            </div>
            <Footer />   
        </div>
    );
}
export { getImagenPerfil };
export default Perfil;
