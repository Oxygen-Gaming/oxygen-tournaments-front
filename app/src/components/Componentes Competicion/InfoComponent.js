import React, { useState } from "react";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";

const Info = ({ selectedCard }) => {
  const [showGeneralInfo, setShowGeneralInfo] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showFormat, setShowFormat] = useState(false);
  const [showPrizes, setShowPrizes] = useState(false);

  // Determina la imagen según el nombre del juego
  const getImageForGame = (gameName) => {
    if (gameName === "League of Legends") return LeagueOfLegends;
    if (gameName === "Valorant") return Valorant;
    if (gameName === "Rocket League") return RocketLeague;
    return null;
  };

  return (
    <div className="bg-[#002f5f] text-white p-5 rounded-lg w-full max-w-[1300px] mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Información del Torneo</h2>

      {/* Información General */}
      <div className="mb-4">
        <button
          className={`w-full px-4 py-2 rounded-lg text-left transition-all duration-300 ${
            showGeneralInfo ? "bg-gradient-to-r from-green-500 to-green-700 text-white" : "bg-gradient-to-r from-gray-500 to-gray-700 text-gray-200"
          } hover:scale-105`}
          onClick={() => setShowGeneralInfo(!showGeneralInfo)}
        >
          Información General {showGeneralInfo ? "▲" : "▼"}
        </button>
        {showGeneralInfo && (
          <div className="mt-4 bg-gradient-to-r from-blue-900 to-blue-700 p-4 rounded-lg shadow-lg">
            <ul className="list-disc list-inside ml-5 text-gray-200">
              <li>Organizador: OxygenGaming</li>
              <li>Plataforma: PC</li>
              <li>Juego: {selectedCard[1] || "Desconocido"}</li>
              <li>Fecha de inicio: {selectedCard[3] || "Por definir"}</li>
              <li>Inscripciones: 09/03/2025 - 20/03/2025</li>
              <li>Formato: Eliminación directa</li>
              <li>Requisitos de participación: 16 años o más</li>
            </ul>
          </div>
        )}
      </div>

      {/* Reglamento */}
      <div className="mb-4">
        <button
          className={`w-full px-4 py-2 rounded-lg text-left transition-all duration-300 ${
            showRules ? "bg-gradient-to-r from-green-500 to-green-700 text-white" : "bg-gradient-to-r from-gray-500 to-gray-700 text-gray-200"
          } hover:scale-105`}
          onClick={() => setShowRules(!showRules)}
        >
          Reglamento {showRules ? "▲" : "▼"}
        </button>
        {showRules && (
          <div className="mt-4 bg-gradient-to-r from-blue-900 to-blue-700 p-4 rounded-lg shadow-lg">
            <ul className="list-disc list-inside ml-5 text-gray-200">
              <li>Juego limpio - No se permite el uso de hacks, trampas o cualquier forma de conducta antideportiva.</li>
              <li>Respeto entre jugadores - Cualquier tipo de comportamiento ofensivo, racista o agresivo resultará en descalificación.</li>
              <li>Puntualidad - Los jugadores deben estar presentes en sus partidas según el horario establecido.</li>
              <li>Desconexiones y problemas técnicos - Se dará un tiempo de gracia en caso de desconexiones involuntarias.</li>
              <li>Decisiones de los organizadores - Cualquier situación no contemplada será resuelta por el equipo de administración del torneo.</li>
            </ul>
          </div>
        )}
      </div>

      {/* Formato del Torneo */}
      <div className="mb-4">
        <button
          className={`w-full px-4 py-2 rounded-lg text-left transition-all duration-300 ${
            showFormat ? "bg-gradient-to-r from-green-500 to-green-700 text-white" : "bg-gradient-to-r from-gray-500 to-gray-700 text-gray-200"
          } hover:scale-105`}
          onClick={() => setShowFormat(!showFormat)}
        >
          Formato del Torneo {showFormat ? "▲" : "▼"}
        </button>
        {showFormat && (
          <div className="mt-4 bg-gradient-to-r from-blue-900 to-blue-700 p-4 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold mb-2 text-gray-200">Rondas Preliminares</h4>
          <ul className="list-disc list-inside ml-5 text-gray-200">
            <li>Todos los participantes competirán en rondas preliminares.</li>
            <li>Se jugará un sistema de puntos o eliminación simple según el juego.</li>
            <li>Los mejores jugadores o equipos avanzarán a la siguiente fase.</li>
          </ul>
          <h4 className="text-lg font-bold mt-4 mb-2 text-gray-200">Eliminación Directa</h4>
          <ul className="list-disc list-inside ml-5 text-gray-200">
            <li>Los clasificados se enfrentarán en un formato de eliminación directa.</li>
            <li>Cada partida será al mejor de [X] rondas/mapas según la mecánica del juego.</li>
            <li>Solo los más fuertes avanzarán a la Gran Final.</li>
          </ul>
          <h4 className="text-lg font-bold mt-4 mb-2 text-gray-200">Gran Final</h4>
          <ul className="list-disc list-inside ml-5 text-gray-200">
            <li>Los dos mejores jugadores o equipos se enfrentarán en un enfrentamiento definitivo.</li>
            <li>El formato será al mejor de [X] partidas para definir al campeón.</li>
            <li>Se transmitirá en vivo con comentaristas y cobertura en nuestras redes sociales.</li>
          </ul>
        </div>
        )}
      </div>

      {/* Premios */}
      <div className="mb-4">
        <button
          className={`w-full px-4 py-2 rounded-lg text-left transition-all duration-300 ${
            showPrizes ? "bg-gradient-to-r from-green-500 to-green-700 text-white" : "bg-gradient-to-r from-gray-500 to-gray-700 text-gray-200"
          } hover:scale-105`}
          onClick={() => setShowPrizes(!showPrizes)}
        >
          Premios {showPrizes ? "▲" : "▼"}
        </button>
        {showPrizes && (
          <div className="mt-4 bg-gradient-to-r from-blue-900 to-blue-700 p-4 rounded-lg shadow-lg">
            <div className="flex justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-5xl text-yellow-400">🥇</span>
                <p className="text-lg font-bold mt-2 text-gray-200">1er Lugar</p>
                <p className="text-md text-gray-200">$100</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl text-gray-400">🥈</span>
                <p className="text-lg font-bold mt-2 text-gray-200">2do Lugar</p>
                <p className="text-md text-gray-200">$50</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl text-orange-400">🥉</span>
                <p className="text-lg font-bold mt-2 text-gray-200">3er Lugar</p>
                <p className="text-md text-gray-200">$25</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
