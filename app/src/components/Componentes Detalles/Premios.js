import React from "react";

const Premios = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Premios</h2> {/* Centrado */}
      <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2 px-4 text-yellow-400 text-lg font-bold">🏆 1</th>
              <th className="py-2 px-4 text-gray-300">Por decidir</th>
              <th className="py-2 px-4 text-yellow-400 text-right">€10.90</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-4 text-gray-400 text-lg font-bold">🥈 2</td>
              <td className="py-2 px-4 text-gray-300">Por decidir</td>
              <td className="py-2 px-4 text-gray-400 text-right">€5.50</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-orange-400 text-lg font-bold">🥉 E3</td>
              <td className="py-2 px-4 text-gray-300">Por decidir</td>
              <td className="py-2 px-4 text-orange-400 text-right">€2.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Premios;
