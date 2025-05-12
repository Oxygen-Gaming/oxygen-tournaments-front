import React from "react";
const Logro = ({ titulo, variable }) => {


    return (
    <div className="w-full px-4 py-8 flex flex-col items-center">
      <h1 className="text-[30px] font-bold  mb-6">{titulo}</h1>
      <div className="overflow-x-auto w-full max-w-[1200px] shadow-lg rounded-2xl bg-white">
        <table className="min-w-full text-left  text-[white]">
          <thead className="bg-gradient-to-r from-[#18538a] to-[#1e90ff] text-white">
            <tr className="bg-gray-800 hover:bg-gray-700">
              <th className="px-4 py-3 text-[25px] font-bold text-center">Imagen</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Nombre</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Puntos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {variable.map((v, index) => (
              <tr
                key={index}
                className="bg-gray-900 even:bg-gray-800 hover:bg-gray-700"
              >
                <td className="px-4 py-3 flex items-center justify-center">
                  <img
                    src={v.imagen}
                    alt="logo"
                    className="w-12 h-12 object-contain rounded-md"
                  />
                </td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{v.juego}</td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{v.puntos}</td>

              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
      
    </div>
    

    );
}

export default Logro;
