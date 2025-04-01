import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import Bracket from "@components/Componentes Competicion/BracketComponent";

const TournamentDetailsPage = () => {
  const location = useLocation();
  const selectedCard = location.state?.selectedCard;

  const [activeTab, setActiveTab] = useState("resumen");

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
              className={`px-4 py-2 ${activeTab === "resumen" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("resumen")}
            >
              Resumen
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "bracket" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("bracket")}
            >
              Bracket
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "partidas" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("partidas")}
            >
              Partidas
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "inscritos" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"}`}
              onClick={() => setActiveTab("inscritos")}
            >
              Inscritos
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
            {activeTab === "resumen" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Resumen</h2>
                <p className="text-gray-300">
                  Este torneo reúne a los mejores jugadores de {selectedCard[1]} para competir por premios increíbles. 
                  Con un formato de eliminación directa, cada partida será decisiva. ¡Prepárate para la acción!
                </p>
              </div>
            )}
            {activeTab === "bracket" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Bracket</h2>
                <Bracket tournamentName={selectedCard[2]} />
              </div>
            )}
            {activeTab === "partidas" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Partidas</h2>
                <p className="text-gray-300">
                  Aquí se mostrarán las partidas programadas, incluyendo horarios y enfrentamientos. 
                  Mantente atento para conocer los detalles de cada ronda.
                </p>
              </div>
            )}
            {activeTab === "inscritos" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Inscritos</h2>
                <p className="text-gray-300">
                  Actualmente, hay 78 jugadores inscritos en este torneo. ¡No pierdas la oportunidad de unirte y demostrar tu habilidad!
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
                    <p className="text-lg font-bold mt-2">Premio: $100</p>
                  </div>
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className="text-5xl text-gray-400">🥈</span>
                    <h3 className="text-xl font-bold mt-2">2do Lugar</h3>
                    <p className="text-lg font-bold mt-2">Premio: $50</p>
                  </div>
                  <div className="bg-[#003f7f] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className="text-5xl text-orange-400">🥉</span>
                    <h3 className="text-xl font-bold mt-2">3er Lugar</h3>
                    <p className="text-lg font-bold mt-2">Premio: $25</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "reglas" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Reglas</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Juego limpio: No se permite el uso de hacks o trampas.</li>
                  <li>Respeto entre jugadores: Conducta ofensiva resultará en descalificación.</li>
                  <li>Puntualidad: Los jugadores deben estar presentes según el horario.</li>
                  <li>Las decisiones de los organizadores son finales.</li>
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
