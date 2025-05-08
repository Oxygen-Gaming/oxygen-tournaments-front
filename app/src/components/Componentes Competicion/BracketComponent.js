import React, { useState } from "react";
import CuadrosBracket from "./CuadrosBracket";

const Bracket = ({ tournamentName, mirrored = false }) => {
  const positions = {

    dieciseisavos: [
      { top: '5rem', left: '10rem' }, { top: '9rem', left: '10rem' },
      { top: '14.5rem', left: '10rem' }, { top: '18rem', left: '10rem' },
      { top: '22rem', left: '10rem' }, { top: '26rem', left: '10rem' },
      { top: '30.5rem', left: '10rem' }, { top: '34rem', left: '10rem' },
      { top: '44rem', left: '60rem' }, { top: '47.5rem', left: '60rem' },
      { top: '53.5rem', left: '60rem' }, { top: '57rem', left: '60rem' },
      { top: '60.5rem', left: '60rem' }, { top: '64rem', left: '60rem' },
      { top: '69.5rem', left: '58rem' }, { top: '73rem', left: '60rem' }
    ],
    octavos: [
      { top: '12rem', left: '20rem' }, { top: '31rem', left: '20rem' },
      { top: '48rem', left: '20rem' }, { top: '66rem', left: '20rem' },
      { top: '89rem', left: '70rem' }, { top: '108rem', left: '70rem' },
      { top: '124.5rem', left: '70rem' }, { top: '143rem', left: '70rem' }
    ],
    cuartos: [
      { top: '24rem', left: '30rem' }, { top: '69rem', left: '30rem' },
      { top: '120rem', left: '80rem' }, { top: '165rem', left: '80rem' }
    ],
    semifinales: [
      { top: '53rem', left: '40rem' }, { top: '158.5rem', left: '90rem' }
    ],
    final: { top: '105rem', left: '50rem' },
    tercerPuesto: { top: '109rem', left: '50rem' }
  };

  return (
    <div
      className={`bg-[#1c1c1c] text-white p-5 rounded-lg w-full max-w-[1400px] mx-auto mt-8  ${
        mirrored ? "transform scale-x-[-1]" : ""
      }`}
    >
      <div className="relative mb-8 border-b border-white pb-3">
        <h1
          className={`text-2xl text-white ${
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