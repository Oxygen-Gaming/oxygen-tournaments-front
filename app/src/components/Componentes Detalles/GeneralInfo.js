import React from "react";

const GeneralInfo = ({ registeredPlayers, confirmedPlayers }) => {
  return (
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
  );
};

export default GeneralInfo;