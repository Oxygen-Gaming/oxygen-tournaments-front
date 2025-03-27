import React from "react";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import Twitter from "@imgs/twitter.png";
import Instagram from "@imgs/instagram.png";
import TikTok from "@imgs/tiktok.png";
import Discord from "@imgs/discord.png";

const Info = ({
  selectedCard,
  closeInfoModal,
  handleCancelRegistration,
  handleInscriptionRedirect,
  inscriptionStatus,
}) => {
  const modalStyle = "bg-[#002f5f] text-white p-5 rounded-lg w-[85%] max-w-[1300px] h-[75%] overflow-hidden fixed";
  const modalContentStyle = "overflow-y-auto h-full pr-4";
  const panelStyle = "bg-[#003f7f] p-4 rounded-lg shadow-lg w-3/4";
  const infoTitleStyle = "text-4xl font-bold mb-4 text-center relative";
  const noZoomButtonStyle = "px-3 py-2 rounded-lg border-2 border-white text-white bg-transparent";
  const disabledButtonStyle = "opacity-50 cursor-not-allowed";
  const hoverEffect = "transition-transform transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 duration-500";

  // Ensure selectedCard is valid before accessing its properties
  if (!selectedCard || !Array.isArray(selectedCard)) {
    return null; // Render nothing if selectedCard is invalid
  }

  return (
    <div id="info-section" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={modalStyle}>
        <div className={modalContentStyle}>
          <img
            src={
              selectedCard[1]?.includes("League of Legends")
                ? LeagueOfLegends
                : selectedCard[1]?.includes("Valorant")
                ? Valorant
                : RocketLeague
            }
            alt={selectedCard[1] || "Torneo"}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className={infoTitleStyle}>{selectedCard[2] || "Información del Torneo"}</h2>
          <div className="flex flex-col items-center w-full text-center">
            <div className={`${panelStyle} text-left mb-4`}>
              <h3 className="text-2xl font-semibold mb-4 text-center border-b-2 border-gray-400 pb-2">Información General</h3>
              <ul className="list-disc list-inside ml-5">
                <li>Organizador: OxygenGaming</li>
                <li>Plataforma: PC</li>
                <li>Juego: {selectedCard[1] || "Desconocido"}</li>
                <li>Fecha de inicio: {selectedCard[3] || "Por definir"}</li>
                <li>Inscripciones: 09/03/2025 - 20/03/2025</li>
                <li>Formato: Eliminación directa</li>
                <li>Requisitos de participación: 16 años o más</li>
              </ul>
            </div>
            <div className={`${panelStyle} text-left mb-4`}>
              <h3 className="text-2xl font-semibold mb-4 text-center border-b-2 border-gray-400 pb-2">Reglamento</h3>
              <ul className="list-disc list-inside ml-5">
                <li>Juego limpio - No se permite el uso de hacks, trampas o cualquier forma de conducta antideportiva.</li>
                <li>Respeto entre jugadores - Cualquier tipo de comportamiento ofensivo, racista o agresivo resultará en descalificación.</li>
                <li>Puntualidad - Los jugadores deben estar presentes en sus partidas según el horario establecido.</li>
                <li>Desconexiones y problemas técnicos - Se dará un tiempo de gracia en caso de desconexiones involuntarias.</li>
                <li>Decisiones de los organizadores - Cualquier situación no contemplada será resuelta por el equipo de administración del torneo.</li>
              </ul>
            </div>
            <div className={`${panelStyle} text-center mb-4`}>
              <h3 className="text-2xl font-semibold mb-4 text-center border-b-2 border-gray-400 pb-2">Estado de inscripción</h3>
              <p
                className={`text-md font-bold px-4 py-2 rounded w-fit mx-auto mb-4 ${
                  inscriptionStatus[selectedCard[0]]
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {inscriptionStatus[selectedCard[0]] ? "Inscrito" : "No inscrito"}
              </p>
              <p>
                ¡Prepárate para la batalla y demuestra que eres el mejor! Inscríbete ahora y sé parte de esta competencia
                épica. Para más información, síguenos en nuestras redes sociales y mantente al tanto de todas las
                novedades.
              </p>
              <button
                onClick={inscriptionStatus[selectedCard[0]] ? handleCancelRegistration : handleInscriptionRedirect}
                className={`${noZoomButtonStyle} ${selectedCard[4] !== 'upcoming' ? disabledButtonStyle : hoverEffect} w-1/4 mt-4`}
                disabled={selectedCard[4] !== 'upcoming'}
              >
                {inscriptionStatus[selectedCard[0]] ? "Cancelar inscripción" : "Inscribirse"}
              </button>
            </div>
            <div className={`${panelStyle} text-left mb-4`}>
              <h3 className="text-2xl font-semibold mb-4 text-center border-b-2 border-gray-400 pb-2">Formato del torneo</h3>
              <div className="mb-4 p-4 bg-blue-800 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-white mb-2">Rondas Preliminares</h4>
                <ul className="list-disc list-inside ml-5">
                  <li>Todos los participantes competirán en rondas preliminares.</li>
                  <li>Se jugará un sistema de puntos o eliminación simple según el juego.</li>
                  <li>Los mejores jugadores o equipos avanzarán a la siguiente fase.</li>
                </ul>
              </div>
              <div className="mb-4 p-4 bg-blue-800 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-white mb-2">Eliminación Directa</h4>
                <ul className="list-disc list-inside ml-5">
                  <li>Los clasificados se enfrentarán en un formato de eliminación directa.</li>
                  <li>Cada partida será al mejor de [X] rondas/mapas según la mecánica del juego.</li>
                  <li>Solo los más fuertes avanzarán a la Gran Final.</li>
                </ul>
              </div>
              <div className="mb-4 p-4 bg-blue-800 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-white mb-2">Gran Final</h4>
                <ul className="list-disc list-inside ml-5">
                  <li>Los dos mejores jugadores o equipos se enfrentarán en un enfrentamiento definitivo.</li>
                  <li>El formato será al mejor de [X] partidas para definir al campeón.</li>
                  <li>Se transmitirá en vivo con comentaristas y cobertura en nuestras redes sociales.</li>
                </ul>
              </div>
            </div>
            <div className={`${panelStyle} text-center mb-4`}>
              <h3 className="text-2xl font-semibold mb-4 text-center border-b-2 border-gray-400 pb-2">Redes Sociales</h3>
              <p>
                ¡Síguenos en nuestras redes sociales para mantenerte al tanto de todas las novedades y actualizaciones del torneo!
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-transform transform hover:scale-110">
                  <i className="fab fa-twitter text-3xl"></i>
                </a>
                <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noreferrer" className="text-white hover:text-pink-500 transition-transform transform hover:scale-110">
                  <i className="fab fa-instagram text-3xl"></i>
                </a>
                <a href="https://www.tiktok.com/@oxg_esports?lang=es" target="_blank" rel="noreferrer" className="text-white hover:text-black transition-transform transform hover:scale-110">
                  <i className="fab fa-tiktok text-3xl"></i>
                </a>
                <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-500 transition-transform transform hover:scale-110">
                  <i className="fab fa-discord text-3xl"></i>
                </a>
              </div>
            </div>
            <div className={`${panelStyle} text-center mb-4`}>
              <h3 className="text-2xl font-semibold mb-4 text-center border-b-2 border-gray-400 pb-2">Premios</h3>
              <p className="mb-4">Los mejores jugadores no solo ganarán respeto y reconocimiento, sino también premios exclusivos:</p>
              <div className="flex justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-5xl text-yellow-400">🥇</span>
                  <p className="text-lg font-bold mt-2">1er Lugar</p>
                  <p className="text-md">$100</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl text-gray-400">🥈</span>
                  <p className="text-lg font-bold mt-2">2do Lugar</p>
                  <p className="text-md">$50</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl text-orange-400">🥉</span>
                  <p className="text-lg font-bold mt-2">3er Lugar</p>
                  <p className="text-md">$25</p>
                </div>
              </div>
            </div>
          </div>
          <button onClick={closeInfoModal} className={`mt-8 ${noZoomButtonStyle} ${hoverEffect} mx-auto block`}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
