import React from "react";

const Reglas = ({ gameName }) => {
  // Determine format based on the game
  const format = gameName === "Valorant" || gameName === "League of Legends"
    ? "5vs5"
    : gameName === "Rocket League"
    ? "1vs1 y 3vs3"
    : "Formato desconocido";

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Reglas</h2> {/* Centrado */}
      <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">Formato</h3>
        <p className="text-gray-300 mb-4">{format}</p> {/* Display format */}
        <ul className="list-disc list-inside text-gray-300">
          <li>Juego limpio: No se permite el uso de hacks o trampas.</li>
          <li>Respeto entre jugadores: Conducta ofensiva resultará en descalificación.</li>
          <li>Puntualidad: Los jugadores deben estar presentes según el horario.</li>
          <li>Las decisiones de los organizadores son finales.</li>
        </ul>
      </div>
    </div>
  );
};

export default Reglas;
