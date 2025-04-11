import React, { useState } from "react";
import CuadrosBracket from "./CuadrosBracket";

const Bracket = ({ tournamentName, mirrored = false }) => {
  const positions = {

    dieciseisavos: [
      { top: '2rem', left: '10rem' }, { top: '5rem', left: '10rem' },
      { top: '10rem', left: '10rem' }, { top: '13rem', left: '10rem' },
      { top: '19rem', left: '10rem' }, { top: '23rem', left: '10rem' },
      { top: '27rem', left: '10rem' }, { top: '31rem', left: '10rem' },
      { top: '37rem', left: '60rem' }, { top: '40rem', left: '60rem' },
      { top: '46rem', left: '60rem' }, { top: '49rem', left: '60rem' },
      { top: '54rem', left: '60rem' }, { top: '58rem', left: '60rem' },
      { top: '63rem', left: '60rem' }, { top: '67rem', left: '60rem' }
    ],
    octavos: [
      { top: '6.5rem', left: '20rem' }, { top: '22.5rem', left: '20rem' },
      { top: '39rem', left: '20rem' }, { top: '55.3rem', left: '20rem' },
      { top: '72rem', left: '70rem' }, { top: '88.5rem', left: '70rem' },
      { top: '105rem', left: '70rem' }, { top: '121rem', left: '70rem' }
    ],
    cuartos: [
      { top: '20rem', left: '30rem' }, { top: '58rem', left: '30rem' },
      { top: '97rem', left: '80rem' }, { top: '135rem', left: '80rem' }
    ],
    semifinales: [
      { top: '43rem', left: '40rem' }, { top: '130rem', left: '90rem' }
    ],
    final: { top: '86rem', left: '50rem' },
    tercerPuesto: { top: '90rem', left: '50rem' }
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