import React, { useState } from "react";
import Enlace from "../componentesPerfil/enlacesPerfilComponent";
import Perfil2 from "../componentesPerfil/interfazPerfilComponent";
import Cuenta from "../componentesPerfil/interfazCuentaComponent";
import Conexiones from "../componentesPerfil/interfazConexionesComponent";
import CuentasJuego from "../componentesPerfil/interfazCuentasJuegoComponent";
import Inventario from "../componentesPerfil/interfazInventarioComponent";
import Pedidos from "../componentesPerfil/interfazPedidosComponent";
import Logros from "../componentesPerfil/interfazLogrosComponent";

const MenuHamburguesaPerfil = () => {
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
        <div className="flex flex-col gap-[10vh] lg:hidden">
            <button className="lg:hidden w-full flex flex-col items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white"></div>
            </button>
            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#1AA9FF] flex flex-col justify-center items-center p-4 gap-4 transition-transform ease-in-out duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Botón de cerrar */}
                <button
                    className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>

                {/* Opciones del menú */}
                <a href="/" className="text-white text-center no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(false)}>Inicio</a>
                <a href="/competition" className="text-white text-center no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(false)}>Competiciones</a>
                <a href="/content" className="text-white text-center no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(false)}>Contenido</a>
                <a href="/missions" className="text-white text-center no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(false)}>Misiones</a>
                <a href="/rewards" className="text-white text-center no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(false)}>Recompensas</a>
                <a href="/ventajas" className="text-white text-center no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10" onClick={() => setIsOpen(false)}>Ventajas</a>

                <hr className="text-[white] bg-[white] w-[80%]"></hr>
                <Enlace opcion={'perfil'} nombre={'Perfil'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(false)} />
                <Enlace opcion={'inventario'} nombre={'Inventario'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(false)} />
                <Enlace opcion={'logros'} nombre={'Logros'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(false)} />
                <Enlace opcion={'pedidos'} nombre={'Pedidos'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(false)} />
                <Enlace opcion={'cuentas de juego'} nombre={'Cuentas de Juego'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(false)} />
                <Enlace opcion={'conexiones'} nombre={'Conexiones'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(false)} />
                <Enlace opcion={'cuenta'} nombre={'Editar Perfil'} setOpcionSeleccionada={setOpcionSeleccionada} onClick={() => setIsOpen(false)} />
            </div>
            {renderContent()}
        </div>
    );
};

export default MenuHamburguesaPerfil;