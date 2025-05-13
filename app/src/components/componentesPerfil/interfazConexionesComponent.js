import React from "react";
import twitter from "@imgs/twitter.png"
import tiktok from "@imgs/tiktok.png"
import instagram from "@imgs/instagram.png"
import discord from "@imgs/discord.png"
import Red from "./redesConexionesComponent";

const Conexiones = () => {
    return (
        <div className="flex flex-col gap-[20px] w-full justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]  py-5">
                <Red nombre="X" estado="No Conectado" logo={twitter} boton="Conectar" fondo="black" relleno="7px" />
                <Red nombre="Discord" estado="No Conectado" logo={discord} boton="Conectar" fondo="none" relleno="0px" />
                <Red nombre="Instagram" estado="No Conectado" logo={instagram} boton="Conectar" fondo="none" relleno="0px"/>
                <Red nombre="TikTok" estado="No Conectado" logo={tiktok} boton="Conectar" fondo="black" relleno="7px"/>
            </div>
        </div>
        
    );
}

export default Conexiones;
