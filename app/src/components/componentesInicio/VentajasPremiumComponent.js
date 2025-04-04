import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import poster1 from "@imgs/poster1.webp"
import poster2 from "@imgs/poster2.webp"
const VentajasPremium = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-[5vh] gap-[40px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold ">Ventajas Premium</h1>
                <span className="text-[20px] font-semibold">Disfruta de nuestras mejores funciones como miembro especial del club  y aprovecha al máximo tu experiencia.</span>
            </div>
            <div className="flex gap-[40px]">
                <VentajaGrande link={poster1} color={"white"} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} />
                <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} />
                <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} />
            </div>

            <div className="flex gap-[40px]">
                <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} />
                <VentajaGrande link={poster1} color={"white"} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} />
                <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} />
            </div>

            <div className="flex gap-[40px]">
                <VentajaGrande link={poster1} color={"white"} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} />
                <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} />
                <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} />
            </div>
        </section>
    )
}

export default VentajasPremium;