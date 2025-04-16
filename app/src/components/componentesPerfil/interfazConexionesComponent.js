import React from "react";
import twitter from "@imgs/twitter.png"
import tiktok from "@imgs/tiktok.png"
import instagram from "@imgs/instagram.png"
import discord from "@imgs/discord.png"
import Red from "./redesConexionesComponent";

const Conexiones = () => {
    return (
        <div className="flex flex-col gap-[20px] w-full justify-center items-center">
            <h1 className="text-[35px]">Conexiones</h1>
            <div className="flex flex-wrap lg:flex-row xl:flex-row w-full justify-center items-center gap-[30px] md:justify-center lg:pl-[100px] lg:pr-[100px] py-5">
                <Red nombre="X" estado="No Conectado" logo={twitter} boton="Conectar" fondo="black" relleno="7px" />
                <Red nombre="Discord" estado="No Conectado" logo={discord} boton="Conectar" fondo="none" relleno="0px" />
                <Red nombre="Instagram" estado="No Conectado" logo={instagram} boton="Conectar" fondo="none" relleno="0px"/>
                <Red nombre="TikTok" estado="No Conectado" logo={tiktok} boton="Conectar" fondo="black" relleno="7px"/>
            </div>
        </div>
        
    );
}

export default Conexiones;
