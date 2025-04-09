import React from "react";
import Portada from "@imgs/Portada_de_Home.jpg";
const Banner = () => {
    return (
        <main className="flex items-centr w-full h-[calc(100vh-80px)] px-16 relative overflow-hidden md:mt-0 mt-0 pt-7 bg-[#1AA9FF] mb-32" style={{backgroundImage: `url(${Portada})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
            
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> {/* Restore the black overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10"></div>             
            <svg className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] opacity-10 z-[1]" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <path d="M250,50 L400,250 L250,450 L100,250 Z" className="fill-orange-400 opacity-20"/>
            </svg>
            <div className="max-w-[600px] z-10 relative mt-16">
                <h1 className="text-3xl mb-4 leading-[1.2]">VENTAJAS EXCLUSIVAS PARA{' '}<span className="text-blue-600">GAMERS</span>.</h1>
                <h1 className="text-3xl mb-4 leading-[1.2]">VIVE LA MEJOR EXPERIENCIA GAMER CON{' '}<span className="text-blue-600">OXYCLUB</span>.</h1>
                <p className="mb-8 text-gray-300">
                    ¡Bienvenido a OxyClub! La plataforma que te da más: más acceso a
                    competiciones, más contenido exclusivo, más premios y más
                    oportunidades para demostrar tu talento y vivir el gaming al máximo.
                </p>
                <div className="flex gap-4 mt-[-20px]">
                    <a href="/register" className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-blue-600 text-white"> Únete a Oxyclub </a>
                </div>
            </div>
        </main>
    )
}

export default Banner;