import React, { useState, useEffect } from "react";
import oxygen from "@imgs/Logo_OxygenGaming2.png";

const CuentasJuego = () => {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    setCuentas([
      {
        imagen: oxygen,
        juego: "League of Legend",
        nickname: "Chusneo",
        region: "Europa",
      },
      {
        imagen: oxygen,
        juego: "League of Legend",
        nickname: "Kaique Kp",
        region: "Asia",
      },
      {
        imagen: oxygen,
        juego: "League of Legend",
        nickname: "Pekka",
        region: "América Latina",
      },
      {
        imagen: oxygen,
        juego: "Valorant",
        nickname: "Matalentajas",
        region: "África",
      },
      {
        imagen: oxygen,
        juego: "Valorant",
        nickname: "Skullraicer",
        region: "Europa",
      },
      {
        imagen: oxygen,
        juego: "Valorant",
        nickname: "TheBlackHatDAW",
        region: "Oceania",
      }
    ]);
  }, []);

  return (
    <div className="w-full px-4 py-8 flex flex-col items-center">
      <div className="overflow-x-auto w-full max-w-[1200px] shadow-lg rounded-2xl bg-white">
        <table className="min-w-full text-left border-collapse text-[white]">
          <thead className="bg-gradient-to-r from-[#18538a] to-[#1e90ff] text-white">
            <tr className="bg-gray-800 hover:bg-gray-700">

              <th className="px-4 py-3 text-[25px] font-bold text-center">Logo</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Juego</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Nickname</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Región</th>

              <th className="px-4 py-3 text-[25px] font-bold text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cuentas.map((cuenta, index) => (
              <tr
                key={index}
                className="bg-gray-900 even:bg-gray-800 hover:bg-gray-700"
              >
                <td className="px-4 py-3 flex flex-row items-center justify-center">
                  <img
                    src={cuenta.imagen}
                    alt="logo"
                    className="w-12 h-12 object-contain rounded-md"
                  />
                </td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{cuenta.juego}</td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{cuenta.nickname}</td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{cuenta.region}</td>

                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-3 justify-center items-center">
                    <button
                      className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-teal-600 transition"
                      title="Editar"
                    >
                      <i className="fa-solid fa-pen-to-square text-sm"></i>
                    </button>
                    <button
                      className="w-10 h-10 flex items-center justify-center bg-[#c41010] text-white rounded-full hover:bg-red-700 transition"
                      title="Eliminar"
                    >
                      <i className="fa-solid fa-trash text-sm"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CuentasJuego;

