import React from 'react';

const RankingTable = () => {
  return (
    <table className="ranking-table w-1/5 m-5 mr-10 border-collapse shadow-lg rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th className="bg-blue-500 text-white font-bold p-2.5">Posición</th>
          <th className="bg-blue-500 text-white font-bold p-2.5">Nombre</th>
          <th className="bg-blue-500 text-white font-bold p-2.5">Puntos</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white">1</td>
          <td className="p-2.5 border-b border-white">Juan Pérez</td>
          <td className="p-2.5 border-b border-white">1500</td>
        </tr>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white">2</td>
          <td className="p-2.5 border-b border-white">María López</td>
          <td className="p-2.5 border-b border-white">1400</td>
        </tr>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white">3</td>
          <td className="p-2.5 border-b border-white">Carlos García</td>
          <td className="p-2.5 border-b border-white">1300</td>
        </tr>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white">4</td>
          <td className="p-2.5 border-b border-white">Ana Martínez</td>
          <td className="p-2.5 border-b border-white">1200</td>
        </tr>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white">5</td>
          <td className="p-2.5 border-b border-white">Jose Juan</td>
          <td className="p-2.5 border-b border-white">1100</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RankingTable;
