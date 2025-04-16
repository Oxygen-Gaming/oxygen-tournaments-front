import React from 'react';

const Maintenance = () => (
  <div className="min-h-screen flex flex-col justify-center items-center text-center bg-[#1AA9FF] p-6">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
      🛠️ Estamos en mantenimiento
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white opacity-80 max-w-4xl mx-auto mb-6">
      Ahora mismo estamos afinando OxyClub. En nada volvemos más fuertes que nunca.
    </p>
    <p className="text-md sm:text-lg md:text-xl text-white opacity-70 mt-4">
      Gracias por tu paciencia, ¡te esperamos pronto!
    </p>
  </div>
);

export default Maintenance;

