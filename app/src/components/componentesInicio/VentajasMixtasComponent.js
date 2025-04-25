import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";
import poster1 from "@imgs/poster1.webp"
import poster2 from "@imgs/poster2.webp"

const VentajasMixtas = () => {
    return (
        <section className="flex flex-col justify-center items-center mb-[5rem] gap-[20px] mt-[50px]">
            <div className="hidden lg:flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex gap-[40px]">
                    <VentajaPequeño link={poster2} />
                    <VentajaPequeño link={poster2} />
                    <VentajaGrande link={poster1} />
                </div>

                <div className="flex gap-[40px]">
                    <VentajaGrande link={poster1}  text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" isPremium={true} />
                    <VentajaPequeño link={poster2} />
                    <VentajaPequeño link={poster2}/>
                </div>
            </div>

            <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster1} background={"#1796E6"} />
                    <VentajaMovil link={poster2} background={"#1796E6"} />
                    <VentajaMovil link={poster1} background={"#1796E6"} />
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster2} background={"#1796E6"} />
                    <VentajaMovil link={poster2} background={"#1796E6"} />
                    <VentajaMovil link={poster1} background={"#1796E6"} />
                </div>
            </div>
        </section>


    )
}

export default VentajasMixtas;