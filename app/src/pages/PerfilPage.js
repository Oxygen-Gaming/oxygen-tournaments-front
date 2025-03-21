import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Enlace from "../components/componentesPerfil/enlacesPerfilComponent";
import Perfil2 from "../components/componentesPerfil/interfazPerfilComponent";
import Cuenta, { getImagenPerfil } from "../components/componentesPerfil/interfazCuentaComponent";
import Conexiones from "../components/componentesPerfil/interfazConexionesComponent";
import CuentasJuego from "../components/componentesPerfil/interfazCuentasJuegoComponent";
import Inventario from "../components/componentesPerfil/interfazInventarioComponent";
import Pedidos from "../components/componentesPerfil/interfazPedidosComponent";
import Logros from "../components/componentesPerfil/interfazLogrosComponent";
const Perfil = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        <div className="bg-blue-900 min-h-[100vh] text-[white] flex flex-col font-roboto-condensed gap-[35px] w-full pt-[30px] lg:p-0">
            <Header />
            <button className="lg:hidden w-full flex flex-col items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white"></div>
            </button>
            <div className={`lg:hidden absolute ${isOpen ? 'block' : 'hidden'} w-full relative bg-blue-900 h-full flex flex-col justify-center items-center mt-4 gap-[20px] transition-transform ease-in-out duration-300`} onClick={() => setIsOpen(!isOpen)} >
                <a href="/" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Inicio</a>
                <a href="/competition" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Competiciones</a>
                <a href="/content" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Contenido</a>
                <a href="/missions" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Misiones</a>
                <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>Recompensas</a>  
                
                <hr className="text-[white] bg-[white] w-[80%]"></hr>
                <Enlace opcion={'perfil'} nombre={'Perfil'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(!isOpen)} />
                <Enlace opcion={'inventario'} nombre={'Inventario'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(!isOpen)} />
                <Enlace opcion={'logros'} nombre={'Logros'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(!isOpen)} />
                <Enlace opcion={'pedidos'} nombre={'Pedidos'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(!isOpen)} />
                <Enlace opcion={'cuentas de juego'} nombre={'Cuentas de Juego'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(!isOpen)} />
                <Enlace opcion={'conexiones'} nombre={'Conexiones'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(!isOpen)} />
                <Enlace opcion={'cuenta'} nombre={'Editar Perfil'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className="flex items-center text-center w-full justify-center gap-[30px] font-bold">
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
            {renderContent()}
            <Footer />   
        </div>
    );
}
export { getImagenPerfil };
export default Perfil;