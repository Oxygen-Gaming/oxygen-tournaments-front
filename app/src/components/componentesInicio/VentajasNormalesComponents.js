import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";
import poster1 from "@imgs/poster1.webp"
import poster2 from "@imgs/poster2.webp"
import posternormal1 from "@imgs/poster1.webp"
import posternormal2 from "@imgs/poster2.webp"
import posternormal3 from "@imgs/poster3.webp"
import posternormal4 from "@imgs/poster4.webp"
import posternormal5 from "@imgs/poster5.webp"
import posternormal6 from "@imgs/poster6.webp"

const VentajasNormales = () => {
    return (
        <section className=" p-[15px] flex flex-col justify-center items-center mt-[5vh] gap-[5vh] overflow-hidden">
            <div className=" flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold ">Ventajas Free</h1>
                <span className="text-[18px] font-semibold">Disfruta de nuestras funciones esenciales sin costo y aprovecha al máximo tu experiencia.</span>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex gap-[40px]">
                    <VentajaPequeño link={posternormal1} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaPequeño link={posternormal2} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaGrande link={poster1} text={"Ventajas Free"} background={" #1796E6"} color="white"/>
                </div>

                <div className="flex gap-[40px]">
                    <VentajaGrande link={poster1} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaPequeño link={posternormal3} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaPequeño link={posternormal4} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    
                </div>

                <div className="flex gap-[40px]">
                    <VentajaPequeño link={posternormal5} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaPequeño link={posternormal6} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                    <VentajaGrande link={poster1} text={"Ventajas Free"} background={"#1796E6"} color="white"/>
                </div>
            </div>

            <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={posternormal1} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal2} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={poster1} text={"Ventajas Free"} background={"#1796E6"}/>
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster1} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal3} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal4} text={"Ventajas Free"} background={"#1796E6"}/>
                    
                </div>

                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={posternormal5} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={posternormal6} text={"Ventajas Free"} background={"#1796E6"}/>
                    <VentajaMovil link={poster1} text={"Ventajas Free"} background={"#1796E6"}/>
                </div>
            </div>

           

            
            
        </section>
    )
}

export default VentajasNormales;