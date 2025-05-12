import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Bracket from "@components/Componentes Competicion/BracketComponent";
import Inscripciones from "@components/Componentes Detalles/Inscripciones";
import InscriptionForm from "@components/Componentes Detalles/InscriptionForm"; // Import the form as a pop-up
import ReportPlayerForm from "@components/Componentes Detalles/ReportPlayerForm"; // Import the pop-up form

const TabContent = ({ activeTab, selectedCard, setShowMatchModal, setSelectedMatch }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [registeredPlayers, setRegisteredPlayers] = useState(() => {
    // Retrieve registered players from localStorage
    const savedRegisteredPlayers = localStorage.getItem("registeredPlayers");
    return savedRegisteredPlayers ? parseInt(savedRegisteredPlayers, 10) : 126; // Default to 126
  });

  const [confirmedPlayers, setConfirmedPlayers] = useState(() => {
    // Retrieve confirmed players from localStorage
    const savedConfirmedPlayers = localStorage.getItem("confirmedPlayers");
    return savedConfirmedPlayers ? parseInt(savedConfirmedPlayers, 10) : 0;
  });

  const [showInscriptionForm, setShowInscriptionForm] = useState(false); // State to control the pop-up
  const [showReportForm, setShowReportForm] = useState(false); // State to control the pop-up

  const [confirmedPlayersList, setConfirmedPlayersList] = useState([
    { name: "Equipo A", avatar: "https://via.placeholder.com/40" },
    { name: "Equipo B", avatar: "https://via.placeholder.com/40" },
  ]); // Example confirmed players

  const [pendingPlayersList, setPendingPlayersList] = useState([
    { name: "Equipo C", avatar: "https://via.placeholder.com/40" },
  ]); // Example pending players

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleUpdateRegisteredPlayers = (newCount) => {
    setRegisteredPlayers(newCount); // Update state
    localStorage.setItem("registeredPlayers", newCount); // Save to localStorage
  };

  const handleUpdateConfirmedPlayers = (newCount) => {
    setConfirmedPlayers(newCount); // Update state
    localStorage.setItem("confirmedPlayers", newCount); // Save to localStorage
  };

  const handleJoinTournament = () => {
    setShowInscriptionForm(true); // Show the pop-up
  };

  const closeInscriptionForm = () => {
    setShowInscriptionForm(false); // Close the pop-up
  };

  const handleReportPlayer = () => {
    setShowReportForm(true); // Show the pop-up
  };

  const closeReportForm = () => {
    setShowReportForm(false); // Close the pop-up
  };

  const handleCardClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  useEffect(() => {
    // Ensure registered players are updated from localStorage on mount
    const savedRegisteredPlayers = localStorage.getItem("registeredPlayers");
    if (savedRegisteredPlayers) {
      setRegisteredPlayers(parseInt(savedRegisteredPlayers, 10));
    }

    // Ensure confirmed players are updated from localStorage on mount
    const savedConfirmedPlayers = localStorage.getItem("confirmedPlayers");
    if (savedConfirmedPlayers) {
      setConfirmedPlayers(parseInt(savedConfirmedPlayers, 10));
    }
  }, []);

  const handleViewMoreClick = (match) => {
    setSelectedMatch(match);
    setShowMatchModal(true);
    document.body.style.overflow = "hidden"; // Block scrolling
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {activeTab === "resumen" && (
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-1">
            {/* Formato */}
            <div className="flex flex-col justify-center items-start relative text-white p-6">
              <h3 className="text-2xl font-extrabold mb-4 text-justify">Información General</h3>
              <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                Este torneo adopta un formato de eliminación directa, cuidadosamente estructurado para garantizar que únicamente los <span className="text-[#1AA9FF]">mejores equipos</span> avancen a las fases decisivas del evento. Esta modalidad fomenta una competencia intensa desde el primer enfrentamiento.
                
                Cada enfrentamiento se disputará al mejor de <span className="text-[#1AA9FF]">3 mapas</span>, lo que brinda a los equipos múltiples oportunidades para demostrar su dominio técnico, su capacidad estratégica y su habilidad para adaptarse a distintas situaciones dentro del juego.

                Gracias a este formato, se asegura una competencia <span className="text-[#1AA9FF]">emocionante</span>, <span className="text-[#1AA9FF]">justa</span> y repleta de momentos inolvidables para todos los participantes y espectadores.
              </p>

              <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                Actualmente, contamos con un total de <span className="text-[#1AA9FF]">{registeredPlayers} jugadores</span> registrados oficialmente para participar en este torneo. Este número refleja el creciente interés por formar parte de esta competencia.

                De ese grupo, <span className="text-[#1AA9FF]">{confirmedPlayers} jugadores</span> ya han confirmado su participación, asegurando así su lugar en la contienda y su compromiso con el desarrollo del torneo.

                El límite establecido para este torneo es de <span className="text-[#1AA9FF]">32 equipos</span>, por lo que se recomienda a los interesados completar su registro lo antes posible para evitar quedarse fuera.
              </p>

              <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                El mapa oficial seleccionado para este torneo es <span className="text-[#1AA9FF]"><b>Howling Abyss</b></span>, ampliamente reconocido por su diseño singular, su dinámica fluida y los retos estratégicos que plantea para los equipos.

                El modo de juego será <span className="text-[#1AA9FF]"><b>Destroy Nexus</b></span>, en el cual los equipos competirán intensamente con el objetivo principal de destruir la base enemiga, lo que añade un componente de presión y estrategia constantes.

                En cuanto al sistema de selección, se utilizará el formato <span className="text-[#1AA9FF]"><b>Blind Pick</b></span>, lo que implica que cada equipo seleccionará a sus campeones sin conocer las elecciones del adversario, potenciando así la creatividad y la sorpresa en cada partida.
              </p>
            </div>

          </div>

          <div className="flex flex-col gap-6 mt-6">
            {/* Reglas */}
            <div className="flex flex-col justify-center items-start relative text-white p-6">
              <h3 className="text-[30px] font-extrabold mb-4 text-justify pb-2">Reglamento</h3>
              <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                Está absolutamente prohibido el uso de hacks, trampas o cualquier tipo de software que otorgue ventajas injustas. Cualquier infracción a esta norma conllevará la <span className="text-red-500">descalificación inmediata</span> del jugador o equipo implicado.
              </p>
              <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                Se exige que todos los jugadores mantengan en todo momento una conducta <span className="text-green-500">respetuosa</span> tanto dentro como fuera del juego. Cualquier comportamiento ofensivo, discriminatorio o provocador será sancionado severamente.
              </p>
              <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                La <span className="text-blue-500">asistencia puntual</span> a las partidas programadas es indispensable. Los retrasos no justificados podrán resultar en la pérdida automática del enfrentamiento correspondiente.
              </p>
              <p className="text-xl text-gray-300 text-justify">
                Las decisiones tomadas por el comité organizador serán <span className="text-yellow-500">definitivas</span> y no estarán sujetas a apelación. Se recomienda acatar las directrices con profesionalismo y espíritu deportivo.
              </p>
            </div>

            {/* Premios */}
            <div className="relative text-white p-6">
              <h3 className="text-2xl font-extrabold mb-4 text-center border-b-2 border-gray-300 pb-2">Premios</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2 px-4 text-yellow-400 text-xl font-bold">🏆 1er Puesto</th>
                    <th className="py-2 px-4 text-gray-300 text-xl">Por decidir</th>
                    <th className="py-2 px-4 text-yellow-400 text-right text-xl">€300</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 px-4 text-gray-400 text-xl font-bold">🥈 2º Puesto</td>
                    <td className="py-2 px-4 text-gray-300 text-xl">Por decidir</td>
                    <td className="py-2 px-4 text-gray-400 text-right text-xl">€150</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 text-orange-400 text-xl font-bold">🥉 3er Puesto</td>
                    <td className="py-2 px-4 text-gray-300 text-xl">Por decidir</td>
                    <td className="py-2 px-4 text-orange-400 text-right text-xl">€50</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-gray-300 text-xl text-center">
                Estos premios han sido pensados para reconocer y recompensar el esfuerzo, la dedicación y el alto rendimiento de los equipos participantes a lo largo del torneo.
              </p>
            </div>
          </div>
        </div>

      )}
      {activeTab === "bracket" && (
        <div>
          <Bracket tournamentName={selectedCard[2]} />
        </div>
      )}
      {activeTab === "partidas" && (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">Partidas</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Match 1 */}
            <div className="bg-[#1c1c1c] text-white p-12 rounded-lg shadow-lg flex justify-between items-center flex-col min-[568px]:flex-row h-30 gap-8"> {/* Reduced height */}
              <div>
                <h3 className="text-xl font-bold">Partida 1</h3>
                <p className="text-sm text-gray-300">Fecha: 29/03/2025</p> {/* Fecha pasada */}
                <span className="text-red-500 text-sm">Finalizado</span> {/* Cambiado a Finalizado */}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">2</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Dragons</p>
                </div>
                <div className="w-px h-10 bg-gray-500"></div> {/* Línea en medio */}
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Wolves</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="hidden md:block px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 1,
                      team1: "Dragons",
                      team2: "Wolves",
                      globalResult: { team1Wins: 2, team2Wins: 0 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 13,
                          team2Score: 11,
                        },
                        {
                          map: "Ascent",
                          team1Score: 13,
                          team2Score: 8,
                        },
                        {
                          map: "Haven",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
                {/* Mobile Buttons */}
                <button
                  className="md:hidden px-3 py-1 text-sm bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 1,
                      team1: "Dragons",
                      team2: "Wolves",
                      globalResult: { team1Wins: 2, team2Wins: 0 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 13,
                          team2Score: 11,
                        },
                        {
                          map: "Ascent",
                          team1Score: 13,
                          team2Score: 8,
                        },
                        {
                          map: "Haven",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="md:hidden px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
              </div>
            </div>
            {/* Match 2 */}
            <div className="bg-[#1c1c1c] text-white p-12 rounded-lg shadow-lg flex justify-between items-center flex-col min-[568px]:flex-row h-30 gap-8"> {/* Reduced height */}
              <div>
                <h3 className="text-xl font-bold">Partida 2</h3>
                <p className="text-sm text-gray-300">Fecha: 30/03/2025</p> {/* Fecha pasada */}
                <span className="text-red-500 text-sm">Finalizado</span> {/* Cambiado a Finalizado */}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">1</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Titans</p>
                </div>
                <div className="w-px h-10 bg-gray-500"></div> {/* Línea en medio */}
                <div className="text-center">
                  <p className="text-2xl font-bold">2</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Warriors</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="hidden md:block px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 2,
                      team1: "Titans",
                      team2: "Warriors",
                      globalResult: { team1Wins: 1, team2Wins: 2 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 13,
                          team2Score: 11,
                        },
                        {
                          map: "Ascent",
                          team1Score: 8,
                          team2Score: 13,
                        },
                        {
                          map: "Haven",
                          team1Score: 11,
                          team2Score: 13,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
                {/* Mobile Buttons */}
                <button
                  className="md:hidden px-3 py-1 text-sm bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 2,
                      team1: "Titans",
                      team2: "Warriors",
                      globalResult: { team1Wins: 1, team2Wins: 2 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 13,
                          team2Score: 11,
                        },
                        {
                          map: "Ascent",
                          team1Score: 8,
                          team2Score: 13,
                        },
                        {
                          map: "Haven",
                          team1Score: 11,
                          team2Score: 13,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="md:hidden px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
              </div>
            </div>
            {/* Match 3 */}
            <div className="bg-[#1c1c1c] text-white p-12 rounded-lg shadow-lg flex justify-between items-center flex-col min-[568px]:flex-row h-30 gap-8"> {/* Reduced height */}
              <div>
                <h3 className="text-xl font-bold">Partida 3</h3>
                <p className="text-sm text-gray-300">Fecha: 10/04/2025</p> {/* Fecha futura */}
                <span className="text-blue-400 text-sm">Esperando</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Sharks</p>
                </div>
                <div className="w-px h-10 bg-gray-500"></div> {/* Línea en medio */}
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Eagles</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="hidden md:block px-4 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 3,
                      team1: "Sharks",
                      team2: "Eagles",
                      globalResult: { team1Wins: 0, team2Wins: 0 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                        {
                          map: "Ascent",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                        {
                          map: "Haven",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
                {/* Mobile Buttons */}
                <button
                  className="md:hidden px-3 py-1 text-sm bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                  onClick={() =>
                    handleViewMoreClick({
                      matchNumber: 3,
                      team1: "Sharks",
                      team2: "Eagles",
                      globalResult: { team1Wins: 0, team2Wins: 0 },
                      games: [
                        {
                          map: "Split",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                        {
                          map: "Ascent",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                        {
                          map: "Haven",
                          team1Score: 0,
                          team2Score: 0,
                          undisputed: true,
                        },
                      ],
                    })
                  }
                >
                  Ver más
                </button>
                <button
                  className="md:hidden px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={handleReportPlayer} // Trigger the pop-up
                >
                  Reportar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showReportForm && <ReportPlayerForm closeForm={closeReportForm} />}
      {activeTab === "inscritos" && (
        <Inscripciones
          confirmedPlayersList={confirmedPlayersList}
          pendingPlayersList={pendingPlayersList}
        />
      )}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{modalContent.title}</h2>
            <div className="space-y-4 text-lg">
              {modalContent.title === "Formato" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    El torneo sigue un formato de eliminación directa, diseñado para garantizar que solo los mejores equipos avancen a las etapas finales.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    Cada partida se juega al mejor de 3 mapas, lo que permite a los equipos demostrar su habilidad y adaptabilidad en diferentes escenarios.
                  </p>
                  <p>
                    Este formato asegura una competencia emocionante y justa para todos los participantes.
                  </p>
                </>
              )}
              {modalContent.title === "Equipos" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    Actualmente, hay <b>{registeredPlayers}</b> jugadores registrados para este torneo.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    De estos, <b>{confirmedPlayers}</b> jugadores han confirmado su participación.
                  </p>
                  <p>
                    El torneo tiene un límite de 32 equipos, así que asegúrate de registrarte pronto para asegurar tu lugar.
                  </p>
                </>
              )}
              {modalContent.title === "Ajustes de partida" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    El mapa seleccionado para este torneo es <b>Howling Abyss</b>, conocido por su diseño único y desafíos estratégicos.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    El modo de juego será <b>Destroy Nexus</b>, donde los equipos competirán para destruir la base enemiga.
                  </p>
                  <p>
                    El modo de selección será <b>Blind Pick</b>, lo que significa que los equipos seleccionarán sus campeones sin conocer las elecciones del oponente.
                  </p>
                </>
              )}
              {modalContent.title === "Información del torneo/Reglas" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    <b>Juego limpio:</b> No se permite el uso de hacks o trampas. Cualquier infracción resultará en descalificación inmediata.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    <b>Respeto:</b> Se espera que todos los jugadores mantengan una conducta respetuosa. El comportamiento ofensivo no será tolerado.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    <b>Puntualidad:</b> Los jugadores deben estar presentes según el horario establecido para evitar retrasos.
                  </p>
                  <p>
                    <b>Decisiones finales:</b> Las decisiones de los organizadores son definitivas y no están sujetas a apelación.
                  </p>
                </>
              )}
              {modalContent.title === "Premios" && (
                <>
                  <p className="border-b border-gray-700 pb-2">
                    <b>1er Puesto:</b> El equipo ganador recibirá un premio de <b>€300</b>, junto con el reconocimiento como campeón del torneo.
                  </p>
                  <p className="border-b border-gray-700 pb-2">
                    <b>2º Puesto:</b> El subcampeón será recompensado con <b>€150</b>.
                  </p>
                  <p>
                    <b>3er Puesto:</b> El equipo que termine en tercer lugar obtendrá un premio de <b>€50</b>.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Estos premios están diseñados para recompensar el esfuerzo y la dedicación de los equipos participantes.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabContent;