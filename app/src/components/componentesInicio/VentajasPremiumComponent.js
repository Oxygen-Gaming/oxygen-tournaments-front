import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";
import poster1 from "@imgs/poster1.webp"
import poster2 from "@imgs/poster2.webp"

import posterpremium1 from "@imgs/Recompensas_Premium1.jpg"
import posterpremium2 from "@imgs/Recompensas_Premium2.jpg"
import posterpremium3 from "@imgs/Recompensas_Premium3.jpg"
import posterpremium4 from "@imgs/Recompensas_Premium4.jpg"
const VentajasPremium = () => {
    return (
        <section className=" p-[15px] flex flex-col justify-center items-center mt-[5vh] gap-[40px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold ">Ventajas Premium</h1>
                <span className="text-[15px] font-semibold">Disfruta de nuestras mejores funciones como miembro especial del club  y aprovecha al máximo tu experiencia.</span>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center gap-[2rem]">
                <div className="hidden lg:flex gap-[40px]">
                    <VentajaGrande link={posterpremium1} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black"/>
                    <VentajaPequeño link={posterpremium4} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black"  />
                    <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black"  />
                </div>

                <div className="flex gap-[40px]">
                    <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black"  />
                    <VentajaGrande link={posterpremium2} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" />
                    <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" />
                </div>

                <div className="flex gap-[40px]">
                    <VentajaGrande link={posterpremium3} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" />
                    <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" />
                    <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" />
                </div>
            </div>


            <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                    <VentajaMovil link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                    <VentajaMovil link={poster1} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster1} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                    <VentajaMovil link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                    <VentajaMovil link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                    
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                    <VentajaMovil link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                    <VentajaMovil link={poster1} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={" #1AA9FF"}/>
                </div>
            </div>
        </section>
    )
}

export default VentajasPremium;