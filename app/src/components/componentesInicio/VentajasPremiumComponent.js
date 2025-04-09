import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";

import poster1 from "@imgs/Ventaja Banner.webp"
import poster2 from "@imgs/Ventaja Descuentos.webp"
import poster3 from "@imgs/Ventaja Obsequio.webp"
import poster4 from "@imgs/Ventaja Puntos Dobles.webp"
import poster5 from "@imgs/Ventaja Seccion C.webp"
import poster6 from "@imgs/Ventaja Activo D.webp"

import poster7 from "@imgs/Ventaja Entradas.webp"
import poster8 from "@imgs/Ventaja Informacion.webp"
import poster9 from "@imgs/Ventaja Partidas.webp"



import poster10 from "@imgs/Recompensas_Premium1.jpg"
import poster11 from "@imgs/Recompensas_Premium2.jpg"
import poster12 from "@imgs/Recompensas_Premium3.jpg"
import poster13 from "@imgs/Recompensas_Premium4.jpg"
const VentajasPremium = () => {
    return (
        <section className=" p-[15px] flex flex-col justify-center items-center mt-[5vh] gap-[40px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold ">Ventajas Premium</h1>
                <span className="text-[15px] font-semibold">Disfruta de nuestras mejores funciones como miembro especial del club  y aprovecha al máximo tu experiencia.</span>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center gap-[2rem]">
                <div className="hidden lg:flex gap-[40px]">
                    <VentajaGrande link={poster10} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black"/>
                    <VentajaPequeño link={poster1} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black"  />
                    <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black"  />
                </div>

                <div className="flex gap-[40px]">
                    <VentajaPequeño link={poster3} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black"  />
                    <VentajaGrande link={poster11} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" />
                    <VentajaPequeño link={poster4} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" />
                </div>

                <div className="flex gap-[40px]">
                    <VentajaGrande link={poster12} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" />
                    <VentajaPequeño link={poster5} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" />
                    <VentajaPequeño link={poster6} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" />
                </div>
            </div>


            <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster7} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    <VentajaMovil link={poster1} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    <VentajaMovil link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster3} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    <VentajaMovil link={poster8} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    <VentajaMovil link={poster4} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster5} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    <VentajaMovil link={poster6} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    <VentajaMovil link={poster9} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" text={"Ventajas Premium"} />
                </div>
            </div>
        </section>
    )
}

export default VentajasPremium;