import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import poster1 from "@imgs/poster1.webp"
import poster2 from "@imgs/poster2.webp"
const VentajasNormales = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-[5vh] gap-[5vh]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold ">Ventajas Free</h1>
                <span className="text-[20px] font-semibold">Disfruta de nuestras funciones esenciales sin costo y aprovecha al máximo tu experiencia.</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex gap-[40px]">
                    <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#123456"}/>
                    <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#123456"}/>
                    <VentajaGrande link={poster1} text={"Ventajas Normales Free"} background={"#123456"}/>
                </div>

                <div className="flex gap-[40px]">
                    <VentajaGrande link={poster1} text={"Ventajas Normales Free"} background={"#123456"}/>
                    <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#123456"}/>
                    <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#123456"}/>
                    
                </div>

                <div className="flex gap-[40px]">
                    <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#123456"}/>
                    <VentajaPequeño link={poster2} text={"Ventajas Normales Free"} background={"#123456"}/>
                    <VentajaGrande link={poster1} text={"Ventajas Normales Free"} background={"#123456"}/>
                </div>
            </div>
            
        </section>
    )
}

export default VentajasNormales;