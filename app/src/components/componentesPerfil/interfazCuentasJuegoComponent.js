import React, { useState, useEffect } from "react";
import oxygen from "@imgs/Logo_OxygenGaming2.png";

const CuentasJuego = () => {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    setCuentas([
      {
        imagen: oxygen,
        juego: "EA FC25",
        nickname: "Chusneo",
        region: "Europa",
      },
      {
        imagen: oxygen,
        juego: "EA FC25",
        nickname: "Chusneo",
        region: "Europa",
      },
    ]);
  }, []);

  return (
    <div className="w-full px-4 py-8 flex flex-col items-center">
      <h1 className="text-[30px] md:text-[40px] font-semibold mb-6 text-center">
        Cuentas de juego
      </h1>

      <div className="overflow-x-auto w-full max-w-[1200px] shadow-lg rounded-2xl bg-white">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gradient-to-r from-[#18538a] to-[#1e90ff] text-white">
            <tr>
              <th className="px-4 py-3 text-sm sm:text-base font-medium">Logo</th>
              <th className="px-4 py-3 text-sm sm:text-base font-medium">Juego</th>
              <th className="px-4 py-3 text-sm sm:text-base font-medium">Nickname</th>
              <th className="px-4 py-3 text-sm sm:text-base font-medium">Región</th>
              <th className="px-4 py-3 text-sm sm:text-base font-medium text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cuentas.map((cuenta, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 transition-colors duration-200"
              >
                <td className="px-4 py-3">
                  <img
                    src={cuenta.imagen}
                    alt="logo"
                    className="w-12 h-12 object-contain rounded-md"
                  />
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-blue-600 font-semibold">{cuenta.juego}</td>
                <td className="px-4 py-3 text-sm sm:text-base text-blue-600 font-semibold">{cuenta.nickname}</td>
                <td className="px-4 py-3 text-sm sm:text-base text-blue-600 font-semibold">{cuenta.region}</td>
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

