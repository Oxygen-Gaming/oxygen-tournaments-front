import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";
import posternormal1 from "@imgs/Watch parties.webp"; // Fixed case sensitivity
import posternormal2 from "@imgs/wallpapers.webp"; // Fixed case sensitivity
import posternormal3 from "@imgs/recompensas por misiones.webp"; // Fixed case sensitivity
import posternormal4 from "@imgs/guias competitivas.webp"; // Fixed case sensitivity
import posternormal5 from "@imgs/eventos comunidad.webp"; // Fixed case sensitivity
import posternormal6 from "@imgs/drops exclusivos.webp"; // Fixed case sensitivity

const VentajasNormales = () => {
    return (
        <section id="ventajas_normales" className=" p-[15px] flex flex-col justify-center items-center mt-[5vh] gap-[5vh] overflow-hidden">
            <div className=" flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold ">Ventajas Free</h1>
                <span className="text-[18px] font-semibold">Disfruta de nuestras funciones esenciales sin costo y aprovecha al máximo tu experiencia.</span>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex gap-[40px]">
                    <VentajaPequeño link={posternormal1} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaPequeño link={posternormal2} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaGrande link={posternormal1} text={"Ventajas Free"} background={" #1796E6"} color="white"/>
                </div>

                <div className="flex gap-[40px]">
                    <VentajaGrande link={posternormal1} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaPequeño link={posternormal3} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaPequeño link={posternormal4} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    
                </div>

                <div className="flex gap-[40px]">
                    <VentajaPequeño link={posternormal5} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaPequeño link={posternormal6} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaGrande link={posternormal1} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                </div>
            </div>

            <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={posternormal1} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal2} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal1} text={"Ventajas Free"} background={"#1796E6"}/>
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={posternormal1} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal3} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal4} text={"Ventajas Free"} background={"#1796E6"}/>
                    
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={posternormal5} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal6} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal1} text={"Ventajas Free"} background={"#1796E6"}/>
                </div>
            </div>

           

            
            
        </section>
    )
}

export default VentajasNormales;