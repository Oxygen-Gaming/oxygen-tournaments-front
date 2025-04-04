import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";
import poster1 from "@imgs/poster1.webp"
import poster2 from "@imgs/poster2.webp"
const VentajasMixtas = () => {
    return (
        <section className="flex flex-col justify-center items-center mb-[5rem] gap-[20px]">
            <div className="hidden lg:flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex gap-[40px]">
                    <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#1AA9FF"} color="white"/>
                    <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#1AA9FF"} color="white"/>
                    <VentajaGrande link={poster1} text={"Ventajas Normales Free"} background={"#1AA9FF"} color="white"/>
                </div>

                <div className="flex gap-[40px]">
                    <VentajaGrande link={poster1} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" />
                    <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" />
                    <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" />
                </div>
            </div>

            <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster2} background={" #1AA9FF"}/>
                    <VentajaMovil link={poster2} background={" #1AA9FF"}/>
                    <VentajaMovil link={poster1} background={" #1AA9FF"}/>
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

export default VentajasMixtas;