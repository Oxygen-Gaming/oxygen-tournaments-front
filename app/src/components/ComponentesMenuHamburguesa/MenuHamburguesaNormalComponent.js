import React, { useState } from "react";

const MenuHamburguesaNormal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black">
            <button
                className="lg:hidden w-full flex flex-col items-center justify-center mt-[30px] mb-[30px]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="w-8 h-1 bg-white mb-1 transition-transform duration-300"></div>
                <div className="w-8 h-1 bg-white mb-1 transition-transform duration-300"></div>
                <div className="w-8 h-1 bg-white transition-transform duration-300"></div>
            </button>
            <div
                className={`lg:hidden fixed inset-0 z-50 bg-black flex flex-col justify-center items-center gap-6 transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button
                    className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
                    onClick={() => setIsOpen(false)}
                >
                    X
                </button>
                <a
                    href="/"
                    className="text-white text-lg font-bold no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 px-4 py-2"
                    onClick={() => setIsOpen(false)}
                >
                    Inicio
                </a>
                <a
                    href="/ventajas"
                    className="text-white text-lg font-bold no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 px-4 py-2"
                    onClick={() => setIsOpen(false)}
                >
                    Ventajas
                </a>
                <a
                    href="/competition"
                    className="text-white text-lg font-bold no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 px-4 py-2"
                    onClick={() => setIsOpen(false)}
                >
                    Competiciones
                </a>
                <a
                    href="/content"
                    className="text-white text-lg font-bold no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 px-4 py-2"
                    onClick={() => setIsOpen(false)}
                >
                    Contenido
                </a>
                <a
                    href="/missions"
                    className="text-white text-lg font-bold no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 px-4 py-2"
                    onClick={() => setIsOpen(false)}
                >
                    Misiones
                </a>
                <a
                    href="/rewards"
                    className="text-white text-lg font-bold no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 px-4 py-2"
                    onClick={() => setIsOpen(false)}
                >
                    Recompensas
                </a>

                <a
                    href="/tienda"
                    className="text-white text-lg font-bold no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 px-4 py-2"
                    onClick={() => setIsOpen(false)}
                >
                    Tienda
                </a>
                
            </div>
        </div>
    );
};

export default MenuHamburguesaNormal;