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
    const renderContent = () => {
        switch(opcionSeleccionada) {
            case 'perfil':
                return <Perfil2 />;
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
        <div className="bg-[#1AA9FF] text-white min-h-screen font-['Roboto_Condensed',sans-serif]">
            <Header />
            <MenuHamburguesaPerfil />
            <div className="hidden lg:flex items-center text-center w-full justify-center gap-[30px] font-bold">
                <p className="text-[30px]">Tu Perfil</p>
            </div>
            <div className="pl-[100px] px-[30px] hidden lg:flex lg:flex-col">
                <div className="flex text-[10px] gap-[7px] lg:text-[20px] lg:gap-[30px] w-[100%] font-bold">
                    <Enlace opcion={'perfil'} nombre={'Perfil'} setOpcionSeleccionada={setOpcionSeleccionada} />
                    <Enlace opcion={'inventario'} nombre={'Inventario'} setOpcionSeleccionada={setOpcionSeleccionada} />
                    <Enlace opcion={'logros'} nombre={'Logros'} setOpcionSeleccionada={setOpcionSeleccionada} />
                    <Enlace opcion={'pedidos'} nombre={'Pedidos'} setOpcionSeleccionada={setOpcionSeleccionada} />
                    <Enlace opcion={'cuentas de juego'} nombre={'Cuentas de Juego'} setOpcionSeleccionada={setOpcionSeleccionada} />
                    <Enlace opcion={'conexiones'} nombre={'Conexiones'} setOpcionSeleccionada={setOpcionSeleccionada} />
                    <Enlace opcion={'cuenta'} nombre={'Editar Perfil'} setOpcionSeleccionada={setOpcionSeleccionada} />
                </div>
                <hr className="underline w-full"></hr>
            </div>
            <div className="hidden lg:flex">
                {renderContent()}
            </div>
            
            <Footer />   
        </div>
    );
}
export { getImagenPerfil };
export default Perfil;