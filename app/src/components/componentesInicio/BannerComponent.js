import React from "react";
import PortadaDeHome from "@imgs/Portada_de_Home.jpg"; // Verificar que esta ruta sea correcta

const BannerComponent = () => {
  return (
    <main
      className="flex items-center h-[calc(100vh-80px)] px-16 relative overflow-hidden md:mt-0 mt-0 pt-7"
      style={{
        backgroundImage: `url(${PortadaDeHome})`, // Asegurarse de que la imagen esté en la ubicación correcta
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10"></div>
      <div className="max-w-[600px] z-20 relative">
        <h1 className="text-3xl mb-4 leading-[1.2]">
          VENTAJAS EXCLUSIVAS PARA{" "}
          <span className="text-white">GAMERS</span>.
        </h1>
        <h1 className="text-3xl mb-4 leading-[1.2]">
          VIVE LA MEJOR EXPERIENCIA GAMER CON{" "}
          <span className="text-white">OXYCLUB</span>.
        </h1>
        <p className="mb-8 text-white">
          ¡Bienvenido a OxyClub! La plataforma que te da más: más acceso a
          competiciones, más contenido exclusivo, más premios y más
          oportunidades para demostrar tu talento y vivir el gaming al máximo.
        </p>
        <div className="flex gap-4 mt-[-20px]">
          <a
            href="/register"
            className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-[#005f99] text-white"
          >
            Únete a Oxyclub
          </a>
        </div>
      </div>
    </main>
  );
};

export default BannerComponent;