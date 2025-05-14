import React from "react";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";
import poster1 from "@imgs/Banner exclusivo.webp";
import poster2 from "@imgs/Descuentos merchandising.webp";
import poster3 from "@imgs/Obsequio cumpleaños.webp";
import poster4 from "@imgs/Puntos Dobles.webp";
import poster5 from "@imgs/Sesion coaching.webp";
import poster6 from "@imgs/Activo digital.webp";
import poster7 from "@imgs/Entradas a eventos.webp";
import poster8 from "@imgs/Información privilegiada.webp";
import poster9 from "@imgs/Partidas con creadores.webp";
import poster10 from "@imgs/Entradas a eventos.webp";
import poster11 from "@imgs/Partidas con creadores.jpg";
import poster12 from "@imgs/Información privilegiada.jpg";
import poster13 from "@imgs/Recompensas_Premium4.jpg";

const VentajasPremium = () => {
    return (
        <section id="ventajas_premium" className="p-[15px] flex flex-col justify-center items-center mt-[5vh] gap-[40px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold">Ventajas Premium</h1>
                <span className="text-[15px] font-semibold">
                    Disfruta de nuestras mejores funciones como miembro especial del club y aprovecha al máximo tu experiencia.
                </span>
            </div>

            {/* Large Premium Card */}
            <div className="hidden lg:flex">
                <VentajaGrande
                    link={poster13}
                    text={"Ventajas Premium"}
                    shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                    background={"gold"}
                    color="black"
                    isPremium={true}
                />
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center gap-[2rem]">
                <div className="hidden lg:flex gap-[40px]">
                    <VentajaGrande
                        link={poster10}
                        text={"Ventajas Premium"}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                    <VentajaPequeño
                        link={poster1}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        text={"Ventajas Premium"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                    <VentajaPequeño
                        link={poster2}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        text={"Ventajas Premium"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                </div>

                <div className="flex gap-[40px]">
                    <VentajaPequeño
                        link={poster3}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        text={"Ventajas Premium"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                    <VentajaGrande
                        link={poster11}
                        text={"Ventajas Premium"}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                    <VentajaPequeño
                        link={poster4}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        text={"Ventajas Premium"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                </div>

                <div className="flex gap-[40px]">
                    <VentajaGrande
                        link={poster12}
                        text={"Ventajas Premium"}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                    <VentajaPequeño
                        link={poster5}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        text={"Ventajas Premium"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                    <VentajaPequeño
                        link={poster6}
                        shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"}
                        text={"Ventajas Premium"}
                        background={"gold"}
                        color="black"
                        isPremium={true}
                    />
                </div>
            </div>

            <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
                <div className="flex flex-col gap-[40px]">
                    <VentajaMovil link={poster7} shadow={"none"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    <VentajaMovil link={poster8} shadow={"none"} background={"gold"} color="black" text={"Ventajas Premium"} />
                    <VentajaMovil link={poster9} shadow={"none"} background={"gold"} color="black" text={"Ventajas Premium"} />
                </div>
            </div>
        </section>
    );
};

export default VentajasPremium;