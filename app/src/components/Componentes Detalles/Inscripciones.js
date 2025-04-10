import React, { useEffect, useState } from "react";

const Inscripciones = ({ confirmedPlayersList, pendingPlayersList }) => {
  // Define the missing state variables
  const [showModal, setShowModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [successConfirmationModal, setSuccessConfirmationModal] = useState(false);

  useEffect(() => {
    if (showModal || warningModal || confirmationModal || successConfirmationModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [showModal, warningModal, confirmationModal, successConfirmationModal]);

  return (
    <div id="inscription-section" className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Inscripciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Confirmados */}
        <div className="bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Confirmados</h3>
          {confirmedPlayersList.length > 0 ? (
            <ul className="space-y-4">
              {confirmedPlayersList.map((player, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={player.avatar || "https://via.placeholder.com/40"}
                      alt={player.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <span className="text-lg font-semibold">{player.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">
              No hay jugadores confirmados en este momento.
            </p>
          )}
        </div>

        {/* Sin Confirmar */}
        <div className="bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Sin Confirmar</h3>
          {pendingPlayersList.length > 0 ? (
            <ul className="space-y-4">
              {pendingPlayersList.map((player, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={player.avatar || "https://via.placeholder.com/40"}
                      alt={player.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <span className="text-lg font-semibold">{player.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">
              No hay jugadores sin confirmar en este momento.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inscripciones;