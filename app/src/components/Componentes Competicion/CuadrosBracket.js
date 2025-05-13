import React, { useState, useRef } from "react";
import MatchModal from "../Componentes Detalles/MatchModal"; // Importa el componente que muestra el modal del partido
import MatchDetailsPopup from "../Componentes Detalles/MatchDetailsPopup"; // Importa el componente que muestra los detalles emergentes del partido
import RondasComponent from "./RondasComponent";
import Dieciseisavos from "./DieciseisavosComponent";
import Octavos from "./OctavosComponent";
import Cuartos from "./CuartosComponent";
import Semis from "./SemisComponent";
import Final from "./FinalComponent";
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



  return (
    <div className="overflow-hidden no-scrollbar bg-black min-h-screen "> 
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <RondasComponent></RondasComponent>

      <div
        ref={bracketRef}
        className="flex relative z-10 justify-center h-[3000px] w-full select-none overflow-auto "
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="absolute inset-0 bg-black w-full h-full -z-10"></div>
        
        <Dieciseisavos positions = {positions}></Dieciseisavos>
        <Octavos positions = {positions}></Octavos>
        <Cuartos positions = {positions}></Cuartos>
        <Semis positions = {positions}></Semis>
        <Final positions = {positions}></Final>
        
        


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
    </div>
  );
};


export default CuadrosBracket;