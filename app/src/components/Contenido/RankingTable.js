import React from 'react';

const RankingTable = () => {
  return (
    <table className="ranking-table w-full md:w-2/3 mx-auto mt-20 border-collapse shadow-lg rounded-lg overflow-hidden bg-black text-white text-base md:text-lg text-center">
      <thead>
        <tr>
          <th className="bg-gray-800 text-white font-bold p-4 text-center">Posición</th>
          <th className="bg-gray-800 text-white font-bold p-4 text-center">Nombre</th>
          <th className="bg-gray-800 text-white font-bold p-4 text-center">Puntos</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-900 even:bg-gray-800 hover:bg-gray-700">
          <td className="p-4 border-b border-gray-700 text-center">1</td>
          <td className="p-4 border-b border-gray-700 text-center">Alex Thunder</td>
          <td className="p-4 border-b border-gray-700 text-center">1500</td>
        </tr>
        <tr className="bg-gray-900 even:bg-gray-800 hover:bg-gray-700">
          <td className="p-4 border-b border-gray-700 text-center">2</td>
          <td className="p-4 border-b border-gray-700 text-center">Sophia Blaze</td>
          <td className="p-4 border-b border-gray-700 text-center">1400</td>
        </tr>
        <tr className="bg-gray-900 even:bg-gray-800 hover:bg-gray-700">
          <td className="p-4 border-b border-gray-700 text-center">3</td>
          <td className="p-4 border-b border-gray-700 text-center">Liam Shadow</td>
          <td className="p-4 border-b border-gray-700 text-center">1300</td>
        </tr>
        <tr className="bg-gray-900 even:bg-gray-800 hover:bg-gray-700">
          <td className="p-4 border-b border-gray-700 text-center">4</td>
          <td className="p-4 border-b border-gray-700 text-center">Emma Frost</td>
          <td className="p-4 border-b border-gray-700 text-center">1200</td>
        </tr>
        <tr className="bg-gray-900 even:bg-gray-800 hover:bg-gray-700">
          <td className="p-4 border-b border-gray-700 text-center">5</td>
          <td className="p-4 border-b border-gray-700 text-center">Noah Phoenix</td>
          <td className="p-4 border-b border-gray-700 text-center">1100</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RankingTable;