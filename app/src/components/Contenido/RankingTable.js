import React from 'react';

const RankingTable = () => {
  return (
    <div className="ranking-section w-full md:w-2/3 mx-auto mt-20 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-6">Tabla de Clasificación</h2>
      
      {/* Motivational Message */}
      <p className="text-white text-lg mt-6">
        ¡Mira los videos destacados y acumula puntos para subir en la tabla de clasificación! 
        Participa activamente y demuestra que eres el mejor en Oxygen Gaming.
      </p>
      <br></br>

      {/* Table */}
      <table className="ranking-table w-full border-collapse shadow-lg rounded-lg overflow-hidden bg-black text-white text-base md:text-lg text-center">
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

      {/* Footer Spacing */}
      <div className="mt-20"></div>
    </div>
  );
};

export default RankingTable;