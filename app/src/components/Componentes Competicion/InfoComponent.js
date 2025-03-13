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
  modalContent,
  closeInfoModal,
  handleCancelRegistration,
  handleInscriptionRedirect,
  inscriptionStatus,
}) => {
  const modalStyle = "bg-[#002f5f] text-white p-5 rounded-lg w-[85%] max-w-[1300px] h-[75%] overflow-hidden fixed";
  const modalContentStyle = "overflow-y-auto h-full pr-4";
  const panelStyle = "bg-[#003f7f] p-4 rounded-lg shadow-lg w-3/4";
  const infoTitleStyle = "text-4xl font-bold mb-4 text-center relative";
  const noZoomButtonStyle = "px-3 py-2 rounded-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900";
  const hoverEffect = "transition-transform transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 duration-500";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={modalStyle}>
        <div className={modalContentStyle}>
          <img
            src={
              selectedCard.includes("League of Legends")
                ? LeagueOfLegends
                : selectedCard.includes("Valorant")
                ? Valorant
                : RocketLeague
            }
            alt={selectedCard}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className={infoTitleStyle}>{modalContent}</h2>
          <div className="flex flex-col items-center w-full text-center">
            <h3 className="text-2xl font-semibold">Información General</h3>
            <div className={`${panelStyle} text-left mb-4`}>
              <ul className="list-disc list-inside ml-5">
                <li>Organizador: OxygenGaming</li>
                <li>Plataforma: PC</li>
                <li>Juego: Valorant</li>
                <li>Fecha de inicio: 21/03/2025</li>
                <li>Inscripciones: 09/03/2025 - 20/03/2025</li>
                <li>Formato: Eliminación directa</li>
                <li>Requisitos de participación: 16 años o más</li>
              </ul>
            </div>
            <h3 className="text-2xl font-semibold">Reglamento</h3>
            <div className={`${panelStyle} text-left mb-4`}>
              <ul className="list-disc list-inside ml-5">
                <li>Juego limpio - No se permite el uso de hacks, trampas o cualquier forma de conducta antideportiva.</li>
                <li>Respeto entre jugadores - Cualquier tipo de comportamiento ofensivo, racista o agresivo resultará en descalificación.</li>
                <li>Puntualidad - Los jugadores deben estar presentes en sus partidas según el horario establecido.</li>
                <li>Desconexiones y problemas técnicos - Se dará un tiempo de gracia en caso de desconexiones involuntarias.</li>
                <li>Decisiones de los organizadores - Cualquier situación no contemplada será resuelta por el equipo de administración del torneo.</li>
              </ul>
            </div>
            <h3 className="text-2xl font-semibold">Estado de inscripción</h3>
            <div className={`${panelStyle} text-center mb-4`}>
              <p className={inscriptionStatus[selectedCard] ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                {inscriptionStatus[selectedCard] ? "Inscrito" : "No inscrito"}
              </p>
              <p>
                ¡Prepárate para la batalla y demuestra que eres el mejor! Inscríbete ahora y sé parte de esta competencia
                épica. Para más información, síguenos en nuestras redes sociales y mantente al tanto de todas las
                novedades.
              </p>
              <button
                onClick={inscriptionStatus[selectedCard] ? handleCancelRegistration : handleInscriptionRedirect}
                className={`${noZoomButtonStyle} ${hoverEffect} w-1/4 mt-4`}
              >
                {inscriptionStatus[selectedCard] ? "Cancelar inscripción" : "Inscribirse"}
              </button>
            </div>
            <h3 className="text-2xl font-semibold">Formato del torneo</h3>
            <div className={`${panelStyle} text-left mb-4`}>
              <ul className="list-disc list-inside ml-5">
                <p className="font-bold">Rondas Preliminares:</p>
                <li>Todos los participantes competirán en rondas preliminares.</li>
                <li>Se jugará un sistema de puntos o eliminación simple según el juego.</li>
                <li>Los mejores jugadores o equipos avanzarán a la siguiente fase.</li>
                <p className="font-bold">Eliminación Directa:</p>
                <li>Los clasificados se enfrentarán en un formato de eliminación directa.</li>
                <li>Cada partida será al mejor de [X] rondas/mapas según la mecánica del juego.</li>
                <li>Solo los más fuertes avanzarán a la Gran Final.</li>
                <p className="font-bold">Gran Final:</p>
                <li>Los dos mejores jugadores o equipos se enfrentarán en un enfrentamiento definitivo.</li>
                <li>El formato será al mejor de [X] partidas para definir al campeón.</li>
                <li>Se transmitirá en vivo con comentaristas y cobertura en nuestras redes sociales.</li>
              </ul>
            </div>
            <h3 className="text-2xl font-semibold">Redes Sociales</h3>
            <div className={`${panelStyle} text-center mb-4`}>
              <p>
                ¡Bienvenidos al Torneo de OxygenGaming! Bienvenidos al torneo definitivo donde la habilidad, la estrategia
                y la adrenalina se combinan en una competencia sin igual. OxygenGaming te trae un evento épico donde los
                mejores jugadores se enfrentarán por la gloria, la competencia y, por supuesto, increíbles premios.
              </p>
              <div className="flex gap-2 justify-center">
                <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noreferrer">
                  <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noreferrer">
                  <img src={Instagram} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@oxg_esports?lang=es" target="_blank" rel="noreferrer">
                  <img src={TikTok} alt="TikTok" className="w-6 h-6" />
                </a>
                <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noreferrer">
                  <img src={Discord} alt="Discord" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-semibold">Premios</h3>
            <div className={`${panelStyle} text-center mb-4`}>
              <p>Los mejores jugadores no solo ganarán respeto y reconocimiento, sino también premios exclusivos:</p>
              <p className="text-4xl font-bold text-yellow-400">🥇 1er Lugar: 100$</p>
              <p className="text-3xl font-semibold text-gray-300">🥈 2do Lugar: 50$</p>
              <p className="text-2xl font-medium text-gray-500">🥉 3er Lugar: 25$</p>
            </div>
          </div>
          <button onClick={closeInfoModal} className={`mt-8 ${noZoomButtonStyle} mx-auto block`}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
