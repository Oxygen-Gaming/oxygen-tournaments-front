import React from "react";

const Reglas = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Reglas</h2> {/* Centrado */}
      <ul className="list-disc list-inside text-gray-300">
        <li>Juego limpio: No se permite el uso de hacks o trampas.</li>
        <li>Respeto entre jugadores: Conducta ofensiva resultará en descalificación.</li>
        <li>Puntualidad: Los jugadores deben estar presentes según el horario.</li>
        <li>Las decisiones de los organizadores son finales.</li>
      </ul>
    </div>
  );
};

export default Reglas;
