import React from "react";
import CuadrosBracket from "./CuadrosBracket";

const Bracket = ({ closeBracket, tournamentName }) => {
  const bracketModalStyle = "bg-gray-900 text-white p-5 rounded-lg w-[95%] max-w-[1600px] h-[90%] fixed overflow-auto scrollbar-hide"; // Added scrollbar-hide

  const positions = {
    dieciseisavos: [
      { top: '0rem' }, { top: '4rem' }, { top: '8rem' }, { top: '12rem' },
      { top: '16rem' }, { top: '20rem' }, { top: '24rem' }, { top: '28rem' },
      { top: '32rem' }, { top: '36rem' }, { top: '40rem' }, { top: '44rem' },
      { top: '48rem' }, { top: '52rem' }, { top: '56rem' }, { top: '60rem' }
    ],
    octavos: [
      { top: '6.5rem' }, { top: '22.5rem' }, { top: '39rem' }, { top: '55.3rem' },
      { top: '72rem' }, { top: '88.5rem' }, { top: '105rem' }, { top: '121rem' }
    ],
    cuartos: [
      { top: '18rem' }, { top: '58rem' }, { top: '96rem' }, { top: '136rem' }
    ],
    semifinales: [
      { top: '35rem' }, { top: '115rem' }
    ],
    final: { top: '78rem' },
    tercerPuesto: { top: '85rem' }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {/* Added z-50 */}
      <div className={bracketModalStyle}>
        <div className="relative z-10 mb-8 border-b border-blue-500 pb-3">
          <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 drop-shadow-md">
            {tournamentName} - BRACKET
          </h1>
          <button onClick={closeBracket} className="absolute top-2 right-2 text-white text-2xl font-bold">X</button>
        </div>
        <CuadrosBracket positions={positions} />
      </div>
    </div>
  );
};

export default Bracket;

