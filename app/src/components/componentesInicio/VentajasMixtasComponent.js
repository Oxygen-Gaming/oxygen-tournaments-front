import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import poster1 from "@imgs/poster1.webp"
import poster2 from "@imgs/poster2.webp"
const VentajasMixtas = () => {
    return (
        <section className="flex flex-col justify-center items-center mb-[5rem] gap-[20px]">
            <div className="flex gap-[40px]">
                <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#123456"}/>
                <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#123456"}/>
                <VentajaGrande link={poster1} text={"Ventajas Normales Free"} background={"#123456"}/>
            </div>

            <div className="flex gap-[40px]">
                <VentajaGrande link={poster1} color={"white"} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} />
                <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} />
                <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} />
            </div>
        </section>
    )
}

export default VentajasMixtas;