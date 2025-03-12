import React from "react";
import oxygen from "../img/Logo_OxygenGaming2.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import tiktok from "../img/tiktok.png";
import discord from "../img/discord.png";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900">
        <div
          id="contenido_footer"
          className="flex justify-between items-start gap-4 p-10 max-w-[1200px] mx-auto"
        >
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">
              OXYGENGAMING
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="https://oxygengaming.es/sobre-nosotros/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                SOBRE NOSOTROS
              </a>
              <a
                href="https://oxygengaming.es/patrocinadores/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                PATROCINADORES
              </a>
              <a
                href="https://oxygengaming.es/noticias/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                NOTICIAS
              </a>
              <a
                href="https://oxygengaming.es/tienda/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                TIENDA
              </a>
              <a
                href="https://oxygengaming.es/oxy-club/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                OXYCLUB
              </a>
              <a
                href="https://oxygengaming.es/creadores/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                CREADORES
              </a>
              <a
                href="https://oxygengaming.es/contacto/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                CONTACTO
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">
              EQUIPOS
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="https://oxygengaming.es/equipos/#leagueoflegends"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                LEAGUE OF LEGENDS
              </a>
              <a
                href="https://oxygengaming.es/equipos/#valorant"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                VALORANT
              </a>
              <a
                href="https://oxygengaming.es/creadores/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                CREADORES
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">
              Políticas
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="https://oxygengaming.es/equipos/#leagueoflegends"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                AVISO LEGAL
              </a>
              <a
                href="https://oxygengaming.es/equipos/#valorant"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                PRIVACIDAD
              </a>
              <a
                href="https://oxygengaming.es/creadores/"
                className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400"
              >
                COOKIES
              </a>
            </div>
          </div>

          <div
            id="redes_sociales"
            className="flex flex-col items-center text-center flex-1 min-w-[250px]"
          >
            <a href="https://oxygengaming.es/">
              <img
                id="logo_footer"
                src={oxygen}
                alt="Oxygen Gaming Logo"
                className="w-[80%] max-w-[200px] mb-4"
              />
            </a>
            <div className="flex gap-4 mt-2">

              <a
                href="https://twitter.com/GamingOxygen"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-full h-full rounded-full"
                />
              </a>
              <a
                href="https://instagram.com/GamingOxygen"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-full h-full rounded-full"
                />
              </a>
              <a
                href="https://www.tiktok.com/@oxg_esports?lang=es"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all"
              >
                <img
                  src={tiktok}
                  alt="TikTok"
                  className="w-full h-full rounded-full"
                />
              </a>
              <a
                href="https://discord.gg/Udsstfpeze"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all"
              >
                <img
                  src={discord}
                  alt="Discord"
                  className="w-full h-full rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
export default Footer;