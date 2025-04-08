import React, { useState } from "react";
import MatchModal from "@components/Componentes Detalles/MatchModal"; // Import MatchModal component

const CuadrosBracket = ({ positions }) => {
  const [highlightedTeam, setHighlightedTeam] = useState(null); // State to track highlighted team
  const [modalTeam, setModalTeam] = useState(null); // State to track the team for the modal

  const handleMouseEnter = (team) => setHighlightedTeam(team); // Highlight team on hover
  const handleMouseLeave = () => setHighlightedTeam(null); // Remove highlight on mouse leave
  const handleTeamClick = (team) => setModalTeam(team); // Open modal with team details
  const closeModal = () => setModalTeam(null); // Close modal

  const getTeamStyle = (team) => {
    if (team === finalWinner) return "bg-yellow-500 text-black font-bold"; // Always highlight winner
    if (highlightedTeam === team) return "bg-green-500 text-white"; // Highlight on hover with a distinct color
    return "";
  };

  const getCardStyle = (team) => {
    return highlightedTeam === team ? "border-green-500 shadow-lg" : "border-gray-700"; // Highlight card border on hover
  };

  const winnerStyle = "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold";
  const scoreWinnerStyle = "text-white font-bold px-2 py-1";

  const teamNames = [
    "Dragons", "Warriors", "Titans", "Phoenix", "Sharks", "Wolves", "Eagles", "Lions",
    "Bears", "Panthers", "Hawks", "Tigers", "Bulls", "Raptors", "Knights", "Spartans",
    "Vikings", "Samurais", "Ninjas", "Pirates", "Gladiators", "Raiders", "Giants", "Cyclones",
    "Storm", "Thunder", "Lightning", "Blaze", "Inferno", "Tornadoes", "Avalanche", "Quakes"
  ];

  const teamMembers = {
    Dragons: ["Alice", "Bob", "Charlie"],
    Warriors: ["David", "Eve", "Frank"],
    Titans: ["Grace", "Heidi", "Ivan"],
  };

  const dieciseisavosWinners = [
    "Dragons", "Titans", "Sharks", "Eagles", "Bears", "Hawks", "Bulls", "Knights",
    "Vikings", "Ninjas", "Gladiators", "Giants", "Storm", "Lightning", "Inferno", "Avalanche"
  ];

  const octavosWinners = [
    "Dragons", "Sharks", "Bears", "Bulls", "Vikings", "Gladiators", "Storm", "Inferno"
  ];

  const cuartosWinners = [
    "Dragons", "Bears", "Vikings", "Storm"
  ];

  const semifinalWinners = [
    "Dragons", "Storm"
  ];

  const finalWinner = "Dragons";
  const secondPlaceWinner = "Storm";
  const thirdPlaceWinner = "Bears";

  return (
    <>
      <div className="flex text-xs font-semibold mb-6 relative z-10 justify-center">
        {['RONDA DE 32', 'OCTAVOS DE FINAL', 'CUARTOS DE FINAL', 'SEMIFINALES', 'FINAL Y 3ER PUESTO'].map((round, i) => (
          <div key={`round-header-${i}`} className="w-1/5 px-1">
            <div className="bg-blue-600 bg-opacity-20 py-2 text-center rounded border-l-2 border-blue-500">
              {round}
            </div>
          </div>
        ))}
      </div>

      <div className="flex relative z-10 justify-center">
        <div className="absolute inset-0 bg-gray-900 w-[10%] h-[120%] -z-10"> {/* Increased width and height to 120% */}
        </div>
        <div className="w-1/4 pr-2"> {/* Dieciseisavos */}
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`dieciseisavos-${i}`} className="mb-8 relative ml-8" style={{ top: positions.dieciseisavos[i].top }}>
              <a
                href="#"
                className="absolute top-[-1.5rem] left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  MatchModal.open(`Partida ${i + 1}`); // Trigger MatchModal popup
                }}
              >
                Partida {i + 1}
              </a>
              <div className={`bg-gray-800 ${getCardStyle(teamNames[i * 2])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(teamNames[i * 2])}`}
                  onMouseEnter={() => handleMouseEnter(teamNames[i * 2])}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-bold text-white"
                    onClick={() => handleTeamClick(teamNames[i * 2])}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${teamNames[i * 2].toLowerCase()}.png`} alt={`${teamNames[i * 2]} logo`} className="w-full h-full object-cover" />
                    </div>
                    {teamNames[i * 2]}
                  </button>
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(teamNames[i * 2 + 1])}`}
                  onMouseEnter={() => handleMouseEnter(teamNames[i * 2 + 1])}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-bold text-white"
                    onClick={() => handleTeamClick(teamNames[i * 2 + 1])}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${teamNames[i * 2 + 1].toLowerCase()}.png`} alt={`${teamNames[i * 2 + 1]} logo`} className="w-full h-full object-cover" />
                    </div>
                    {teamNames[i * 2 + 1]}
                  </button>
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 1 : 2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Repeat similar structure for Octavos, Cuartos, Semifinales, and Final */}
        <div className="w-1/4 pr-2"> {/* Octavos */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`octavos-${i}`} className="mb-8 relative ml-8" style={{ top: positions.octavos[i].top }}>
              <button
                className="absolute top-[-1.5rem] left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
                onClick={() => alert(`Botón clicado para Partida ${i + 17}`)}
              >
                Partida {i + 17}
              </button>
              <div className={`bg-gray-800 ${getCardStyle(dieciseisavosWinners[i * 2])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(dieciseisavosWinners[i * 2])}`}
                  onMouseEnter={() => handleMouseEnter(dieciseisavosWinners[i * 2])}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-bold text-white"
                    onClick={() => handleTeamClick(dieciseisavosWinners[i * 2])}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${dieciseisavosWinners[i * 2].toLowerCase()}.png`} alt={`${dieciseisavosWinners[i * 2]} logo`} className="w-full h-full object-cover" />
                    </div>
                    {dieciseisavosWinners[i * 2]}
                  </button>
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(dieciseisavosWinners[i * 2 + 1])}`}
                  onMouseEnter={() => handleMouseEnter(dieciseisavosWinners[i * 2 + 1])}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-bold text-white"
                    onClick={() => handleTeamClick(dieciseisavosWinners[i * 2 + 1])}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${dieciseisavosWinners[i * 2 + 1].toLowerCase()}.png`} alt={`${dieciseisavosWinners[i * 2 + 1]} logo`} className="w-full h-full object-cover" />
                    </div>
                    {dieciseisavosWinners[i * 2 + 1]}
                  </button>
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 1 : 2}</span>
                </div>
              </div>
              <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from dieciseisavos to octavos */}
              <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[4rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[5rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[3rem] bg-white"></div> {/* Additional vertical line */}
              <div className="absolute left-[-2rem] top-[calc(50%+6rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              <div className="absolute left-[-2rem] bottom-[calc(50%+5rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
            </div>
          ))}
        </div>
        <div className="w-1/4 pr-2"> {/* Cuartos */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`cuartos-${i}`} className="mb-16 relative ml-8" style={{ top: positions.cuartos[i].top }}>
              <button
                className="absolute top-[-1.5rem] left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
                onClick={() => alert(`Botón clicado para Partida ${i + 25}`)}
              >
                Partida {i + 25}
              </button>
              <div className={`bg-gray-800 ${getCardStyle(octavosWinners[i * 2])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(octavosWinners[i * 2])}`}
                  onMouseEnter={() => handleMouseEnter(octavosWinners[i * 2])}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-bold text-white"
                    onClick={() => handleTeamClick(octavosWinners[i * 2])}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${octavosWinners[i * 2].toLowerCase()}.png`} alt={`${octavosWinners[i * 2]} logo`} className="w-full h-full object-cover" />
                    </div>
                    {octavosWinners[i * 2]}
                  </button>
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 2 : 1}</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(octavosWinners[i * 2 + 1])}`}
                  onMouseEnter={() => handleMouseEnter(octavosWinners[i * 2 + 1])}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-bold text-white"
                    onClick={() => handleTeamClick(octavosWinners[i * 2 + 1])}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${octavosWinners[i * 2 + 1].toLowerCase()}.png`} alt={`${octavosWinners[i * 2 + 1]} logo`} className="w-full h-full object-cover" />
                    </div>
                    {octavosWinners[i * 2 + 1]}
                  </button>
                  <span className={scoreWinnerStyle}>{i % 2 === 0 ? 1 : 2}</span>
                </div>
              </div>
              <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from octavos to cuartos */}
              <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[14rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[11rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] top-[calc(50%+5rem)] w-[1px] h-[5rem] bg-white"></div> {/* Additional vertical line */}
              <div className="absolute left-[-2rem] top-[calc(50%+14rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              <div className="absolute left-[-2rem] bottom-[calc(50%+11rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
            </div>
          ))}
        </div>
        <div className="w-1/4 pr-2"> {/* Semifinales */}
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={`semifinales-${i}`} className="mb-16 relative ml-8" style={{ top: positions.semifinales[i].top }}>
              <button
                className="absolute top-[-1.5rem] left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
                onClick={() => alert(`Botón clicado para Partida ${i + 29}`)}
              >
                Partida {i + 29}
              </button>
              <div className={`bg-gray-800 ${getCardStyle(cuartosWinners[i * 2])} text-sm rounded overflow-hidden shadow-lg w-[12rem]`}>
                <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(cuartosWinners[i * 2])}`}
                  onMouseEnter={() => handleMouseEnter(cuartosWinners[i * 2])}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-bold text-white"
                    onClick={() => handleTeamClick(cuartosWinners[i * 2])}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${cuartosWinners[i * 2].toLowerCase()}.png`} alt={`${cuartosWinners[i * 2]} logo`} className="w-full h-full object-cover" />
                    </div>
                    {cuartosWinners[i * 2]}
                  </button>
                  <span className={scoreWinnerStyle}>2</span>
                </div>
                <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(cuartosWinners[i * 2 + 1])}`}
                  onMouseEnter={() => handleMouseEnter(cuartosWinners[i * 2 + 1])}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-bold text-white"
                    onClick={() => handleTeamClick(cuartosWinners[i * 2 + 1])}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                      <img src={`/logos/${cuartosWinners[i * 2 + 1].toLowerCase()}.png`} alt={`${cuartosWinners[i * 2 + 1]} logo`} className="w-full h-full object-cover" />
                    </div>
                    {cuartosWinners[i * 2 + 1]}
                  </button>
                  <span className={scoreWinnerStyle}>1</span>
                </div>
              </div>
              <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from cuartos to semifinal */}
              <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[27rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[24rem] bg-white"></div> {/* Vertical line */}
              <div className="absolute left-[-1rem] top-[calc(50%+9rem)] w-[1px] h-[9rem] bg-white"></div> {/* Additional vertical line */}
              <div className="absolute left-[-2rem] top-[calc(50%+27rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
              <div className="absolute left-[-2rem] bottom-[calc(50%+24rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
            </div>
          ))}
        </div>
        <div className="w-1/4 pr-2"> {/* Final */}
          <div className="mt-20 mb-16 relative ml-8" style={{ top: positions.final.top }}>
            <button
              className="absolute top-[-1.5rem] left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
              onClick={() => alert(`Botón clicado para Partida 31`)}
            >
              Partida 31
            </button>
            <div className="bg-gray-800 border border-blue-600 text-sm rounded overflow-hidden shadow-lg w-[12rem]">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center bg-gray-800 bg-opacity-80 hover:bg-gray-700 transition-colors duration-150 ${winnerStyle} ${getTeamStyle(finalWinner)}`}
                onMouseEnter={() => handleMouseEnter(finalWinner)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center font-bold text-white"
                  onClick={() => handleTeamClick(finalWinner)}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${finalWinner.toLowerCase()}.png`} alt={`${finalWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  {finalWinner}
                </button>
                <span className={scoreWinnerStyle}>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(secondPlaceWinner)}`}
                onMouseEnter={() => handleMouseEnter(secondPlaceWinner)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center font-bold text-white"
                  onClick={() => handleTeamClick(secondPlaceWinner)}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${secondPlaceWinner.toLowerCase()}.png`} alt={`${secondPlaceWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  {secondPlaceWinner}
                </button>
                <span className={scoreWinnerStyle}>1</span>
              </div>
            </div>
            <div className="absolute left-[-1rem] top-[50%] w-[1rem] h-[1px] bg-white"></div> {/* Line from semifinal to final */}
            <div className="absolute left-[-1rem] top-[50%] w-[1px] h-[30rem] bg-white"></div> {/* Vertical line */}
            <div className="absolute left-[-1rem] bottom-[50%] w-[1px] h-[52rem] bg-white"></div> {/* Vertical line */}
            <div className="absolute left-[-1rem] top-[calc(50%+17rem)] w-[1px] h-[32rem] bg-white"></div> {/* Additional vertical line */}
            <div className="absolute left-[-2rem] top-[calc(50%+49rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
            <div className="absolute left-[-2rem] bottom-[calc(50%+52rem)] w-[1rem] h-[1px] bg-white"></div> {/* New horizontal line */}
          </div>
          <div className="mt-44 mb-16 relative ml-8" style={{ top: positions.tercerPuesto.top }}>
            <button
              className="absolute top-[-1.5rem] left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
              onClick={() => alert(`Botón clicado para Partida 32`)}
            >
              Partida 32
            </button>
            <div className="bg-gray-800 border border-gray-700 text-sm rounded overflow-hidden shadow-lg w-[12rem]">
              <div className={`border-b border-gray-700 py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(thirdPlaceWinner)}`}
                onMouseEnter={() => handleMouseEnter(thirdPlaceWinner)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center font-bold text-white"
                  onClick={() => handleTeamClick(thirdPlaceWinner)}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${thirdPlaceWinner.toLowerCase()}.png`} alt={`${thirdPlaceWinner} logo`} className="w-full h-full object-cover" />
                  </div>
                  {thirdPlaceWinner}
                </button>
                <span className={scoreWinnerStyle}>2</span>
              </div>
              <div className={`py-2 px-3 flex justify-between items-center hover:bg-gray-700 transition-colors duration-150 ${getTeamStyle(cuartosWinners[3])}`}
                onMouseEnter={() => handleMouseEnter(cuartosWinners[3])}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center font-bold text-white"
                  onClick={() => handleTeamClick(cuartosWinners[3])}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-500 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`/logos/${cuartosWinners[3].toLowerCase()}.png`} alt={`${cuartosWinners[3]} logo`} className="w-full h-full object-cover" />
                  </div>
                  {cuartosWinners[3]}
                </button>
                <span className={scoreWinnerStyle}>1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5">
          <div className="mt-16 flex flex-col items-center">
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden"> {/* Added overflow-hidden */}
          <div className="bg-black text-white rounded-lg p-6 w-1/3 h-[85%] flex flex-col justify-center items-center relative"> {/* Increased height to h-[85%] */}
            <h2 className="text-3xl font-bold mb-14 text-center">{modalTeam}</h2> {/* Increased margin above the title */}
            <div className="relative mb-8 w-full"> {/* Adjusted margin to move the line higher */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 w-3/4 h-full items-center justify-center mb-6"> {/* Added mb-4 for spacing */}
              {["ShadowHunter", "BlazeFury", "NightWolf", "IronClaw", "StormBreaker"].map((nick, index) => (
                <div
                  key={`team1-player-${index}`}
                  className="flex items-center text-white p-4 rounded-lg shadow-lg bg-[#1c1c1c]" // Updated background color
                >
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <p className="text-sm font-bold ml-4">{nick}</p>
                </div>
              ))}
            </div>
            <button
              className="absolute bottom-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" // Centered close button
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CuadrosBracket;