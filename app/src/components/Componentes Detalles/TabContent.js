import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bracket from "@components/Componentes Competicion/BracketComponent";
import Inscripciones from "@components/Componentes Detalles/Inscripciones";
import InscriptionForm from "@components/Componentes Detalles/InscriptionForm";
import ReportPlayerForm from "@components/Componentes Detalles/ReportPlayerForm";

const TabContent = ({ activeTab, selectedCard, setShowMatchModal, setSelectedMatch }) => {
  const navigate = useNavigate(); 
  const [registeredPlayers, setRegisteredPlayers] = useState(() => {
    const savedRegisteredPlayers = localStorage.getItem("registeredPlayers");
    return savedRegisteredPlayers ? parseInt(savedRegisteredPlayers, 10) : 126; 
  });

  const [confirmedPlayers, setConfirmedPlayers] = useState(() => {
    const savedConfirmedPlayers = localStorage.getItem("confirmedPlayers");
    return savedConfirmedPlayers ? parseInt(savedConfirmedPlayers, 10) : 0;
  });

  const [showInscriptionForm, setShowInscriptionForm] = useState(false); 
  const [showReportForm, setShowReportForm] = useState(false); 

  const [confirmedPlayersList, setConfirmedPlayersList] = useState([
    { name: "Equipo A", avatar: "https://via.placeholder.com/40" },
    { name: "Equipo B", avatar: "https://via.placeholder.com/40" },
  ]);

  const [pendingPlayersList, setPendingPlayersList] = useState([
    { name: "Equipo C", avatar: "https://via.placeholder.com/40" },
  ]); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleUpdateRegisteredPlayers = (newCount) => {
    setRegisteredPlayers(newCount); 
    localStorage.setItem("registeredPlayers", newCount); 
  };

  const handleUpdateConfirmedPlayers = (newCount) => {
    setConfirmedPlayers(newCount);
    localStorage.setItem("confirmedPlayers", newCount); 
  };

  const handleJoinTournament = () => {
    setShowInscriptionForm(true); 
  };

  const closeInscriptionForm = () => {
    setShowInscriptionForm(false); 
  };

  const handleReportPlayer = () => {
    setShowReportForm(true);
  };

  const closeReportForm = () => {
    setShowReportForm(false); 
  };

  const handleCardClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = "auto"; 
  };

  useEffect(() => {
    const savedRegisteredPlayers = localStorage.getItem("registeredPlayers");
    if (savedRegisteredPlayers) {
      setRegisteredPlayers(parseInt(savedRegisteredPlayers, 10));
    }

    const savedConfirmedPlayers = localStorage.getItem("confirmedPlayers");
    if (savedConfirmedPlayers) {
      setConfirmedPlayers(parseInt(savedConfirmedPlayers, 10));
    }
  }, []); 

  const handleViewMoreClick = (match) => {
    setSelectedMatch(match);
    setShowMatchModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto overflow-x-auto ">
      {activeTab === "resumen" && (
        <div className="flex flex-col lg:flex-row gap-4">
          

          <div className="">
            <div className="bg-[#1c1c1c] flex relative rounded flex-col items-start text-white p-6 h-[32rem]  lg:w-[24rem]">
              <div className="w-full z-10 justify-center items-start">
                
                <div className="flex flex-row items-start justify-between">
                  <h3 className="text-2xl font-extrabold mb-4 text-left">DISCORD-ESKILL</h3>
                  
                  <button
                    className="px-2 py-1 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-sm hover:bg-[#0077b6] transition z-10"
                  >
                    ENTRAR
                  </button>
                </div>

                <div className="flex flex-col items-start space-y-2 mt-4">
                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">JUEGO</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">VALORANT</p>
                  </div>

                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">TORNEO</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">VALORANT OPEN</p>
                  </div>

                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">PRECIO</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">GRATUITO</p>
                  </div>

                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">INICIA</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">2025-08-15 12:12:00</p>
                  </div>

                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">MODALIDAD</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">5VS5</p>
                  </div>

                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">PARTIDOS</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">AL MEJOR DE 3</p>
                  </div>

                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">RONDA RÁPIDA</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">NO</p>
                  </div>
                </div>
              </div>
            </div>



            <div className="bg-[#1c1c1c] flex relative mt-12 rounded flex-col items-start text-white p-6  lg:w-[24rem]">
              <div className="w-full z-10 justify-center items-start">
                
                <div className="flex flex-row items-start justify-between">
                  <h3 className="text-2xl font-extrabold mb-4 text-left text-yellow-500">Premios</h3>
                  
                  
                </div>

                <div className="flex flex-col items-start space-y-2 mt-4">
                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-yellow-500 text-lg font-bold">1ero</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">POR DECIDIR</p>
                    <p className="py-2 px-4 text-yellow-500 text-lg font-bold">300€</p>

                  </div>

                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">2ndo</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">POR DECIDIR</p>
                    <p className="py-2 px-4 text-gray-400 text-lg font-bold">150€</p>

                  </div>

                  <div className="flex w-full justify-between items-center">
                    <p className="py-2 px-4 text-orange-600 text-lg font-bold">3ero</p>
                    <p className="py-2 px-4 text-white text-lg font-bold">POR DECIDIR</p>
                    <p className="py-2 px-4 text-orange-600 text-lg font-bold">50€</p>

                  </div>
                
                </div>
              </div>
            </div>            
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1">
            
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

            <div className="flex flex-col gap-6 mt-6">
            
              <div className="flex flex-col justify-center items-start relative text-white p-6">
                <h3 className="text-2xl font-extrabold mb-4 text-justify pb-2">Reglamento</h3>
                <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                  Está absolutamente prohibido el uso de hacks, trampas o cualquier tipo de software que otorgue ventajas injustas. Cualquier infracción a esta norma conllevará la <span className="tex[#1AA9FF]">descalificación inmediata</span> del jugador o equipo implicado.
                </p>
                <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                  Se exige que todos los jugadores mantengan en todo momento una conducta <span className="text-[#1AA9FF]">respetuosa</span> tanto dentro como fuera del juego. Cualquier comportamiento ofensivo, discriminatorio o provocador será sancionado severamente.
                </p>
                <p className="text-xl mb-2 text-gray-300 text-justify pb-2">
                  La <span className="text-[#1AA9FF]">asistencia puntual</span> a las partidas programadas es indispensable. Los retrasos no justificados podrán resultar en la pérdida automática del enfrentamiento correspondiente.
                </p>
                <p className="text-xl text-gray-300 text-justify">
                  Las decisiones tomadas por el comité organizador serán <span className="text-[#1AA9FF]">definitivas</span> y no estarán sujetas a apelación. Se recomienda acatar las directrices con profesionalismo y espíritu deportivo.
                </p>
              </div>

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
            <div className="bg-black border-blue-500 border-b-2 text-white p-12  shadow-lg flex justify-between items-center flex-col min-[568px]:flex-row h-30 gap-8"> {/* Reduced height */}
              <div>
                <h3 className="text-xl font-bold">Partida 1</h3>
                <p className="text-sm text-gray-300">Fecha: 29/03/2025</p> 
                <span className="text-red-500 text-sm">Finalizado</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">2</p>
                  <hr className="border-gray-500 my-1" /> 
                  <p className="text-sm text-gray-300">Dragons</p>
                </div>
                <div className="w-px h-10 bg-gray-500"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <hr className="border-gray-500 my-1" /> {/* Línea debajo */}
                  <p className="text-sm text-gray-300">Wolves</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="hidden md:block px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
                  className="md:hidden px-3 py-1 text-sm bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
            <div className="bg-black border-blue-500 border-b-2 text-white p-12  shadow-lg flex justify-between items-center flex-col min-[568px]:flex-row h-30 gap-8"> {/* Reduced height */}
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
                  className="hidden md:block px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
                  className="md:hidden px-3 py-1 text-sm bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
            <div className="bg-black border-blue-500 border-b-2 text-white p-12  shadow-lg flex justify-between items-center flex-col min-[568px]:flex-row h-30 gap-8"> {/* Reduced height */}
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
                  className="hidden md:block px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
                  className="md:hidden px-3 py-1 text-sm bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
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
                    Estos premios están diseñados para poder recompensar el esfuerzo y la dedicación de los equipos participantes.
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