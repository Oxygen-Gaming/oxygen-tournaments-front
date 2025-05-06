import React, { useState, useRef } from "react";
import MatchModal from "../Componentes Detalles/MatchModal"; // Importa el componente que muestra el modal del partido
import MatchDetailsPopup from "../Componentes Detalles/MatchDetailsPopup"; // Importa el componente que muestra los detalles emergentes del partido

const CuadrosBracket = ({ positions }) => {
  // Estado para mantener el equipo resaltado
  const [highlightedTeam, setHighlightedTeam] = useState(null);
  
  // Estado para mantener el equipo seleccionado para mostrar en el modal
  const [modalTeam, setModalTeam] = useState(null);
  
  // Ref para hacer referencia al contenedor del bracket (el cual permite desplazar)
  const bracketRef = useRef(null);
  
  // Estado para saber si estamos arrastrando el bracket
  const [isDragging, setIsDragging] = useState(false);
  
  // Estado que guarda las coordenadas del inicio del arrastre
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // Estado que guarda las coordenadas del scroll al momento de comenzar el arrastre
  const [scrollStart, setScrollStart] = useState({ x: 0, y: 0 });
  
  // Estado para manejar la visibilidad del detalle del partido
  const [showMatchDetails, setShowMatchDetails] = useState(false);
  
  // Estado que guarda el partido seleccionado para mostrar sus detalles
  const [selectedMatch, setSelectedMatch] = useState(null);


  

  
  // Función para manejar el clic sobre un equipo, estableciendo el equipo seleccionado en el modal
  const handleTeamClick = (team) => setModalTeam(team);
  
  // Función para cerrar el modal del equipo
  const closeModal = () => setModalTeam(null);

  // Función para manejar el inicio del arrastre (cuando el mouse es presionado)
  const handleMouseDown = (e) => {
    setIsDragging(true); // Cambiar el estado de arrastre a verdadero
    setDragStart({ x: e.clientX, y: e.clientY }); // Guardar la posición de inicio del mouse
    setScrollStart({
      x: bracketRef.current.scrollLeft, // Guardar el scroll inicial en el eje X
      y: bracketRef.current.scrollTop,  // Guardar el scroll inicial en el eje Y
    });
  };

  // Función para manejar el movimiento del mouse, arrastrando el bracket
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Si no se está arrastrando, no hacer nada
    const dy = e.clientY - dragStart.y; // Calcular el desplazamiento vertical del mouse
    bracketRef.current.scrollTop = scrollStart.y - dy; // Mover el scroll según el movimiento del mouse
  };

  // Función para manejar cuando se suelta el mouse (fin del arrastre)
  const handleMouseUp = () => setIsDragging(false);

  // Función para manejar el clic en un partido, mostrando los detalles del partido
  const handleMatchClick = (matchNumber, team1, team2) => {
    setSelectedMatch({
      matchNumber,
      team1,
      team2
    });
    setShowMatchDetails(true); // Mostrar los detalles del partido seleccionado
  };

  // Función para determinar el estilo de la tarjeta del equipo (para mostrar su cuadro)
  const getCardStyle = (team) => {
    return `bg-gray-800 ${highlightedTeam === team ? "border-gray-600 shadow-lg" : "border-gray-700"}`; // Si es el equipo resaltado, aplicar borde y sombra especial
  };

  // Estilos específicos para el ganador (finalista)


  // Lista de nombres de equipos
  const teamNames = [
    "Dragons", "Warriors", "Titans", "Phoenix", "Sharks", "Wolves", "Eagles", "Lions",
    "Bears", "Panthers", "Hawks", "Tigers", "Bulls", "Raptors", "Knights", "Spartans",
    "Vikings", "Samurais", "Ninjas", "Pirates", "Gladiators", "Raiders", "Giants", "Cyclones",
    "Storm", "Thunder", "Lightning", "Blaze", "Inferno", "Tornadoes", "Avalanche", "Quakes"
  ];

  // Equipos ganadores de la primera ronda (16avos de final)
  const dieciseisavosWinners = [
    "Dragons", "Titans", "Sharks", "Eagles", "Bears", "Hawks", "Bulls", "Knights",
    "Vikings", "Ninjas", "Gladiators", "Giants", "Storm", "Lightning", "Inferno", "Avalanche"
  ];

  // Equipos ganadores de los octavos de final
  const octavosWinners = [
    "Dragons", "Sharks", "Bears", "Bulls", "Vikings", "Gladiators", "Storm", "Inferno"
  ];

  // Equipos ganadores de los cuartos de final
  const cuartosWinners = [
    "Dragons", "Bears", "Vikings", "Storm"
  ];

  // Equipos ganadores de las semifinales
  const semifinalWinners = [
    "Dragons", "Storm"
  ];

  // Ganador final, subcampeón y tercer lugar
  const finalWinner = "Dragons";
  const secondPlaceWinner = "Storm";
  const thirdPlaceWinner = "Bears";

  // Descripción de las rondas (partidas)
  const partidas = ['16 partidas','8 partidas','4 partidas','2 partidas','1 partida'];


  return (
    <div className="overflow-hidden no-scrollbar bg-[#1c1c1c] min-h-screen "> 
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

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

      <div
        ref={bracketRef}
        className="flex relative z-10 justify-center h-[3000px] w-full select-none overflow-auto "
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="absolute inset-0 bg-[#1c1c1c] w-full h-full -z-10"></div>
        <div className="w-1/4 pr-2"> {/* Dieciseisavos */}
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`dieciseisavos-${i}`} className="mb-8 relative ml-8" style={{ top: positions.dieciseisavos[i].top }}>
              <button
                className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500"
              >
                Partida {i + 1}
              </button>
              <div className={`${getCardStyle(teamNames[i * 2])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                  
                >
                  <div className="flex items-center font-bold text-white">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${teamNames[i * 2].toLowerCase()}.png`} alt={`${teamNames[i * 2]} logo`} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-yellow-500">{teamNames[i * 2]}</p> 
                  </div>
                  <span >{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center transition-colors duration-150 $`}
                  
                >
                  <div className="flex items-center font-bold text-white">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${teamNames[i * 2 + 1].toLowerCase()}.png`} alt={`${teamNames[i * 2 + 1]} logo`} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-blue-500">{teamNames[i * 2 + 1]}</p>
                  </div>
                  <span>{i % 2 === 0 ? 1 : 2}</span>
                </div>
                <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                  <button 
                    onClick={() => handleMatchClick(i + 1, teamNames[i * 2], teamNames[i * 2 + 1])}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    Ver Detalles
                  </button>
                </div> 
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-1/5 pr-2"> {/* Octavos de Final */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`octavos-${i}`} className="mb-8 relative ml-8" style={{ top: positions.octavos[i].top }}>
              <button
                className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500"
              >
                Partida {i + 17}
              </button>
              <div className={`${getCardStyle(dieciseisavosWinners[i * 2])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                  
                >
                  <div className="flex items-center font-bold text-white">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${dieciseisavosWinners[i * 2].toLowerCase()}.png`} alt={`${dieciseisavosWinners[i * 2]} logo`} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-yellow-500">{dieciseisavosWinners[i * 2]}</p>
                    
                  </div>
                  <span>{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                 
                >
                  <div className="flex items-center font-bold text-white">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${dieciseisavosWinners[i * 2 + 1].toLowerCase()}.png`} alt={`${dieciseisavosWinners[i * 2 + 1]} logo`} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-blue-500">{dieciseisavosWinners[i * 2 + 1]}</p>
                  </div>
                  <span>{i % 2 === 0 ? 1 : 2}</span>
                </div>
                <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                  <button 
                    onClick={() => handleMatchClick(i + 17, dieciseisavosWinners[i * 2], dieciseisavosWinners[i * 2 + 1])}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
              <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div>
              <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[3rem] bg-white"></div>
              <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[8rem] bg-white"></div>
              <div className="absolute left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[2rem] bg-white"></div>
              <div className="absolute left-[-2rem] top-[calc(50%+5rem)] w-[1rem] h-[1px] bg-white"></div>
              <div className="absolute left-[-2rem] bottom-[calc(50%+8rem)] w-[1rem] h-[1px] bg-white"></div>
            </div>
          ))}
        </div>
        
        <div className="w-1/5 pr-2"> {/* Cuartos de Final */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`cuartos-${i}`} className="mb-16 relative ml-8" style={{ top: positions.cuartos[i].top }}>
              <button
                className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500"
              >
                Partida {i + 25}
              </button>
              <div className={`${getCardStyle(octavosWinners[i * 2])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                  
                >
                  <div className="flex items-center font-bold text-white">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${octavosWinners[i * 2].toLowerCase()}.png`} alt={`${octavosWinners[i * 2]} logo`} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-yellow-500">{octavosWinners[i * 2]}</p>
                   
                  </div>
                  <span>{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center transition-colors duration-150 $`}
                  
                >
                  <div className="flex items-center font-bold text-white">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${octavosWinners[i * 2 + 1].toLowerCase()}.png`} alt={`${octavosWinners[i * 2 + 1]} logo`} className="w-full h-full object-cover" />
                    </div>
                    
                    <p className="text-blue-500">{octavosWinners[i * 2 + 1]}</p>
                  </div>
                  <span>{i % 2 === 0 ? 1 : 2}</span>
                </div>
                <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                  <button 
                    onClick={() => handleMatchClick(i + 25, octavosWinners[i * 2], octavosWinners[i * 2 + 1])}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
              <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div>
              <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[12rem] bg-white"></div>
              <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[16rem] bg-white"></div>
              <div className="absolute left-[-1rem] top-[calc(50%+5rem)] w-[1px] h-[5rem] bg-white"></div>
              <div className="absolute left-[-2rem] top-[calc(50%+12rem)] w-[1rem] h-[1px] bg-white"></div>
              <div className="absolute left-[-2rem] bottom-[calc(50%+16rem)] w-[1rem] h-[1px] bg-white"></div>
            </div>
          ))}
        </div>
        
        <div className="w-1/4 pr-2"> {/* Semifinales */}
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={`semifinales-${i}`} className="mb-16 relative ml-8" style={{ top: positions.semifinales[i].top }}>
              <button
                className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500"
              >
                Partida {i + 29}
              </button>
              <div className={`${getCardStyle(cuartosWinners[i * 2])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center transition-colors duration-150 `}

                 
                >
                  <div className="flex items-center font-bold text-white">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${cuartosWinners[i * 2].toLowerCase()}.png`} alt={`${cuartosWinners[i * 2]} logo`} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-yellow-500">{cuartosWinners[i * 2]}</p>
                  </div>
                  <span>2</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center transition-colors duration-150 $`}
                  
                >
                  <div className="flex items-center font-bold text-white">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${cuartosWinners[i * 2 + 1].toLowerCase()}.png`} alt={`${cuartosWinners[i * 2 + 1]} logo`} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-blue-500">{octavosWinners[i * 2 + 1]}</p>
                  </div>
                  <span>1</span>
                </div>
                <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                  <button 
                    onClick={() => handleMatchClick(i + 29, cuartosWinners[i * 2], cuartosWinners[i * 2 + 1])}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
              <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div>
              <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[27rem] bg-white"></div>
              <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[30rem] bg-white"></div>
              <div className="absolute left-[-1rem] top-[calc(50%+9rem)] w-[1px] h-[9rem] bg-white"></div>
              <div className="absolute left-[-2rem] top-[calc(50%+27rem)] w-[1rem] h-[1px] bg-white"></div>
              <div className="absolute left-[-2rem] bottom-[calc(50%+30rem)] w-[1rem] h-[1px] bg-white"></div>
            </div>
          ))}
        </div>
        <div className="w-1/4 pr-2"> {/* Final */}
          <div className="mt-20 mb-16 relative ml-8" style={{ top: positions.final.top }}>
            <button
              className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500"
            >
              Partida 31
            </button>
            <div className="bg-gray-800 text-sm rounded overflow-hidden shadow-lg w-[12rem]">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-cente bg-opacity-80 transition-colors duration-150  text-gold`}>
                <div className="flex items-center font-bold text-white">
                  <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${finalWinner.toLowerCase()}.png`} alt={`${finalWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-yellow-500">{finalWinner}</p>
                  
                </div>
                <span>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                
              >
                <div className="flex items-center font-bold text-white">
                  <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${secondPlaceWinner.toLowerCase()}.png`} alt={`${secondPlaceWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-blue-500">{secondPlaceWinner}</p>
                  
                </div>
                <span >1</span>
              </div>
              <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                <button 
                  onClick={() => handleMatchClick(31, finalWinner, secondPlaceWinner)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
            <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div>
            <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[30rem] bg-white"></div>
            <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[58rem] bg-white"></div>
            <div className="absolute left-[-1rem] top-[calc(50%+17rem)] w-[1px] h-[40rem] bg-white"></div>
            <div className="absolute left-[-2rem] top-[calc(50%+57rem)] w-[1rem] h-[1px] bg-white"></div>
            <div className="absolute left-[-2rem] bottom-[calc(50%+58rem)] w-[1rem] h-[1px] bg-white"></div>
          </div>
          <div className="mt-44 mb-16 relative ml-8" style={{ top: positions.tercerPuesto.top }}>
            <button
              className="absolute top-[-1.5rem] left-0 text-sm font-bold text-blue-500"
            >
              Partida 32
            </button>
            <div className="bg-gray-800 text-sm rounded overflow-hidden shadow-lg w-[12rem]">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                
              >
                <div className="flex items-center font-bold text-white">
                  <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${thirdPlaceWinner.toLowerCase()}.png`} alt={`${thirdPlaceWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-yellow-500">{secondPlaceWinner}</p>
                  
                </div>
                <span >2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center transition-colors duration-150 `}
                
              >
                <div className="flex items-center font-bold text-white">
                  <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${cuartosWinners[3].toLowerCase()}.png`} alt={`${cuartosWinners[3]} logo`} className="w-full h-full object-cover" />
                  </div>
                  
                  <p className="text-blue-500">{thirdPlaceWinner}</p>
                  
                </div>
                <span>1</span>
              </div>
              <div className="bg-[#1c1c1c] px-3 py-2 flex justify-center">
                <button 
                  onClick={() => handleMatchClick(32, thirdPlaceWinner, cuartosWinners[3])}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden">
          <div className="bg-black text-white rounded-lg p-6 w-1/3 h-[85%] flex flex-col justify-center items-center relative">
            <h2 className="text-3xl font-bold mb-14 text-center">{modalTeam}</h2>
            <div className="grid grid-cols-1 gap-1 w-3/4 h-full items-center justify-center mb-6">
              {["ShadowHunter", "BlazeFury", "NightWolf", "IronClaw", "StormBreaker"].map((nick, index) => (
                <div
                  key={`team1-player-${index}`}
                  className="flex items-center text-white p-4 rounded-lg shadow-lg bg-[#1c1c1c]"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <p className="text-sm font-bold ml-4">{nick}</p>
                </div>
              ))}
            </div>
            <button
              className="absolute bottom-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Match Details Popup */}
      {showMatchDetails && selectedMatch && (
        <MatchDetailsPopup
          matchNumber={selectedMatch.matchNumber}
          team1={selectedMatch.team1}
          team2={selectedMatch.team2}
          onClose={() => setShowMatchDetails(false)}
        />
      )}
    </div>
  );
};

export default CuadrosBracket;