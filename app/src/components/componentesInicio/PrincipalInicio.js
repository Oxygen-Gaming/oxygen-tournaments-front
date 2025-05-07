import React from "react";
import PortadaDeHome from "@imgs/Portada_de_Home.jpg";

const PrincipalInicio = () => {
    return (
        <main
        className="flex items-center max-[320px]:h-[100vh] landscape:min-[568px]:h-[100vh] md:h-[80vh] px-16 relative overflow-hidden mt-[20px] lg:mt-0 pt-7"
        style={{
          backgroundImage: `url(${PortadaDeHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0 "></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10 "></div>
        <div className="max-w-[600px] z-20 relative my-5 ">
          <h1 className="text-[30px] sm:text-[35px] md:text-[40px] mb-4">
            VIVE LA MEJOR EXPERIENCIA GAMER CON <span className="text-[#1AA9FF] font-bold">OXYCLUB</span>.
          </h1>
          <p>¡Compite, obtén recompensas y ventajas, y desbloquea contenido exclusivo que elevará tu experiencia con Oxygen al siguiente nivel!</p>
          <div className="flex gap-4 mt-4"> {/* Adjusted margin */}
            <a
              href="/register"
              className="inline-block px-6 py-3 rounded-lg font-bold text-lg transition transform hover:-translate-y-1 hover:shadow-lg bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white hover:from-[#00487a] hover:to-[#007acc] animate-pulse"
            >
              Únete a Oxyclub
            </a>
          </div>
        </div>
      </main>
    )
}

export default PrincipalInicio;