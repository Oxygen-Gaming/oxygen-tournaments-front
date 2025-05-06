import React, { useState, useRef } from "react";
const partidas = ['16 partidas','8 partidas','4 partidas','2 partidas','1 partida'];
const Ronda32 = () => {
    return (
        <div className="flex text-xs font-semibold mb-6 relative z-10 justify-center">
        {['RONDA DE 32', 'OCTAVOS DE FINAL', 'CUARTOS DE FINAL', 'SEMIFINALES', 'FINAL Y 3ER PUESTO'].map((round, i) => (
          <div key={`round-header-${i}`} className="w-1/5 px-1">
            <div className="py-2 text-center rounded flex flex-col">
              <p className="text-lg">
              {round}
              </p>

              <p className="text-blue-500 text-sm">
              {partidas[i]}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    )
}

export default Ronda32;