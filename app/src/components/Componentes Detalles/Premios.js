import React from "react";

const Premios = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Premios</h2> {/* Centrado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <span className="text-5xl text-yellow-400">🥇</span>
          <h3 className="text-xl font-bold mt-2">1er Lugar</h3>
          <p className="text-lg font-bold mt-2">Premio: $100</p>
        </div>
        <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <span className="text-5xl text-gray-400">🥈</span>
          <h3 className="text-xl font-bold mt-2">2do Lugar</h3>
          <p className="text-lg font-bold mt-2">Premio: $50</p>
        </div>
        <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <span className="text-5xl text-orange-400">🥉</span>
          <h3 className="text-xl font-bold mt-2">3er Lugar</h3>
          <p className="text-lg font-bold mt-2">Premio: $25</p>
        </div>
      </div>
    </div>
  );
};

export default Premios;
