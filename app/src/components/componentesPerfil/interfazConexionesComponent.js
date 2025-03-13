import React from "react";
import twitter from "../../img/twitter.png"
import tiktok from "../../img/tiktok.png"
import instagram from "../../img/instagram.png"
import discord from "../../img/discord.png"
import Red from "./redesConexionesComponent";

const Conexiones = () => {
    return (
        <div className="flex flex-col gap-[20px] w-full justify-center items-center">
            <h1 className="text-[35px]">Conexiones</h1>
            <div className="flex flex-wrap lg:flex-row w-full justify-center items-center gap-[30px] md:justify-center lg:justify-between lg:pl-[100px] lg:pr-[100px]">
                <Red nombre="X" estado="No Conectado" logo={twitter} boton="Conectar" />
                <Red nombre="Discord" estado="No Conectado" logo={discord} boton="Conectar" />
                <Red nombre="Instagram" estado="No Conectado" logo={instagram} boton="Conectar" />
                <Red nombre="TikTok" estado="No Conectado" logo={tiktok} boton="Conectar" />
            </div>
        </div>
        
    );
}

export default Conexiones;
