import React, { useState } from "react";
import CuadrosBracket from "./CuadrosBracket";

const Bracket = ({ tournamentName, mirrored = false }) => {
  const positions = {

    dieciseisavos: [
      { top: '2rem', left: '10rem' }, { top: '5rem', left: '10rem' },
      { top: '10rem', left: '10rem' }, { top: '13rem', left: '10rem' },
      { top: '19rem', left: '10rem' }, { top: '22rem', left: '10rem' },
      { top: '27rem', left: '10rem' }, { top: '30rem', left: '10rem' },
      { top: '37rem', left: '60rem' }, { top: '40rem', left: '60rem' },
      { top: '45rem', left: '60rem' }, { top: '48rem', left: '60rem' },
      { top: '53rem', left: '60rem' }, { top: '56rem', left: '60rem' },
      { top: '61rem', left: '58rem' }, { top: '64rem', left: '60rem' }
    ],
    octavos: [
      { top: '9rem', left: '20rem' }, { top: '27rem', left: '20rem' },
      { top: '46rem', left: '20rem' }, { top: '64rem', left: '20rem' },
      { top: '84rem', left: '70rem' }, { top: '102rem', left: '70rem' },
      { top: '120rem', left: '70rem' }, { top: '138rem', left: '70rem' }
    ],
    cuartos: [
      { top: '24rem', left: '30rem' }, { top: '69rem', left: '30rem' },
      { top: '115rem', left: '80rem' }, { top: '159rem', left: '80rem' }
    ],
    semifinales: [
      { top: '53rem', left: '40rem' }, { top: '156rem', left: '90rem' }
    ],
    final: { top: '105rem', left: '50rem' },
    tercerPuesto: { top: '109rem', left: '50rem' }
  };

  return (
    <div
      className={`bg-gray-900 text-white p-5 rounded-lg w-full max-w-[1400px] mx-auto mt-8 ${
        mirrored ? "transform scale-x-[-1]" : ""
      }`}
    >
      <div className="relative mb-8 border-b border-blue-500 pb-3">
        <h1
          className={`text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 drop-shadow-md ${
            mirrored ? "transform scale-x-[-1]" : ""
          }`}
        >
          {tournamentName} - BRACKET
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          <CuadrosBracket positions={positions} />
        </div>
      </div>
    </div>
  );
};

export default Bracket;