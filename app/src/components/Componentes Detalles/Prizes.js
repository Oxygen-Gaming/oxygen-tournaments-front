import React from "react";

const Prizes = () => {
  return (
    <div className="flex relative rounded flex-col items-start text-white p-6 h-72">
      <div className="relative w-full z-10 justify-center items-start">
        <h3 className="text-2xl font-extrabold mb-4 text-left">Premios</h3>
        <div className="flex flex-col items-start">
          <div className="flex w-full justify-center items-center">
            <p className="py-2 px-4 text-yellow-400 text-lg font-bold">1ero</p>
            <p className="py-2 px-4 text-white text-lg font-bold">Por decidir</p>
            <p className="py-2 px-4 text-yellow-400 text-lg font-bold">300€</p>
          </div>
          <div className="flex w-full justify-center items-center">
            <p className="py-2 px-4 text-gray-400 text-lg font-bold">2ndo</p>
            <p className="py-2 px-4 text-white text-lg font-bold">Por decidir</p>
            <p className="py-2 px-4 text-gray-400 text-lg font-bold">150€</p>
          </div>
          <div className="flex w-full justify-center items-center">
            <p className="py-2 px-4 text-orange-400 text-lg font-bold">3ero</p>
            <p className="py-2 px-4 text-white text-lg font-bold">Por decidir</p>
            <p className="py-2 px-4 text-orange-400 text-lg font-bold">50€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;