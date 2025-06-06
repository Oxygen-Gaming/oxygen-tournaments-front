import React from "react";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import posternormal1 from "@imgs/Watch parties.webp";
import posternormal2 from "@imgs/recompensas por misiones.webp";
import poster1 from "@imgs/Watch parties.webp";
import poster3 from "@imgs/Obsequio cumpleaños.webp";
import poster2 from "@imgs/Descuentos merchandising.webp";
import poster10 from "@imgs/Entradas a eventos.webp";

const VentajasInicio = () => {

    return (
        <div className="w-full flex flex-col items-center bg-[black] text-[#1AA9FF] pb-[10vh]"> {/* Increased bottom padding */}
          <h1 className="text-[45px] md:text-[55px] font-bold text-center mt-[20px] mb-[30px] text-[white]">¡ DESCUBRE LOS BENEFICIOS QUE MULTIPLICAN TU DIVERSIÓN !</h1>
          
          <p className="text-[white] text-[25px] md:text-[30px] font-bold text-center">Solo por ser parte del OxyClub, tendrás ventajas gratis para disfrutar al máximo</p>

          <div className="hidden lg:flex flex-row items-center justify-center gap-[2rem] mt-[20px]">
            <VentajaPequeño link={posternormal1} text={"Ventajas Free"} background={"#1796E6"} color="white" />
            <VentajaGrande link={poster1} text={"Ventajas Free"} background={"#1796E6"} color="white" />
            <VentajaPequeño link={posternormal2} text={"Ventajas Free"} background={"#1796E6"} color="white" />
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
            <VentajaMovil link={posternormal1} text={"Ventajas Free"} background={"#1796E6"} />
            <VentajaMovil link={posternormal2} text={"Ventajas Free"} background={"#1796E6"} />
            <VentajaMovil link={poster1} text={"Ventajas Free"} background={"#1796E6"} />
          </div>
          <div className="hidden lg:flex flex-row items-center justify-center gap-[2rem] mt-8">
            <VentajaGrande link={poster10} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" isPremium={true} />
            <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" isPremium={true} />
            <VentajaPequeño link={poster3} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" isPremium={true} />
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem] mt-8">
            <VentajaMovil link={poster1} background={"gold"} color="black" text={"Ventajas Premium"} isPremium={true} />
            <VentajaMovil link={poster2} background={"gold"} color="black" text={"Ventajas Premium"} isPremium={true} />
            <VentajaMovil link={poster3} background={"gold"} color="black" text={"Ventajas Premium"} isPremium={true} />
          </div>


          <a
              href="ventajas"
              className="inline-block px-8 py-4 text-lg mt-[50px] rounded-lg font-bold bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white hover:from-[#00487a] hover:to-[#007acc]"
          >
              VER TODAS LAS VENTAJAS
          </a>


        </div>
    )

}

export default VentajasInicio;