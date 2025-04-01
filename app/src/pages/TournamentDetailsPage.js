import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";

const TournamentDetailsPage = () => {
  const location = useLocation();
  const selectedCard = location.state?.selectedCard;

  const [activeTab, setActiveTab] = useState("formato");

  const getImageForGame = (gameName) => {
    if (gameName === "League of Legends") return LeagueOfLegends;
    if (gameName === "Valorant") return Valorant;
    if (gameName === "Rocket League") return RocketLeague;
    return null;
  };

  if (!selectedCard) {
    return (
      <div className="bg-[#003366] text-white h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">No se encontró información del torneo.</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#003366] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      <Header />
      <div className="container mx-auto p-5">
        <div className="bg-[#002f5f] text-white rounded-lg w-full max-w-[1300px] mx-auto">
          {/* Encabezado del torneo */}
          <div
            className="relative bg-cover bg-center rounded-t-lg h-[300px] flex items-center justify-center"
            style={{
              backgroundImage: `url(${getImageForGame(selectedCard[1])})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl font-extrabold">{selectedCard[2]}</h1>
              <p className="text-lg mt-2">En alrededor de 2 horas • {selectedCard[3]}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Unirse al torneo
              </button>
            </div>
          </div>

          {/* Pestañas */}
          <div className="flex justify-center mt-6 border-b border-gray-600">
            <button
              className={`px-4 py-2 ${activeTab === "formato" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("formato")}
            >
              Formato
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "jugadores" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("jugadores")}
            >
              Jugadores
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "premios" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("premios")}
            >
              Premios
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "reglas" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("reglas")}
            >
              Reglas
            </button>
          </div>

          {/* Contenido de las pestañas */}
          <div className="p-6">
            {activeTab === "formato" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Formato</h2>
                <p className="text-gray-300">
                  El torneo se llevará a cabo en un formato de eliminación directa. Cada partida será al mejor de 3 rondas, y los equipos ganadores avanzarán a la siguiente fase. 
                  En caso de empate, se jugará una ronda adicional para determinar al ganador. La Gran Final será al mejor de 5 rondas.
                </p>
              </div>
            )}
            {activeTab === "jugadores" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Jugadores</h2>
                <p className="text-gray-300">
                  Hasta el momento, 3 jugadores se han registrado para este torneo. Se espera la participación de jugadores de alto nivel, incluyendo equipos profesionales y amateurs.
                  ¡Aprovecha esta oportunidad para demostrar tus habilidades y competir contra los mejores!
                </p>
              </div>
            )}
            {activeTab === "premios" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Premios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className="text-5xl text-yellow-400">🥇</span>
                    <h3 className="text-xl font-bold mt-2">1er Lugar</h3>
                    <p className="text-lg mt-2">Equipo: Por decidir</p>
                    <p className="text-lg font-bold mt-2">Premio: $100</p>
                  </div>
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className="text-5xl text-gray-400">🥈</span>
                    <h3 className="text-xl font-bold mt-2">2do Lugar</h3>
                    <p className="text-lg mt-2">Equipo: Por decidir</p>
                    <p className="text-lg font-bold mt-2">Premio: $50</p>
                  </div>
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className="text-5xl text-orange-400">🥉</span>
                    <h3 className="text-xl font-bold mt-2">3er Lugar</h3>
                    <p className="text-lg mt-2">Equipo: Por decidir</p>
                    <p className="text-lg font-bold mt-2">Premio: $25</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "reglas" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Reglas</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Todos los participantes deben respetar las reglas del torneo y las decisiones de los organizadores.</li>
                  <li>Está prohibido el uso de hacks, trampas o cualquier software que otorgue ventajas injustas.</li>
                  <li>Los jugadores deben presentarse puntualmente a sus partidas según el horario establecido.</li>
                  <li>El comportamiento antideportivo, como insultos o acoso, resultará en la descalificación inmediata.</li>
                  <li>En caso de desconexiones, se otorgará un tiempo de gracia de 5 minutos para reconectar.</li>
                  <li>Las decisiones de los árbitros y organizadores son finales y no están sujetas a apelación.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TournamentDetailsPage;
