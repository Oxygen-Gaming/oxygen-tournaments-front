import React from "react";

const Regulations = () => {
  return (
    <div className="flex flex-col justify-center items-start relative text-white p-6">
                <h3 className="text-2xl font-extrabold mb-4 text-justify pb-2">Reglamento</h3>
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
  );
};

export default Regulations;