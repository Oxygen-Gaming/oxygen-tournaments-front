import React from 'react';

const RankingTable = () => {
  return (
    <table className="ranking-table w-full md:w-1/3 m-5 mx-auto border-collapse shadow-lg rounded-lg overflow-hidden sm:w-2/3 text-xs md:text-base text-center">
      <thead>
        <tr>
          <th className="bg-blue-500 text-white font-bold p-2.5 text-center">Posición</th>
          <th className="bg-blue-500 text-white font-bold p-2.5 text-center">Nombre</th>
          <th className="bg-blue-500 text-white font-bold p-2.5 text-center">Puntos</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white text-center">1</td>
          <td className="p-2.5 border-b border-white text-center">Alex Thunder</td>
          <td className="p-2.5 border-b border-white text-center">1500</td>
        </tr>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white text-center">2</td>
          <td className="p-2.5 border-b border-white text-center">Sophia Blaze</td>
          <td className="p-2.5 border-b border-white text-center">1400</td>
        </tr>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white text-center">3</td>
          <td className="p-2.5 border-b border-white text-center">Liam Shadow</td>
          <td className="p-2.5 border-b border-white text-center">1300</td>
        </tr>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white text-center">4</td>
          <td className="p-2.5 border-b border-white text-center">Emma Frost</td>
          <td className="p-2.5 border-b border-white text-center">1200</td>
        </tr>
        <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
          <td className="p-2.5 border-b border-white text-center">5</td>
          <td className="p-2.5 border-b border-white text-center">Noah Phoenix</td>
          <td className="p-2.5 border-b border-white text-center">1100</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RankingTable;
